import { Calendar, FileText, Users, CheckCircle, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function AdmissionPage() {
  const { t } = useTranslation();
  const steps = [
    {
      icon: FileText,
      title: 'my.edu.uz portalidan ro‘yxatdan o‘tish',
      description: '2026-yil iyun oyida my.edu.uz portaliga o‘tib litsey nomidan ariza qoldiring',
    },
    {
      icon: Calendar,
      title: 'Vaqtni belgilash',
      description: 'Test topshirish vaqtini tanlang va xatoni saqlab oling',
    },
    {
      icon: Users,
      title: 'Test sinovi',
      description: 'FDTU binosida 60 ta savoldan iborat test sinovini topshiring',
    },
    {
      icon: CheckCircle,
      title: 'Natijalarni kuzatish',
      description: "Reyting natijalari e'lon qilingach, o‘tingizni tasdiqlang",
    },
  ];

  const requirements = [
    '9-sinf bitiruvchisi bo‘lish',
    'my.edu.uz portalidan ro‘yxatdan o‘tganlik',
    'Pasport yoki tug‘ilganlik guvohnomasi',
    '3x4 o‘lchamdagi elektron rasm',
    'Tibbiy ma’lumotnoma (086-u shakl)',
  ];

  const testInfo = {
    totalQuestions: 60,
    maxScore: 146,
    parts: [
      { name: 'Mantiqiy fikrlash (IQ)', questions: 20, score: 46 },
      { name: '1-asosiy fan', questions: 20, score: 50 },
      { name: '2-asosiy fan', questions: 20, score: 50 },
    ],
    availableDirections: ['Tabiiy fanlar', 'Aniq fanlar (iqtisod)']
  };

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
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight uppercase">{t('nav.admission')} 2026/2027</h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl leading-relaxed font-bold opacity-90 uppercase tracking-widest">
              Farg‘ona Davlat Texnika Universiteti 1-son Akademik Litseyiga qabul tartibi, talablar va muhim sanalar
            </p>
          </motion.div>
        </div>
      </div>

      {/* Info Banner */}
      <section className="py-12 bg-white dark:bg-gray-950 transition-colors" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-10 border border-blue-100 dark:border-blue-900/30 shadow-xl">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-blue-500 rounded-md flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tight">Muhim ma'lumot</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-medium">
                    O‘zbekiston Respublikasidagi barcha akademik litseylarga qabul my.edu.uz portal orqali yagona tartibda amalga oshiriladi. Qabul 2026-yil iyun-iyul oylarida bo‘ladi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">Qabul bosqichlari</h2>
              <div className="w-24 h-2 bg-[#0d89b1] mx-auto rounded-full shadow-lg shadow-[#0d89b1]/30"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={index} 
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="bg-white dark:bg-gray-950 rounded-lg p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 group hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 bg-[#0d89b1]/10 rounded-md flex items-center justify-center mb-8 group-hover:bg-[#0d89b1] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 shadow-inner">
                      <Icon size={32} className="text-[#0d89b1] group-hover:text-white" />
                    </div>
                    <div className="text-[#0d89b1] font-black text-xs mb-3 uppercase tracking-[0.2em] opacity-80">{index + 1}-bosqich</div>
                    <h3 className="font-black text-gray-900 dark:text-white mb-4 text-xl leading-tight uppercase tracking-tight">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Test Information */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">Test sinovi</h2>
              <div className="w-24 h-2 bg-[#0d89b1] mx-auto rounded-full shadow-lg shadow-[#0d89b1]/30"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {testInfo.parts.map((part, index) => (
                <div 
                  key={index} 
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-gray-50 dark:bg-gray-900 rounded-lg p-10 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 group"
                >
                  <h3 className="font-black text-gray-900 dark:text-white mb-6 text-2xl uppercase tracking-tight">{part.name}</h3>
                  <div className="space-y-4 text-gray-600 dark:text-gray-400 font-bold">
                    <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-3">
                      <span className="uppercase text-xs tracking-widest">Savollar soni:</span>
                      <span className="font-black text-gray-900 dark:text-white text-lg">{part.questions} ta</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="uppercase text-xs tracking-widest">Maksimal ball:</span>
                      <span className="font-black text-[#0d89b1] text-lg">{part.score} ball</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#0d89b1] to-[#0a6d8f] rounded-lg p-12 text-white shadow-2xl relative overflow-hidden" data-aos="fade-up">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="grid md:grid-cols-2 gap-16 relative z-10">
                <div>
                  <h3 className="text-3xl font-black mb-8 border-b border-white/20 pb-6 uppercase tracking-tight">Umumiy ko‘rsatkichlar</h3>
                  <ul className="space-y-6 text-xl font-bold">
                    <li className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-white rounded-full shadow-lg"></div>
                      <span className="uppercase tracking-widest text-sm opacity-90">Jami savollar soni:</span>
                      <span className="font-black text-3xl tracking-tighter ml-auto">60 TA</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-white rounded-full shadow-lg"></div>
                      <span className="uppercase tracking-widest text-sm opacity-90">Maksimal ball:</span>
                      <span className="font-black text-3xl tracking-tighter ml-auto">146 BALL</span>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-white rounded-full shadow-lg"></div>
                      <span className="uppercase tracking-widest text-sm opacity-90">Test davomiyligi:</span>
                      <span className="font-black text-3xl tracking-tighter ml-auto">2 SOAT</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-8 border-b border-white/20 pb-6 uppercase tracking-tight">Qabul yo‘nalishlari</h3>
                  <div className="flex flex-wrap gap-4 mb-8">
                    {testInfo.availableDirections.map((dir, i) => (
                      <div key={i} className="bg-white text-[#0d89b1] px-8 py-4 rounded-md font-black text-lg shadow-xl uppercase tracking-widest">
                        {dir}
                      </div>
                    ))}
                  </div>
                  <p className="text-xl text-white/90 leading-relaxed font-bold opacity-90 uppercase tracking-widest text-sm">
                    Test sinovlari Farg‘ona Davlat Texnika Universiteti (FDTU) hududida maxsus tayyorlangan xonalarda o‘tkaziladi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">Kerakli hujjatlar</h2>
              <div className="w-24 h-2 bg-[#0d89b1] mx-auto rounded-full shadow-lg shadow-[#0d89b1]/30"></div>
            </div>
            
            <div className="bg-white dark:bg-gray-950 rounded-lg p-12 shadow-2xl border border-gray-100 dark:border-gray-800" data-aos="fade-up">
              <div className="grid md:grid-cols-2 gap-8">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center gap-6 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group">
                    <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-md flex items-center justify-center text-[#0d89b1] shadow-lg group-hover:bg-[#0d89b1] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                      <CheckCircle size={28} />
                    </div>
                    <span className="text-gray-800 dark:text-gray-200 font-black text-lg uppercase tracking-tight">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-gray-950 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#0d89b1] to-[#0a6d8f] rounded-lg p-16 text-center text-white shadow-2xl relative overflow-hidden" data-aos="zoom-in">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-6xl font-black mb-8 uppercase tracking-tighter">
                  Ro‘yxatdan o‘tish portali
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-bold opacity-90 uppercase tracking-widest">
                  Qabul haqida eng to‘liq va so‘nggi ma'lumotlarni my.edu.uz portalidan oling. Arizalar onlayn tarzda qabul qilinadi.
                </p>
                
                <div className="flex flex-wrap justify-center gap-8">
                  <a
                    href="https://my.edu.uz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 px-12 py-6 bg-white text-[#0d89b1] rounded-lg hover:bg-gray-100 transition-all font-black shadow-2xl hover:scale-105 uppercase tracking-[0.2em] text-sm"
                  >
                    <ExternalLink size={28} />
                    MY.EDU.UZ PORTALI
                  </a>
                  <a
                    href="tel:+998732413307"
                    className="inline-flex items-center gap-4 px-12 py-6 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-all font-black border border-white/30 hover:scale-105 uppercase tracking-[0.2em] text-sm"
                  >
                    <Clock size={28} />
                    +99873 241-33-07
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
