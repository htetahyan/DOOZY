'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TemplateCardProps {
  title: string;
  description: string;
  platforms: string[];
  image: string;
}

export function TemplateCard({ title, description, platforms, image }: TemplateCardProps) {
  const t = useTranslations('common');

  const PlatformIcon = ({ platform }: { platform: string }) => {
    const iconData = t.raw(platform === 'WhatsApp' ? 'whatsapp' : 'webIcon');
    
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="relative w-5 h-5 bg-white rounded-full p-1 shadow-sm">
              <Image
                src={iconData.icon}
                alt={iconData.title}
                fill
                className="object-contain"
              />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{platform === 'WhatsApp' ? 'Only for WhatsApp' : 'Only for Website'}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  return (
    <Card className="group hover:shadow-lg padding-0 transition-all duration-300 overflow-hidden bg-white h-[280px] flex flex-col">
      <div className="relative h-[60%] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3 flex gap-1">
          {platforms.map((platform) => (
            <PlatformIcon key={platform} platform={platform} />
          ))}
        </div>
      </div>
      <CardContent className="p-4 flex-1 bg-white">
        <h3 className="font-medium text-base mb-1 text-[#1B1B1B] line-clamp-1">
          {title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {description}
        </p>
      </CardContent>
    </Card>
  );
} 