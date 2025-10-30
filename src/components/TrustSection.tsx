import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Users, Award, Lock } from "lucide-react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

const trustIndicators = [
  {
    icon: Users,
    stat: "2M+",
    label: "Active Users",
    description: "Trust VitalSwap for their transfers",
  },
  {
    icon: Award,
    stat: "$5B+",
    label: "Transferred",
    description: "Safely processed since 2020",
  },
  {
    icon: Shield,
    stat: "99.9%",
    label: "Uptime",
    description: "Reliable service you can count on",
  },
  {
    icon: Lock,
    stat: "Bank-Level",
    label: "Security",
    description: "Your money is always protected",
  },
];

const TrustSection = () => {
  const { ref: titleRef, inView: titleInView } = useInViewAnimation();
  const { ref: cardsRef, inView: cardsInView } = useInViewAnimation();
  const { ref: testimonialRef, inView: testimonialInView } = useInViewAnimation();

  return (
    <section className="py-16 md:py-24">
      <div className="md:container p-[1rem]">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Trusted by Millions</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Join millions of people who save money on international transfers with VitalSwap
          </p>
        </motion.div>

        <motion.div
          ref={cardsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {trustIndicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={cardsInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={cardsInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4"
                  >
                    <Icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="text-3xl font-bold mb-1"
                  >
                    {item.stat}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    className="font-semibold mb-2"
                  >
                    {item.label}
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    className="text-sm text-muted-foreground"
                  >
                    {item.description}
                  </motion.p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          ref={testimonialRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={testimonialInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="max-w-3xl mx-auto p-8 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-2">
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={testimonialInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl italic mb-4"
            >
              "Switching to VitalSwap was the best financial decision I made this year. I save hundreds on international transfers every month, and
              the rates are always transparent."
            </motion.blockquote>
            <motion.footer
              initial={{ opacity: 0, y: 10 }}
              animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="font-semibold"
            >
              — Sarah Chen, <span className="text-muted-foreground font-normal">Freelance Designer</span>
            </motion.footer>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
