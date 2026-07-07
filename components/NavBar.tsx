import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getLang } from "@/lib/getLang";
import { Menu } from "lucide-react";
import Link from "next/link";
import LangToggle from "./LangToggle";
import NourLogo from "./NourLogo";

const NavBar = async () => {
  const faLang = (await getLang()) === "FA";

  return (
    <div className="flex items-center justify-between py-4">
      <Link href={"/"}>
        <NourLogo />
      </Link>

      <div className="flex items-center gap-3 md:gap-12 ">
        <ul className="md:flex gap-12 hidden">
          {(faLang ? menuItemsFA : menuItemsEN).map((item, idx) => (
            <li key={idx}>
              <Link className="hover:text-foreground/80" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <LangToggle />

        <div className="block md:hidden">
          <Popover>
            <PopoverTrigger className="cursor-pointer ">
              <Menu />
            </PopoverTrigger>
            <PopoverContent className="space-y-4 w-40">
              {(faLang ? menuItemsFA : menuItemsEN).map((item, idx) => (
                <Link
                  key={idx}
                  className="hover:text-foreground/80 block"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

const menuItemsEN = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
  { label: "About Us", href: "/about-us" },
];

const menuItemsFA = [
  { label: "صفحه اصلی", href: "/" },
  { label: "محصولات", href: "/products" },
  { label: "ارتباط با ما", href: "/contact" },
  { label: "درباره ما", href: "/about-us" },
];

export default NavBar;
