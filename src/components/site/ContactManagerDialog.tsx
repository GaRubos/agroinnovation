import { useState, type ReactNode } from "react";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { contacts } from "@/data/catalog";

export function ContactManagerDialog({
  productName,
  children,
}: {
  productName?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const message = productName
    ? `Добрий день! Цікавить продукт «${productName}». Підкажіть, будь ласка, умови співпраці.`
    : "Добрий день! Хочу обговорити співпрацю з AGRO INNOVATION.";
  const encoded = encodeURIComponent(message);

  const channels = [
    {
      label: "Telegram",
      hint: `@${contacts.telegram}`,
      href: `https://t.me/${contacts.telegram}?text=${encoded}`,
      icon: Send,
      external: true,
    },
    {
      label: "Viber",
      hint: contacts.phone,
      href: `viber://chat?number=${encodeURIComponent(contacts.viberNumber)}&draft=${encoded}`,
      icon: MessageCircle,
      external: false,
    },
    {
      label: "Зателефонувати",
      hint: contacts.phone,
      href: contacts.phoneHref,
      icon: Phone,
      external: false,
    },
    {
      label: "Написати на пошту",
      hint: contacts.email,
      href: `mailto:${contacts.email}?subject=${encodeURIComponent(
        productName ? `Запит: ${productName}` : "Співпраця",
      )}&body=${encoded}`,
      icon: Mail,
      external: false,
    },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-md overflow-hidden rounded-2xl border-border bg-paper p-0 [&>button:last-child]:text-forest-foreground">
        <div className="bg-forest px-7 pb-6 pt-7 text-forest-foreground">
          <p className="eyebrow text-brand-bright">Відділ продажу</p>
          <DialogHeader className="mt-2 text-left">
            <DialogTitle className="font-display text-3xl font-medium">
              Зв'язатися з менеджером
            </DialogTitle>
            <DialogDescription className="text-forest-muted">
              {productName ? (
                <>
                  Запит щодо: <span className="text-forest-foreground">{productName}</span>
                </>
              ) : (
                "Оберіть зручний спосіб зв'язку — відповімо протягом робочого дня."
              )}
            </DialogDescription>
          </DialogHeader>
        </div>
        <div className="grid gap-2 p-5">
          {channels.map(({ label, hint, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-xl border border-border bg-background px-4 py-3.5 transition-colors hover:border-primary hover:bg-accent"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground">
                <Icon className="size-4" />
              </span>
              <span className="flex flex-col">
                <span className="font-medium text-foreground">{label}</span>
                <span className="text-sm text-muted-foreground">{hint}</span>
              </span>
            </a>
          ))}
          <p className="px-1 pt-2 text-xs text-muted-foreground">{contacts.hours}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
