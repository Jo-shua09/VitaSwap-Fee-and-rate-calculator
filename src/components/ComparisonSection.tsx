import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const ComparisonSection = () => {
  const comparison = [
    { amount: "$1,000", vitalswap: "$920.00", bank: "$890.00", savings: "$30.00" },
    { amount: "$5,000", vitalswap: "$4,600.00", bank: "$4,450.00", savings: "$150.00" },
    { amount: "$10,000", vitalswap: "$9,200.00", bank: "$8,900.00", savings: "$300.00" },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Your Savings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare VitalSwap rates vs traditional banks. The difference adds up fast.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-6 md:p-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="pb-4 font-semibold">Send Amount</th>
                  <th className="pb-4 font-semibold text-right">VitalSwap</th>
                  <th className="pb-4 font-semibold text-right">Traditional Bank</th>
                  <th className="pb-4 font-semibold text-right text-accent">You Save</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className="border-b border-border/50 last:border-0">
                    <td className="py-4 font-medium">{row.amount}</td>
                    <td className="py-4 text-right font-semibold text-primary">{row.vitalswap}</td>
                    <td className="py-4 text-right text-muted-foreground">{row.bank}</td>
                    <td className="py-4 text-right font-bold text-accent">{row.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/30 flex items-start gap-3">
            <TrendingUp className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-1">The more you send, the more you save</p>
              <p className="text-sm text-muted-foreground">
                Based on USD to EUR transfers. Bank comparison uses average rates from top 10 US banks.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ComparisonSection;
