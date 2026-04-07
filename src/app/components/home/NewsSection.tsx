import { Link } from 'react-router';
import { Calendar, ArrowRight } from 'lucide-react';
import { newsData } from '../../data/news';

export function NewsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12" data-aos="fade-up">
          <div>
            <div className="inline-block px-5 py-2 bg-[#0d89b1]/10 text-[#0d89b1] rounded-full text-xs font-black mb-4 uppercase tracking-[0.2em]">
              YANGILIKLAR
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight uppercase tracking-tight">
              So'nggi yangiliklar
            </h2>
          </div>
          <Link
            to="/news"
            className="hidden md:inline-flex items-center gap-2 text-[#0d89b1] hover:gap-4 transition-all font-black uppercase tracking-widest text-sm"
          >
            Barcha yangiliklar
            <ArrowRight size={22} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <article
              key={news.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100 dark:border-gray-800"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[10px] font-black text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-full uppercase tracking-[0.2em] border border-white/20">
                  <Calendar size={14} />
                  <span>{news.date}</span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-4 line-clamp-2 group-hover:text-[#0d89b1] transition-colors leading-tight uppercase tracking-tight">
                  {news.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed text-lg font-medium">
                  {news.excerpt}
                </p>

                <Link
                  to={`/news/${news.slug}`}
                  className="inline-flex items-center gap-2 text-[#0d89b1] font-black uppercase tracking-[0.2em] text-xs hover:gap-4 transition-all group/link"
                >
                  Batafsil o'qish
                  <ArrowRight size={20} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-[#0d89b1] font-black uppercase tracking-widest text-sm"
          >
            Barcha yangiliklar
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
