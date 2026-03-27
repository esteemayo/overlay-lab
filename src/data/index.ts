import { FeatureType, UseCaseType } from '@/types';

export const features: FeatureType[] = [
  {
    id: 'stack-based-state-management',
    title: 'Stack-Based State Management',
    desc: 'Manage multiple popups using a centralized stack instead of scattered boolean states.',
  },
  {
    id: 'headless-architecture',
    title: 'Headless Architecture',
    desc: 'Fully customizable UI with no enforced styles, giving you complete design control',
  },
  {
    id: 'accessible-by-default',
    title: 'Accessible by Default',
    desc: 'Built-in focus trapping, keyboard navigation, and ARIA-compliant dialog semantics.',
  },
  {
    id: 'composable-api',
    title: 'Composable API',
    desc: 'Clean and scalable API using compound components for better developer experience.',
  },
  {
    id: 'overlay-scroll-handling',
    title: 'Overlay & Scroll Handling',
    desc: 'Handles outside clicks, escape key, and scroll locking automatically.',
  },
  {
    id: 'multiple-variants',
    title: 'Multiple Variants',
    desc: 'Supports modals, drawers, and responsive sidebars with shared logic.',
  },
];

export const USE_CASES: UseCaseType[] = [
  { id: 1, text: 'Financial applications (transfer confirmations, receipts)' },
  { id: 2, text: 'Dashboard interfaces (sidebars, filters, drawers)' },
  { id: 3, text: 'Authentication flows (login, signup, OTP modals)' },
  { id: 4, text: 'E-commerce interactions (cart, checkout, quick views)' },
  { id: 5, text: 'Complex multi-step forms and workflows' },
];
