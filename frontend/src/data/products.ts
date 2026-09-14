export interface ProductModule {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: { title: string; body: string }[];
  howItWorks: { title: string; body: string }[];
  valueBand: string[];
  appUrl: string;
  icon: string;
  color: string;
}

export const PRODUCT_MODULES: ProductModule[] = [
  {
    id: 'timesheets',
    name: 'Timesheets',
    tagline: 'A timer, approvals, and cost rollups per project',
    description: 'Track time with a live timer, approve entries with confidence, and roll up labor cost per project with Excel/CSV export.',
    features: [
      { title: 'Live timer', body: 'One active timer per person, 1-minute minimum, auto-stop after 12h — no forgotten running clocks.' },
      { title: 'Approvals', body: 'Pending entries reviewed in batches — managers approve or reject without opening each row.' },
      { title: 'Cost rollups', body: 'Labor cost per project and per client, with budget vs actual and Excel/CSV export.' },
      { title: 'Projects & clients', body: 'Organize time around projects, clients, and billable tags — with statuses from planning to archived.' },
      { title: 'Team & reports', body: 'Team views and reports for leads, plus an audit log for admins — full visibility into who logged what.' },
      { title: 'Tags', body: 'Categorize entries with tags for billing, project type, or anything your business tracks.' },
    ],
    howItWorks: [
      { title: 'Start the timer', body: 'Pick a project and hit start — or log an entry manually if you forgot.' },
      { title: 'Submit for approval', body: 'Entries land in the pending queue; leads approve or reject in batches.' },
      { title: 'Roll up the cost', body: 'Labor cost per project and client, budget vs actual, exported to Excel or CSV.' },
    ],
    valueBand: ['Agencies', 'Consultancies', 'Billing teams'],
    appUrl: 'https://app.aio.opexcg.com/timesheets',
    icon: 'Clock',
    color: '#3B82F6',
  },
  {
    id: 'helpdesk',
    name: 'Helpdesk',
    tagline: 'Tickets, KB, and SLAs for your support team',
    description: 'A mature helpdesk: shared inbox, knowledge base with AI answers, SLA policies, and workload views — ready for multiple teams from day one.',
    features: [
      { title: 'Shared inbox', body: 'Every customer conversation in one queue, with assignment, priorities, and full history.' },
      { title: 'AI knowledge base', body: 'Draft answers from your own docs — grounded in the KB, reviewed by a human before it ships.' },
      { title: 'SLA policies', body: 'First-response and resolution targets per queue, with breach tracking built in.' },
      { title: 'Customers & projects', body: 'Organize conversations around the accounts and projects they belong to — shared with your other products.' },
      { title: 'Custom fields', body: 'Tailor tickets to your workflow with custom fields and per-workspace configuration.' },
      { title: 'Workload view', body: "See who's carrying what, balance the queue, and staff to skill level instead of guesswork." },
    ],
    howItWorks: [
      { title: 'Tune your workspace', body: 'Invite your team, connect customers and projects, and set up SLA targets for each queue.' },
      { title: 'Resolve from one inbox', body: 'Tickets route to your team with priority and history — draft answers from the KB, assign, and reply.' },
      { title: 'Watch the SLAs', body: 'Breach tracking and workload views keep every conversation inside its target.' },
    ],
    valueBand: ['Support teams', 'Service desks', 'Multi-team orgs'],
    appUrl: 'https://app.aio.opexcg.com/helpdesk',
    icon: 'LifeBuoy',
    color: '#10B981',
  },
  {
    id: 'pmo',
    name: 'PMO',
    tagline: 'Boards, sprints, and pages for project teams',
    description: 'A Plane-style project tool: kanban board, backlog, sprints, modules, pages, and a live activity trail for every task.',
    features: [
      { title: 'Kanban board', body: 'Drag tasks across states, group by assignee or label, and keep the backlog next to the board.' },
      { title: 'Sprints', body: 'Timebox a subset of tasks per project with history — move a task across sprints without losing its trail.' },
      { title: 'Modules', body: 'Group tasks into epics and workstreams that roll up across the board.' },
      { title: 'Pages', body: 'Write specs, meeting notes, and runbooks with a rich editor — linked to the tasks they describe.' },
      { title: 'Analytics', body: 'Cycle time, throughput, and workload signals per project — so planning is based on data, not vibes.' },
      { title: 'Activity trail', body: 'Every change, comment, and relation on a task in one timeline.' },
    ],
    howItWorks: [
      { title: 'Create a project', body: 'Set up states, labels, and a backlog — then draft pages to capture the plan.' },
      { title: 'Run the work', body: 'Pull tasks into sprints, move them on the board, and watch the activity trail accumulate.' },
      { title: "Plan what's next", body: 'Analytics show where time goes — use it to shape the next sprint with confidence.' },
    ],
    valueBand: ['Project teams', 'Product teams', 'Portfolio leads'],
    appUrl: 'https://app.aio.opexcg.com/pmo',
    icon: 'KanbanSquare',
    color: '#8B5CF6',
  },
  {
    id: 'crm',
    name: 'CRM',
    tagline: 'Contacts and a deals pipeline that moves',
    description: 'A standalone CRM: customer contacts, companies, and a kanban deals pipeline with stage rollups — works even without PMO.',
    features: [
      { title: 'Contacts', body: 'Customer records linked to companies, with source and status tracked.' },
      { title: 'Companies', body: 'Company profiles that group contacts and deals, with type and status.' },
      { title: 'Deals pipeline', body: 'Drag deals across stages and watch the rollups update per stage.' },
      { title: 'Dashboard', body: 'A home view that surfaces the pipeline health and follow-ups at a glance.' },
      { title: 'Tasks', body: 'Follow-ups and to-dos attached to deals and contacts — nothing slips.' },
      { title: 'Standalone', body: 'CRM-native deals, not task-locked — buy CRM alone and it just works.' },
    ],
    howItWorks: [
      { title: 'Add contacts & companies', body: 'Build your address book with sources, statuses, and company links.' },
      { title: 'Move deals through stages', body: 'Drag deals along the pipeline and watch each stage\'s rollup update live.' },
      { title: 'Follow up, close, repeat', body: 'Tasks keep the follow-ups moving until the deal is won — then the trail is there for the next one.' },
    ],
    valueBand: ['Sales teams', 'Founders', 'Account managers'],
    appUrl: 'https://app.aio.opexcg.com/crm',
    icon: 'Users',
    color: '#F59E0B',
  },
  {
    id: 'expenses',
    name: 'Expenses',
    tagline: 'Bill capture, OCR, and project cost attribution',
    description: 'Upload invoices and receipts, let OCR draft the entry, approve, and attribute the spend to a project — cost per project = labor + real spend.',
    features: [
      { title: 'OCR drafts', body: 'AI vision reads vendor, date, and totals into a draft you review before saving.' },
      { title: 'Approval workflow', body: 'Draft → submit → approve → paid, with project attribution at every step.' },
      { title: 'Project attribution', body: 'Attribute spend to a project or client the moment an expense is approved.' },
      { title: 'Status tracking', body: 'Every expense visible as draft, pending, or rejected — nothing gets lost in a pile.' },
      { title: 'Cost per project', body: 'Timesheets labor plus expenses, summed per project in one report.' },
      { title: 'One inbox', body: 'All submissions land in a single inbox with filters — review everything in one pass.' },
    ],
    howItWorks: [
      { title: 'Snap or upload', body: 'Drop the invoice or receipt — OCR reads the vendor, date, and totals.' },
      { title: 'Review & approve', body: 'Fix the draft if needed, attribute it to a project, and approve.' },
      { title: 'See real project cost', body: 'Labor from timesheets plus real spend — per project, in one report.' },
    ],
    valueBand: ['Finance teams', 'Ops leads', 'Project accountants'],
    appUrl: 'https://app.aio.opexcg.com/expenses',
    icon: 'Receipt',
    color: '#EF4444',
  },
];

export const OPEX_AIO = {
  name: 'Opex-AIO',
  tagline: 'All-in-one operational software for modern teams',
  description: 'Five modular products — Timesheets, Helpdesk, PMO, CRM, and Expenses — that work independently or together. One login, one platform, pick what you need.',
  appUrl: 'https://app.aio.opexcg.com',
};
