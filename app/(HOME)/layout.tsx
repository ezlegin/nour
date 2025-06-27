import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`antialiased max-w-screen-2xl mx-auto grid grid-rows-[auto_1fr_auto] min-h-screen px-4`}
    >
      <NavBar />
      <div className="my-16">{children}</div>
      <Footer />
    </div>
  );
}
