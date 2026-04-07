import { Calendar, Clock, Download } from 'lucide-react';

export function SchedulePage() {
  const schedule = [
    { time: '08:00 - 08:45', class: '1-dars' },
    { time: '08:50 - 09:35', class: '2-dars' },
    { time: '09:40 - 10:25', class: '3-dars' },
    { time: '10:25 - 10:45', class: 'Tanaffus (tushlik)' },
    { time: '10:45 - 11:30', class: '4-dars' },
    { time: '11:35 - 12:20', class: '5-dars' },
    { time: '12:25 - 13:10', class: '6-dars' },
    { time: '13:15 - 14:00', class: '7-dars' },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Dars jadvali</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Litseymizning dars jadvali va o'quv rejasi
          </p>
        </div>
      </div>

      {/* Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Info Card */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-4">
                <Calendar className="text-blue-600 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Dars jadvali haqida</h3>
                  <p className="text-gray-700">
                    Darslar Dushanba - Shanba kunlari o'tkaziladi. Har bir dars 45 daqiqa davom etadi. 
                    Tanaffuslar 5 daqiqa, tushlik tanaffusi 20 daqiqa.
                  </p>
                </div>
              </div>
            </div>

            {/* Time Table */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#0d89b1] to-[#0a6d8f] p-6 text-white">
                <div className="flex items-center gap-3">
                  <Clock size={28} />
                  <h2 className="text-2xl font-bold">Darslar vaqti</h2>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-3">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-md ${
                        item.class.includes('Tanaffus')
                          ? 'bg-yellow-50 border border-yellow-200'
                          : 'bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <span className="font-semibold text-gray-700">{item.class}</span>
                      <span className="text-gray-600">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="mt-8 text-center">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#0d89b1] text-white rounded-lg hover:bg-[#0a6d8f] transition-colors font-semibold shadow-lg">
                <Download size={20} />
                To'liq dars jadvalini yuklab olish
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
