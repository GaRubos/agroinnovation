import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { categories, getProduct, menuDirections, products } from "@/data/catalog";
import { routeTree } from "@/routeTree.gen";

describe("Catalog", () => {
  it("has the four product categories", () => {
    expect(categories.map((c) => c.name)).toEqual([
      "Соуси",
      "Часникові пасти",
      "Сухі спеції",
      "Сушені овочі та фрукти",
    ]);
  });

  it("contains 20 positions: 9 sauces, 2 pastes, 3 spices, 6 dried vegetables & fruits", () => {
    const count = (id: string) => products.filter((p) => p.category === id).length;
    expect(products).toHaveLength(20);
    expect(count("sauces")).toBe(9);
    expect(count("pastes")).toBe(2);
    expect(count("spices")).toBe(3);
    expect(count("dried")).toBe(6);
  });

  it("sauces come in 1 kg buckets, pastes also in 200 g jars, spices in 25 g packs", () => {
    expect(getProduct("mayonez-67")?.packaging).toEqual(["1 кг · пластикове відро"]);
    expect(getProduct("chasnykova-pasta")?.packaging).toContain("200 г · скляна банка");
    expect(getProduct("chasnyk-sushenyi")?.packaging[0]).toMatch(/^25 г/);
    expect(getProduct("yabluko-sushene")?.packaging).toEqual(["1 кг · пакет"]);
    expect(getProduct("buriak-sushenyi-solomkoiu")?.packaging).toEqual(["7 кг · мішок"]);
  });

  it("every product belongs to an existing category and has photos", () => {
    const ids = new Set(categories.map((c) => c.id));
    for (const p of products) {
      expect(ids.has(p.category)).toBe(true);
      expect(p.photos.length).toBeGreaterThan(0);
    }
  });

  it("menu directions only reference existing products", () => {
    for (const d of menuDirections) {
      for (const slug of d.slugs) expect(getProduct(slug), slug).toBeDefined();
    }
  });

  it("every product card opens its own product page", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    for (const p of products) {
      const matches = router.matchRoutes(`/product/${p.slug}`);
      expect(matches.at(-1)?.routeId).toBe("/product/$slug");
    }
  });
});
