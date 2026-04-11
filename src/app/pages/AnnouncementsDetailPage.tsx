import { useParams, Link } from 'react-router';
import { Calendar, Megaphone, ArrowLeft, Loader2, Clock, User, Share2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { announcementService } from '../services/announcementService';
import { Announcement } from '../types';
import { motion } from 'framer-motion';

export function AnnouncementsDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      if (!slug) return;
      try {
        const data = await announcementService.getAnnouncementBySlug(slug);
        setAnnouncement(data);
      } catch (error) {
        console.error('Error fetching announcement detail:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncement();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <Loader2 className="w-12 h-12 text-[#0d89b1] animate-spin" />
      </div>
    );
  }

  if (!announcement) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 px-4 text-center">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tight">{t('announcements.notFound')}</h2>
        <Link to="/announcements" className="text-[#0d89b1] font-black uppercase tracking-widest hover:underline">
          {t('announcements.backToList')}
        </Link>
      </div>
    );
  }

  const translation = announcementService.getTranslation(announcement, i18n.language);
  const date = new Date(announcement.published_at).toLocaleDateString(i18n.language === 'ru' ? 'ru-RU' : 'uz-UZ');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Header with Back Button */}
      <div className="bg-gray-50 dark:bg-gray-900 py-12 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <Link
            to="/announcements"
            className="inline-flex items-center gap-3 text-gray-500 dark:text-gray-400 hover:text-[#0d89b1] transition-colors font-black uppercase tracking-widest text-sm mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            {t('common.back', 'Orqaga')}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm font-black uppercase tracking-[0.2em] text-[#0d89b1]">
              <div className="flex items-center gap-2 bg-[#0d89b1]/10 px-4 py-2 rounded-full">
                <Calendar size={16} />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-4 py-2 rounded-full">
                <Clock size={16} />
                <span>{new Date(announcement.published_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight uppercase tracking-tight mb-8">
              {translation.title}
            </h1>

            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 font-bold">
              <div className="w-12 h-12 bg-[#0d89b1] rounded-full flex items-center justify-center text-white shadow-lg">
                <User size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest opacity-60">{t('announcements.author')}</p>
                <p className="text-gray-900 dark:text-white">{announcement.created_by.split('(')[0]}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {announcement.image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden mb-16 shadow-2xl"
              >
                <img
                  src={announcement.image}
                  alt={translation.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>
            )}

            <div className="bg-white dark:bg-gray-950 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-4 mb-10 pb-10 border-b border-gray-100 dark:border-gray-800">
                <div className="w-16 h-16 bg-[#0d89b1]/10 rounded-2xl flex items-center justify-center text-[#0d89b1]">
                  <Megaphone size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight">{t('announcements.contentTitle')}</h2>
                  <p className="text-gray-500 dark:text-gray-400 font-bold italic">{translation.short_description}</p>
                </div>
              </div>

              <div 
                className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed font-medium"
                dangerouslySetInnerHTML={{ __html: translation.content }}
              />

              <div className="mt-16 pt-10 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-black uppercase tracking-widest text-gray-400">{t('announcements.share')}</span>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-inner">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
                
                <Link
                  to="/announcements"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#0d89b1]/10 text-[#0d89b1] rounded-xl hover:bg-[#0d89b1] hover:text-white transition-all duration-300 font-black uppercase tracking-widest text-xs"
                >
                  {t('announcements.backToList')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
