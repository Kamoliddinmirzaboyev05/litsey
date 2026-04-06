import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bog'lanish</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Savollaringiz bo'lsa, biz bilan bog'laning. Sizga yordam berishdan mamnunmiz!
          </p>
        </div>
      </div>

      {/* Contact Info & Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-[#0d89b1]/10 rounded-xl flex items-center justify-center mb-6">
                <MapPin size={28} className="text-[#0d89b1]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manzil</h3>
              <p className="text-gray-600 leading-relaxed">
                Toshkent sh., Chilonzor tumani,<br />
                Qatortol ko'chasi, 47-uy
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-[#0d89b1]/10 rounded-xl flex items-center justify-center mb-6">
                <Phone size={28} className="text-[#0d89b1]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Telefon</h3>
              <div className="space-y-2">
                <a href="tel:+998712345678" className="block text-gray-600 hover:text-[#0d89b1]">
                  +998 (71) 234-56-78
                </a>
                <a href="tel:+998712345679" className="block text-gray-600 hover:text-[#0d89b1]">
                  +998 (71) 234-56-79
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-[#0d89b1]/10 rounded-xl flex items-center justify-center mb-6">
                <Mail size={28} className="text-[#0d89b1]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
              <div className="space-y-2">
                <a href="mailto:info@vosiqova-litsey.uz" className="block text-gray-600 hover:text-[#0d89b1]">
                  info@vosiqova-litsey.uz
                </a>
                <a href="mailto:qabul@vosiqova-litsey.uz" className="block text-gray-600 hover:text-[#0d89b1]">
                  qabul@vosiqova-litsey.uz
                </a>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Xabar yuborish</h2>
              
              {submitted && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 text-green-700">
                  Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ismingiz *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d89b1] focus:border-transparent outline-none transition-all"
                    placeholder="To'liq ismingizni kiriting"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d89b1] focus:border-transparent outline-none transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d89b1] focus:border-transparent outline-none transition-all"
                      placeholder="+998 90 123 45 67"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mavzu *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d89b1] focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Mavzuni tanlang</option>
                    <option value="admission">Qabul haqida</option>
                    <option value="education">Ta'lim jarayoni</option>
                    <option value="other">Boshqa</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Xabar *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d89b1] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Xabaringizni bu yerga yozing..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#0d89b1] text-white rounded-lg hover:bg-[#0a6d8f] transition-colors font-semibold shadow-lg"
                >
                  <Send size={20} />
                  Xabar yuborish
                </button>
              </form>
            </div>

            {/* Working Hours & Map */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Clock size={28} className="text-[#0d89b1]" />
                  <h2 className="text-2xl font-bold text-gray-900">Ish vaqti</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Dushanba - Juma</span>
                    <span className="text-gray-600">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="font-semibold text-gray-700">Shanba</span>
                    <span className="text-gray-600">09:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Yakshanba</span>
                    <span className="text-gray-600">Dam olish</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5384991436686!2d69.20367631550573!3d41.31114700755614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1647000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Litsey manzili"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
