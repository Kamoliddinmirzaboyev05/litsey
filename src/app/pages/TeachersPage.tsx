import { Mail, Phone, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { teacherService } from '../services/teacherService';
import { Teacher } from '../types';

export function TeachersPage() {
  const { t, i18n } = useTranslation();
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);
  const currentLang = i18n.language || 'uz';

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const data = await teacherService.getAllTeachers();
        // Sort by sort_order and filter only active members
        const activeTeachers = data.results
          .filter(teacher => teacher.is_active)
          .sort((a, b) => a.sort_order - b.sort_order);
        setTeachers(activeTeachers);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <Loader2 className="w-12 h-12 text-[#0d89b1] animate-spin" />
      </div>
    );
  }

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
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight uppercase">{t('nav.teachers')}</h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl leading-relaxed font-bold opacity-90 uppercase tracking-widest">
              {t('teachers.pageSubtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Teachers Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teachers.map((teacher, index) => {
              const translation = teacherService.getTranslation(teacher, currentLang);
              
              return (
                <motion.div
                  key={teacher.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-950 rounded-[10px] overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col group"
                >
                  {/* Image Section */}
                  <div className="p-4">
                    <div className="aspect-[4/5] overflow-hidden rounded-[10px] bg-gray-100 dark:bg-gray-800">
                      <img
                        src={teacher.photo}
                        alt={teacher.full_name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="px-6 pb-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-black text-[#1a2b3b] dark:text-white mb-2 leading-tight uppercase tracking-tight">
                      {teacher.full_name}
                    </h3>
                    
                    <p className="text-blue-600 font-black text-sm mb-4 uppercase tracking-widest">
                      {translation.position}
                    </p>

                    {(teacher.academic_degree || teacher.academic_rank) && (
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium italic mb-6 leading-relaxed">
                        {[teacher.academic_degree, teacher.academic_rank].filter(Boolean).join(', ')}
                      </p>
                    )}

                    <div className="mt-auto space-y-4">
                      {teacher.phone && (
                        <a
                          href={`tel:${teacher.phone.replace(/\s/g, '')}`}
                          className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors group/link"
                        >
                          <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 group-hover/link:bg-blue-600 group-hover/link:text-white transition-all duration-300">
                            <Phone size={18} />
                          </div>
                          <span className="text-sm font-bold tracking-tight">{teacher.phone}</span>
                        </a>
                      )}

                      {teacher.email && (
                        <a
                          href={`mailto:${teacher.email}`}
                          className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors group/link"
                        >
                          <div className="w-10 h-10 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center text-red-500 group-hover/link:bg-red-500 group-hover/link:text-white transition-all duration-300">
                            <Mail size={18} />
                          </div>
                          <span className="text-sm font-bold tracking-tight lowercase">{teacher.email}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-gray-950 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0d89b1] to-[#0a6d8f] rounded-lg p-16 text-center text-white shadow-2xl relative overflow-hidden" data-aos="zoom-in">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center mx-auto mb-10 shadow-inner border border-white/20">
                <Mail size={48} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-6xl font-black mb-8 uppercase tracking-tighter">
                {t('teachers.ctaTitle')}
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-bold opacity-90 uppercase tracking-widest">
                {t('teachers.ctaDesc')}
              </p>
              <a
                href="mailto:info@fstu.uz"
                className="inline-flex items-center gap-4 px-12 py-6 bg-white text-[#0d89b1] rounded-lg hover:bg-gray-100 transition-all font-black shadow-2xl hover:scale-105 uppercase tracking-[0.2em] text-sm"
              >
                <Mail size={28} />
                INFO@FSTU.UZ
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
