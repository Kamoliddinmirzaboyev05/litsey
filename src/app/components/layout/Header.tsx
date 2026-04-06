import { useState } from 'react';
import { Link } from 'react-router';
import { 
  Phone, 
  Menu, 
  X, 
  ChevronDown,
  Facebook,
  Instagram,
  Send,
  Youtube
} from 'lucide-react';
import { menuItems } from '../../data/menu';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#0d89b1] text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+998732413307" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone size={16} />
                <span className="hidden sm:inline">+99873 241-33-07</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com/fdtu1al.uz" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Instagram size={18} />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Send size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Youtube size={18} />
              </a>
              <div className="border-l border-white/30 pl-4 ml-2">
                <select className="bg-transparent text-white text-sm cursor-pointer outline-none">
                  <option value="uz" className="text-gray-900">O'zbekcha</option>
                  <option value="ru" className="text-gray-900">Русский</option>
                  <option value="en" className="text-gray-900">English</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
           <Link to="/" className="flex items-center gap-3">
             <img src="/logoicon.png" alt="FDTU 1-son AL" className="w-14 h-14 object-contain" />
             <div className="hidden md:block">
               <div className="text-lg font-bold text-gray-900">FDTU 1-son Akademik Litseyi</div>
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
                  className="px-4 py-2 text-gray-700 hover:text-[#0d89b1] transition-colors font-medium flex items-center gap-1"
                >
                  {item.label}
                  {item.children && <ChevronDown size={16} />}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <div
                    className={`absolute top-full left-0 mt-0 w-56 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-200 ${
                      openDropdown === item.label
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-[#0d89b1] hover:text-white transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#0d89b1] transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/40" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl mobile-menu-open" onClick={e => e.stopPropagation()}>
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-700 hover:text-[#0d89b1]">
                <X size={28} />
              </button>
            </div>
            
            <nav className="px-6 py-2">
              {menuItems.map((item) => (
                <div key={item.label} className="mb-1">
                  <Link
                    to={item.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-[#0d89b1]/10 hover:text-[#0d89b1] rounded-xl font-medium transition-colors"
                    onClick={() => !item.children && setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}