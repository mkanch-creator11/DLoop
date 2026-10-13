import { included } from '../data/linkedin.js';

export default function Included() {
  return (
    <div className="incl">
      <div>
        <h3>Included in every package</h3>
        <p>The same playbook at every level. Packages differ in how many profiles we run and how much engagement they generate.</p>
      </div>
      <dl className="incl-grid">
        {included.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
      </dl>
    </div>
  );
}
