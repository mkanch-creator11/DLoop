import { Link } from 'react-router-dom';
import Eyebrow from '../components/Eyebrow.jsx';
import PageHero from '../components/PageHero.jsx';
import Funnel from '../components/Funnel.jsx';
import Packages from '../components/Packages.jsx';
import Included from '../components/Included.jsx';
import Comparison from '../components/Comparison.jsx';
import CtaBand from '../components/CtaBand.jsx';
import usePageMeta from '../hooks/usePageMeta.js';

export default function LinkedInLeadGen() {
  usePageMeta('LinkedIn Lead Generation', 'LinkedIn branding and lead generation packages for organizations building their sales funnel: content, engagement, targeted connections, outreach and monthly reporting.');
  return (
    <div className="lane-li li-page">
      <PageHero
        lane="li"
        eyebrow="Service 02 · LinkedIn Lead Generation"
        title={<>A LinkedIn engine that keeps your <em>sales funnel full.</em></>}
        aside={
          <div className="hero-card li">
            <span className="hc-lab">Organic leads per quarter</span>
            <div className="hc-row"><b>15–20</b><span>Business · 2 profiles</span></div>
            <div className="hc-row"><b>20–30</b><span>Growth · 3 profiles</span></div>
            <div className="hc-row"><b>30–40</b><span>Scale · 4 profiles</span></div>
          </div>
        }
      >
        <p>For organizations building their sales funnels. We run LinkedIn branding and lead generation across your team's personal profiles and your company page.</p>
        <p>Content builds credibility, daily engagement builds reach, targeted connections build the right network, and outreach turns it into conversations.</p>
      </PageHero>

      <section className="block tight" id="how-it-works">
        <div className="wrap">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="h2">Five stages, run for you every month.</h2>
          <Funnel />
        </div>
      </section>

      <section className="block" id="packages">
        <div className="wrap">
          <Eyebrow>Packages</Eyebrow>
          <h2 className="h2">Choose the reach your funnel needs.</h2>
          <p className="sub-p">Each package is LinkedIn Branding &amp; Lead Generation, scaled by the number of profiles we run for your team.</p>
          <Packages />
          <Included />
          <p className="note">Pricing is shared with your proposal.</p>
        </div>
      </section>

      <section className="block tight" id="compare">
        <div className="wrap">
          <Eyebrow>Compare</Eyebrow>
          <h2 className="h2">Packages side by side.</h2>
          <Comparison />
          <div className="pair">
            <p><b>Want leads to convert into closed deals?</b> LinkedIn Lead Generation is a separate service, and it pairs well with our <Link to="/sales-enablement">Sales Enablement consulting</Link> so new leads reach a team ready to progress them.</p>
          </div>
          <CtaBand
            tone="cyan"
            title="Ready to build your LinkedIn pipeline?"
            text="Tell us your target market and how many profiles you'd like us to run. We'll send a proposal with pricing."
            to={`/contact?service=${encodeURIComponent('LinkedIn Lead Generation: Growth package')}`}
            label="Request a proposal"
          />
        </div>
      </section>
    </div>
  );
}
