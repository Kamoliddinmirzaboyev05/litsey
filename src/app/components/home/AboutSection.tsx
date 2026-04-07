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
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative" data-aos="fade-right">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3NTM1NzM2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="O'quvchilar"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#0d89b1] rounded-lg flex items-center justify-center shadow-xl border-4 border-white dark:border-gray-800">
              <div className="text-center text-white">
                <div className="text-5xl font-black mb-2 tracking-tighter">26+</div>
                <div className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Yillik tajriba</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div data-aos="fade-left">
            <div className="inline-block px-5 py-2 bg-[#0d89b1]/10 text-[#0d89b1] rounded-full text-xs font-black mb-6 uppercase tracking-[0.2em]">
              LITSEY HAQIDA
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 leading-tight uppercase tracking-tight">
              Farg‘ona viloyatining eng nufuzli akademik litseyi
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg font-medium">
              Farg‘ona Davlat Texnika Universiteti 1-son Akademik Litseyi 2000-yil 8-avgustda tashkil etilgan. 
              Litseyimiz Farg‘ona viloyatidagi eng nufuzli ta'lim muassasalaridan biri bo'lib, 
              o'quvchilarni aniq va tabiiy fanlar bo'yicha chuqur bilim olishlariga yordam beradi.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-5 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-white dark:bg-gray-800 shadow-lg group-hover:bg-[#0d89b1] group-hover:text-white rounded-md flex items-center justify-center transition-all duration-300 transform group-hover:rotate-6">
                        <Icon size={26} className="text-[#0d89b1] group-hover:text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900 dark:text-white mb-1 uppercase tracking-wider text-sm">{feature.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#0d89b1] text-white rounded-lg hover:bg-[#0a6d8f] transition-all duration-300 font-black uppercase tracking-widest shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Batafsil ma'lumot
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
