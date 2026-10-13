import { process } from '../data/enablement.js';
import Icon from './Icon.jsx';

export default function ProcessFlow() {
  return (
    <>
      <div className="flow-wrap">
      <div className="flow-rail" aria-hidden="true" />
      <ol className="flow">
        {process.map((s) => (
          <li key={s.n} className={`step${s.first ? ' first' : ''}`}>
            <div className="node">
              <span className="dot">{s.n}</span>
              {s.first && <span className="start">Starts here</span>}
            </div>
            <div className="step-card">
              <h3>{s.title}</h3>
              <p className="what">{s.what}</p>
              <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
              <div className="out">Output → <b>{s.output}</b></div>
            </div>
          </li>
        ))}
      </ol>
      </div>
      <div className="loopback">
        <span className="loopback-ico"><Icon name="loop" size={26} /></span>
        <p><b>Then the loop continues.</b> Ongoing advisory and progress reviews support adoption and refinement, tracked against measures such as stage conversion, time in stage, proposal turnaround and use of enablement materials.</p>
      </div>
    </>
  );
}
