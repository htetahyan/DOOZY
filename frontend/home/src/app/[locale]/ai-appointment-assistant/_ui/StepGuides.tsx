'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { TryFreeForWebsite, TryFreeForWhatsApp } from '@/components/ReuseableButtons';

interface StepGuidesProps {
  data: {
    title: string;
    steps: {
      [key: string]: {
        title: string;
        description: string;
        image: string;
      };
    };
  };
}

export function StepGuides({ data }: StepGuidesProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [prevStep, setPrevStep] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentImageRef = useRef<HTMLDivElement>(null);
  const nextImageRef = useRef<HTMLDivElement>(null);

  const steps = Object.keys(data.steps).map(key => ({
    number: parseInt(key.replace('step', '')),
    ...data.steps[key]
  }));

  useEffect(() => {
    if (activeStep === prevStep) return;

    setIsAnimating(true);
    const direction = prevStep < activeStep ? 1 : -1;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        setPrevStep(activeStep);
      }
    });

    if (currentImageRef.current && nextImageRef.current) {
      // Set initial positions
      gsap.set(nextImageRef.current, {
        yPercent: 100,
        opacity: 1
      });

      // Vertical slide animation
      tl.to(currentImageRef.current, {
        yPercent: -100,
        duration: 0.5,
        ease: "power2.inOut"
      })
      .to(nextImageRef.current, {
        yPercent: 0,
        duration: 0.5,
        ease: "power2.inOut"
      }, "<");
    }
  }, [activeStep, prevStep]);

  const handleStepChange = (step: number) => {
    if (isAnimating || step === activeStep) return;
    setActiveStep(step);
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || isAnimating) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activeStep < steps.length) {
      handleStepChange(Math.min(activeStep + 1, steps.length));
    }
    if (isRightSwipe && activeStep > 1) {
      handleStepChange(Math.max(activeStep - 1, 1));
    }

    setTouchStart(null);
    setTouchEnd(null);
    setIsDragging(false);
  };

  const ImageContainer = ({ className = '' }: { className?: string }) => (
    <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${className}`}>
      {/* Current Image */}
      <div ref={currentImageRef} className="absolute inset-0 will-change-transform">
        <Image
          src={data.steps[`step${prevStep}`].image}
          alt={data.steps[`step${prevStep}`].title}
          fill
          className="object-contain"
          priority
        />
      </div>
      {/* Next Image */}
      <div ref={nextImageRef} className="absolute inset-0 will-change-transform">
        <Image
          src={data.steps[`step${activeStep}`].image}
          alt={data.steps[`step${activeStep}`].title}
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B] text-center mb-16">
          {data.title}
        </h2>

        {/* Mobile View (Carousel) */}
        <div className="md:hidden">
          <div 
            className="touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <ImageContainer className="mb-8" />
            <div className="space-y-6">
              <div className="bg-white shadow-lg rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-8 w-8 rounded-full bg-[#FF4D4D] text-white flex items-center justify-center text-sm font-semibold">
                    {String(activeStep).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-semibold text-[#1B1B1B]">
                    {data.steps[`step${activeStep}`].title}
                  </h3>
                </div>
                <p className="text-gray-600 pl-12">
                  {data.steps[`step${activeStep}`].description}
                </p>
              </div>
            </div>
          </div>
          
          {/* Step Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  activeStep === step.number 
                    ? 'bg-[#FF4D4D] w-4' 
                    : 'bg-[#FF4D4D]/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Tablet View */}
        <div className="hidden md:block lg:hidden">
          <ImageContainer className="w-full mb-12" />
          <div className="grid grid-cols-2 gap-6">
            {steps.map((step) => (
              <button
                key={step.number}
                onClick={() => handleStepChange(step.number)}
                className={`text-left p-6 rounded-xl transition-all duration-200 ${
                  activeStep === step.number ? 'bg-white shadow-lg' : 'bg-transparent hover:bg-white/50'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`
                    h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold
bg-primary text-white
                  `}>
                    {String(step.number).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-semibold text-[#1B1B1B]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 pl-14">
                  {step.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          {/* Left Column - Image */}
          <ImageContainer />

          {/* Right Column - Steps */}
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`rounded-xl transition-all duration-200 ${
                  activeStep === step.number ? 'bg-white shadow-lg' : 'bg-transparent'
                }`}
              >
                <button
                  onClick={() => handleStepChange(step.number)}
                  className="w-full text-left px-6 py-4 flex items-center gap-4"
                >
                  <div className={`
                    h-8 w-8 rounded-full flex items-center justify-center text-sm font-semibold
                   bg-primary text-white
                  `}>
                    {String(step.number).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-semibold text-[#1B1B1B]">
                    {step.title}
                  </h3>
                </button>
                {activeStep === step.number && (
                  <div className="px-6 pb-4 pl-[3.5rem]">
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <TryFreeForWebsite className="sm:w-auto px-8" />
          <TryFreeForWhatsApp className="sm:w-auto px-8" />
        </div>
      </div>
    </section>
  );
} 