'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchAndFiltersProps {
  useCases: string[];
  products: string[];
  onSearch: (value: string) => void;
  onFilterChange: (type: 'useCase' | 'product', value: string) => void;
  selectedFilters: {
    useCase: string | null;
    product: string | null;
  };
}

export function SearchAndFilters({
  useCases,
  products,
  onSearch,
  onFilterChange,
  selectedFilters
}: SearchAndFiltersProps) {
  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input
          placeholder="Search templates..."
          className="pl-10"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="space-y-4">
        {/* Use Cases */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Use Cases</h3>
          <div className="flex flex-wrap gap-2">
            {useCases.map((useCase) => (
              <Button
                key={useCase}
                variant={selectedFilters.useCase === useCase ? "default" : "outline"}
                size="sm"
                onClick={() => onFilterChange('useCase', useCase)}
              >
                {useCase}
              </Button>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Products</h3>
          <div className="flex flex-wrap gap-2">
            {products.map((product) => (
              <Button
                key={product}
                variant={selectedFilters.product === product ? "default" : "outline"}
                size="sm"
                onClick={() => onFilterChange('product', product)}
              >
                {product}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 