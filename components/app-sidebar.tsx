import { ChartNoAxesGantt, ScanBarcode, User, Users } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import NourTypoLogo from "./NourTypoLogo";
import { Button } from "./ui/button";
import LogoutButton from "./LogoutButton";
import { getSessionAdmin } from "@/data/session";

export async function AppSidebar() {
  const admin = await getSessionAdmin();
  return (
    <Sidebar>
      <SidebarHeader className="p-4 pt-6 space-y-6">
        <Link href={"/"}>
          <NourTypoLogo />
        </Link>

        <Button variant={"outline"} className=" justify-start cursor-auto py-5">
          <User />
          {admin?.name}
        </Button>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <LogoutButton />
      </SidebarFooter>
    </Sidebar>
  );
}

// Menu items.
const items = [
  {
    title: "Products",
    url: "/panel/products",
    icon: ScanBarcode,
  },
  {
    title: "Categories",
    url: "/panel/categories",
    icon: ChartNoAxesGantt,
  },
  {
    title: "Admins",
    url: "/panel/admins",
    icon: Users,
  },
];
