import React from 'react';
import Markdown from 'react-markdown';
const shippingPage = `

# Shipping and Delivery Policy

**Effective Date: 19 September 2024**

At [Our Shop Site](https://our-shop.site), we provide a platform for users to create and manage their e-catalogs. Please note that we do not handle shipping or delivery of any items listed on our users' catalogs. This Shipping and Delivery Policy outlines our position and the responsibilities of the shopkeepers using our platform.

**Order Processing and Shipping Time**

We do not process or ship orders. All shipping and delivery arrangements are managed by the individual shopkeepers who list their products on our platform. Please refer to the specific shopkeeper's policies for details on order processing and shipping times.

**Shipping Costs**

Shipping costs are determined and managed by the shopkeepers. [Our Shop Site] does not charge or collect any fees related to shipping. For information on shipping costs, please contact the shopkeeper directly.

**International Shipping**

If a shopkeeper offers international shipping, they are responsible for managing all aspects of the international shipping process, including customs, duties, and taxes. [Our Shop Site] is not involved in international shipping arrangements.

**Disclaimer**

[Our Shop Site] provides the platform for shopkeepers to list and sell their products. We are not responsible for the shipping or delivery of any items. Any issues related to shipping or delivery should be addressed directly with the shopkeeper.

**Contact Information**

If you have any questions about our Shipping and Delivery Policy, please contact us at:

- Email: nknapster@gmail.com
- Phone: +91 9971488521

**Changes to This Policy**

We may update this Shipping and Delivery Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this page periodically for any changes.


`;
export default function ContactUs_Page() {
  return (
    <div className='container prose mx-auto p-5'>
      <Markdown>{shippingPage}</Markdown>
    </div>
  );
}
