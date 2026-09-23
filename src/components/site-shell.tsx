import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ScrollProgress } from "@/components/scroll-progress";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <ScrollProgress />
      <SiteHeader />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div id="main-content" className="scroll-mt-20" tabIndex={-1}>
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}
