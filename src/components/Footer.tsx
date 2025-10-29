import logoWhite from "@/assets/logo-white.png";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "Security", "Enterprise"],
    Resources: ["Help Center", "API Docs", "Blog", "Community"],
    Company: ["About Us", "Careers", "Press", "Partners"],
    Legal: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Compliance"],
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="md:container p-[1rem]">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div>
            <img src={logoWhite} alt="VitalSwap" className="h-8 w-auto mb-4" />
            <p className="text-sm text-white/70">Transparent international transfers at unbeatable rates.</p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-3">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© 2025 VitalSwap. All rights reserved.</p>
          <p>Regulated by Financial Conduct Authority (FCA)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
