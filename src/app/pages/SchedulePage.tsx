import { Calendar, Clock, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function SchedulePage() {
  const { t } = useTranslation();

  const schedule = [
    { time: '08:00 - 08:45', class: `1-${t('schedule.lesson')}` },
    { time: '08:50 - 09:35', class: `2-${t('schedule.lesson')}` },
    { time: '09:40 - 10:25', class: `3-${t('schedule.lesson')}` },
    { time: '10:25 - 10:45', class: t('schedule.break') },
    { time: '10:45 - 11:30', class: `4-${t('schedule.lesson')}` },
    { time: '11:35 - 12:20', class: `5-${t('schedule.lesson')}` },
    { time: '12:25 - 13:10', class: `6-${t('schedule.lesson')}` },
    { time: '13:15 - 14:00', class: `7-${t('schedule.lesson')}` },
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
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight uppercase">{t('nav.schedule')}</h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl leading-relaxed font-bold opacity-90 uppercase tracking-widest">
              {t('schedule.pageSubtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Schedule Content */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Info Card */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-lg p-8 mb-12 shadow-xl" data-aos="fade-up">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-500 rounded-md flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 uppercase tracking-tight">{t('schedule.infoTitle')}</h3>
                  <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                    {t('schedule.infoDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Time Table */}
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800" data-aos="fade-up">
              <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] p-8 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-md flex items-center justify-center">
                    <Clock size={28} />
                  </div>
                  <h2 className="text-2xl font-black uppercase tracking-tight">{t('schedule.timeTitle')}</h2>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-4">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-6 rounded-lg transition-all border ${
                        item.class === t('schedule.break')
                          ? 'bg-amber-50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-900/30'
                          : 'bg-gray-50 dark:bg-gray-900 border-gray-100 dark:border-gray-800'
                      } group hover:border-[#0d89b1] hover:shadow-md`}
                    >
                      <span className={`font-black uppercase tracking-widest ${
                        item.class === t('schedule.break')
                          ? 'text-amber-600 dark:text-amber-400'
                          : 'text-gray-700 dark:text-gray-300 group-hover:text-[#0d89b1]'
                      }`}>
                        {item.class}
                      </span>
                      <span className="font-black text-gray-900 dark:text-white tabular-nums">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="mt-12 text-center" data-aos="fade-up">
              <button className="inline-flex items-center gap-3 px-10 py-5 bg-[#0d89b1] text-white rounded-lg hover:bg-[#0a6d8f] transition-all duration-300 font-black uppercase tracking-widest shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <Download size={22} />
                {t('schedule.downloadBtn')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
