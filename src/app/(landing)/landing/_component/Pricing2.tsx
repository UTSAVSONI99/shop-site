import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Container } from "./Container";
import Link from "next/link";

const FREE_PLAN = {
  id: "free",
  displayName: "Free Plan",
  price: 0,
  gstTax: 0,
  sellingPrice: 0,
  features: [
    "Add up to 100 products",
    "2 Image per product",
    "Add up to 3 categories",
    "Basic SEO",
    "Custom Subdomain",
  ],
} as const;

const PriceDisplay: React.FC = () => {
  return (
    <div className="text-center">
      <span className="text-4xl font-bold text-black">₹0</span>
      <span className="ml-2 text-gray-500 text-lg">/ forever</span>
    </div>
  );
};

export default function Pricing() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-5xl tracking-tight text-slate-900 mb-6">
            Get Started with Our Free Plan
          </h2>
          <p className="text-xl text-slate-700">
            Unlock essential features for free and start building your online
            store today.
          </p>
        </div>

        <div className="flex justify-center">
          <Plan plan={FREE_PLAN} />
        </div>
      </Container>
    </section>
  );
}

function Plan({ plan }: { plan: typeof FREE_PLAN }) {
  return (
    <div className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-slate-200">
      <h4 className="text-center text-3xl font-semibold text-slate-900 mb-6">
        {plan.displayName}
      </h4>

      <PriceDisplay />

      <div className="mt-8">
        <Button asChild className="w-full py-3 text-lg rounded-xl">
          <Link href="/sign-up">Get Started</Link>
        </Button>
      </div>

      <div className="mt-8 border-t pt-6">
        <ul className="space-y-4 text-gray-900">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="text-green-500 w-5 h-5 mt-1" />
              <span className="text-lg">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
