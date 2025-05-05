import React from 'react';
import Markdown from 'react-markdown';

// we will process your refund within 15 working days. The refund will be credited to the original payment method used during the purchase.
const cancellationAndRefundPage = `
# Cancellation and Refund Policy

**Effective Date: 19 September 2024**

At [Our Shop Site](https://our-shop.site), we strive to ensure your satisfaction with our services. This Cancellation and Refund Policy outlines the rules and procedures for returning and exchanging products/services purchased through our platform.

**Return and Exchange Policy**

You can return or exchange your purchase under the following conditions:

- **Eligibility**: You can request a refund within 15 days of purchasing our service.
- **Non-Eligibility**: We do not offer refunds if you have used the product for free (e.g., through a coupon or sale) for more than 15 days.

**How to Initiate a Return or Exchange**

To initiate a return or exchange, please follow these steps:

1.  **Contact Us**: Email our support team at support@our-shop.site with your order details and the reason for your return or exchange.
2.  **Receive Instructions**: Our support team will provide you with instructions on how to proceed with your return or exchange.

**Refund Processing Time**

Once your return or exchange request is approved, the refund will be initiated to the bank account in 6 to 12 working days.  

**Contact Information**

If you have any questions about our Cancellation and Refund Policy, please contact us at:

- Email: nknapster@gmail.com
- Phone: +91 9971488521

**Changes to This Policy**

We may update this Cancellation and Refund Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this page periodically for any changes.
`;

const newPolicy = `
# Cancellation and Refund Policy

Effective Date: 19 September 2024

At Our Shop Site, we strive to ensure your satisfaction with our platform. This Cancellation and Refund Policy outlines the rules and procedures regarding cancellations and refunds related to the services offered through our platform.

Cancellation Policy
Since Our Shop Site serves as a platform for listing items, we do not handle any sales or purchases directly. As a result, we do not process returns or exchanges for items sold by third-party sellers.

Refund Policy
Service Fees: If you encounter issues with the listing services provided by Our Shop Site, you may request a refund for service fees within 15 days of the purchase.
Non-Eligibility: Refunds will not be issued for any services utilized through promotional offers (e.g., coupons or sales) after the 15-day period.
How to Initiate a Cancellation or Refund
To initiate a cancellation or refund request, please follow these steps:

Contact Us: Email our support team at support@our-shop.site with your order details and the reason for your request.
Receive Instructions: Our support team will provide you with the necessary steps to proceed with your request.
Refund Processing Time
Once your cancellation or refund request is approved, the refund will be initiated to your bank account within 6 to 12 working days.

Contact Information
If you have any questions about our Cancellation and Refund Policy, please contact us at:

Email: nknapster@gmail.com
Phone: +91 9971488521
Changes to This Policy
We may update this Cancellation and Refund Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this page periodically for any updates.


`;

const newPolicyMDX = `
# Cancellation and Refund Policy
**Effective Date: 19 September 2024**

At Our Shop Site, we strive to ensure your satisfaction with our platform. This Cancellation and Refund Policy outlines the rules and procedures regarding cancellations and refunds related to the services offered through our platform.

## Cancellation Policy

Since Our Shop Site serves as a platform for listing items, we do not handle any sales or purchases directly. As a result, we do not process returns or exchanges for items sold by third-party sellers.

## Refund Policy

- **Service Fees:** If you encounter issues with the listing services provided by Our Shop Site, you may request a refund for service fees within 15 days of the purchase.
- **Non-Eligibility:** Refunds will not be issued for any services utilized through promotional offers (e.g., coupons or sales) after the 15-day period.

## How to Initiate a Cancellation or Refund

To initiate a cancellation or refund request, please follow these steps:

1. **Contact Us:** Email our support team at [nknapster@gmail.com](mailto:nknapster@gmail.com) with your order details and the reason for your request.
2. **Receive Instructions:** Our support team will provide you with the necessary steps to proceed with your request.

## Refund Processing Time

Once your cancellation or refund request is approved, the refund will be initiated to your bank account within 6 to 12 working days.

## Contact Information

If you have any questions about our Cancellation and Refund Policy, please contact us at:

- **Email:** [nknapster@gmail.com](mailto:nknapster@gmail.com)  
- **Phone:** +91 9971488521  

## Changes to This Policy

We may update this Cancellation and Refund Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this page periodically for any updates.
`;
export default function CancellationAndRefundPage() {
  return (
    <div className='container prose mx-auto p-5'>
      <Markdown>
        {/* cancellationAndRefundPage */}
        {newPolicyMDX}
      </Markdown>
    </div>
  );
}
