import {
  LayoutGrid,
  Tag,
  Handshake,
  MailOpen,
  Share2,
  Phone,
  Smartphone,
} from "lucide-react";

type Feature = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const features: Feature[] = [
  {
    name: "Professional Display",
    description:
      "Showcase your products and services with a clean, attractive layout that builds trust and enhances appeal.",
    icon: LayoutGrid,
  },
  {
    name: "Clear Pricing & Offers",
    description:
      "Clearly present pricing, deals, and discounts so clients make quicker decisions with confidence.",
    icon: Tag,
  },
  {
    name: "Effortless Browsing",
    description:
      "Customers can easily explore categories and select what they need in just a few clicks.",
    icon: Handshake,
  },
  {
    name: "Instant Enquiry & Order",
    description:
      "Let customers send inquiries or place orders instantly without any hassle.",
    icon: MailOpen,
  },
  {
    name: "Share Anywhere",
    description:
      "Share your offerings via WhatsApp, email, or embed them on your website for broader reach.",
    icon: Share2,
  },
  {
    name: "Mobile Responsive Design",
    description:
      "Your website looks and works perfectly on all devices — from desktops to smartphones — ensuring a smooth experience everywhere.",
    icon: Smartphone,
  },
];

export function SecondaryFeatures() {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything your business needs to showcase and sell effectively
            online.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1e83c3] text-white mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
