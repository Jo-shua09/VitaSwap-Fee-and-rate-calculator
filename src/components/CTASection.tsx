import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const CTASection = () => {
  const { ref: contentRef, inView: contentInView } = useInViewAnimation();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-light to-primary-lighter text-white">
      <div className="md:container p-[1rem] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6"
        >
          Ready to Save on Every Transfer?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg lg:text-xl mb-8 text-white/90 max-w-2xl mx-auto"
        >
          Join millions of smart savers. Create your free account in minutes and start enjoying transparent rates and lower fees.
        </motion.p>
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 20 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={contentInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button variant="cta" size="lg" className="text-base md:text-lg px-6 md:px-8" asChild>
              <a href="https://vitalswap.com" target="_blank" rel="noopener noreferrer">
                Sign Up with My SwapTag
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </a>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={contentInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button variant="outline" size="lg" className="text-base md:text-lg px-6 md:px-8 bg-white text-primary hover:bg-white/90" asChild>
              <a href="#calculator">Calculate My Savings</a>
            </Button>
          </motion.div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={contentInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="mt-6 text-sm text-white/75"
        >
          No credit card required • Get started in 2 minutes • Cancel anytime
        </motion.p>
      </div>
    </section>
  );
};

export default CTASection;
