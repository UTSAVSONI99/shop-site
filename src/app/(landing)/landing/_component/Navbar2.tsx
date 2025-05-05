"use client"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <section className='relative'>
      {/* Container for the navbar */}
      <div className='container mx-auto px-4'>
        <nav className='flex items-center py-6'>
          {/* Logo */}
          <img src='/logo/logo-rounded.png' alt='logo' height='58' width='58' />
          <Link className='text-3xl font-semibold leading-none' href='/'>
            Our-Shop.site
          </Link>
          <div className='ml-auto lg:hidden'>
            {/* Mobile menu button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  className='text-slate-700/60 w-12 h-12 drop-shadow'
                  variant={'outline'}
                  type={'button'}
                  size={'icon'}
                >
                  <Menu size={28} />
                </Button>
              </SheetTrigger>
              <SheetContent className=' min-h-svh flex flex-col'>
                <SheetHeader>
                  <SheetTitle>Our-Shop.site</SheetTitle>
                  <SheetDescription className='sr-only'>
                    Mobile navigation menu
                  </SheetDescription>
                </SheetHeader>
                <div className='flex flex-col space-y-4 grow'>
                  <SheetClose asChild>
                    <Link href='/' className='text-lg font' >
                      Home
                    </Link>
                  </SheetClose>
                  {/* <SheetClose asChild>
                    <Link href='/#features' className='text-lg font' >
                      Features
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href='/#pricing' className='text-lg font'>
                      Pricing
                    </Link>
                  </SheetClose> */}
                  <SheetClose asChild>
                    <Link href='/contact-sales' className='text-lg font'>
                      Contact Us
                    </Link>
                  </SheetClose>
                </div>
                <div className='flex flex-col space-y-2 mt-4'>
                  {/* Mobile menu login/sign-up buttons */}
                  <SheetClose asChild>
                    <Button asChild>
                      <Link href='/login'>Login</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button asChild>
                      <Link href='/sign-up'>Sign Up</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <ul className='ml-10 hidden lg:flex lg:space-x-10'>
            {/* Desktop menu links */}
            {[
              { name: 'Home', url: '/' },
              { name: 'Features', url: '/#features ' },
              { name: 'Pricing', url: '/#pricing' },
              { name: 'Contact Us', url: '/contact-sales' },
            ].map(item => (
              <li key={item.name}>
                <Link
                  className='text-base text-slate-900 hover:text-[#1e83c3]'
                  href={item.url}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className='ml-auto hidden gap-2 lg:flex'>
            {/* Desktop login/sign-up buttons */}
            <Button asChild>
              <Link href='/login'>Login</Link>
            </Button>
            <Button asChild>
              <Link href='/sign-up'>SignUp</Link>
            </Button>
          </div>
        </nav>
      </div>
    </section>
  );
}
