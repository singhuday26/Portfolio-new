import React, { Suspense } from 'react';

interface LazyRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const DefaultFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
      <p className="text-muted-foreground text-lg font-medium">Loading...</p>
    </div>
  </div>
);

export const LazyRoute = React.memo(({ children, fallback = <DefaultFallback /> }: LazyRouteProps) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
});

LazyRoute.displayName = 'LazyRoute';