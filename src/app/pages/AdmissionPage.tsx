import { Calendar, FileText, Users, CheckCircle, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function AdmissionPage() {
  const { t } = useTranslation();
  const steps = [
    {
      icon: FileText,
      title: t('admission.step1Title'),
      description: t('admission.step1Desc'),
    },
    {
      icon: Calendar,
      title: t('admission.step2Title'),
      description: t('admission.step2Desc'),
    },
    {
      icon: Users,
      title: t('admission.step3Title'),
      description: t('admission.step3Desc'),
    },
    {
      icon: CheckCircle,
      title: t('admission.step4Title'),
      description: t('admission.step4Desc'),
    },
  ];

  const requirements = [
    t('admission.req1'),
    t('admission.req2'),
    t('admission.req3'),
    t('admission.req4'),
    t('admission.req5'),
  ];

  const testInfo = {
    totalQuestions: 60,
    maxScore: 146,
    parts: [
      { name: t('admission.iqTitle'), questions: t('admission.iqQuestions'), score: t('admission.iqScore') },
      { name: t('admission.subject1Title'), questions: t('admission.subject1Questions'), score: t('admission.subject1Score') },
      { name: t('admission.subject2Title'), questions: t('admission.subject2Questions'), score: t('admission.subject2Score') },
    ],
    availableDirections: [t('admission.natural'), t('admission.exact')]
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
              {t('admission.pageSubtitle')}
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
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tight">{t('admission.importantInfo')}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-medium">
                    {t('admission.importantDesc')}
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
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">{t('admission.stepsTitle')}</h2>
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
                    className="bg-white dark:bg-gray-950 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-gray-800 relative group hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#0d89b1] text-white rounded-full flex items-center justify-center font-black shadow-lg">
                      {index + 1}
                    </div>
                    <div className="w-16 h-16 bg-[#0d89b1]/10 rounded-md flex items-center justify-center mb-6 group-hover:bg-[#0d89b1] group-hover:text-white transition-all">
                      <Icon size={32} className="text-[#0d89b1] group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 leading-tight uppercase tracking-wider">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Test Info & Requirements */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Test Structure */}
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-10 uppercase tracking-tight">{t('admission.testTitle')}</h2>
              <div className="space-y-6">
                {testInfo.parts.map((part, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-100 dark:border-gray-800 flex items-center justify-between group hover:border-[#0d89b1] transition-all">
                    <div>
                      <h4 className="font-black text-gray-900 dark:text-white uppercase tracking-wider">{part.name}</h4>
                      <p className="text-gray-500 dark:text-gray-400 font-medium">{part.questions}</p>
                    </div>
                    <div className="text-2xl font-black text-[#0d89b1]">{part.score}</div>
                  </div>
                ))}
                
                <div className="bg-[#0d89b1] text-white p-8 rounded-lg shadow-xl">
                  <h4 className="font-black mb-4 uppercase tracking-widest text-sm opacity-80">{t('admission.totalTitle')}</h4>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-xs uppercase font-black tracking-widest opacity-70 mb-1">{t('admission.totalQuestions')}</div>
                      <div className="text-2xl font-black">{t('admission.totalQuestionsValue')}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase font-black tracking-widest opacity-70 mb-1">{t('admission.maxScore')}</div>
                      <div className="text-2xl font-black">{t('admission.maxScoreValue')}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase font-black tracking-widest opacity-70 mb-1">{t('admission.duration')}</div>
                      <div className="text-2xl font-black">{t('admission.durationValue')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions & Requirements */}
            <div className="space-y-12" data-aos="fade-left">
              <div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">{t('admission.directionsTitle')}</h3>
                <div className="flex flex-wrap gap-4">
                  {testInfo.availableDirections.map((dir, index) => (
                    <div key={index} className="px-6 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full font-black uppercase tracking-widest text-sm border border-blue-100 dark:border-blue-900/30">
                      {dir}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-gray-500 dark:text-gray-400 font-medium leading-relaxed italic">
                  * {t('admission.testLocation')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">{t('admission.documentsTitle')}</h3>
                <div className="space-y-4">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center">
                        <CheckCircle size={16} />
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 font-bold">{req}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0d89b1]/10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">{t('admission.portalTitle')}</h2>
            <p className="text-white/70 text-lg mb-10 font-medium leading-relaxed">
              {t('admission.portalDesc')}
            </p>
            <a
              href="https://my.edu.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-6 bg-white text-[#0d89b1] rounded-lg hover:bg-gray-100 transition-all duration-300 font-black uppercase tracking-widest shadow-2xl hover:-translate-y-1"
            >
              {t('admission.portalBtn')}
              <ExternalLink size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
