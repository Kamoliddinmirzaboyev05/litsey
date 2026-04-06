import { BookOpen, Atom, Calculator, Code, Globe, FlaskConical } from 'lucide-react';

export function SubjectsPage() {
  const subjects = [
    {
      icon: Calculator,
      name: 'Matematika',
      description: 'Algebra, geometriya va matematik analiz bo\'yicha chuqur bilimlar. Olimpiada matematikasi kurslari.',
      hours: '8 soat/hafta',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Atom,
      name: 'Fizika',
      description: 'Klassik va zamonaviy fizika, mexanika, elektrodinamika va kvant fizikasi asoslari.',
      hours: '6 soat/hafta',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: FlaskConical,
      name: 'Kimyo',
      description: 'Organik va anorganik kimyo, kimyoviy reaksiyalar va laboratoriya tajribalari.',
      hours: '5 soat/hafta',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Globe,
      name: 'Ingliz tili',
      description: 'IELTS va CEFR standarti bo\'yicha ingliz tili, grammatika va lug\'at boyitish.',
      hours: '6 soat/hafta',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Code,
      name: 'Informatika',
      description: 'Dasturlash asoslari (Python, C++), algoritmlar va ma\'lumotlar strukturasi.',
      hours: '4 soat/hafta',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: BookOpen,
      name: 'Biologiya',
      description: 'Molekulyar biologiya, genetika, ekologiya va tirik organizmlar anatomiyasi.',
      hours: '4 soat/hafta',
      color: 'from-teal-500 to-teal-600',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Fanlar</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Litseymizda o'qitiladigan asosiy fanlar va dasturlar
          </p>
        </div>
      </div>

      {/* Subjects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => {
              const Icon = subject.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className={`bg-gradient-to-r ${subject.color} p-8 text-white`}>
                    <Icon size={48} className="mb-4" />
                    <h3 className="text-2xl font-bold">{subject.name}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {subject.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-sm text-gray-500">Haftalik soat</span>
                      <span className="font-semibold text-[#0d89b1]">{subject.hours}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
