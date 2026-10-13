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
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/digitalloop' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/digitalloop' },
];

// Contact form delivery.
// Paste a form-service endpoint (e.g. https://formspree.io/f/xxxxxxx) to receive
// submissions by email. Left empty, the form opens the visitor's email app instead.
export const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || '';
