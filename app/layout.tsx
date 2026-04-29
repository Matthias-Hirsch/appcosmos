import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export const metadata: Metadata = {
  title: "AppCosmos Admin",
  description: "VaaS Admin - AI Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="dark">
      <body className="min-h-screen bg-bg text-text">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Topbar />
            <main className="flex-1 px-10 py-8">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
