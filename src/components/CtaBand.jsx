import { Link } from 'react-router-dom';

export default function CtaBand({ title, text, to, label, tone = 'blue' }) {
  return (
    <div className={`cta-band ${tone}`}>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Link className={`btn btn-primary${tone === 'cyan' ? ' btn-cyan' : ''}`} to={to}>{label} <span className="arr">→</span></Link>
    </div>
  );
}
