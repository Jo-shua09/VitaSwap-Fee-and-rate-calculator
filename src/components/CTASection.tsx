import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-light to-primary-lighter text-white">
      <div className="md:container p-[1rem] text-center">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6">Ready to Save on Every Transfer?</h2>
        <p className="text-base md:text-lg lg:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Join millions of smart savers. Create your free account in minutes and start enjoying transparent rates and lower fees.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="cta" size="lg" className="text-base md:text-lg px-6 md:px-8" asChild>
            <a href="https://vitalswap.com" target="_blank" rel="noopener noreferrer">
              Sign Up with My SwapTag
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="text-base md:text-lg px-6 md:px-8 bg-white text-primary hover:bg-white/90" asChild>
            <a href="#calculator">Calculate My Savings</a>
          </Button>
        </div>
        <p className="mt-6 text-sm text-white/75">No credit card required • Get started in 2 minutes • Cancel anytime</p>
      </div>
    </section>
  );
};

export default CTASection;
