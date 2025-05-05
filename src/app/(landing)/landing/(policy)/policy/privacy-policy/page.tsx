import React from 'react';
import Markdown from 'react-markdown';

const privacyPolicyPage = `

# **Privacy Policy**
---
**Effective Date: 19 September 2024**

[Our Shop Site](https://our-shop.site) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.

**What Personal Information We Collect**

We collect various types of information in connection with the services we provide, including:

- **Personal Identification Information**: Name, email address, phone number, and other contact details.
- **Account Information**: Username, password, and other registration details.
- **Financial Information**: Payment details and transaction history.
- **Usage Data**: Information about how you use our website and services, including your IP address, browser type, and access times.
- **Customer Content**: Information that you include in your e-catalogs, such as product descriptions, images, prices, and customer contact information.

**How We Collect Information**

We collect information in the following ways:

- **Directly from You**: When you register for an account, create an e-catalog, or otherwise interact with our services.
- **Automatically**: Through cookies and similar technologies, which track your usage patterns and preferences.
- **From Third Parties**: When you use third-party services that are integrated with our platform.

**How We Use Collected Information**

We use the information we collect for various purposes, including:

- **To Provide and Manage Our Services**: Including creating and managing your account, processing transactions, and providing customer support.
- **To Improve Our Services**: By analyzing usage patterns and feedback to enhance user experience.
- **To Communicate with You**: Sending you updates, newsletters, and promotional materials.
- **To Enforce Our Terms and Policies**: Ensuring compliance with our terms of use and privacy policy.
- **For Legal and Security Purposes**: Protecting against fraud, unauthorized access, and other legal issues.

**How We Keep Information Safe**

We implement a variety of security measures to maintain the safety of your personal information, including:

- **Encryption**: We use SSL encryption to protect data transmitted between your browser and our servers.
- **Access Controls**: We limit access to your personal information to those employees and contractors who need to know the information to perform their job duties.
- **Regular Security Audits**: We conduct regular audits of our security systems and practices to ensure ongoing protection of your data.

**Information Sharing with Third Parties**

We do not sell, trade, or otherwise transfer your personal information to outside parties except as described below:

- **Service Providers**: We may share your information with third-party service providers who assist us in operating our website, conducting our business, or providing services to you, so long as those parties agree to keep this information confidential.
- **Legal Requirements**: We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).
- **Business Transfers**: In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the acquiring company.

**Your Rights**

Depending on your jurisdiction, you may have the following rights regarding your personal information:

- **Access**: You have the right to request access to the personal information we hold about you.
- **Correction**: You have the right to request that we correct any inaccuracies in your personal information.
- **Deletion**: You have the right to request that we delete your personal information.
- **Objection**: You have the right to object to our processing of your personal information.
- **Data Portability**: You have the right to request a copy of your personal information in a structured, commonly used, and machine-readable format.

To exercise any of these rights, please contact us at [Your Contact Email].

**Changes to This Privacy Policy**

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this page periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

**Governing Law**

This Privacy Policy is governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in [Jurisdiction] for the resolution of any disputes arising from or related to this Privacy Policy.

**Contact Information**

If you have any questions about this Privacy Policy, please contact us at:

- Email: nkanpster@gmail.com
- Address: 36, Nagar Nigam Colony, Samta Colony, Raipur, Chhattisgarh, India 492001
- Phone: +91 9971488521


`;

export default function PrivacyPolicyPage() {
  return (
    <div className='container prose mx-auto max-w-4xl p-5'>
      <Markdown>{privacyPolicyPage}</Markdown>
    </div>
  );
}
