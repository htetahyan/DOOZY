import Image from 'next/image';
import { TryLandBotFree } from '../ReuseableButtons';

interface Feature {
  description: string;
  image: string;
}

interface FeatureRowProps {
  feature: Feature;
  isReversed?: boolean;
}

function FeatureRow({ feature, isReversed }: FeatureRowProps) {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-2 -mb-2`}>
      <div className="w-[500px] h-[400px] relative flex-shrink-0">
        <Image
          src={feature.image} 
          alt="Feature image"
          fill
          className="object-contain"
        />
      </div>
      <div className="max-w-[400px]">
        <p className="text-2xl text-gray-600">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

interface ContentWithFeaturesProps {
  t: any;
}

export function ContentWithFeatures({ t }: ContentWithFeaturesProps) {
  const features = t.raw('items');

  return (
    <section className="container mx-auto px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Title Section */}
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B1B1B] mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('description')}
          </p>
        </div>

        {/* Features */}
        <div>
          {features.map((feature: Feature, index: number) => (
            <FeatureRow
              key={index}
              feature={feature}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <TryLandBotFree className="!bg-[#FF4D8D] hover:!bg-[#FF3377] text-white !border-0" />
        </div>
      </div>
    </section>
  );
} 