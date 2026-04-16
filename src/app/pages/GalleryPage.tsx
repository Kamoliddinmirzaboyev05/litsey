import { Loader2, Calendar, Image as ImageIcon, Eye, ChevronRight, Home } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { galleryService } from '../services/galleryService';
import { Album } from '../types';

export function GalleryPage() {
  const { t, i18n } = useTranslation();
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const currentLang = i18n.language || 'uz';

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const data = await galleryService.getAllAlbums();
        const activeAlbums = data.results
          .filter(album => album.is_active)
          .sort((a, b) => a.sort_order - b.sort_order);
        setAlbums(activeAlbums);
      } catch (error) {
        console.error('Error fetching albums:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLang === 'uz' ? 'uz-UZ' : 'ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <Loader2 className="w-12 h-12 text-[#0d89b1] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm font-medium">
            <Link to="/" className="text-gray-500 hover:text-[#0d89b1] transition-colors flex items-center gap-1">
              <Home size={16} />
              <span>{t('nav.home')}</span>
            </Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-gray-900 dark:text-white font-bold">{t('nav.photos')}</span>
          </nav>
        </div>
      </div>

      {/* Page Title */}
      <div className="py-12 md:py-16 text-center border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tight"
          >
            {t('nav.photos').toUpperCase()}
          </motion.h1>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {albums.map((album, index) => {
              const translation = galleryService.getTranslation(album, currentLang);
              
              return (
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-gray-100 dark:bg-gray-900 rounded-[20px] overflow-hidden aspect-[4/5] md:aspect-square shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <img
                    src={album.cover_image}
                    alt={translation.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                      <div className="flex items-center gap-2 mb-3 text-white/80">
                        <Calendar size={14} className="text-[#0d89b1]" />
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">
                          {formatDate(album.event_date)}
                        </span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-black text-white mb-4 leading-tight uppercase tracking-tight">
                        {translation.title}
                      </h3>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                          <ImageIcon size={14} className="text-white" />
                          <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">
                            {album.photos_count} {t('gallery.photos')}
                          </span>
                        </div>
                        
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0d89b1] rounded-full flex items-center justify-center transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 shadow-lg shadow-[#0d89b1]/40">
                          <Eye className="text-white w-5 h-5 md:w-6 md:h-6" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Click area */}
                  <Link to={`/gallery/${album.slug}`} className="absolute inset-0 z-10" aria-label={translation.title} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
