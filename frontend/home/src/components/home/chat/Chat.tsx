import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ChatMessage } from './ChatMessage'
import { TypingIndicator } from './TypingIndicator'
import { ArrowLeft } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface Message {
  type: 'text' | 'image' | 'button'
  content: string
  isUser?: boolean
}

interface ChatProps {
  messages: Message[]
  botAvatar: string
  ironManImage: string
  buttonText: string
}

export function Chat({ messages: initialMessages, botAvatar, ironManImage, buttonText }: ChatProps) {
  const t = useTranslations('home.hero.chat')
  const chatRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const [showSecondConversation, setShowSecondConversation] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [conversationCount, setConversationCount] = useState(1)

  // Define conversation sequences
  const getInitialSequence = (): Message[] => [
    { type: 'text', content: t('botMessage'), isUser: false },
    { type: 'text', content: t('userMessage'), isUser: false },
    { type: 'image', content: ironManImage },
    { type: 'button', content: buttonText }
  ]

  const getSecondSequence = (): Message[] => [
    { type: 'text', content: buttonText, isUser: true },
    { type: 'text', content: t('secondConversation.messages.0') },
    { type: 'text', content: t('secondConversation.messages.1') },
    { type: 'text', content: t('secondConversation.messages.2') },
    { type: 'image', content: t('demo.gifUrl') }
  ]
  
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }
  
  const handleButtonClick = () => {
    if (showSecondConversation) return
    
    setShowSecondConversation(true)
    const additionalMessages = getSecondSequence()
    setMessages(prev => [...prev.filter(m => m.type !== 'button'), ...additionalMessages])
  }
  
  const handleBackClick = () => {
    setConversationCount(prev => prev + 1)
    const newMessages = [
      // User's "Back" action
      { type: 'text' as const, content: t('secondConversation.backButton'), isUser: true },
      // Initial conversation
      ...getInitialSequence()
    ]
    setMessages(prev => [...prev, ...newMessages])
    setShowSecondConversation(false)
  }
  
  useEffect(() => {
    if (!chatRef.current) return
    
    const messageElements = chatRef.current.querySelectorAll('.message-item')
    const typingIndicator = chatRef.current.querySelector('.typing-indicator')
    
    // Calculate the number of new messages based on the action
    const newMessageCount = showSecondConversation ? 
      getSecondSequence().length : 
      getInitialSequence().length + 1 // +1 for the "Back" message
    
    const startIndex = messages.length - newMessageCount
    let currentIndex = Math.max(0, startIndex)
    
    // Show all messages up to startIndex
    messageElements.forEach((el, i) => {
      if (i < currentIndex) {
        gsap.set(el, { opacity: 1, display: 'flex' })
      }
    })
    
    // Hide remaining messages
    gsap.set([...Array.from(messageElements)].slice(currentIndex), { opacity: 0, display: 'none' })
    gsap.set(typingIndicator, { opacity: 0, display: 'none' })
    
    const tl = gsap.timeline({ delay: 0.2 })
    
    // Function to animate typing dots
    const animateTyping = () => {
      const dots = typingIndicator?.querySelectorAll('.dot')
      if (!dots) return
      
      gsap.to(dots, {
        opacity: 0.8,
        stagger: { each: 0.15, repeat: -1, yoyo: true },
        duration: 0.2
      })
    }
    
    // Show user message immediately if it's the next one
    if (messageElements[currentIndex] && messages[currentIndex]?.isUser) {
      gsap.set(messageElements[currentIndex], { opacity: 1, display: 'flex' })
      currentIndex++
    }
    
    // Sequence for each message after currentIndex
    messageElements.forEach((_, index) => {
      if (index < currentIndex) return // Skip already shown messages
      
      tl
        // Show typing
        .to(typingIndicator, {
          opacity: 1,
          display: 'flex',
          duration: 0.2,
          onStart: animateTyping
        })
        // Wait for typing
        .to({}, { duration: 1 })
        // Hide typing and show message
        .to(typingIndicator, {
          opacity: 0,
          display: 'none',
          duration: 0.2
        })
        .to(messageElements[index], {
          opacity: 1,
          display: 'flex',
          duration: 0.2,
          onComplete: scrollToBottom
        })
        // Pause before next
        .to({}, { duration: 0.5 })
    })
    
    return () => {
      tl.kill()
    }
  }, [messages, showSecondConversation, conversationCount])

  return (
    <div ref={chatRef} className="bg-white rounded-xl shadow-lg mt-16 max-w-md mx-auto">
      <div 
        ref={chatContainerRef}
        className="p-4 relative max-h-[500px] overflow-y-auto scroll-smooth"
        style={{ scrollBehavior: 'smooth' }}
      >
        {messages.map((message, index) => (
          <ChatMessage 
            key={`${message.type}-${index}-${conversationCount}`} 
            avatar={botAvatar}
            isUser={message.isUser}
          >
            {message.type === 'text' && (
              <div className={`rounded-2xl p-3 ${message.isUser ? 'bg-[#E94E77] text-white' : 'bg-[#F8F9FE] text-[#111827]'}`}>
                <p className="text-sm">{message.content}</p>
              </div>
            )}
            {message.type === 'image' && (
              <Image
                src={message.content}
                alt="Demo"
                width={230}
                height={172}
                className="rounded-xl"
              />
            )}
            {message.type === 'button' && !showSecondConversation && (
              <Button 
                onClick={handleButtonClick}
                className="bg-[#E94E77] hover:bg-[#D43A66] text-white px-4 py-2 text-sm h-auto w-auto"
              >
                {buttonText}
              </Button>
            )}
          </ChatMessage>
        ))}
        
        <TypingIndicator avatar={botAvatar} />
      </div>
      
      {showSecondConversation && (
        <div className="border-t p-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBackClick}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('secondConversation.backButton')}
          </Button>
        </div>
      )}
    </div>
  )
} 