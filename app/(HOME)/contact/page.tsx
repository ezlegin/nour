import ContactForm from "@/components/forms/ContactForm";
import { getLang } from "@/lib/getLang";
import { Metadata } from "next";

const ContactPage = async () => {
  const faLang = (await getLang()) === "FA";

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">
        {faLang ? "ارتباط با ما" : "Contact Us"}
      </h1>
      <p className="text-center text-muted-foreground">
        {faLang
          ? `سوالی دارید یا نیاز به راهنمایی دارید؟
پیام خود را برای ما بفرستید، در کوتاه‌ترین زمان پاسخ‌گو خواهیم بود.`
          : `Have a question or inquiry? Send us a message and we will get back to
        you soon.`}
      </p>

      <ContactForm faLang={faLang} />
    </div>
  );
};

export default ContactPage;

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with us for any inquiries or support.",
};
