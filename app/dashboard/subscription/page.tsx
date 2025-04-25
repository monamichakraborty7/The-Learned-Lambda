import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function SubscriptionPage() {
  const features = {
    basic: [
      "Access to 10 basic courses",
      "Limited practice tests",
      "Basic study notes",
      "Todo list functionality",
    ],
    pro: [
      "Access to all 50+ courses",
      "Unlimited practice tests",
      "Advanced study materials",
      "Priority support",
      "Enhanced analytics",
      "Offline access",
    ],
    enterprise: [
      "Everything in Pro plan",
      "Custom learning paths",
      "Team management",
      "Dedicated account manager",
      "API access",
      "Custom integrations",
      "Private courses",
    ],
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Subscription Plans</h1>
        <p className="text-muted-foreground">
          Choose the plan that works best for your learning goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Basic Plan */}
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>Basic</CardTitle>
            <CardDescription>For casual learners</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <span className="text-3xl font-bold">$9.99</span>
              <span className="text-muted-foreground"> / month</span>
            </div>
            <ul className="space-y-2">
              {features.basic.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Choose Basic</Button>
          </CardFooter>
        </Card>

        {/* Pro Plan */}
        <Card className="relative hover-lift border-2 border-[hsl(var(--sidebar))]">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[hsl(var(--sidebar))] text-white px-3 py-1 rounded-full text-xs font-medium">
            Most Popular
          </div>
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>For serious students</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <span className="text-3xl font-bold">$19.99</span>
              <span className="text-muted-foreground"> / month</span>
            </div>
            <ul className="space-y-2">
              {features.pro.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-[hsl(var(--sidebar))] hover:bg-[hsl(var(--sidebar))/90]">
              Choose Pro
            </Button>
          </CardFooter>
        </Card>

        {/* Enterprise Plan */}
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>For organizations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <span className="text-3xl font-bold">$49.99</span>
              <span className="text-muted-foreground"> / month</span>
            </div>
            <ul className="space-y-2">
              {features.enterprise.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Contact Sales</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="rounded-lg bg-muted p-6 mt-8">
        <h2 className="text-xl font-semibold mb-3">Your Current Plan</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Pro Subscription</p>
              <p className="text-sm text-muted-foreground">Renewal on May 15, 2025</p>
            </div>
            <Button variant="outline">Manage Billing</Button>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full">
            <div 
              className="h-full bg-[hsl(var(--sidebar))] rounded-full" 
              style={{ width: "40%" }}
            ></div>
          </div>
          <p className="text-sm text-muted-foreground">
            12 days remaining in your billing cycle
          </p>
        </div>
      </div>

      <div className="border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-1">Can I switch plans?</h3>
            <p className="text-sm text-muted-foreground">
              Yes, you can upgrade or downgrade your plan at any time. Changes will be applied at the start of your next billing cycle.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-1">How do I cancel my subscription?</h3>
            <p className="text-sm text-muted-foreground">
              You can cancel your subscription from your account settings. You'll continue to have access until the end of your current billing period.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-1">Are there discounts for annual billing?</h3>
            <p className="text-sm text-muted-foreground">
              Yes, you can save up to 20% by choosing annual billing for any of our plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}