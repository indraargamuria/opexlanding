interface MockupProps {
  module: string;
  color: string;
}

export function ModuleMockup({ module, color }: MockupProps) {
  switch (module) {
    case 'timesheets':
      return <TimesheetsMockup color={color} />;
    case 'helpdesk':
      return <HelpdeskMockup color={color} />;
    case 'pmo':
      return <PMOMockup color={color} />;
    case 'crm':
      return <CRMMockup color={color} />;
    case 'expenses':
      return <ExpensesMockup color={color} />;
    default:
      return <TimesheetsMockup color={color} />;
  }
}

function TimesheetsMockup({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="260" rx="8" fill="#F8FAFC" />
      <rect x="16" y="16" width="368" height="228" rx="6" fill="white" stroke="#E2E8F0" />
      {/* Header */}
      <rect x="16" y="16" width="368" height="36" rx="6" fill="#0F172A" />
      <circle cx="36" cy="34" r="4" fill="#F59E0B" />
      <text x="52" y="38" fontSize="11" fill="white" fontFamily="IBM Plex Sans">Timesheets</text>
      {/* Timer */}
      <rect x="32" y="64" width="160" height="80" rx="4" fill="#F1F5F9" />
      <text x="48" y="88" fontSize="10" fill="#64748B">Live Timer</text>
      <text x="48" y="112" fontSize="20" fill="#0F172A" fontFamily="IBM Plex Sans">02:34:18</text>
      <rect x="48" y="122" width="60" height="16" rx="8" fill={color} />
      <text x="62" y="133" fontSize="8" fill="white">Running</text>
      {/* Approval queue */}
      <rect x="208" y="64" width="160" height="80" rx="4" fill="#F1F5F9" />
      <text x="224" y="88" fontSize="10" fill="#64748B">Pending Approval</text>
      <rect x="224" y="96" width="72" height="14" rx="2" fill="#E2E8F0" />
      <text x="228" y="106" fontSize="8" fill="#334155">John — 8h 30m</text>
      <rect x="224" y="114" width="72" height="14" rx="2" fill="#E2E8F0" />
      <text x="228" y="124" fontSize="8" fill="#334155">Sarah — 7h 45m</text>
      <rect x="300" y="96" width="40" height="14" rx="2" fill="#10B981" />
      <text x="306" y="106" fontSize="8" fill="white">Approve</text>
      {/* Cost rollup */}
      <rect x="32" y="156" width="336" height="72" rx="4" fill="#F1F5F9" />
      <text x="48" y="178" fontSize="10" fill="#64748B">Cost Rollup — Project Alpha</text>
      <rect x="48" y="188" width="120" height="8" rx="4" fill={color} opacity="0.3" />
      <rect x="48" y="188" width="86" height="8" rx="4" fill={color} />
      <text x="176" y="196" fontSize="9" fill="#334155">Budget: $43K / $50K</text>
      <rect x="48" y="204" width="80" height="8" rx="4" fill="#10B981" opacity="0.3" />
      <rect x="48" y="204" width="52" height="8" rx="4" fill="#10B981" />
      <text x="176" y="212" fontSize="9" fill="#334155">Actual: $26K</text>
    </svg>
  );
}

function HelpdeskMockup({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="260" rx="8" fill="#F8FAFC" />
      <rect x="16" y="16" width="368" height="228" rx="6" fill="white" stroke="#E2E8F0" />
      <rect x="16" y="16" width="368" height="36" rx="6" fill="#0F172A" />
      <circle cx="36" cy="34" r="4" fill="#F59E0B" />
      <text x="52" y="38" fontSize="11" fill="white" fontFamily="IBM Plex Sans">Helpdesk</text>
      {/* Ticket rows */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="32" y={64 + i * 42} width="336" height="36" rx="4" fill="#F1F5F9" />
          <circle cx="52" cy={82 + i * 42} r="6" fill={i === 0 ? '#EF4444' : i === 1 ? '#F59E0B' : '#10B981'} />
          <text x="68" y={80 + i * 42} fontSize="9" fill="#334155">
            {i === 0 ? 'URGENT: Production line down' : i === 1 ? 'SLA: Server maintenance' : 'Feature: New dashboard request'}
          </text>
          <rect x="300" y={74 + i * 42} width="52" height="14" rx="2" fill={color} />
          <text x="308" y={84 + i * 42} fontSize="8" fill="white">
            {i === 0 ? 'Assign' : i === 1 ? 'Reply' : 'Close'}
          </text>
          <text x="348" y={80 + i * 42} fontSize="8" fill="#94A3B8">
            {i === 0 ? '2m' : i === 1 ? '15m' : '1h'}
          </text>
        </g>
      ))}
      {/* SLA bar */}
      <rect x="32" y="192" width="336" height="36" rx="4" fill="#F1F5F9" />
      <text x="48" y="208" fontSize="9" fill="#64748B">SLA Compliance</text>
      <rect x="48" y="214" width="200" height="8" rx="4" fill="#10B981" opacity="0.3" />
      <rect x="48" y="214" width="176" height="8" rx="4" fill="#10B981" />
      <text x="260" y="222" fontSize="9" fill="#334155">88%</text>
    </svg>
  );
}

function PMOMockup({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="260" rx="8" fill="#F8FAFC" />
      <rect x="16" y="16" width="368" height="228" rx="6" fill="white" stroke="#E2E8F0" />
      <rect x="16" y="16" width="368" height="36" rx="6" fill="#0F172A" />
      <circle cx="36" cy="34" r="4" fill="#F59E0B" />
      <text x="52" y="38" fontSize="11" fill="white" fontFamily="IBM Plex Sans">PMO Board</text>
      {/* Kanban columns */}
      {[0, 1, 2].map((col) => (
        <g key={col}>
          <rect x={32 + col * 118} y="56" width="108" height="172" rx="4" fill="#F1F5F9" />
          <text x={40 + col * 118} y="72" fontSize="8" fill="#64748B">
            {col === 0 ? 'To Do' : col === 1 ? 'In Progress' : 'Done'}
          </text>
          {[0, 1, 2].map((row) => (
            <g key={row}>
              <rect x={38 + col * 118} y={80 + row * 48} width="96" height="40" rx="3" fill="white" stroke="#E2E8F0" />
              <rect x={44 + col * 118} y={88 + row * 42} width="50" height="4" rx="2" fill={color} opacity="0.4" />
              <rect x={44 + col * 118} y={98 + row * 42} width="70" height="4" rx="2" fill="#CBD5E1" />
              <circle cx={124 + col * 118} cy={92 + row * 42} r="4" fill={col === 2 ? '#10B981' : col === 1 ? '#F59E0B' : '#94A3B8'} />
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

function CRMMockup({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="260" rx="8" fill="#F8FAFC" />
      <rect x="16" y="16" width="368" height="228" rx="6" fill="white" stroke="#E2E8F0" />
      <rect x="16" y="16" width="368" height="36" rx="6" fill="#0F172A" />
      <circle cx="36" cy="34" r="4" fill="#F59E0B" />
      <text x="52" y="38" fontSize="11" fill="white" fontFamily="IBM Plex Sans">CRM Pipeline</text>
      {/* Pipeline stages */}
      {[0, 1, 2, 3].map((stage) => (
        <g key={stage}>
          <rect x={32 + stage * 92} y="56" width="84" height="172" rx="4" fill="#F1F5F9" />
          <text x={40 + stage * 92} y="72" fontSize="7" fill="#64748B">
            {stage === 0 ? 'Lead' : stage === 1 ? 'Qualify' : stage === 2 ? 'Proposal' : 'Won'}
          </text>
          {[0, 1].map((deal) => (
            <g key={deal}>
              <rect x={38 + stage * 92} y={80 + deal * 60} width="72" height="52" rx="3" fill="white" stroke="#E2E8F0" />
              <circle cx={50 + stage * 92} cy={96 + deal * 60} r="6" fill={color} opacity="0.3" />
              <text x={60 + stage * 92} y={100 + deal * 60} fontSize="7" fill="#334155">
                {stage === 0 ? 'Acme Inc' : stage === 1 ? 'Beta Corp' : stage === 2 ? 'Gamma Ltd' : stage === 3 ? 'Delta Co' : 'Epsilon'}
              </text>
              <text x={44 + stage * 92} y={120 + deal * 60} fontSize="7" fill="#94A3B8">
                ${(stage + 1) * 5}K
              </text>
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

function ExpensesMockup({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="260" rx="8" fill="#F8FAFC" />
      <rect x="16" y="16" width="368" height="228" rx="6" fill="white" stroke="#E2E8F0" />
      <rect x="16" y="16" width="368" height="36" rx="6" fill="#0F172A" />
      <circle cx="36" cy="34" r="4" fill="#F59E0B" />
      <text x="52" y="38" fontSize="11" fill="white" fontFamily="IBM Plex Sans">Expenses</text>
      {/* OCR scan */}
      <rect x="32" y="56" width="160" height="100" rx="4" fill="#F1F5F9" />
      <rect x="48" y="72" width="128" height="68" rx="3" fill="white" stroke="#E2E8F0" />
      <text x="56" y="88" fontSize="7" fill="#64748B">Invoice_2024_001.pdf</text>
      <rect x="56" y="96" width="80" height="4" rx="2" fill="#CBD5E1" />
      <rect x="56" y="106" width="100" height="4" rx="2" fill="#CBD5E1" />
      <rect x="56" y="116" width="60" height="4" rx="2" fill="#CBD5E1" />
      <rect x="56" y="128" width="48" height="10" rx="2" fill={color} />
      <text x="62" y="136" fontSize="7" fill="white">OCR Ready</text>
      {/* Approval flow */}
      <rect x="208" y="56" width="160" height="100" rx="4" fill="#F1F5F9" />
      <text x="224" y="72" fontSize="9" fill="#64748B">Approval Workflow</text>
      {['Draft', 'Pending', 'Approved'].map((s, i) => (
        <g key={s}>
          <rect x={224 + i * 44} y="84" width="40" height="18" rx="9" fill={i === 2 ? '#10B981' : i === 1 ? '#F59E0B' : '#94A3B8'} />
          <text x={230 + i * 44} y="96" fontSize="7" fill="white">{s}</text>
          {i < 2 && <text x={266 + i * 44} y="96" fontSize="8" fill="#CBD5E1">→</text>}
        </g>
      ))}
      <text x="224" y="116" fontSize="8" fill="#334155">Project: Alpha Manufacturing</text>
      <text x="224" y="130" fontSize="12" fill="#0F172A" fontFamily="IBM Plex Sans">$2,450.00</text>
      {/* Cost summary */}
      <rect x="32" y="168" width="336" height="60" rx="4" fill="#F1F5F9" />
      <text x="48" y="186" fontSize="9" fill="#64748B">Project Cost Summary</text>
      <text x="48" y="204" fontSize="8" fill="#334155">Labor (Timesheets): $26,000</text>
      <text x="48" y="218" fontSize="8" fill="#334155">Expenses: $8,450</text>
      <text x="280" y="204" fontSize="12" fill="#0F172A" fontFamily="IBM Plex Sans">$34,450</text>
      <text x="280" y="218" fontSize="8" fill="#64748B">Total Cost</text>
    </svg>
  );
}
