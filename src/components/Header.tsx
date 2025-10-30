import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import logoBlue from "@/assets/logo-blue.png";
import logoWhite from "@/assets/logo-white.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-background/80">
      <div className="md:container p-[1rem] flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logoBlue} alt="VitalSwap" className="h-8 w-auto dark:hidden" />
          <img src={logoWhite} alt="VitalSwap" className="h-8 w-auto hidden dark:block" />
        </div>
        <nav className="flex items-center gap-4 md:gap-6">
          <a href="#" className="text-xs md:text-sm font-medium text-foreground hover:text-primary transition-colors hidden md:inline-flex">
            How it Works
          </a>
          <a href="#" className="text-xs md:text-sm font-medium text-foreground hover:text-primary transition-colors hidden md:inline-flex">
            Our Rates
          </a>
          <a href="#" className="text-xs md:text-sm font-medium text-foreground hover:text-primary transition-colors hidden md:inline-flex">
            Blog
          </a>
          <a href="#" className="text-xs md:text-sm font-medium text-foreground hover:text-primary transition-colors hidden sm:inline-flex">
            FAQ
          </a>
          <a href="#" className="text-xs md:text-sm font-medium text-foreground hover:text-primary transition-colors hidden sm:inline-flex">
            Contact Us
          </a>
          <Button variant="cta" size="sm" className="ml-2 md:ml-4 text-xs md:text-sm px-3 md:px-4" asChild>
            <a href="https://vitalswap.com" target="_blank" rel="noopener noreferrer">
              Download App
            </a>
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
