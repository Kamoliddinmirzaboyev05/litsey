import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { newsData } from '../../data/news';

export function NewsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="inline-block px-4 py-2 bg-[#0d89b1]/10 text-[#0d89b1] rounded-full text-sm font-semibold mb-4">
              YANGILIKLAR
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              So'nggi yangiliklar
            </h2>
          </div>
          <Link
            to="/news"
            className="hidden md:inline-flex items-center gap-2 text-[#0d89b1] hover:gap-3 transition-all font-semibold"
          >
            Barcha yangiliklar
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <article
              key={news.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={16} />
                  <span>{news.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0d89b1] transition-colors">
                  {news.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {news.excerpt}
                </p>

                <Link
                  to={`/news/${news.slug}`}
                  className="inline-flex items-center gap-2 text-[#0d89b1] font-semibold hover:gap-3 transition-all"
                >
                  Batafsil o'qish
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0d89b1] text-white rounded-lg hover:bg-[#0a6d8f] transition-colors font-semibold"
          >
            Barcha yangiliklar
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
