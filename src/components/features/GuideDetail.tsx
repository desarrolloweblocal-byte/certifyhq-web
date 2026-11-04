import React from 'react';
import { ArrowLeft, Clock, Calendar, UserCheck, CheckCircle2, Share2, BookOpen } from 'lucide-react';
import type { ArticleGuide, Course } from '../../types';
import { AdSlot } from '../ui/AdSlot';

interface GuideDetailProps {
  guide: ArticleGuide;
  onBack: () => void;
  onSelectCourse: (course: Course) => void;
  allCourses: Course[];
}

export const GuideDetail: React.FC<GuideDetailProps> = ({ 
  guide, 
  onBack, 
  onSelectCourse,
  allCourses 
}) => {
  const relatedCourses = allCourses.filter(c => guide.relatedCourseIds.includes(c.id));

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: guide.title,
        text: guide.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard');
    }
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-8 animate-in fade-in duration-300">
      
      {/* Navigation and Share */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-xs hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blueprints</span>
        </button>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-xs hover:bg-slate-50 transition-colors"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Share Blueprint</span>
        </button>
      </div>

      {/* Guide Header */}
      <header className="mb-8">
        <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 uppercase tracking-wider">
          {guide.category}
        </span>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mt-4 mb-4">
          {guide.title}
        </h1>

        <p className="text-base text-slate-600 leading-relaxed font-normal mb-6">
          {guide.excerpt}
        </p>

        {/* E-E-A-T Author Meta Bar */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 py-3 border-y border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
              {guide.author.charAt(0)}
            </div>
            <div>
              <span className="font-bold text-slate-800 block">{guide.author}</span>
              <span className="text-[10px] text-slate-400">{guide.authorRole}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 ml-auto text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>{guide.publishedDate}</span>
            <span>•</span>
            <Clock className="w-3.5 h-3.5" />
            <span>{guide.readTime}</span>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="rounded-3xl overflow-hidden mb-8 border border-slate-200/80 shadow-xs aspect-video">
        <img 
          src={guide.heroImage} 
          alt={guide.title}
          className="w-full h-full object-cover" 
          loading="eager"
        />
      </div>

      {/* First In-Article Ad Placement */}
      <AdSlot format="banner" slotId="guide-in-article-banner-1" />

      {/* Article Content Sections */}
      <div className="prose prose-slate max-w-none text-slate-800 space-y-8 my-8 text-sm sm:text-base leading-relaxed">
        {guide.content.map((sec, idx) => (
          <section key={idx} className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {sec.heading}
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {sec.body}
            </p>

            {sec.keyPoints && sec.keyPoints.length > 0 && (
              <div className="my-4 p-4 bg-slate-50 rounded-2xl border border-slate-200/90 space-y-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                  Key Takeaways & Action Steps:
                </span>
                {sec.keyPoints.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            )}

            {idx === 0 && (
              <AdSlot format="in-article" slotId="guide-mid-content-ad" />
            )}
          </section>
        ))}
      </div>

      {/* Featured Courses related to this guide */}
      {relatedCourses.length > 0 && (
        <div className="mt-12 p-6 bg-blue-50/70 rounded-3xl border border-blue-200/80">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <h3 className="text-base font-bold text-blue-950">
              Verified Programs Highlighted in This Blueprint
            </h3>
          </div>
          <p className="text-xs text-blue-800 mb-4">
            Access the full curriculum and free direct enrollment portal:
          </p>
          <div className="space-y-3">
            {relatedCourses.map(c => (
              <div 
                key={c.id}
                onClick={() => onSelectCourse(c)}
                className="p-3.5 bg-white rounded-xl border border-blue-100 hover:border-blue-400 shadow-xs cursor-pointer flex items-center justify-between transition-all"
              >
                <div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">
                    {c.provider}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {c.title}
                  </h4>
                </div>
                <span className="text-xs font-semibold text-blue-600 whitespace-nowrap ml-3">
                  View Program →
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Author Bio Box for E-E-A-T */}
      <div className="mt-10 p-5 bg-white rounded-2xl border border-slate-200 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-base flex-shrink-0">
          <UserCheck className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900">{guide.author}</h4>
          <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
            {guide.authorRole}. This guide is audited quarterly against official university registrar guidelines.
          </p>
        </div>
      </div>
    </article>
  );
};
