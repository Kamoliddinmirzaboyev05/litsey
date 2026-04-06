import { GraduationCap, Globe, FlaskConical, BookOpen, Building2 } from 'lucide-react';

export function WhyUsSection() {
  const reasons = [
    {
      icon: GraduationCap,
      title: '100% bitiruvchilar talaba bo\'ladi',
      description: 'Litseymiz barcha bitiruvchilari oliy ta\'lim muassasalariga qabul qilinadi, ko\'plari yetakchi universitetlarga kiradi.',
    },
    {
      icon: Globe,
      title: 'Ingliz tili 60+ ball',
      description: 'Kuchaytirilgan ingliz tili dasturi orqali o\'quvchilarimiz IELTS 6.0+ natijalariga erishadilar.',
    },
    {
      icon: FlaskConical,
      title: 'Zamonaviy STEM laboratoriya',
      description: 'Yangi jihozlangan STEM laboratoriyasida amaliy tajribalar va ilmiy loyihalar amalga oshiriladi.',
    },
    {
      icon: BookOpen,
      title: 'Bepul qo\'shimcha kurslar',
      description: 'Dasturlash, robotika, olimpiada matematikasi va boshqa 25+ to\'garak mutlaqo bepul.',
    },
    {
      icon: Building2,
      title: 'TDYU huzurida',
      description: 'Toshkent davlat yuridik universiteti huzurida faoliyat ko\'rsatish yuqori standartlarni ta\'minlaydi.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#0d89b1]/10 text-[#0d89b1] rounded-full text-sm font-semibold mb-4">
            BIZNING AFZALLIKLARIMIZ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nima uchun aynan biz?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Litseymizni tanlash uchun bir necha asosiy sabablarga e'tibor bering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0d89b1]/30"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#0d89b1] to-[#0a6d8f] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0d89b1] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#0d89b1]/5 rounded-bl-full -z-10"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
