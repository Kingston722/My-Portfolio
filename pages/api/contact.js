import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const fromEmail = process.env.RESEND_FROM_EMAIL || process.env.CONTACT_EMAIL;
    const toEmail = process.env.CONTACT_EMAIL;

    if (!process.env.RESEND_API_KEY || !toEmail) {
      return res.status(500).json({
        error: 'Server email configuration is incomplete. Required: RESEND_API_KEY and CONTACT_EMAIL.',
      });
    }

    const { name, email, subject, message } = req.body;

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({
        error: error.message || 'Email provider rejected the message.',
      });
    }

    if (!data?.id) {
      return res.status(500).json({
        error: 'Email was not accepted by provider.',
      });
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
}
