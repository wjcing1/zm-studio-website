// ZM Studio — React application with React Router
// Refactored from single file to modular architecture

import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from '@/components/layout/RootLayout';
import { routes } from '@/config/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: routes,
  }
]);

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen grid place-items-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-neutral-300 border-t-neutral-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-sm text-neutral-500 font-medium">Loading...</p>
          </div>
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
}
