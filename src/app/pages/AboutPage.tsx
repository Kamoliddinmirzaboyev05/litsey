import { Award, Target, Eye, Heart, Building2, Calendar, Phone, MapPin, User, GraduationCap } from 'lucide-react';

export function AboutPage() {
  const generalInfo = [
    {
      icon: Building2,
      label: 'Rasmiy nomi',
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
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Litsey haqida</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Farg‘ona Davlat Texnika Universiteti 1-son Akademik Litseyi — viloyatdagi eng nufuzli ta'lim muassasalaridan biri. 2000-yildan buyon yuqori sifatli ta'lim berib kelmoqda.
          </p>
        </div>
      </div>

      {/* General Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Umumiy ma'lumotlar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {generalInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0d89b1]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-[#0d89b1]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                      <p className="font-semibold text-gray-900">{item.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Litsey tarixi</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                FDTU 1-son Akademik Litseyi 2000-yil 8-avgust kuni Farg‘ona Politexnika Instituti (FarPI) qoshida ochilgan. Dastlab texnika va aniq fanlarga ixtisoslashtirilgan holda faoliyat boshlagan.
              </p>
              <p>
                Farg‘ona Politexnika Instituti Farg‘ona Davlat Texnika Universitetiga (FDTU) aylangandan so‘ng litsey "1-son akademik litsey" nomini oldi va hozirgacha universitet bilan eng yaqin hamkorlikda ishlab kelmoqda.
              </p>
              <p>
                Hozirgi kunda litsey Farg‘ona viloyatidagi eng nufuzli va eng zo'r natijalarni ko'rsatayotgan akademik litseylar qatoriga kiradi. Universitetning professor-o‘qituvchilari litseyda dars berishadi, bu esa ta’lim sifatini yuqori darajada ushlab turishga imkon beradi.
              </p>
              <p className="text-gray-500 italic">
                Ilgarigi mavjud bo'lgan Yormozor akademik litseyi hozir faol emas va yopilgan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Maqsad va qadriyatlarimiz
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0d89b1] to-[#0a6d8f] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Award size={32} className="text-[#0d89b1]" />
              <h2 className="text-3xl font-bold text-gray-900">Afzalliklarimiz</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-5 bg-gradient-to-br from-[#0d89b1]/5 to-[#0d89b1]/10 rounded-xl border border-[#0d89b1]/20 hover:border-[#0d89b1]/40 transition-colors"
                >
                  <div className="flex-shrink-0 w-7 h-7 bg-[#0d89b1] rounded-full flex items-center justify-center text-white font-bold text-sm mt-0.5">
                    ✓
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Note */}
      <section className="py-12 bg-[#0d89b1] text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Bizni ijtimoiy tarmoqlarda kuzatib boring</h3>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-4">
            Litsey hayoti, tadbirlar, yangiliklar va qabul haqida eng so'nggi ma'lumotlarni rasmiy Instagram sahifamizdan oling:
          </p>
          <p className="text-2xl font-bold tracking-wide">📸 @fdtu1al.uz</p>
          <p className="text-white/70 mt-2">Tezkor javob va eng dolzarb yangiliklar shu yerda!</p>
        </div>
      </section>
    </div>
  );
}
