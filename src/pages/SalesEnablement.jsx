import Eyebrow from '../components/Eyebrow.jsx';
import PageHero from '../components/PageHero.jsx';
import ProcessFlow from '../components/ProcessFlow.jsx';
import ServiceGrid from '../components/ServiceGrid.jsx';
import Challenges from '../components/Challenges.jsx';
import CtaBand from '../components/CtaBand.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { audience, credentials, outcomes } from '../data/enablement.js';

export default function SalesEnablement() {
  usePageMeta('Sales Enablement Consulting', 'Sales Enablement consulting for technology companies: Discovery, gap analysis, roadmap and execution across process, collateral, pre-sales and coaching.');
  return (
    <>
      <PageHero
        lane="se"
        eyebrow="Service 01 · Sales Enablement Consulting"
        title={<>Make it easier for your people to <em>win the deal.</em></>}
        aside={
          <div className="hero-card">
            <span className="hc-lab">Experience behind our consulting</span>
            <div className="hc-row"><b>~20 yrs</b><span>sales experience, leading sales functions and advising teams across regions</span></div>
            <div className="hc-row"><b>US$1M+</b><span>annual recurring revenue from deals closed</span></div>
            <div className="hc-row"><b>USA · UK · MEA · APAC</b><span>regions where deals have closed</span></div>
          </div>
        }
      >
        <p>Sales Enablement is the core of our consulting. We equip technology sales teams with the processes, content, skills and operational support they need to progress opportunities from lead to closure.</p>
        <p>We review how your team sells today, identify what is getting in the way and build a practical improvement plan that connects sales strategy with everyday execution.</p>
      </PageHero>

      <section className="block tight lane-se">
        <div className="wrap">
          <div className="two">
            <div className="panel">
              <h2 className="h3">Who we work with</h2>
              <p>{audience}</p>
              <div className="creds">{credentials.map((c) => <span className="chip" key={c}>{c}</span>)}</div>
              <p className="fine">Specific client and consulting account names remain confidential.</p>
            </div>
            <div className="panel">
              <h2 className="h3">What effective enablement can support</h2>
              <ul className="checks">{outcomes.map((o) => <li key={o}>{o}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="block lane-se" id="process">
        <div className="wrap">
          <Eyebrow>How an engagement works</Eyebrow>
          <h2 className="h2">From Discovery to execution.</h2>
          <p className="sub-p">Every engagement begins with Discovery. What we learn there decides what we build, in what order, and who owns it.</p>
          <ProcessFlow />
        </div>
      </section>

      <section className="block lane-se" id="services">
        <div className="wrap">
          <Eyebrow>What we deliver</Eyebrow>
          <h2 className="h2">Our Sales Enablement services.</h2>
          <p className="sub-p">Specific deliverables are confirmed in the agreed engagement scope.</p>
          <ServiceGrid />
        </div>
      </section>

      <section className="block lane-se">
        <div className="wrap">
          <Eyebrow>Challenges we help address</Eyebrow>
          <h2 className="h2">Where deals usually leak.</h2>
          <Challenges />
          <CtaBand
            title="Start with your enablement priorities."
            text="Tell us where your sales team needs better support. We'll help turn it into a practical plan for stronger execution."
            to={`/contact?service=${encodeURIComponent('Sales Enablement consulting')}`}
            label="Book a Discovery call"
          />
        </div>
      </section>
    </>
  );
}
