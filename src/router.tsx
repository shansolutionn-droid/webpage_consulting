import { createRouter } from "@tanstack/react-router";
import { NotFound } from "@/components/not-found";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

export const router = createRouter({
  routeTree,
  defaultErrorComponent: AppErrorComponent,
  defaultNotFoundComponent: NotFound,
  defaultPreload: "intent",
  scrollRestoration: true,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
