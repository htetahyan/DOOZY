import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ChevronDown } from 'lucide-react'
import { ReactNode, useState } from 'react'

interface NavPopoverProps {
  trigger: string
  children: ReactNode
  className?: string
  onLinkClick?: () => void
}

export function NavPopover({ trigger, children, className, onLinkClick }: NavPopoverProps) {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
    onLinkClick?.()
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" className={`gap-1 hover:text-primary ${open ? 'text-primary' : ''}`}>
          {trigger}
          <ChevronDown className={`h-4 w-4 duration-100 transition-transform will-change-auto ${open ? 'rotate-180' : ''}`} />
        </Button>
      </PopoverTrigger>
      <PopoverContent  
        className={`w-screen border-t-0 rounded-none h-fit shadow-lg ${className}`}
        style={{ 
          maxWidth: '100vw',
          marginTop: '1px',
          backgroundColor: '#FAFAFA'
        }}
      >
        <div className="container mx-auto py-12" onClick={handleClose}>
          {children}
        </div>
      </PopoverContent>
    </Popover>
  )
} 