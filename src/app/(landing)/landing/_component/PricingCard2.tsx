import { PRICING } from '../../../../PRICING';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2Icon, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function PricingCard2({
  pricing,
  buttonText,
  link,
}: {
  pricing:
    | typeof PRICING.basic
    | typeof PRICING.standard
    | typeof PRICING.custom;
  buttonText?: string;
  link?: string;
}) {
  const discountPercentage = (
    ((pricing.price - pricing.sellingPrice) / pricing.price) *
    100
  ).toFixed(0);
  return (
    <Card className='relative flex w-full min-w-[300px] max-w-md flex-col justify-between transition-shadow duration-300 hover:shadow-lg'>
      {/* Discount Badge */}

      <CardHeader className='space-y-4 pb-8 text-center'>
        <div className='space-y-2'>
          <h3 className='text-2xl font-bold'>{pricing.displayName}</h3>
          {pricing.id === 'custom' && (
            <p className='text-sm text-muted-foreground'>Starting at</p>
          )}
        </div>

        <div className='space-y-2'>
          {pricing.sellingPrice && pricing.price && (
            <div className='flex items-center justify-center space-x-2'>
              <span className='text-lg text-red-500 line-through'>
                Rs. {pricing.price.toLocaleString()}
              </span>
            </div>
          )}
          <div className='flex items-baseline justify-center'>
            <span className='text-4xl font-bold'>
              Rs.{' '}
              {pricing.sellingPrice?.toLocaleString() ||
                pricing.price?.toLocaleString()}
            </span>
          </div>
          <span className='text-2xl'>Per year</span>
          {pricing.gstTax && (
            <p className='text-muted-foreground'>
              {' '}
              {`(`} +18% GST {`)`}{' '}
            </p>
          )}
          {discountPercentage && (
            <div className='absolute -right-3 -top-3'>
              <div className='FLEX inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-3 py-0.5 font-bold text-white drop-shadow hover:bg-red-600'>
                <Sparkles className='mr-1 h-4 w-4' />
                Save {discountPercentage}%
              </div>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className='grow pb-8'>
        <ul className='space-y-4'>
          {pricing.features
            .filter((_, i) => i < 3)
            .map((feature, i) => (
              <li key={i} className='flex items-start'>
                <CheckCircle2Icon className='mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-green-500' />
                <span className='text-sm text-muted-foreground'>{feature}</span>
              </li>
            ))}
        </ul>
      </CardContent>

      <CardFooter className=''>
        <Button
          asChild
          className='w-full'
          variant={pricing.id === 'custom' ? 'outline' : 'default'}
        >
          <Link
            href={
              link
                ? link
                : pricing.id === 'basic' || pricing.id === 'standard'
                  ? '/sign-up'
                  : '/contact-sales'
            }
          >
            {buttonText
              ? buttonText
              : pricing.id === 'basic' || pricing.id === 'standard'
                ? 'Get Started for free'
                : 'Contact Sales'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
  return (
    <>
      <div className='relative w-full rounded-xl bg-white p-8 shadow-md'>
        <div className='flex h-full flex-col justify-between'>
          <div className='flex flex-col'>
            <div className='mb-20 text-center'>
              <span className='font-heading text-lg font-medium'>
                {pricing.displayName}
              </span>
              <div className='relative p-1'>
                {pricing.id === 'custom' && (
                  <div className='absolute left-0 right-0 top-0 h-1'>
                    <span className='text-xs text-slate-500'>Starting at</span>
                  </div>
                )}
                {pricing.sellingPrice && (
                  <div className='mt-2 flex items-center justify-center'>
                    <span className='font-heading mr-2 text-lg font-medium text-red-500 line-through'>
                      Rs. {pricing.price}
                    </span>
                  </div>
                )}
              </div>
              <div className='mt-2 flex items-start justify-center'>
                <span className='font-heading text-2xl font-bold leading-10'>
                  Rs. {pricing.sellingPrice}
                </span>
              </div>
              {pricing.gstTax && (
                <span className='font-heading'>{pricing.gstTax}</span>
              )}
              {pricing.sellingPrice && (
                <div className='absolute -right-0 top-5 mt-2 bg-red-500 px-4 text-sm text-white'>
                  Save{' '}
                  {(
                    ((pricing.price - pricing.sellingPrice) / pricing.price) *
                    100
                  ).toFixed(0)}
                  %
                </div>
              )}
            </div>
            <ul className='mb-8'>
              {pricing.features.map((feature, i) => (
                <li key={i} className='mb-3 flex items-center'>
                  <div className='flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-500'>
                    <CheckCircle2Icon size={20} className='text-green-500' />
                  </div>
                  <span className='ml-4 text-sm'>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex items-center justify-center'>
            <Button asChild>
              <Link
                href={
                  pricing.id === 'basic' || pricing.id === 'standard'
                    ? '/sign-up'
                    : '/contact-sales'
                }
                className='font-heading block rounded-sm border border-green-500 px-6 py-4 text-center text-base font-medium text-green-500 transition duration-200 hover:bg-green-500 hover:text-white'
              >
                {pricing.id === 'basic' || pricing.id === 'standard'
                  ? 'Get Started'
                  : 'Contact Sales'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
