import { Link } from 'react-router-dom';
import { packages } from '../data/linkedin.js';

export default function Packages() {
  return (
    <div className="pkgs">
      {packages.map((p) => (
        <article className={`pkg${p.top ? ' top' : ''}`} key={p.id}>
          <div className="pkg-head">
            <div className="lvl" aria-hidden="true">
              {[1, 2, 3].map((n) => <i key={n} className={n <= p.level ? 'on' : ''} />)}
            </div>
            <h3>{p.name}</h3>
            <p className="for">{p.for}</p>
          </div>
          <div className="leads">
            <div className="lab">Organic leads</div>
            <div className="val">{p.leads}<small>per quarter</small></div>
          </div>
          <dl className="meters">
            {p.metrics.map((m) => (
              <div className="meter" key={m.label}>
                <dt>{m.label}</dt><dd>{m.value}</dd>
                <div className="bar"><span style={{ '--v': `${m.pct}%` }} /></div>
              </div>
            ))}
          </dl>
          {p.extra && <p className="extra">{p.extra}</p>}
          <Link
            className={`btn ${p.top ? 'btn-primary' : 'btn-ghost'} btn-cyan`}
            to={`/contact?service=${encodeURIComponent(`LinkedIn Lead Generation: ${p.name} package`)}`}
          >
            Request a proposal <span className="arr">→</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
