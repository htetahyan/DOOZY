import { getTranslations } from 'next-intl/server';
import { SalesHero } from './_ui/SalesHero';
import { ContentWithFeatures } from '@/components/common/SalesFeatures';
import { defaultMarginPadding } from '@/lib/utils';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { IntegrationsSection } from '@/components/home/IntegrationsSection';

export async function generateMetadata() {
  const t = await getTranslations('solution.chatbot-for-sales');

  return {
    title: 'Chatbot for Sales - Landbot',
    description: t('hero.description'),
  };
}

export default async function ChatbotForSalesPage() {
  const tHero = await getTranslations('solution.chatbot-for-sales.hero');
  const tFourGrid = await getTranslations('solution.chatbot-for-sales.fourGridFeatures');
  const tFeatures=await getTranslations("solution.chatbot-for-sales.features_section")
  const tIntegrations = await getTranslations('solution.chatbot-for-sales.integrations_section');

  return (
    <main className={`bg-gradient-to-b from-[#F5F5F5] to-white ${defaultMarginPadding}`}>
      <SalesHero t={tHero} />
      <ContentWithFeatures t={tFourGrid} />
      <FeaturesSection t={tFeatures}/>
      <IntegrationsSection t={tIntegrations} hasButton={false}/>
    </main>
  );
} 