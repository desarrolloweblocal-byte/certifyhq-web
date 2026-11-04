import React from 'react';
import { Clock, Award, Star, Users, ArrowRight } from 'lucide-react';
import type { Course } from '../../types';

interface CourseCardProps {
  course: Course;
  onSelect: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onSelect }) => {
  return (
    <article 
      onClick={() => onSelect(course)}
      className="group bg-white rounded-2xl border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between overflow-hidden cursor-pointer"
    >
      <div>
        {/* Cover Editorial Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
          <img 
            src={course.imageUrl} 
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
          
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
            <span className="text-[11px] font-bold text-slate-900 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md shadow-xs border border-white/40 tracking-tight">
              {course.provider}
            </span>
            {course.badge && (
              <span className="text-[10px] font-bold text-amber-900 bg-amber-100/90 backdrop-blur-md px-2 py-0.5 rounded-full border border-amber-300/60 flex items-center gap-1 shadow-xs">
                <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                {course.badge}
              </span>
            )}
          </div>

          <div className="absolute bottom-2.5 left-3">
            <span className="text-[10px] font-semibold text-white/90 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
              {course.category}
            </span>
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-5">
          <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug tracking-[-0.02em] mb-2">
            {course.title}
          </h3>

          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
            {course.summary}
          </p>

          <div className="grid grid-cols-2 gap-y-2 gap-x-1 text-[11px] text-slate-500 pt-3 border-t border-slate-100">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span className="truncate">{course.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-blue-500" />
              <span className="truncate text-blue-700 font-semibold">{course.certificate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-slate-700 tabular-nums">{course.rating}</span>
              <span className="text-slate-400 tabular-nums">({course.reviewsCount.toLocaleString()})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              <span className="truncate tabular-nums">{course.studentsCount}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-5 py-3 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="font-semibold text-emerald-600 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Open Enrollment
        </span>
        <span className="btn-press inline-flex items-center gap-1 font-bold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-0.5 transition-all">
          <span>View Curriculum</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </article>
  );
};
