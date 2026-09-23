import type { ErrorComponentProps } from "@tanstack/react-router";
import { TriangleAlert } from "lucide-react";

export function AppErrorComponent({ error }: ErrorComponentProps) {
  const isDev = import.meta.env.DEV;

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg"
      role="alert"
      aria-live="assertive"
    >
      <span className="text-danger" aria-hidden="true">
        <TriangleAlert className="size-10" strokeWidth={2} />
      </span>
      <h1 className="font-display text-2xl font-medium">Something went wrong</h1>
      <p className="max-w-md text-sm break-words text-muted">
        {isDev
          ? error.message || "An unexpected error occurred. Try reloading the page."
          : "We couldn't load this page. Please reload and try again."}
      </p>
      {isDev && (
        <pre
          className="max-w-2xl overflow-auto text-left text-xs text-muted"
          aria-label="Error details"
        >
          {error.stack}
        </pre>
      )}
      <button
        type="button"
        className="mt-2 rounded-md bg-paper px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel/60"
        onClick={() => window.location.reload()}
      >
        Reload page
      </button>
    </main>
  );
}
