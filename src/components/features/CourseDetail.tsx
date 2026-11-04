import React from 'react';
import { ArrowLeft, Clock, Award, Star, Users, ExternalLink, Share2, ShieldCheck } from 'lucide-react';
import type { Course } from '../../types';
import { AdSlot } from '../ui/AdSlot';

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
  onSelectCourse: (course: Course) => void;
  allCourses: Course[];
}

export const CourseDetail: React.FC<CourseDetailProps> = ({ 
  course, 
  onBack, 
  onSelectCourse,
  allCourses 
}) => {
  const relatedCourses = allCourses.filter(c => c.id !== course.id && (c.category === course.category || c.provider === course.provider)).slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: course.title,
        text: `Explore this 100% free verified credential program from ${course.provider}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-in fade-in duration-300">
      
      {/* Top navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200/90 px-3 py-1.5 rounded-lg shadow-xs hover:bg-slate-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Catalog</span>
        </button>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white border border-slate-200/90 px-3 py-1.5 rounded-lg shadow-xs hover:bg-slate-50 transition-colors"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Share Credential</span>
        </button>
      </div>

      {/* Course Hero Banner with Tasteful Cover */}
      <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs mb-8">
        <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full overflow-hidden bg-slate-900">
          <img 
            src={course.imageUrl} 
            alt={course.title}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-white bg-blue-600 px-3 py-1 rounded-full shadow-md">
              {course.provider}
            </span>
            <span className="text-xs font-semibold text-emerald-300 bg-emerald-950/70 border border-emerald-500/40 px-2.5 py-0.5 rounded-full flex items-center gap-1 backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              100% Free Tuition
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
              {course.category}
            </span>
            <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
              {course.certificate}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-[-0.03em] leading-tight mb-4">
            {course.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
            {course.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-slate-100 text-xs">
            <div>
              <span className="text-slate-400 block text-[11px]">Estimated Effort</span>
              <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                {course.duration}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Credential Type</span>
              <span className="font-bold text-blue-600 flex items-center gap-1 mt-0.5">
                <Award className="w-3.5 h-3.5 text-blue-500" />
                {course.certificate}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Learner Rating</span>
              <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5 tabular-nums">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                {course.rating} / 5.0 ({course.reviewsCount.toLocaleString()})
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Total Enrollments</span>
              <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5 tabular-nums">
                <Users className="w-3.5 h-3.5 text-slate-500" />
                {course.studentsCount}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic High-RPM AdSlot 1 */}
      <AdSlot format="banner" slotId="course-detail-top-banner" />

      {/* Program Syllabus */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs mb-8">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 tracking-[-0.02em] flex items-center gap-2">
          <span>Curriculum & Learning Modules</span>
        </h2>
        <div className="space-y-3">
          {course.modules.map((mod, index) => (
            <div key={index} className="flex items-start gap-3 p-3.5 bg-slate-50/80 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
              <div className="w-6 h-6 rounded-lg bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 font-mono">
                {index + 1}
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                {mod}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-xl bg-blue-50/60 border border-blue-100/80">
          <h3 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
            Recommended Prerequisites
          </h3>
          <p className="text-xs text-blue-800 leading-relaxed">
            {course.prerequisites}
          </p>
        </div>
      </div>

      {/* Strategic High-RPM AdSlot 2: Right above the Official Enrollment Box */}
      <AdSlot format="in-article" slotId="course-detail-pre-enroll-box" />

      {/* Official Enrollment Action Box */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl text-center mb-12 border border-slate-800">
        <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-semibold mb-3">
          Open Enrollment • Zero Cost Track
        </span>
        <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] mb-2">
          Access the Official Course on {course.provider}'s Portal
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
          Click below to be redirected directly to the official enrollment portal. Register using your primary email address to ensure your full legal name appears accurately on your final verified certificate.
        </p>
        
        <a 
          href={course.officialEnrollUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-press inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02]"
        >
          <span>Go to Official Free Enrollment</span>
          <ExternalLink className="w-4 h-4" />
        </a>
        <p className="text-[11px] text-slate-400 mt-3">
          Zero hidden costs. Verified pathway audited by the CertifyHQ editorial board.
        </p>
      </div>

      {/* Related courses for interlinking and bounce reduction */}
      {relatedCourses.length > 0 && (
        <div className="border-t border-slate-200 pt-8">
          <h3 className="text-base font-bold text-slate-900 mb-4 tracking-[-0.02em]">
            Related Verified Programs
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedCourses.map(rel => (
              <div 
                key={rel.id}
                onClick={() => onSelectCourse(rel)}
                className="group p-4 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md cursor-pointer transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-video w-full rounded-lg overflow-hidden mb-2 bg-slate-100">
                    <img src={rel.imageUrl} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                    {rel.provider}
                  </span>
                  <h4 className="text-xs font-bold text-slate-800 line-clamp-2 mb-2">
                    {rel.title}
                  </h4>
                </div>
                <span className="text-[11px] font-semibold text-emerald-600 mt-2">
                  {rel.certificate}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
