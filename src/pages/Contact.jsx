import Eyebrow from '../components/Eyebrow.jsx';
import ContactForm from '../components/ContactForm.jsx';
import ContactDetails from '../components/ContactDetails.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

const next = [
  ['We read your message', 'We look at what you want to improve and which service fits.'],
  ['We arrange a call', 'A Discovery call for Sales Enablement, or a scoping call for LinkedIn Lead Generation.'],
  ['You get a proposal', 'A clear scope, deliverables and pricing for your situation.'],
];

export default function Contact() {
  usePageMeta('Contact', 'Contact Digital Loop at contact@digitalloop.co to book a Sales Enablement Discovery call or request a LinkedIn Lead Generation proposal.');
  return (
    <section className="block contact-page" id="contact">
      <div className="wrap contact-grid">
        <div>
          <Eyebrow className="rise">Contact</Eyebrow>
          <h1 className="h1 rise d1">Tell us where you want to grow.</h1>
          <p className="intro rise d2">Share what your sales team needs or how many leads you want each quarter. We'll reply with next steps.</p>
          <ContactDetails />
          <ol className="next">
            {next.map(([t, d], i) => (
              <li key={t}><span>{String(i + 1).padStart(2, '0')}</span><div><b>{t}</b><p>{d}</p></div></li>
            ))}
          </ol>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
