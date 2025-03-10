'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TemplateCard } from './TemplateCard';

interface Template {
  title: string;
  description: string;
  category: string;
  platforms: string[];
  image: string;
}

interface PopularTemplatesProps {
  title: string;
  templates: Template[];
}

export function PopularTemplates({ title, templates }: PopularTemplatesProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 280 + 24; // card width + gap
      scrollContainerRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="relative py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[28px] font-medium text-[#1B1B1B]">{title}</h2>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('left')}
            className="h-10 w-10 rounded-full border-[#E5E7EB]"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('right')}
            className="h-10 w-10 rounded-full border-[#E5E7EB]"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide"
      >
        {templates.map((template, index) => (
          <div 
            key={index} 
            className="w-[280px] flex-shrink-0"
          >
            <TemplateCard {...template} />
          </div>
        ))}
      </div>
    </div>
  );
} 