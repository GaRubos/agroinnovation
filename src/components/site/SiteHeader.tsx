import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ContactManagerDialog } from "./ContactManagerDialog";
import { Logo } from "./Logo";

const nav = [
  { hash: "about", label: "Про нас" },
  { hash: "partners", label: "З ким працюємо" },
  { hash: "catalog", label: "Каталог" },
  { hash: "menu", label: "Під страву" },
  { hash: "production", label: "Виробництво" },
  { hash: "contacts", label: "Контакти" },
];

/** `overlay` starts transparent over a dark hero and turns solid on scroll. */
export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = overlay && !scrolled && !menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        transparent
          ? "bg-transparent py-5"
          : "border-b border-border bg-background/90 py-3 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Link to="/" aria-label="AGRO INNOVATION — на головну" onClick={() => setMenuOpen(false)}>
          <Logo tone={transparent ? "light" : "dark"} className="h-8 lg:h-9" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.hash}
              to="/"
              hash={item.hash}
              className={cn(
                "text-sm font-medium transition-colors",
                transparent
                  ? "text-forest-foreground/80 hover:text-forest-foreground"
                  : "text-foreground/70 hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ContactManagerDialog>
            <Button variant="brand" className="hidden rounded-full px-5 sm:inline-flex">
              Зв'язатися з менеджером
            </Button>
          </ContactManagerDialog>
          <button
            type="button"
            aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
            onClick={() => setMenuOpen((v) => !v)}
            className={cn(
              "flex size-10 items-center justify-center rounded-full lg:hidden",
              transparent ? "text-forest-foreground" : "text-foreground",
            )}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mx-auto mt-3 flex max-w-7xl flex-col gap-1 px-5 pb-4 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.hash}
              to="/"
              hash={item.hash}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 font-display text-2xl text-foreground hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
          <ContactManagerDialog>
            <Button variant="brand" size="xl" className="mt-3">
              Зв'язатися з менеджером
            </Button>
          </ContactManagerDialog>
        </nav>
      )}
    </header>
  );
}
