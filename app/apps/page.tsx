const apps = [
  { name: "admin", env: null as string | null, connectors: 0, providers: [] as string[], budget: null as null | { used: number; limit: number | null } },
  { name: "ai-chat", env: null, connectors: 0, providers: ["openai", "anthropic", "google"], budget: { used: 0, limit: 50 } },
  { name: "company-search", env: "prod", connectors: 5, providers: ["*"], budget: { used: 0, limit: 50 } },
  { name: "email-dashboard", env: "prod", connectors: 5, providers: ["*"], budget: { used: 0, limit: 50 } },
  { name: "email-summary", env: "prod", connectors: 5, providers: ["*"], budget: { used: 0, limit: 50 } },
  { name: "my-app", env: "prod", connectors: 0, providers: ["*"], budget: { used: 0, limit: 50 } },
  { name: "platform-assistant", env: null, connectors: 0, providers: [], budget: { used: 0.13, limit: null } },
  { name: "support-bot", env: null, connectors: 0, providers: [], budget: null },
  { name: "test-app", env: null, connectors: 0, providers: [], budget: null },
];

export default function AppsPage() {
  return (
    <div className="space-y-6 max-w-[1500px]">
      <div>
        <h1 className="text-3xl font-semibold">Apps</h1>
        <p className="text-sm text-muted mt-1">Apps im Environment "prod"</p>
      </div>
      <div className="bg-panel border border-border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-muted text-xs uppercase tracking-wide border-b border-border">
            <tr>
              <th className="text-left font-normal px-5 py-3">App</th>
              <th className="text-left font-normal px-5 py-3">Environments</th>
              <th className="text-left font-normal px-5 py-3">Connectors</th>
              <th className="text-left font-normal px-5 py-3">LLM-Provider</th>
              <th className="text-left font-normal px-5 py-3">Budget</th>
              <th className="text-right font-normal px-5 py-3">Aktion</th>
            </tr>
          </thead>
          <tbody>
            {apps.map((a) => (
              <tr key={a.name} className="border-b border-border last:border-0">
                <td className="px-5 py-4 font-medium">{a.name}</td>
                <td className="px-5 py-4">
                  {a.env && (<span className="inline-block bg-black border border-border rounded-full px-2.5 py-0.5 text-xs">{a.env}</span>)}
                </td>
                <td className="px-5 py-4">
                  <span className="inline-block bg-panel2 border border-border rounded-full px-2.5 py-0.5 text-xs">{a.connectors} Connectors</span>
                </td>
                <td className="px-5 py-4">
                  {a.providers.length === 0 ? (<span className="text-muted">Keine</span>) : (
                    <div className="flex gap-1.5">
                      {a.providers.map((p) => (<span key={p} className="bg-black border border-border rounded-full px-2.5 py-0.5 text-xs">{p}</span>))}
                    </div>
                  )}
                </td>
                <td className="px-5 py-4 min-w-[220px]">
                  {a.budget ? (a.budget.limit ? (
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>{a.budget.used.toFixed(2)} $ / {a.budget.limit.toFixed(2)} $</span>
                        <span className="text-muted">{Math.round((a.budget.used / a.budget.limit) * 100)}%</span>
                      </div>
                      <div className="h-1.5 bg-panel2 rounded-full overflow-hidden">
                        <div className="h-full bg-accent" style={{ width: `${(a.budget.used / a.budget.limit) * 100}%` }} />
                      </div>
                    </div>
                  ) : (<span className="text-muted text-xs">${a.budget.used.toFixed(2)} (kein Limit)</span>)) : (<span className="text-muted text-xs">Kein Budget</span>)}
                </td>
                <td className="px-5 py-4 text-right">
                  <button className="border border-border rounded-md px-3 py-1.5 text-xs hover:bg-panel2">Verwalten</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
