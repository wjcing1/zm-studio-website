// ZM Studio — React application with React Router
// Refactored from single file to modular architecture

import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from '@/components/layout/RootLayout';
import { routes } from '@/config/routes';
import PageLoader from '@/components/ui/PageLoader';

const basename = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '');

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: routes,
  }
], basename ? { basename } : undefined);

export default function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
