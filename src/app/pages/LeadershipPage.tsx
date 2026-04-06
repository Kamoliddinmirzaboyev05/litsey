import { Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { leadershipData } from '../data/leadership';
import { motion } from 'framer-motion';

export function LeadershipPage() {
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
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight uppercase">Rahbariyat</h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl leading-relaxed font-bold opacity-90 uppercase tracking-widest">
              Farg‘ona Davlat Texnika Universiteti 1-son Akademik Litseyining rahbar xodimlari
            </p>
          </motion.div>
        </div>
      </div>

      {/* Leadership Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {leadershipData.map((member, index) => (
              <div
                key={member.id}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                className="bg-white dark:bg-gray-950 rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 border border-gray-100 dark:border-gray-800 group"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Image */}
                  <div className="relative h-96 md:h-auto overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 p-12 flex flex-col justify-center relative">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#0d89b1]/5 rounded-bl-full -z-0"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-3 leading-tight uppercase tracking-tight">
                        {member.name}
                      </h3>
                      
                      <p className="text-[#0d89b1] font-black text-xl mb-10 uppercase tracking-widest">
                        {member.position}
                      </p>

                      <div className="space-y-6">
                        {member.phone && (
                          <a
                            href={`tel:${member.phone.replace(/\s/g, '')}`}
                            className="flex items-center gap-6 text-gray-700 dark:text-gray-300 hover:text-[#0d89b1] transition-all group/link"
                          >
                            <div className="w-14 h-14 bg-[#0d89b1]/10 rounded-2xl flex items-center justify-center group-hover/link:bg-[#0d89b1] group-hover/link:text-white transition-colors duration-500 shadow-inner">
                              <Phone size={28} />
                            </div>
                            <span className="text-xl font-black uppercase tracking-tight">{member.phone}</span>
                          </a>
                        )}

                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="flex items-center gap-6 text-gray-700 dark:text-gray-300 hover:text-[#0d89b1] transition-all group/link"
                          >
                            <div className="w-14 h-14 bg-[#0d89b1]/10 rounded-2xl flex items-center justify-center group-hover/link:bg-[#0d89b1] group-hover/link:text-white transition-colors duration-500 shadow-inner">
                              <Mail size={28} />
                            </div>
                            <span className="text-xl font-black lowercase tracking-tight">{member.email}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reception Hours */}
      <section className="py-24 bg-white dark:bg-gray-950 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gray-50 dark:bg-gray-900 rounded-[3rem] p-12 border border-gray-100 dark:border-gray-800 shadow-2xl relative overflow-hidden" data-aos="zoom-in">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0d89b1]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 bg-[#0d89b1] rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <Clock size={36} />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight uppercase">Qabul kunlari</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-white dark:bg-gray-950 rounded-[2rem] p-10 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all group">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-inner">
                      <CheckCircle size={24} />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight">Direktor qabuli</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-500 dark:text-gray-400 font-black uppercase tracking-widest text-xs">Dushanba - Juma</p>
                    <p className="text-[#0d89b1] font-black text-4xl tracking-tighter">14:00 - 17:00</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-6 bg-gray-50 dark:bg-gray-900 p-4 rounded-2xl border-l-4 border-[#0d89b1] font-bold">
                      * Oldindan telefon orqali vaqt belgilash tavsiya etiladi
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-950 rounded-[2rem] p-10 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all group">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-inner">
                      <CheckCircle size={24} />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight">O'quv bo'limi</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-500 dark:text-gray-400 font-black uppercase tracking-widest text-xs">Dushanba - Shanba</p>
                    <p className="text-[#0d89b1] font-black text-4xl tracking-tighter">09:00 - 17:00</p>
                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mt-6 font-bold uppercase tracking-widest">
                      <Clock size={18} className="text-[#0d89b1]" />
                      <span>Tushlik: 13:00 - 14:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
