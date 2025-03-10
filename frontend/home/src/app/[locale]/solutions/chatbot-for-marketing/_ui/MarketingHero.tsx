import Image from 'next/image';
import G2starsImage from '@/../public/Icons/g2stars.png';
import MetaImage from '@/../public/Icons/meta.png';
import { TryLandBotFree } from '@/components/ReuseableButtons';

interface MarketingHeroProps {
  t: any;
}

export function MarketingHero({ t }: MarketingHeroProps) {

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6">
            <span className="text-[#FF4D8D] text-sm font-semibold tracking-wider uppercase">
              {t('hero.badge')}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[2.75rem] md:text-[3.25rem] font-bold text-[#1B1B1B] mb-6 leading-[1.2]">
            {t('hero.title')}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8">
            {t('hero.description')}
          </p>

          {/* CTA Button */}
          <div className="mb-8">
            <TryLandBotFree className="!bg-[#FF4D8D] hover:!bg-[#FF3377] text-white !border-0" />
          </div>

          {/* Features */}
          <div className="flex gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-[#FF4D8D]/10 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-[#FF4D8D]"></div>
              </div>
              {t('hero.features.noCard')}
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-[#FF4D8D]/10 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-[#FF4D8D]"></div>
              </div>
              {t('hero.features.noCoding')}
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-fit">
          <div className="flex items-center justify-end gap-6 mt-8 w-full">
            <Image
              src={G2starsImage}
              alt="G2 5 stars rating"
              width={80}
              height={24}
            />
            <div className="h-8 w-[1px] bg-gray-200"></div>
            <Image
              src={MetaImage}
              alt="Meta Business Partner"
              width={80}
              height={24}
            />
          </div>
          <Image
            src={t('hero.image')}
            alt="Chatbot Interface"
            width={1000}
            height={1200}
            className="object-contain"
            priority
          />
        </div>
      </div>

    </div>
  );
} 