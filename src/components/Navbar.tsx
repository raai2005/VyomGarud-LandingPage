import React from 'react';

export interface SimpleNavProps {
  companyName?: string;
  logoUrl?: string;
  logoAlt?: string;
  className?: string;
  // control visual tokens
  bgColor?: string;       // pill background (translucent)
  textColor?: string;     // primary text color
  linkColor?: string;     // nav links color
  leftPadding?: number;   // pixels of padding before logo/name (default: 18)
  rightPadding?: number;  // pixels of padding on right side (default: 20)
  // sizing
  companyFontSize?: number; // px, default 20
  linkFontSize?: number;    // px, default 14
  links?: { label: string; href: string }[];
}

const SimpleNav: React.FC<SimpleNavProps> = ({
  companyName = 'VyomGarud',
  logoUrl,
  logoAlt = 'Logo',
  className = '',
  bgColor = 'rgba(20,14,28,0.60)', // sampled color
  textColor = '#FFFFFF',
  linkColor = '#EDEDED',
  leftPadding = 18,
  rightPadding = 20,
  companyFontSize = 20,
  linkFontSize = 14,
  links = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Features', href: '#' }
  ]
}) => {
  const navStyle: React.CSSProperties = {
    background: 'rgba(0, 0, 0, 0.6)',
    WebkitBackdropFilter: 'blur(20px)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.05)',
    color: textColor,
    paddingLeft: leftPadding,
    paddingRight: rightPadding,
    fontFamily: "'Poppins', sans-serif"
  };

  const companyStyle: React.CSSProperties = {
    color: textColor,
    fontSize: `${companyFontSize}px`,
    fontWeight: 600,
    lineHeight: 1,
    fontFamily: "'Poppins', sans-serif",
    whiteSpace: 'nowrap'
  };

  const linkStyle: React.CSSProperties = {
    color: linkColor,
    fontSize: `${linkFontSize}px`,
    fontWeight: 500,
    textDecoration: 'none',
    fontFamily: "'Poppins', sans-serif",
    whiteSpace: 'nowrap'
  };

  return (
    <div
      className={`simple-nav-container absolute left-1/2 -translate-x-1/2 w-[90%] max-w-[920px] z-[99] top-[1.2em] md:top-[2em] ${className}`}
    >
      <nav
        aria-label="Main navigation"
        style={navStyle}
        className="rounded-full relative h-[64px] flex items-center"
      >
        <div className="flex items-center gap-3 min-w-0">
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={logoAlt}
              className="w-8 h-8 rounded-md object-cover flex-shrink-0"
            />
          ) : (
            <div
              aria-hidden
              className="w-8 h-8 rounded-md flex items-center justify-center text-sm font-bold select-none"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)', color: textColor, fontFamily: "'Poppins', sans-serif" }}
            >
              {/* {companyName?.[0] ?? 'W'} */}
            </div>
          )}

          <div className="overflow-hidden">
            <div style={companyStyle}>{companyName}</div>
          </div>
        </div>

        <div style={{ flex: 1 }} />

        <div className="flex items-center" style={{ gap: '2rem' }}>
          {links.map((lnk) => (
            <a
              key={lnk.label}
              href={lnk.href}
              style={linkStyle}
              className="hover:opacity-80 transition-opacity"
              
            >
              {lnk.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default SimpleNav;
