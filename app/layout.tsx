import { Toaster } from "@/components/ui/sonner";
import { getLang } from "@/lib/getLang";
import "./globals.css";
import { Metadata } from "next";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const savedLang = await getLang();

  return (
    <html
      lang={savedLang === "FA" ? "fa" : "en"}
      dir={savedLang === "FA" ? "rtl" : "ltr"}
    >
      <body className="dark">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: "Nour Porcelain",
    template: "%s | Nour Porcelain",
  },
  description: "Nour Porcelain",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Nour Porcelain",
    description: "Nour Porcelain",
    url: "https://chininour.com",
    siteName: "Nour Porcelain",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nour Porcelain",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  viewport: "width=device-width, initial-scale=1",
};
