import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  inverted?: boolean;
}

export default function Logo({ className, inverted }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 leading-none select-none",
        inverted ? "text-brand-paper" : "text-brand-ink",
        className,
      )}
      aria-label="Nour Porcelain"
    >
      <svg
        viewBox="0 0 40 40"
        className="h-9 w-9 shrink-0"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="18.5" stroke="currentColor" strokeWidth="1" opacity="0.45" />
        <path
          d="M20 6.5c1.6 5.6 2.9 6.9 8.5 8.5-5.6 1.6-6.9 2.9-8.5 8.5-1.6-5.6-2.9-6.9-8.5-8.5 5.6-1.6 6.9-2.9 8.5-8.5Z"
          fill="currentColor"
          opacity="0.9"
          transform="translate(0 5)"
        />
        <circle cx="20" cy="31.5" r="1.2" fill="currentColor" opacity="0.55" />
      </svg>

      <span className="flex flex-col gap-[3px]">
        <span className="font-display text-[1.65rem] font-medium leading-none tracking-[0.3em]">
          NOUR
        </span>
        <span
          className={cn(
            "text-[0.46rem] font-medium uppercase leading-none tracking-[0.46em]",
            inverted ? "text-brand-paper/55" : "text-brand-ink/50",
          )}
        >
          Porcelain · نور
        </span>
      </span>
    </span>
  );
}
