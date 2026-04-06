import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    label: 'Tuzilma',
    href: '/structure',
    children: [
      { label: 'Litsey haqida', href: '/about' },
      { label: 'Rahbariyat', href: '/leadership' },
      { label: 'O\'qituvchilar', href: '/teachers' },
    ],
  },
  {
    label: 'Faoliyat',
    href: '/activity',
    children: [
      { label: 'Fanlar', href: '/subjects' },
      { label: 'O\'quv dasturlari', href: '/programs' },
    ],
  },
  {
    label: 'Ta\'lim',
    href: '/education',
    children: [
      { label: 'Dars jadvali', href: '/schedule' },
      { label: 'Axborot-kutubxona', href: '/library' },
    ],
  },
  {
    label: 'Galereya',
    href: '/gallery',
    children: [
      { label: 'Fotosuratlar', href: '/photos' },
      { label: 'Video lavhalar', href: '/videos' },
    ],
  },
  {
    label: 'Qabul',
    href: '/admission',
    children: [
      { label: 'Qabul 2025/2026', href: '/admission' },
    ],
  },
  {
    label: 'Bog\'lanish',
    href: '/contact',
    children: [
      { label: 'Manzil', href: '/contact' },
      { label: 'Direktor ga murojaat', href: '/contact#appeal' },
    ],
  },
];
