import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Integration {
  name: string;
  description: string;
  icon: string;
  link: string;
}

interface NativeIntegrationsProps {
  t: any;
  variant?: 'grid' | 'website-builders';
  title?: string;
  description?: string;
  className?: string;
}

export function NativeIntegrations({ t, variant = 'grid', title, description, className }: NativeIntegrationsProps) {
  const integrations: Integration[] = t.raw('items');

  // Function to create URL-friendly paths
  const createIntegrationPath = (name: string): string => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  if (variant === 'website-builders') {
    return (
      <section className={cn("py-16", className)}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {title || "Website Builders & CMS"}
            </h2>
            <p className="text-lg text-gray-600">
              {description || "Launch a chatbot on your website in minutes using your favourite website builder and content management system."}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations
              .filter(integration => 
                ['Webflow', 'WordPress', 'Shopify', 'Carrd'].includes(integration.name))
              .map((integration, index) => (
                <Link 
                  key={index}
                  href={`/integrations/${createIntegrationPath(integration.name)}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="mb-4 flex justify-center">
                      <div className="w-16 h-16 relative">
                        <Image
                          src={integration.icon}
                          alt={integration.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-medium mb-2">
                      {integration.name}
                    </h3>
                    <span className="text-primary text-sm group-hover:underline inline-flex items-center">
                      View Integration
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    );
  }

  // Original grid layout
  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">
            {title || t('title')}
          </h2>
          <p className="text-xl">
            {description || t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 relative">
                    <Image
                      src={integration.icon}
                      alt={integration.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {integration.name}
                </h3>
                <p className="text-lg mb-4 flex-grow">
                  {integration.description}
                </p>
                <Link 
                  href={`/integrations/${createIntegrationPath(integration.name)}`}
                  className="inline-flex items-center text-primary hover:text-primary/90"
                >
                  {integration.link}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 