/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const HeroSection = () => (
  <section className="bg-[#1e83c3] text-white py-20 px-6 text-center">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Take Your Business to the Next Level
      </h1>
      <p className="text-lg md:text-xl mb-8">
        Showcase your complete range of products and services — with rates,
        descriptions, and images — directly to your clients, anytime, anywhere!
      </p>
      <p className="text-lg font-semibold mb-8">
        <span className="text-yellow-300">Absolutely Free!</span> Get started
        today and list up to 100 products for free — forever. No hidden charges,
        no strings attached.
      </p>

      <div className="flex justify-center gap-4">
        <Button size="lg">Request Demo</Button>
        <Button variant="outline" size="lg" className="text-black">
          Contact Us
        </Button>
      </div>
    </div>
  </section>
);
const WhyGoDigital = () => (
  <section className="py-16 px-6 max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">🚀 Why Go Digital?</h2>
    <p className="mb-6 text-lg text-gray-700">
      In today’s fast-paced world, businesses need to be accessible,
      informative, and fast.
    </p>
    <ul className="text-left list-disc list-inside space-y-2 text-gray-700">
      <li>Present your full product or service lineup professionally</li>
      <li>Save printing costs and update content instantly</li>
      <li>Reach clients on any device, anytime, anywhere</li>
    </ul>
  </section>
);
const WhyGoDigital2 = () => (
  <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
        🚀 Why Go Digital?
      </h2>
      <p className="mb-8 text-lg text-gray-600">
        In today’s fast-paced world, businesses need to be accessible,
        informative, and fast. Going digital is the key to staying ahead.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex items-start space-x-4">
          <div className="text-blue-600 text-2xl">📦</div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Professional Presentation
            </h3>
            <p className="text-gray-600">
              Present your full product or service lineup with style and
              professionalism.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="text-green-600 text-2xl">💰</div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Cost Efficiency
            </h3>
            <p className="text-gray-600">
              Save on printing costs and update your content instantly without
              hassle.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="text-purple-600 text-2xl">📱</div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Universal Accessibility
            </h3>
            <p className="text-gray-600">
              Reach clients on any device, anytime, anywhere, with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
const features = [
  {
    title: "🛍️ Display Products & Services Professionally",
    desc: "Organize your offerings with clean visuals, detailed descriptions, and powerful categorization.",
  },
  {
    title: "💸 Show Prices and Offers Clearly",
    desc: "Make decision-making easier by showing pricing, discounts, and offers transparently.",
  },
  {
    title: "🧭 Easy for Clients to Browse & Select",
    desc: "User-friendly navigation ensures your clients find exactly what they’re looking for — fast.",
  },
  {
    title: "📩 Instant Enquiry & Order Options",
    desc: "Allow customers to place enquiries or initiate orders directly from your catalog.",
  },
  {
    title: "🔗 Share Instantly",
    desc: "Distribute your catalog via WhatsApp, Email, or embed it on your website.",
  },
  {
    title: "📊 Gain Insights with Analytics",
    desc: "Track customer interactions and preferences to optimize your offerings and improve engagement.",
  },
];
const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">✅ Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {features.map((feature, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                {feature.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
const features2 = [
  {
    title: "🛍️ Display Products & Services Professionally",
    desc: "Organize your offerings with clean visuals, detailed descriptions, and powerful categorization.",
    // Example: A clean, organized product catalog with clear images and descriptions.
    image: "/images/professional-presentation.png",
  },
  {
    title: "💸 Show Prices and Offers Clearly",
    desc: "Make decision-making easier by showing pricing, discounts, and offers transparently.",
    // Example: A product page showing price tags, discounts, and special offers.
    image: "/images/prices-and-offers.png",
  },
  {
    title: "🧭 Easy for Clients to Browse & Select",
    desc: "User-friendly navigation ensures your clients find exactly what they’re looking for — fast.",
    image: "/images/easy-browsing.png",
    // Example: A screenshot of a website or app with a clear navigation menu and search bar.
  },
  {
    title: "📩 Instant Enquiry & Order Options",
    desc: "Allow customers to place enquiries or initiate orders directly from your catalog.",
    // Example: A contact form or a "Buy Now" button on a product page.
    image: "/images/instant-enquiry.png",
  },
  {
    title: "🔗 Share Instantly",
    desc: "Distribute your catalog via WhatsApp, Email, or embed it on your website.",
    // Example: Icons for WhatsApp, Email, and a website embed preview.
    image: "/images/share-instantly.png",
  },
  {
    title: "📊 Gain Insights with Analytics",
    desc: "Track customer interactions and preferences to optimize your offerings and improve engagement.",
    // Example: A dashboard showing graphs, charts, and user interaction data.
    image: "/images/analytics-insights.png",
  },
];
const FeaturesSection2 = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">✅ Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {features2.map((feature, idx) => (
            <Card key={idx}>
              <CardHeader>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <CardTitle className="text-lg font-semibold mt-4">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                {feature.desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
const HowItWorks = () => (
  <section className="py-16 px-6 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">🛠️ How It Works</h2>
    <ol className="space-y-6 text-gray-800 text-lg list-decimal list-inside">
      <li>
        <strong>Set Up Your Catalog:</strong> Upload product images,
        descriptions, and prices through our easy dashboard.
      </li>
      <li>
        <strong>Share with Your Audience:</strong> Get a unique link to share on
        WhatsApp, email, or embed on your site.
      </li>
      <li>
        <strong>Start Receiving Orders or Enquiries:</strong> Customers browse,
        choose, and connect with you instantly.
      </li>
    </ol>
  </section>
);

const WhoIsItFor = () => (
  <section className="bg-gray-50 py-16 px-6 max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">👥 Who Is It For?</h2>
    <p className="text-gray-700 mb-4">This tool is perfect for:</p>
    <ul className="space-y-2 text-gray-700 text-lg list-disc list-inside text-left max-w-md mx-auto">
      <li>Retailers & Wholesalers</li>
      <li>Service Providers</li>
      <li>Distributors & Agencies</li>
      <li>Professionals offering packages or plans</li>
    </ul>
  </section>
);

const Testimonials = () => (
  <section className="py-16 px-6 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">
      💬 What Our Users Say
    </h2>
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6 text-gray-700">
          “We reduced customer confusion and increased enquiries within the
          first week!”
          <div className="mt-2 font-semibold text-right">
            — Nisha S., Salon Owner
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 text-gray-700">
          “Our clients love the easy browsing experience. We’ve shared our
          catalog across all platforms!”
          <div className="mt-2 font-semibold text-right">
            — Amit T., Electronics Retailer
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

const CTASection = () => (
  <section className="bg-[#1e83c3] text-white py-20 px-6 text-center">
    <h2 className="text-3xl font-bold mb-4">📢 Get Started Today!</h2>
    <p className="text-lg mb-8">
      Start creating your Digital Catalog now and give your business the digital
      edge it needs.
    </p>
    <Button size="lg" variant="secondary">
      Get Your Free Demo
    </Button>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 text-sm py-6 text-center">
    <div className="space-x-4">
      <a href="#" className="hover:underline">
        Home
      </a>
      <a href="#" className="hover:underline">
        Features
      </a>
      <a href="#" className="hover:underline">
        Contact
      </a>
    </div>
    <p className="mt-4">© 2025 Digital Catalog Co. All rights reserved.</p>
  </footer>
);

export const Landing = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <HeroSection />
      <WhyGoDigital2 />
      <Separator className="my-8" />
      <FeaturesSection2 />
      <HowItWorks />
      <WhoIsItFor />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};
