import { useTranslations } from 'next-intl'
import React from 'react'
import Image from 'next/image'

interface PatnersProps {
  title: string;
}

const Patners = ({ title }: PatnersProps) => {
  const images = [
    'https://cdn.prod.website-files.com/5e1c4fb5db4d5243c0021d34/6516ae1a8c6b54eb5295f9c5_Logos%201.png',
    'https://cdn.prod.website-files.com/5e1c4fb5db4d5243c0021d34/6516ae1a8c6b54eb5295f9c5_Logos%201.png',
    'https://cdn.prod.website-files.com/5e1c4fb5db4d5243c0021d34/6516ae1a8c6b54eb5295f9c5_Logos%201.png',
    'https://cdn.prod.website-files.com/5e1c4fb5db4d5243c0021d34/6516ae1a8c6b54eb5295f9c5_Logos%201.png',
    'https://cdn.prod.website-files.com/5e1c4fb5db4d5243c0021d34/6516ae1a8c6b54eb5295f9c5_Logos%201.png',
    'https://cdn.prod.website-files.com/5e1c4fb5db4d5243c0021d34/6516ae1a8c6b54eb5295f9c5_Logos%201.png'
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {images.map((image, index) => (
            <div key={index} className="relative h-12">
              <Image
                src={image}
                alt={`Partner ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Patners
