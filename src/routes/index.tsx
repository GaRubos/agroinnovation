import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, Check } from "lucide-react";

import heroSlide1 from "@/assets/hero-v1.jpg";
import heroSlide2 from "@/assets/hero-v2.jpg";
import { HeroSlider } from "@/components/site/HeroSlider";
import certs from "@/assets/products/certs.webp.asset.json";
import segHoreca from "@/assets/seg-horeca.jpg";
import segRetail from "@/assets/seg-retail.jpg";
import segProduction from "@/assets/seg-production.jpg";
import { Button } from "@/components/ui/button";
import { ContactManagerDialog } from "@/components/site/ContactManagerDialog";
import { ProductCard } from "@/components/site/ProductCard";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import {
  categories,
  contacts,
  getProduct,
  menuDirections,
  partners,
  products,
  type CategoryId,
} from "@/data/catalog";
import { cn } from "@/lib/utils";

const categoryIds = categories.map((c) => c.id) as string[];

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): { category?: CategoryId } => {
    const c = search["category"];
    return typeof c === "string" && categoryIds.includes(c) ? { category: c as CategoryId } : {};
  },
  head: () => ({
    meta: [
      { title: "AGRO INNOVATION — соуси, часникові пасти та спеції «Все по часнику»" },
      {
        name: "description",
        content:
          "Український виробник соусів, часникових паст, сухих спецій, сушених овочів і фруктів ТМ «Все по часнику» для ресторанів, кафе, готелів і служб доставки. Каталог, склад, фасування та зв'язок із менеджером.",
      },
      { property: "og:title", content: "AGRO INNOVATION — соуси, пасти, спеції та сушені овочі й фрукти" },
      {
        property: "og:description",
        content:
          "Майонези, соуси, часникові пасти, спеції, сушені овочі та фрукти ТМ «Все по часнику» для професійної кухні. Фасування від 25 г до 7 кг.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const segments = [
  {
    title: "HoReCa",
    subtitle: "Ресторани, кафе, готелі, кейтеринг",
    text: "Стабільний смак від партії до партії та зручне фасування для професійних кухонь.",
    image: segHoreca,
  },
  {
    title: "Торговельні мережі",
    subtitle: "Супермаркети, гіпермаркети, private label",
    text: "Готова продукція для полиці та виробництво під власною торговою маркою мережі.",
    image: segRetail,
  },
  {
    title: "Харчові виробництва",
    subtitle: "М'ясопереробка, пекарні, напівфабрикати",
    text: "Спеції та суміші у великому фасуванні, рецептури під технологічні задачі клієнта.",
    image: segProduction,
  },
];

const advantages = [
  {
    title: "Власне виробництво",
    text: "Соуси, пасти та спеції ТМ «Все по часнику» виготовляємо самі — від рецептури до фасування.",
  },
  {
    title: "ISO 22000 та HACCP",
    text: "Система безпечності харчових продуктів на кожному етапі виробництва.",
  },
  {
    title: "Формати для HoReCa",
    text: "Відра 1 кг, скляні банки 200 г, саше 25 г, пакети 1 кг і мішки 7 кг.",
  },
  {
    title: "Прозорий склад",
    text: "Для кожної позиції — склад, поживна цінність та алергени за специфікацією.",
  },
];

const steps = [
  { n: "01", title: "Заявка", text: "Залишаєте запит менеджеру в зручному месенджері." },
  { n: "02", title: "Підбір", text: "Підбираємо асортимент і фасування під ваш формат." },
  { n: "03", title: "Дегустація", text: "Надаємо зразки, щоб ви оцінили смак і якість." },
  { n: "04", title: "Поставки", text: "Узгоджуємо умови та налагоджуємо регулярні поставки." },
];

function Index() {
  const { category } = Route.useSearch();
  const navigate = useNavigate({ from: "/" });
  const visible = category ? products.filter((p) => p.category === category) : products;

  const selectCategory = (id?: CategoryId) =>
    navigate({ search: id ? { category: id } : {}, replace: true, resetScroll: false });

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader overlay />

      {/* Hero */}
      <section className="relative isolate flex items-start sm:min-h-[100svh] sm:items-end overflow-hidden bg-forest text-forest-foreground">
        <HeroSlider
          slides={[
            { src: heroSlide1, alt: "Часникові пасти, часниковий соус і спеції ТМ «Все по часнику»" },
            { src: heroSlide2, alt: "Часниковий і бургерний соуси, майонез 67% та часникова паста ТМ «Все по часнику»" },
          ]}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        {/* Extra shade on phones/tablets where text sits over the products */}
        <div className="absolute inset-0 -z-10 bg-forest/70 sm:bg-forest/50 lg:hidden" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-forest" />

        <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-24 sm:pt-40 lg:px-8 lg:pb-24">
          <h1 className="max-w-3xl text-5xl leading-[1.02] sm:text-6xl lg:text-8xl">
            Смак, на якому <em className="italic text-brand-bright">тримається</em> кухня
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-forest-foreground/80">
            Соуси, часникові пасти, сухі спеції, сушені овочі та фрукти для ресторанів, кафе, готелів і служб доставки.
            Від соусу до часникового акценту — асортимент під ваше меню.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="brand" size="xl">
              <Link to="/" hash="catalog">
                Переглянути каталог <ArrowRight />
              </Link>
            </Button>
            <ContactManagerDialog>
              <Button variant="forest-outline" size="xl">
                Зв'язатися з менеджером
              </Button>
            </ContactManagerDialog>
          </div>

          <dl className="mt-12 grid grid-cols-2 sm:mt-20 gap-px overflow-hidden rounded-2xl border border-forest-border bg-forest-border lg:grid-cols-4">
            {[
              [String(products.length), "позицій в асортименті"],
              ["25 г — 7 кг", "діапазон фасування"],
              ["180 діб", "строк придатності соусів"],
              ["ISO 22000", "та HACCP"],
            ].map(([value, label]) => (
              <div key={label} className="bg-forest/80 p-6 backdrop-blur">
                <dt className="font-display text-2xl text-forest-foreground sm:text-3xl lg:text-4xl">{value}</dt>
                <dd className="mt-1 text-sm text-forest-muted">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow text-primary">Про компанію</p>
            <div className="mt-6 h-px w-24 bg-gradient-brand" />
          </div>
          <div>
            <h2 className="text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Від соусу до часникового акценту — усе для професійної кухні.
            </h2>
            <div className="mt-10 grid gap-8 text-muted-foreground sm:grid-cols-2">
              <p className="leading-relaxed">
                AGROINNOVATION — український виробник соусів, часникових паст і сухих спецій під
                торговою маркою «Все по часнику». Часник — серце нашої лінійки: від фірмового
                часникового соусу до пасти з кропом і перців із часником. Також виробляємо сушені
                овочі та фрукти — без цукру, барвників і консервантів.
              </p>
              <p className="leading-relaxed">
                Працюємо з виробниками, ресторанами, кафе, готелями та службами доставки. Допомагаємо підібрати
                асортимент під напрям меню, формуємо дегустаційні набори та налагоджуємо регулярні
                поставки.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / segments */}
      <section id="partners" className="bg-forest py-16 text-forest-foreground sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow text-brand-bright">З ким ми працюємо</p>
              <h2 className="mt-5 max-w-2xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Партнер для кожного формату харчового бізнесу
              </h2>
            </div>
            <p className="max-w-sm text-forest-muted">
              Підлаштовуємо асортимент, фасування й умови поставок під специфіку вашої справи.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-5 md:grid-cols-3">
            {segments.map((s, i) => (
              <article
                key={s.title}
                className="group relative isolate flex aspect-[5/4] flex-col sm:aspect-[4/3] md:aspect-[4/5] justify-end overflow-hidden rounded-2xl p-7"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-forest" />
                <span className="eyebrow text-brand-bright">0{i + 1}</span>
                <h3 className="mt-3 text-4xl">{s.title}</h3>
                <p className="mt-1 text-sm text-forest-foreground/70">{s.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-forest-foreground/85">{s.text}</p>
              </article>
            ))}
          </div>

          {partners.length > 0 && (
            <div className="mt-14 border-t border-forest-border pt-10 sm:mt-20 sm:pt-14">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <p className="eyebrow text-brand-bright">Нам довіряють</p>
                  <h3 className="mt-4 text-3xl leading-tight sm:text-4xl">
                    Наша продукція — у провідних мережах і на виробництвах
                  </h3>
                </div>
              </div>
              <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-4">
                {partners.map((p) => (
                  <li key={p.name}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} — офіційний сайт`}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-product-surface shadow-elegant transition-transform duration-500 hover:-translate-y-1"
                    >
                      <div className="flex h-28 items-center justify-center px-5 sm:h-40 sm:px-8">
                        <img
                          src={p.logo}
                          alt={p.name}
                          loading="lazy"
                          className={
                            "w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105 " +
                            (p.tall ? "h-14 sm:h-20" : "h-10 sm:h-14")
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between gap-2 border-t border-border px-4 py-3 sm:px-5">
                        <span className="truncate text-sm font-semibold text-foreground">
                          {p.name}
                        </span>
                        <span className="hidden truncate text-xs text-muted-foreground sm:inline">
                          {p.kind}
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow text-primary">Каталог продукції</p>
            <h2 className="mt-5 text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Наш асортимент
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Соуси, пасти, спеції, сушені овочі та фрукти ТМ «Все по часнику». Відкрийте картку
            товару, щоб побачити склад, поживну цінність, алергени й фасування.
          </p>
        </div>

        {/* Category tiles — 2×2 on phones/tablets, one row on desktop */}
        <div className="mt-8 grid grid-cols-2 gap-2 sm:mt-12 sm:gap-3 lg:grid-cols-4">
          {categories.map((c) => {
            const active = category === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => selectCategory(active ? undefined : c.id)}
                aria-pressed={active}
                className={cn(
                  "group relative isolate flex h-24 min-w-0 flex-col justify-end overflow-hidden rounded-xl p-3 text-left text-forest-foreground ring-2 ring-inset ring-transparent transition-all sm:h-44 sm:rounded-2xl sm:p-5",
                  active && "ring-brand-bright",
                )}
              >
                <img
                  src={c.cover}
                  alt=""
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={cn(
                    "absolute inset-0 -z-10 bg-forest/60 transition-colors",
                    active ? "bg-forest/40" : "group-hover:bg-forest/50",
                  )}
                />
                <span className="font-display text-lg leading-tight sm:text-2xl xl:text-3xl">{c.name}</span>
                <span className="mt-1 hidden text-xs text-forest-foreground/75 sm:block">
                  {c.tagline}
                </span>
              </button>
            );
          })}
        </div>

        {/* Filter pills (category pills duplicate the tiles, so phones only get "all") */}
        <div className="mt-6 flex flex-wrap items-center gap-2 sm:mt-10">
          <FilterPill active={!category} onClick={() => selectCategory(undefined)}>
            Усі товари
          </FilterPill>
          {categories.map((c) => (
            <FilterPill
              key={c.id}
              active={category === c.id}
              onClick={() => selectCategory(c.id)}
              className="hidden sm:inline-flex"
            >
              {c.name}
            </FilterPill>
          ))}
          <span className="ml-auto font-mono text-xs text-muted-foreground">
            {visible.length} поз.
          </span>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {visible.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Sauce for your dish */}
      <section id="menu" className="bg-forest py-16 text-forest-foreground sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow text-brand-bright">Підбір під напрям меню</p>
              <h2 className="mt-5 max-w-2xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Соус під вашу <em className="italic text-brand-bright">страву</em>
              </h2>
            </div>
            <p className="max-w-sm text-forest-muted">
              Ідеї використання допоможуть сформувати дегустаційний набір під ваше меню. Поєднання
              та дозування заклад визначає у власних технологічних картах.
            </p>
          </div>
          <ul className="mt-10 grid gap-px sm:mt-16 overflow-hidden rounded-2xl border border-forest-border bg-forest-border md:grid-cols-2 lg:grid-cols-3">
            {menuDirections.map((d, i) => (
              <li key={d.title} className="bg-forest p-7">
                <span className="font-mono text-xs text-brand-bright">0{i + 1}</span>
                <h3 className="mt-3 text-2xl sm:text-3xl">{d.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {d.slugs.map((slug) => {
                    const p = getProduct(slug);
                    if (!p) return null;
                    return (
                      <Link
                        key={slug}
                        to="/product/$slug"
                        params={{ slug }}
                        className="rounded-full border border-forest-border px-3 py-1.5 text-sm text-forest-foreground/85 transition-colors hover:border-brand-bright hover:text-forest-foreground"
                      >
                        {p.name}
                      </Link>
                    );
                  })}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Production / advantages */}
      <section id="production" className="border-b border-border bg-paper py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-primary">Виробництво та якість</p>
              <h2 className="mt-5 text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Якість, яку видно в кожній партії
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                Виробництво працює за міжнародними стандартами безпечності харчових продуктів ISO
                22000 та HACCP.
              </p>
              <img
                src={certs.url}
                alt="Сертифікати ISO 22000 та HACCP"
                width={355}
                height={142}
                loading="lazy"
                className="mt-8 h-24 w-auto mix-blend-multiply"
              />
            </div>
            <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {advantages.map((a) => (
                <li key={a.title} className="bg-paper p-7">
                  <span className="flex size-9 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground">
                    <Check className="size-4" />
                  </span>
                  <h3 className="mt-5 text-2xl text-foreground">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Storage */}
          <div className="mt-16 grid gap-px sm:mt-24 overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-3">
            <div className="bg-forest p-8 text-forest-foreground">
              <p className="eyebrow text-brand-bright">Соуси · до відкриття</p>
              <p className="mt-4 font-display text-6xl">180 діб</p>
              <p className="mt-4 text-sm leading-relaxed text-forest-muted">
                Від 0 °C до +20 °C, відносна вологість не вище 75%. Чисте, добре вентильоване
                приміщення. Не допускати заморожування.
              </p>
            </div>
            <div className="bg-paper p-8">
              <p className="eyebrow text-primary">Після відкриття</p>
              <p className="mt-4 font-display text-6xl text-foreground">14 діб</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Від 0 °C до +10 °C, але не пізніше зазначеної на пакуванні кінцевої дати
                придатності.
              </p>
            </div>
            <div className="bg-paper p-8">
              <p className="eyebrow text-primary">На кухні</p>
              <ul className="mt-5 space-y-3 text-sm text-foreground">
                {[
                  "Позначайте дату відкриття",
                  "Використовуйте чистий інвентар",
                  "Враховуйте алергени у стравах меню",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-muted-foreground">
                Для гірчиці та кетчупу діють умови, зазначені на їхньому маркуванні.
              </p>
            </div>
          </div>

          <div className="mt-16 sm:mt-24">
            <p className="eyebrow text-primary">Як почати співпрацю</p>
            <ol className="mt-8 grid gap-6 md:grid-cols-4">
              {steps.map((s) => (
                <li key={s.n} className="border-t-2 border-primary pt-6">
                  <span className="font-mono text-sm text-primary">{s.n}</span>
                  <h3 className="mt-3 text-3xl text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Contacts CTA */}
      <section id="contacts" className="mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-brand px-6 py-12 text-primary-foreground sm:px-14 sm:py-16 lg:py-20">
          <div className="absolute -right-24 -top-24 -z-10 size-96 rounded-full border border-primary-foreground/15" />
          <div className="absolute -right-8 -top-8 -z-10 size-64 rounded-full border border-primary-foreground/15" />
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow text-primary-foreground/80">Контакти</p>
              <h2 className="mt-5 text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Асортимент для вашого закладу
              </h2>
              <p className="mt-6 max-w-lg text-primary-foreground/85">
                Для запиту комерційної пропозиції вкажіть назви позицій, потребу на місяць, місто
                доставки та формат вашого закладу.
              </p>
              <ContactManagerDialog>
                <Button
                  size="xl"
                  className="mt-10 bg-forest text-forest-foreground shadow-elegant hover:bg-forest/90"
                >
                  Зв'язатися з менеджером <ArrowRight />
                </Button>
              </ContactManagerDialog>
            </div>
            <dl className="grid gap-6 text-sm">
              <div>
                <dt className="eyebrow text-primary-foreground/70">Телефон</dt>
                <dd className="mt-1 break-words font-display text-2xl sm:text-3xl">
                  <a href={contacts.phoneHref}>{contacts.phone}</a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-primary-foreground/70">Email</dt>
                <dd className="mt-1 break-words font-display text-2xl sm:text-3xl">
                  <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-primary-foreground/70">Instagram</dt>
                <dd className="mt-1 flex flex-col gap-1 text-base">
                  <a
                    href={`https://instagram.com/${contacts.instagram}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    @{contacts.instagram}
                  </a>
                  <a
                    href={`https://instagram.com/${contacts.brandInstagram}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    @{contacts.brandInstagram} <span className="opacity-70">— бренд</span>
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-primary-foreground/70">Графік</dt>
                <dd className="mt-1 text-base">{contacts.hours}</dd>
              </div>
            </dl>
          </div>
        </div>
        <Link
          to="/"
          hash="catalog"
          className="mx-auto mt-10 flex w-fit items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowDown className="size-4 rotate-180" /> Повернутися до каталогу
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  children,
  className,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-2 text-sm transition-colors",
        className,
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-paper text-foreground/75 hover:border-primary hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
