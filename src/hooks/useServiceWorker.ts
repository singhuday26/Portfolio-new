import { useEffect } from 'react';

export const useServiceWorker = () => {
  useEffect(() => {
    // Use import.meta.env.PROD for Vite (not process.env.NODE_ENV)
    if ('serviceWorker' in navigator && import.meta.env.PROD) {
      const registerSW = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('SW registered: ', registration);
        } catch (registrationError) {
          console.log('SW registration failed: ', registrationError);
        }
      };

      registerSW();
    }
  }, []);
};