import { NextResponse } from 'next/server'

const recipientEmail = 'don@relayeci.com'

function readField(value: unknown, maximumLength: number) {
  return typeof value === 'string'
    ? value.trim().slice(0, maximumLength)
    : ''
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 500 }
      )
    }

    const body = await request.json()

    const firstName = readField(body.firstName, 80)
    const lastName = readField(body.lastName, 80)
    const email = readField(body.email, 200)
    const company = readField(body.company, 150)
    const team = readField(body.team, 100)
    const website = readField(body.website, 200)

    // Hidden spam field
    if (website) {
      return NextResponse.json({ success: true })
    }

    if (!firstName || !lastName || !email || !company || !team) {
      return NextResponse.json(
        { error: 'Please complete every field.' },
        { status: 400 }
      )
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (!validEmail) {
      return NextResponse.json(
        { error: 'Please enter a valid work email.' },
        { status: 400 }
      )
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Relay ECI Website <website@notifications.relayeci.com>',
        to: [recipientEmail],
        reply_to: email,
        subject: `Relay demo request — ${company}`,
        text: [
          'New Relay ECI demo request',
          '',
          `Name: ${firstName} ${lastName}`,
          `Work email: ${email}`,
          `Company: ${company}`,
          `Team: ${team}`,
          '',
          'Submitted through relayeci.com',
        ].join('\n'),
      }),
    })

    if (!resendResponse.ok) {
      const resendError = await resendResponse.text()
      console.error('Resend error:', resendError)

      return NextResponse.json(
        { error: 'The demo request could not be sent.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Demo request error:', error)

    return NextResponse.json(
      { error: 'The demo request could not be sent.' },
      { status: 500 }
    )
  }
}