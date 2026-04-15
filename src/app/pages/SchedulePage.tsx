import { Calendar, Clock, Download, FileText, Loader2, Info, BookOpen, Coffee } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { admissionService } from '../services/admissionService';
import { AdmissionDocument } from '../types';

export function SchedulePage() {
  const { t, i18n } = useTranslation();
  const [documents, setDocuments] = useState<AdmissionDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const data = await admissionService.getAdmissionDocuments();
        setDocuments(data);
      } catch (error) {
        console.error('Error fetching admission documents:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  const schedule = [
    { time: '08:00 - 08:45', class: `1-${t('schedule.lesson')}`, icon: BookOpen },
    { time: '08:50 - 09:35', class: `2-${t('schedule.lesson')}`, icon: BookOpen },
    { time: '09:40 - 10:25', class: `3-${t('schedule.lesson')}`, icon: BookOpen },
    { time: '10:25 - 10:45', class: t('schedule.break'), icon: Coffee, isBreak: true },
    { time: '10:45 - 11:30', class: `4-${t('schedule.lesson')}`, icon: BookOpen },
    { time: '11:35 - 12:20', class: `5-${t('schedule.lesson')}`, icon: BookOpen },
    { time: '12:25 - 13:10', class: `6-${t('schedule.lesson')}`, icon: BookOpen },
    { time: '13:15 - 14:00', class: `7-${t('schedule.lesson')}`, icon: BookOpen },
  ];

  // Find the specific schedule document from API
  const scheduleDoc = documents.find(doc => {
    const trans = admissionService.getTranslation(doc, 'uz');
    return trans.document_name.toLowerCase().includes('dars jadvali');
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 overflow-x-hidden">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#0d89b1] via-[#0d89b1] to-gray-900 text-white py-20 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 md:px-6 md:py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] md:text-xs font-black mb-6 md:mb-8 uppercase tracking-[0.3em] border border-white/10">
              <Calendar size={14} />
              {t('nav.schedule', 'DARS JADVALI')}
            </div>
            <h1 className="text-4xl md:text-8xl font-black mb-6 md:mb-8 leading-tight uppercase tracking-tight">
              {t('nav.schedule', 'Dars jadvali')}
            </h1>
            <p className="text-lg md:text-3xl text-white/80 leading-relaxed font-bold uppercase tracking-widest opacity-90 max-w-2xl">
              {t('schedule.pageSubtitle', 'Litseymizning dars jadvali va o\'quv rejasi')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#0d89b1]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#0d89b1]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-7xl mx-auto">
            
            {/* Left Column: Schedule List */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-950 rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-[#0d89b1] to-[#0d89b1] p-6 md:p-10 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 md:gap-5">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-xl md:rounded-2xl flex items-center justify-center shadow-inner">
                        <Clock size={28} className="md:w-8 md:h-8" />
                      </div>
                      <div>
                        <h2 className="text-xl md:text-3xl font-black uppercase tracking-tight">{t('schedule.timeTitle', 'Qo\'ng\'iroqlar jadvali')}</h2>
                        <p className="text-white/70 text-[10px] md:text-sm font-bold uppercase tracking-widest">Dushanba - Shanba</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-10">
                  <div className="space-y-3 md:space-y-4">
                    {schedule.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`flex flex-row items-center justify-between p-4 md:p-8 rounded-xl md:rounded-2xl transition-all border-2 group gap-4 ${
                            item.isBreak
                              ? 'bg-amber-50/50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-900/20 hover:border-amber-500'
                              : 'bg-gray-50/50 dark:bg-gray-900/50 border-gray-100 dark:border-gray-800 hover:border-[#0d89b1]'
                          }`}
                        >
                          <div className="flex items-center gap-3 md:gap-6">
                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                              item.isBreak
                                ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400'
                                : 'bg-white dark:bg-gray-800 text-gray-400 group-hover:bg-[#0d89b1] group-hover:text-white group-hover:rotate-12'
                            } shadow-sm`}>
                              <Icon size={18} className="md:w-6 md:h-6" />
                            </div>
                            <span className={`text-sm md:text-xl font-black uppercase tracking-widest ${
                              item.isBreak
                                ? 'text-amber-600 dark:text-amber-400'
                                : 'text-gray-900 dark:text-white'
                            }`}>
                              {item.class}
                            </span>
                          </div>
                          <div className={`text-sm md:text-2xl font-black tabular-nums px-4 py-1.5 md:px-6 md:py-2 rounded-lg md:rounded-xl text-right ${
                            item.isBreak
                              ? 'bg-amber-500 text-white'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white group-hover:bg-[#0d89b1] group-hover:text-white'
                          } transition-all duration-300`}>
                            {item.time}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Info & Download */}
            <div className="lg:col-span-5 space-y-6 md:space-y-8">
              {/* Info Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-100 dark:border-blue-900/30 rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-xl"
              >
                <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-500 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                    <Info size={24} className="md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight">{t('schedule.infoTitle', 'Muhim ma\'lumot')}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg font-medium leading-relaxed mb-6 md:mb-8 italic">
                  {t('schedule.infoDesc', 'Darslar Dushanba - Shanba kunlari o\'tkaziladi. Har bir dars 45 daqiqa davom etadi. Tanaffuslar 5 daqiqa, tushlik tanaffusi 20 daqiqa.')}
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3 text-[10px] md:text-sm font-black text-[#0d89b1] uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#0d89b1] rounded-full"></div>
                    Darslar 08:00 dan boshlanadi
                  </div>
                  <div className="flex items-center gap-3 text-[10px] md:text-sm font-black text-[#0d89b1] uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#0d89b1] rounded-full"></div>
                    Dars davomiyligi: 45 minut
                  </div>
                  <div className="flex items-center gap-3 text-[10px] md:text-sm font-black text-[#0d89b1] uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#0d89b1] rounded-full"></div>
                    Tushlik tanaffusi: 20 minut
                  </div>
                </div>
              </motion.div>

              {/* Download Card Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-900 dark:bg-black rounded-2xl md:rounded-3xl p-6 md:p-10 text-white shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-[#0d89b1]/20 rounded-bl-full blur-2xl"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-[#0d89b1]/10 rounded-2xl md:rounded-[30px] flex items-center justify-center text-[#0d89b1] mx-auto mb-6 md:mb-8 border border-[#0d89b1]/20">
                    <FileText size={32} className="md:w-12 md:h-12" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-3 md:mb-4">
                    {t('schedule.downloadBtn', 'To\'liq dars jadvali')}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 font-bold italic mb-6 md:mb-10 leading-relaxed">
                    Haftalik to'liq dars jadvalini yuklab olish orqali barcha fanlar va xonalar haqida batafsil ma'lumotga ega bo'ling.
                  </p>

                  {loading ? (
                    <div className="flex justify-center py-4 md:py-6">
                      <Loader2 className="w-8 h-8 md:w-10 md:h-10 text-[#0d89b1] animate-spin" />
                    </div>
                  ) : scheduleDoc ? (
                    <div className="space-y-4 md:space-y-6">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 mb-6 md:mb-8 text-left group hover:bg-white/10 transition-colors">
                        <div className="flex items-center gap-3 md:gap-4 mb-1 md:mb-2">
                          <FileText size={18} className="text-[#0d89b1]" />
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0d89b1]">Fayl tayyor</span>
                        </div>
                        <h4 className="font-black uppercase tracking-tight text-[11px] md:text-sm text-white mb-1 truncate">
                          {admissionService.getTranslation(scheduleDoc, i18n.language).document_name}
                        </h4>
                        <p className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                          {admissionService.getTranslation(scheduleDoc, i18n.language).note}
                        </p>
                      </div>

                      <a
                        href={scheduleDoc.document_file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 md:gap-4 w-full py-4 md:py-6 bg-[#0d89b1] hover:bg-[#0d89b1] text-white rounded-xl md:rounded-[20px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[11px] md:text-sm transition-all duration-300 shadow-2xl shadow-[#0d89b1]/40 hover:-translate-y-1"
                      >
                        <Download size={18} className="md:w-5 md:h-5" />
                        {t('schedule.downloadBtn', 'Hozir yuklab olish')}
                      </a>
                    </div>
                  ) : (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 md:p-6 text-red-500 font-black uppercase tracking-widest text-[10px] md:text-xs">
                      Hozircha yuklab olish uchun fayl mavjud emas
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
