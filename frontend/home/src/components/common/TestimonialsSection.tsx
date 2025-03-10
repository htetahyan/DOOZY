import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: {
    name: string;
    position: string;
    avatar: string;
  };
}

export function TestimonialsSection() {
  const t = useTranslations('common.testimonials_section');
  const testimonials: Testimonial[] = t.raw('testimonials');

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B] text-center mb-16">
          {t('title')}
        </h2>

        <div className="flex flex-col gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="rounded-2xl p-8 md:p-12 relative overflow-hidden bg-gradient-to-br from-[#8188f2] to-[#395188]"
            >
              {/* Quote Text */}
              <p className="text-2xl md:text-[32px] leading-normal text-white mb-12 relative z-10 max-w-4xl font-normal">
                {testimonial.quote}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 relative z-10">
                <Image
                  src={testimonial.author.avatar}
                  alt={testimonial.author.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-white text-lg">
                    {testimonial.author.name}
                  </h3>
                  <p className="text-white/80 text-base">
                    {testimonial.author.position}
                  </p>
                </div>
              </div>

              {/* Decorative Quotes */}
              <div className="absolute top-8 right-8 text-white/10">
                <Quote className="w-24 h-24 rotate-180" />
              </div>
              <div className="absolute bottom-8 right-24 text-white/10">
                <Quote className="w-24 h-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 