import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider dir="ltr">
      <AppSidebar />
      <main className="px-8 py-4  w-full">
        <SidebarTrigger />
        <div className="pt-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}

export const metadata = {
  title: "Admin Panel",
};
