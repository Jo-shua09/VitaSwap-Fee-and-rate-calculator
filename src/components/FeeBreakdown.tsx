import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

const feeStructure = [
  {
    id: "international",
    title: "International Transfers",
    fees: [
      { tier: "Standard Account", fee: "0.5%", min: "$1.00", max: "$50.00" },
      { tier: "Premium Account", fee: "0.3%", min: "$0.50", max: "$30.00" },
      { tier: "Business Account", fee: "0.25%", min: "$0.50", max: "$25.00" },
    ],
  },
  {
    id: "crypto",
    title: "Crypto Swaps",
    fees: [
      { tier: "Standard Account", fee: "1.0%", min: "$2.00", max: "No Max" },
      { tier: "Premium Account", fee: "0.75%", min: "$1.50", max: "No Max" },
      { tier: "Business Account", fee: "0.5%", min: "$1.00", max: "No Max" },
    ],
  },
  {
    id: "local",
    title: "Local Transfers (Same Currency)",
    fees: [{ tier: "All Accounts", fee: "0.2%", min: "$0.50", max: "$10.00" }],
  },
];

const FeeBreakdown = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="md:container p-[1rem]">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Transparent Fee Structure</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            No hidden charges. No surprises. Just honest, competitive pricing.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {feeStructure.map((category) => (
              <AccordionItem key={category.id} value={category.id}>
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">{category.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="pb-3 font-semibold text-sm">Account Type</th>
                          <th className="pb-3 font-semibold text-sm">Fee</th>
                          <th className="pb-3 font-semibold text-sm">Minimum</th>
                          <th className="pb-3 font-semibold text-sm">Maximum</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.fees.map((item, index) => (
                          <tr key={index} className="border-b border-border/50 last:border-0">
                            <td className="py-3 text-sm font-medium">{item.tier}</td>
                            <td className="py-3 text-sm">{item.fee}</td>
                            <td className="py-3 text-sm text-muted-foreground">{item.min}</td>
                            <td className="py-3 text-sm text-muted-foreground">{item.max}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 pt-6 border-t">
            <h3 className="font-semibold mb-4">What's Included:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Real-time exchange rates",
                "No withdrawal fees",
                "24/7 customer support",
                "Bank-level security",
                "Instant notifications",
                "Multi-currency accounts",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FeeBreakdown;
