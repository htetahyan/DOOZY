import Image from 'next/image';

interface MarketingSectionProps {
  t: any;
}

export function MarketingSection({ t }: MarketingSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - World Map Image */}
          <div className="relative min-h-[400px] md:min-h-[600px] order-2 lg:order-1">
            <Image
              src={t('image')}
              alt="World Map with Users"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right Column - Content */}
          <div className="max-w-3xl lg:pl-16 order-1 lg:order-2">
            {/* Badge */}
            <div className="mb-8">
              <span className="text-[#FF4D8D] text-sm font-semibold tracking-wider uppercase">
                {t('badge')}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              {t('title')}
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl leading-relaxed">
              {t('description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 