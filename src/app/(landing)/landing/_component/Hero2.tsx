import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import clsx from 'clsx';
export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  );
}
export default function HeroSection() {
  return (
    <section className='bg-slate-100'>
      <Container className='bg-gradient-to-t pb-16 pt-20 text-center lg:pt-32'>
        <h1 className='font-display mx-auto max-w-4xl text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl'>
          Create an{' '}
          <span className='relative whitespace-nowrap text-[#1e83c3] drop-shadow'>
            <svg
              aria-hidden='true'
              viewBox='0 0 418 42'
              className='absolute left-0 top-2/3 h-[0.58em] w-full fill-[#1e83c3]/40'
              preserveAspectRatio='none'
            >
              <path d='M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z' />
            </svg>
            <span className='relative'>Online-Store</span>
          </span>
          {` `}
          for your businesses.
        </h1>
        <p className='mx-auto mt-6 max-w-2xl text-lg  text-slate-700'>
          {/* &apos;&apos;Empower Your Business - Create, Customize, and Sell with your own e-store !&apos;&apos; */}
          Launch your very own online store in minutes.
          {/* ,tailored to showcase your unique products.  */}
          With easy customization options, intuitive design tools, and seamless
          setup, our platform makes it simple for anyone to build a professional
          e-store.
          {/* Whether you're just starting out or expanding an established business, take control of your brand, reach new customers, and manage your entire business from one powerful platform.  */}
          {/* Get ready to create, customize, and sell like never before! */}
        </p>
        <div className='mt-10 flex justify-center gap-x-6'>
          <Button asChild>
            <Link href='/sign-up'>Get 1 months free</Link>
          </Button>
          <Button variant='outline' asChild>
            <Link href='https://laii.our-shop.site/laii' target='_blank'>
              Demo Store
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
  return (
    <section className='relative z-0 mx-auto bg-gradient-to-b from-slate-50 via-white to-slate-100'>
      <img
        className='absolute bottom-0 left-0 opacity-50'
        src='/images/footerGradient.svg'
        alt='image'
      />
      <div className='container mx-auto w-full px-4'>
        <div className='-mx-3 flex items-center justify-center'>
          <div className='mx-auto flex w-full flex-col items-center justify-center px-5 py-24 lg:py-36'>
            <div className='mx-auto mb-8 flex max-w-3xl flex-col items-center justify-center text-center lg:mx-0'>
              <p className='lg:text-md text-xs font-semibold text-slate-600 sm:text-sm xl:text-lg'>
                Start Your Online Business
              </p>
              {/* <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
                                Create Your E-Store
                            </h1> */}
              <h2 className='font-display text-5xl tracking-tight text-black sm:text-7xl md:text-8xl'>
                Create Your E-Store
              </h2>
              <p className='mt-4 w-full text-lg font-semibold text-slate-600 sm:text-xl lg:text-2xl xl:text-3xl'>
                &apos;&apos;Empower Your Business - Create, Customize, and Sell
                with your own e-store !&apos;&apos;
              </p>
            </div>
            <div className='flex w-full justify-center gap-4 text-center'>
              <Button asChild>
                <Link href='/join-the-waitlist'>Get Started</Link>
              </Button>
              <Button variant='link' className='underline' asChild>
                <Link href='https://laii.our-shop.site/laii'>View Demo Site</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  return (
    <section className='relative z-0 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='-mx-3 flex flex-wrap items-center'>
          {/* text */}
          <div className='w-full px-3 lg:w-1/2'>
            <div className='py-12 lg:py-36'>
              <div className='mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:text-left'>
                <p className='lg:text-md text-xs font-semibold text-slate-600 sm:text-sm xl:text-lg'>
                  Start Your Online Business
                </p>
                <h1 className='text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl'>
                  Create Your E-Store
                </h1>
                <p className='mt-4 text-lg font-semibold text-slate-600 sm:text-xl lg:text-2xl xl:text-3xl'>
                  &apos;&apos;Empower Your Business - Create, Customize, and
                  Sell with your own e-store !&apos;&apos;
                </p>
              </div>
              <div className='text-center lg:text-left'>
                <Button asChild>
                  <Link href='/join-the-waitlist'>Get Started</Link>
                </Button>
                <Button variant='link' className='underline' asChild>
                  <Link href='https://laii.our-shop.site/laii'>View Demo Site</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className='lg:bg-blueGray-50 relative mb-12 h-full w-full px-3 lg:mb-0 lg:w-1/2'>
            <img
              src='/images/shopping.jpeg'
              alt='shopping'
              className='my-10 h-full w-full rounded object-cover object-center lg:rounded-full'
            />
          </div>
          {/* image */}
          {/* <div
                        class="w-full lg:w-1/2 px-3 lg:bg-blueGray-50 mb-12 lg:mb-0 relative"
                        >
                        <div
                            class={`absolute inset-0 bg-cover bg-center bg- top-0 left-1/2 transform -translate-x-1/2`}
                            style="background-image: url('/shopping.jpeg');"
                        >
                        </div>
                    </div> */}
        </div>
      </div>
    </section>
  );
}
