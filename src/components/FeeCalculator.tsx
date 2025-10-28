import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, TrendingDown } from "lucide-react";

const FeeCalculator = () => {
  const [amount, setAmount] = useState("1000");
  const [sourceCurrency, setSourceCurrency] = useState("USD");
  const [destCurrency, setDestCurrency] = useState("EUR");
  const [userType, setUserType] = useState("standard");

  // Mock calculation logic
  const calculateFees = () => {
    const baseAmount = parseFloat(amount) || 0;
    const feePercent = userType === "premium" ? 0.003 : 0.005;
    const fee = baseAmount * feePercent;
    const fxRate = 0.92; // Mock rate
    const payout = (baseAmount - fee) * fxRate;
    const bankRate = 0.89; // Mock bank rate
    const bankPayout = (baseAmount - baseAmount * 0.02) * bankRate;
    const savings = bankPayout > 0 ? payout - bankPayout : 0;

    return { fee, fxRate, payout, savings };
  };

  const { fee, fxRate, payout, savings } = calculateFees();

  return (
    <Card className="calculator-card p-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Fee & FX Simulator</h2>
        <p className="text-muted-foreground">
          Calculate your exact fees and see how much you save vs traditional banks
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <div className="space-y-4">
          <div>
            <Label htmlFor="amount">You Send</Label>
            <div className="flex gap-2 mt-2">
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 text-lg font-semibold"
                placeholder="1000"
              />
              <Select value={sourceCurrency} onValueChange={setSourceCurrency}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                  <SelectItem value="CAD">CAD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="destination">Recipient Gets</Label>
            <div className="flex gap-2 mt-2">
              <Input
                id="destination"
                type="text"
                value={payout.toFixed(2)}
                readOnly
                className="flex-1 text-lg font-semibold bg-muted"
              />
              <Select value={destCurrency} onValueChange={setDestCurrency}>
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                  <SelectItem value="JPY">JPY</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="userType">Account Type</Label>
            <Select value={userType} onValueChange={setUserType}>
              <SelectTrigger id="userType" className="mt-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard (0.5% fee)</SelectItem>
                <SelectItem value="premium">Premium (0.3% fee)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="result-panel space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
            <span className="text-sm text-muted-foreground">Transfer Fee</span>
            <span className="text-lg font-semibold">
              {fee.toFixed(2)} {sourceCurrency}
            </span>
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
            <span className="text-sm text-muted-foreground">Exchange Rate</span>
            <span className="text-lg font-semibold">
              1 {sourceCurrency} = {fxRate.toFixed(4)} {destCurrency}
            </span>
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg bg-primary/5 border-2 border-primary/20">
            <span className="text-sm font-medium">Total Payout</span>
            <span className="text-xl font-bold text-primary">
              {payout.toFixed(2)} {destCurrency}
            </span>
          </div>

          {savings > 0 && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-accent/10 border border-accent/30">
              <TrendingDown className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">
                Save {savings.toFixed(2)} {destCurrency} vs banks
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
        <button className="cta-button flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all">
          Start Swapping & Saving Now
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </Card>
  );
};

export default FeeCalculator;
