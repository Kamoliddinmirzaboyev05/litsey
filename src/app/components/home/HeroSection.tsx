import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

export function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1743412012062-5e62e38b3ebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZyUyMHV6YmVraXN0YW58ZW58MXx8fHwxNzc1NDU4MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Litsey binosi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slideUp">
            Farg‘ona Davlat Texnika Universiteti 1-son Akademik Litseyi
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed animate-slideUp" style={{animationDelay: '0.1s'}}>
            2000-yildan buyon Farg‘ona viloyatida yetakchi ta'lim muassasasi. FDTU professor-o‘qituvchilari, chuqurlashtirilgan fanlar dasturlari va eng yaxshi sharoitlar bilan sizning kelajagingizni quramiz.
          </p>
          <div className="flex flex-wrap gap-4 animate-slideUp" style={{animationDelay: '0.2s'}}>
            <Link
              to="/admission"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0d89b1] text-white rounded-lg hover:bg-[#0a6d8f] transition-colors font-semibold shadow-lg"
            >
              Qabul 2026
              <ChevronRight size={20} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors font-semibold border border-white/30"
            >
              Batafsil ma'lumot
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
