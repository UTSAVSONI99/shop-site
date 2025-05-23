import { cn } from '@/lib/utils';

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('container mx-auto max-w-7xl', className)}>
      {children}
    </div>
  );
}
