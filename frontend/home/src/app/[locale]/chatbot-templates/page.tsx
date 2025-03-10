'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { SearchAndFilters } from './_ui/SearchAndFilters';
import { PopularTemplates } from './_ui/PopularTemplates';
import { TemplateCard } from './_ui/TemplateCard';

export default function ChatbotTemplatesPage() {
  const t = useTranslations('chatbotTemplate');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    useCase: null,
    product: null
  });

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  const handleFilterChange = (type: 'useCase' | 'product', value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [type]: prev[type] === value ? null : value
    }));
  };

  return (
    <main className="min-h-screen py-16 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <SearchAndFilters
            useCases={t.raw('filters.useCases')}
            products={t.raw('filters.products')}
            onSearch={handleSearch}
            onFilterChange={handleFilterChange}
            selectedFilters={selectedFilters}
          />
        </div>

        {/* Popular Templates */}
        <div className="mb-16">
          <PopularTemplates
            title={t('popularTemplates.title')}
            templates={t.raw('popularTemplates.templates')}
          />
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {Object.entries(t.raw('categories')).map(([key, category]: [string, any]) => (
            <section key={key}>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                  <a href="#" className="text-primary hover:underline">
                    See all {category.title} templates →
                  </a>
                </div>
                <p className="text-gray-600">{category.description}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.templates.map((template: any, index: number) => (
                  <TemplateCard key={index} {...template} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
} 