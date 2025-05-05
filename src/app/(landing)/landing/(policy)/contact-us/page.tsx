import React from 'react';
import Markdown from 'react-markdown';
const contactUsPage = `

# **Contact Us**

We are here to assist you with any questions or concerns you may have about our services. Please feel free to reach out to us through any of the following methods:

**Company Information**

- **Company Name**: Amresh Kumar Dilip Kumar
- **Legal Name** : AMRESH KUMAR DILIP KUMAR
- **GST Number**: 07AANFA0084B1ZV

**Email**

For general inquiries, support, or feedback, you can email us at:

- **Email**: nknapster@gmail.com

**Phone**

If you prefer to speak with us directly, you can call us at:

- **Phone**: +91 9971488521

**Operating Address**

For mail or in-person inquiries, you can reach us at our business address:

- **Address**: 1ST, ROOOM NO.08, 2612, NAYA BAZAR, NAYA BAZAR,North West Delhi, Delhi, 110006
- **Address**: 36, Nagar Nigam Colony, Samta Colony, Raipur, Chhattisgarh, India 492001

**Business Hours**

Our support team is available during the following hours:

- **Monday to Friday**: 9:00 AM - 5:00 PM
- **Saturday**: 10:00 AM - 2:00 PM
- **Sunday**: Closed

**Additional Information**

We aim to respond to all inquiries within 24-48 hours. Thank you for your patience and understanding.
`;
export default function ContactUs_Page() {
  return (
    <div className='container prose mx-auto p-5'>
      <Markdown>{contactUsPage}</Markdown>
    </div>
  );
}
