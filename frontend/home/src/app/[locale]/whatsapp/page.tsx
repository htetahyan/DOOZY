import { getTranslations } from 'next-intl/server';
import { WhatsAppHero } from './_ui/WhatsAppHero';
import { MarketingSection } from './_ui/MarketingSection';
import { SupportSection } from './_ui/SupportSection';
import { PlatformSection } from './_ui/PlatformSection';
import { FeatureGrid } from './_ui/FeatureGrid';
import { defaultMarginPadding } from '@/lib/utils';

export async function generateMetadata() {
  const t = await getTranslations('product.whatsapp');

  return {
    title: 'WhatsApp Automation - Landbot',
    description: t('hero.description'),
  };
}

export default async function WhatsAppPage() {
  const tHero = await getTranslations('product.whatsapp.hero');
  const tMarketing = await getTranslations('product.whatsapp.marketing_section');
  const tSupport = await getTranslations('product.whatsapp.support_section');
  const tPlatform = await getTranslations('product.whatsapp.platform_section');
  const tFeatures = await getTranslations('common.features_grid');

  return (
    <main className={`${defaultMarginPadding} bg-white`}>
      <WhatsAppHero t={tHero} />
      <MarketingSection t={tMarketing} />
      <SupportSection t={tSupport} />
      <PlatformSection t={tPlatform} />
      <FeatureGrid t={tFeatures} />
      
    </main>
  );
}
