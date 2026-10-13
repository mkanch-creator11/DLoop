import { funnel } from '../data/linkedin.js';

export default function Funnel() {
  return (
    <div className="funnel">
      <ol className="funnel-list" aria-label="How the LinkedIn funnel works">
        {funnel.map((f, i) => (
          <li className="f-row" key={f.stage}>
            <div className="f-bar" style={{ '--w': `${f.w}%`, '--a': f.a }}>
              <i>{String(i + 1).padStart(2, '0')}</i><b>{f.stage}</b>
            </div>
            <div className="f-txt"><h3>{f.title}</h3><p>{f.body}</p></div>
          </li>
        ))}
      </ol>
      <div className="f-out"><div className="f-gem">Organic leads, every quarter</div><div /></div>
    </div>
  );
}
