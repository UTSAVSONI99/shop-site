import { Button } from "@/components/ui/button";

interface PriceDisplayProps {
  basePrice: number;
  discount: number;
  price: number;
  onBackground: "white" | "black";
  type: "yearly" | "onetime";
}
export const PRICING = {
  basic: {
    id: "basic",
    displayName: "Basic",
    price: 4000,
    gstTax: 0.18,
    sellingPrice: 1200,
    features: [
      "Add upto 100 products",
      "3 Images per product",
      "Add upto 5 categories",
      // 'Single User admin login',
      "Basic SEO",
      // 'Choose from 3 themes',
      "Custom Subdomain",
    ],
  },
  standard: {
    id: "standard",
    displayName: "Standard",
    price: 8000,
    gstTax: 0.18,
    sellingPrice: 3000,
    features: [
      "Add upto 500 products",
      "3 Images per product",
      "Add upto 20 categories",
      // 'Multi User admin login',
      "Advanced SEO",
      // 'Choose from 5 themes',
      "Custom Subdomain",
    ],
  },
  premium: {
    id: "premium",
    displayName: "Premium",
    price: 9500,
    gstTax: 0.18,
    sellingPrice: 6000,
    features: [
      "Add upto 2000 products",
      "5 Images per product",
      "Add upto 50 categories",
      "Multi User admin login",
      "Advanced SEO",
      "Custom Design",
      // 'Choose from 10 Premium themes',
      "Add your Domain Name",
    ],
  },
  custom: {
    id: "custom",
    displayName: "Custom Plan",
    price: 120000,
    gstTax: 0.18,
    sellingPrice: 80000,
    features: [
      "Unlimited products/ categories",
      "Unlimited Images per product",
      "200GB storage",
      // 'Unlimited categories',
      // 'Multi User admin login',
      "Advanced SEO",
      "Custom Design and Development",
      "Hosting on Separate Server",
      "Add your Domain Name",
    ],
  },
} as const;
// import { PRICING } from '../../../../PRICING';
import { Check } from "lucide-react";
import { Container } from "./Container";
import Link from "next/link";

const PriceDisplay: React.FC<PriceDisplayProps> = ({
  basePrice,
  discount,
  price,
  type,
  onBackground,
}) => {
  const textColor = onBackground === "white" ? "text-black" : "text-white";
  const lineThroughColor =
    onBackground === "white" ? "text-gray-500" : "text-gray-400";
  const discountBgColor =
    onBackground === "white" ? "bg-blue-600" : "bg-blue-600";

  return (
    <>
      <div className={`text-2xl font-bold ${textColor} inline-block`}>
        <span className="relative inline-block">
          <span className={`${lineThroughColor} text-xl line-through`}>
            {` `} ₹{Intl.NumberFormat("en-IN").format(basePrice)} {` `}
          </span>
        </span>
        <span
          className={`${discountBgColor} absolute right-10 top-5 ml-2 rounded px-2 py-1 text-xs font-bold text-white`}
        >
          {discount}% OFF
        </span>
        <span className="flex flex-wrap items-baseline gap-4">
          <span className={`text-3xl font-bold ${textColor} mt-2 block`}>
            ₹{Intl.NumberFormat().format(price)}
          </span>
          {type === "yearly" ? (
            <span className={`${lineThroughColor} whitespace-nowrap text-xl`}>
              / year
            </span>
          ) : (
            <span
              className={`${lineThroughColor} whitespace-nowrap text-xl font-normal`}
            >
              starting at ₹{Intl.NumberFormat().format(price)} / one-time
            </span>
          )}
        </span>
      </div>
      <div className="p-5"></div>
    </>
  );
};

export default function Pricing() {
  return (
    <section className="bg-slate-50">
      <Container>
        <div className="radius-for-skewed pt-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                Get Started with Free 1 Month
              </h2>
              <p className="mt-4 text-lg tracking-tight text-slate-700">
                Choose a plan today and unlock a powerful bundle of features. Or
                start with our free plan.
              </p>
              {/* <p className='mt-4 text-lg tracking-tight text-slate-700'>
                Our pricing plans are designed to fit the needs of any business,
                whether you&apos;re just starting out or looking to scale.
              </p> */}
            </div>
            <div className="-mx-4 flex flex-wrap gap-y-3">
              <Plan plan={PRICING.basic} />
              <Plan plan={PRICING.standard} />
              <Plan plan={PRICING.custom} />
            </div>
          </div>
        </div>
        <div className="p-4"></div>
        <div className="skew skew-bottom mr-for-radius">
          <svg
            className="h-8 w-full text-gray-50 md:h-12 lg:h-20"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 0 10" />
          </svg>
        </div>
        <div className="skew skew-bottom ml-for-radius">
          <svg
            className="h-8 w-full text-gray-50 md:h-12 lg:h-20"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 10 10" />
          </svg>
        </div>
      </Container>
    </section>
  );
}

function Plan({
  plan,
}: {
  plan:
    | (typeof PRICING)["basic"]
    | (typeof PRICING)["standard"]
    | (typeof PRICING)["custom"];
}) {
  const href =
    plan.displayName == "Basic"
      ? "/sign-up"
      : plan.displayName == "Standard"
      ? "/sign-up"
      : plan.displayName == "Custom Plan"
      ? "contact-sales"
      : " ";
  const btnText =
    plan.displayName == "Basic"
      ? "Get Started"
      : plan.displayName == "Standard"
      ? "Select Plan"
      : plan.displayName == "Custom Plan"
      ? "Contact sales"
      : " ";
  return (
    <div className="relative mx-auto w-full max-w-lg px-4 lg:w-1/3">
      <div className="rounded bg-white p-8 shadow">
        <h4 className="font-display mb-2 text-xl tracking-tight text-slate-900 font-semibold">
          {plan.displayName}
        </h4>
        <PriceDisplay
          type={plan.displayName == "Custom Plan" ? "onetime" : "yearly"}
          basePrice={plan.price}
          discount={
            plan.price > plan.sellingPrice
              ? Math.floor(
                  ((plan.price - plan.sellingPrice) / plan.price) * 100
                )
              : 0
          }
          price={plan.sellingPrice}
          onBackground="white"
        />

        <Button asChild className="w-full">
          <Link href={href}>{btnText}</Link>
        </Button>
        <div className="p-3" />
        <ul className="mb-6 text-gray-900 ">
          {plan.features.map((x, i) => {
            return (
              <li key={i} className="mb-4 flex gap-2 ">
                {/* <CheckCircle2Icon className='text-green-600' /> */}
                <Check className="text-green-500 w-5" />
                <span>{x}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
