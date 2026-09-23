import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Mark } from "@/components/mark";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const isHome = pathname === "/";

  useEffect(() => {
    let previous = window.scrollY > 12;
    setScrolled(previous);

    const onScroll = () => {
      const next = window.scrollY > 12;
      if (next !== previous) {
        previous = next;
        setScrolled(next);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const solid = !isHome || scrolled || open;
  const closeMenu = () => {
    setOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-300",
        solid
          ? "bg-bg/92 text-fg shadow-[inset_0_-1px_0_0_var(--color-line)] backdrop-blur-md"
          : "bg-transparent text-fg",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <Mark />
          <span className="font-display text-xl tracking-tight">{site.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              aria-current={
                pathname === item.to || pathname.startsWith(`${item.to}/`) ? "page" : undefined
              }
              data-active={pathname === item.to || pathname.startsWith(`${item.to}/`)}
              className="site-nav-link text-sm font-medium text-fg/80 hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <Link
            to="/contact"
            className="inline-flex h-10 items-center rounded-md bg-paper px-4 text-sm font-semibold text-ink transition-transform duration-150 ease-out hover:bg-fg active:scale-[0.96]"
          >
            Talk to us
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="relative grid size-11 place-items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel/60 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative size-5">
            <Menu
              className={cn(
                "absolute inset-0 size-5 transition-[opacity,transform,filter] duration-300",
                open ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-none",
              )}
            />
            <X
              className={cn(
                "absolute inset-0 size-5 transition-[opacity,transform,filter] duration-300",
                open ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-[4px]",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "overflow-hidden border-t border-line bg-bg md:hidden",
          "transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 py-5">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              aria-current={
                pathname === item.to || pathname.startsWith(`${item.to}/`) ? "page" : undefined
              }
              className="py-3 text-lg font-medium text-fg"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" onClick={closeMenu} className="py-3 text-lg font-medium text-fg">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
