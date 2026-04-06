import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { 
  Phone, 
  Menu, 
  X, 
  ChevronDown,
  Facebook,
  Instagram,
  Send,
  Youtube,
  ChevronRight,
  Sun,
  Moon,
  Globe
} from 'lucide-react';
import { menuItems } from '../../data/menu';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'next-themes';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const languages = [
    { code: 'uz', label: "O'zbek", flag: 'uz' },
    { code: 'ru', label: 'Русский', flag: 'ru' },
    { code: 'en', label: 'English', flag: 'gb' },
    { code: 'kr', label: 'Ўзбекча', flag: 'uz' },
  ];

  const currentLanguage = languages.find(l => l.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsLangMenuOpen(false);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-white dark:bg-gray-950 shadow-md sticky top-0 z-50 transition-colors duration-300">
      {/* Top Bar */}
      <div className="bg-[#0d89b1] text-white hidden sm:block">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+998732413307" className="flex items-center gap-2 hover:opacity-80 transition-opacity font-bold">
                <Phone size={14} />
                <span>+99873 241-33-07</span>
              </a>
            </div>
            <div className="flex items-center gap-6">
              {/* Language Switcher Desktop */}
              <div className="relative">
                <button 
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 hover:text-white/80 transition-colors font-bold uppercase tracking-widest text-xs"
                >
                  <Globe size={14} />
                  <span>{currentLanguage.label}</span>
                  <ChevronDown size={12} className={`transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-gray-900 shadow-xl rounded-xl overflow-hidden py-1 border border-gray-100 dark:border-gray-800 z-[100]"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-colors flex items-center gap-2 ${
                            i18n.language === lang.code 
                              ? 'bg-blue-50 dark:bg-blue-900/30 text-[#0d89b1]' 
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                        >
                          <span className={`fi fi-${lang.flag}`}></span>
                          {lang.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Switcher */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-1 hover:text-white/80 transition-colors"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}

              <div className="flex items-center gap-4 border-l border-white/20 pl-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Facebook size={16} />
                </a>
                <a href="https://instagram.com/fdtu1al.uz" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Instagram size={16} />
                </a>
                <a href="https://t.me/fdtu1al_uz" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Send size={16} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <Youtube size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
           <Link to="/" className="flex items-center gap-2 md:gap-3 group">
             <div className="relative overflow-hidden rounded-lg p-1 bg-gray-50 dark:bg-gray-900 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors shadow-sm">
               <img src="/logoicon.png" alt="FDTU 1-son AL" className="w-10 h-10 md:w-14 md:h-14 object-contain" />
             </div>
             <div>
               <div className="text-sm md:text-lg font-black text-gray-900 dark:text-white leading-tight uppercase tracking-tight">
                 FDTU 1-son <br className="md:hidden" />
                 Akademik Litseyi
               </div>
             </div>
           </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`px-4 py-2 hover:text-[#0d89b1] transition-colors font-black text-xs uppercase tracking-widest flex items-center gap-1.5 ${
                    location.pathname === item.href ? 'text-[#0d89b1]' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {t(item.label)}
                  {item.children && <ChevronDown size={14} className={`transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''}`} />}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-0 w-64 bg-white dark:bg-gray-900 shadow-2xl border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden py-3"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className={`block px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition-colors ${
                              location.pathname === child.href 
                                ? 'bg-blue-50 dark:bg-blue-900/30 text-[#0d89b1]' 
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#0d89b1]'
                            }`}
                          >
                            {t(child.label)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-[#0d89b1] hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed right-0 top-0 h-full w-[85%] max-w-sm bg-white dark:bg-gray-950 z-[70] shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <img src="/logoicon.png" alt="Logo" className="w-10 h-10 object-contain" />
                  <span className="font-black text-[#0d89b1] uppercase tracking-tight">FDTU 1-son AL</span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-4 px-2">
                {/* Mobile Language Switcher */}
                <div className="px-4 mb-6">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3 ml-1">{t('common.language') || 'Tashrif tili'}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`flex items-center justify-center gap-2 py-3 rounded-xl border text-xs font-black uppercase transition-all ${
                          i18n.language === lang.code 
                            ? 'bg-[#0d89b1] text-white border-[#0d89b1] shadow-lg shadow-[#0d89b1]/20' 
                            : 'bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-100 dark:border-gray-800'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>

                <nav className="space-y-1">
                  {menuItems.map((item) => (
                    <div key={item.label}>
                      {item.children ? (
                        <div>
                          <button
                            onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                            className={`w-full flex items-center justify-between px-4 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.1em] transition-colors ${
                              expandedItem === item.label ? 'bg-blue-50 dark:bg-blue-900/20 text-[#0d89b1]' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900'
                            }`}
                          >
                            <span>{t(item.label)}</span>
                            <ChevronRight size={18} className={`transition-transform duration-300 ${expandedItem === item.label ? 'rotate-90' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {expandedItem === item.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-gray-50/50 dark:bg-gray-900/50 mx-2 rounded-2xl mt-1"
                              >
                                {item.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    to={child.href}
                                    className={`block px-6 py-4 text-[11px] font-bold uppercase tracking-wider rounded-xl transition-colors ${
                                      location.pathname === child.href ? 'text-[#0d89b1] font-black bg-white dark:bg-gray-800 shadow-sm' : 'text-gray-600 dark:text-gray-400 hover:text-[#0d89b1]'
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {t(child.label)}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          className={`block px-4 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.1em] transition-colors ${
                            location.pathname === item.href ? 'bg-blue-50 dark:bg-blue-900/20 text-[#0d89b1]' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {t(item.label)}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              <div className="p-6 border-t dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
                <div className="flex flex-col gap-4">
                  <a href="tel:+998732413307" className="flex items-center gap-4 text-gray-700 dark:text-gray-300 font-black text-sm">
                    <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex items-center justify-center text-[#0d89b1]">
                      <Phone size={20} />
                    </div>
                    +99873 241-33-07
                  </a>
                  <div className="flex items-center gap-3">
                    {[
                      { icon: Instagram, href: "https://instagram.com/fdtu1al.uz", color: "text-pink-600" },
                      { icon: Send, href: "https://t.me/fdtu1al_uz", color: "text-blue-500" },
                      { icon: Facebook, href: "https://facebook.com", color: "text-blue-700" }
                    ].map((social, idx) => (
                      <a 
                        key={idx}
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl shadow-sm flex items-center justify-center ${social.color} hover:scale-110 transition-transform`}
                      >
                        <social.icon size={22} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}