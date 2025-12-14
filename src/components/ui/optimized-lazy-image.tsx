import React, { useState, useCallback, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedLazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  priority?: boolean;
}

export const OptimizedLazyImage = React.memo(({ 
  src, 
  alt, 
  className, 
  fallback = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23f3f4f6'/%3E%3C/svg%3E",
  priority = false,
  ...props 
}: OptimizedLazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return; // Skip lazy loading for priority images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px 0px', // Start loading 50px before entering viewport
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(true);
  }, []);

  // Generate srcSet for responsive images
  const generateSrcSet = (baseSrc: string) => {
    if (!baseSrc.includes('.jpg') && !baseSrc.includes('.png')) return undefined;
    
    const ext = baseSrc.split('.').pop();
    const base = baseSrc.replace(`.${ext}`, '');
    
    return [
      `${base}-480w.${ext} 480w`,
      `${base}-768w.${ext} 768w`,
      `${base}-1024w.${ext} 1024w`,
      `${base}.${ext} 1200w`
    ].join(', ');
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Placeholder/Loading state */}
      <img
        ref={imgRef}
        src={fallback}
        alt=""
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
        aria-hidden="true"
      />
      
      {/* Actual image */}
      {(isIntersecting || priority) && (
        <img
          src={hasError ? fallback : src}
          srcSet={!hasError ? generateSrcSet(src) : undefined}
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1200px"
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={cn(
            "w-full h-full object-cover transition-all duration-500 transform-gpu",
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105",
            className
          )}
          {...props}
        />
      )}
      
      {/* Loading indicator */}
      {!isLoaded && (isIntersecting || priority) && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
});

OptimizedLazyImage.displayName = 'OptimizedLazyImage';