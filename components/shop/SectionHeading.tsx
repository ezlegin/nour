import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  align?: "start" | "center";
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  action,
  align = "start",
  className,
  light,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-7 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        <div className="mb-5 flex items-center gap-4">
          {index && (
            <span
              className={cn(
                "numeral text-sm italic",
                light ? "text-brand-paper/40" : "text-brand-ink/35",
              )}
            >
              {index}
            </span>
          )}
          <span
            className={cn(
              "h-px w-8",
              light ? "bg-brand-paper/25" : "bg-brand-ink/20",
            )}
          />
          {eyebrow && (
            <span
              className={cn(
                "text-[0.64rem] uppercase tracking-[0.3em]",
                light ? "text-brand-paper/55" : "text-brand-ink/50",
              )}
            >
              {eyebrow}
            </span>
          )}
        </div>

        <h2
          className={cn(
            "text-[2.05rem] font-extrabold leading-[1.15] tracking-tight sm:text-[2.6rem] lg:text-[3.1rem]",
            light ? "text-brand-paper" : "text-brand-ink",
          )}
        >
          {title}
        </h2>

        {description && (
          <p
            className={cn(
              "mt-5 max-w-xl text-[0.92rem] leading-7",
              light ? "text-brand-paper/60" : "text-brand-ink/55",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
