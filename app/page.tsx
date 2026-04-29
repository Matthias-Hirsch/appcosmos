import { Boxes, Plug, DollarSign, ExternalLink } from "lucide-react";

const events = [
  { time: "02.04.2026, 14:09", action: "llm_call", actor: "b07b323a469592c83b9c33e98d4556708c5df5b95feb585d9785a45720eb1589", target: "anthropic:claude-sonnet-4-5", app: "platform-assistant" },
  { time: "02.04.2026, 13:59", action: "llm_call", actor: "b07b323a469592c83b9c33e98d4556708c5df5b95feb585d9785a45720eb1589", target: "anthropic:claude-sonnet-4-5", app: "platform-assistant" },
  { time: "30.03.2026, 21:34", action: "llm_call", actor: "b07b323a469592c83b9c33e98d4556708c5df5b95feb585d9785a45720eb1589", target: "anthropic:claude-sonnet-4-5", app: "platform-assistant" },
  { time: "30.03.2026, 21:34", action: "app.deployed", actor: "platform-deploy", target: "company-search", app: "company-search" },
  { time: "30.03.2026, 21:34", action: "llm_call", actor: "b07b323a469592c83b9c33e98d4556708c5df5b95feb585d9785a45720eb1589", target: "anthropic:claude-sonnet-4-5", app: "platform-assistant" },
  { time: "30.03.2026, 21:33", action: "llm_call", actor: "b07b323a469592c83b9c33e98d4556708c5df5b95feb585d9785a45720eb1589", target: "anthropic:claude-sonnet-4-5", app: "platform-assistant" },
  { time: "30.03.2026, 21:27", action: "llm_call", actor: "b07b323a469592c83b9c33e98d4556708c5df5b95feb585d9785a45720eb1589", target: "anthropic:claude-sonnet-4-5", app: "platform-assistant" },
  { time: "30.03.2026, 21:23", action: "llm_call", actor: "b07b323a469592c83b9c33e98d4556708c5df5b95feb585d9785a45720eb1589", target: "anthropic:claude-sonnet-4-5", app: "platform-assistant" },
  { time: "30.03.2026, 21:15", action: "llm_call", actor: "b07b323a469592c83b9c33e98d4556708c5df5b95feb585d9785a45720eb1589", target: "anthropic:claude-sonnet-4-5", app: "platform-assistant" },
];

function KpiCard({ label, value, sub, Icon }: { label: string; value: string; sub?: string; Icon: any }) {
  return (
    <div className="bg-panel border border-border rounded-xl p-6">
      <div className="flex items-start justify-between">
        <div className="text-sm text-muted">{label}</div>
        <Icon size={18} className="text-muted" />
      </div>
      <div className="text-3xl font-semibold mt-3">{value}</div>
      {sub && <div className="text-xs text-muted mt-1">{sub}</div>}
    </div>
  );
}

function IntegrationCard({ name, sub }: { name: string; sub: string }) {
  return (
    <div className="bg-panel border border-border rounded-xl p-4 flex items-start justify-between hover:border-muted/50 transition">
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-xs text-muted">{sub}</div>
      </div>
      <ExternalLink size={14} className="text-muted" />
    </div>
  );
}

export default function Page() {
  return (
    <div className="space-y-8 max-w-[1400px]">
      <div>
        <h1 className="text-3xl font-semibold">Übersicht</h1>
        <p className="text-sm text-muted mt-1">Plattform-Status auf einen Blick</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <KpiCard label="Apps" value="9" Icon={Boxes} />
        <KpiCard label="Integrationen" value="7" sub="7 aktiv" Icon={Plug} />
        <KpiCard label="LLM-Kosten (Monat)" value="0,13 $" Icon={DollarSign} />
      </div>

      <div className="grid grid-cols-4 gap-4">
        <IntegrationCard name="Dokploy" sub="App Deployments" />
        <IntegrationCard name="Authentik" sub="Identity & SSO" />
        <IntegrationCard name="Activepieces" sub="Connector Flows" />
        <IntegrationCard name="Monitoring" sub="Status & Metriken" />
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Letzte Ereignisse</h2>
        <div className="bg-panel border border-border rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="text-muted text-xs uppercase tracking-wide">
              <tr className="border-b border-border">
                <th className="text-left font-normal px-5 py-3">Zeit</th>
                <th className="text-left font-normal px-5 py-3">Aktion</th>
                <th className="text-left font-normal px-5 py-3">Akteur</th>
                <th className="text-left font-normal px-5 py-3">Ziel</th>
                <th className="text-left font-normal px-5 py-3">App</th>
              </tr>
            </thead>
            <tbody>
              {events.map((e, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="px-5 py-3 text-muted">{e.time}</td>
                  <td className="px-5 py-3">
                    <span className="inline-block bg-panel2 border border-border rounded px-2 py-0.5 text-xs">{e.action}</span>
                  </td>
                  <td className="px-5 py-3 font-mono text-xs text-muted truncate max-w-[300px]">{e.actor}</td>
                  <td className="px-5 py-3">{e.target}</td>
                  <td className="px-5 py-3">{e.app}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
