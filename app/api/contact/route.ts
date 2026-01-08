// app/api/contact/route.ts - ВЕРСІЯ З RESEND
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Ініціалізуємо Resend з вашого API ключа
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { nom, email, telephone, message } = await request.json()

    // Валідація
    if (!nom || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      )
    }

    // Відправляємо email вам (ви отримуєте заявку)
    await resend.emails.send({
      from: 'AtelierCode <contact@ateliercode.fr>',
      to: ['contact@ateliercode.fr'], // Ваш email
      reply_to: email, // Щоб відповідати клієнту
      subject: `🎯 Nouveau message de ${nom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #000000 0%, #111827 100%); padding: 30px; border-radius: 12px; border: 1px solid #374151;">
            <h1 style="color: #FFFFFF; margin-bottom: 10px;">Nouveau message de contact</h1>
            <p style="color: #9CA3AF; margin-bottom: 30px;">AtelierCode - Formulaire de contact</p>
            
            <div style="background: #1F2937; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #374151;">
              <h2 style="color: #FFFFFF; font-size: 18px; margin-bottom: 15px;">📋 Informations du client</h2>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                <div>
                  <p style="color: #9CA3AF; font-size: 14px; margin-bottom: 5px;">Nom complet</p>
                  <p style="color: #FFFFFF; font-weight: 500;">${nom}</p>
                </div>
                
                <div>
                  <p style="color: #9CA3AF; font-size: 14px; margin-bottom: 5px;">Email</p>
                  <p style="color: #FFFFFF; font-weight: 500;">${email}</p>
                </div>
              </div>
              
              <div>
                <p style="color: #9CA3AF; font-size: 14px; margin-bottom: 5px;">Téléphone</p>
                <p style="color: #FFFFFF; font-weight: 500;">${telephone || 'Non fourni'}</p>
              </div>
            </div>
            
            <div style="background: #1F2937; padding: 20px; border-radius: 8px; border: 1px solid #374151;">
              <h2 style="color: #FFFFFF; font-size: 18px; margin-bottom: 15px;">💬 Message</h2>
              <div style="color: #D1D5DB; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #374151;">
              <p style="color: #9CA3AF; font-size: 12px;">
                📧 Pour répondre : Répondre à cet email ou contacter ${email}<br>
                📞 Téléphone client : ${telephone || 'Non fourni'}<br>
                ⏰ Reçu le : ${new Date().toLocaleString('fr-FR')}
              </p>
            </div>
          </div>
        </div>
      `,
    })

    // Відправляємо email підтвердження клієнту
    await resend.emails.send({
      from: 'AtelierCode <contact@ateliercode.fr>',
      to: [email],
      subject: '✅ Message reçu - AtelierCode',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #000000 0%, #111827 100%); padding: 40px; border-radius: 12px; border: 1px solid #374151;">
            <div style="text-align: center; margin-bottom: 30px;">
              <div style="width: 60px; height: 60px; background: #10B981; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                <span style="color: white; font-size: 24px;">✓</span>
              </div>
              <h1 style="color: #FFFFFF; margin-bottom: 10px;">Message envoyé avec succès !</h1>
              <p style="color: #9CA3AF;">Bonjour ${nom}, nous avons bien reçu votre message.</p>
            </div>
            
            <div style="background: #1F2937; padding: 25px; border-radius: 8px; margin-bottom: 30px; border: 1px solid #374151;">
              <h2 style="color: #FFFFFF; font-size: 18px; margin-bottom: 15px;">📋 Récapitulatif</h2>
              <p style="color: #D1D5DB; margin-bottom: 15px; line-height: 1.6;">
                <strong>Votre message :</strong><br>
                "${message.substring(0, 150)}${message.length > 150 ? '...' : ''}"
              </p>
              <p style="color: #9CA3AF; font-size: 14px;">
                Message complet transmis à notre équipe.
              </p>
            </div>
            
            <div style="background: #1F2937; padding: 25px; border-radius: 8px; margin-bottom: 30px; border: 1px solid #374151;">
              <h2 style="color: #FFFFFF; font-size: 18px; margin-bottom: 15px;">⏳ Prochaine étape</h2>
              
              <div style="display: flex; align-items: start; gap: 15px; margin-bottom: 15px;">
                <div style="width: 24px; height: 24px; background: #374151; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <span style="color: #9CA3AF; font-size: 12px;">1</span>
                </div>
                <div>
                  <p style="color: #FFFFFF; font-weight: 500; margin-bottom: 5px;">Analyse de votre projet</p>
                  <p style="color: #9CA3AF; font-size: 14px;">Nous étudions votre demande attentivement</p>
                </div>
              </div>
              
              <div style="display: flex; align-items: start; gap: 15px; margin-bottom: 15px;">
                <div style="width: 24px; height: 24px; background: #374151; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <span style="color: #9CA3AF; font-size: 12px;">2</span>
                </div>
                <div>
                  <p style="color: #FFFFFF; font-weight: 500; margin-bottom: 5px;">Réponse détaillée</p>
                  <p style="color: #9CA3AF; font-size: 14px;">Vous recevrez une réponse sous 24 heures</p>
                </div>
              </div>
              
              <div style="display: flex; align-items: start; gap: 15px;">
                <div style="width: 24px; height: 24px; background: #374151; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  <span style="color: #9CA3AF; font-size: 12px;">3</span>
                </div>
                <div>
                  <p style="color: #FFFFFF; font-weight: 500; margin-bottom: 5px;">Proposition personnalisée</p>
                  <p style="color: #9CA3AF; font-size: 14px;">Devis gratuit adapté à vos besoins</p>
                </div>
              </div>
            </div>
            
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #374151;">
              <p style="color: #9CA3AF; font-size: 14px; margin-bottom: 20px;">
                Besoin d'une réponse rapide ?<br>
                Appelez-nous au <strong style="color: #FFFFFF;">06 12 34 56 78</strong>
              </p>
              
              <div style="display: inline-flex; gap: 10px;">
                <a href="https://ateliercode.fr/processus" style="display: inline-block; padding: 12px 24px; background: #374151; color: #FFFFFF; text-decoration: none; border-radius: 6px; font-size: 14px; transition: background 0.2s;">
                  Découvrir notre processus
                </a>
                <a href="https://ateliercode.fr/tarifs" style="display: inline-block; padding: 12px 24px; background: transparent; color: #FFFFFF; text-decoration: none; border-radius: 6px; font-size: 14px; border: 1px solid #374151; transition: border 0.2s;">
                  Voir nos tarifs
                </a>
              </div>
            </div>
            
            <div style="margin-top: 30px; text-align: center;">
              <p style="color: #6B7280; font-size: 12px;">
                Cet email a été envoyé automatiquement. Merci de ne pas y répondre.<br>
                AtelierCode • contact@ateliercode.fr • 06 12 34 56 78<br>
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