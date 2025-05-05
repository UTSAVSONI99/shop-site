"use client"
import { Dot } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Footer2 from './_component/Footer2';

import Navbar2 from './_component/Navbar2';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative flex min-h-svh flex-col'>
      <Navbar2 />

      {/* <img className="absolute bottom-0  opacity-50  top-0 rotate-180 left-0" src="/images/footerGradient.svg" alt="image" /> */}
      {/* <HeadroomWrap> */}
      {/* <nav className="flex items-end justify-between mx-auto px-5 border-b py-2 shadow-sm bg-white w-full">
        <Link href={"/"}>
          <div className=" text-2xl font-semibold font-serif my-auto">Our-Shop.site</div>
        </Link>
        <div className="flex my-auto gap-3 items-center ">
          <Button variant={"link"} asChild>
            <Link href={`/#pricing`}>
              Pricing
            </Link>
          </Button>
          <UserAuth />
        </div>
      </nav> */}
      {/* </HeadroomWrap> */}

      <div className='grow'>{children}</div>
      <Footer2 />
    </div>
  );
}

function FooterOld() {
  return (
    <section className='//py-14 bg-black pb-14'>
      <div className='container mx-auto px-4'>
        <div className='//flex -mx-4 hidden flex-wrap items-center justify-between pb-16'></div>
        <div className='flex flex-wrap items-center justify-between border-t border-gray-500 pt-14'>
          <div className='flex w-full flex-wrap justify-center gap-3 text-gray-500'>
            <span className='flex'>
              <Link className='link text-sm' href='/privacy-policy'>
                Privacy Policy
              </Link>{' '}
              <Dot />
            </span>
            <span className='flex'>
              <Link className='link text-sm' href='/terms-and-conditions'>
                Terms of Service
              </Link>
              <Dot />
            </span>
            <span className='flex'>
              <Link
                className='link text-sm'
                href='/cancellation-and-refund-policy'
              >
                Refund Policy
              </Link>
              <Dot />
            </span>
            <span className='flex'>
              <Link
                className='link text-sm'
                href='/shipping-and-delivery-policy'
              >
                Shipping Policy
              </Link>
              <Dot />
            </span>
            <span className='flex'>
              <Link className='link text-sm' href='/contact-us'>
                Contact Us
              </Link>
            </span>
          </div>
          <div className='mt-3 w-full text-center text-gray-500'>
            CopyRight &copy; {new Date().getFullYear()} Our-Shop.site
          </div>
        </div>
      </div>
    </section>
  );
}
