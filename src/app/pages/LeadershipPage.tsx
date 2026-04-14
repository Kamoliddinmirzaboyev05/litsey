import { Phone, Mail, Clock, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { leadershipService } from '../services/leadershipService';
import { LeadershipMember } from '../types';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function LeadershipPage() {
  const { t, i18n } = useTranslation();
  const [leadership, setLeadership] = useState<LeadershipMember[]>([]);
  const [loading, setLoading] = useState(true);
  const currentLang = i18n.language || 'uz';

  useEffect(() => {
    const fetchLeadership = async () => {
      try {
        const data = await leadershipService.getManagement();
        // Sort by sort_order and filter only active members
        const activeLeadership = data
          .filter(member => member.is_active)
          .sort((a, b) => a.sort_order - b.sort_order);
        setLeadership(activeLeadership);
      } catch (error) {
        console.error('Error fetching leadership:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeadership();
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {leadership.map((member, index) => {
              const translation = leadershipService.getTranslation(member, currentLang);
              
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-950 rounded-[10px] overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col group"
                >
                  {/* Image Section */}
                  <div className="p-4">
                    <div className="aspect-[4/5] overflow-hidden rounded-[10px] bg-gray-100 dark:bg-gray-800">
                      <img
                        src={member.photo}
                        alt={member.full_name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="px-6 pb-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-black text-[#1a2b3b] dark:text-white mb-2 leading-tight uppercase tracking-tight">
                      {member.full_name}
                    </h3>
                    
                    <p className="text-blue-600 font-black text-sm mb-4 uppercase tracking-widest">
                      {translation.position}
                    </p>

                    {member.academic_degree && (
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium italic mb-6 leading-relaxed">
                        {member.academic_degree}
                      </p>
                    )}

                    <div className="mt-auto space-y-4">
                      {member.phone && (
                        <a
                          href={`tel:${member.phone.replace(/\s/g, '')}`}
                          className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors group/link"
                        >
                          <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-600 group-hover/link:bg-blue-600 group-hover/link:text-white transition-all duration-300">
                            <Phone size={18} />
                          </div>
                          <span className="text-sm font-bold tracking-tight">{member.phone}</span>
                        </a>
                      )}

                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors group/link"
                        >
                          <div className="w-10 h-10 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center text-red-500 group-hover/link:bg-red-500 group-hover/link:text-white transition-all duration-300">
                            <Mail size={18} />
                          </div>
                          <span className="text-sm font-bold tracking-tight lowercase">{member.email}</span>
                        </a>
                      )}

                      {translation.reception_hours && (
                        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 group/link">
                          <div className="w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center text-green-500">
                            <Clock size={18} />
                          </div>
                          <div>
                            <p className="text-[13px] font-bold text-gray-700 dark:text-gray-300 leading-tight">
                              {t('leadership.receptionHours')}: {translation.reception_hours}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
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
