import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";

export function Landing() {
  return (
    <div className="font-sans text-gray-900 ">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center "
        style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center w-full h-full text-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">
              Elevate Your Business with Our Digital Catalog
            </h1>
            <p className="text-xl mb-8">
              Showcase your products and services with ease and professionalism.
            </p>
            <Button size="lg" className="mr-4">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Professional Display",
              description:
                "Present your offerings with clean visuals and structured layouts.",
            },
            {
              title: "Transparent Pricing",
              description: "Show prices, discounts, and offers clearly.",
            },
            {
              title: "Easy Navigation",
              description:
                "User-friendly interface for quick product discovery.",
            },
            {
              title: "Instant Orders",
              description:
                "Allow customers to place orders directly from your catalog.",
            },
            {
              title: "Seamless Sharing",
              description:
                "Distribute your catalog via WhatsApp, email, or embed on your website.",
            },
            {
              title: "Mobile Optimized",
              description: "Ensure a smooth experience on any device.",
            },
          ].map((feature, idx) => (
            <Card
              key={idx}
              className="transition-transform transform hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-4">
              1
            </div>
            <p className="text-lg">
              Set Up Your Catalog: Upload product images, descriptions, and
              prices through our easy dashboard.
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-4">
              2
            </div>
            <p className="text-lg">
              Share with Your Audience: Get a unique link to share on WhatsApp,
              email, or embed on your site.
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mr-4">
              3
            </div>
            <p className="text-lg">
              Start Receiving Orders or Enquiries: Customers browse, choose, and
              connect with you instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Users Say
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg italic">
              &apos;Our customers love browsing our entire product line with one
              simple link.&apos;
            </p>
            <p className="mt-4 font-semibold">Anita R., Furniture Retailer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg italic">
              &aps;We saw 40% more enquiries after launching our digital
              catalog!&aps;
            </p>
            <p className="mt-4 font-semibold">
              Raj P., Electronics Distributor
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Go Digital?</h2>
        <p className="text-xl mb-8">
          Join hundreds of businesses using Digital Catalogs to grow online.
        </p>
        <Button size="lg" className="mr-4">
          Get Your Free Demo
        </Button>
        <Button variant="outline" size="lg">
          Contact Us
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-sm py-6 text-center">
        <div className="space-x-4">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Features
          </a>
          <a href="#" className="hover:underline">
            Demo
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
        <p className="mt-4">© 2025 Digital Catalog Co. All rights reserved.</p>
      </footer>
    </div>
  );
}
