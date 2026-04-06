import { Calendar, Megaphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { announcementsData } from '../data/announcements';

export function AnnouncementsPage() {
  // Qo'shimcha e'lonlar uchun mock data
  const allAnnouncements = [...announcementsData, ...announcementsData.map((item, index) => ({
    ...item,
    id: item.id + 10 + index,
    title: item.title + ' (Arxiv)',
    date: '10 Fevral, 2026',
    slug: item.slug + '-arxiv',
  }))];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Barcha e'lonlar</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Litseymiz bo'yicha muhim e'lonlar va xabarlar
          </p>
        </div>
      </div>

      {/* Announcements Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allAnnouncements.map((announcement) => (
              <div
                key={announcement.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Megaphone size={24} />
                    </div>
                    <div className="flex items-center gap-2 text-sm bg-white/20 px-3 py-1 rounded-full">
                      <Calendar size={14} />
                      <span>{announcement.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold line-clamp-2">
                    {announcement.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-4 leading-relaxed">
                    {announcement.excerpt}
                  </p>

                  <Link
                    to={`/announcements/${announcement.slug}`}
                    className="inline-flex items-center gap-2 text-[#0d89b1] font-semibold hover:gap-3 transition-all"
                  >
                    Batafsil
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
