"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowLeft,
  Check,
  CircleAlert,
  CircleCheck,
  Copy,
  Loader2,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";

const PHONE = "024-35752007";
const PHONE_HREF = "tel:+982435752007";
const EMAIL = "info@chininour.com";
const ADDRESS = "زنجان، کیلومتر ۲۵ جاده ابهر، کارخانه چینی نور";
const MAP_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "کارخانه چینی نور زنجان",
)}`;

/**
 * Web3Forms access key, set at build time. It is public by design (it only
 * lets someone send to the one address it was issued for). Without it the
 * form falls back to the visitor's mail app.
 */
const FORM_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const FORM_ENDPOINT = "https://api.web3forms.com/submit";

type Status = "idle" | "sending" | "sent" | "error" | "mailto";

const TOPICS = [
  { key: "bulk", label: "خرید عمده" },
  { key: "horeca", label: "رستوران و هتل" },
  { key: "corporate", label: "سفارش سازمانی" },
  { key: "tech", label: "پرسش فنی" },
];

function CopyButton({ value, label }: { value: string; label: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setDone(true);
          setTimeout(() => setDone(false), 1600);
        } catch {
          // clipboard blocked: the value is still on screen to copy by hand
        }
      }}
      aria-label={done ? "کپی شد" : `کپی ${label}`}
      title={done ? "کپی شد" : `کپی ${label}`}
      className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brand-ink/10 text-brand-ink/50 transition-colors hover:border-brand-ink/30 hover:text-brand-ink focus-visible:outline-2 focus-visible:outline-brand-clay"
    >
      {done ? <Check size={15} className="text-brand-sage" /> : <Copy size={14} />}
    </button>
  );
}

export default function Contact() {
  const [topic, setTopic] = useState(TOPICS[0].key);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const subject = () => `${TOPICS.find((item) => item.key === topic)?.label} — ${name}`;

  // Opens the visitor's own mail app with the message written out: used when
  // no form service is configured, and offered when the service fails.
  const openMailApp = () => {
    const body = [message.trim(), "", `نام: ${name}`, ...(phone ? [`تلفن: ${phone}`] : [])].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject())}&body=${encodeURIComponent(body)}`;
  };

  // The site is static, so messages go through Web3Forms, which emails each
  // one to the address its access key was created for. No admin panel.
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    if (!FORM_KEY) {
      openMailApp();
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: FORM_KEY,
          subject: `پیام سایت چینی نور · ${subject()}`,
          from_name: "سایت چینی نور",
          "موضوع": TOPICS.find((item) => item.key === topic)?.label,
          "نام": name,
          "تلفن": phone || "—",
          "پیام": message.trim(),
          // bots fill every field; people never see this one
          botcheck: (form.elements.namedItem("botcheck") as HTMLInputElement | null)?.checked ?? false,
        }),
      });
      const result = (await response.json().catch(() => ({}))) as { success?: boolean };
      if (!response.ok || !result.success) throw new Error("rejected");
      setStatus("sent");
      setName("");
      setPhone("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-2xl border border-brand-ink/12 bg-brand-paper px-4 py-3.5 text-[0.9rem] text-brand-ink placeholder:text-brand-ink/35 transition-colors focus:border-brand-ink/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-clay/30";

  return (
    <section id="contact" className="scroll-mt-24 bg-brand-paper py-20 lg:py-28">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <div>
            <p className="eyebrow">
              <span>۰۶</span>
              تماس
            </p>
            <h2 className="mt-5 text-[2.2rem] font-black leading-[1.22] sm:text-[2.8rem] lg:text-[3.2rem]">
              سفارش عمده و همکاری،
              <br />
              <span className="text-brand-clay">مستقیم از کارخانه</span>.
            </h2>
          </div>
          <p className="max-w-[26rem] text-[0.92rem] leading-8 text-brand-ink/60">
            برای قیمت عمده، ست‌های سازمانی، تأمین رستوران و هتل یا پرسش درباره‌ی لعاب و
            مقاومت حرارتی، تماس بگیرید یا پیام بگذارید.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          {/* -------------------------------------------------------- */}
          {/*  direct channels                                           */}
          {/* -------------------------------------------------------- */}
          <div className="flex flex-col gap-4">
            <a
              href={PHONE_HREF}
              className="group relative overflow-hidden rounded-3xl bg-brand-ink p-6 text-brand-paper transition-colors duration-300 hover:bg-[#2a2722] sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gold text-brand-ink">
                  <Phone size={20} />
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-paper/10 transition-transform duration-300 group-hover:-translate-x-1">
                  <ArrowLeft size={16} />
                </span>
              </div>
              <p className="mt-6 text-[0.8rem] text-brand-paper/55">تماس با کارخانه</p>
              <p dir="ltr" className="mt-1 text-end text-[1.9rem] font-black tabular-nums tracking-wide sm:text-[2.2rem]">
                {PHONE}
              </p>
              <p className="mt-2 text-[0.78rem] text-brand-paper/45">پاسخ‌گویی در ساعات اداری</p>
            </a>

            <div className="flex items-center gap-4 rounded-3xl border border-brand-ink/10 bg-brand-cream p-5 sm:p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-clay/12 text-brand-clay">
                <Mail size={20} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[0.78rem] text-brand-ink/50">ایمیل</p>
                <a
                  href={`mailto:${EMAIL}`}
                  dir="ltr"
                  className="mt-0.5 block truncate text-end text-[0.95rem] font-bold text-brand-ink transition-colors hover:text-brand-clay"
                >
                  {EMAIL}
                </a>
              </div>
              <CopyButton value={EMAIL} label="ایمیل" />
            </div>

            <div className="flex flex-1 flex-col rounded-3xl border border-brand-ink/10 bg-brand-cream p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-sage/20 text-[#4f8a74]">
                  <MapPin size={20} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[0.78rem] text-brand-ink/50">نشانی کارخانه</p>
                  <p className="mt-1 text-[0.95rem] font-bold leading-7">{ADDRESS}</p>
                </div>
                <CopyButton value={ADDRESS} label="نشانی" />
              </div>

              {/* a drawn sketch of the route, not a live map */}
              <div className="relative mt-5 min-h-[8.5rem] flex-1 overflow-hidden rounded-2xl border border-brand-ink/8 bg-[#ecebe6]">
                <svg viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
                  <defs>
                    <pattern id="contact-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M24 0H0V24" fill="none" stroke="#1d1b17" strokeOpacity="0.05" />
                    </pattern>
                  </defs>
                  <rect width="400" height="160" fill="url(#contact-grid)" />
                  <path d="M-10 128C80 118 130 70 210 74S330 40 410 22" fill="none" stroke="#fff" strokeWidth="12" strokeLinecap="round" />
                  <path d="M-10 128C80 118 130 70 210 74S330 40 410 22" fill="none" stroke="#d6d3c9" strokeWidth="1.5" strokeDasharray="6 7" />
                  <circle cx="352" cy="36" r="5" fill="#1d1b17" fillOpacity="0.35" />
                  <circle cx="44" cy="122" r="5" fill="#1d1b17" fillOpacity="0.35" />
                  <circle cx="210" cy="74" r="20" fill="#df8069" fillOpacity="0.16" />
                  <circle cx="210" cy="74" r="8" fill="#df8069" />
                  <circle cx="210" cy="74" r="3" fill="#fff" />
                </svg>
                <span className="absolute right-[8%] top-[10%] text-[0.68rem] text-brand-ink/45">زنجان</span>
                <span className="absolute bottom-[10%] left-[6%] text-[0.68rem] text-brand-ink/45">ابهر</span>
                <span className="absolute left-1/2 top-[54%] -translate-x-1/2 rounded-full bg-brand-ink px-3 py-1 text-[0.7rem] text-brand-paper">
                  کیلومتر ۲۵
                </span>
              </div>

              <a
                href={MAP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-brand-ink/15 text-[0.84rem] font-medium text-brand-ink/75 transition-colors hover:border-brand-ink/40 hover:text-brand-ink"
              >
                <Navigation size={15} />
                مسیریابی روی نقشه
              </a>
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/*  message                                                   */}
          {/* -------------------------------------------------------- */}
          <form
            onSubmit={submit}
            className="flex flex-col rounded-[2rem] border border-brand-ink/10 bg-brand-cream p-6 sm:p-8"
          >
            <h3 className="text-[1.35rem] font-black">پیام بگذارید</h3>
            <p className="mt-1.5 text-[0.82rem] leading-7 text-brand-ink/55">
              پیام مستقیم به ایمیل کارخانه می‌رسد و از همان‌جا پاسخ می‌دهیم.
            </p>

            <fieldset className="mt-7">
              <legend className="text-[0.8rem] font-medium text-brand-ink/70">موضوع</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {TOPICS.map((item) => {
                  const active = item.key === topic;
                  return (
                    <label
                      key={item.key}
                      className={cn(
                        "cursor-pointer rounded-full border px-4 py-2 text-[0.8rem] transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-brand-clay",
                        active
                          ? "border-brand-ink bg-brand-ink text-brand-paper"
                          : "border-brand-ink/15 text-brand-ink/65 hover:border-brand-ink/40",
                      )}
                    >
                      <input
                        type="radio"
                        name="topic"
                        value={item.key}
                        checked={active}
                        onChange={() => setTopic(item.key)}
                        className="sr-only"
                      />
                      {item.label}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-[0.8rem] font-medium text-brand-ink/70">نام یا نام مجموعه</span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="مثلاً رستوران آفتاب"
                  className={cn(field, "mt-2")}
                />
              </label>
              <label className="block">
                <span className="text-[0.8rem] font-medium text-brand-ink/70">
                  شماره تماس <span className="text-brand-ink/40">(اختیاری)</span>
                </span>
                <input
                  type="tel"
                  name="phone"
                  dir="ltr"
                  inputMode="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="0912 000 0000"
                  className={cn(field, "mt-2 text-end")}
                />
              </label>
            </div>

            <label className="mt-4 flex flex-1 flex-col">
              <span className="text-[0.8rem] font-medium text-brand-ink/70">پیام</span>
              <textarea
                required
                name="message"
                rows={6}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="چه قطعه‌هایی، در چه رنگی و حدوداً چند دست؟"
                className={cn(field, "mt-2 min-h-[9rem] flex-1 resize-none leading-7")}
              />
            </label>

            {/* honeypot: hidden from people, ticked by bots */}
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[0.76rem] text-brand-ink/45">به {EMAIL}</p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex h-12 items-center gap-3 rounded-full bg-brand-ink ps-6 pe-1.5 text-[0.86rem] font-medium text-brand-paper transition-colors duration-300 hover:bg-brand-clay focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-clay disabled:cursor-wait disabled:opacity-70"
              >
                {status === "sending" ? "در حال ارسال…" : "ارسال پیام"}
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-paper/12 transition-transform duration-300 group-hover:-translate-x-0.5">
                  {status === "sending" ? (
                    <Loader2 size={15} className="animate-spin" />
                  ) : (
                    <Send size={15} className="-scale-x-100" />
                  )}
                </span>
              </button>
            </div>

            <div aria-live="polite">
              {status === "sent" && (
                <p className="fade-in-soft mt-5 flex items-start gap-3 rounded-2xl border border-[#4f8a74]/30 bg-[#4f8a74]/10 px-4 py-3.5 text-[0.84rem] leading-7 text-[#2f5e4c]">
                  <CircleCheck size={18} className="mt-1 shrink-0" />
                  پیام شما به کارخانه رسید. به‌زودی با شما تماس می‌گیریم.
                </p>
              )}
              {status === "error" && (
                <p className="fade-in-soft mt-5 flex items-start gap-3 rounded-2xl border border-brand-clay/35 bg-brand-clay/10 px-4 py-3.5 text-[0.84rem] leading-7 text-[#9b4a37]">
                  <CircleAlert size={18} className="mt-1 shrink-0" />
                  <span>
                    پیام ارسال نشد. دوباره امتحان کنید، یا{" "}
                    <button type="button" onClick={openMailApp} className="font-bold underline underline-offset-4">
                      با برنامه‌ی ایمیل بفرستید
                    </button>{" "}
                    یا با {PHONE.replace(/-/g, "")} تماس بگیرید.
                  </span>
                </p>
              )}
              {status === "mailto" && (
                <p className="fade-in-soft mt-5 text-[0.8rem] leading-7 text-brand-ink/55">
                  پیام در برنامه‌ی ایمیل شما باز شد؛ آن را از همان‌جا بفرستید. اگر باز نشد،
                  مستقیم به {EMAIL} بنویسید.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
