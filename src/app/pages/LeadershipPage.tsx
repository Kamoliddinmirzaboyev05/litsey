import { Phone, Mail, Clock, GraduationCap, FileText } from 'lucide-react';
import { leadershipData } from '../data/leadership';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function LeadershipPage() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'uz';

  // Sort by sort_order and filter only active members
  const activeLeadership = leadershipData
    .filter(member => member.is_active)
    .sort((a, b) => a.sort_order - b.sort_order);

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
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight uppercase">{t('nav.leadership')}</h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl leading-relaxed font-bold opacity-90 uppercase tracking-widest">
              {t('leadership.pageSubtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Leadership Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {activeLeadership.map((member, index) => {
              const translation = member.translations[currentLang] || member.translations['uz'];
              
              return (
                <div
                  key={member.id}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 border border-gray-100 dark:border-gray-800 group"
                >
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="relative h-96 md:h-auto overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <img
                        src={member.photo}
                        alt={member.full_name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2 p-12 flex flex-col justify-center relative">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-[#0d89b1]/5 rounded-bl-full -z-0"></div>
                      
                      <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-3 leading-tight uppercase tracking-tight">
                          {member.full_name}
                        </h3>
                        
                        <p className="text-[#0d89b1] font-black text-xl mb-4 uppercase tracking-widest">
                          {translation.position}
                        </p>

                        {member.academic_degree && (
                          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 mb-6 font-bold uppercase tracking-widest text-sm">
                            <GraduationCap size={20} className="text-[#0d89b1]" />
                            <span>{member.academic_degree}</span>
                          </div>
                        )}

                        {translation.bio && (
                          <div className="mb-8 p-6 bg-[#0d89b1]/5 rounded-lg border border-[#0d89b1]/10">
                            <div className="flex items-center gap-2 mb-2 text-[#0d89b1] font-black uppercase tracking-widest text-xs">
                              <FileText size={14} />
                              {t('leadership.bio')}
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                              {translation.bio}
                            </p>
                          </div>
                        )}

                        <div className="space-y-4">
                          {member.phone && (
                            <a
                              href={`tel:${member.phone.replace(/\s/g, '')}`}
                              className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-[#0d89b1] transition-all group/link"
                            >
                              <div className="w-10 h-10 bg-[#0d89b1]/10 rounded-md flex items-center justify-center group-hover/link:bg-[#0d89b1] group-hover/link:text-white transition-colors duration-500 shadow-inner">
                                <Phone size={20} />
                              </div>
                              <span className="text-lg font-black uppercase tracking-tight">{member.phone}</span>
                            </a>
                          )}

                          {member.email && (
                            <a
                              href={`mailto:${member.email}`}
                              className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-[#0d89b1] transition-all group/link"
                            >
                              <div className="w-10 h-10 bg-[#0d89b1]/10 rounded-md flex items-center justify-center group-hover/link:bg-[#0d89b1] group-hover/link:text-white transition-colors duration-500 shadow-inner">
                                <Mail size={20} />
                              </div>
                              <span className="text-lg font-black lowercase tracking-tight">{member.email}</span>
                            </a>
                          )}

                          {translation.reception_hours && (
                            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                              <div className="w-10 h-10 bg-[#0d89b1]/10 rounded-md flex items-center justify-center text-[#0d89b1] shadow-inner">
                                <Clock size={20} />
                              </div>
                              <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 font-black uppercase tracking-widest">{t('leadership.receptionHours')}</p>
                                <p className="text-lg font-black uppercase tracking-tight">{translation.reception_hours}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reception Note */}
      <section className="py-12 bg-white dark:bg-gray-950 transition-colors">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 dark:text-gray-400 italic font-bold">
            {t('leadership.receptionNote')}
          </p>
        </div>
      </section>
    </div>
  );
}
