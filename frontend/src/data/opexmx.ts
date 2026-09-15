// OpexMX — standalone flagship product. Copy derived from mx.opexcg.com (2026-09).
export interface OpexMxModule {
  name: string;
  body: string;
  icon: string;
}

export const OPEXMX = {
  name: 'OpexMX',
  tagline: 'AI-Enabled, People-First Maintenance Execution',
  description:
    'A Computerized Maintenance Management System built for the floor you actually run — skills, shifts, capacity, and the people behind the work. Move maintenance off WhatsApp and spreadsheets into one system in days, not months.',
  heroStats: [
    { value: 'Days', label: 'To go-live, not months' },
    { value: '20+', label: 'AI tools via MCP' },
    { value: 'Real-time', label: 'Floor visibility' },
  ],
  valueProps: [
    {
      title: 'Work to the right person, not the same person',
      body: 'OpexMX knows every technician\u2019s skills, shift, and workload — so jobs always land in the right hands.',
    },
    {
      title: 'Your best technicians stop being the bottleneck',
      body: 'Balance load before burnout. Record how work gets done so knowledge stays when people move on.',
    },
    {
      title: 'One system fast enough to actually use',
      body: 'When the tool fits, teams stop working around it. Every job logged, every decision becomes data.',
    },
  ],
  modules: [
    { name: 'Preventive Maintenance', body: 'Schedule and execute routine maintenance', icon: 'CalendarCheck' },
    { name: 'Smart Assignment', body: 'Auto-assign work by skill, shift, and capacity', icon: 'Sparkles' },
    { name: 'Ticketing System', body: 'Efficient issue tracking and resolution', icon: 'Ticket' },
    { name: 'Shift Management', body: 'Schedule and track team shifts', icon: 'Clock' },
    { name: 'Personnel Training & Certifications', body: 'Track team skills and compliance', icon: 'GraduationCap' },
    { name: 'Calibration Management', body: 'Maintain equipment accuracy standards', icon: 'Gauge' },
    { name: 'Parts Management', body: 'Inventory and spare parts control', icon: 'Package' },
    { name: 'Docs & Knowledge Center', body: 'Centralized documentation hub', icon: 'BookOpen' },
    { name: 'Reporting & Analytics', body: 'Data-driven maintenance insights', icon: 'BarChart3' },
  ] as OpexMxModule[],
  howItWorks: [
    {
      title: 'Map your floor',
      body: 'We map how work really happens — your technicians\u2019 skills, your machines, your real workflow. Not the process on paper.',
    },
    {
      title: 'Go-live in days',
      body: 'Guided setup configures OpexMX to your operation. Your team starts day one with built-in training, not add-ons.',
    },
    {
      title: 'Run the floor',
      body: 'Work auto-assigns to the right person. See who\u2019s doing what, who\u2019s overloaded, and where things pile up — real time.',
    },
    {
      title: 'Connect your systems (optional)',
      body: 'Pull machine and PLC data, sync work orders with your ERP, auto-replenish spares. Less manual input, fewer errors, faster closing.',
    },
  ],
  aiPitch: {
    title: 'Talk to OpexMX in plain language',
    body: 'Connect Claude, Cursor, or any AI agent you already use. Ask it to create tickets, check inventory, find the right technician, or assign work orders — OpexMX handles the rest. 20+ ready-made tools, always current, permission-scoped per person.',
  },
  videoId: 'H4I4rk4Qf0M',
  appUrl: 'https://app.opexmx.com',
  siteUrl: 'https://mx.opexcg.com',
  valueBand: ['Manufacturing', 'FMCG & Food', 'Heavy Industry'],
  roadmap: [
    { version: 'v3.6', label: 'ERP & External System Integration', status: 'Available' },
    { version: 'v4.0', label: 'Energy Management & Digital Twin Foundation', status: 'Available' },
    { version: 'v5', label: 'AI Predictive Maintenance', status: 'Coming' },
  ],
};
