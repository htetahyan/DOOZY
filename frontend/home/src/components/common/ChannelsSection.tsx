import { useTranslations } from 'next-intl';
import { TryFreeForWebsite, TryFreeForWhatsApp } from '@/components/ReuseableButtons';
import { MessageSquare, MessageCircle } from 'lucide-react';

export function ChannelsSection() {
  const t = useTranslations('common.channels_section');

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B] text-center mb-16 max-w-3xl mx-auto">
          {t('title')}
        </h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Website Channel */}
          <div className="rounded-2xl p-8 text-center flex flex-col items-center bg-gradient-to-b from-white to-[#F5F5F5] w-full md:w-[384px]">
            <div className="w-16 h-16 bg-[#FF4D4D] rounded-2xl flex items-center justify-center mb-6">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#1B1B1B]">
              {t('channels.website.title')}
            </h3>
            <p className="text-gray-600 mb-8">
              {t('channels.website.description')}
            </p>
            <TryFreeForWebsite />
          </div>

          {/* WhatsApp Channel */}
          <div className="rounded-2xl p-8 text-center flex flex-col items-center bg-gradient-to-b from-white to-[#F5F5F5] w-full md:w-[384px]">
            <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#1B1B1B]">
              {t('channels.whatsapp.title')}
            </h3>
            <p className="text-gray-600 mb-8">
              {t('channels.whatsapp.description')}
            </p>
            <TryFreeForWhatsApp />
          </div>
        </div>
      </div>
    </section>
  );
} 