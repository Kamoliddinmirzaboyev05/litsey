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

export interface AnnouncementTranslation {
  title: string;
  short_description: string;
  content: string;
}

export interface Announcement {
  id: number;
  slug: string;
  translations: {
    uz: AnnouncementTranslation;
    ru: AnnouncementTranslation;
    en: AnnouncementTranslation;
    [key: string]: AnnouncementTranslation;
  };
  image: string;
  views_count: number;
  status: string;
  status_display: string;
  is_important: boolean;
  is_expired: boolean;
  expires_at: string | null;
  published_at: string;
  created_at: string;
  created_by: string;
}

export interface AnnouncementResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Announcement[];
}

export interface TeacherTranslation {
  position: string;
  subject: string;
  bio: string;
  achievements: string;
}

export interface Teacher {
  id: number;
  full_name: string;
  slug: string;
  translations: {
    uz: TeacherTranslation;
    ru: TeacherTranslation;
    [key: string]: TeacherTranslation;
  };
  academic_degree: string;
  academic_rank: string;
  category: string;
  category_display: string;
  experience_years: number;
  department: number | null;
  department_name: string | null;
  photo: string;
  email: string;
  phone?: string;
  sort_order: number;
  is_active: boolean;
  created_at: string;
}

export interface TeacherResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Teacher[];
}

export interface LeadershipTranslation {
  position: string;
  bio: string;
  reception_hours: string;
}

export interface LeadershipMember {
  id: number;
  full_name: string;
  translations: {
    uz: LeadershipTranslation;
    ru: LeadershipTranslation;
    [key: string]: LeadershipTranslation;
  };
  academic_degree: string;
  phone: string;
  email: string;
  photo: string;
  sort_order: number;
  is_active: boolean;
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
