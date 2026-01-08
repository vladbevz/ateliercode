// app/api/contact/route.ts - СПРОЩЕНА ВЕРСІЯ
import { NextRequest, NextResponse } from 'next/server'

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

    // Тимчасово - просто повертаємо успіх
    console.log('📧 Nouveau message reçu:', {
      nom,
      email,
      telephone,
      message: message.substring(0, 100) + '...'
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message envoyé avec succès (simulation)',
        data: { nom, email }
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erreur lors du traitement du message:', error)
    return NextResponse.json(
      { error: 'Une erreur est survenue' },
      { status: 500 }
    )
  }
}

// Додай GET метод для перевірки
export async function GET() {
  return NextResponse.json(
    { status: 'API contact is working' },
    { status: 200 }
  )
}