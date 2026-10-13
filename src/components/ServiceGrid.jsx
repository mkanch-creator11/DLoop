import { services } from '../data/enablement.js';
import Icon from './Icon.jsx';

export default function ServiceGrid() {
  return (
    <div className="svc-grid">
      {services.map((s) => (
        <article className="svc" key={s.title}>
          <div className="ico"><Icon name={s.icon} /></div>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
          <div className="dl">
            <span>Deliverables</span>
            <ul>{s.deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
          </div>
        </article>
      ))}
    </div>
  );
}
