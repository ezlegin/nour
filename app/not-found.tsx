import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center">
      <Image src="/nour-logo.svg" alt="چینی نور" width={150} height={90} className="h-12 w-auto" />
      <div className="space-y-3">
        <p className="numeral text-[0.7rem] tracking-[0.3em] text-brand-ink/35">404</p>
        <h1 className="text-[1.6rem] font-black">این صفحه پیدا نشد.</h1>
        <p className="text-[0.82rem] text-brand-ink/50">متاسفانه این آدرس وجود ندارد.</p>
      </div>
      <Link
        href="/"
        className="rounded-full bg-brand-ink px-6 py-3 text-[0.76rem] text-brand-paper transition hover:bg-brand-clay"
      >
        بازگشت به خانه
      </Link>
    </div>
  );
}
