import { createRootRoute, Outlet } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";

export const Route = createRootRoute({
  component: () => (
    <SiteShell>
      <Outlet />
    </SiteShell>
  ),
});
