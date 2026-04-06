import { Phone, Mail } from 'lucide-react';
import { leadershipData } from '../data/leadership';

export function LeadershipPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Rahbariyat</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Litseymizning rahbar xodimlari
          </p>
        </div>
      </div>

      {/* Leadership Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {leadershipData.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Image */}
                  <div className="relative h-80 md:h-auto overflow-hidden bg-gray-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    
                    <p className="text-[#0d89b1] font-semibold text-lg mb-6">
                      {member.position}
                    </p>

                    <div className="space-y-3">
                      {member.phone && (
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center gap-3 text-gray-600 hover:text-[#0d89b1] transition-colors"
                        >
                          <div className="w-10 h-10 bg-[#0d89b1]/10 rounded-lg flex items-center justify-center">
                            <Phone size={20} className="text-[#0d89b1]" />
                          </div>
                          <span>{member.phone}</span>
                        </a>
                      )}

                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-3 text-gray-600 hover:text-[#0d89b1] transition-colors"
                        >
                          <div className="w-10 h-10 bg-[#0d89b1]/10 rounded-lg flex items-center justify-center">
                            <Mail size={20} className="text-[#0d89b1]" />
                          </div>
                          <span>{member.email}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reception Hours */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Qabul kunlari</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Direktor qabuli</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Dushanba - Juma: 14:00 - 17:00</p>
                  <p className="text-sm text-gray-500">Oldindan telefon orqali vaqt belgilang</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">O'quv bo'limi</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Dushanba - Shanba: 09:00 - 17:00</p>
                  <p className="text-sm text-gray-500">Tushlik: 13:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
