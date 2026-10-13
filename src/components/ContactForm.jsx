import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FORM_ENDPOINT, SITE } from '../config.js';
import { serviceOptions } from '../data/linkedin.js';

const empty = { name: '', email: '', company: '', phone: '', service: '', message: '', website: '' };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Enter a valid email, like name@company.com.';
  if (!v.service) e.service = 'Choose the service you are interested in.';
  if (v.message.trim().length < 10) e.message = 'Add a sentence or two so we can prepare.';
  return e;
}

export default function ContactForm() {
  const [params] = useSearchParams();
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const s = params.get('service');
    if (s && serviceOptions.includes(s)) setV((old) => ({ ...old, service: s }));
  }, [params]);

  const set = (k) => (e) => {
    setV({ ...v, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: undefined });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (v.website) return; // spam trap
    const errs = validate(v);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    const { website, ...data } = v;

    if (FORM_ENDPOINT) {
      setSending(true);
      try {
        const r = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
        if (!r.ok) throw new Error(String(r.status));
        setV(empty);
        setStatus({ ok: true, title: 'Message sent.', text: `Thanks, ${data.name.split(' ')[0]}. We'll reply to ${data.email} soon.` });
      } catch {
        setStatus({ ok: false, title: 'Your message did not send.', text: `Please try again, or email us directly at ${SITE.email}.` });
      } finally {
        setSending(false);
      }
      return;
    }

    const subject = `Enquiry: ${data.service}${data.company ? ` — ${data.company}` : ''}`;
    const body = `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || '-'}\nPhone: ${data.phone || '-'}\nService: ${data.service}\n\n${data.message}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus({ ok: true, title: 'Your message is ready in your email app.', text: `Press send there to reach us. If no email window opened, write to ${SITE.email} and we will pick it up.` });
  };

  const field = (k, label, props = {}, full = false, optional = false) => (
    <div className={`field${full ? ' full' : ''}${errors[k] ? ' bad' : ''}`}>
      <label htmlFor={`f-${k}`}>{label}{optional && <span> (optional)</span>}</label>
      {props.as === 'textarea' ? (
        <textarea id={`f-${k}`} name={k} value={v[k]} onChange={set(k)} placeholder={props.placeholder} aria-invalid={!!errors[k]} />
      ) : (
        <input id={`f-${k}`} name={k} value={v[k]} onChange={set(k)} aria-invalid={!!errors[k]} {...props} />
      )}
      {errors[k] && <span className="err">{errors[k]}</span>}
    </div>
  );

  return (
    <form className="card form" onSubmit={onSubmit} noValidate>
      {field('name', 'Full name', { type: 'text', autoComplete: 'name', placeholder: 'Sara Ahmed' })}
      {field('email', 'Work email', { type: 'email', autoComplete: 'email', placeholder: 'sara@company.com' })}
      {field('company', 'Company', { type: 'text', autoComplete: 'organization', placeholder: 'Company name' })}
      {field('phone', 'Phone', { type: 'tel', autoComplete: 'tel', placeholder: '+92 …' }, false, true)}
      <div className={`field full${errors.service ? ' bad' : ''}`}>
        <label htmlFor="f-service">I'm interested in</label>
        <select id="f-service" name="service" value={v.service} onChange={set('service')} aria-invalid={!!errors.service}>
          <option value="">Choose a service</option>
          {serviceOptions.map((o) => <option key={o}>{o}</option>)}
        </select>
        {errors.service && <span className="err">{errors.service}</span>}
      </div>
      {field('message', 'What would you like to improve?', { as: 'textarea', placeholder: 'e.g. Our team gets good leads but deals stall after the first demo.' }, true)}
      <div className="hp" aria-hidden="true">
        <label htmlFor="f-website">Website</label>
        <input id="f-website" name="website" tabIndex={-1} autoComplete="off" value={v.website} onChange={set('website')} />
      </div>
      <div className="form-foot">
        <small>We reply from {SITE.email}. Your details are only used to answer your enquiry.</small>
        <button className="btn btn-primary" type="submit" disabled={sending}>
          {sending ? 'Sending…' : 'Send message'} <span className="arr">→</span>
        </button>
      </div>
      {status && (
        <div className={`status${status.ok ? '' : ' fail'}`} role="status">
          <b>{status.title}</b><p>{status.text}</p>
        </div>
      )}
    </form>
  );
}
