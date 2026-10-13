import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { SITE } from '../config.js';
import SocialLinks from './SocialLinks.jsx';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div className="foot-brand">
            <img src={logo} alt="Digital Loop" width="120" height="38" />
            <p>Sales Enablement consulting and LinkedIn Lead Generation for technology companies.</p>
          </div>
          <div className="foot-cols">
            <div>
              <h4>Services</h4>
              <Link to="/sales-enablement">Sales Enablement</Link>
              <Link to="/sales-enablement#process">Engagement process</Link>
              <Link to="/linkedin-lead-generation">LinkedIn Lead Generation</Link>
              <Link to="/linkedin-lead-generation#packages">Packages</Link>
            </div>
            <div>
              <h4>Company</h4>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
            <div>
              <h4>Follow</h4>
              <SocialLinks size={18} />
            </div>
          </div>
        </div>
        <div className="legal">
          <span>© {new Date().getFullYear()} Digital Loop · {SITE.domain}</span>
          <span>{SITE.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
