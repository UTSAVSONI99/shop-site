import Link from 'next/link';
import React from 'react';

export default function PolicyPage() {
  return (
    <div className='container prose mx-auto max-w-4xl p-5'>
      <h1>Policy</h1>
      <p>Policy page content</p>

      <ul>
        <li>
          <Link href='/policy/privacy-policy'>Privacy Policy</Link>
        </li>
        <li>
          <Link href='/policy/terms-and-conditions'>Terms of Service</Link>
        </li>
        {/* <li>
          <Link href='/policy/cookie'>Cookie Policy</Link>
        </li> */}
        <li>
          <Link href='/policy/cancellation-and-refund-policy'>Refund Policy</Link>
        </li>
        <li>
          <Link href='/policy/contact-us'>Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}
