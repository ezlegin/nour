import Link from "next/link";
import NourTypoLogo from "./NourTypoLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border py-5 text-sm text-muted-foreground">
      <div className="mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <Link href="/" className="shrink-0">
          <NourTypoLogo />
        </Link>

        <p
          dir="ltr"
          className="text-center text-xs leading-relaxed md:text-right"
        >
          © {new Date().getFullYear()} Nour Porcelain Co{" "}
          <span className="hidden md:inline">|</span>
          <br className="md:hidden" />
          <span>
            Developed by{" "}
            <a
              href="https://igraphical.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              iGraphical Co.
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
