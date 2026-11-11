import { Flame, FlaskConical, Layers, MapPin, PackageCheck } from "lucide-react";

/** The line, in the order a piece travels through it. */
const steps = [
  { title: "شکل‌دهی", body: "بدنه‌ی پرسلین در قالب فرم می‌گیرد؛ گرد یا تخت." },
  { title: "پخت اول", body: "بیسکویت‌پز: بدنه سخت و آماده‌ی لعاب می‌شود." },
  { title: "لعاب‌کاری", body: "یکی از هشت لعاب، و در صورت سفارش، لب طلا." },
  { title: "پخت نهایی", body: "لعاب در دمای بالا ذوب و با بدنه یکی می‌شود." },
  { title: "بازرسی", body: "فرم، لعاب و لبه‌ی هر قطعه پیش از بسته‌بندی." },
];

const pillars = [
  {
    icon: Flame,
    title: "کوره‌های صنعتی",
    body: "پخت چندمرحله‌ای در دمای بالا؛ بدنه‌ای مقاوم با سطحی که با شست‌وشوی روزانه تغییر نمی‌کند.",
  },
  {
    icon: FlaskConical,
    title: "لعاب بدون سرب",
    body: "همه‌ی لعاب‌ها بر پایه‌ی استانداردهای ایمنی مواد غذایی انتخاب و در آزمایشگاه کارخانه کنترل می‌شوند.",
  },
  {
    icon: Layers,
    title: "تولید انبوه",
    body: "خط تولید پیوسته برای سفارش‌های عمده، ست‌های سازمانی و همکاری با رستوران‌ها و هتل‌ها.",
  },
  {
    icon: PackageCheck,
    title: "کنترل کیفیت",
    body: "هر قطعه پیش از بسته‌بندی از نظر فرم، لعاب و لبه بازرسی می‌شود؛ دورریز، بخشی از فرآیند است.",
  },
];

const facts = [
  ["۸", "رنگ لعاب"],
  ["۲", "فرم سرویس"],
  ["۳۳", "پارچه در بزرگ‌ترین سرویس"],
  ["۲۵", "کیلومتر تا زنجان"],
];

export default function Factory() {
  return (
    <section id="factory" className="relative scroll-mt-24 overflow-hidden bg-brand-ink text-brand-paper">
      {/* ------------------------------------------------------------ */}
      {/*  the site itself                                              */}
      {/* ------------------------------------------------------------ */}
      <div className="relative isolate min-h-[34rem] lg:min-h-[44rem]">
        <picture>
          <source media="(max-width: 700px)" srcSet="/factory/company-900.webp" type="image/webp" />
          <source srcSet="/factory/company.webp" type="image/webp" />
          <img
            src="/factory/company.webp"
            alt="ورودی کارخانه چینی نور با پرچم‌های نور و پرچم ایران، و خط تولید در پس‌زمینه"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-[50%_30%]"
            loading="lazy"
            decoding="async"
          />
        </picture>
        {/* sky stays bright; the bottom sinks into the section's ink */}
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(29,27,23,0.15)_0%,rgba(29,27,23,0)_30%,rgba(29,27,23,0.55)_62%,var(--ink)_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_left,rgba(29,27,23,0.55),transparent_60%)]"
          aria-hidden="true"
        />

        <div className="shell flex min-h-[34rem] flex-col justify-end pb-14 pt-28 lg:min-h-[44rem] lg:pb-20">
          <p className="flex items-center gap-3 text-[0.66rem] tracking-[0.2em] text-brand-paper/70">
            <span className="numeral text-[0.85rem] italic">۰۵</span>
            <span className="h-px w-8 bg-brand-paper/40" />
            کارخانه
          </p>
          <h2 className="mt-5 max-w-3xl text-[2.5rem] font-black leading-[1.18] drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:text-[3.4rem] lg:text-[4.2rem]">
            پرسلینِ نور،
            <br />
            ساخت <span className="text-brand-gold">زنجان</span>.
          </h2>
          <p className="mt-6 max-w-lg text-[0.92rem] leading-8 text-brand-paper/80">
            چینی نور در زنجان، در کیلومتر ۲۵ جاده ابهر، پرسلین غذاخوری تولید می‌کند؛ از
            شکل‌دهی و لعاب‌کاری تا پخت، بازرسی و بسته‌بندی، همه در یک مجموعه.
          </p>
          <p className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-brand-paper/20 bg-brand-ink/40 px-4 py-2 text-[0.76rem] text-brand-paper/80 backdrop-blur">
            <MapPin size={14} className="text-brand-gold" />
            زنجان، کیلومتر ۲۵ جاده ابهر
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[34rem] opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:96px_96px] lg:top-[44rem]" />

      <div className="shell relative pb-20 lg:pb-28">
        {/* ---------------------------------------------------------- */}
        {/*  numbers                                                     */}
        {/* ---------------------------------------------------------- */}
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-brand-paper/10 bg-brand-paper/10 lg:grid-cols-4">
          {facts.map(([value, label]) => (
            <div key={label} className="bg-brand-ink px-6 py-7 sm:px-8">
              <dt className="numeral text-[2.6rem] leading-none text-brand-gold sm:text-[3rem]">{value}</dt>
              <dd className="mt-3 text-[0.8rem] text-brand-paper/55">{label}</dd>
            </div>
          ))}
        </dl>

        {/* ---------------------------------------------------------- */}
        {/*  the line                                                    */}
        {/* ---------------------------------------------------------- */}
        <div className="mt-20 lg:mt-24">
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
            <h3 className="text-[1.7rem] font-black leading-tight sm:text-[2.1rem]">
              از گِل تا جعبه، <span className="text-brand-gold">زیر یک سقف</span>.
            </h3>
            <p className="max-w-sm text-[0.84rem] leading-7 text-brand-paper/50">
              هر قطعه این پنج ایستگاه را در خود کارخانه طی می‌کند.
            </p>
          </div>

          <ol className="relative mt-10 grid gap-0 lg:grid-cols-5 lg:gap-6">
            {/* the conveyor */}
            <span
              className="absolute inset-x-0 top-[1.15rem] hidden h-px bg-[linear-gradient(to_left,transparent,rgba(201,162,39,0.55)_12%,rgba(201,162,39,0.55)_88%,transparent)] lg:block"
              aria-hidden="true"
            />
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative flex gap-4 pb-7 last:pb-0 lg:block lg:pb-0"
              >
                {/* the conveyor, vertical on small screens */}
                {i < steps.length - 1 && (
                  <span
                    className="absolute bottom-0 start-[1.15rem] top-[2.3rem] w-px bg-brand-gold/30 lg:hidden"
                    aria-hidden="true"
                  />
                )}
                <span className="relative grid shrink-0 h-[2.3rem] w-[2.3rem] place-items-center rounded-full border border-brand-gold/50 bg-brand-ink text-[0.8rem] tabular-nums text-brand-gold">
                  {(i + 1).toLocaleString("fa-IR")}
                </span>
                <div className="pt-1.5 lg:pt-0">
                  <p className="text-[1rem] font-bold lg:mt-4">{step.title}</p>
                  <p className="mt-1.5 text-[0.78rem] leading-6 text-brand-paper/50">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* ---------------------------------------------------------- */}
        {/*  what that means                                             */}
        {/* ---------------------------------------------------------- */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-3xl border border-brand-paper/10 bg-brand-paper/[0.03] p-6 transition-colors duration-500 hover:border-brand-gold/40 hover:bg-brand-paper/[0.05]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-gold/12 text-brand-gold transition-colors duration-500 group-hover:bg-brand-gold group-hover:text-brand-ink">
                <Icon size={19} strokeWidth={1.7} />
              </span>
              <h3 className="mt-5 text-[1.02rem] font-bold">{title}</h3>
              <p className="mt-2 text-[0.8rem] leading-7 text-brand-paper/50">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
