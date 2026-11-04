import React from 'react';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import type { ArticleGuide } from '../../types';
import { GUIDES_DATA } from '../../data/guides';
import { AdSlot } from '../ui/AdSlot';

interface GuidesViewProps {
  onSelectGuide: (guide: ArticleGuide) => void;
}

export const GuidesView: React.FC<GuidesViewProps> = ({ onSelectGuide }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Editorial Blueprints & Tutorials
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-3">
          How to Access Scholarships & Tuition Waivers
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Documented, legal methods to audit Ivy League classes, waive MOOC subscription fees, and earn verified digital credentials.
        </p>
      </div>

      {/* Strategic Ad Slot */}
      <AdSlot format="banner" slotId="guides-view-top-ad" />

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        {GUIDES_DATA.map((guide) => (
          <article 
            key={guide.id}
            onClick={() => onSelectGuide(guide)}
            className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md hover:border-blue-400 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="aspect-video w-full overflow-hidden bg-slate-100 relative">
                <img 
                  src={guide.heroImage} 
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-md text-white px-2.5 py-1 rounded-md">
                  {guide.category}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{guide.publishedDate}</span>
                  <span>•</span>
                  <Clock className="w-3.5 h-3.5" />
                  <span>{guide.readTime}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug tracking-tight mb-2">
                  {guide.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {guide.excerpt}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0 border-t border-slate-50 flex items-center justify-between mt-auto">
              <span className="text-[11px] font-medium text-slate-500">
                By {guide.author}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                Read Blueprint <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
