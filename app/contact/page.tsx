import { Mail, Phone, MapPin } from 'lucide-react';
import FormContact from '../components/site/FormContact';
import { Container, JsonLd } from '../components/site/ui';
import { CONTACT, breadcrumbSchema, pageMetadata } from '../lib/site';

export const metadata = pageMetadata({
  title: 'Contact — AtelierCode, agence web à Nîmes',
  description:
    'Parlons de votre projet : site web, application métier ou automatisation. AtelierCode, 19 rue Ménard à Nîmes. Réponse sous 24 heures, audit gratuit sous 48 heures.',
  path: '/contact',
});

const MAP_SRC =
  'https://www.google.com/maps?q=19+rue+M%C3%A9nard,+30000+N%C3%AEmes&z=16&hl=fr&output=embed';

export default function ContactPage() {
  const methods = [
    { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Phone, label: 'Téléphone', value: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: MapPin, label: 'Adresse', value: `${CONTACT.street}, ${CONTACT.postalCode} ${CONTACT.city}`, href: CONTACT.mapsUrl, external: true },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Accueil', path: '/' }, { name: 'Contact', path: '/contact' }])} />

      <section aria-labelledby="contact-title" className="bg-white pt-14 pb-20 md:pt-20 md:pb-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h1
                id="contact-title"
                className="text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-gray-900 text-balance"
              >
                Parlons de votre projet
              </h1>
              <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-gray-600 text-pretty">
                On répond sous 24 heures. Pour un audit gratuit, utilisez le formulaire ou écrivez-nous directement : on revient vers vous avec un premier retour sous 48 heures.
              </p>

              <ul className="mt-10 border-t border-gray-200">
                {methods.map(({ icon: Icon, label, value, href, external }) => (
                  <li key={label} className="border-b border-gray-200">
                    <a
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group flex min-h-16 items-center gap-4 py-3"
                    >
                      <Icon className="h-5 w-5 shrink-0 text-gray-500 group-hover:text-gray-900" strokeWidth={1.75} aria-hidden="true" />
                      <span className="flex flex-col">
                        <span className="text-sm text-gray-500">{label}</span>
                        <span className="text-[17px] text-gray-900 underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-gray-900">
                          {value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-10 overflow-hidden rounded-lg border border-gray-200">
                <iframe
                  src={MAP_SRC}
                  title="Carte : AtelierCode, 19 rue Ménard à Nîmes"
                  className="contact-map block h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <h2 className="sr-only">Formulaire de contact</h2>
              <FormContact variant="contact" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
