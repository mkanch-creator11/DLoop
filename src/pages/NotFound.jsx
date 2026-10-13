import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta.js';

export default function NotFound() {
  usePageMeta('Page not found');
  return (
    <section className="block nf">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1 className="h1">This page left the loop.</h1>
        <p className="intro">The link may be old or mistyped.</p>
        <div className="hero-ctas">
          <Link className="btn btn-primary" to="/">Go to the homepage <span className="arr">→</span></Link>
          <Link className="btn btn-ghost" to="/contact">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
