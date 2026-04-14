import { Calculator, FlaskConical, Globe, Cpu, Microscope, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function SubjectsPage() {
  const { t } = useTranslation();

  const subjects = [
    {
      icon: Calculator,
      name: t('subjects.math.name'),
      description: t('subjects.math.desc'),
      hours: 8,
    },
    {
      icon: Zap,
      name: t('subjects.physics.name'),
      description: t('subjects.physics.desc'),
      hours: 6,
    },
    {
      icon: FlaskConical,
      name: t('subjects.chemistry.name'),
      description: t('subjects.chemistry.desc'),
      hours: 5,
    },
    {
      icon: Globe,
      name: t('subjects.english.name'),
      description: t('subjects.english.desc'),
      hours: 6,
    },
    {
      icon: Cpu,
      name: t('subjects.it.name'),
      description: t('subjects.it.desc'),
      hours: 4,
    },
    {
      icon: Microscope,
      name: t('subjects.biology.name'),
      description: t('subjects.biology.desc'),
      hours: 4,
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] text-white py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight uppercase">{t('nav.subjects')}</h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl leading-relaxed font-bold opacity-90 uppercase tracking-widest">
              {t('subjects.pageSubtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Subjects Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {subjects.map((subject, index) => {
              const Icon = subject.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all group"
                >
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 bg-[#0d89b1]/10 rounded-xl flex items-center justify-center group-hover:bg-[#0d89b1] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 shadow-inner">
                      <Icon size={32} className="text-[#0d89b1] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight group-hover:text-[#0d89b1] transition-colors">
                        {subject.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                        <span>{t('subjects.weeklyHours')}:</span>
                        <span className="text-[#0d89b1]">{subject.hours} {t('subjects.hoursPerWeek')}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                    {subject.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
