import logoDark from "@/assets/agro-innovation-logo.png.asset.json";
import logoLight from "@/assets/agro-innovation-logo-light.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <img
      src={tone === "light" ? logoLight.url : logoDark.url}
      alt="AGRO INNOVATION"
      width={1658}
      height={434}
      className={cn("h-9 w-auto", className)}
    />
  );
}
