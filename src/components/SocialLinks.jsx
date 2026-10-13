import { SOCIALS } from '../config.js';

const paths = {
  linkedin: <path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.06c.53-.95 1.84-1.95 3.78-1.95 4.04 0 4.8 2.5 4.8 5.76V21h-4v-5.1c0-1.22-.03-2.78-1.8-2.78-1.8 0-2.08 1.33-2.08 2.7V21h-4z" />,
  facebook: <path fill="currentColor" d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.87.25-1.46 1.5-1.46h1.6V4.46A21 21 0 0 0 14.27 4.3c-2.3 0-3.87 1.4-3.87 3.97v2.23H7.8v3h2.6V21z" />,
  instagram: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </g>
  ),
};

export default function SocialLinks({ size = 20 }) {
  return (
    <div className="socials">
      {SOCIALS.map((s) => (
        <a key={s.id} className="soc" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Digital Loop on ${s.label}`}>
          <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">{paths[s.id]}</svg>
        </a>
      ))}
    </div>
  );
}
