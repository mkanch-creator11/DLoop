import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { WHATSAPP, whatsappLink } from '../config.js';
import WhatsAppIcon from './WhatsAppIcon.jsx';

const topics = [
  { id: 'se', label: 'Sales Enablement', text: "Hi Digital Loop, I'd like to talk about Sales Enablement consulting for our sales team." },
  { id: 'li', label: 'LinkedIn Lead Generation', text: "Hi Digital Loop, I'm interested in LinkedIn Lead Generation for our sales funnel." },
  { id: 'pkg', label: 'Packages & proposal', text: "Hi Digital Loop, could you send a proposal for one of your LinkedIn packages?" },
  { id: 'other', label: 'Something else', text: 'Hi Digital Loop, ' },
];

const topicForPath = (p) => (p.startsWith('/linkedin') ? 'li' : p.startsWith('/sales') ? 'se' : 'se');

export default function WhatsAppWidget() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState(topicForPath(pathname));
  const [msg, setMsg] = useState(topics.find((t) => t.id === topicForPath(pathname)).text);
  const panelRef = useRef(null);
  const btnRef = useRef(null);

  // Follow the page the visitor is on until they pick a topic themselves.
  const touched = useRef(false);
  useEffect(() => {
    if (touched.current) return;
    const id = topicForPath(pathname);
    setTopic(id);
    setMsg(topics.find((t) => t.id === id).text);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); btnRef.current?.focus(); } };
    const onDown = (e) => {
      if (!panelRef.current?.contains(e.target) && !btnRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    panelRef.current?.querySelector('textarea')?.focus();
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onDown); };
  }, [open]);

  const pick = (t) => { touched.current = true; setTopic(t.id); setMsg(t.text); };

  return (
    <div className="wa">
      {open && (
        <div className="wa-panel" ref={panelRef} role="dialog" aria-label="Chat with Digital Loop on WhatsApp">
          <div className="wa-head">
            <span className="wa-avatar"><WhatsAppIcon size={20} /></span>
            <div>
              <b>Digital Loop</b>
              <span>WhatsApp · {WHATSAPP.display}</span>
            </div>
            <button className="wa-x" type="button" aria-label="Close chat" onClick={() => { setOpen(false); btnRef.current?.focus(); }}>×</button>
          </div>
          <div className="wa-body">
            <p className="wa-bubble">Hi there. What would you like to talk about? Pick a topic or write your own message, then continue in WhatsApp.</p>
            <div className="wa-topics" role="group" aria-label="Topic">
              {topics.map((t) => (
                <button key={t.id} type="button" className={topic === t.id ? 'on' : ''} aria-pressed={topic === t.id} onClick={() => pick(t)}>
                  {t.label}
                </button>
              ))}
            </div>
            <label className="sr" htmlFor="wa-msg">Your message</label>
            <textarea id="wa-msg" rows={3} value={msg} onChange={(e) => { touched.current = true; setMsg(e.target.value); }} />
            <a className="wa-send" href={whatsappLink(msg.trim())} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
              <WhatsAppIcon size={18} /> Continue in WhatsApp
            </a>
          </div>
        </div>
      )}
      <button
        ref={btnRef}
        type="button"
        className={`wa-fab${open ? ' is-open' : ''}`}
        aria-label={open ? 'Close WhatsApp chat' : 'Chat with us on WhatsApp'}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <span className="wa-fab-x" aria-hidden="true">×</span> : <WhatsAppIcon size={28} />}
        <span className="wa-tip" aria-hidden="true">Chat on WhatsApp</span>
      </button>
    </div>
  );
}
