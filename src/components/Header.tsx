import { Button } from "@/components/ui/button";
import logoBlue from "@/assets/logo-blue.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logoBlue} alt="VitalSwap" className="h-8 w-auto" />
        </div>
        <nav className="flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors hidden md:inline-flex">
            How it Works
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors hidden md:inline-flex">
            Our Rates
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors hidden md:inline-flex">
            Blog
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors hidden sm:inline-flex">
            FAQ
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors hidden sm:inline-flex">
            Contact Us
          </a>
          <Button variant="cta" size="sm" className="ml-4">
            Download App
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
