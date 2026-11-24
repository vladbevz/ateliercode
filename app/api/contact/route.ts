// app/api/contact/route.ts
// Reçoit les formulaires /contact (type "contact") et /audit (type "audit").
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Le client est créé à la requête, pas au chargement du module : sinon
// `next build` échoue dès que RESEND_API_KEY manque (ex. déploiements Preview).
function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY
  return key ? new Resend(key) : null
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function esc(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function clean(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 12px 16px; border: 1px solid #E5E7EB; width: 34%; font-size: 12px; color: #6B7280;">${label}</td>
      <td style="padding: 12px 16px; border: 1px solid #E5E7EB; font-size: 15px; color: #111827; font-weight: 600;">${value}</td>
    </tr>`
}

function shell(title: string, body: string) {
  return `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
      <div style="background: #111827; padding: 32px 40px; border-radius: 12px 12px 0 0;">
        <p style="color: #9CA3AF; font-size: 13px; margin: 0 0 6px 0;">AtelierCode</p>
        <h1 style="color: #ffffff; font-size: 22px; font-weight: 700; margin: 0;">${title}</h1>
      </div>
      <div style="border: 1px solid #E5E7EB; border-top: none; border-radius: 0 0 12px 12px; padding: 32px 40px;">
        ${body}
      </div>
    </div>`
}

export async function POST(request: NextRequest) {
  const resend = getResend()
  if (!resend) {
    console.error('RESEND_API_KEY manquante : impossible d’envoyer le formulaire.')
    return NextResponse.json({ error: 'L’envoi est momentanément indisponible.' }, { status: 503 })
  }

  try {
    const raw = await request.json()
    const type: 'audit' | 'contact' = raw?.type === 'audit' ? 'audit' : 'contact'
    const nom = clean(raw?.nom, 120)
    const email = clean(raw?.email, 200)
    const telephone = clean(raw?.telephone, 40)
    const site = clean(raw?.site, 300)
    const sujet = clean(raw?.sujet, 200)
    const message = clean(raw?.message, 5000)

    if (!nom || !email) {
      return NextResponse.json({ error: 'Le nom et l’email sont obligatoires.' }, { status: 400 })
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'L’adresse email semble incorrecte.' }, { status: 400 })
    }
    if (type === 'contact' && (!sujet || !message)) {
      return NextResponse.json({ error: 'Le sujet et le message sont obligatoires.' }, { status: 400 })
    }

    const isAudit = type === 'audit'
    const receivedAt = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })

    const rows = [
      row('Demande', isAudit ? 'Audit digital gratuit' : 'Contact'),
      row('Nom', esc(nom)),
      row('Email', esc(email)),
      row('Téléphone', esc(telephone) || 'Non fourni'),
      isAudit ? row('Site web', esc(site) || 'Non fourni') : row('Sujet', esc(sujet)),
      row('Reçu le', esc(receivedAt)),
    ].join('')

    const internalBody = `
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">${rows}</table>
      <p style="font-size: 12px; color: #6B7280; margin: 0 0 8px 0;">Message</p>
      <div style="background: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 8px; padding: 20px; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${esc(message) || '—'}</div>
      <p style="text-align: center; margin: 32px 0 0 0;">
        <a href="mailto:${esc(email)}" style="display: inline-block; padding: 12px 28px; background: #111827; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 600;">Répondre à ${esc(nom)}</a>
      </p>`

    await resend.emails.send({
      from: 'AtelierCode <contact@ateliercode.fr>',
      to: ['contact@ateliercode.fr'],
      replyTo: email,
      subject: isAudit ? `Demande d’audit — ${nom}` : `Nouveau message — ${nom} : ${sujet}`,
      html: shell(isAudit ? 'Nouvelle demande d’audit' : 'Nouveau message de contact', internalBody),
    })

    const clientBody = `
      <p style="font-size: 15px; color: #374151; line-height: 1.7; margin: 0 0 20px 0;">Bonjour ${esc(nom)},</p>
      <p style="font-size: 15px; color: #374151; line-height: 1.7; margin: 0 0 20px 0;">
        ${isAudit
          ? 'Nous avons bien reçu votre demande d’audit. Vous recevrez un rapport structuré sous 48 heures, avec les points prioritaires et des recommandations concrètes.'
          : 'Nous avons bien reçu votre message. Nous vous répondons sous 24 heures.'}
      </p>
      <p style="font-size: 15px; color: #374151; line-height: 1.7; margin: 0 0 28px 0;">
        Besoin d’une réponse plus rapide ? Appelez le <a href="tel:+33767772915" style="color: #111827; font-weight: 600;">07 67 77 29 15</a>.
      </p>
      <p style="margin: 0 0 8px 0;">
        <a href="https://www.ateliercode.fr/realisations" style="display: inline-block; padding: 12px 24px; background: #111827; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 600;">Voir nos réalisations</a>
      </p>
      <p style="margin-top: 32px; color: #9CA3AF; font-size: 12px;">AtelierCode · 19 rue Ménard, 30000 Nîmes · contact@ateliercode.fr</p>`

    await resend.emails.send({
      from: 'AtelierCode <contact@ateliercode.fr>',
      to: [email],
      subject: isAudit ? 'Demande d’audit reçue — AtelierCode' : 'Message reçu — AtelierCode',
      html: shell(isAudit ? 'Demande d’audit bien reçue' : 'Message bien reçu', clientBody),
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Erreur lors de l’envoi du formulaire :', error)
    return NextResponse.json({ error: 'L’envoi a échoué côté serveur.' }, { status: 500 })
  }
}
