import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { defaultMarginPadding } from '@/lib/utils';
import { UseWithLandBot, TryLandBotFree } from '@/components/ReuseableButtons';
import { Checkbox } from '@/components/ui/checkbox';

const IntegrationDetailPage = async ({ params }: { params: { software: string; locale: string } }) => {
  const { software } = params;
  
  // Get all translations at once
  const t = await getTranslations('integration');
  const tCommon = await getTranslations('common');
  
  // Access the integration data directly from the raw object
  const integrationData = t.raw('integrationPages')[software];

  if (!integrationData) {
    return <div>Integration not found</div>;
  }

  // Extract key features data with null checks
  const keyFeatures = integrationData.about?.keyFeatures;
  const keyFeaturesTitle = keyFeatures?.title || 'Key Features';
  const keyFeaturesCheckboxes = keyFeatures?.checkBoxs || [];

  return (
    <main className={`min-h-screen bg-white ${defaultMarginPadding}`}>
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/integrations" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to all Integrations
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Main Content */}
          <div className="flex-1">
            {/* Logo and Title */}
            <div className="flex flex-col gap-4 mb-8">
              <Image
                src={tCommon.raw('icons')[software]}
                alt={integrationData.title}
                width={80}
                height={80}
                className="rounded-lg"
              />
              <h1 className="text-4xl font-bold">{integrationData.title}</h1>
              <p className="text-xl text-gray-600">{integrationData.subtitle}</p>
            </div>

            {/* CTA Button */}
            <div className="mb-8">
              <UseWithLandBot className="bg-[#FF4D4D] hover:bg-[#FF3333] text-white" />
            </div>
          </div>

          {/* Right Column - Categories */}
          <div className="lg:w-[300px] space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">PRODUCTS</h3>
              <div className="flex flex-wrap gap-2">
                {integrationData.products.map((product: string) => (
                  <span key={product} className="px-3 py-1 bg-[#F4F4F4] rounded-md text-sm">
                    {product}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">CATEGORY</h3>
              <div className="flex flex-wrap gap-2">
                {integrationData.category.map((cat: string) => (
                  <span key={cat} className="px-3 py-1 bg-[#F4F4F4] rounded-md text-sm">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">{integrationData.about.title}</h2>
          <div className="space-y-4">
            {integrationData.about.contents.map((content: string, index: number) => (
              <p key={index} className="text-gray-600">{content}</p>
            ))}
            {integrationData.about.listText && (
              <ul className="list-disc pl-6 space-y-2">
                {integrationData.about.listText.map((item: string, index: number) => (
                  <li key={index} className="text-gray-600">{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      {keyFeatures && (
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">{keyFeaturesTitle}</h2>
            <div className="space-y-4">
              {keyFeaturesCheckboxes.map((feature: string, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox checked disabled id={`feature-${index}`} />
                  <label
                    htmlFor={`feature-${index}`}
                    className="text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {feature}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Integration Preview Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">{integrationData.about.integrationPreview.title}</h2>
          <div className="rounded-xl overflow-hidden bg-[#2B2B3D] p-8">
            <Image
              src={integrationData.about.integrationPreview.image}
              alt="Integration Preview"
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* See How it Works Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">{integrationData.about.seeHowItworks.title}</h2>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={integrationData.about.seeHowItworks.video.replace('youtu.be/', 'youtube.com/embed/')}
              title="Integration Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Start Building Section */}
      <section className="py-32 bg-white border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[48px] font-bold text-[#2B1C50] mb-10 leading-tight">
            {tCommon('start_building.title')}
          </h2>
          <TryLandBotFree className="!bg-[#FF4D4D] hover:!bg-[#FF3333] text-white !px-8 !py-6 !text-lg" />
        </div>
      </section>
    </main>
  );
};

export default IntegrationDetailPage;
