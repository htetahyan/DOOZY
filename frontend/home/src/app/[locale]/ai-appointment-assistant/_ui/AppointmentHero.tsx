import { Button } from '@/components/ui/button';

interface AppointmentHeroProps {
  t: any;
}

export function AppointmentHero({ t }: AppointmentHeroProps) {
  return (
    <section className="relative py-16 ">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8">
          <span className="text-[#6366F1] text-sm font-semibold tracking-wider uppercase">
            {t('badge')}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h1 className="text-[2.75rem] font-bold text-[#1B1B1B] mb-6 leading-[1.2]">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('description')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                size="lg"
                className="h-12 px-6 text-base font-semibold bg-[#FF4D4D] hover:bg-[#FF3333] text-white"
              >
                {t('cta.website')}
              </Button>
              <Button 
                variant={'default'}
                size="lg"
                className="h-12 px-6 text-base font-semibold bg-[#25D366] hover:bg-[#20BD5A] "
              >
                {t('cta.whatsapp')}
              </Button>
            </div>

            {/* Features */}
            <div className="flex gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-[#FF4D4D]/10 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#FF4D4D]"></div>
                </div>
                {t('features.noCard')}
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-[#FF4D4D]/10 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#FF4D4D]"></div>
                </div>
                {t('features.noCoding')}
              </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="relative">
            <div className="relative w-full rounded-2xl overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto rounded-lg"
              >
                <source src={t('video.url')} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 