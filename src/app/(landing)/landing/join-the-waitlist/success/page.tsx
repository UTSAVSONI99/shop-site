import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <>
      <div className='mx-auto flex h-svh max-w-md flex-col items-center justify-center'>
        <Card className='flex w-full flex-col gap-3'>
          <CardHeader>
            <CardTitle>Success</CardTitle>
            <CardDescription>
              We have added you to the waitlist. We will notify you when we are
              ready to launch.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href='/'>Go to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
