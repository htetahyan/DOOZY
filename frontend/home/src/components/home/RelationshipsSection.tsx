import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { TryFreeForWebsite } from '../ReuseableButtons';

interface RelationshipsSectionProps {
  t: any;
  imageOrder?: number;
}

export function RelationshipsSection({ t, imageOrder = 0 }: RelationshipsSectionProps) {
  return (
    <div className="w-full">
      <section className="relative py-6 px-4 md:px-6 lg:px-8 bg-[#2b1c50] text-white overflow-hidden w-full">
        {/* Grid Background */}
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: 'linear-gradient(#4A4A4A 1px, transparent 1px), linear-gradient(90deg, #4A4A4A 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="relative w-full mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column - Chat Interface */}
            <div className={`lg:col-span-5 flex justify-center lg:justify-start ${imageOrder === 0 ? 'order-0' : 'order-1'}`}>
              <div className="relative w-full max-w-[80%] bg-transparent">
                {/* Chat Interface Image */}
                <Image
                  src={t('image')}
                  alt="Landbot Chat Interface"
                  width={2500}
                  quality={100}
                  height={2200}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-7 flex flex-col lg:pl-8">
              <div className="space-y-3">
                {t.raw('lines').map((line: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <h2 className="text-xl md:text-2xl font-bold leading-tight">
                      {line}
                      {index === 2 && (
                        <span className="inline-flex text-lg md:text-xl items-center ml-3 px-3 py-1 bg-white text-[#2B1C50] rounded-lg font-semibold">
                          {t('badge')}
                        </span>
                      )}
                    </h2>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <TryFreeForWebsite />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 