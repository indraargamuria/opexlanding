/*
 * ProductsToEcosystemBridge — one-line transitional statement between
 * AI-enabled products and Technology ecosystem. Centered, body-text size,
 * plain background, no card/border. Copy is draft / needs review.
 */
export function ProductsToEcosystemBridge() {
  return (
    <section style={sectionStyle} aria-label="Build and integrate">
      <div style={innerStyle}>
        {/* DRAFT COPY — needs review before launch */}
        <p style={lineStyle}>
          Where a best-fit tool already exists, we integrate it.
          Where one doesn&rsquo;t, we&rsquo;ve built it ourselves.
        </p>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  background: 'var(--light-bg)',
  padding: '32px 24px',
};

const innerStyle: React.CSSProperties = {
  maxWidth: '820px',
  margin: '0 auto',
  textAlign: 'center',
};

const lineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-h4)',
  fontWeight: 500,
  lineHeight: 1.5,
  color: 'var(--dark-text)',
};
