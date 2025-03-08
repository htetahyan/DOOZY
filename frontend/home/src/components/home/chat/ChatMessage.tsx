import Image from 'next/image'
import { ReactNode } from 'react'

interface ChatMessageProps {
  avatar?: string
  children: ReactNode
  isUser?: boolean
}

export function ChatMessage({ avatar, children, isUser = false }: ChatMessageProps) {
  if (isUser) {
    return (
      <div className="message-item flex items-start mb-3 justify-end">
        <div className="ml-2 flex-1 flex justify-end">
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="message-item flex items-start mb-3">
      <div className="w-8 flex-shrink-0">
        <div className="w-8 h-8 rounded-full border-2 border-white shadow-sm overflow-hidden bg-white">
          <Image
            src={avatar!}
            alt="Landbot Avatar"
            width={32}
            height={32}
          />
        </div>
      </div>
      <div className="ml-2 flex-1">
        {children}
      </div>
    </div>
  )
} 