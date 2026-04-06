import { Link } from 'react-router';
import { Phone, Mail, MapPin, Facebook, Instagram, Send, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#0d89b1] rounded-full flex items-center justify-center text-white font-bold text-lg">
                MV
              </div>
              <div>
                <div className="font-bold text-white">M.S.Vosiqova nomidagi</div>
                <div className="text-sm">Akademik litsey</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Yuqori sifatli ta'lim va kelajak kasblarini shakllantirishda yetakchi ta'lim muassasasi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Tezkor havolalar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#0d89b1] transition-colors">
                  Litsey haqida
                </Link>
              </li>
              <li>
                <Link to="/admission" className="hover:text-[#0d89b1] transition-colors">
                  Qabul
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-[#0d89b1] transition-colors">
                  Yangiliklar
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="hover:text-[#0d89b1] transition-colors">
                  O'qituvchilar
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#0d89b1] transition-colors">
                  Bog'lanish
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Bog'lanish</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-[#0d89b1] flex-shrink-0 mt-0.5" />
                <span>Toshkent sh., Chilonzor tumani, Qatortol ko'chasi, 47-uy</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-[#0d89b1] flex-shrink-0" />
                <a href="tel:+998712345678" className="hover:text-[#0d89b1] transition-colors">
                  +998 (71) 234-56-78
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-[#0d89b1] flex-shrink-0" />
                <a href="mailto:info@vosiqova-litsey.uz" className="hover:text-[#0d89b1] transition-colors">
                  info@vosiqova-litsey.uz
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-bold mb-4">Ijtimoiy tarmoqlar</h3>
            <div className="flex gap-3 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0d89b1] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0d89b1] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0d89b1] transition-colors"
              >
                <Send size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0d89b1] transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
            <div className="text-sm">
              <p className="mb-2">Ish vaqti:</p>
              <p>Dushanba - Shanba</p>
              <p>08:00 - 17:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm">
            <p>&copy; 2026 M.S.Vosiqova nomidagi akademik litsey. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
