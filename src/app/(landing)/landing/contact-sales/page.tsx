import { Container } from '@/components/ui';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import db from '@/lib/db';
import { Mail, PhoneIcon } from 'lucide-react';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import ContactSalesForm from './contact-sales-form';

export type contactSalesActionType = typeof contactSalesAction;
const contactSalesSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().min(10).max(13, 'Invalid Phone Number'),
  company: z.string().optional().default('--'),
  service: z.string().optional().default('--'),
  message: z.string().optional().default('--'),
});


const contactSalesAction = async (initialVal: unknown, FormData: FormData) => {
  'use server';
  const data = Object.fromEntries(FormData.entries());
  const v = contactSalesSchema.safeParse(data);
  if (!v.success) return v.error.flatten().fieldErrors;

  await db.contactSalesInquiry.create({
    data: {
      email: v.data.email,
      name: v.data.name,
      phoneNo: v.data.phone,
      message: v.data.message,
      company: v.data.company,
      type: v.data.service,
    },
  });
  redirect('/contact-sales/thank-you');
};

export default function ContactSalesPage() {
  return (
    <div>
      <section className='bg-gray-100 py-16'>
        <Container>
          <div className='space-y-4 text-center'>
            <h1 className='text-5xl'>Contact Us</h1>
            <p>We are here to help you with setting up your online shop or adding more features.</p>
          </div>
          <div className='flex max-w-lg flex-wrap gap-x-12 *:grow *:justify-center'>
            <div className='flex items-center gap-3'>
              <div className='flex items-center gap-3'>
                <PhoneIcon className='mx-auto h-5 w-5' />{' '}
                <p className='text-center'>+91 9971488521</p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='flex items-center gap-3'>
                <Mail className='mx-auto h-5 w-5' />{' '}
                <p className='text-center'>nkmr103@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='p-5'></div>
          <Card className='w-full max-w-lg'>
            <CardHeader></CardHeader>
            <CardContent>
              <div className='w-full max-w-lg'>
                <ContactSalesForm handleSubmit={contactSalesAction} />
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>
    </div>
  );
}
