import { getTranslations } from 'next-intl/server';
import { IntegrationsHero } from './_ui/IntegrationsHero';
import { NativeIntegrations } from './_ui/NativeIntegrations';
import { defaultMarginPadding } from '@/lib/utils';

export async function generateMetadata() {
  const t = await getTranslations('integration.hero');

  return {
    title: 'Integrations - Landbot',
    description: t('description'),
  };
}

export default async function IntegrationsPage() {
  const tHero = await getTranslations('integration.hero');
  const tNative = await getTranslations('integration.native_integrations');

  return (
    <main className={`bg-gradient-to-b from-[#F5F5F5] to-white ${defaultMarginPadding}`}>
      <IntegrationsHero t={tHero} />
      <NativeIntegrations t={tNative} />
    </main>
  );
} 