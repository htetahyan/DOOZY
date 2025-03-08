import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

interface AIChatbotsSectionProps {
  t: any;
}

export function AIChatbotsSection({ t }: AIChatbotsSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#2B1C50] -mx-4 md:-mx-8 lg:-mx-16 xl:-mx-24 px-1 md:px-2 lg:px-4 xl:px-8">
      {/* Floating Icons */}
    

      <div className="max-w-7xl mx-auto px-1 md:px-2 lg:px-4 xl:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          {/* Left Column */}
          <div className="flex flex-col text-white py-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {t('title.start')}{' '}
              <span className="relative inline-block">
                <span className="absolute -top-1 -left-2">
                  <Sparkles className="h-6 w-6 text-yellow-400" />
                </span>
                <span className="text-[#FF4D4D]">{t('title.highlight')}</span>
              </span>{' '}
              {t('title.end')}
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {t('description')}
            </p>
            <div>
              <Button 
                size="lg" 
                className="h-12 px-8 text-base font-semibold bg-[#FF4D4D] hover:bg-[#FF3333] text-white"
              >
                {t('cta')}
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-full bottom-0">
            <Image
              src={t('image')}
              alt="AI Chatbot Platform"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2B1C50] via-[#3B2A70] to-[#2B1C50] -z-10" />
    </section>
  );
} 