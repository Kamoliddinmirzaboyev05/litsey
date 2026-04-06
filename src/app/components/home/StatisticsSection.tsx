import { Users, GraduationCap, Trophy, School } from 'lucide-react';
import { statistics } from '../../data/statistics';

const iconMap: Record<string, any> = {
  users: Users,
  'graduation-cap': GraduationCap,
  trophy: Trophy,
  school: School,
};

export function StatisticsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0d89b1] to-[#0a6d8f] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Raqamlarda litseymiz
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Litseymiz yutuqlari va faoliyati statistikasi
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <div
                key={stat.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/90 text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
