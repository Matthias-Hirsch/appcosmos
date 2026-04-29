"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Boxes, Rocket, Tag, Plug, Link2, Key, ShieldCheck, Users, BarChart3, ScrollText } from "lucide-react";

const items = [
  { href: "/", label: "Uebersicht", icon: LayoutGrid },
  { href: "/apps", label: "Apps", icon: Boxes },
  { href: "/deployments", label: "Deployments", icon: Rocket },
  { href: "/releases", label: "Releases", icon: Tag },
  { href: "/integrationen", label: "Integrationen", icon: Plug },
  { href: "/verbindungen", label: "Verbindungen", icon: Link2 },
  { href: "/zugangsdaten", label: "Zugangsdaten", icon: Key },
  { href: "/berechtigungen", label: "Berechtigungen", icon: ShieldCheck },
  { href: "/user", label: "User", icon: Users },
  { href: "/kosten", label: "Kosten", icon: BarChart3 },
  { href: "/audit-log", label: "Audit Log", icon: ScrollText },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 shrink-0 border-r border-border bg-panel px-4 py-6 flex flex-col">
      <div className="px-3 mb-8">
        <div className="text-lg font-semibold">AppCosmos Admin</div>
        <div className="text-xs text-muted">Unfuture AI Platform</div>
      </div>
      <nav className="flex-1 space-y-1">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link key={href} href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition ${active ? "bg-panel2 text-text font-medium" : "text-muted hover:text-text hover:bg-panel2"}`}>
              <Icon size={16} />
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-6 px-3 py-3 border-t border-border text-xs text-muted">
        <div className="font-medium text-text">Matthias Hirsch</div>
        <div>matthias@appcosmos.io</div>
      </div>
    </aside>
  );
}
