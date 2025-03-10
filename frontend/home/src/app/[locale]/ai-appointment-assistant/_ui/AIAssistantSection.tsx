import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { TryFreeForWebsite } from '@/components/ReuseableButtons';

interface AIAssistantSectionProps {
  t: any;
}

export function AIAssistantSection({ t }: AIAssistantSectionProps) {
  return (
    <section className="relative h-[85vh] bg-[#2b1c50] text-white overflow-hidden w-full">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: 'linear-gradient(#4A4A4A 1px, transparent 1px), linear-gradient(90deg, #4A4A4A 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative h-full w-full mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid h-full grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Chat Interface */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[90%] bg-transparent">
              {/* Chat Interface Image */}
              <Image
                src={t('image')}
                alt="AI Assistant"
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
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    {line}
                    {index === 2 && (
                      <span className="inline-flex text-xl md:text-2xl lg:text-3xl items-center ml-3 px-3 py-1 bg-white text-[#2B1C50] rounded-lg font-semibold">
                        {t('badge')}
                      </span>
                    )}
                  </h2>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <TryFreeForWebsite className="text-lg px-8 py-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 