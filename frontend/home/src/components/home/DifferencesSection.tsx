import { Settings, Network, Bot, GraduationCap } from 'lucide-react';

interface DifferencesSectionProps {
  t: any;
}

const iconMap = {
  settings: Settings,
  network: Network,
  bot: Bot,
  education: GraduationCap,
};

export function DifferencesSection({ t }: DifferencesSectionProps) {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1B1B1B] mb-16">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.raw('features').map((feature: any, index: number) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <div 
                key={index}
                className="bg-[#F5F7FF] rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1B1B1B] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 