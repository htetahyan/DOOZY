import { useTranslations } from 'next-intl'
import React from 'react'
import Image from 'next/image'

const Patners = () => {
    const t = useTranslations('home.patners')
  return (
    <div className='container mx-auto px-4 py-16'>
      <h2 className='text-2xl font-bold text-center text-accent-'>{t('title')}</h2>
      <div className='flex gap-4 w-full justify-center'>
        {t.raw('images').map((image: string, index: number) => (
          <Image key={index} className='w-30 h-auto' src={image} alt={`Patner ${index + 1}`} width={100} height={100} />
        ))}
      </div>
    </div>
  )
}

export default Patners
