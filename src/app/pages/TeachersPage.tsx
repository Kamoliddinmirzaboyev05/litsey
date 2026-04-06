import { Mail, Award } from 'lucide-react';
import { teachersData } from '../data/teachers';

export function TeachersPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">O'qituvchilar</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Litseymizning malakali va tajribali o'qituvchilar jamoasi
          </p>
        </div>
      </div>

      {/* Teachers Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachersData.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-gray-200">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {teacher.name}
                  </h3>
                  
                  <p className="text-[#0d89b1] font-semibold mb-3">
                    {teacher.position}
                  </p>

                  <div className="flex items-start gap-2 mb-4">
                    <Award size={18} className="text-gray-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-600 text-sm">
                      {teacher.degree}
                    </p>
                  </div>

                  {teacher.subjects && (
                    <div className="flex flex-wrap gap-2">
                      {teacher.subjects.map((subject, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#0d89b1]/10 text-[#0d89b1] rounded-full text-sm font-medium"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] rounded-2xl p-12 text-center text-white">
            <Mail size={48} className="mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              O'qituvchilarimiz bilan bog'lanish
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Savol yoki takliflaringiz bo'lsa, litsey ma'muriyati bilan bog'laning
            </p>
            <a
              href="mailto:info@vosiqova-litsey.uz"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0d89b1] rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg"
            >
              <Mail size={20} />
              info@vosiqova-litsey.uz
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
