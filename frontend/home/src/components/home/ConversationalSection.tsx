import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ConversationalSectionProps {
  t: any;
}

export function ConversationalSection({ t }: ConversationalSectionProps) {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-[#1B1B1B] mb-6 leading-tight">
              {t('title')}{' '}
              <span className="text-primary">{t('highlight')}</span>{' '}
              {t('highlight_suffix')}{' '}
              {t('title_suffix')}
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              {t('description')}{' '}
              <span className="font-semibold">
                {t.raw('platforms').join(', ')}
              </span>
              , {t('connect_text')}.
            </p>
            <div className="mt-8">
              <Button size="lg" className="h-12 px-6 text-base font-semibold">
                {t('cta')}
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src={t('image')}
              alt="Conversational Experience"
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