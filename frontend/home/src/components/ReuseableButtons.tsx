import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const TryFreeForWebsite = ({className}:{className?:string}) => {
  const t=useTranslations('common.buttons')
    return (
    <Link href="/signup">
    <Button
    variant="default"
    size="lg"
    className={cn("w-fit",className)}
    >
      {t('tryFreeForWebsite')}
    </Button>
    </Link>
  );
};

export const TryFreeForWhatsApp = ({className}:{className?:string}) => {
  const t=useTranslations('common.buttons')
  return (
    <Link href="/signup">
    <Button
    variant="default"
    size="lg"
    className={cn("w-full bg-teal-400 ",className)}
    >
      {t('tryFreeForWhatsApp')}
    </Button>
    </Link>
  );
};

export const UseWithLandBot=({className}:{className?:string})=>{
  const t=useTranslations('common.buttons')
  return (
    <Link href="/signup">
      <Button
        variant="default"
        size="lg"
        className={cn("w-fit",className)}
      >
        {t('useWithLandBot')}
      </Button>
    </Link>
  );
}

export const TryLandBotFree=({className}:{className?:string})=>{
  const t=useTranslations('common.buttons')
  return (
    <Link href="/signup">
      <Button
        variant="default"
        size="lg"
        className={cn("w-fit",className)}
      >
        {t('tryLandBotFree')}
      </Button>
    </Link>
  );
}

export const GetDemo = ({className}:{className?:string}) => {
  const t=useTranslations('common.buttons')
  return (
    <Link href="/demo">
      <Button
        variant="outline"
        size="lg"
        className={cn("w-fit",className)}
      >
        {t('getDemo')}
      </Button>
    </Link>
  );
};
