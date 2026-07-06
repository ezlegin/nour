import { getLang } from "@/lib/getLang";
import { Metadata } from "next";

const ContactPage = async () => {
  const faLang = (await getLang()) === "FA";

  return (
    <div className="flex flex-col items-center gap-8">
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

      <div className="flex flex-col items-center justify-center w-full md:w-1/2 space-y-4">
        <h2 className="text-xl font-bold">
          {faLang ? "اطلاعات تماس" : "Contact Info"}
        </h2>
        <p className="text-muted-foreground">
          {faLang
            ? "اگر سوال یا درخواستی دارید، لطفاً بدون تردید از طریق اطلاعات زیر با ما در ارتباط باشید."
            : `If you have any questions or inquiries, please feel free to reach out
          to us using the information below.`}
        </p>

        <hr />

        <div className="text-center">
          <p>
            <strong>{faLang ? "ایمیل:" : "Email:"}</strong> info@chininour.com
          </p>
          <p>
            <strong>{faLang ? "تماس:" : "Phone:"}</strong>{" "}
            <span dir="ltr">+98 24 3575 2007</span>
          </p>
          <p>
            <strong>{faLang ? "آدرس:" : "Address:"}</strong>
            {faLang
              ? `کیلومتر 15 جاده ابهر، زنجان، شرکت چینی نور`
              : `15th km of Abhar-Zanjan Road, Zanjan, Iran`}
          </p>
        </div>

        <div className="bg-muted w-full h-60 rounded-md flex justify-center items-center overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11199.229938825567!2d49.118832487596706!3d36.28479292776235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ff44159b7e74f07%3A0x15010387753119a7!2sNour%20Chini!5e0!3m2!1sen!2s!4v1751037875046!5m2!1sen!2s"
            width="100%"
            height="100%"
            className="border:0;"
            loading="lazy"
          />
        </div>
      </div>

      {/* <ContactForm faLang={faLang} /> */}
    </div>
  );
};

export default ContactPage;

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with us for any inquiries or support.",
};
