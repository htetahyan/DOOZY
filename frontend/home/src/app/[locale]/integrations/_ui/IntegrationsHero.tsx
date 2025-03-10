import Image from 'next/image';

interface IntegrationsHeroProps {
  t: any;
}

export function IntegrationsHero({ t }: IntegrationsHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="max-w-2xl">
            <h1 className="text-[2.75rem] md:text-[3.25rem] font-bold leading-[1.2] mb-6">
              {t('title')}
            </h1>
            <p className="text-2xl">
              {t('description')}
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[600px] w-full">
            <Image
              src={t('image')}
              alt="Landbot Integrations"
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