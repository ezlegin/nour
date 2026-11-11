const values = [
  "کارخانه چینی نور · زنجان",
  "هشت رنگ لعاب",
  "بشقاب گرد و تخت",
  "پخت چندمرحله‌ای",
  "لعاب بدون سرب",
  "قابل شست‌وشو در ماشین",
  "تولید انبوه و سفارش عمده",
];

export default function ValueMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-brand-ink/10 bg-brand-cream/70 py-5">
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 items-center">
            {values.map((value) => (
              <span key={`${group}-${value}`} className="flex items-center">
                <span className="whitespace-nowrap px-7 text-[0.72rem] font-medium tracking-[0.08em] text-brand-ink/55">
                  {value}
                </span>
                <span className="text-[0.7rem] text-brand-clay/60">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
