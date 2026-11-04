import React from 'react';
import { ShieldCheck, CheckCircle2, TrendingUp, BookOpen } from 'lucide-react';

interface HeroSectionProps {
  onNavigateGuides: () => void;
  onExploreCourses: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onNavigateGuides, 
  onExploreCourses 
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-16 bg-gradient-to-b from-blue-50/50 via-slate-50 to-slate-50 border-b border-slate-200/60">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-blue-100/40 via-indigo-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Verification Pill */}
        <div className="inline-flex items-center gap-2 bg-white border border-blue-200/80 shadow-xs px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-800 mb-6 animate-in fade-in duration-500">
          <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
          <span>Verified 2026 Pathways</span>
          <span className="text-slate-300">|</span>
          <span className="text-blue-700 font-bold">100% Free Tuition</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto font-display">
          Ivy League & Big Tech <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">Free Verified Certifications</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Access official, verifiable career credentials from <strong className="text-slate-800 font-semibold">Harvard, MIT, Google, and Amazon AWS</strong>. Zero subscription fees, zero predatory credit card trials.
        </p>

        {/* CTA Buttons */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onExploreCourses}
            className="btn-press px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02]"
          >
            Explore Verified Catalog
          </button>
          <button
            onClick={onNavigateGuides}
            className="btn-press px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm rounded-xl border border-slate-200 shadow-xs transition-all flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>Tuition Waiver Blueprints</span>
          </button>
        </div>

        {/* Value props */}
        <div className="mt-10 pt-8 border-t border-slate-200/80 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0" />
            <span>Digital Credly & QR verification</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <TrendingUp className="w-4 h-4 text-indigo-600 flex-shrink-0" />
            <span>Resume & LinkedIn recognized</span>
          </div>
        </div>

      </div>
    </section>
  );
};
