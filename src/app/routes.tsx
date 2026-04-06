import { createBrowserRouter } from 'react-router';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { TeachersPage } from './pages/TeachersPage';
import { AdmissionPage } from './pages/AdmissionPage';
import { NewsPage } from './pages/NewsPage';
import { AnnouncementsPage } from './pages/AnnouncementsPage';
import { ContactPage } from './pages/ContactPage';
import { SubjectsPage } from './pages/SubjectsPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'leadership', Component: LeadershipPage },
      { path: 'teachers', Component: TeachersPage },
      { path: 'subjects', Component: SubjectsPage },
      { path: 'programs', Component: ProgramsPage },
      { path: 'admission', Component: AdmissionPage },
      { path: 'news', Component: NewsPage },
      { path: 'news/:slug', Component: NewsPage },
      { path: 'announcements', Component: AnnouncementsPage },
      { path: 'announcements/:slug', Component: AnnouncementsPage },
      { path: 'contact', Component: ContactPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]);