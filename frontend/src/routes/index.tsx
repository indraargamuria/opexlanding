import { useState } from 'react';
import { createRoute, Link } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';

const partners = [
  { name: 'Epicor', slug: 'epicor' },
  { name: 'Siemens', slug: 'siemens' },
  { name: 'Mendix', slug: 'mendix' },
  { name: 'Zebra', slug: 'zebra' },
  { name: 'UiPath', slug: 'uipath' },
];

function HomePage() {
  const [activeTab, setActiveTab] = useState<'ecosystem' | 'assistant'>('ecosystem');

  return (
    <div className="home-page" style={pageStyle}>
      {/* Main 50/50 split */}
      <div className="home-grid" style={mainGridStyle}>
        {/* Left Canvas — Hero Copy & Micro-Stats */}
          <div className="home-left" style={leftColStyle}>
          <div style={badgeStyle}>
            <span style={{ marginRight: 4 }}>&#9889;</span>
            Lean Six Sigma &middot; Industry 4.0 Native
          </div>
          <h1 style={headlineStyle}>
            Industrial technology and AI, implemented by people who&rsquo;ve actually run the floor
          </h1>
          <div className="home-cta-row" style={ctaRowStyle}>
            <Link to="/contact" style={ctaPrimaryStyle}>
              Talk to us
            </Link>
            <a
              href="https://app.opexcg.com/assistant"
              target="_blank"
              rel="noopener noreferrer"
              style={ctaSecondaryStyle}
            >
              Launch OpexAssistant
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
          <div className="home-stats" style={statsRowStyle}>
            <div style={statItemStyle}>
              <span style={statValueStyle}>200+</span>
              <span style={statLabelStyle}>ISV Integrations</span>
            </div>
            <div style={statDividerStyle} />
            <div style={statItemStyle}>
              <span style={statValueStyle}>Industry 4.0</span>
              <span style={statLabelStyle}>Ready</span>
            </div>
            <div style={statDividerStyle} />
            <div style={statItemStyle}>
              <span style={statValueStyle}>&lt;120ms</span>
              <span style={statLabelStyle}>Sync Latency</span>
            </div>
          </div>
        </div>

        {/* Right Canvas — Interactive Ecosystem & AI */}
        <div style={rightColStyle}>
          {/* Tab Controls */}
          <div style={tabsRowStyle}>
            <button
              onClick={() => setActiveTab('ecosystem')}
              style={{ ...tabBtnStyle, ...(activeTab === 'ecosystem' ? tabBtnActiveStyle : {}) }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><circle cx="4" cy="12" r="1"/><circle cx="20" cy="12" r="1"/>
              </svg>
              Ecosystem Map
            </button>
            <button
              onClick={() => setActiveTab('assistant')}
              style={{ ...tabBtnStyle, ...(activeTab === 'assistant' ? tabBtnActiveStyle : {}) }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M12 2a4 4 0 0 1 4 4c0 2-2 3-2 3H8s-2-1-2-3a4 4 0 0 1 4-4Z"/><path d="M16 9v1a4 4 0 0 1-8 0V9"/><path d="M12 16v3"/><path d="M8 22h8"/>
              </svg>
              OpexAssistant AI Engine
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'ecosystem' ? (
            <div style={ecosystemCardStyle}>
              <img
                src="/images/technology-partner.png"
                alt="OpexDX Technology Ecosystem — brand-agnostic integration layer"
                className="home-ecosystem-img"
                style={ecosystemImgStyle}
              />
              <div style={ecosystemBannerStyle}>
                Brand-agnostic integration layer for Siemens, Epicor, UiPath &amp; custom MES.
              </div>
            </div>
          ) : (
            <div style={assistantCardStyle}>
              <div style={assistantHeaderStyle}>
                <div style={assistantDotStyle} />
                <div style={assistantDotStyle} />
                <div style={assistantDotStyle} />
                <span style={assistantTitleStyle}>OpexAssistant — AI Query</span>
              </div>
              <div style={assistantBodyStyle}>
                <div style={assistantLabelStyle}>$ query &quot;Optimize production line throughput&quot;</div>
                <div style={assistantOutputStyle}>
                  <div style={outputRowStyle}>
                    <span style={outputKeyStyle}>Root Cause</span>
                    <span style={outputValStyle}>Bottleneck at Station #3 (cycle time +38%)</span>
                  </div>
                  <div style={outputRowStyle}>
                    <span style={outputKeyStyle}>Recommendation</span>
                    <span style={outputValStyle}>Redistribute load across Stations #2-#4</span>
                  </div>
                  <div style={outputRowStyle}>
                    <span style={outputKeyStyle}>Est. Impact</span>
                    <span style={outputValStyle}>+22% OEE &middot; 6-week payback period</span>
                  </div>
                </div>
                <div style={assistantCmdStyle}>
                  <span style={assistantCursorStyle}>&gt;</span> Generating implementation plan...
                </div>
              </div>
              <a
                href="https://app.opexcg.com/assistant"
                target="_blank"
                rel="noopener noreferrer"
                style={assistantLaunchStyle}
              >
                Launch OpexAssistant
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Bottom — Enterprise Partner Ticker */}
      <div className="home-ticker" style={tickerStyle}>
        <span style={tickerLabelStyle}>Ecosystem</span>
        <div className="ticker-track" style={tickerTrackStyle}>
          {[...partners, ...partners].map((p, i) => (
            <span key={`${p.slug}-${i}`} style={tickerLogoStyle}>
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const pageStyle: React.CSSProperties = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  maxWidth: '1200px',
  margin: '0 auto',
};

const mainGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '28px',
  flex: 1,
  minHeight: 0,
};

/* ── Left column ── */
const leftColStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '14px',
};

const badgeStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.75rem',
  fontWeight: 500,
  color: 'var(--brand)',
  letterSpacing: '0.04em',
  textTransform: 'uppercase' as const,
};

const headlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.625rem',
  fontWeight: 700,
  lineHeight: 1.18,
  color: 'var(--dark-text)',
  letterSpacing: '-0.02em',
};

const ctaRowStyle: React.CSSProperties = {
  display: 'flex',
  gap: '10px',
  marginTop: '4px',
};

const ctaPrimaryStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  background: 'var(--brand)',
  color: 'var(--white)',
  fontFamily: 'var(--font-heading)',
  fontWeight: 600,
  fontSize: '0.8125rem',
  padding: '10px 22px',
  borderRadius: '6px',
  textDecoration: 'none',
  transition: 'background 0.15s ease',
};

const ctaSecondaryStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontFamily: 'var(--font-heading)',
  fontWeight: 500,
  fontSize: '0.8125rem',
  padding: '10px 22px',
  borderRadius: '6px',
  textDecoration: 'none',
  color: 'var(--brand)',
  border: '1px solid var(--brand)',
  transition: 'background 0.15s ease, color 0.15s ease',
};

const statsRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0',
  marginTop: '8px',
  padding: '12px 0',
  borderTop: '1px solid var(--border)',
  borderBottom: '1px solid var(--border)',
};

const statItemStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
  gap: '1px',
};

const statValueStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1rem',
  fontWeight: 700,
  color: 'var(--dark-text)',
};

const statLabelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.6875rem',
  fontWeight: 500,
  color: 'var(--muted)',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.03em',
};

const statDividerStyle: React.CSSProperties = {
  width: '1px',
  height: '28px',
  background: 'var(--border)',
};

/* ── Right column ── */
const rightColStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '10px',
};

const tabsRowStyle: React.CSSProperties = {
  display: 'flex',
  gap: '8px',
};

const tabBtnStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontFamily: 'var(--font-body)',
  fontSize: '0.75rem',
  fontWeight: 500,
  padding: '6px 14px',
  borderRadius: '20px',
  border: '1px solid var(--border)',
  background: 'var(--white)',
  color: 'var(--muted)',
  cursor: 'pointer',
  transition: 'all 0.15s ease',
};

const tabBtnActiveStyle: React.CSSProperties = {
  background: 'var(--brand)',
  color: 'var(--white)',
  borderColor: 'var(--brand)',
};

const ecosystemCardStyle: React.CSSProperties = {
  background: 'var(--white)',
  border: '1px solid var(--border)',
  borderRadius: '12px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
};

const ecosystemImgStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  display: 'block',
  objectFit: 'contain',
  maxHeight: '260px',
};

const ecosystemBannerStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.75rem',
  color: 'var(--muted)',
  padding: '8px 16px',
  background: 'rgba(15,70,100,0.03)',
  borderTop: '1px solid var(--border)',
  textAlign: 'center',
  lineHeight: 1.4,
};

/* ── Assistant tab ── */
const assistantCardStyle: React.CSSProperties = {
  background: '#0F172A',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '12px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
  minHeight: '280px',
};

const assistantHeaderStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  padding: '10px 16px',
  background: 'rgba(255,255,255,0.04)',
  borderBottom: '1px solid rgba(255,255,255,0.06)',
};

const assistantDotStyle: React.CSSProperties = {
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.2)',
};

const assistantTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.6875rem',
  color: 'rgba(255,255,255,0.4)',
  marginLeft: '6px',
};

const assistantBodyStyle: React.CSSProperties = {
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  flex: 1,
};

const assistantLabelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.8125rem',
  fontWeight: 500,
  color: 'rgba(23,165,220,0.85)',
};

const assistantOutputStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  background: 'rgba(255,255,255,0.04)',
  borderRadius: '8px',
  padding: '12px 14px',
};

const outputRowStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1px',
};

const outputKeyStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.6875rem',
  fontWeight: 600,
  color: 'rgba(255,255,255,0.4)',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.04em',
};

const outputValStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.8125rem',
  fontWeight: 400,
  color: 'rgba(255,255,255,0.85)',
};

const assistantCmdStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.75rem',
  fontWeight: 400,
  color: 'rgba(255,255,255,0.35)',
};

const assistantCursorStyle: React.CSSProperties = {
  color: 'var(--brand)',
  fontWeight: 700,
  marginRight: '4px',
};

const assistantLaunchStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontFamily: 'var(--font-heading)',
  fontWeight: 600,
  fontSize: '0.75rem',
  padding: '8px 18px',
  background: 'var(--brand)',
  color: 'var(--white)',
  textDecoration: 'none',
  alignSelf: 'flex-start',
  borderRadius: '6px',
  margin: '0 16px 16px',
  transition: 'background 0.15s ease',
};

/* ── Bottom ticker ── */
const tickerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  padding: '8px 16px',
  background: 'var(--white)',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  flexShrink: 0,
  overflow: 'hidden',
};

const tickerLabelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.6875rem',
  fontWeight: 600,
  color: 'var(--muted)',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  whiteSpace: 'nowrap' as const,
  flexShrink: 0,
};

const tickerTrackStyle: React.CSSProperties = {
  display: 'flex',
  gap: '32px',
  overflow: 'hidden',
  whiteSpace: 'nowrap' as const,
};

const tickerLogoStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.8125rem',
  fontWeight: 500,
  color: 'var(--muted)',
  opacity: 0.7,
  whiteSpace: 'nowrap' as const,
};
