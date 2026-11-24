'use client';

import { useId, useState, type FormEvent } from 'react';
import { Check } from 'lucide-react';
import { buttonClass } from './ui';

type Variant = 'audit' | 'contact';

type FieldProps = {
  id: string;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  textarea?: boolean;
  disabled?: boolean;
  inputMode?: 'url' | 'tel' | 'email' | 'text';
};

const inputCls =
  'mt-2 block w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-500 transition-[border-color,box-shadow] duration-150 hover:border-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10 disabled:cursor-not-allowed disabled:bg-gray-50';

function Field({ id, label, name, type = 'text', required, autoComplete, placeholder, textarea, disabled, inputMode }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-[15px] font-medium text-gray-900">
        {label}
        {!required && <span className="font-normal text-gray-500"> (optionnel)</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={5}
          placeholder={placeholder}
          disabled={disabled}
          className={`${inputCls} resize-y min-h-32`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          disabled={disabled}
          inputMode={inputMode}
          spellCheck={type === 'email' || type === 'url' ? false : undefined}
          className={inputCls}
        />
      )}
    </div>
  );
}

export default function FormContact({ variant }: { variant: Variant }) {
  const uid = useId();
  const id = (n: string) => `${uid}-${n}`;
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  const isAudit = variant === 'audit';
  const sending = status === 'sending';

  // Le bouton est un vrai type="submit" : l'envoi passe uniquement par onSubmit
  // (Entrée au clavier, clic, validation native HTML). Pas d'onClick.
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, type: variant }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'L’envoi a échoué.');
      form.reset();
      setStatus('sent');
    } catch (err) {
      setStatus('error');
      setError(
        err instanceof TypeError
          ? 'Connexion impossible. Vérifiez votre réseau et réessayez, ou écrivez à contact@ateliercode.fr.'
          : `${err instanceof Error ? err.message : 'L’envoi a échoué.'} Réessayez ou écrivez à contact@ateliercode.fr.`
      );
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="rounded-lg border border-gray-200 bg-white p-8 md:p-10">
        <span className="flex h-11 w-11 items-center justify-center rounded-md bg-gray-900 text-white">
          <Check className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-gray-900">
          {isAudit ? 'Demande d’audit envoyée' : 'Message envoyé'}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
          {isAudit
            ? 'Vous recevrez votre rapport sous 48 heures. Un email de confirmation vient de partir.'
            : 'On vous répond sous 24 heures. Un email de confirmation vient de partir.'}
        </p>
        <button type="button" onClick={() => setStatus('idle')} className={buttonClass('secondary', 'mt-8')}>
          {isAudit ? 'Faire une autre demande' : 'Envoyer un autre message'}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={sending}
      className="rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5">
        <Field id={id('nom')} name="nom" label="Prénom / Nom" required autoComplete="name" placeholder="Jean Dupont" disabled={sending} />
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id={id('email')} name="email" type="email" label="Email" required autoComplete="email" inputMode="email" placeholder="jean@entreprise.fr" disabled={sending} />
          <Field id={id('tel')} name="telephone" type="tel" label="Téléphone" autoComplete="tel" inputMode="tel" placeholder="06 12 34 56 78" disabled={sending} />
        </div>
        {isAudit ? (
          <Field id={id('site')} name="site" type="url" label="Site web actuel" autoComplete="url" inputMode="url" placeholder="https://votresite.fr" disabled={sending} />
        ) : (
          <Field id={id('sujet')} name="sujet" label="Sujet / projet" required placeholder="Ex. application de suivi d’équipes…" disabled={sending} />
        )}
        <Field
          id={id('message')}
          name="message"
          label={isAudit ? 'Message / contexte' : 'Message'}
          required={!isAudit}
          textarea
          placeholder={
            isAudit
              ? 'Votre activité, ce qui vous pose problème, ce que vous aimeriez améliorer…'
              : 'Décrivez votre besoin, vos contraintes, vos délais…'
          }
          disabled={sending}
        />
      </div>

      <div aria-live="polite" className="empty:hidden mt-5">
        {status === 'error' && (
          <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-[15px] text-red-700">{error}</p>
        )}
      </div>

      <button type="submit" disabled={sending} className={buttonClass('primary', 'mt-6 w-full disabled:cursor-wait disabled:opacity-70')}>
        {sending && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden="true" />}
        {sending ? 'Envoi…' : isAudit ? 'Demander mon audit' : 'Envoyer'}
      </button>
      <p className="mt-4 text-sm text-gray-500">
        {isAudit ? 'Gratuit. Sans engagement.' : 'Réponse sous 24 heures.'} Vos données servent uniquement à vous répondre.
      </p>
    </form>
  );
}
