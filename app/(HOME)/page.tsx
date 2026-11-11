import HeroStage from "@/components/home/HeroStage";
import ValueMarquee from "@/components/home/ValueMarquee";
import GlazeStudio from "@/components/home/GlazeStudio";
import SetStory from "@/components/home/SetStory";
import ProductsShowcase from "@/components/home/ProductsShowcase";
import Pricing from "@/components/home/Pricing";
import Factory from "@/components/home/Factory";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  return (
    <>
      <HeroStage />
      <ValueMarquee />
      <GlazeStudio />
      <SetStory />
      <ProductsShowcase />
      <Pricing />
      <Factory />
      <Contact />
    </>
  );
}

export const metadata = {
  title: "چینی نور | کارخانه پرسلین غذاخوری در زنجان",
  description:
    "کارخانه چینی نور در زنجان: تولید پرسلین غذاخوری در هشت رنگ لعاب — بشقاب گرد و تخت، کاسه، ماگ و سرویس‌های کامل.",
};
