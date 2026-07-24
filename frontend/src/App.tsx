import './index.css';

export default function App() {
  return (
    <div style={{ padding: '48px 24px', maxWidth: '960px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '16px' }}>OpexCG Landing Page</h1>
      <p style={{ color: 'var(--muted)', marginBottom: '32px' }}>
        Design tokens and project scaffolding loaded. Sections will be built in subsequent tasks.
      </p>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '16px' }}>Color Tokens</h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {[
            { name: '--brand', value: '#17A5DC' },
            { name: '--brand-hover', value: '#1490C2' },
            { name: '--brand-active', value: '#117BA8' },
            { name: '--dark-accent', value: '#0F4664' },
            { name: '--light-bg', value: '#F8FBFD' },
            { name: '--white', value: '#FFFFFF' },
            { name: '--dark-text', value: '#1F2937' },
            { name: '--muted', value: '#6B7280' },
            { name: '--border', value: '#E2E8F0' },
          ].map((c) => (
            <div key={c.name} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  background: c.value,
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  marginBottom: '6px',
                }}
              />
              <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{c.name}</div>
              <div style={{ fontSize: '11px', fontFamily: 'monospace' }}>{c.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '16px' }}>Typography</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3>Heading — IBM Plex Sans</h3>
          <p style={{ color: 'var(--muted)', fontSize: 'var(--text-caption)' }}>
            Industrial character, slightly squared letterforms. Feels technical without being sterile.
          </p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h4>Body — Inter</h4>
          <p style={{ color: 'var(--muted)', fontSize: 'var(--text-caption)' }}>
            Highly legible, neutral. Purposefully plain so headings carry the voice.
          </p>
        </div>
        <div style={{ fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>
          <div style={{ fontSize: 'var(--text-h1)', fontWeight: 'var(--weight-h1)' }}>
            H1 — The quick brown fox
          </div>
          <div style={{ fontSize: 'var(--text-h2)', fontWeight: 'var(--weight-h2)' }}>
            H2 — The quick brown fox
          </div>
          <div style={{ fontSize: 'var(--text-h3)', fontWeight: 'var(--weight-h3)' }}>
            H3 — The quick brown fox
          </div>
          <div style={{ fontSize: 'var(--text-h4)', fontWeight: 'var(--weight-h4)' }}>
            H4 — The quick brown fox
          </div>
        </div>
        <div style={{ fontFamily: 'var(--font-body)' }}>
          <div style={{ fontSize: 'var(--text-body)', marginBottom: '4px' }}>
            Body — The quick brown fox jumps over the lazy dog.
          </div>
          <div style={{ fontSize: 'var(--text-caption)', color: 'var(--muted)' }}>
            Caption — The quick brown fox jumps over the lazy dog.
          </div>
        </div>
      </section>
    </div>
  );
}
