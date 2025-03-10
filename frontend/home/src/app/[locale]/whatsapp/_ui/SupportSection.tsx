import Image from 'next/image';

interface SupportSectionProps {
  t: any;
}

export function SupportSection({ t }: SupportSectionProps) {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-8">
              <span className="text-[#85d6d6] text-sm font-semibold tracking-wider uppercase">
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

          {/* Right Column - Support Image */}
          <div className="relative min-h-[400px] md:min-h-[600px]">
            <Image
              src={t('image')}
              alt="Support and Operations"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 