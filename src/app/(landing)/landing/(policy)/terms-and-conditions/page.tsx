const termsAndConditionsPage = `
# **Terms and Conditions**

**Effective Date: 19 September 2024**

Welcome to [Our Shop Site](https://our-shop.site). By using our services, you agree to comply with and be bound by the following terms and conditions. Please review these terms carefully. If you do not agree with these terms, you should not use our services.

**Contact Information**

If you have any questions about these Terms and Conditions, please contact us at:

- Email: nknapster@gmail.com
- Address: 36, Nagar Nigam Colony, Samta Colony, Raipur, Chhattisgarh, India 492001
- Phone: +91 9971488521

**Limitation of Liability and Disclaimer of Warranties**

Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or free of viruses or other harmful components.

To the fullest extent permitted by applicable law, we disclaim all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose. We do not warrant or make any representations regarding the use or the results of the use of our services in terms of their correctness, accuracy, reliability, or otherwise.

In no event shall [Our Shop Site], its officers, directors, employees, or agents be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any:

1.  Errors, mistakes, or inaccuracies of content;
2.  Personal injury or property damage, of any nature whatsoever, resulting from your access to and use of our services;
3.  Any unauthorized access to or use of our secure servers and/or any and all personal information stored therein;
4.  Any interruption or cessation of transmission to or from our services;
5.  Any bugs, viruses, trojan horses, or the like which may be transmitted to or through our services by any third party;
6.  Any errors or omissions in any content or for any loss or damage of any kind incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available via the services, whether based on warranty, contract, tort, or any other legal theory, and whether or not the company is advised of the possibility of such damages.

**Rules of Conduct**

By using our services, you agree to follow our rules of conduct. You agree not to:

- Use our services for any unlawful purposes;
- Post or transmit any content that is abusive, defamatory, obscene, fraudulent, or otherwise objectionable;
- Harass, threaten, or intimidate others;
- Violate the intellectual property rights of others;
- Attempt to gain unauthorized access to our services, user accounts, or computer systems or networks connected to our services through hacking, password mining, or any other means.

**User Restrictions**

Users are restricted from:

- Sharing login credentials with others;
- Using automated systems or software to extract data from our services for commercial purposes;
- Creating multiple accounts for disruptive or abusive behavior;
- Using our services in any manner that could damage, disable, overburden, or impair our servers or networks.

**User-Generated Content**

Users are responsible for the content they create and publish on their e-catalogs. By uploading content to [Our Shop Site], you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content for the purposes of operating and improving our services.

**Privacy Policy**

Our Privacy Policy, which sets out how we will use your information, can be found at [Privacy Policy URL]. By using our services, you consent to the processing described therein and warrant that all data provided by you is accurate.

**Changes to Terms and Conditions**

We reserve the right to modify these terms and conditions at any time. We will notify you of any changes by posting the new terms and conditions on this page. You are advised to review this page periodically for any changes. Changes to these terms and conditions are effective when they are posted on this page.

**Governing Law**

These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction], and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
`;

import React from 'react';
import Markdown from 'react-markdown';

export default function TermsAndConditionsPage() {
  return (
    <div className='container prose mx-auto p-5'>
      <Markdown>{termsAndConditionsPage}</Markdown>
    </div>
  );
}
