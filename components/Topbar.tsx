export default function Topbar() {
  return (
    <header className="h-14 border-b border-border flex items-center justify-end px-10">
      <select className="bg-panel border border-border rounded-md px-3 py-1.5 text-sm">
        <option>Production</option>
        <option>Staging</option>
        <option>Development</option>
      </select>
    </header>
  );
}
