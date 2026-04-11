import { Mail, Award, CheckCircle, GraduationCap, Briefcase, Star, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { teacherService } from '../services/teacherService';
import { Teacher } from '../types';

export function TeachersPage() {
  const { t, i18n } = useTranslation();
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const data = await teacherService.getAllTeachers();
        setTeachers(data.results);
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teachers.map((teacher, index) => {
              const translation = teacherService.getTranslation(teacher, i18n.language);
              
              return (
                <div
                  key={teacher.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 group border border-gray-100 dark:border-gray-800 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden bg-gray-200 dark:bg-gray-800">
                    <img
                      src={teacher.photo}
                      alt={teacher.full_name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    {teacher.category_display && (
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[10px] font-black text-white bg-[#0d89b1]/80 backdrop-blur-md px-4 py-2 rounded-full uppercase tracking-[0.2em] border border-white/20">
                        <Star size={14} />
                        <span>{teacher.category_display}</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-grow">
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-[#0d89b1] transition-colors uppercase tracking-tight">
                      {teacher.full_name}
                    </h3>
                    
                    <p className="text-[#0d89b1] font-black text-xs mb-6 uppercase tracking-[0.2em]">
                      {translation.position}
                    </p>

                    <div className="space-y-4 mb-8">
                      {translation.subject && (
                        <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                          <CheckCircle size={18} className="text-[#0d89b1] flex-shrink-0" />
                          <span className="text-sm font-bold">{translation.subject}</span>
                        </div>
                      )}

                      {teacher.academic_degree && (
                        <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                          <GraduationCap size={18} className="text-[#0d89b1] flex-shrink-0" />
                          <span className="text-sm font-bold">{teacher.academic_degree} {teacher.academic_rank && `(${teacher.academic_rank})`}</span>
                        </div>
                      )}

                      {teacher.experience_years > 0 && (
                        <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                          <Briefcase size={18} className="text-[#0d89b1] flex-shrink-0" />
                          <span className="text-sm font-bold">{t('teachers.experience')}: {teacher.experience_years} {t('teachers.years')}</span>
                        </div>
                      )}
                    </div>

                    {translation.achievements && (
                      <div className="bg-[#0d89b1]/5 p-4 rounded-lg border border-[#0d89b1]/10 mb-6">
                        <p className="text-xs font-black uppercase tracking-widest text-[#0d89b1] mb-1">{t('teachers.achievements')}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed italic">
                          {translation.achievements}
                        </p>
                      </div>
                    )}

                    {teacher.email && (
                      <a
                        href={`mailto:${teacher.email}`}
                        className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-[#0d89b1] transition-colors text-xs font-black uppercase tracking-widest"
                      >
                        <Mail size={16} />
                        {teacher.email}
                      </a>
                    )}
                  </div>
                </div>
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
