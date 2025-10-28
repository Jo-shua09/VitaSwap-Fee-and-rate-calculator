import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-light to-primary-lighter text-white">
      <div className="container text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Save on Every Transfer?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Join millions of smart savers. Create your free account in minutes and start 
          enjoying transparent rates and lower fees.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="cta" size="lg" className="text-lg px-8">
            Sign Up with My SwapTag
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 bg-white text-primary hover:bg-white/90">
            Calculate My Savings
          </Button>
        </div>
        <p className="mt-6 text-sm text-white/75">
          No credit card required • Get started in 2 minutes • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTASection;
