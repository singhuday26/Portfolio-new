import { useEffect } from 'react';

export const PerformanceOptimizer = () => {
  useEffect(() => {
    // Optimize rendering performance
    const optimizeRendering = () => {
      // Enable passive event listeners for better scroll performance
      const addPassiveListener = (element: Element, event: string) => {
        element.addEventListener(event, () => {}, { passive: true });
      };

      // Add passive listeners to scroll containers
      const scrollContainers = document.querySelectorAll('[data-scroll-container]');
      scrollContainers.forEach(container => {
        addPassiveListener(container, 'scroll');
        addPassiveListener(container, 'wheel');
        addPassiveListener(container, 'touchstart');
        addPassiveListener(container, 'touchmove');
      });

      // Optimize images with intersection observer for lazy loading
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
              }
            }
          });
        }, {
          rootMargin: '50px 0px',
          threshold: 0.1
        });

        // Observe images with data-src attribute
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
      }

      // Prefetch navigation links on hover for instant navigation
      const prefetchOnHover = (link: HTMLAnchorElement) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('/') && !href.includes('#')) {
          const linkElement = document.createElement('link');
          linkElement.rel = 'prefetch';
          linkElement.href = href;
          document.head.appendChild(linkElement);
        }
      };

      // Add hover prefetch to navigation links
      const navLinks = document.querySelectorAll('nav a[href^="/"]');
      navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => prefetchOnHover(link as HTMLAnchorElement), { once: true });
      });

      // Optimize font loading with font-display: swap
      const optimizeFonts = () => {
        const style = document.createElement('style');
        style.textContent = `
          @font-face {
            font-family: 'Inter';
            font-display: swap;
          }
          @font-face {
            font-family: 'Montserrat';  
            font-display: swap;
          }
        `;
        document.head.appendChild(style);
      };

      optimizeFonts();

      // Enable GPU acceleration for animations
      const animatedElements = document.querySelectorAll('[class*="animate-"], [class*="transition-"]');
      animatedElements.forEach(element => {
        (element as HTMLElement).style.willChange = 'transform, opacity';
        (element as HTMLElement).style.transform = 'translateZ(0)';
      });
    };

    // Run optimizations after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeRendering);
    } else {
      optimizeRendering();
    }

    // Cleanup function
    return () => {
      document.removeEventListener('DOMContentLoaded', optimizeRendering);
    };
  }, []);

  return null; // This component doesn't render anything
};