import { TryFreeForWebsite, TryFreeForWhatsApp } from '@/components/ReuseableButtons';
import { LucideIcon } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  Icon: LucideIcon;
}

interface WhyChooseSectionProps {
  t: {
    (key: string): string;
    raw: (key: string) => any;
  };
  features: Feature[];
}

export function WhyChooseSection({ t, features }: WhyChooseSectionProps) {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B] text-center mb-16">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {features.map((feature, index) => {
            const { Icon } = feature;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6">
                  <Icon className="w-full h-full " strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold  mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <TryFreeForWebsite className="sm:w-auto px-8" />
          <TryFreeForWhatsApp className="sm:w-auto px-8" />
        </div>
      </div>
    </section>
  );
} 