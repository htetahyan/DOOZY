import Image from 'next/image';
import { TryLandBotFree } from '@/components/ReuseableButtons';
import G2starsImage from '@/../public/Icons/g2stars.png';
import MetaImage from '@/../public/Icons/meta.png';

interface SalesHeroProps {
  t: any;
}

export function SalesHero({ t }: SalesHeroProps) {
  return (
    <section className="relative overflow-hidden py-8 md:py-12">
      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="max-w-2xl relative z-10">
            {/* Badge */}
            <div className="mb-6">
              <span className="text-[#85d6d6] text-sm font-semibold tracking-wider uppercase">
                {t('badge')}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-[2.5rem] md:text-[3.25rem] font-bold mb-6 leading-[1.2]">
              <span className="text-[#1B1B1B]">{t('title.start')}{' '}</span>
              <span className="text-[#1B1B1B] block">{t('title.middle')}{' '}</span>
              <span className="text-[#1B1B1B]">{t('title.end')}</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#666666] mb-8 max-w-[90%]">
              {t('description')}
            </p>

            {/* Features */}
            <div className="flex gap-8 text-sm text-gray-600 font-medium mb-8">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-[#85d6d6]/10 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#85d6d6]"></div>
                </div>
                {t('features.noCard')}
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-[#85d6d6]/10 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#85d6d6]"></div>
                </div>
                {t('features.noCoding')}
              </div>
            </div>

            {/* CTA */}
            <TryLandBotFree className="!bg-[#85d6d6] hover:!bg-[#6BC7C7] text-white border-0 !px-8" />
          </div>

          {/* Right Column - Chat Image */}
          <div className="relative flex items-center justify-center w-full">
            {/* Partners */}
            <div className="absolute -top-4 right-0 flex items-center gap-6 bg-white rounded-xl py-2.5 px-4 shadow-lg">
              <Image
                src={G2starsImage}
                alt="G2 5 stars rating"
                width={80}
                height={24}
              />
              <div className="h-8 w-[1px] bg-gray-200"></div>
              <div className="flex items-center gap-2">
                <Image
                  src={MetaImage}
                  alt="Meta Business Partner"
                  width={80}
                  height={24}
                />
              </div>
            </div>
            
            {/* Chat Image */}
            <div className="relative w-full h-[600px]">
              <Image
                src={t('images.chat')}
                alt="Chatbot Interface"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 