import { cn } from "@/lib/utils";
import type { CardColor } from "@/lib/types";

interface Props {
  colors: CardColor[];
  max?: number;
  size?: "xs" | "sm" | "md";
  className?: string;
  selected?: string;
}

const sizes = {
  xs: "h-2.5 w-2.5",
  sm: "h-3.5 w-3.5",
  md: "h-5 w-5",
};

/** Read-only colour chips — colour selection happens on the 3D product page. */
export default function ColorDots({ colors, max = 5, size = "sm", className, selected }: Props) {
  if (!colors.length) return null;
  const shown = colors.slice(0, max);
  const rest = colors.length - shown.length;

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      {shown.map((color) => (
        <span
          key={color.slug}
          title={color.name_fa}
          aria-label={color.name_fa}
          className={cn(
            "rounded-full ring-1 ring-inset ring-brand-ink/15",
            sizes[size],
            selected === color.slug && "ring-2 ring-brand-ink ring-offset-2 ring-offset-brand-paper",
          )}
          style={{ backgroundColor: color.hex }}
        />
      ))}
      {rest > 0 && <span className="ml-0.5 text-[0.65rem] text-brand-ink/45">+{rest}</span>}
    </div>
  );
}
