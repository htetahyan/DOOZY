'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface Feature {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
}

interface PlatformContentProps {
  features: Feature[];
}

export function PlatformContent({ features }: PlatformContentProps) {
  const [activeFeature, setActiveFeature] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
  };

  // Mobile swipe functionality
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activeFeature < features.length - 1) {
      setActiveFeature(prev => prev + 1);
    }
    if (isRightSwipe && activeFeature > 0) {
      setActiveFeature(prev => prev - 1);
    }
  };

  return (
    <>
      {/* Feature Buttons - Desktop Only */}
      <div className="hidden lg:flex justify-center gap-4 ">
        {features.map((feature, index) => (
          <Button   
            key={feature.id}
            onClick={() => handleFeatureClick(index)}
            className={cn(
              "px-6 py-3 rounded-full text-sm font-semibold transition-all",
              activeFeature === index
                ? "bg-[#6366F1] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            )}
          >
            {feature.label}
          </Button>
        ))}
      </div>

      {/* Content Area */}
      <div 
        className="lg:grid lg:grid-cols-2 shadow-md bg-[#f9f9ff] px-2 md:px-4 lg:px-8 gap-12 items-center"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Text Content */}
        <div className="mb-8 lg:mb-0">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {features[activeFeature].title}
          </h3>
          <p className="text-lg md:text-xl text-gray-600">
            {features[activeFeature].description}
          </p>
        </div>

        {/* Image */}
        <div className="relative min-h-[400px] md:min-h-[500px]">
          <Image
            src={features[activeFeature].image}
            alt={features[activeFeature].title}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Mobile Feature Indicators */}
      <div className="flex lg:hidden justify-center gap-2 mt-8">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={cn(
              "h-1 rounded-full transition-all",
              activeFeature === index
                ? "bg-[#6366F1] w-8"
                : "bg-gray-200 w-4"
            )}
          />
        ))}
      </div>
    </>
  );
} 