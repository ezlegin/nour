"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "محصولات", href: "/#products", id: "products" },
  { label: "قیمت‌ها", href: "/#pricing", id: "pricing" },
  { label: "رنگ‌ها", href: "/#studio", id: "studio" },
  { label: "سرویس‌ها", href: "/#set", id: "set" },
  { label: "کارخانه", href: "/#factory", id: "factory" },
  { label: "تماس", href: "/#contact", id: "contact" },
];

// "تماس" lives in the CTA on desktop, so the inline nav skips it.
const desktopLinks = links.slice(0, 5);

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const progress = useRef<HTMLSpanElement>(null);

  // Background state + reading-progress hairline.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (progress.current) progress.current.style.transform = `scaleX(${ratio})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Highlight the section currently crossing the middle of the viewport.
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
          else setActive((current) => (current === entry.target.id ? null : current));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Mobile drawer: lock the page and close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-500",
        scrolled
          ? "bg-brand-paper/85 shadow-[0_1px_0_rgba(29,27,23,0.08),0_12px_32px_-24px_rgba(46,36,22,0.35)] backdrop-blur-xl"
          : "bg-brand-paper/0",
      )}
    >
      <div className="shell grid h-16 grid-cols-[1fr_auto_1fr] items-center gap-6">
        {/* primary nav */}
        <nav aria-label="ناوبری اصلی" className="hidden items-center gap-1 lg:flex">
          {desktopLinks.map((link) => {
            const current = active === link.id;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current ? "true" : undefined}
                className={cn(
                  "group relative rounded-full px-4 py-2 text-[0.86rem] font-medium transition-colors duration-300",
                  current ? "text-brand-ink" : "text-brand-ink/60 hover:text-brand-ink",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-4 -bottom-0.5 h-px origin-right bg-brand-clay transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
                    current ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="منو"
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center justify-self-start rounded-full border border-brand-ink/10 text-brand-ink/70 transition hover:border-brand-ink/30 hover:text-brand-ink lg:hidden"
        >
          <Menu size={18} />
        </button>

        {/* wordmark */}
        <Link
          href="/"
          aria-label="چینی نور — صفحه اصلی"
          className="justify-self-center transition-transform duration-500 hover:scale-[1.03]"
        >
          <Image
            src="/nour-logo.svg"
            alt="چینی نور"
            width={170}
            height={102}
            priority
            className={cn(
              "w-auto origin-center transition-[height] duration-500",
              scrolled ? "h-9 sm:h-10" : "h-10 sm:h-12",
            )}
          />
        </Link>

        {/* actions */}
        <div className="flex items-center justify-end gap-5">
          <a
            href="tel:02435752007"
            className="hidden items-center gap-2 text-[0.82rem] font-medium tabular-nums text-brand-ink/60 transition-colors hover:text-brand-ink xl:inline-flex"
            dir="ltr"
          >
            <Phone size={14} className="text-brand-clay" />
            024-35752007
          </a>
          <Link
            href="/#contact"
            className="group hidden h-11 items-center gap-2.5 rounded-full bg-brand-ink ps-5 pe-1.5 text-[0.82rem] font-medium text-brand-paper transition-colors duration-300 hover:bg-brand-clay sm:inline-flex"
          >
            استعلام قیمت
            <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-paper/12 transition-transform duration-300 group-hover:-translate-x-0.5">
              <ArrowLeft size={14} />
            </span>
          </Link>
          <a
            href="tel:02435752007"
            aria-label="تماس تلفنی"
            className="grid h-11 w-11 place-items-center rounded-full border border-brand-ink/10 text-brand-ink/70 sm:hidden"
          >
            <Phone size={16} />
          </a>
        </div>
      </div>

      {/* reading progress */}
      <span
        ref={progress}
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 block h-px origin-right scale-x-0 bg-brand-clay/70"
      />

      {/* mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-brand-ink/40 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label="منو"
          className={cn(
            "absolute inset-y-0 right-0 flex w-[84%] max-w-sm flex-col bg-brand-paper p-7 transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <Image src="/nour-logo.svg" alt="چینی نور" width={120} height={72} className="h-10 w-auto" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="بستن"
              tabIndex={open ? 0 : -1}
              className="grid h-11 w-11 place-items-center rounded-full border border-brand-ink/10"
            >
              <X size={17} />
            </button>
          </div>

          <nav className="mt-10 flex flex-col">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="flex items-baseline gap-4 border-b border-brand-ink/10 py-4 text-[1.15rem] font-medium text-brand-ink/85"
              >
                <span className="text-[0.7rem] text-brand-clay">
                  {(index + 1).toLocaleString("fa-IR", { minimumIntegerDigits: 2 })}
                </span>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-2 pt-8 text-[0.8rem] leading-6 text-brand-ink/60">
            <p>زنجان، کیلومتر ۲۵ جاده ابهر — زنجان</p>
            <p dir="ltr" className="text-end">024-35752007</p>
            <p dir="ltr" className="text-end">info@chininour.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}
