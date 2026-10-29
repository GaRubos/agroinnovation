import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { getCategory, type Product } from "@/data/catalog";

/** Compact two-up card on phones, full card from sm. */
export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category);
  const sizes = [...new Set(product.packaging.map((p) => p.split(" · ")[0]))].join(" / ");
  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-paper transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
    >
      <div className="relative aspect-square overflow-hidden bg-product-surface">
        <img
          src={product.photos[0]}
          alt={product.name}
          width={1000}
          height={1000}
          loading="lazy"
          className="size-full object-contain p-3 transition-transform duration-700 group-hover:scale-105 sm:p-6"
        />
        {product.badge && (
          <span className="eyebrow absolute left-2 top-2 max-w-[calc(100%-1rem)] truncate rounded-full bg-gradient-brand px-2 py-1 text-[0.55rem] text-primary-foreground sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-[0.65rem]">
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col border-t border-border p-3 sm:p-6">
        <p className="eyebrow hidden text-primary sm:block">{product.tagline}</p>
        <h3 className="text-lg leading-tight text-foreground sm:mt-3 sm:text-2xl">
          {product.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:mt-2 sm:line-clamp-none sm:text-sm">
          {product.short}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-3 sm:gap-4 sm:pt-6">
          <span className="min-w-0 text-[0.7rem] text-muted-foreground sm:text-xs">
            <span className="hidden sm:inline">{category.name} · </span>
            {sizes}
          </span>
          <span className="hidden size-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground sm:flex">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
