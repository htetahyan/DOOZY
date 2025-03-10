import { getTranslations } from 'next-intl/server';
import { AppointmentHero } from './_ui/AppointmentHero';
import { StepGuidesWrapper } from './_ui/StepGuidesWrapper';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { ChannelsSection } from '@/components/common/ChannelsSection';
import { TestimonialsSection } from '@/components/common/TestimonialsSection';
import { WhyChooseSection } from '@/components/common/WhyChooseSection';
import { Brain, Bot, Settings } from 'lucide-react';
import { AIAssistantSection } from './_ui/AIAssistantSection';

export async function generateMetadata() {
  const t = await getTranslations('product.ai_appointment_assistant');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function AiAppointmentAssistant() {
  const t = await getTranslations("product.ai_appointment_assistant");
  const tFeatures = await getTranslations("product.ai_appointment_assistant.features_section");
  const tWhyChoose = await getTranslations("product.ai_appointment_assistant.why_choose_section");
  const tAIAssistant = await getTranslations("product.ai_appointment_assistant.ai_assistant_section");

  const whyChooseFeatures = [
    {
      Icon: Brain,
      title: tWhyChoose('features.0.title'),
      description: tWhyChoose('features.0.description'),
    },
    {
      Icon: Bot,
      title: tWhyChoose('features.1.title'),
      description: tWhyChoose('features.1.description'),
    },
    {
      Icon: Settings,
      title: tWhyChoose('features.2.title'),
      description: tWhyChoose('features.2.description'),
    },
  ];

  return (
    <main className='bg-[#F5F5FF] -mx-4 md:-mx-8 lg:-mx-16 xl:-mx-24'>
      <AppointmentHero t={t} />
      <FeaturesSection t={tFeatures} />
      <StepGuidesWrapper t={t} />
      <WhyChooseSection t={tWhyChoose} features={whyChooseFeatures} />
      <ChannelsSection />
      <AIAssistantSection t={tAIAssistant} />
      <TestimonialsSection />
    </main>
  );
}
