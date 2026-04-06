import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { newsData } from '../data/news';

export function NewsPage() {
  // Qo'shimcha yangiliklar uchun mock data
  const allNews = [...newsData, ...newsData.map((item, index) => ({
    ...item,
    id: item.id + 10 + index,
    title: item.title + ' (Arxiv)',
    date: '1 Mart, 2026',
    slug: item.slug + '-arxiv',
  }))];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Barcha yangiliklar</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Litseymiz faoliyati va yutuqlari haqida so'nggi yangiliklardan xabardor bo'ling
          </p>
        </div>
      </div>

      {/* News Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.map((news) => (
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
        </div>
      </section>
    </div>
  );
}
