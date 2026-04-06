import { Calendar, ArrowRight, Megaphone } from 'lucide-react';
import { Link } from 'react-router';
import { announcementsData } from '../../data/announcements';

export function AnnouncementsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="inline-block px-4 py-2 bg-[#0d89b1]/10 text-[#0d89b1] rounded-full text-sm font-semibold mb-4">
              E'LONLAR
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Muhim e'lonlar
            </h2>
          </div>
          <Link
            to="/announcements"
            className="hidden md:inline-flex items-center gap-2 text-[#0d89b1] hover:gap-3 transition-all font-semibold"
          >
            Barcha e'lonlar
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcementsData.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-gradient-to-br from-[#0d89b1] to-[#0a6d8f] rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Megaphone size={24} />
                </div>
                <div className="flex items-center gap-2 text-sm bg-white/20 px-3 py-1 rounded-full">
                  <Calendar size={14} />
                  <span>{announcement.date}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 line-clamp-2">
                {announcement.title}
              </h3>

              <p className="text-white/90 mb-4 line-clamp-3 leading-relaxed">
                {announcement.excerpt}
              </p>

              <Link
                to={`/announcements/${announcement.slug}`}
                className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all"
              >
                Batafsil
                <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            to="/announcements"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0d89b1] text-white rounded-lg hover:bg-[#0a6d8f] transition-colors font-semibold"
          >
            Barcha e'lonlar
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
