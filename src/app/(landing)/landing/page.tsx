/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Hero2 from "./_component/Hero2";
import { HowItWork } from "./_component/HowItWork";
import Link from "next/link";
import React from "react";
import { SecondaryFeatures } from "./_component/FeaturesSecondary";
import Pricing2 from "./_component/Pricing2";

export default function MainPage() {
  // const url = headers().get('host')?.split('.') as string[];
  // const isDev = process.env.NODE_ENV === 'development';
  // let noSubdomain = false;

  // // ! cant be >2 :: gives 307 error
  // if (isDev) noSubdomain = url.length == 1;
  // else noSubdomain = url[0].includes('our-shop');

  // if (isDev && !noSubdomain)
  //   redirect(`http://${url[0]}.localhost:3000/${url[0]}`);
  // if (!isDev && !noSubdomain)
  //   redirect(`https://${url[0]}.our-shop.site/${url[0]}`);
  return (
    <>
      <Hero2 />
      <HowItWork />
      <div id="features">
        {" "}
        <SecondaryFeatures />{" "}
      </div>
      <CallToAction />
      <div id="pricing">
        {" "}
        <Pricing2 />{" "}
      </div>
    </>
  );
}

function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-[#1e83c3] py-32"
    >
      {/* <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It’s time to take control of your books. Buy our software so you can
            feel like you’re doing something productive.
          </p>
          <Button
            className="mt-10 bg-white text-slate-900"
            asChild
            variant={"secondary"}
          >
            <Link href={"/sign-up"}>Get 1 months free</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("container mx-auto max-w-7xl", className)}>
      {children}
    </div>
  );
}
