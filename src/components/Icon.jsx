const icons = {
  search: <><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4.2-4.2" /></>,
  deck: <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M12 16v4M8 20h8M7 12l3-3 2 2 4-4" /></>,
  route: <><circle cx="5" cy="6" r="2" /><circle cx="19" cy="18" r="2" /><path d="M7 6h7a3 3 0 0 1 0 6h-4a3 3 0 0 0 0 6h7" /></>,
  align: <><path d="M4 12h6M14 12h6M10 8l4 4-4 4" /><circle cx="4" cy="12" r="1.5" /><circle cx="20" cy="12" r="1.5" /></>,
  coach: <><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M17 11l2 2 3-4" /></>,
  loop: <><path d="M20 9a8 8 0 1 0 1 6" /><path d="M21 3v6h-6" /></>,
};

export default function Icon({ name, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}
