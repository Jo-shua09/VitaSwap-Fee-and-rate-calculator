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
        <section className="py-12 md:py-20 bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="container">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                Transparent Fees. <span className="text-accent">Better Rates.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                See exactly what you'll pay before you send. No hidden charges, 
                no surprises. Just honest international transfers.
              </p>
            </div>

            {/* The Calculator - Most Dominant Element */}
            <div className="max-w-5xl mx-auto mb-8">
              <FeeCalculator />
            </div>

            <div className="text-center">
              <Button variant="cta" size="lg" className="text-lg px-8">
                Get the Best Rate Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Fee Structure Breakdown */}
        <FeeBreakdown />

        {/* Comparison vs Banks */}
        <ComparisonSection />

        {/* Trust Building */}
        <TrustSection />

        {/* Final CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
