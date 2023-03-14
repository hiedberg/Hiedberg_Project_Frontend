import { PlanFreeIcon, PlanStarterIcon, PlanPremiumIcon } from '../assets';

// ----------------------------------------------------------------------

const LICENSES = ['Starter Subscription', 'Business Subscription', 'Premium Subscription'];

export const _homePlans = [...Array(3)].map((_, index) => ({
  license: LICENSES[index],
  commons: ['£320 per month', 'Max 1 Task', '1 Developer'],
  options: ['10 hours per month', 'Monthly billing', 'Basic admin tasks', 'Onboarding support'],
  icons: [
    'https://minimal-assets-api.vercel.app/assets/images/home/ic_sketch.svg',
    'https://minimal-assets-api.vercel.app/assets/images/home/ic_figma.svg',
    'https://minimal-assets-api.vercel.app/assets/images/home/ic_js.svg',
    'https://minimal-assets-api.vercel.app/assets/images/home/ic_ts.svg',
  ],
}));

export const _pricingPlans = [
  {
    subscription: 'starter',
    icon: <PlanFreeIcon />,
    price: 320,
    caption: '1 Developer',
    lists: [
      { text: '10 hours per month', isAvailable: true },
      { text: 'Monthly billing', isAvailable: true },
      { text: 'Basic admin tasks', isAvailable: false },
      { text: 'Onboarding support', isAvailable: false },
    ],
    labelAction: 'choose starter',
  },
  {
    subscription: 'business',
    icon: <PlanStarterIcon />,
    price: 600,
    caption: 'Max 5 Developers',
    lists: [
      { text: '20 hours per month', isAvailable: true },
      { text: 'Dedicated virtual assistant', isAvailable: true },
      { text: 'Fast turnaround time', isAvailable: true },
      { text: 'Monthly reviews and scheduling', isAvailable: false },
      { text: 'Onboarding support', isAvailable: false },
    ],
    labelAction: 'choose business',
  },
  {
    subscription: 'premium',
    icon: <PlanPremiumIcon />,
    price: 945,
    caption: 'Dedicated Developers',
    lists: [
      { text: '35 hours per month', isAvailable: true },
      { text: 'Dedicated Virtual assistant', isAvailable: true },
      { text: 'Direct phone line', isAvailable: true },
      { text: 'Priority turnaround time', isAvailable: true },
      { text: 'Weekly reviews and scheduling', isAvailable: true },
      { text: 'Onboarding support', isAvailable: true },
    ],
    labelAction: 'choose premium',
  },
];
