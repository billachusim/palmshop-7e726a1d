import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "₦0",
    period: "forever",
    description: "Perfect for getting started and small vendors",
    features: [
      "Up to 100 products",
      "Basic sales reports",
      "Single device",
      "Receipt printing",
      "Offline mode",
      "Community support",
    ],
    cta: "Download Free",
    variant: "outline" as const,
  },
  {
    name: "Pro",
    price: "₦15,000",
    period: "per month",
    description: "For growing businesses that need more power",
    features: [
      "Unlimited products",
      "Advanced analytics",
      "Up to 5 devices",
      "Real-time sync",
      "Multi-user access",
      "Remote monitoring",
      "Priority support",
      "Custom branding",
    ],
    cta: "Start Pro Trial",
    variant: "default" as const,
    popular: true,
  },
  {
    name: "Business",
    price: "₦40,000",
    period: "per month",
    description: "For established businesses with multiple locations",
    features: [
      "Everything in Pro",
      "Unlimited devices",
      "Multi-location support",
      "Advanced inventory",
      "API access",
      "Dedicated support",
      "Custom integrations",
      "Training included",
    ],
    cta: "Contact Sales",
    variant: "outline" as const,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free and upgrade as you grow. No hidden fees, cancel anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-8 ${
                plan.popular
                  ? "ring-2 ring-primary card-shadow scale-105"
                  : "border border-border card-shadow"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-bg text-primary-foreground text-sm font-medium flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full ${plan.popular ? "gradient-bg border-0" : ""}`}
                variant={plan.variant}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
