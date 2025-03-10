import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface FeatureCard {
  title: string;
  description: string;
  image: string;
}

export function FeaturesSection({t}: {t: any}) {
 
  
  const cards: FeatureCard[] = t.raw('cards') as FeatureCard[];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B] mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="relative flex flex-col items-center justify-center">
              <div className="relative h-64 mb-6 rounded-xl  ">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={500}
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold  mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 