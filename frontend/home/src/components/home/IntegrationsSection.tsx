import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TryLandBotFree } from '../ReuseableButtons';

interface IntegrationsSectionProps {
  t: any;
  hasButton?:boolean
}

export function IntegrationsSection({ t ,hasButton=true}: IntegrationsSectionProps) {
  return (
    <section className="py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B1B1B] mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="relative">
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {t.raw('integrations').map((integration: any, index: number) => (
              <div 
                key={index} 
                className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-shadow"
              >
                <Image
                  src={integration.image}
                  alt={integration.name}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Link to all integrations */}
          <div className={`${hasButton? 'text-end':"text-center"} mb-12`}>
            <Link 
              href="/integrations" 
              className="inline-flex items-center hover:text-primary/90 font-medium"
            >
              {t('link_text')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* CTA Button */}
       {hasButton&&    (<div className="text-center">
           <TryLandBotFree />
          </div>)}
        </div>
      </div>
    </section>
  );
} 