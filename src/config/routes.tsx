// React Router configuration with lazy loading

import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

// Lazy load page components for code splitting
const HomePage = lazy(() => import('@/features/home/HomePage'));
const AboutPage = lazy(() => import('@/features/about/AboutPage'));
const ProjectsPage = lazy(() => import('@/features/projects/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('@/features/projects/ProjectDetailPage'));
const ServicesPage = lazy(() => import('@/features/services/ServicesPage'));
const NewsPage = lazy(() => import('@/features/news/NewsPage'));
const ContactPage = lazy(() => import('@/features/contact/ContactPage'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/projects',
    element: <ProjectsPage />
  },
  {
    path: '/projects/:projectId',
    element: <ProjectDetailPage />
  },
  {
    path: '/services',
    element: <ServicesPage />
  },
  {
    path: '/news',
    element: <NewsPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  }
];
