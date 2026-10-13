import { useState } from 'react';
import { SITE, WHATSAPP, whatsappLink } from '../config.js';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import SocialLinks from './SocialLinks.jsx';

export default function ContactDetails() {
  const [copied, setCopied] = useState('Copy');
  const copy = () => {
    const done = (msg) => { setCopied(msg); setTimeout(() => setCopied('Copy'), 1600); };
    try {
      navigator.clipboard.writeText(SITE.email).then(() => done('Copied'), () => done('Select it'));
    } catch { done('Select it'); }
  };
  return (
    <div className="reach">
      <div className="reach-row">
        <span className="lab">Email</span>
        <a className="mail" href={`mailto:${SITE.email}`}>{SITE.email}</a>
        <button className="copy" type="button" onClick={copy}>{copied}</button>
      </div>
      <div className="reach-row">
        <span className="lab">WhatsApp</span>
        <a className="mail" href={whatsappLink("Hi Digital Loop, I'd like to talk about ")} target="_blank" rel="noopener noreferrer">{WHATSAPP.display}</a>
        <a className="wa-chip" href={whatsappLink("Hi Digital Loop, I'd like to talk about ")} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={16} /> Chat</a>
      </div>
      <div className="reach-row">
        <span className="lab">Follow Digital Loop</span>
        <SocialLinks />
      </div>
      <div className="reach-row">
        <span className="lab">Web</span>
        <a className="mail" href={SITE.url} target="_blank" rel="noopener noreferrer">{SITE.domain}</a>
      </div>
    </div>
  );
}
