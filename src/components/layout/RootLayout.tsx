// Root Layout wrapper with Header and Footer

import { useState, useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();
  const isFirstMount = useRef(true);

  // Scroll to top on route change
  useScrollToTop();

  // Initial loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Page transition animation on route change
  useEffect(() => {
    // Skip first mount (handled by initial loading)
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    // Only trigger if not already loading
    if (!isLoading) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const showOverlay = isLoading || isTransitioning;

  return (
    <>
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-white grid place-items-center"
          >
            <div className="flex gap-1">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="w-1 h-5 bg-neutral-800"
                  animate={{
                    scaleY: [1, 2, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-white text-neutral-900">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
