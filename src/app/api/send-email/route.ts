import { NextRequest, NextResponse } from 'next/server';

interface EmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, phone }: EmailRequest = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, subject, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // For now, we'll simulate sending an email
    // In production, you would integrate with services like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - AWS SES
    // - Resend
    // - EmailJS

    const emailData = {
      to: 'techinfo@neurozic.com',
      from: email,
      subject: `[Neurozic Website] ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <p><em>Sent from Neurozic Software Solutions website</em></p>
      `
    };

    // Simulate email sending with a delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Log the email data (in production, this would be the actual email sending)
    console.log('Email would be sent:', emailData);

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully! We\'ll get back to you within 24 hours.',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}