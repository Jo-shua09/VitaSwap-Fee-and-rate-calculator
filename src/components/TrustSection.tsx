import { Card } from "@/components/ui/card";
import { Shield, Users, Award, Lock } from "lucide-react";

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
  return (
    <section className="py-16 md:py-24">
      <div className="md:container p-[1rem]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Millions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join millions of people who save money on international transfers with VitalSwap
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustIndicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-1">{item.stat}</div>
                <div className="font-semibold mb-2">{item.label}</div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>

        <Card className="max-w-3xl mx-auto p-8 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-2">
          <blockquote className="text-lg md:text-xl italic mb-4">
            "Switching to VitalSwap was the best financial decision I made this year. I save hundreds on international transfers every month, and the
            rates are always transparent."
          </blockquote>
          <footer className="font-semibold">
            — Sarah Chen, <span className="text-muted-foreground font-normal">Freelance Designer</span>
          </footer>
        </Card>
      </div>
    </section>
  );
};

export default TrustSection;
