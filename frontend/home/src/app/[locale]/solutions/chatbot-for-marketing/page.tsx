import { getTranslations } from 'next-intl/server';
import { MarketingHero } from './_ui/MarketingHero';
import Patners from '@/components/home/Patners';
import { StepGuides } from '../../ai-appointment-assistant/_ui/StepGuides';
import { StepGuidesWrapper } from '../../ai-appointment-assistant/_ui/StepGuidesWrapper';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { IntegrationsSection } from '@/components/home/IntegrationsSection';

export async function generateMetadata() {
  const t = await getTranslations('solution.chatbot_for_marketing.hero');

  return {
    title: 'Chatbot for Marketing - Landbot',
    description: t('description'),
  };
}

export default async function ChatbotForMarketingPage() {
  const t = await getTranslations('solution.chatbot_for_marketing');
  const tIntegrations = await getTranslations('common.integrations_section');

  const partnersTitle = t('patners.title');
const tFeatures=await getTranslations("solution.chatbot_for_marketing.features_section")
  return (
    <main className="min-h-screen  bg-gradient-to-bl from-[#ffe1eb] from-20% to-[#fefcfd] to-30% -mx-4 md:-mx-8 lg:-mx-16 xl:-mx-24">
      <MarketingHero t={t} />
      <Patners title={partnersTitle} />
      <StepGuidesWrapper t={t}/>
      <FeaturesSection t={tFeatures}/>
      <IntegrationsSection t={tIntegrations} hasButton={false}/>
    </main>
  );
}
