import { comparison, packages } from '../data/linkedin.js';

export default function Comparison() {
  return (
    <div className="cmp-wrap">
      <table className="cmp">
        <caption className="sr">Package comparison</caption>
        <thead>
          <tr><th scope="col">Feature</th>{packages.map((p) => <th scope="col" key={p.id} className={p.top ? 'hl' : ''}>{p.name}</th>)}</tr>
        </thead>
        <tbody>
          {comparison.map(([label, ...vals]) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              {vals.map((v, i) => <td key={i} className={`${packages[i].top ? 'hl' : ''}${v === '✓' ? ' tick' : ''}`}>{v}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
