import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function PhotosPage() {
  const { t } = useTranslation();

  const photoGalleries = [
    {
      id: 1,
      title: t('photos.graduation'),
      date: '25 May, 2025',
      photos: [
        'https://images.unsplash.com/photo-1622030797403-fa221ce5d208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1emJla2lzdGFuJTIwc3R1ZGVudHMlMjBncmFkdWF0aW9uJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzc1NDU4MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1563290330-6a0d53b6e5b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGNvbXBldGl0aW9uJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzc1NDU4ODc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      count: 45,
    },
    {
      id: 2,
      title: t('photos.olympiad'),
      date: '15 Mart, 2026',
      photos: [
        'https://images.unsplash.com/photo-1769201153045-98827f62996b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdHVkZW50cyUyMGdyb3VwJTIwcGhvdG98ZW58MXx8fHwxNzc1NDU4ODc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      count: 32,
    },
    {
      id: 3,
      title: t('photos.sports'),
      date: '10 Fevral, 2026',
      photos: [
        'https://images.unsplash.com/photo-1763639700458-38a0fd25335d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzcG9ydHMlMjBkYXklMjBldmVudHxlbnwxfHx8fDE3NzU0NTg4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      count: 28,
    },
    {
      id: 4,
      title: t('photos.stem'),
      date: '5 Mart, 2026',
      photos: [
        'https://images.unsplash.com/photo-1747302864285-27e6a2dd82a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmFpciUyMHN0dWRlbnRzfGVufDF8fHx8MTc3NTQ1ODg3OXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1605781645799-c9c7d820b4ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHN0dWRlbnRzfGVufDF8fHx8MTc3NTQwMjk5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      count: 38,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] text-white py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight uppercase">{t('nav.activity')}</h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl leading-relaxed font-bold opacity-90 uppercase tracking-widest">
              {t('photos.pageSubtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {photoGalleries.map((gallery, index) => (
              <motion.div
                key={gallery.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-950 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100 dark:border-gray-800"
              >
                {/* Main Photo */}
                <div className="relative h-80 overflow-hidden bg-gray-200 dark:bg-gray-800">
                  <ImageWithFallback
                    src={gallery.photos[0]}
                    alt={gallery.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-3 opacity-80">
                      <Calendar size={16} className="text-[#0d89b1]" />
                      <span>{gallery.date}</span>
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">{gallery.title}</h3>
                  </div>
                </div>

                {/* Thumbnail Grid */}
                <div className="grid grid-cols-3 gap-2 p-2 bg-white dark:bg-gray-950">
                  {gallery.photos.slice(1, 3).map((photo, idx) => (
                    <div key={idx} className="relative h-24 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800">
                      <ImageWithFallback
                        src={photo}
                        alt={`${gallery.title} ${idx + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  {gallery.count > 3 && (
                    <div className="relative h-24 rounded-lg overflow-hidden bg-[#0d89b1] flex items-center justify-center text-white shadow-inner">
                      <div className="text-center">
                        <div className="text-2xl font-black">+{gallery.count - 3}</div>
                        <div className="text-[10px] font-black uppercase tracking-widest opacity-80">{t('photos.others')}</div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
