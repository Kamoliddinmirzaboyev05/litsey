export interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  slug: string;
}

export interface Announcement {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

export interface Teacher {
  id: number;
  name: string;
  position: string;
  degree: string;
  image: string;
  subjects?: string[];
}

export interface LeadershipMember {
  id: number;
  name: string;
  position: string;
  image: string;
  phone?: string;
  email?: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: string;
}

export interface MenuItem {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
  }[];
}
