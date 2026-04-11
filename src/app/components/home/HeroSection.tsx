import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSettings } from '../../hooks/useSettings';
import { settingsService } from '../../services/settingsService';

export function HeroSection() {
  const { t, i18n } = useTranslation();
  const { settings } = useSettings();
  const siteName = settingsService.getTranslation(settings, i18n.language);

  return (
    <section className="relative h-[80vh] md:h-[90vh] min-h-[600px] overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://www.samdu.uz/upload/cover-images/62b00cc62723f-62b00cc627241-62b00cc627242-62b00cc627243.png"
          alt="Litsey binosi"
          className="w-full h-full object-cover opacity-50 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d89b1] via-[#0a6d8f]/10 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 
            data-aos="fade-up"
            className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight uppercase"
          >
            {siteName.full_name || t('home.heroTitle')}
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-bold opacity-90 max-w-2xl"
          >
            {t('home.heroDesc')}
          </p>
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex flex-wrap gap-6"
          >
            <Link
              to="/admission"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#0d89b1] text-white rounded-lg hover:bg-[#0a6d8f] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl font-black uppercase tracking-widest shadow-xl"
            >
              {t('home.admissionBtn')}
              <ChevronRight size={24} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 font-black uppercase tracking-widest border border-white/20"
            >
              {t('home.moreBtn')}
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-950 to-transparent"></div>
    </section>
  );
}
