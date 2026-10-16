export default function Logo() {
  return (
    <div className="logo-wrap" aria-label="Benon Papa">
      <div className="logo-icon-badge" aria-hidden="true">
        <svg viewBox="0 0 40 40" width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="36" height="36" rx="10" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2.5" />
          <path d="M 12 15 L 7 20 L 12 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 28 15 L 33 20 L 28 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="20" y="25" fontFamily="'Poppins', system-ui, sans-serif" fontSize="13" fontWeight="800" fill="#ffffff" textAnchor="middle">BP</text>
        </svg>
      </div>
      <div className="logo">
        <span className="logo-script">Benon</span>
        <span className="logo-sub">Papa</span>
      </div>
    </div>
  );
}
