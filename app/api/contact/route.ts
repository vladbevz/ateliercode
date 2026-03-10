// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Лейбли для budget і timeline
const budgetLabels: Record<string, string> = {
  '299': 'Moins de 300€',
  '499': '300€ – 500€',
  '799': '500€ – 800€',
  'plus': 'Plus de 800€',
}

const timelineLabels: Record<string, string> = {
  'urgent': 'Très urgent (moins d\'1 semaine)',
  'soon': 'Sous 2–3 semaines',
  'month': 'Dans le mois',
  'flexible': 'Pas de date précise',
}

export async function POST(request: NextRequest) {
  try {
    const { nom, email, telephone, message, budget, timeline } = await request.json()

    // Валідація обов'язкових полів
    if (!nom || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      )
    }

    const budgetLabel = budget ? (budgetLabels[budget] ?? budget) : 'Non précisé'
    const timelineLabel = timeline ? (timelineLabels[timeline] ?? timeline) : 'Non précisé'
    const receivedAt = new Date().toLocaleString('fr-FR')

    // ─── Email pour vous (notification interne) ───────────────────────────────
    await resend.emails.send({
      from: 'AtelierCode <contact@ateliercode.fr>',
      to: ['contact@ateliercode.fr'],
      replyTo: email,
      subject: `🎯 Nouveau message de ${nom}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

          <!-- Header -->
          <div style="background: #111827; padding: 32px 40px; border-radius: 16px 16px 0 0;">
            <p style="color: #9CA3AF; font-size: 13px; margin: 0 0 6px 0; text-transform: uppercase; letter-spacing: 1px;">AtelierCode</p>
            <h1 style="color: #ffffff; font-size: 22px; font-weight: 700; margin: 0;">Nouveau message de contact</h1>
          </div>

          <!-- Body -->
          <div style="border: 1px solid #E5E7EB; border-top: none; border-radius: 0 0 16px 16px; padding: 32px 40px;">

            <!-- Infos client -->
            <div style="margin-bottom: 24px;">
              <p style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #9CA3AF; margin: 0 0 16px 0;">Informations client</p>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 16px; background: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 8px 0 0 0; width: 50%;">
                    <p style="font-size: 11px; color: #9CA3AF; margin: 0 0 4px 0;">Nom complet</p>
                    <p style="font-size: 15px; font-weight: 600; color: #111827; margin: 0;">${nom}</p>
                  </td>
                  <td style="padding: 10px 16px; background: #F9FAFB; border: 1px solid #E5E7EB; border-left: none; border-radius: 0 8px 0 0;">
                    <p style="font-size: 11px; color: #9CA3AF; margin: 0 0 4px 0;">Email</p>
                    <p style="font-size: 15px; font-weight: 600; color: #111827; margin: 0;">${email}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 16px; background: #ffffff; border: 1px solid #E5E7EB; border-top: none; border-radius: 0 0 0 8px;">
                    <p style="font-size: 11px; color: #9CA3AF; margin: 0 0 4px 0;">Téléphone</p>
                    <p style="font-size: 15px; font-weight: 600; color: #111827; margin: 0;">${telephone || 'Non fourni'}</p>
                  </td>
                  <td style="padding: 10px 16px; background: #ffffff; border: 1px solid #E5E7EB; border-top: none; border-left: none; border-radius: 0 0 8px 0;">
                    <p style="font-size: 11px; color: #9CA3AF; margin: 0 0 4px 0;">Reçu le</p>
                    <p style="font-size: 15px; font-weight: 600; color: #111827; margin: 0;">${receivedAt}</p>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Budget & Timeline -->
            <div style="margin-bottom: 24px;">
              <p style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #9CA3AF; margin: 0 0 16px 0;">Projet</p>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 16px; background: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 8px 0 0 8px; width: 50%;">
                    <p style="font-size: 11px; color: #9CA3AF; margin: 0 0 4px 0;">Budget approximatif</p>
                    <p style="font-size: 15px; font-weight: 600; color: #111827; margin: 0;">${budgetLabel}</p>
                  </td>
                  <td style="padding: 10px 16px; background: #F9FAFB; border: 1px solid #E5E7EB; border-left: none; border-radius: 0 8px 8px 0;">
                    <p style="font-size: 11px; color: #9CA3AF; margin: 0 0 4px 0;">Objectif de lancement</p>
                    <p style="font-size: 15px; font-weight: 600; color: #111827; margin: 0;">${timelineLabel}</p>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Message -->
            <div style="margin-bottom: 32px;">
              <p style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #9CA3AF; margin: 0 0 12px 0;">Message</p>
              <div style="background: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 12px; padding: 20px; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</div>
            </div>

            <!-- Quick reply -->
            <div style="text-align: center; padding-top: 24px; border-top: 1px solid #E5E7EB;">
              <a href="mailto:${email}" style="display: inline-block; padding: 12px 28px; background: #111827; color: #ffffff; text-decoration: none; border-radius: 10px; font-size: 14px; font-weight: 600;">
                Répondre à ${nom}
              </a>
            </div>

          </div>
        </div>
      `,
    })

    // ─── Email de confirmation pour le client ─────────────────────────────────
    await resend.emails.send({
      from: 'AtelierCode <contact@ateliercode.fr>',
      to: [email],
      subject: 'Message reçu — AtelierCode',
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

          <!-- Header -->
          <div style="background: #111827; padding: 40px; border-radius: 16px 16px 0 0; text-align: center;">
            <div style="width: 56px; height: 56px; background: #ffffff; border-radius: 14px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px;">
              <span style="font-size: 26px;">✓</span>
            </div>
            <h1 style="color: #ffffff; font-size: 22px; font-weight: 700; margin: 0 0 8px 0;">Message bien reçu !</h1>
            <p style="color: #9CA3AF; font-size: 15px; margin: 0;">Bonjour ${nom}, nous reviendrons vers vous très vite.</p>
          </div>

          <!-- Body -->
          <div style="border: 1px solid #E5E7EB; border-top: none; border-radius: 0 0 16px 16px; padding: 40px;">

            <!-- Récap message -->
            <div style="margin-bottom: 32px;">
              <p style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #9CA3AF; margin: 0 0 12px 0;">Votre message</p>
              <div style="background: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 12px; padding: 20px; color: #374151; font-size: 14px; line-height: 1.7;">
                ${message.substring(0, 200)}${message.length > 200 ? '…' : ''}
              </div>
            </div>

            <!-- Récap projet -->
            <div style="margin-bottom: 32px;">
              <p style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #9CA3AF; margin: 0 0 12px 0;">Votre projet</p>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 16px; background: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 8px 0 0 8px; width: 50%;">
                    <p style="font-size: 11px; color: #9CA3AF; margin: 0 0 4px 0;">Budget</p>
                    <p style="font-size: 14px; font-weight: 600; color: #111827; margin: 0;">${budgetLabel}</p>
                  </td>
                  <td style="padding: 10px 16px; background: #F9FAFB; border: 1px solid #E5E7EB; border-left: none; border-radius: 0 8px 8px 0;">
                    <p style="font-size: 11px; color: #9CA3AF; margin: 0 0 4px 0;">Lancement souhaité</p>
                    <p style="font-size: 14px; font-weight: 600; color: #111827; margin: 0;">${timelineLabel}</p>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Étapes -->
            <div style="margin-bottom: 32px;">
              <p style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: #9CA3AF; margin: 0 0 16px 0;">Prochaines étapes</p>

              <div style="display: flex; align-items: flex-start; gap: 16px; margin-bottom: 16px;">
                <div style="min-width: 28px; height: 28px; background: #111827; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center;">
                  <span style="color: #ffffff; font-size: 12px; font-weight: 700;">1</span>
                </div>
                <div>
                  <p style="font-size: 14px; font-weight: 600; color: #111827; margin: 0 0 2px 0;">Analyse de votre demande</p>
                  <p style="font-size: 13px; color: #6B7280; margin: 0;">Nous étudions votre projet en détail</p>
                </div>
              </div>

              <div style="display: flex; align-items: flex-start; gap: 16px; margin-bottom: 16px;">
                <div style="min-width: 28px; height: 28px; background: #111827; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center;">
                  <span style="color: #ffffff; font-size: 12px; font-weight: 700;">2</span>
                </div>
                <div>
                  <p style="font-size: 14px; font-weight: 600; color: #111827; margin: 0 0 2px 0;">Réponse sous 24h</p>
                  <p style="font-size: 13px; color: #6B7280; margin: 0;">Un retour personnalisé par email ou téléphone</p>
                </div>
              </div>

              <div style="display: flex; align-items: flex-start; gap: 16px;">
                <div style="min-width: 28px; height: 28px; background: #111827; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center;">
                  <span style="color: #ffffff; font-size: 12px; font-weight: 700;">3</span>
                </div>
                <div>
                  <p style="font-size: 14px; font-weight: 600; color: #111827; margin: 0 0 2px 0;">Devis gratuit</p>
                  <p style="font-size: 13px; color: #6B7280; margin: 0;">Une proposition adaptée à votre budget</p>
                </div>
              </div>
            </div>

            <!-- CTA buttons -->
            <div style="text-align: center; padding-top: 24px; border-top: 1px solid #E5E7EB; margin-bottom: 24px;">
              <a href="https://ateliercode.fr/processus" style="display: inline-block; padding: 12px 24px; background: #111827; color: #ffffff; text-decoration: none; border-radius: 10px; font-size: 14px; font-weight: 600; margin: 0 6px 8px;">
                Notre processus
              </a>
              <a href="https://ateliercode.fr/tarifs" style="display: inline-block; padding: 12px 24px; background: #ffffff; color: #111827; text-decoration: none; border-radius: 10px; font-size: 14px; font-weight: 600; border: 1px solid #E5E7EB; margin: 0 6px 8px;">
                Voir les tarifs
              </a>
            </div>

            <!-- Contact rapide -->
            <div style="background: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 12px; padding: 16px 20px; text-align: center;">
              <p style="font-size: 13px; color: #6B7280; margin: 0;">
                Besoin d'une réponse urgente ?
                <a href="tel:+33767772915" style="color: #111827; font-weight: 600; text-decoration: none;"> 07 67 77 29 15</a>
                &nbsp;·&nbsp;
                <a href="https://wa.me/33767772915" style="color: #111827; font-weight: 600; text-decoration: none;">WhatsApp</a>
              </p>
            </div>

            <!-- Footer -->
            <div style="margin-top: 24px; text-align: center;">
              <p style="color: #9CA3AF; font-size: 12px; margin: 0;">
                AtelierCode &nbsp;·&nbsp; contact@ateliercode.fr &nbsp;·&nbsp;
                <a href="https://ateliercode.fr" style="color: #9CA3AF;">ateliercode.fr</a>
              </p>
            </div>

          </div>
        </div>
      `,
    })

    return NextResponse.json(
      { success: true, message: 'Message envoyé avec succès' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error)
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}