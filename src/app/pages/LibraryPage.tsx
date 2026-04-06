import { BookOpen, Search, Download, Clock } from 'lucide-react';

export function LibraryPage() {
  const resources = [
    {
      title: 'Matematika darslik (10-sinf)',
      author: 'A.Abduhamidov',
      category: 'Darsliklar',
      format: 'PDF',
    },
    {
      title: 'Fizika masalalari to\'plami',
      author: 'B.Zunnunov',
      category: 'Qo\'llanmalar',
      format: 'PDF',
    },
    {
      title: 'Ingliz tili IELTS tayyorgarlik',
      author: 'Cambridge',
      category: 'Tillar',
      format: 'PDF',
    },
    {
      title: 'Kimyo laboratoriya ishlari',
      author: 'S.Toshmatov',
      category: 'Amaliy qo\'llanmalar',
      format: 'PDF',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Axborot-kutubxona</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Litseymizning elektron kutubxonasi va o'quv resurslari
          </p>
        </div>
      </div>

      {/* Library Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-4xl font-bold text-[#0d89b1] mb-2">5000+</div>
                <div className="text-gray-600">Kitoblar</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-4xl font-bold text-[#0d89b1] mb-2">500+</div>
                <div className="text-gray-600">Elektron resurslar</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-4xl font-bold text-[#0d89b1] mb-2">50+</div>
                <div className="text-gray-600">Jurналlar</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="text-4xl font-bold text-[#0d89b1] mb-2">100+</div>
                <div className="text-gray-600">O'quv qo'llanmalari</div>
              </div>
            </div>

            {/* Search */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Resurslarni qidirish</h2>
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Kitob, mualliflar yoki mavzu bo'yicha qidiring..."
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d89b1] focus:border-transparent outline-none"
                  />
                </div>
                <button className="px-8 py-4 bg-[#0d89b1] text-white rounded-lg hover:bg-[#0a6d8f] transition-colors font-semibold">
                  Qidirish
                </button>
              </div>
            </div>

            {/* Resources List */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] p-6 text-white">
                <div className="flex items-center gap-3">
                  <BookOpen size={28} />
                  <h2 className="text-2xl font-bold">Mashhur resurslar</h2>
                </div>
              </div>

              <div className="divide-y divide-gray-200">
                {resources.map((resource, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{resource.title}</h3>
                        <p className="text-gray-600 mb-2">Muallif: {resource.author}</p>
                        <div className="flex gap-3">
                          <span className="px-3 py-1 bg-[#0d89b1]/10 text-[#0d89b1] rounded-full text-sm font-medium">
                            {resource.category}
                          </span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                            {resource.format}
                          </span>
                        </div>
                      </div>
                      <button className="flex items-center gap-2 px-4 py-2 bg-[#0d89b1] text-white rounded-lg hover:bg-[#0a6d8f] transition-colors">
                        <Download size={18} />
                        Yuklab olish
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Clock size={28} className="text-[#0d89b1]" />
                <h2 className="text-2xl font-bold text-gray-900">Kutubxona ish vaqti</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Dushanba - Juma</span>
                    <span className="text-gray-600">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Shanba</span>
                    <span className="text-gray-600">09:00 - 15:00</span>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Eslatma:</strong> Kutubxonadan foydalanish uchun o'quvchi ID kartasi zarur.
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
