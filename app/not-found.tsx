import NourTypoLogo from "@/components/NourTypoLogo";
import { Button } from "@/components/ui/button";
import { getLang } from "@/lib/getLang";
import Link from "next/link";
import React from "react";

const NotFoundPage = async () => {
  const lang = await getLang();
  const title = lang === "EN" ? "Not Found..." : "یافت نشد...";
  const buttonLabel = lang === "EN" ? "Go Home" : "صفحه";
  const text =
    lang === "EN"
      ? "This address was not found."
      : "متاسفانه این آدرس یافت نشد.";

  return (
    <div className="flex flex-col items-center gap-3 justify-center text-center h-screen">
      <div className="flex flex-col items-center gap-3">
        <NourTypoLogo size={130} className="pb-4" />
        <h1 className="text-4xl font-bold text-primary border p-2 px-3 rounded-2xl">
          (404) {title}
        </h1>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>

      <div>
        <Link href={"/"}>
          <Button>{buttonLabel}</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
