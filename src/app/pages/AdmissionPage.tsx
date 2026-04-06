import { Calendar, FileText, Users, CheckCircle, AlertCircle } from 'lucide-react';

export function AdmissionPage() {
  const steps = [
    {
      icon: FileText,
      title: 'Hujjatlar tayyorlash',
      description: 'Ariza, passport nusxasi, 9-sinf attestati va 3x4 rasm tayyorlang',
    },
    {
      icon: Calendar,
      title: 'Ro\'yxatdan o\'tish',
      description: 'Litsey veb-saytida yoki bevosita litsey ma\'muriyatida ro\'yxatdan o\'ting',
    },
    {
      icon: Users,
      title: 'Test topshirish',
      description: 'Matematika, fizika, ingliz tili va mantiqiy fikrlash bo\'yicha test sinovlari',
    },
    {
      icon: CheckCircle,
      title: 'Natijalarni kutish',
      description: 'Test natijalari e\'lon qilinadi va qabul qilingan nomzodlar bilan shartnoma tuziladi',
    },
  ];

  const requirements = [
    '9-sinf attestati (kamida 4.0 o\'rtacha ball)',
    'Passport nusxasi',
    'Ota-onaning pasport nusxasi',
    '3x4 o\'lchamdagi 4 dona rasm',
    'Tibbiy ma\'lumotnoma (086-u shakl)',
    'Ariza (litsey ma\'muriyatida to\'ldiriladi)',
  ];

  const subjects = [
    { name: 'Matematika', questions: 30, time: '60 daqiqa' },
    { name: 'Fizika', questions: 20, time: '40 daqiqa' },
    { name: 'Ingliz tili', questions: 20, time: '40 daqiqa' },
    { name: 'Mantiqiy fikrlash', questions: 20, time: '40 daqiqa' },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Qabul 2026/2027</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            M.S.Vosiqova nomidagi akademik litseymizga qabul jarayoni va talablar
          </p>
        </div>
      </div>

      {/* Important Dates */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-l-4 border-yellow-500 rounded-lg p-6 mb-12">
              <div className="flex items-start gap-4">
                <AlertCircle className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Muhim sanalar</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Hujjatlar qabuli: 15 aprel - 15 may 2026</li>
                    <li>• Test sinovlari: 25-30 may 2026</li>
                    <li>• Natijalar e'lon qilinishi: 5 iyun 2026</li>
                    <li>• Shartnoma tuzish: 10-20 iyun 2026</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Qabul jarayoni</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#0d89b1] to-[#0a6d8f] rounded-xl flex items-center justify-center text-white font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Icon size={24} className="text-[#0d89b1]" />
                            <h3 className="font-bold text-gray-900">{step.title}</h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Kerakli hujjatlar</h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-[#0d89b1] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Test Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Test sinovlari</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {subjects.map((subject, index) => (
                <div key={index} className="bg-gradient-to-br from-[#0d89b1] to-[#0a6d8f] rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">{subject.name}</h3>
                  <div className="space-y-2">
                    <p className="text-white/90">Savollar soni: {subject.questions} ta</p>
                    <p className="text-white/90">Vaqt: {subject.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Test haqida ma'lumot</h3>
              <p className="text-gray-700 leading-relaxed">
                Barcha testlar elektron tizim orqali amalga oshiriladi. Har bir fan uchun 
                to'plangan ball asosida umumiy reyting tuziladi. Eng yuqori ball to'plagan 
                nomzodlar litseymizga qabul qilinadi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Savol yoki takliflaringiz bormi?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Qabul jarayoni haqida qo'shimcha ma'lumot olish uchun biz bilan bog'laning
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+998712345678"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0d89b1] rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg"
              >
                <Calendar size={20} />
                +998 (71) 234-56-78
              </a>
              <a
                href="mailto:qabul@vosiqova-litsey.uz"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors font-semibold border border-white/30"
              >
                qabul@vosiqova-litsey.uz
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
