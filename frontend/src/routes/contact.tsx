import { useState } from 'react';
import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';

const offices = [
  {
    label: 'Singapore HQ',
    address: '1 One North Crescent, Level 7, Razer Building, Singapore 138538',
    phone: '+65 6640 3178',
  },
  {
    label: 'Jakarta',
    address: 'Centennial Tower Lt. 29 Unit D-F, Jl. Jend Gatot Subroto Kav. 24-25, Jakarta Selatan 12930',
    phone: '+62 21 3042 0660',
  },
  {
    label: 'Penang',
    address: '1-21-01, Lintang Mayang Pasir 3, Suntech, 11950 Bayan Baru, Penang',
    phone: '+604 202 0971',
  },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Form */}
          <div className="flex flex-col gap-4">
            <div>
              <div className="text-[0.7rem] font-semibold tracking-wide uppercase text-blue">CONTACT</div>
              <h1 className="text-[1.5rem] font-bold text-dark-text tracking-tight mt-1">Let&apos;s talk about your floor</h1>
              <p className="text-[0.8125rem] text-muted mt-1">
                Tell us a bit about your operation and we&apos;ll follow up within 48 hours.
              </p>
            </div>
            {submitted ? (
              <div className="bg-blue-light border border-blue-border rounded-xl p-6 flex flex-col items-center gap-2 text-center">
                <span className="text-[1.5rem]">✓</span>
                <span className="text-[0.9375rem] font-heading font-semibold text-dark-text">Message sent</span>
                <span className="text-[0.75rem] text-muted">We&apos;ll get back to you within 48 hours.</span>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[0.75rem] font-heading font-semibold text-dark-text">Name</label>
                    <input type="text" required className="text-[0.8125rem] px-3 py-2 border border-border rounded-lg bg-white text-dark-text outline-none focus:border-blue transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[0.75rem] font-heading font-semibold text-dark-text">Email</label>
                    <input type="email" required className="text-[0.8125rem] px-3 py-2 border border-border rounded-lg bg-white text-dark-text outline-none focus:border-blue transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[0.75rem] font-heading font-semibold text-dark-text">Message</label>
                  <textarea rows={4} required className="text-[0.8125rem] px-3 py-2 border border-border rounded-lg bg-white text-dark-text outline-none focus:border-blue transition-colors resize-y min-h-[80px]" />
                </div>
                <button type="submit" className="self-start font-heading font-semibold text-[0.8125rem] px-6 py-2.5 bg-brand text-white rounded-lg hover:bg-brand-hover active:bg-brand-active transition-colors cursor-pointer">
                  Send message
                </button>
              </form>
            )}
          </div>

          {/* Right: Offices */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[1rem] font-heading font-semibold text-dark-text">Our offices</h2>
            <div className="flex flex-col gap-3">
              {offices.map((office) => (
                <div key={office.label} className="bg-white border border-border rounded-xl p-4 flex flex-col gap-1">
                  <span className="text-[0.8125rem] font-heading font-semibold text-dark-text">{office.label}</span>
                  <span className="text-[0.75rem] text-muted leading-relaxed">{office.address}</span>
                  <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-[0.75rem] text-blue mt-1 hover:underline">
                    {office.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});
