import { Button } from "@/components/ui/button";
import logoBlue from "@/assets/logo-blue.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logoBlue} alt="VitalSwap" className="h-8 w-auto" />
        </div>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            How it Works
          </Button>
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Support
          </Button>
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button variant="cta" size="sm">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
