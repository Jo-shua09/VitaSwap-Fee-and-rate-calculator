import Header from "@/components/Header";
import FeeCalculator from "@/components/FeeCalculator";
import FeeBreakdown from "@/components/FeeBreakdown";
import ComparisonSection from "@/components/ComparisonSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Calculator */}
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-background">
          <div className="md:container p-[1rem]">
            <div id="calculator" className="text-center mb-12 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-foreground">
                Transparent Fees. <span className="text-accent">Better Rates.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-2">
                See exactly what you'll pay before you send. No hidden charges, no surprises. Just honest international transfers.
              </p>
            </div>

            {/* The Calculator - Most Dominant Element */}
            <div className="max-w-5xl mx-auto mb-8">
              <FeeCalculator />
            </div>

            <div className="text-center">
              <Button variant="cta" size="lg" className="text-lg px-8" asChild>
                <a href="https://vitalswap.com" target="_blank" rel="noopener noreferrer">
                  Get the Best Rate Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Fee Structure Breakdown */}
        <section className="bg-white">
          <FeeBreakdown />
        </section>

        {/* Comparison vs Banks */}
        <section className="bg-muted/40">
          <ComparisonSection />
        </section>

        {/* Trust Building */}
        <section className="bg-white">
          <TrustSection />
        </section>

        {/* Final CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
