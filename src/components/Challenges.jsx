import { challenges } from '../data/enablement.js';

export default function Challenges() {
  return (
    <div className="chal">
      {challenges.map((c) => (
        <div className="ch" key={c.problem}>
          <p className="prob">{c.problem}</p>
          <p className="fix">{c.fix}</p>
        </div>
      ))}
    </div>
  );
}
