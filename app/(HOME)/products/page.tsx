import { getLang } from "@/lib/getLang";
import ProductsGrid from "./components/ProductsGrid";
import PageTitle from "@/components/PageTitle";

const ProductsPage = async () => {
  const faLang = (await getLang()) === "FA";
  const lang = await getLang();

  return (
    <div className="space-y-8">
      <PageTitle lang={lang} titleEn="Our Products" titleFa="محصولات ما" />

      <p className="text-center text-muted-foreground">
        {faLang
          ? "مجموعه‌ای از ظروف پرسلین شیک و رنگارنگ ما را کشف کنید."
          : "Discover our collection of elegant and colorful porcelain dinnerware."}{" "}
        <br />
        {faLang
          ? "از ظروف ساده‌ی روزمره تا سرویس‌های رنگارنگ پذیرایی، هر قطعه با طراحی‌ای ساده و ماندگار ساخته شده تا تجربه‌ای خاص از صرف غذا برایتان رقم بزند."
          : `From minimal everyday dishes to vibrant table sets, each piece is
        designed to elevate your dining experience with timeless simplicity.`}
      </p>

      <div className="flex justify-center items-center">
        <ProductsGrid />
      </div>
    </div>
  );
};

export default ProductsPage;

export const metadata = {
  title: "Products",
  description:
    "Explore our collection of elegant and colorful porcelain dinnerware, designed to enhance your dining experience with timeless simplicity.",
};
