import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import FeeCalculator from "@/components/FeeCalculator";
import FeeBreakdown from "@/components/FeeBreakdown";
import ComparisonSection from "@/components/ComparisonSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex flex-col"
        >
          <Header />

          {/* Hero Section with Calculator */}
          <main className="flex-1">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="py-16 md:py-24 bg-background"
            >
              <div className="md:container p-[1rem]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  id="calculator"
                  className="text-center mb-12 max-w-3xl mx-auto"
                >
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 tracking-tight text-foreground">
                    Transparent Fees. <span className="text-accent">Better Rates.</span>
                  </h1>
                  <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-2">
                    See exactly what you'll pay before you send. No hidden charges, no surprises. Just honest international transfers.
                  </p>
                </motion.div>

                {/* The Calculator - Most Dominant Element */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="max-w-5xl mx-auto mb-8"
                >
                  <FeeCalculator />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center"
                >
                  <Button variant="cta" size="lg" className="text-base md:text-lg px-6 md:px-8" asChild>
                    <a href="https://vitalswap.com" target="_blank" rel="noopener noreferrer">
                      Get the Best Rate Today
                      <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.section>

            {/* Fee Structure Breakdown */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white"
            >
              <FeeBreakdown />
            </motion.section>

            {/* Comparison vs Banks */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-muted/40"
            >
              <ComparisonSection />
            </motion.section>

            {/* Trust Building */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white"
            >
              <TrustSection />
            </motion.section>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <CTASection />
            </motion.div>
          </main>

          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
