import Eyebrow from './Eyebrow.jsx';

export default function PageHero({ lane, eyebrow, title, children, aside }) {
  return (
    <section className={`page-hero lane-${lane}`}>
      <div className="wrap page-hero-grid">
        <div>
          <Eyebrow className="rise">{eyebrow}</Eyebrow>
          <h1 className="rise d1">{title}</h1>
          <div className="lede rise d2">{children}</div>
        </div>
        {aside && <div className="rise d3">{aside}</div>}
      </div>
    </section>
  );
}
