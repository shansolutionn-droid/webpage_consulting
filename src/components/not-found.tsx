import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-fg">
      <p className="kicker">404</p>
      <h1 className="font-display text-title">This page is not on the drawing.</h1>
      <p className="max-w-md text-sm text-muted">
        This page is not available. Return to ShanSolution India.
      </p>
      <Link
        to="/"
        className="mt-4 inline-flex h-11 items-center rounded-md bg-paper px-5 text-sm font-semibold text-ink"
      >
        Home
      </Link>
    </main>
  );
}
