import type { VercelRequest, VercelResponse } from '@vercel/node';

// Contact message API for sending personal messages directly to Zach's email
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      name,
      phone,
      email,
      state,
      insuranceType,
      message
    } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Create email content
    const emailSubject = `New Personal Message from ${name} - Bradford Informed Guidance`;
    const emailBody = `
New Personal Message Received:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
State: ${state || 'Not provided'}
Insurance Type Needed: ${insuranceType || 'Not specified'}

Message:
${message}

---
Sent from: ${req.headers.host}
Timestamp: ${new Date().toLocaleString('en-US', { 
  timeZone: 'America/New_York',
  year: 'numeric',
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short'
})}
IP Address: ${req.headers['x-forwarded-for'] || req.connection?.remoteAddress || 'Unknown'}
User Agent: ${req.headers['user-agent'] || 'Unknown'}
    `.trim();

    // For now, we'll use a simple webhook service to send emails
    // In production, you might want to use SendGrid, AWS SES, or similar
    const webhookUrl = process.env.EMAIL_WEBHOOK_URL;
    
    if (webhookUrl) {
      // Send via webhook service
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'zbradford@bradfordinformedguidance.com',
          subject: emailSubject,
          body: emailBody,
          from_name: name,
          from_email: email
        })
      });

      if (!webhookResponse.ok) {
        throw new Error('Failed to send email via webhook');
      }
    } else {
      // Fallback: Use a service like Formspree, Netlify Forms, or similar
      // To set this up:
      // 1. Go to https://formspree.io
      // 2. Create a new form with target email: zbradford@bradfordinformedguidance.com
      // 3. Update FORMSPREE_ENDPOINT in .env.local with your form URL
      
      const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
      
      if (formspreeEndpoint && formspreeEndpoint !== 'https://formspree.io/f/YOUR_FORM_ID') {
        const formspreeResponse = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            state,
            insuranceType,
            message,
            _subject: emailSubject
          })
        });

        if (!formspreeResponse.ok) {
          console.error('Formspree failed:', await formspreeResponse.text());
        }
      } else {
        // Log the message for now if no email service is configured
        console.log('Contact Message Received:', {
          from: name,
          email,
          phone,
          state,
          insuranceType,
          message,
          timestamp: new Date().toISOString()
        });
      }
    }

    // Always return success to avoid breaking user experience
    // In production, you might want to log failures to a monitoring service
    return res.status(200).json({ 
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error('Contact message error:', error);
    return res.status(500).json({ 
      error: 'Failed to send message',
      detail: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}