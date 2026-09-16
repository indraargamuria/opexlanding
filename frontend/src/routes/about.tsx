import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';

const founders = [
  {
    name: 'Franklin Kurniawan',
    title: 'Founder & Principal Consultant',
    bio: '20+ years in operational excellence across SEA manufacturing. Lean Six Sigma Black Belt.',
    image: '/images/founder-1.jpg',
  },
  {
    name: 'Lee Theam Wah',
    title: 'Co-Founder & Technology Director',
    bio: 'Industrial automation and systems integration. Leads OpexCG\'s brand-agnostic tech practice.',
    image: '/images/founder-2.jpg',
  },
  {
    name: 'Rajendra Khrisnan',
    title: 'Co-Founder & Senior Consultant',
    bio: 'Specialist in Lean Six Sigma training and organizational capability building across SEA.',
    image: '/images/founder-3.jpg',
  },
];

const values = [
  { label: 'Brand Agnostic', desc: 'We recommend the right tool, not the one that pays us commission.' },
  { label: 'Practical Lean', desc: 'Our consultants have lived the factory floor — not just the classroom.' },
  { label: 'Technology First', desc: 'Industry 4.0 isn\'t a buzzword here. It\'s our daily practice.' },
  { label: 'SEA Focus', desc: 'Singapore, Malaysia, Indonesia, Vietnam — we know the region.' },
];

function AboutPage() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-8 flex flex-col gap-10">
        {/* Header */}
        <section className="flex flex-col gap-2">
          <div className="text-[0.7rem] font-semibold tracking-wide uppercase text-blue">ABOUT US</div>
          <h1 className="text-[1.75rem] font-bold text-dark-text tracking-tight">Operational expertise behind every recommendation</h1>
          <p className="text-[0.875rem] text-muted leading-relaxed max-w-2xl">
            OpexCG combines 20+ years of Lean Six Sigma consulting with modern industrial technology.
            We help manufacturing operations across Southeast Asia move from spreadsheets and WhatsApp
            to integrated, AI-powered systems — without locking you into a single vendor.
          </p>
        </section>

        {/* Values */}
        <section className="flex flex-col gap-3">
          <h2 className="text-[1.125rem] font-heading font-semibold text-dark-text">What we believe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {values.map((v) => (
              <div key={v.label} className="bg-white border border-border rounded-xl p-4 flex flex-col gap-1">
                <span className="text-[0.8125rem] font-heading font-semibold text-dark-text">{v.label}</span>
                <span className="text-[0.75rem] text-muted leading-relaxed">{v.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Founders */}
        <section className="flex flex-col gap-3">
          <h2 className="text-[1.125rem] font-heading font-semibold text-dark-text">Our founders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {founders.map((f) => (
              <div key={f.name} className="bg-white border border-border rounded-xl p-5 flex flex-col items-center text-center gap-3">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-blue-light"
                />
                <div className="flex flex-col gap-1">
                  <span className="text-[0.875rem] font-heading font-semibold text-dark-text">{f.name}</span>
                  <span className="text-[0.6875rem] font-medium text-blue">{f.title}</span>
                  <span className="text-[0.75rem] text-muted leading-relaxed">{f.bio}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});
