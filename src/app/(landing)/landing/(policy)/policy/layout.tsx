'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <>
      <div className='bg-gray-100 p-4 text-center font-bold'>
        {/* Breadcrumbs */}
        <div className='text-sm text-gray-500'>
          <Link href='/'>Home</Link>
          {pathSegments.map((segment, index) => {
            const href = '/' + pathSegments.slice(0, index + 1).join('/');
            return (
              <span key={index}>
                {' / '}
                <Link href={href} className='capitalize'>
                  {segment.replaceAll('-', ' ')}
                </Link>
              </span>
            );
          })}
        </div>
      </div>
      <div className='py-12'>{children}</div>
    </>
  );
}
