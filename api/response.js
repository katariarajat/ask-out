const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { question, answer, timestamp, response } = req.body;

  // Handle both old format (response) and new format (question/answer)
  const questionText = question || 'Coffee Invitation';
  const answerText = answer || response;

  try {
    await resend.emails.send({
      from: 'Coffee Invitation <onboarding@resend.dev>',
      to: process.env.YOUR_EMAIL,
      subject: `📝 New Response: ${questionText}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #667eea;">📝 New Response from Tulsi</h2>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 10px; margin: 15px 0;">
            <p><strong>Question:</strong> ${questionText}</p>
            <p><strong>Answer:</strong> ${answerText}</p>
            <p><strong>Time:</strong> ${new Date(timestamp).toLocaleString()}</p>
          </div>
          ${answerText.includes('inspired') ? '<p style="color: #4CAF50; font-size: 18px;">🎉 She felt inspired by the quote! Great sign!</p>' : ''}
          ${answerText.includes('smile') ? '<p style="color: #ff6b9d; font-size: 18px;">😊 The quote made her smile! She appreciated it!</p>' : ''}
        </div>
      `
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}
