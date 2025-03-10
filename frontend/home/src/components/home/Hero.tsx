
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { MessageSquare, Star, Facebook, MessageCircle, Slack } from 'lucide-react'

import Patners from './Patners'
import { FeaturesSection } from './FeaturesSection'
import { ConversationalSection } from './ConversationalSection'
import { getTranslations } from 'next-intl/server'

type MessageType = {
  type: 'text' | 'image' | 'button'
  content: string
}

export async  function Hero() {
  const t = await getTranslations('home.hero')
  const tFeatures = await getTranslations('home.features_section');
  const tConversational = await getTranslations('home.conversational_section');
  const tPatners=await getTranslations("home.patners")
  const messages: MessageType[] = [
    { type: 'text', content: t('chat.botMessage') },
    { type: 'text', content: t('chat.userMessage') },
    { type: 'image', content: t('images.ironMan') },
    { type: 'button', content: t('chat.buttonText') }
  ]

  return (
    <div className="relative overflow-hidden -mx-4 md:-mx-8 lg:-mx-16 xl:-mx-24 px-4 md:px-8 lg:px-16 xl:px-24">
      {/* Main Content */}
      <div className="container mx-auto  py-16">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-6 flex flex-col">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-8">
            <span className="text-sm font-bold tracking-wider text-gray-800">{t('badge')}</span>
              <div className="flex -space-x-1.5">
                <div className="bg-pink-500 rounded-lg p-1.5">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <div className="bg-blue-500 rounded-lg p-1.5">
                  <Slack className="h-4 w-4 text-white" />
                </div>
                <div className="bg-orange-500 rounded-lg p-1.5">
                  <MessageSquare className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            {/* Title & Description */}
            <h1 className="text-[3.25rem] font-bold text-[#1B1B1B] mb-6 leading-[1.2]">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              {t('description')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" className="h-12 px-6 text-base font-semibold" asChild>
                <a href="/try-free">{t('cta.tryFree')}</a>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6 text-base font-semibold" asChild>
                <a href="/demo">{t('cta.getDemo')}</a>
              </Button>
            </div>

            {/* Features */}
            <div className="flex gap-8 text-sm text-gray-600 font-medium">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                </div>
                {t('features.noCard')}
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                </div>
                {t('features.noCoding')}
              </div>
            </div>
          </div>

          {/* Right Column - Chat Preview */}
          <div className="col-span-12 lg:col-span-6 relative">
            {/* Partners */}
            <div className="absolute -top-4 right-0 flex items-center gap-6 bg-white rounded-xl py-2.5 px-4 shadow-lg">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              </div>
              <div className="h-8 w-[1px] bg-gray-200"></div>
              <div className="flex items-center gap-2">
                <Facebook className="h-5 w-5 text-[#0866FF]" />
                <span className="text-sm font-medium text-gray-600">Meta Business Partner</span>
              </div>
            </div>
<div className='h-full bg-white'>
  </div>
            {/* Chat Interface */}
           {/*  <Chat 
              messages={messages}
              botAvatar={t('images.botAvatar')}
              ironManImage={t('images.ironMan')}
              buttonText={t('chat.buttonText')}
            /> */}
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />
      
  
  
     
      <Patners title={tPatners('title')} />
      <FeaturesSection t={tFeatures} />
          <ConversationalSection t={tConversational} />
    </div>
  )
} 