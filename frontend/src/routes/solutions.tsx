import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';
import { Link } from '@tanstack/react-router';
import { ArrowRight, ShieldCheck, Settings, LifeBuoy, KanbanSquare, Users, Receipt } from 'lucide-react';
const solutions = [
  {
    title: 'Manufacturing Operations',
    desc: 'Floor execution, maintenance, and real-time production tracking with OpexMX and Opex-AIO Timesheets.',
    products: ['OpexMX', 'Timesheets'],
    icon: Settings,
  },
  {
    title: 'Project & Portfolio Management',
    desc: 'Kanban boards, sprints, and resource planning with Opex-AIO PMO and CRM.',
    products: ['PMO', 'CRM'],
    icon: KanbanSquare,
  },
  {
    title: 'Customer Support & Service',
    desc: 'Shared inbox, SLA tracking, and AI-powered knowledge base with Opex-AIO Helpdesk.',
    products: ['Helpdesk'],
    icon: LifeBuoy,
  },
  {
    title: 'Finance & Expense Control',
    desc: 'OCR bill capture, approval workflows, and project cost attribution with Opex-AIO Expenses.',
    products: ['Expenses', 'Timesheets'],
    icon: Receipt,
  },
  {
    title: 'Sales & Pipeline',
    desc: 'Contacts, companies, and deals pipeline with Opex-AIO CRM.',
    products: ['CRM'],
    icon: Users,
  },
  {
    title: 'Lean Six Sigma Implementation',
    desc: 'Assessment, training, and coaching by Black Belt consultants — with software to sustain the gains.',
    products: ['Consultancy'],
    icon: ShieldCheck,
  },
];

function SolutionsPage() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 flex flex-col gap-8">
        {/* Header */}
        <section className="flex flex-col gap-3">
          <div className="text-[0.7rem] font-semibold tracking-wide uppercase text-blue">SOLUTIONS</div>
          <h1 className="text-[1.75rem] font-bold text-dark-text tracking-tight">How we help</h1>
          <p className="text-[0.875rem] text-muted leading-relaxed max-w-2xl">
            Every engagement combines our software with our consulting expertise.
            Pick a solution below to see how Opex-AIO modules and our advisory work together.
          </p>
        </section>

        {/* Solutions Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="flex flex-col gap-3 p-5 bg-white border border-border rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                <div className="w-10 h-10 rounded-lg bg-brand/8 flex items-center justify-center">
                  <Icon size={18} className="text-brand" />
                </div>
                <h2 className="text-[0.9375rem] font-heading font-semibold text-dark-text">{s.title}</h2>
                <p className="text-[0.75rem] text-muted leading-relaxed flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.products.map((p) => (
                    <Link key={p} to={p === 'OpexMX' ? '/opexmx' : '/products'} className="text-[0.5625rem] font-medium px-2 py-0.5 rounded-full bg-blue/10 text-blue hover:bg-blue/20">
                      {p}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* CTA */}
        <section className="bg-brand rounded-xl p-6 flex flex-col gap-3">
          <h2 className="text-[1.125rem] font-heading font-semibold text-white">Not sure which solution fits?</h2>
          <p className="text-[0.8125rem] text-white/70 leading-relaxed max-w-2xl">
            Tell us about your operation and we'll recommend the right combination of modules and consulting.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 bg-white text-brand text-[0.8125rem] font-heading font-semibold px-5 py-2.5 rounded-[6px] hover:bg-slate-100 transition-colors no-underline w-fit mt-1"
          >
            Talk to Us
            <ArrowRight size={14} />
          </Link>
        </section>
      </div>
    </div>
  );
}

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/solutions',
  component: SolutionsPage,
});
