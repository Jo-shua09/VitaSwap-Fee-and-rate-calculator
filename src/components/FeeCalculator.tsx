import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingDown, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { useFeeCalculator } from "@/hooks/useFeeCalculator";

const FeeCalculator = () => {
  const [amount, setAmount] = useState("1000");
  const [sourceCurrency, setSourceCurrency] = useState("USD");
  const [destCurrency, setDestCurrency] = useState("EUR");
  const [userType, setUserType] = useState("standard");
  const [showModal, setShowModal] = useState(false);

  const { feeData, exchangeData, loading, error, getExchangeRate, calculateFees } = useFeeCalculator();

  // Update exchange rate when currencies change
  useEffect(() => {
    if (sourceCurrency && destCurrency) {
      getExchangeRate(sourceCurrency, destCurrency);
    }
  }, [sourceCurrency, destCurrency, getExchangeRate]); // getExchangeRate is now stable with useCallback

  // Calculate fees using real data
  const calculation = calculateFees(parseFloat(amount) || 0, userType, sourceCurrency, destCurrency);

  const { fee = 0, fxRate = 0, payout = 0, savings = 0 } = calculation || {};

  if (loading) {
    return (
      <Card className="calculator-card p-4 md:p-6 lg:p-8">
        <div className="flex items-center justify-center py-12">
          <div className="flex items-center gap-3">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
            <span className="text-muted-foreground">Loading real-time data...</span>
          </div>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="calculator-card p-4 md:p-6 lg:p-8">
        <div className="flex items-center justify-center py-12">
          <div className="flex items-center gap-3 text-destructive">
            <AlertCircle className="h-6 w-6" />
            <div>
              <p className="font-semibold">Failed to load data</p>
              <p className="text-sm text-muted-foreground">{error}</p>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="calculator-card p-4 md:p-6 lg:p-8">
      <div className="mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">Fee & FX Simulator</h2>
        <p className="text-sm md:text-base text-muted-foreground">Calculate your exact fees and see how much you save vs traditional banks</p>
        <div className="flex items-center gap-2 mt-2 text-xs text-green-600">
          <CheckCircle className="h-4 w-4" />
          <span>Using real-time exchange rates and fees</span>
        </div>
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
              <Input id="destination" type="text" value={payout.toFixed(2)} readOnly className="flex-1 text-lg font-semibold bg-muted" />
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
        <button
          onClick={() => setShowModal(true)}
          className="cta-button flex-1 flex items-center justify-center gap-2 px-4 md:px-6 py-3 rounded-lg font-semibold transition-all text-sm md:text-base"
        >
          Start Swapping & Saving Now
          <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
        </button>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Your Transfer Summary</DialogTitle>
            <DialogDescription>Review your transfer details and start saving with VitalSwap</DialogDescription>
          </DialogHeader>

          <div className="space-y-3 py-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <span className="text-sm text-muted-foreground">You Send</span>
              <span className="text-base font-semibold">
                {parseFloat(amount).toFixed(2)} {sourceCurrency}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <span className="text-sm text-muted-foreground">Transfer Fee</span>
              <span className="text-base font-semibold text-destructive">
                - {fee.toFixed(2)} {sourceCurrency}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <span className="text-sm text-muted-foreground">Exchange Rate</span>
              <span className="text-base font-semibold">
                1 {sourceCurrency} = {fxRate.toFixed(4)} {destCurrency}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border-2 border-primary">
              <span className="text-sm font-medium">Recipient Gets</span>
              <span className="text-xl font-bold text-primary">
                {payout.toFixed(2)} {destCurrency}
              </span>
            </div>

            {savings > 0 && (
              <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 border border-accent">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold text-accent">
                    You Save {savings.toFixed(2)} {destCurrency}
                  </p>
                  <p className="text-sm text-muted-foreground">Compared to traditional banks</p>
                </div>
              </div>
            )}

            <div className="pt-2">
              <Button variant="cta" size="lg" className="w-full text-sm md:text-base" asChild>
                <a href="https://vitalswap.com" target="_blank" rel="noopener noreferrer">
                  Complete Transfer on VitalSwap
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default FeeCalculator;
