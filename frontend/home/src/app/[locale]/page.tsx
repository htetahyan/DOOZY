import { Hero } from '@/components/home/Hero';
import { AIChatbotsSection } from '@/components/home/AIChatbotsSection';
import { IntegrationsSection } from '@/components/home/IntegrationsSection';
import { DifferencesSection } from '@/components/home/DifferencesSection';
import { RelationshipsSection } from '@/components/home/RelationshipsSection';
import { useTranslations } from 'next-intl';

export default function Home() {
  const tAI = useTranslations('home.ai_chatbots_section');
  const tIntegrations = useTranslations('common.integrations_section');
  const tDifferences = useTranslations('home.differences_section');
  const tRelationships = useTranslations('home.relationships_section');
  
  return (
    <main>
      <Hero />
      <AIChatbotsSection t={tAI} />
      <IntegrationsSection t={tIntegrations} />
      <DifferencesSection t={tDifferences} />
      <div className='h-[20vh] w-full relative'> 
        <RelationshipsSection t={tRelationships} imageOrder={0} />
      </div>
    </main>
  );
} 