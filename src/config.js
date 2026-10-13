// Site-wide settings. Edit these values to update the whole site.

export const SITE = {
  name: 'Digital Loop',
  tagline: 'Analyze . Build . Deliver',
  domain: 'www.digitalloop.co',
  url: 'https://www.digitalloop.co',
  email: 'contact@digitalloop.co',
};

// Replace with your real profile URLs.
export const SOCIALS = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/digitalloop' },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61595323800930' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/digitalloop' },
];

// Contact form delivery.
// Submissions are emailed to SITE.email through FormSubmit (formsubmit.co) with the subject below.
// The very first submission sends an activation email to SITE.email; click the link in it once.
// To use a different service, set VITE_FORM_ENDPOINT in Vercel's environment variables.
export const FORM_SUBJECT = 'website lead';
export const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || `https://formsubmit.co/ajax/${SITE.email}`;

// WhatsApp chat (number in international format, digits only).
export const WHATSAPP = {
  number: '923032531461',
  display: '+92 303 2531461',
};

export const whatsappLink = (text = '') =>
  `https://wa.me/${WHATSAPP.number}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
