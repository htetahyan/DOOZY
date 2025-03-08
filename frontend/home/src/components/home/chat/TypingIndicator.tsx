import Image from 'next/image'

interface TypingIndicatorProps {
  avatar: string
}

export function TypingIndicator({ avatar }: TypingIndicatorProps) {
  return (
    <div className="typing-indicator flex items-start">
      <div className="w-8 flex-shrink-0">
        <div className="w-8 h-8 rounded-full border-2 border-white shadow-sm overflow-hidden bg-white">
          <Image
            src={avatar}
            alt="Landbot Avatar"
            width={32}
            height={32}
          />
        </div>
      </div>
      <div className="bg-[#F8F9FE] rounded-2xl py-2 px-3 ml-2 inline-flex items-center gap-1">
        <span className="dot w-1.5 h-1.5 rounded-full bg-[#6366F1] opacity-40"></span>
        <span className="dot w-1.5 h-1.5 rounded-full bg-[#6366F1] opacity-40"></span>
        <span className="dot w-1.5 h-1.5 rounded-full bg-[#6366F1] opacity-40"></span>
      </div>
    </div>
  )
} 