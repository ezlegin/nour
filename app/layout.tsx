import { Toaster } from "@/components/ui/sonner";
import SmoothScroll from "@/components/site/SmoothScroll";
import "./globals.css";
import { Metadata, Viewport } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen antialiased">
        {children}
        <SmoothScroll />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://chininour.com"),
  title: {
    default: "چینی نور | کارخانه پرسلین غذاخوری در زنجان",
    template: "%s | چینی نور",
  },
  description:
    "کارخانه چینی نور در زنجان: تولید پرسلین غذاخوری در هشت رنگ لعاب — بشقاب گرد و تخت، کاسه، ماگ و سرویس‌های کامل.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "چینی نور",
    description: "پرسلین غذاخوری، ساخته‌شده در زنجان.",
    url: "https://chininour.com",
    siteName: "چینی نور",
    images: [{ url: "/products/dish.png", width: 1200, height: 1200, alt: "چینی نور" }],
    locale: "fa_IR",
    type: "website",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f4f3",
};
