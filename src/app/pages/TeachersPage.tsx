import { Mail, Award, CheckCircle } from 'lucide-react';
import { teachersData } from '../data/teachers';
import { motion } from 'framer-motion';

export function TeachersPage() {
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
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight uppercase">O'qituvchilar</h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl leading-relaxed font-bold opacity-90 uppercase tracking-widest">
              Farg‘ona Davlat Texnika Universiteti 1-son Akademik Litseyining malakali va tajribali o'qituvchilar jamoasi
            </p>
          </motion.div>
        </div>
      </div>

      {/* Teachers Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teachersData.map((teacher, index) => (
              <div
                key={teacher.id}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="bg-white dark:bg-gray-950 rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 group border border-gray-100 dark:border-gray-800"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-gray-200 dark:bg-gray-800">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[10px] font-black text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-full uppercase tracking-[0.2em] border border-white/20">
                    <Award size={14} />
                    <span>{teacher.degree}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-[#0d89b1] transition-colors uppercase tracking-tight">
                    {teacher.name}
                  </h3>
                  
                  <p className="text-[#0d89b1] font-black text-xs mb-6 uppercase tracking-[0.2em]">
                    {teacher.position}
                  </p>

                  <div className="flex items-start gap-4 mb-8 bg-gray-50 dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-inner">
                    <CheckCircle size={20} className="text-[#0d89b1] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-bold leading-relaxed">
                      {teacher.degree}
                    </p>
                  </div>

                  {teacher.subjects && (
                    <div className="flex flex-wrap gap-2">
                      {teacher.subjects.map((subject, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-[#0d89b1]/10 text-[#0d89b1] rounded-xl text-[10px] font-black uppercase tracking-widest border border-[#0d89b1]/20"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-gray-950 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0d89b1] to-[#0a6d8f] rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden" data-aos="zoom-in">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-inner border border-white/20">
                <Mail size={48} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-6xl font-black mb-8 uppercase tracking-tighter">
                O'qituvchilarimiz bilan bog'lanish
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-bold opacity-90 uppercase tracking-widest">
                Savol yoki takliflaringiz bo'lsa, litsey ma'muriyati bilan bog'laning. Biz har doim muloqotga tayyormiz!
              </p>
              <a
                href="mailto:info@fstu.uz"
                className="inline-flex items-center gap-4 px-12 py-6 bg-white text-[#0d89b1] rounded-[2rem] hover:bg-gray-100 transition-all font-black shadow-2xl hover:scale-105 uppercase tracking-[0.2em] text-sm"
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
