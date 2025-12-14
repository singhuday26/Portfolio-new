import React from 'react';
import { Card } from './card';
import { cn } from '@/lib/utils';

interface OptimizedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const OptimizedCard = React.memo(({ className, children, ...props }: OptimizedCardProps) => {
  return (
    <Card 
      className={cn(
        'transform-gpu will-change-transform transition-all duration-300',
        className
      )} 
      {...props}
    >
      {children}
    </Card>
  );
});

OptimizedCard.displayName = 'OptimizedCard';