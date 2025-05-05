import db from '@/lib/db';
import { redirect } from 'next/navigation';
import type { JoinTheWaitListPageProps } from './waitlistForm';
import WaitlistForm from './waitlistForm';
import { z } from 'zod';

export type HandlerType = typeof handleSubmit;
async function handleSubmit(initialState: unknown, formData: FormData) {
  'use server';
  console.log('form submitted');
  const schema = z.object({
    email: z.string().email(),
    // phoneNo: z.string().min(10, "Phone no should be atleast 10 digits long").max(13, 'Invalid Phone Number'),
    phoneNo: z.string().optional(),
    name: z.string().min(1),
  });
  const data = Object.fromEntries(formData.entries());
  const v = schema.safeParse(data);
  if (!v.success) {
    return v.error.flatten().fieldErrors;
  }
  await db.waitlist.create({
    data: {
      email: v.data.email,
      phoneNo: v.data.phoneNo || '',
      name: v.data.name,
    },
  });
  redirect('/join-the-waitlist/success');
  // redirect("/app")
}

export default function JoinTheWaitlist({
  searchParams,
}: JoinTheWaitListPageProps) {
  return (
    <div className='flex items-center justify-center p-5 py-36'>
      <div className='flex flex-col gap-3 p-5'>
        <h1 className='text-center text-4xl font-bold'> Join the Waitlist</h1>
        <p className='text-center'>
          We are currently in closed beta. Please join the waitlist to get early
          access.
        </p>
        <WaitlistForm searchParams={searchParams} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
