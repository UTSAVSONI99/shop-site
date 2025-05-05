'use client';
import { Input } from '@/components/ui/input';
import React from 'react';
import { HandlerType } from './page';
import { useFormState } from 'react-dom';
import { SubmitButton } from '@/components/SubmitButton';
export type JoinTheWaitListPageProps = {
  searchParams: {
    email?: string;
    name?: string;
    phoneNo?: string;
  };
};

export default function WaitlistForm({
  searchParams,
  handleSubmit,
}: {
  searchParams: JoinTheWaitListPageProps['searchParams'];
  handleSubmit: HandlerType;
}) {
  const [state, action] = useFormState(handleSubmit, null);
  return (
    <>
      <form action={action} className='flex flex-col gap-3'>
        <Input
          name='name'
          type='text'
          placeholder='Your name'
          // className="p-2 border border-gray-300 rounded-md"
          defaultValue={searchParams.name}
        />
        {state?.name && <p className='text-red-500'>{state.name}</p>}
        <Input
          name='email'
          type='email'
          placeholder='Your email'
          // className="p-2 border border-gray-300 rounded-md"
          defaultValue={searchParams.email}
        />
        {state?.email && <p className='text-red-500'>{state.email}</p>}
        <Input
          name='phoneNo'
          type='text'
          placeholder='Your Phone Number'
          // className="p-2 border border-gray-300 rounded-md"
          defaultValue={searchParams.phoneNo ?? ''}
        />
        {state?.phoneNo && <p className='text-red-500'>{state.phoneNo}</p>}

        <SubmitButton type='submit'>Join the Waitlist</SubmitButton>
      </form>
    </>
  );
}
