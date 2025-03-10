import Image from 'next/image';
import { TryLandBotFree, GetDemo } from '@/components/ReuseableButtons';

interface WhatsAppHeroProps {
  t: any;
}

export function WhatsAppHero({ t }: WhatsAppHeroProps) {
  return (
    <section className="relative overflow-hidden  py-8 md:py-12">
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
              <span className="text-[#1B1B1B] block">{t('title.middle')}</span>
              <span className="text-[#1B1B1B]">{t('title.on')}{' '}</span>
              <span className="text-[#85d6d6]">{t('title.whatsapp')}</span>{' '}
              <span className="text-[#1B1B1B]">{t('title.end')}</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#666666] mb-8 max-w-[90%]">
              {t('description')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <TryLandBotFree className="!bg-[#85d6d6] hover:!bg-[#6BC7C7] text-white border-0 !px-8" />
              <GetDemo className="!text-[#666666] hover:!bg-gray-50" />
            </div>
          </div>

          {/* Right Column - Phone Image */}
          <div className="relative flex items-center justify-center min-h-[500px] md:min-h-[600px] w-full mt-8 md:mt-0">
            {/* Background Shape */}
            <div 
              className="absolute top-0 right-0 w-[120%] h-full"
              style={{
                transform: 'translate(15%, -5%)'
              }}
            >
              <Image
                src={t('images.background')}
                alt="Background Shape"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Phone Image */}
            <div className="relative w-[300px] md:w-[420px] h-[500px] md:h-[600px] z-10">
              <Image
                src={t('images.phone')}
                alt="WhatsApp Interface"
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