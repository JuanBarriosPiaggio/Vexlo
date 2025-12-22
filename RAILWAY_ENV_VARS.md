# Railway Environment Variables Guide

## Required Variables

### ✅ MONGO_URL (You already have this!)
- **Purpose**: MongoDB connection string for Prisma
- **Format**: `mongodb://host:port/database` or `mongodb+srv://cluster.mongodb.net/database`
- **Status**: ✅ Already configured
- **Note**: The app will automatically add `/vexlo` as the database name if missing

## Optional but Recommended Variables

### NEXT_PUBLIC_SITE_URL
- **Purpose**: Your website URL (used for SEO, sitemap, canonical URLs, Open Graph tags)
- **Format**: `https://vexlo.co.uk` (or your Railway domain)
- **Default**: Falls back to `https://vexlo.co.uk` if not set
- **Recommended**: Set this to your actual Railway domain (e.g., `https://your-app.railway.app`)

### ADMIN_EMAIL
- **Purpose**: Email address to receive enquiry notifications
- **Format**: `admin@vexlo.co.uk` (or your email)
- **Status**: Optional - form submissions will still work without it
- **Note**: You'll only receive email notifications if SMTP is configured

## Email Notification Variables (Optional)

These are only needed if you want to receive email notifications when someone submits an enquiry form. The form will work fine without them.

### SMTP_HOST
- **Purpose**: SMTP server hostname for sending emails
- **Examples**: 
  - Gmail: `smtp.gmail.com`
  - SendGrid: `smtp.sendgrid.net`
  - Mailgun: `smtp.mailgun.org`
  - Railway Email: Check Railway's email service documentation

### SMTP_PORT
- **Purpose**: SMTP server port
- **Default**: `587` (if not set)
- **Common values**: `587` (TLS), `465` (SSL), `25` (unencrypted, not recommended)

### SMTP_USER
- **Purpose**: SMTP authentication username
- **Format**: Your email address or SMTP username

### SMTP_PASSWORD
- **Purpose**: SMTP authentication password
- **Format**: Your email password or SMTP API key
- **Note**: For Gmail, you may need an "App Password" instead of your regular password

## Summary

### Minimum Required (App will work with just this):
- ✅ **MONGO_URL** - You already have this!

### Recommended for Production:
- **NEXT_PUBLIC_SITE_URL** - Set to your Railway domain

### Optional (For email notifications):
- **ADMIN_EMAIL** - Where to send enquiry notifications
- **SMTP_HOST** - SMTP server
- **SMTP_PORT** - SMTP port (defaults to 587)
- **SMTP_USER** - SMTP username
- **SMTP_PASSWORD** - SMTP password

## Quick Setup

1. **Set NEXT_PUBLIC_SITE_URL** (recommended):
   ```
   NEXT_PUBLIC_SITE_URL=https://your-app.railway.app
   ```
   Or your custom domain if you have one.

2. **For Email Notifications** (optional):
   If you want to receive emails when someone submits the form, configure:
   - ADMIN_EMAIL
   - SMTP_HOST
   - SMTP_USER
   - SMTP_PASSWORD
   - SMTP_PORT (optional, defaults to 587)

## Testing

- The app will work with just `MONGO_URL`
- Form submissions will save to MongoDB
- Email notifications will be skipped if SMTP is not configured (this is fine!)
- Check `/api/health` endpoint to verify database connection

