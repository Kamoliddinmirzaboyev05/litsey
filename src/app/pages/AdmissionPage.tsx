import { Calendar, FileText, Users, CheckCircle, Clock, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function AdmissionPage() {
  const stepsRef = useScrollReveal();
  const docsRef = useScrollReveal();
  const testRef = useScrollReveal();
  const ctaRef = useScrollReveal();

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
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Qabul 2026/2027</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Farg‘ona Davlat Texnika Universiteti 1-son Akademik Litseyiga qabul tartibi, talablar va muhim sanalar
          </p>
        </div>
      </div>

      {/* Info Banner */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-sky-50 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <Clock className="text-[#0d89b1] flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Muhim ma'lumot</h3>
                  <p className="text-gray-700 leading-relaxed">
                    O‘zbekiston Respublikasidagi barcha akademik litseylarga qabul my.edu.uz portal orqali yagona tartibda amalga oshiriladi. Qabul 2026-yil iyun-iyul oylarida bo‘ladi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section ref={stepsRef} className="py-16 bg-gray-50 reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Qabul bosqichlari</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-[#0d89b1]/10 rounded-xl flex items-center justify-center mb-5">
                      <Icon size={24} className="text-[#0d89b1]" />
                    </div>
                    <div className="text-[#0d89b1] font-bold text-sm mb-2">{index + 1}-bosqich</div>
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Test Information */}
      <section ref={testRef} className="py-16 bg-white reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Test sinovi</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {testInfo.parts.map((part, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">{part.name}</h3>
                  <div className="space-y-2 text-gray-600 text-sm">
                    <p>Savollar soni: <span className="font-semibold text-gray-900">{part.questions} ta</span></p>
                    <p>Maksimal ball: <span className="font-semibold text-gray-900">{part.score} ball</span></p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#0d89b1]/5 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Umumiy ko‘rsatkichlar</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Jami savollar soni: <span className="font-semibold">60 ta</span></li>
                    <li>• Maksimal ball: <span className="font-semibold">146 ball</span></li>
                    <li>• Test davomiyligi: <span className="font-semibold">2 soat</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Qabul yo‘nalishlari</h3>
                  <ul className="space-y-2 text-gray-700">
                    {testInfo.availableDirections.map((dir, i) => (
                      <li key={i}>• {dir}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section ref={docsRef} className="py-16 bg-gray-50 reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Kerakli hujjatlar</h2>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3 p-3">
                    <CheckCircle size={20} className="text-[#0d89b1] flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-16 bg-white reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] rounded-2xl p-10 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">
                Ro‘yxatdan o‘tish portali
              </h2>
              <p className="text-white/90 mb-8">
                Qabul haqida eng to‘liq va so‘nggi ma'lumotlarni my.edu.uz portalidan oling
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://my.edu.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-white text-[#0d89b1] rounded-xl hover:bg-gray-100 transition-colors font-semibold shadow-lg"
                >
                  <ExternalLink size={20} />
                  my.edu.uz
                </a>
                <a
                  href="tel:+998732413307"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-colors font-semibold border border-white/30"
                >
                  +99873 241-33-07
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}