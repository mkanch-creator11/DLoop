import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const links = [
  { to: '/sales-enablement', label: 'Sales Enablement' },
  { to: '/linkedin-lead-generation', label: 'LinkedIn Lead Gen' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}${open ? ' open' : ''}`}>
      <div className="wrap nav-in">
        <Link className="brand" to="/" aria-label="Digital Loop home">
          <img src={logo} alt="Digital Loop — Analyze. Build. Deliver." width="140" height="44" />
        </Link>
        <ul className="nav-links" id="navlinks">
          {links.map((l) => (
            <li key={l.to}><NavLink to={l.to}>{l.label}</NavLink></li>
          ))}
        </ul>
        <Link className="btn btn-primary nav-cta" to="/contact">Start a conversation <span className="arr">→</span></Link>
        <button className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="navlinks" onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
