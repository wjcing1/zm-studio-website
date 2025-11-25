// Root Layout wrapper with Header and Footer

import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export default function RootLayout() {
  // Scroll to top on route change
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
