import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] text-white py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight uppercase">Bog'lanish</h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl leading-relaxed font-bold opacity-90 uppercase tracking-widest">
              Savollaringiz bo'lsa, biz bilan bog'laning. Sizga yordam berishdan mamnunmiz!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Info & Form */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Cards */}
            <div className="bg-white dark:bg-gray-950 rounded-[2.5rem] p-10 shadow-lg border border-gray-100 dark:border-gray-800 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2" data-aos="fade-up">
              <div className="w-16 h-16 bg-[#0d89b1]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0d89b1] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                <MapPin size={32} className="text-[#0d89b1] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tight">Manzil</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-bold">
                Farg‘ona sh., Muruvvat MFY,<br />
                Farg‘ona ko‘chasi, 84-uy
              </p>
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-[2.5rem] p-10 shadow-lg border border-gray-100 dark:border-gray-800 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-[#0d89b1]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0d89b1] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                <Phone size={32} className="text-[#0d89b1] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tight">Telefon</h3>
              <div className="space-y-3">
                <a href="tel:+998732413307" className="block text-gray-600 dark:text-gray-400 hover:text-[#0d89b1] text-lg font-black transition-colors">
                  +998 (73) 241-33-07
                </a>
                <a href="tel:+998732411206" className="block text-gray-600 dark:text-gray-400 hover:text-[#0d89b1] text-lg font-black transition-colors">
                  +998 (73) 241-12-06
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-[2.5rem] p-10 shadow-lg border border-gray-100 dark:border-gray-800 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-[#0d89b1]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0d89b1] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                <Mail size={32} className="text-[#0d89b1] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tight">Email & Ijtimoiy</h3>
              <div className="space-y-3 mb-6">
                <a href="mailto:info@fstu.uz" className="block text-gray-600 dark:text-gray-400 hover:text-[#0d89b1] text-lg font-black transition-colors">
                  info@fstu.uz
                </a>
              </div>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: "https://instagram.com/fdtu1al.uz", color: "text-pink-600", hover: "hover:bg-pink-600" },
                  { icon: Send, href: "https://t.me/fdtu1al_uz", color: "text-blue-500", hover: "hover:bg-blue-500" },
                  { icon: Facebook, href: "https://facebook.com", color: "text-blue-700", hover: "hover:bg-blue-700" }
                ].map((social, idx) => (
                  <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 bg-gray-50 dark:bg-gray-900 rounded-2xl flex items-center justify-center ${social.color} ${social.hover} hover:text-white transition-all shadow-inner`}>
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-950 rounded-[3rem] p-12 shadow-2xl border border-gray-100 dark:border-gray-800" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-10 uppercase tracking-tight">Xabar yuborish</h2>
              
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mb-10 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/30 rounded-2xl p-6 text-green-700 dark:text-green-400 font-black flex items-center gap-4 shadow-inner"
                >
                  <CheckCircle size={28} />
                  Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-2">
                      Ismingiz *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-5 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl focus:ring-4 focus:ring-[#0d89b1]/10 focus:border-[#0d89b1] outline-none transition-all font-bold text-gray-900 dark:text-white shadow-inner"
                      placeholder="To'liq ismingiz"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="phone" className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-5 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl focus:ring-4 focus:ring-[#0d89b1]/10 focus:border-[#0d89b1] outline-none transition-all font-bold text-gray-900 dark:text-white shadow-inner"
                      placeholder="+998 90 123 45 67"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-5 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl focus:ring-4 focus:ring-[#0d89b1]/10 focus:border-[#0d89b1] outline-none transition-all font-bold text-gray-900 dark:text-white shadow-inner"
                    placeholder="example@mail.com"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="subject" className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-2">
                    Mavzu *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-5 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl focus:ring-4 focus:ring-[#0d89b1]/10 focus:border-[#0d89b1] outline-none transition-all font-black text-gray-700 dark:text-gray-300 shadow-inner"
                  >
                    <option value="">Mavzuni tanlang</option>
                    <option value="admission">Qabul haqida</option>
                    <option value="education">Ta'lim jarayoni</option>
                    <option value="other">Boshqa</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] ml-2">
                    Xabar *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-6 py-5 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl focus:ring-4 focus:ring-[#0d89b1]/10 focus:border-[#0d89b1] outline-none transition-all resize-none font-bold text-gray-900 dark:text-white shadow-inner"
                    placeholder="Xabaringizni yozing..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-4 px-10 py-6 bg-[#0d89b1] text-white rounded-[2rem] hover:bg-[#0a6d8f] transition-all font-black shadow-2xl hover:shadow-[#0d89b1]/40 transform hover:-translate-y-1 uppercase tracking-[0.2em] text-sm"
                >
                  <Send size={28} />
                  XABAR YUBORISH
                </button>
              </form>
            </div>

            {/* Working Hours & Map */}
            <div className="space-y-10" data-aos="fade-left">
              <div className="bg-white dark:bg-gray-950 rounded-[3rem] p-12 shadow-2xl border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-14 h-14 bg-[#0d89b1]/10 rounded-2xl flex items-center justify-center text-[#0d89b1] shadow-inner">
                    <Clock size={32} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white uppercase tracking-tight">Ish vaqti</h2>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-5 border-b border-gray-100 dark:border-gray-800">
                    <span className="font-black text-gray-700 dark:text-gray-300 text-lg uppercase tracking-tight">Dushanba - Juma</span>
                    <span className="text-gray-600 dark:text-gray-400 font-black text-xl tracking-tighter">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between items-center pb-5 border-b border-gray-100 dark:border-gray-800">
                    <span className="font-black text-gray-700 dark:text-gray-300 text-lg uppercase tracking-tight">Shanba</span>
                    <span className="text-gray-600 dark:text-gray-400 font-black text-xl tracking-tighter">09:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-black text-gray-700 dark:text-gray-300 text-lg uppercase tracking-tight">Yakshanba</span>
                    <span className="text-red-500 font-black uppercase tracking-[0.2em] text-sm">Dam olish</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white dark:bg-gray-950 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 h-[450px] grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.1234567890123!2d71.77196941208126!3d40.42417922132789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzI3LjAiTiA3McKwNDYnMTkuMSJF!5e0!3m2!1sen!2s!4v1647000000000!5m2!1sen!2s"
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
