'use client'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { NavPopover } from '@/components/ui/nav-popover'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductContent, SolutionsContent, ResourcesContent } from './nav/nav-contents'

const NavBar = () => {
  const t = useTranslations('common.navbar')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b -mx-4 md:-mx-8 lg:-mx-16 xl:-mx-24">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <Image
                src="https://cdn.prod.website-files.com/60e5ad5111fe116ce317ccaa/61e6d6150cf6523112f6f0a3_Landbot-Logo.svg"
                alt="Landbot"
                width={122}
                height={32}
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              <NavPopover trigger={t('menuItems.product')}>
                <ProductContent />
              </NavPopover>

              <NavPopover trigger={t('menuItems.solutions')}>
                <SolutionsContent />
              </NavPopover>

              <NavPopover trigger={t('menuItems.resources')}>
                <ResourcesContent />
              </NavPopover>

              <Button variant="ghost" asChild>
                <Link href="/case-studies">{t('menuItems.caseStudies')}</Link>
              </Button>

              <Button variant="ghost" asChild>
                <Link href="/pricing">{t('menuItems.pricing')}</Link>
              </Button>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">{t('actions.login')}</Link>
            </Button>
            <Button asChild>
              <Link href="/try-free">{t('actions.tryFree')}</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/demo">{t('actions.getDemo')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <div className="space-y-2">
              <Link
                href="/product"
                className="block px-4 py-2 hover:bg-accent rounded-lg"
              >
                {t('menuItems.product')}
              </Link>
              <Link
                href="/solutions"
                className="block px-4 py-2 hover:bg-accent rounded-lg"
              >
                {t('menuItems.solutions')}
              </Link>
              <Link
                href="/resources"
                className="block px-4 py-2 hover:bg-accent rounded-lg"
              >
                {t('menuItems.resources')}
              </Link>
              <Link
                href="/case-studies"
                className="block px-4 py-2 hover:bg-accent rounded-lg"
              >
                {t('menuItems.caseStudies')}
              </Link>
              <Link
                href="/pricing"
                className="block px-4 py-2 hover:bg-accent rounded-lg"
              >
                {t('menuItems.pricing')}
              </Link>
            </div>

            <div className="pt-4 border-t space-y-2">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/login">{t('actions.login')}</Link>
              </Button>
              <Button className="w-full justify-start" asChild>
                <Link href="/try-free">{t('actions.tryFree')}</Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/demo">{t('actions.getDemo')}</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
