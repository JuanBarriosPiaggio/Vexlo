import nodemailer from 'nodemailer'
import type { EnquiryFormData } from './validations'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function sendEnquiryEmail(data: EnquiryFormData) {
  if (!process.env.ADMIN_EMAIL || !process.env.SMTP_HOST) {
    console.warn('Email configuration not set up. Skipping email notification.')
    return
  }

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `New Enquiry from ${data.fullName} (${data.industryType})`,
    html: `
      <h2>New Enquiry Received</h2>
      <p><strong>Full Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Industry Type:</strong> ${data.industryType}</p>
      ${data.companyName ? `<p><strong>Company Name:</strong> ${data.companyName}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
  } catch (error) {
    console.error('Error sending email:', error)
    // Don't throw - we don't want email failures to break form submission
  }
}
