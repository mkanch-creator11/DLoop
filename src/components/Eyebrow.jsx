export default function Eyebrow({ children, className = '' }) {
  return (
    <span className={`eyebrow ${className}`}>
      <span className="px" aria-hidden="true"><i /><i /><i /><i /></span>
      {children}
    </span>
  );
}
