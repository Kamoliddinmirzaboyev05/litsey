import { Users, GraduationCap, Trophy, School } from 'lucide-react';
import { statistics } from '../../data/statistics';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const iconMap: Record<string, any> = {
  users: Users,
  'graduation-cap': GraduationCap,
  trophy: Trophy,
  school: School,
};

export function StatisticsSection() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden" ref={ref}>
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzc1NDU4MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Statistika"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d89b1]/40 to-gray-900"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            {t('home.stats.title')}
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto font-bold opacity-90 uppercase tracking-widest">
            {t('home.stats.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            // Extract numeric value from string (e.g., "450+" -> 450)
            const numericValue = parseInt(stat.value.replace(/\D/g, ''));
            const suffix = stat.value.replace(/[0-9]/g, '');

            return (
              <div
                key={stat.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-white/5 backdrop-blur-md rounded-lg p-10 text-center border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-xl"
              >
                <div className="w-16 h-16 bg-white/10 rounded-md flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0d89b1] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 shadow-inner">
                  <Icon size={32} className="text-[#0d89b1] group-hover:text-white" />
                </div>
                <div className="text-5xl font-black text-white mb-3 tracking-tighter">
                  {inView ? (
                    <CountUp end={numericValue} duration={2.5} suffix={suffix} />
                  ) : (
                    '0'
                  )}
                </div>
                <div className="text-xs font-black text-[#0d89b1] uppercase tracking-[0.2em]">{t(stat.label)}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
