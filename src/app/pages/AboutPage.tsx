import { Award, Target, Eye, Heart, Building2, Calendar, Phone, MapPin, User, GraduationCap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function AboutPage() {
  const { t } = useTranslation();

  const generalInfo = [
    {
      icon: Building2,
      label: t('nav.about'), // Using key as label for simplicity in this example
      value: 'Farg‘ona Davlat Texnika Universiteti 1-son Akademik Litseyi'
    },
    {
      icon: Calendar,
      label: 'Tashkil etilgan sana',
      value: '2000-yil 8-avgust'
    },
    {
      icon: User,
      label: 'Direktor',
      value: 'Boltaboyev Ikboljon Tursunalievich'
    },
    {
      icon: MapPin,
      label: 'Manzil',
      value: 'Farg‘ona shahri, Muruvvat MFY, Farg‘ona ko‘chasi, 84-uy'
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: '+99873 241-33-07'
    },
    {
      icon: GraduationCap,
      label: 'Ta’sischi',
      value: 'O‘zbekiston Respublikasi Oliy ta’lim, fan va innovatsiyalar vazirligi'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Maqsadimiz',
      description: 'Har bir o‘quvchini chuqur bilimga ega, ijodiy fikrlash qobiliyatiga ega va oliy ta’limga tayyor shaxs sifatida tarbiyalash.',
    },
    {
      icon: Eye,
      title: 'Vazifamiz',
      description: 'Zamonaviy texnika va aniq fanlar sohasida yuqori malakali mutaxassislar tayyorlash, FDTU bilan yaqin hamkorlikda sifatli ta’lim berish.',
    },
    {
      icon: Heart,
      title: 'Qadriyatlarimiz',
      description: 'Halollik, mas’uliyat, innovatsion yondashuv, ilimga hurmat va doimiy o‘z-o‘zini takomillashtirish.',
    },
  ];

  const advantages = [
    'Farg‘ona viloyatidagi eng nufuzli akademik litsey',
    'FDTU professor-o‘qituvchilari tomonidan dars berish',
    'Chuqurlashtirilgan aniq va tabiiy fanlar dasturlari',
    'Qulay sharoitdagi yotoqxona',
    '3 mahal imtiyozli ovqatlanish tizimi',
    'Zamonaviy sport maydonchalari va inshootlari',
    'FDTU barcha resurslaridan foydalanish imkoni',
    'Har yili 90% dan ortiq bitiruvchilar oliy ta’limga kiradi'
  ];

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
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight uppercase">{t('nav.about')}</h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl leading-relaxed font-bold opacity-90 uppercase tracking-widest">
              Farg‘ona Davlat Texnika Universiteti 1-son Akademik Litseyi — viloyatdagi eng nufuzli ta'lim muassasalaridan biri. 2000-yildan buyon yuqori sifatli ta'lim berib kelmoqda.
            </p>
          </motion.div>
        </div>
      </div>

      {/* General Info Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">Umumiy ma'lumotlar</h2>
            <div className="w-24 h-2 bg-[#0d89b1] mx-auto rounded-full shadow-lg shadow-[#0d89b1]/30"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {generalInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white dark:bg-gray-950 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 group hover:-translate-y-2"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-[#0d89b1]/10 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-[#0d89b1] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                      <Icon size={32} className="text-[#0d89b1] group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-400 dark:text-gray-500 mb-2 uppercase tracking-[0.2em]">{item.label}</p>
                      <p className="text-lg font-black text-gray-900 dark:text-white leading-tight uppercase tracking-tight">{item.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-white dark:bg-gray-950 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div data-aos="fade-right">
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-10 leading-tight uppercase tracking-tight">Litsey tarixi</h2>
                <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400 space-y-8 font-medium">
                  <p className="text-xl leading-relaxed">
                    FDTU 1-son Akademik Litseyi 2000-yil 8-avgust kuni Farg‘ona Politexnika Instituti (FarPI) qoshida ochilgan. Dastlab texnika va aniq fanlarga ixtisoslashtirilgan holda faoliyat boshlagan.
                  </p>
                  <p className="text-xl leading-relaxed">
                    Farg‘ona Politexnika Instituti Farg‘ona Davlat Texnika Universiteti (FDTU)ga aylangandan so‘ng litsey "1-son akademik litsey" nomini oldi va hozirgacha universitet bilan eng yaqin hamkorlikda ishlab kelmoqda.
                  </p>
                  <p className="text-xl leading-relaxed font-black text-gray-900 dark:text-white uppercase tracking-tight opacity-90">
                    Hozirgi kunda litsey Farg‘ona viloyatidagi eng nufuzli va eng zo'r natijalarni ko'rsatayotgan akademik litseylar qatoriga kiradi. Universitetning professor-o‘qituvchilari litseyda dars berishadi.
                  </p>
                  
                </div>
              </div>
              <div className="relative" data-aos="fade-left">
                <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                  <img 
                    src="https://avatars.mds.yandex.net/get-altay/3511135/2a000001794953509e5d099beac03556466a/L_height" 
                    alt="Litsey tarixi" 
                    className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-10 z-10 -left-10 w-64 h-64 bg-[#0d89b1] rounded-lg  opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">
              Maqsad va qadriyatlarimiz
            </h2>
            <div className="w-24 h-2 bg-[#0d89b1] mx-auto rounded-full shadow-lg shadow-[#0d89b1]/30"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index} 
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className="bg-white dark:bg-gray-950 rounded-lg p-12 shadow-xl text-center hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 group hover:-translate-y-2"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-[#0d89b1] to-[#0a6d8f] rounded-lg flex items-center justify-center mx-auto mb-10 transform group-hover:rotate-12 transition-transform shadow-lg">
                    <Icon size={44} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-wider leading-tight">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-medium">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-white dark:bg-gray-950 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tight">Afzalliklarimiz</h2>
              <div className="w-24 h-2 bg-[#0d89b1] mx-auto rounded-full shadow-lg shadow-[#0d89b1]/30"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {advantages.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  className="flex items-center gap-6 p-8 bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-2xl hover:border-[#0d89b1]/30 transition-all group hover:-translate-x-1"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0d89b1]/10 rounded-2xl flex items-center justify-center text-[#0d89b1] group-hover:bg-[#0d89b1] group-hover:text-white transition-all duration-500">
                    <CheckCircle size={28} />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-black text-lg leading-tight uppercase tracking-tight">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Note */}
      <section className="py-24 bg-[#0d89b1] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-6xl font-black mb-8 uppercase tracking-tighter">Bizni ijtimoiy tarmoqlarda kuzatib boring</h3>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-bold opacity-90 uppercase tracking-widest">
              Litsey hayoti, tadbirlar, yangiliklar va qabul haqida eng so'nggi ma'lumotlarni rasmiy Instagram sahifamizdan oling:
            </p>
            <div className="inline-block bg-white text-[#0d89b1] px-12 py-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform hover:scale-110 transition-transform duration-500">
              <p className="text-4xl md:text-6xl font-black tracking-tighter uppercase">📸 @fdtu1al.uz</p>
            </div>
            <p className="text-white/80 mt-10 font-black text-xl uppercase tracking-widest opacity-80">Tezkor javob va eng dolzarb yangiliklar shu yerda!</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
