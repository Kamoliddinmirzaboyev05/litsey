import { Link } from 'react-router';
import { Megaphone, Calendar, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { announcementService } from '../../services/announcementService';
import { Announcement } from '../../types';

export function AnnouncementsSection() {
  const { t, i18n } = useTranslation();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const data = await announcementService.getAllAnnouncements(1);
        // Show only first 3 announcements on home page
        setAnnouncements(data.results.slice(0, 3));
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
      <section className="py-20 bg-white dark:bg-gray-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0d89b1]"></div>
      </section>
    );
  }

  if (announcements.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-950 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12" data-aos="fade-up">
          <div>
            <div className="inline-block px-5 py-2 bg-[#0d89b1]/10 text-[#0d89b1] rounded-full text-xs font-black mb-4 uppercase tracking-[0.2em]">
              {t('home.announcements.badge', 'E\'LONLAR')}
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight uppercase tracking-tight">
              {t('home.announcements.title', 'Muhim e\'lonlar')}
            </h2>
          </div>
          <Link
            to="/announcements"
            className="hidden md:inline-flex items-center gap-2 text-[#0d89b1] hover:gap-4 transition-all font-black uppercase tracking-widest text-sm"
          >
            {t('home.announcements.allAnnouncements', 'Barcha e\'lonlar')}
            <ArrowRight size={22} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((announcement, index) => {
            const translation = announcementService.getTranslation(announcement, i18n.language);
            const date = new Date(announcement.published_at).toLocaleDateString(i18n.language === 'ru' ? 'ru-RU' : 'uz-UZ');
            
            return (
              <div
                key={announcement.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-gradient-to-br from-[#0d89b1] to-[#0a6d8f] rounded-lg p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-0 group-hover:scale-110 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-md flex items-center justify-center shadow-inner group-hover:bg-white group-hover:text-[#0d89b1] transition-all duration-300">
                      <Megaphone size={28} />
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black bg-white/20 backdrop-blur-md px-4 py-2 rounded-full uppercase tracking-[0.2em] border border-white/10">
                      <Calendar size={14} />
                      <span>{date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black mb-4 line-clamp-2 leading-tight group-hover:text-sky-100 transition-colors uppercase tracking-tight">
                    {translation.title}
                  </h3>

                  <p className="text-white/80 mb-8 line-clamp-3 leading-relaxed text-lg font-medium">
                    {translation.short_description}
                  </p>

                  <Link
                    to={`/announcements/${announcement.slug}`}
                    className="inline-flex items-center gap-2 font-black uppercase tracking-[0.2em] text-xs hover:gap-4 transition-all group/link bg-white/10 hover:bg-white hover:text-[#0d89b1] px-6 py-3 rounded-md backdrop-blur-sm"
                  >
                    {t('home.announcements.details', 'Batafsil')}
                    <ArrowRight size={20} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            to="/announcements"
            className="inline-flex items-center gap-2 text-[#0d89b1] font-black uppercase tracking-widest text-sm"
          >
            {t('home.announcements.allAnnouncements', 'Barcha e\'lonlar')}
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
