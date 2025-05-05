"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";

// import { Container } from '@/components/Container'
import screenshotCms from "@/app/(landing)/landing/images/cms.png"; // cms
import screenshotDashboard from "@/app/(landing)/landing/images/dashboard.png"; //products
import screenshotProducts from "@/app/(landing)/landing/images/products.png"; // themes
import screenshotThemes from "@/app/(landing)/landing/images/themes.png"; // customers
// import clsx from 'clsx'

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}

const features = [
  {
    title: "Dashboard",
    description:
      "Monitor store performance, track orders, and view key metrics in one place.",
    image: screenshotDashboard,
  },
  {
    title: "Site Cms",
    description:
      "Manage all website content with ease, including text, images, and key site information.",
    image: screenshotCms,
  },
  {
    title: "Products/Categories",
    description:
      "Organize and update products by category for a streamlined shopping experience.",

    image: screenshotProducts,
  },
  {
    title: "Themes",
    description:
      "Customize the look and feel of your store with flexible, stylish themes.",
    image: screenshotThemes,
  },
  // {
  //   title: 'Customers',
  //   description:
  //     'View and manage customer data, order history, and engagement insights.',
  //   image: screenshotCustomers,
  // },
];

export function HowItWork() {
  const [tabOrientation, setTabOrientation] = useState<
    "horizontal" | "vertical"
  >("horizontal");

  useEffect(() => {
    const lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-white pb-28 pt-20 sm:py-32"
    >
      {/* <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-50%] translate-y-[-50%] scale-110"
        src={"/images/shuffle/radial.svg"}
        alt=""
        width={2245}
        height={1636}
        unoptimized
       /> */}
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-black sm:text-4xl md:text-5xl">
            Your Shop Essentials at a Glance
          </h2>
          <p className="mt-6 text-lg tracking-tight text-slate-800">
            Easily Manage Your Online Store with Tools for Products, Categories,
            Themes, and Customer Engagement.
          </p>
        </div>
        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === "vertical"}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      tabIndex={-1}
                      className={clsx(
                        "group relative rounded-full px-4 py-1 text-white lg:rounded-l-xl lg:rounded-r-none lg:p-6",
                        selectedIndex === featureIndex
                          ? "bg-slate-100 lg:bg-slate-300/10 lg:ring-1 lg:ring-inset lg:ring-black/10"
                          : "hover:bg-slate-400/10 lg:hover:bg-slate-500/5"
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            "font-display ui-not-focus-visible:outline-none text-lg",
                            selectedIndex === featureIndex
                              ? "text-slate-800 lg:text-black"
                              : "text-slate-700 hover:text-black lg:text-black"
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          "mt-2 hidden text-sm lg:block",
                          selectedIndex === featureIndex
                            ? "text-black"
                            : "text-slate-700 group-hover:text-black"
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="text-slate=700 relative mx-auto max-w-2xl text-base sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  );
}
