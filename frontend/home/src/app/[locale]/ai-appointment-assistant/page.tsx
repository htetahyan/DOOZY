import { getTranslations } from 'next-intl/server';
import { AppointmentHero } from './_ui/AppointmentHero';

export async function generateMetadata() {
  const t = await getTranslations('product.ai_appointment_assistant');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function AiAppointmentAssistant() {
  const t = await getTranslations("product.ai_appointment_assistant");

  return (
    <main className='bg-[#F5F5FF] -mx-4 md:-mx-8 lg:-mx-16 xl:-mx-24'>
      <AppointmentHero t={t} />
    </main>
  );
}
