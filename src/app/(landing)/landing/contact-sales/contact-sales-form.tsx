'use client';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AutosizeTextarea } from '@/components/ui-enhanced/autosize-textarea';
import { Button } from '@/components/ui/button';
import React from 'react';
import { contactSalesActionType } from './page';
import { useFormState } from 'react-dom';

export default function ContactSalesForm({
  handleSubmit,
}: {
  handleSubmit: contactSalesActionType;
}) {
  const [state, action] = useFormState(handleSubmit, null);
  return (
    <form action={action} className='space-y-4'>
      <div className='grid gap-4'>
        <Label htmlFor=''>Full Name</Label>
        <Input name='name' type='text' />
        {state?.name && <div className='text-red-500'>{state.name}</div>}
      </div>
      <div className='grid gap-4'>
        <Label htmlFor=''>Email</Label>
        <Input type='text' name='email' />
        {state?.email && <div className='text-red-500'>{state.email}</div>}
      </div>
      <div className='grid gap-4'>
        <Label htmlFor=''>Phone</Label>
        <Input type='text' name='phone' />
        {state?.phone && <div className='text-red-500'>{state.phone}</div>}
      </div>
      <div className='grid gap-4'>
        <Label htmlFor=''>
          <span>Company</span>
          <span>(optional)</span>
        </Label>
        <Input type='text' name='company' />
        {state?.company && <div className='text-red-500'>{state.company}</div>}
      </div>
      <div className='grid gap-4'>
        <Label htmlFor=''>Service</Label>
        <Select name='service'>
          <SelectTrigger>
            <SelectValue placeholder='Select service' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='1'>Select service</SelectItem>
            <SelectItem value='2'>Full E-commerce Solutions</SelectItem>
            <SelectItem value='3'>Customizable StoreFront</SelectItem>
            <SelectItem value='4'>Setup or Product Assistance</SelectItem>
          </SelectContent>
        </Select>
        {state?.service && <div className='text-red-500'>{state.service}</div>}
      </div>
      <div className='grid gap-4'>
        <Label htmlFor=''>Message</Label>
        <AutosizeTextarea placeholder='Your message...' name='message' />
      </div>
      {state?.message && <div className='text-red-500'>{state.message}</div>}
      <div className='py-6'>
        <Button className='w-full'>Submit</Button>
      </div>
    </form>
  );
}
