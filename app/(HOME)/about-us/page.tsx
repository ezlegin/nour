import PageTitle from "@/components/PageTitle";
import { getLang } from "@/lib/getLang";
import { Metadata } from "next";
import React from "react";

const page = async () => {
  const faLang = (await getLang()) === "FA";
  const lang = await getLang();

  return (
    <div className="space-y-8">
      <PageTitle lang={lang} titleEn="About Us" titleFa="درباره ما" />

      {faLang ? (
        <p>
          شرکت چینی نور با سال‌ها تجربه در صنعت چینی و ظروف آشپزخانه، فعالیت خود
          را با هدف ارائه محصولاتی با کیفیت، زیبا و بادوام آغاز کرد. ما با
          بهره‌گیری از دانش روز، طراحی‌های نوآورانه و همکاری با برترین
          تولیدکنندگان داخلی و خارجی، تلاش می‌کنیم تا بهترین تجربه را برای
          مشتریان خود فراهم کنیم. ما در چینی نور معتقدیم که ظروف، فقط وسایلی
          برای سرو غذا نیستند؛ بلکه بخشی از سبک زندگی و زیبایی میز غذا هستند. به
          همین دلیل، محصولات ما ترکیبی از هنر، فرهنگ و عملکرد هستند که در کنار
          هم، پاسخگوی سلیقه‌های گوناگون مشتریان خواهند بود. ماموریت ما ارائه
          مجموعه‌ای متنوع از ظروف چینی با کیفیت بالا و طراحی منحصر به‌فرد، در
          راستای جلب رضایت مشتریان و ارتقای فرهنگ میزبانی در خانه‌های ایرانی.
          ارزش‌های ما کیفیت بی‌نظیر طراحی هنرمندانه احترام به سلیقه مشتری صداقت
          در فروش و خدمات ما از همراهی شما افتخار می‌کنیم و همواره آماده‌ایم با
          پیشنهادات و نظرات ارزشمندتان، مسیر رشد و تعالی خود را هموارتر کنیم.
        </p>
      ) : (
        <p>
          Nour Porcelain Company, with years of experience in the porcelain and
          kitchenware industry, began its journey with the goal of offering
          high-quality, beautiful, and durable products. By leveraging
          up-to-date knowledge, innovative designs, and collaborations with top
          domestic and international manufacturers, we strive to provide the
          best experience for our customers. At Nour Porcelain, we believe that
          tableware is not just a tool for serving food—it is part of a
          lifestyle and the beauty of the dining table. That’s why our products
          are a combination of art, culture, and functionality, coming together
          to meet the diverse tastes of our customers. Our mission is to offer a
          diverse collection of high-quality porcelain dishes with unique
          designs, aiming to ensure customer satisfaction and elevate the
          culture of hospitality in Iranian homes. Our values include: Unmatched
          quality Artistic design Respect for customer preferences Honesty in
          sales and service We are proud of your support and are always ready to
          grow and improve with your valuable suggestions and feedback.
        </p>
      )}
    </div>
  );
};

export default page;

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Nour Porcelain Company, our mission, values, and commitment to quality in the porcelain and kitchenware industry.",
};
