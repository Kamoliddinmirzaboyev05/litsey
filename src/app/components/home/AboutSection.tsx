import { CheckCircle, Award, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router';

export function AboutSection() {
  const features = [
    {
      icon: Award,
      title: 'Yuqori sifatli ta\'lim',
      description: 'Zamonaviy o\'quv dasturlari va innovatsion ta\'lim texnologiyalari',
    },
    {
      icon: Users,
      title: 'Malakali o\'qituvchilar',
      description: '45+ yuqori malakali va tajribali pedagog xodimlari',
    },
    {
      icon: BookOpen,
      title: 'Keng fanlar doirasi',
      description: 'Aniq fanlar, ingliz tili va STEM yo\'nalishlari',
    },
    {
      icon: CheckCircle,
      title: '100% natija',
      description: 'Barcha bitiruvchilar oliy ta\'lim muassasalariga kiradi',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3NTM1NzM2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="O'quvchilar"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#0d89b1] rounded-2xl flex items-center justify-center shadow-xl">
              <div className="text-center text-white">
                <div className="text-5xl font-bold mb-2">25+</div>
                <div className="text-sm font-medium">Yillik tajriba</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-[#0d89b1]/10 text-[#0d89b1] rounded-full text-sm font-semibold mb-4">
              LITSEY HAQIDA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Toshkent shahrining yetakchi ta'lim muassasalaridan biri
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              M.S.Vosiqova nomidagi akademik litsey 1998 yildan beri faoliyat yuritib kelmoqda. 
              Litseymiz Toshkent davlat yuridik universiteti huzurida tashkil etilgan bo'lib, 
              o'quvchilarni aniq fanlar va yuridik yo'nalishlar bo'yicha chuqur bilim olishlariga 
              yordam beradi.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Zamonaviy o'quv xonalari, STEM laboratoriyasi, axborot-kutubxona markazi va 
              sport majmuasi o'quvchilarimizning har tomonlama rivojlanishiga xizmat qiladi.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#0d89b1]/10 rounded-lg flex items-center justify-center">
                        <Icon size={24} className="text-[#0d89b1]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0d89b1] text-white rounded-lg hover:bg-[#0a6d8f] transition-colors font-semibold shadow-lg"
            >
              Batafsil ma'lumot
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
