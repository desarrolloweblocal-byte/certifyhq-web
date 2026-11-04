import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import type { ProviderType } from '../../types';
import { CATEGORIES_LIST } from '../../data/courses';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedProvider: string;
  onSelectProvider: (prov: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  selectedProvider,
  onSelectProvider
}) => {
  const providers: ProviderType[] = ['Harvard', 'MIT', 'Google', 'Amazon AWS', 'Stanford', 'IBM', 'Microsoft', 'Linux Foundation'];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-4 sm:p-6 shadow-xs mb-8 space-y-4">
      
      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by topic, skill, or university (Python, AWS, AI, Harvard, MIT, Google)..."
          className="w-full pl-11 pr-4 py-3 bg-slate-50/80 rounded-2xl border border-slate-200 text-sm focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400"
        />
        {searchQuery && (
          <button 
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-200 px-2 py-0.5 rounded-full"
          >
            Clear
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => onSelectCategory('All')}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
            selectedCategory === 'All'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          All Specialties
        </button>

        {CATEGORIES_LIST.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Provider Quick Filter */}
      <div className="flex items-center gap-2 pt-2 border-t border-slate-100 overflow-x-auto text-xs">
        <span className="text-slate-400 font-medium flex items-center gap-1 flex-shrink-0 text-[11px]">
          <SlidersHorizontal className="w-3 h-3" />
          Filter Institution:
        </span>
        <button
          onClick={() => onSelectProvider('All')}
          className={`px-2.5 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap transition-colors ${
            selectedProvider === 'All' ? 'text-blue-700 bg-blue-50' : 'text-slate-500 hover:text-slate-900'
          }`}
        >
          All
        </button>
        {providers.map(p => (
          <button
            key={p}
            onClick={() => onSelectProvider(p)}
            className={`px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-colors ${
              selectedProvider === p ? 'text-blue-700 bg-blue-50 font-semibold' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
};
