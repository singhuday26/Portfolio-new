import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

// Security function to validate image sources
const isValidImageSource = (src: string): boolean => {
  try {
    const url = new URL(src, window.location.origin);
    // Allow same origin, specific trusted domains, and data URLs
    const allowedOrigins = [
      window.location.origin,
      'https://images.unsplash.com',
      'https://via.placeholder.com'
    ];
    
    return (
      allowedOrigins.includes(url.origin) ||
      src.startsWith('data:image/') ||
      src.startsWith('/') // Relative URLs
    );
  } catch {
    return src.startsWith('/') || src.startsWith('data:image/');
  }
};

export const LazyImage = React.memo(({ 
  src, 
  alt, 
  className, 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjRkZGRkZGIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4K',
  ...props 
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Security check for image source
  const isValidSrc = isValidImageSource(src);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Preload critical images
  useEffect(() => {
    if (isInView && isValidSrc) {
      const img = new Image();
      img.src = src;
    }
  }, [isInView, src, isValidSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {hasError || !isValidSrc ? (
        <div className="flex items-center justify-center w-full h-full bg-muted min-h-[200px]">
          <span className="text-muted-foreground text-sm">
            {!isValidSrc ? 'Invalid image source' : 'Failed to load image'}
          </span>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={isInView ? src : placeholder}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          crossOrigin="anonymous"
          className={cn(
            'w-full h-full object-cover transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          {...props}
        />
      )}
      {!isLoaded && isInView && !hasError && isValidSrc && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';