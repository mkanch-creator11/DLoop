import { Link } from 'react-router-dom';
import Eyebrow from '../components/Eyebrow.jsx';
import LoopCanvas from '../components/LoopCanvas.jsx';
import CtaBand from '../components/CtaBand.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { process } from '../data/enablement.js';
import { packages, funnel } from '../data/linkedin.js';

const stats = [
  { n: '~20', unit: 'yrs', k: 'Sales experience behind our consulting lead' },
  { n: 'US$1M+', k: 'Annual recurring revenue from deals closed' },
  { n: '4', k: 'Regions closed in: USA, UK, MEA and APAC' },
  { n: '30–40', k: 'Organic leads a quarter on our Scale LinkedIn package' },
];

const pillars = [
  { word: 'Analyze', se: 'Discovery and gap analysis of how your team sells today.', li: 'Targeting by demographics, interests, roles and industries.' },
  { word: 'Build', se: 'Roadmap, sales process, collateral and pre-sales workflows.', li: 'Content, engagement and a network of the right prospects.' },
  { word: 'Deliver', se: 'Coaching and execution support that changes daily habits.', li: 'Outreach, organic leads and a monthly performance report.' },
];

export default function Home() {
  usePageMeta(null, 'Digital Loop helps technology companies close more deals with Sales Enablement consulting, and fill their sales funnel with LinkedIn Lead Generation.');
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <Eyebrow className="rise">Analyze . Build . Deliver</Eyebrow>
              <h1 className="rise d1">Close the loop from first lead to <em>signed deal.</em></h1>
              <p className="lede rise d2">Digital Loop helps technology companies sell with more structure and fill their pipeline with the right prospects. Two separate services. Use one, or connect both.</p>
              <div className="hero-ctas rise d3">
                <Link className="btn btn-primary" to="/sales-enablement">Sales Enablement consulting <span className="arr">→</span></Link>
                <Link className="btn btn-ghost btn-cyan" to="/linkedin-lead-generation">LinkedIn Lead Generation</Link>
              </div>
            </div>
            <div className="rise d2"><LoopCanvas /></div>
          </div>

          <div className="doors rise d4">
            <Link className="door" to="/sales-enablement">
              <span className="tag">Consulting service</span>
              <h2>Sales Enablement</h2>
              <p>Processes, content, skills and operational support that help your team progress opportunities from lead to closure. Every engagement starts with Discovery.</p>
              <span className="go">See how we work <span>→</span></span>
            </Link>
            <Link className="door li" to="/linkedin-lead-generation">
              <span className="tag">Managed growth service</span>
              <h2>LinkedIn Lead Generation</h2>
              <p>Branding, engagement and targeted outreach across your team's LinkedIn profiles and company page, built to feed your sales funnel with organic leads.</p>
              <span className="go">Explore packages <span>→</span></span>
            </Link>
          </div>
        </div>
      </section>

      <div className="proof">
        <div className="wrap proof-in">
          {stats.map((s) => (
            <div className="stat" key={s.k}>
              <span className="n">{s.n}{s.unit && <small>{s.unit}</small>}</span>
              <span className="k">{s.k}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Enablement overview */}
      <section className="block lane-se">
        <div className="wrap">
          <div className="lane-mark">Service 01 — Sales Enablement Consulting</div>
          <div className="split">
            <div>
              <Eyebrow>Consulting</Eyebrow>
              <h2 className="h2">A process that starts with Discovery and ends in execution.</h2>
              <p className="muted-lg">We review how your team sells today, identify what is getting in the way, and build a practical plan across discovery, pitch materials, pre-sales, proposals, follow-up and deal management.</p>
              <Link className="btn btn-primary" to="/sales-enablement#process">See the full process <span className="arr">→</span></Link>
            </div>
            <ol className="mini-flow">
              {process.map((s) => (
                <li key={s.n} className={s.first ? 'first' : ''}>
                  <span className="mf-n">{s.n}</span>
                  <div><b>{s.title}</b><span>{s.what}</span></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* LinkedIn overview */}
      <section className="block lane-li band-li">
        <div className="wrap">
          <div className="lane-mark">Service 02 — LinkedIn Lead Generation</div>
          <div className="split">
            <div>
              <Eyebrow>For organizations building their sales funnel</Eyebrow>
              <h2 className="h2">Organic leads from LinkedIn, every quarter.</h2>
              <p className="muted-lg">We run content, engagement, targeted connections and outreach for your team's profiles and company page. {funnel.map((f) => f.stage).join(' → ')}.</p>
              <Link className="btn btn-primary btn-cyan" to="/linkedin-lead-generation#packages">Compare packages <span className="arr">→</span></Link>
            </div>
            <div className="lead-bars">
              {packages.map((p) => (
                <Link to="/linkedin-lead-generation#packages" className={`lb${p.top ? ' top' : ''}`} key={p.id}>
                  <span className="lb-name">{p.name}</span>
                  <span className="lb-track"><span style={{ '--v': `${p.level * 33.3}%` }} /></span>
                  <span className="lb-val">{p.leads} <small>leads / quarter</small></span>
                  <span className="lb-meta">{p.metrics[0].value} LinkedIn profiles</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tagline as method */}
      <section className="block">
        <div className="wrap">
          <Eyebrow>How both services work</Eyebrow>
          <h2 className="h2" style={{ marginBottom: 32 }}>Analyze. Build. Deliver.</h2>
          <div className="pillars">
            {pillars.map((p) => (
              <div className="pillar" key={p.word}>
                <h3>{p.word}</h3>
                <p><span className="tag se">Enablement</span>{p.se}</p>
                <p><span className="tag li">LinkedIn</span>{p.li}</p>
              </div>
            ))}
          </div>
          <CtaBand title="Tell us where you want to grow." text="Book a Discovery call for Sales Enablement, or request a LinkedIn Lead Generation proposal." to="/contact" label="Start a conversation" />
        </div>
      </section>
    </>
  );
}
