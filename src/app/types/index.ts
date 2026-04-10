export interface NewsTranslation {
  title: string;
  short_description: string;
  content: string;
}

export interface NewsItem {
  id: number;
  slug: string;
  translations: {
    uz: NewsTranslation;
    uz_cyrl: NewsTranslation;
    ru: NewsTranslation;
    en: NewsTranslation;
  };
  image: string;
  views_count: number;
  status: string;
  status_display: string;
  is_featured: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
  created_by: string;
}

export interface NewsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: NewsItem[];
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
