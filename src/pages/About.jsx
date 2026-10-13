import { Link } from 'react-router-dom';
import Eyebrow from '../components/Eyebrow.jsx';
import PageHero from '../components/PageHero.jsx';
import CtaBand from '../components/CtaBand.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { credentials } from '../data/enablement.js';

export default function About() {
  usePageMeta('About', 'Digital Loop helps technology companies sell better and fill their pipeline, backed by around 20 years of sales experience across the USA, UK, MEA and APAC.');
  return (
    <>
      <PageHero lane="se" eyebrow="About Digital Loop" title={<>Analyze. Build. <em>Deliver.</em></>}>
        <p>Digital Loop helps technology companies equip their sales teams and fill their pipeline. We work where sales strategy meets everyday execution: how leads are found, how buyers are engaged, and how opportunities move to closure.</p>
      </PageHero>

      <section className="block tight">
        <div className="wrap">
          <div className="about-grid">
            <div className="panel">
              <Eyebrow>Experience behind our consulting</Eyebrow>
              <p className="big-p">Our consulting lead brings around 20 years of sales experience, including leading sales functions and advising organisations and teams across different regions on Sales Enablement, process improvement and team training.</p>
              <p>This experience includes winning leading banks in the UAE and Pakistan, one of the largest telcos in the region, the region's largest not-for-profit organisation and numerous startups for design thinking and development projects.</p>
              <div className="creds">{credentials.map((c) => <span className="chip" key={c}>{c}</span>)}</div>
              <p className="fine">Specific client and consulting account names remain confidential.</p>
            </div>
            <div className="stack">
              <div className="mini-stat"><b>~20 yrs</b><span>in sales and sales leadership</span></div>
              <div className="mini-stat"><b>US$1M+</b><span>annual recurring revenue from deals closed</span></div>
              <div className="mini-stat"><b>4 regions</b><span>USA, UK, MEA and APAC</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <Eyebrow>Two separate services</Eyebrow>
          <h2 className="h2" style={{ marginBottom: 28 }}>Choose what your sales function needs now.</h2>
          <div className="doors">
            <Link className="door" to="/sales-enablement">
              <span className="tag">Consulting service</span>
              <h2>Sales Enablement</h2>
              <p>For teams that get opportunities but struggle to progress them. Discovery, roadmap and execution across process, collateral, pre-sales and coaching.</p>
              <span className="go">Explore Sales Enablement <span>→</span></span>
            </Link>
            <Link className="door li" to="/linkedin-lead-generation">
              <span className="tag">Managed growth service</span>
              <h2>LinkedIn Lead Generation</h2>
              <p>For organizations building their sales funnel. Content, engagement, targeted connections and outreach that produce organic leads every quarter.</p>
              <span className="go">Explore LinkedIn packages <span>→</span></span>
            </Link>
          </div>
          <CtaBand title="Let's talk about your pipeline." text="Share what you want to improve and we'll suggest where to start." to="/contact" label="Contact us" />
        </div>
      </section>
    </>
  );
}
