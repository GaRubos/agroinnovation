import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AlertTriangle, ArrowLeft, Check, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ContactManagerDialog } from "@/components/site/ContactManagerDialog";
import { ProductCard } from "@/components/site/ProductCard";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { BRAND_TM, getCategory, getProduct, products } from "@/data/catalog";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const product = loaderData?.product;
    if (!product) {
      return {
        meta: [
          { title: "Товар не знайдено — AGRO INNOVATION" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${product.name} — ТМ «Все по часнику» | AGRO INNOVATION`;
    const description = `${product.name}: ${product.short} Фасування: ${product.packaging.join(", ")}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description.slice(0, 160) },
        { property: "og:title", content: title },
        { property: "og:description", content: product.short },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductPage,
});

type Slide = { src: string; kind: "pack" | "idea" };

function ProductPage() {
  const { product } = Route.useLoaderData();
  const category = getCategory(product.category);
  const [active, setActive] = useState(0);

  const slides: Slide[] = [
    ...product.photos.map((src) => ({ src, kind: "pack" as const })),
    ...(product.menuIdea ? [{ src: product.menuIdea.image, kind: "idea" as const }] : []),
  ];
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-5 pb-20 pt-24 sm:pb-24 sm:pt-28 lg:px-8 lg:pt-32">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" hash="catalog" className="flex items-center gap-1.5 hover:text-foreground">
            <ArrowLeft className="size-4" /> Каталог
          </Link>
          <span>/</span>
          <Link
            to="/"
            hash="catalog"
            search={{ category: category.id }}
            className="hover:text-foreground"
          >
            {category.name}
          </Link>
        </nav>

        <div className="mt-6 grid grid-cols-[minmax(0,1fr)] gap-10 sm:mt-8 sm:gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 [&>*]:min-w-0">
          {/* Gallery */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-product-surface shadow-elegant">
              {slides.map((s, i) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={
                    s.kind === "idea"
                      ? `Ідея подачі: ${product.menuIdea?.text}`
                      : `${product.name} — пакування, фото ${i + 1}`
                  }
                  width={1000}
                  height={1000}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={cn(
                    "absolute inset-0 size-full transition-opacity duration-500",
                    s.kind === "pack" ? "object-contain p-8 sm:p-12" : "object-cover",
                    i === active ? "opacity-100" : "opacity-0",
                  )}
                />
              ))}
              {product.badge && (
                <span className="eyebrow absolute left-5 top-5 rounded-full bg-gradient-brand px-3 py-1.5 text-[0.65rem] text-primary-foreground">
                  {product.badge}
                </span>
              )}
              {slides[active]?.kind === "idea" && (
                <p className="absolute inset-x-0 bottom-0 bg-gradient-forest px-6 pb-5 pt-16 text-sm text-forest-foreground">
                  <span className="eyebrow mr-2 text-brand-bright">Ідея для меню</span>
                  {product.menuIdea?.text}
                </p>
              )}
            </div>
            {slides.length > 1 && (
              <div className="mt-4 flex gap-3">
                {slides.map((s, i) => (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={s.kind === "idea" ? "Показати ідею подачі" : `Показати фото ${i + 1}`}
                    aria-pressed={i === active}
                    className={cn(
                      "size-20 overflow-hidden rounded-xl border border-border bg-product-surface ring-2 ring-offset-2 ring-offset-background transition-all sm:size-24",
                      i === active ? "ring-primary" : "ring-transparent opacity-60 hover:opacity-100",
                    )}
                  >
                    <img
                      src={s.src}
                      alt=""
                      width={200}
                      height={200}
                      loading="lazy"
                      className={cn("size-full", s.kind === "pack" ? "object-contain p-1.5" : "object-cover")}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <p className="eyebrow text-primary">
              {category.name} · ТМ «{BRAND_TM}»
            </p>
            <h1 className="mt-4 text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>
            <p className="mt-3 font-display text-2xl italic text-primary">{product.tagline}</p>
            <p className="mt-5 text-lg text-foreground/80">{product.short}</p>
            {product.description?.map((d) => (
              <p key={d} className="mt-4 leading-relaxed text-muted-foreground">
                {d}
              </p>
            ))}

            <div className="mt-10">
              <p className="eyebrow text-muted-foreground">У вашому меню</p>
              <ul className="mt-4 space-y-3">
                {product.uses.map((u) => (
                  <li key={u} className="flex gap-3 text-foreground">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground">
                      <Check className="size-3" />
                    </span>
                    {u}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <p className="eyebrow text-muted-foreground">Фасування</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.packaging.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-border bg-paper px-4 py-2 text-sm text-foreground"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-forest p-7 text-forest-foreground">
              <p className="font-display text-2xl">Ціна та умови — за запитом</p>
              <p className="mt-2 text-sm text-forest-muted">
                Вкажіть потребу на місяць, місто доставки та формат закладу — менеджер підготує
                комерційну пропозицію та дегустаційний набір.
              </p>
              <ContactManagerDialog productName={product.name}>
                <Button variant="brand" size="xl" className="mt-6 w-full sm:w-auto">
                  <MessageCircle /> Зв'язатися з менеджером
                </Button>
              </ContactManagerDialog>
            </div>

            {product.nutrition && (
              <div className="mt-10">
                <p className="eyebrow text-muted-foreground">Поживна цінність на 100 г</p>
                <dl className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-paper">
                  {product.nutrition.map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-6 px-5 py-3 text-sm">
                      <dt className="text-muted-foreground">{label}</dt>
                      <dd className="font-mono text-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <dl className="mt-10 divide-y divide-border border-y border-border">
              {product.ingredients && (
                <div className="grid gap-1 py-4 sm:grid-cols-[160px_1fr] sm:gap-6">
                  <dt className="text-sm text-muted-foreground">Склад</dt>
                  <dd className="text-sm leading-relaxed text-foreground">{product.ingredients}</dd>
                </div>
              )}
              <div className="grid gap-1 py-4 sm:grid-cols-[160px_1fr] sm:gap-6">
                <dt className="text-sm text-muted-foreground">Зберігання</dt>
                <dd className="text-sm leading-relaxed text-foreground">{product.storage}</dd>
              </div>
            </dl>

            {product.allergens && (
              <p className="mt-6 flex gap-3 rounded-2xl bg-accent p-5 text-sm leading-relaxed text-accent-foreground">
                <AlertTriangle className="mt-0.5 size-4 shrink-0" />
                <span>
                  <strong className="font-semibold">Алергени.</strong> {product.allergens}
                </span>
              </p>
            )}

            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Поживні показники наведено за наданими специфікаціями. Зображення пакування
              ілюстративні. Фактичні склад, алергени й маркування підтверджуються документами на
              продукцію.
            </p>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20 sm:mt-28">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
              <h2 className="text-3xl text-foreground sm:text-4xl lg:text-5xl">Також у категорії</h2>
              <Link
                to="/"
                hash="catalog"
                search={{ category: category.id }}
                className="text-sm text-primary hover:underline"
              >
                Уся категорія
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>

      <SiteFooter />

      {/* Sticky contact bar on phones */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-xl items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-lg leading-tight text-foreground">
              {product.name}
            </p>
            <p className="truncate text-xs text-muted-foreground">Ціна — за запитом</p>
          </div>
          <ContactManagerDialog productName={product.name}>
            <Button variant="brand" className="shrink-0 rounded-full px-5">
              <MessageCircle /> Менеджер
            </Button>
          </ContactManagerDialog>
        </div>
      </div>
    </div>
  );
}

function ProductNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto flex max-w-xl flex-col items-center px-5 pb-24 pt-40 text-center">
        <p className="eyebrow text-primary">404</p>
        <h1 className="mt-4 text-5xl text-foreground">Товар не знайдено</h1>
        <p className="mt-4 text-muted-foreground">
          Можливо, позиція більше не випускається. Перегляньте актуальний каталог.
        </p>
        <Button asChild variant="brand" size="xl" className="mt-8">
          <Link to="/" hash="catalog">
            До каталогу
          </Link>
        </Button>
      </main>
    </div>
  );
}
