import { PlatformContent } from "./PlatformContent";

interface PlatformSectionProps {
  t: any;
}

export function PlatformSection({ t }: PlatformSectionProps) {
  const features = t.raw('features');
  
  return (
    <section className="relative overflow-hidden py-10">
      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <PlatformContent features={features} />
      </div>
    </section>
  );
} 