import Image from "@/components/Image";
import { Button } from "@/components/ui/button";
import { getLang } from "@/lib/getLang";
import { italiGray } from "@/public/products";
import Link from "next/link";
import React from "react";

const page = async () => {
  const faLang = (await getLang()) === "FA";

  return (
    <div className="flex flex-col-reverse items-center justify-center gap-10 py-8 lg:h-full lg:flex-row lg:justify-between lg:gap-16">
      <div
        className={`max-w-xl space-y-5 text-center lg:text-${faLang ? "right" : "left"}`}
      >
        <h1 className="flex flex-col gap-2">
          <span className="text-lg sm:text-xl">
            {faLang
              ? "هنر ظروف استون ور رنگی با"
              : "Experience the Art of Colorful Dining with"}
          </span>

          <span className="text-primary text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {faLang ? "شرکت چینی نور" : "Nour Porcelain Co"}
          </span>
        </h1>

        <p className="text-sm leading-7 text-muted-foreground sm:text-base">
          {faLang
            ? `با ظروف غذاخوری شیک و رنگارنگ نور پرسلین، زیبایی و سادگی را به میز خود
          بیاورید. طراحی مدرن، کیفیت بالا و تنوع چشم‌نواز رنگ‌ها، این محصولات را
          به انتخابی ایده‌آل برای هر سبک و سلیقه‌ای تبدیل کرده‌اند.`
            : `Discover elegant and colorful dinnerware designed for modern living.
          Nour Porcelain Co specializes in minimal, high-quality dishes
          available in a wide range of vibrant colors to suit every table and
          taste.`}
        </p>

        <div className="flex flex-col gap-3 pt-3 sm:flex-row sm:justify-center lg:justify-start">
          <Link href="/products">
            <Button size="lg" className="w-full sm:w-auto">
              {faLang ? "مشاهده محصولات" : "Visit Products"}
            </Button>
          </Link>

          <Link href="/contact">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              {faLang ? "ارتباط با ما" : "Contact Us"}
            </Button>
          </Link>
        </div>
      </div>

      <Image
        alt=""
        src={italiGray}
        size={1200}
        className="w-full sm:max-w-md lg:max-w-xl xl:w-[600px]"
      />
    </div>
  );
};

export default page;
