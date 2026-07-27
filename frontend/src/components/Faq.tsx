import { useState } from 'react';

/*
 * FAQ — simple accordion between Clients and closing CTA.
 * All answers are DRAFT and need real review before launch.
 * Styled consistently with existing cards (--border, --light-bg, no new colors).
 */

const faqs = [
  {
    // DRAFT COPY — needs subject-matter review before launch
    q: 'Does this require replacing our existing ERP or MES?',
    a: 'No. The brand-agnostic approach integrates with what\u2019s already in place where it makes sense, and we only recommend replacement when the existing system genuinely can\u2019t support the target outcomes. Most engagements start by getting more out of the systems you already run.',
  },
  {
    // DRAFT COPY — needs subject-matter review before launch
    q: 'How long does a typical engagement take?',
    a: 'It depends on scope. Assessment-only work runs 4\u20136 weeks. A full Assessment-to-Implementation cycle typically runs 4\u20136 months, with the Technology ecosystem phase driven by integration complexity. We scope explicitly before committing \u2014 no open-ended consulting loops.',
  },
  {
    // DRAFT COPY — needs subject-matter review before launch
    q: 'Do you only work with large enterprises, or also mid-size manufacturers?',
    a: 'Both. The methodology scales \u2014 the difference is usually how much external bench strength you need versus what we can transfer to your internal team. Mid-size manufacturers often get the fastest payback because decisions get made faster.',
  },
  {
    // DRAFT COPY — needs subject-matter review before launch
    q: 'What happens after implementation \u2014 do you stay involved?',
    a: 'Yes, optionally. The Implementation phase includes a sustainment window (typically 90 days) where we coach your team through real-world exceptions. Beyond that, we offer retained advisory and continuous improvement support \u2014 but only if you want it. The goal is capability transfer, not recurring dependency.',
  },
  {
    // DRAFT COPY — needs subject-matter review before launch
    q: 'How is OpexCG different from a pure software vendor?',
    a: 'A pure software vendor sells you a product and leaves. We pair the technology with the operational discipline (Lean Six Sigma, value stream mapping, floor-level training) required to actually drive adoption. The same team that maps your value stream selects the tools, integrates them, and trains your people to run them.',
  },
];

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={itemStyle}>
      <button
        type="button"
        onClick={onToggle}
        style={buttonStyle}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${faq.q.slice(0, 8).replace(/\s/g, '-')}`}
      >
        <span style={questionStyle}>{faq.q}</span>
        <span style={iconStyle} aria-hidden="true">
          {isOpen ? '\u2212' : '+'}
        </span>
      </button>
      <div
        id={`faq-panel-${faq.q.slice(0, 8).replace(/\s/g, '-')}`}
        style={{
          ...panelStyle,
          maxHeight: isOpen ? '400px' : '0',
          opacity: isOpen ? 1 : 0,
        }}
        role="region"
      >
        <p style={answerStyle}>{faq.a}</p>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section style={sectionStyle} id="faq">
      <div style={innerStyle}>
        <div style={headerStyle}>
          <p style={overlineStyle}>FAQ</p>
          {/* DRAFT COPY — needs review before launch */}
          <h2 style={headingStyle}>Questions buyers actually ask</h2>
        </div>

        <div style={listStyle}>
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const sectionStyle: React.CSSProperties = {
  background: 'var(--light-bg)',
  padding: '96px 24px',
};

const innerStyle: React.CSSProperties = {
  maxWidth: '820px',
  margin: '0 auto',
};

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '48px',
};

const overlineStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-caption)',
  fontWeight: 500,
  color: 'var(--brand)',
  letterSpacing: '0.06em',
  textTransform: 'uppercase' as const,
  marginBottom: '16px',
};

const headingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-h2)',
  fontWeight: 'var(--weight-h2)',
  lineHeight: 'var(--leading-heading)',
  color: 'var(--dark-text)',
};

const listStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const itemStyle: React.CSSProperties = {
  background: 'var(--white)',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  overflow: 'hidden',
};

const buttonStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  padding: '20px 24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  cursor: 'pointer',
  textAlign: 'left' as const,
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-h4)',
  fontWeight: 600,
  color: 'var(--dark-text)',
};

const questionStyle: React.CSSProperties = {
  flex: 1,
};

const iconStyle: React.CSSProperties = {
  flexShrink: 0,
  fontSize: '1.5rem',
  fontWeight: 400,
  color: 'var(--brand)',
  lineHeight: 1,
};

const panelStyle: React.CSSProperties = {
  maxHeight: '0',
  overflow: 'hidden',
  transition: 'max-height 0.3s ease-out, opacity 0.3s ease-out',
};

const answerStyle: React.CSSProperties = {
  padding: '0 24px 24px',
  fontSize: '1rem',
  lineHeight: 1.65,
  color: 'var(--muted)',
};
