import { GraduationCap, Target, BookOpen } from 'lucide-react';

export function ProgramsPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">O'quv dasturlari</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Litseymizning zamonaviy o'quv dasturlari va yo'nalishlari
          </p>
        </div>
      </div>

      {/* Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[#0d89b1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={28} className="text-[#0d89b1]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Aniq fanlar yo'nalishi</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Asosiy dastur matematika, fizika, kimyo va informatika fanlarini chuqur o'rganishga qaratilgan. 
                    O'quvchilar haftada 8 soat matematika, 6 soat fizika va 5 soat kimyo darslarida qatnashadilar.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[#0d89b1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen size={28} className="text-[#0d89b1]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">STEM dasturi</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Science, Technology, Engineering, Mathematics integratsiyalashgan dastur. Zamonaviy 
                    STEM laboratoriyasida amaliy loyihalar ustida ishlash, robotika va dasturlash kurslari.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[#0d89b1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target size={28} className="text-[#0d89b1]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Kuchaytirilgan ingliz tili</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Barcha o'quvchilar haftada 6 soat ingliz tili darslarida qatnashadilar. IELTS va CEFR 
                    standartlari asosida o'qitish. Bitiruvchilar IELTS 6.0+ natijalariga erishadilar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
