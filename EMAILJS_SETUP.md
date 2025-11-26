# EmailJS Setup Instructions

This guide will help you set up EmailJS to enable email functionality for the contact form.

## 📧 What is EmailJS?

EmailJS is a free service that allows you to send emails directly from JavaScript without backend code. It's perfect for static websites and single-page applications.

## 🚀 Setup Steps

### 1. Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" (it's free)
3. Verify your email address

### 2. Add an Email Service

1. Go to the **Email Services** page
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - **For Gmail:**
     - Select "Gmail"
     - Click "Connect Account"
     - Sign in with `vsontakke100@gmail.com`
     - Allow EmailJS to send emails on your behalf
   - **For other providers:** Follow the provider-specific instructions
4. Note down your **Service ID** (e.g., `service_abc123`)

### 3. Create an Email Template

1. Go to the **Email Templates** page
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Inquiry from {{from_name}} - Nanded Snaps Studio

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service: {{service}}
Preferred Date: {{date}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. In the template settings:
   - **Template Name:** Inquiry Form
   - **To Email:** `vsontakke100@gmail.com`
   - **From Name:** `Nanded Snaps Studio`
   - **Reply To:** `{{reply_to}}`
5. Click **Save**
6. Note down your **Template ID** (e.g., `template_abc123`)

### 4. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abc123XYZ`)
3. Copy this key

### 5. Update the Configuration

1. Open `emailjs.config.ts` in your project
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  serviceID: 'your_service_id_here',    // From step 2
  templateID: 'your_template_id_here',  // From step 3
  publicKey: 'your_public_key_here',    // From step 4
};
```

3. Save the file

### 6. Update Contact Component

The Contact component (`components/Contact.tsx`) needs to import the config:

Replace these lines (around line 23-25):
```typescript
const serviceID = 'service_photo_studio';
const templateID = 'template_inquiry';
const publicKey = 'YOUR_PUBLIC_KEY';
```

With:
```typescript
import { EMAILJS_CONFIG } from '../emailjs.config';

// Then use in the code:
const serviceID = EMAILJS_CONFIG.serviceID;
const templateID = EMAILJS_CONFIG.templateID;
const publicKey = EMAILJS_CONFIG.publicKey;
```

### 7. Test the Form

1. Run your development server: `npm run dev`
2. Navigate to the Contact section
3. Fill out the form with test data
4. Click "Send Inquiry"
5. Check `vsontakke100@gmail.com` for the email

## 📊 EmailJS Free Tier Limits

- **200 emails/month** for free
- **10 emails/minute** rate limit
- Upgrade available if you need more

## 🔒 Security Notes

1. **Public Key is safe to expose** - It's meant to be public
2. **Never commit `.env` files** with sensitive keys (though EmailJS public key is okay)
3. **Add spam protection** if needed (EmailJS has built-in reCAPTCHA support)

## 🐛 Troubleshooting

### Email not sending?
- Check browser console for errors
- Verify all IDs are correct in `emailjs.config.ts`
- Make sure you've connected your email service in EmailJS dashboard
- Check EmailJS dashboard for failed sends

### Getting "Failed to send" error?
- Verify your internet connection
- Check if you've exceeded the rate limit
- Ensure the template variables match the code

### Not receiving emails?
- Check spam folder
- Verify the recipient email in EmailJS template settings
- Check EmailJS dashboard logs

## 📚 Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Guide](https://www.emailjs.com/docs/examples/reactjs/)
- [EmailJS Support](https://www.emailjs.com/docs/faq/)

## ✅ Verification Checklist

- [ ] Created EmailJS account
- [ ] Connected Gmail service (`vsontakke100@gmail.com`)
- [ ] Created email template with correct structure
- [ ] Got Service ID, Template ID, and Public Key
- [ ] Updated `emailjs.config.ts` with real values
- [ ] Tested the contact form
- [ ] Received test email at `vsontakke100@gmail.com`

---

Once setup is complete, the contact form will automatically send emails to `vsontakke100@gmail.com` with all the inquiry details!
