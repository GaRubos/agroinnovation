import { Link } from "@tanstack/react-router";

import { categories, contacts } from "@/data/catalog";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Logo tone="light" className="h-10" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-forest-muted">
            Соуси, часникові пасти, сухі спеції, сушені овочі та фрукти ТМ «Все по часнику» для ресторанів, кафе,
            готелів і служб доставки.
          </p>
        </div>
        <div>
          <p className="eyebrow text-brand-bright">Каталог</p>
          <ul className="mt-5 space-y-3 text-sm">
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  to="/"
                  hash="catalog"
                  search={{ category: c.id }}
                  className="text-forest-foreground/80 hover:text-forest-foreground"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-brand-bright">Контакти</p>
          <ul className="mt-5 space-y-3 text-sm text-forest-foreground/80">
            <li>
              <a href={contacts.phoneHref} className="hover:text-forest-foreground">
                {contacts.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contacts.email}`} className="hover:text-forest-foreground">
                {contacts.email}
              </a>
            </li>
            {[contacts.instagram, contacts.brandInstagram].map((handle) => (
              <li key={handle}>
                <a
                  href={`https://instagram.com/${handle}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-forest-foreground"
                >
                  Instagram @{handle}
                </a>
              </li>
            ))}
            <li>{contacts.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-forest-border">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-6 text-xs text-forest-muted sm:flex-row lg:px-8">
          <span>© {new Date().getFullYear()} AGRO INNOVATION. Усі права захищено.</span>
          <span className="font-mono tracking-widest">MADE IN UKRAINE</span>
        </div>
      </div>
    </footer>
  );
}
