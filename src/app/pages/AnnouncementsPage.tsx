import { Calendar, Megaphone, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { announcementService } from '../services/announcementService';
import { Announcement } from '../types';
import { motion } from 'framer-motion';

export function AnnouncementsPage() {
  const { t, i18n } = useTranslation();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const data = await announcementService.getAllAnnouncements(1);
        setAnnouncements(data.results);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <Loader2 className="w-12 h-12 text-[#0d89b1] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] text-white py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight uppercase">
              {t('home.announcements.allAnnouncements', 'Barcha e\'lonlar')}
            </h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl leading-relaxed font-bold opacity-90 uppercase tracking-widest">
              {t('announcements.pageSubtitle', 'Litseymiz bo\'yicha muhim e\'lonlar va xabarlar')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Announcements Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {announcements.map((announcement, index) => {
              const translation = announcementService.getTranslation(announcement, i18n.language);
              const date = new Date(announcement.published_at).toLocaleDateString(i18n.language === 'ru' ? 'ru-RU' : 'uz-UZ');

              return (
                <motion.div
                  key={announcement.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-950 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-800"
                >
                  <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-0 group-hover:scale-110 transition-transform duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center shadow-inner group-hover:bg-white group-hover:text-[#0d89b1] transition-all duration-300">
                          <Megaphone size={28} />
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-black bg-white/20 backdrop-blur-md px-4 py-2 rounded-full uppercase tracking-[0.2em] border border-white/10">
                          <Calendar size={14} />
                          <span>{date}</span>
                        </div>
                      </div>
                      <h3 className="text-xl md:text-2xl font-black line-clamp-2 leading-tight uppercase tracking-tight">
                        {translation.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-gray-600 dark:text-gray-400 mb-8 line-clamp-4 leading-relaxed text-lg font-medium italic">
                      {translation.short_description}
                    </p>

                    <Link
                      to={`/announcements/${announcement.slug}`}
                      className="inline-flex items-center gap-2 text-[#0d89b1] font-black uppercase tracking-[0.2em] text-xs hover:gap-4 transition-all group/link"
                    >
                      {t('home.announcements.details', 'Batafsil')}
                      <ArrowRight size={20} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
