import {
  Calendar,
  MessageSquare,
  Globe,
  Code,
  Users,
  HeartHandshake,
  HelpCircle,
  BookOpen,
  FileText,
  Podcast,
  MessagesSquare,
  GraduationCap,
  Layout,
  ChevronRight,
  Check,
} from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'

interface NavItemProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  badge?: string
}

function NavItem({ icon, title, description, href, badge }: NavItemProps) {
  return (
    <Link 
      href={href}
      className="flex items-start gap-4 p-3 rounded-lg hover:bg-white transition-colors group"
    >
      <div className="shrink-0 mt-1 text-blue-500 group-hover:text-primary">{icon}</div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-gray-900">{title}</h3>
          {badge && (
            <span className="px-2 py-0.5 text-[10px] font-medium bg-primary/10 text-primary rounded-full uppercase">
              {badge}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      {href.includes('chatbot') && (
        <div className="shrink-0 self-center">
          <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-primary" />
        </div>
      )}
    </Link>
  )
}

export function ProductContent() {
  const t = useTranslations('common.navbar.productMenu')
  
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-4 space-y-8">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-500">{t('products')}</h2>
          <div className="space-y-1">
            <NavItem
              icon={<Calendar className="h-5 w-5 text-indigo-500" />}
              title={t('aiAssistant.title')}
              description={t('aiAssistant.description')}
              href="/ai-appointment-assistant"
              badge="New"
            />
            <NavItem
              icon={<MessageSquare className="h-5 w-5 text-green-500" />}
              title={t('whatsapp.title')}
              description={t('whatsapp.description')}
              href="/whatsapp"
            />
            <NavItem
              icon={<Globe className="h-5 w-5 text-pink-500" />}
              title={t('website.title')}
              description={t('website.description')}
              href="/website"
            />
          </div>
        </div>
      </div>

      <div className="col-span-4 space-y-8">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-500">{t('platform')}</h2>
          <div className="space-y-1">
            <NavItem
              icon={<Code className="h-5 w-5 text-orange-500" />}
              title={t('api.title')}
              description={t('api.description')}
              href="/api"
            />
          </div>
        </div>
      </div>

      <div className="col-span-4 space-y-8">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-500">PLATFORM AND INTEGRATIONS</h2>
          <div className="space-y-1">
            <NavItem
              icon={<MessageSquare className="h-5 w-5 text-purple-500" />}
              title="Chatbot Platform"
              description="Design and deploy chatbots anywhere with a no-code builder →"
              href="/chatbot"
            />
            <NavItem
              icon={<Code className="h-5 w-5 text-blue-500" />}
              title="Integrations"
              description="Empower conversations with easy-to-set-up integrations →"
              href="/integrations"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function SolutionsContent() {
  const t = useTranslations('common.navbar.solutionsMenu')
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h2 className="mb-4 text-lg font-semibold">{t('byTeam')}</h2>
        <div className="space-y-2">
          <NavItem
            icon={<Users className="h-5 w-5" />}
            title={t('marketing.title')}
            description={t('marketing.description')}
            href="/marketing"
          />
          <NavItem
            icon={<HeartHandshake className="h-5 w-5" />}
            title={t('sales.title')}
            description={t('sales.description')}
            href="/sales"
          />
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold">{t('byUseCase')}</h2>
        <div className="space-y-2">
          <NavItem
            icon={<Users className="h-5 w-5" />}
            title={t('leadGen.title')}
            description={t('leadGen.description')}
            href="/lead-generation"
          />
          <NavItem
            icon={<HeartHandshake className="h-5 w-5" />}
            title={t('engagement.title')}
            description={t('engagement.description')}
            href="/engagement"
          />
          <NavItem
            icon={<HelpCircle className="h-5 w-5" />}
            title={t('support.title')}
            description={t('support.description')}
            href="/support"
          />
        </div>
      </div>
    </div>
  )
}

export function ResourcesContent() {
  const t = useTranslations('common.navbar.resourcesMenu')
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <h2 className="mb-4 text-lg font-semibold">{t('getInspired')}</h2>
        <div className="space-y-2">
          <NavItem
            icon={<BookOpen className="h-5 w-5" />}
            title={t('blog.title')}
            description={t('blog.description')}
            href="/blog"
          />
          <NavItem
            icon={<FileText className="h-5 w-5" />}
            title={t('whitepapers.title')}
            description={t('whitepapers.description')}
            href="/whitepapers"
          />
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold">{t('joinConversation')}</h2>
        <div className="space-y-2">
          <NavItem
            icon={<Podcast className="h-5 w-5" />}
            title={t('podcast.title')}
            description={t('podcast.description')}
            href="/podcast"
          />
          <NavItem
            icon={<MessagesSquare className="h-5 w-5" />}
            title={t('whatsapp.title')}
            description={t('whatsapp.description')}
            href="/whatsapp-channel"
          />
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-semibold">{t('learn')}</h2>
        <div className="space-y-2">
          <NavItem
            icon={<Users className="h-5 w-5" />}
            title={t('community.title')}
            description={t('community.description')}
            href="/community"
          />
          <NavItem
            icon={<BookOpen className="h-5 w-5" />}
            title={t('knowledge.title')}
            description={t('knowledge.description')}
            href="/knowledge"
          />
          <NavItem
            icon={<GraduationCap className="h-5 w-5" />}
            title={t('academy.title')}
            description={t('academy.description')}
            href="/academy"
          />
          <NavItem
            icon={<Layout className="h-5 w-5" />}
            title={t('templates.title')}
            description={t('templates.description')}
            href="/templates"
          />
        </div>
      </div>
    </div>
  )
} 