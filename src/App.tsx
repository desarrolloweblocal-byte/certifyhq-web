import { useState, useMemo, useEffect } from 'react';
import type { ActiveView, CourseCategory } from './types';
import { COURSES_DATA } from './data/courses';
import { GUIDES_DATA } from './data/guides';
import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';
import { CookieConsent } from './components/ui/CookieConsent';
import { AdSlot } from './components/ui/AdSlot';
import { HeroSection } from './components/features/HeroSection';
import { FilterBar } from './components/features/FilterBar';
import { CourseCard } from './components/features/CourseCard';
import { CourseDetail } from './components/features/CourseDetail';
import { GuidesView } from './components/features/GuidesView';
import { GuideDetail } from './components/features/GuideDetail';
import { LegalView } from './components/features/LegalView';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export function App() {
  const [currentView, setCurrentView] = useState<ActiveView>({ type: 'home' });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProvider, setSelectedProvider] = useState<string>('All');

  // Smooth scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  // Filter courses based on search, category and provider
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || course.category === selectedCategory;

      const matchesProvider =
        selectedProvider === 'All' || course.provider === selectedProvider;

      return matchesSearch && matchesCategory && matchesProvider;
    });
  }, [searchQuery, selectedCategory, selectedProvider]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Global Navigation */}
      <Navbar currentView={currentView} onNavigate={setCurrentView} />

      <main className="flex-grow">
        {/* VIEW: HOME */}
        {currentView.type === 'home' && (
          <div>
            <HeroSection
              onNavigateGuides={() => setCurrentView({ type: 'guides' })}
              onExploreCourses={() => {
                const el = document.getElementById('catalog-directory');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Top Leaderboard Placement */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
              <AdSlot format="banner" />
            </div>

            {/* Courses Catalog Directory */}
            <section id="catalog-directory" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md mb-2 border border-blue-200/60">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Verified Catalog Directory</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Explore 100% Free Accredited Programs
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Showing <span className="font-bold text-slate-800">{filteredCourses.length}</span> verified pathways
                </p>
              </div>

              {/* Interactive Search & Multi-tier Filter */}
              <FilterBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                selectedProvider={selectedProvider}
                onSelectProvider={setSelectedProvider}
              />

              {/* Grid of Course Cards */}
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {filteredCourses.map((course) => (
                    <CourseCard
                      key={course.id}
                      course={course}
                      onSelect={(c) => setCurrentView({ type: 'course', courseSlug: c.slug })}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-3xl border border-slate-200/80 p-12 text-center max-w-lg mx-auto">
                  <p className="text-slate-900 font-bold text-lg mb-1">No matching programs found</p>
                  <p className="text-slate-500 text-sm mb-6">
                    Try adjusting your search criteria or resetting filters to see all available Ivy League programs.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                      setSelectedProvider('All');
                    }}
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors cursor-pointer"
                  >
                    Reset all filters
                  </button>
                </div>
              )}

              {/* Mid-feed In-Article Ad Placement */}
              <div className="my-12">
                <AdSlot format="in-article" />
              </div>

              {/* Featured Editorial Guides Preview */}
              <div className="mt-14 pt-12 border-t border-slate-200/80">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Financial Aid & Audit Hacks</span>
                    <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
                      Editorial Blueprints & Templates
                    </h3>
                  </div>
                  <button
                    onClick={() => setCurrentView({ type: 'guides' })}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 group cursor-pointer"
                  >
                    <span>View all guides</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {GUIDES_DATA.map((guide) => (
                    <div
                      key={guide.id}
                      onClick={() => setCurrentView({ type: 'guide', guideSlug: guide.slug })}
                      className="bg-white rounded-2xl border border-slate-200/90 p-5 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                          <span className="font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                            {guide.category}
                          </span>
                          <span>{guide.readTime}</span>
                        </div>
                        <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                          {guide.title}
                        </h4>
                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                          {guide.excerpt}
                        </p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-slate-500">By {guide.author}</span>
                        <span className="font-bold text-blue-600 flex items-center gap-1">
                          Read <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter / Verification Notification Box */}
              <div className="mt-14 bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
                <div className="relative z-10 max-w-2xl">
                  <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Free Weekly Digest</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
                    Never Miss an Ivy League Tuition Waiver or New Tech Cert
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Join 48,000+ ambitious developers and engineers receiving our weekly audit alerts, financial aid application templates, and new 100% free credentials directly in their inbox.
                  </p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert('Thank you for subscribing! You will receive our next verified alert.');
                    }}
                    className="flex flex-col sm:flex-row gap-3 max-w-md"
                  >
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 flex-grow"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors shadow-md cursor-pointer whitespace-nowrap"
                    >
                      Subscribe Free
                    </button>
                  </form>
                  <p className="text-[11px] text-slate-400 mt-3">
                    Zero spam. Unsubscribe at any time. Respectful of your privacy under CCPA/GDPR.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* VIEW: COURSE DETAIL */}
        {currentView.type === 'course' && (
          <div className="py-8">
            {(() => {
              const course = COURSES_DATA.find((c) => c.slug === currentView.courseSlug);
              if (!course) {
                return (
                  <div className="max-w-xl mx-auto px-4 py-20 text-center">
                    <p className="text-slate-900 font-bold text-xl mb-4">Course not found</p>
                    <button
                      onClick={() => setCurrentView({ type: 'home' })}
                      className="text-blue-600 font-semibold underline"
                    >
                      Return to catalog
                    </button>
                  </div>
                );
              }
              return (
                <CourseDetail
                  course={course}
                  onBack={() => setCurrentView({ type: 'home' })}
                  onSelectCourse={(c) => setCurrentView({ type: 'course', courseSlug: c.slug })}
                  allCourses={COURSES_DATA}
                />
              );
            })()}
          </div>
        )}

        {/* VIEW: GUIDES INDEX */}
        {currentView.type === 'guides' && (
          <GuidesView
            onSelectGuide={(g) => setCurrentView({ type: 'guide', guideSlug: g.slug })}
          />
        )}

        {/* VIEW: GUIDE DETAIL */}
        {currentView.type === 'guide' && (
          <div className="py-8">
            {(() => {
              const guide = GUIDES_DATA.find((g) => g.slug === currentView.guideSlug);
              if (!guide) {
                return (
                  <div className="max-w-xl mx-auto px-4 py-20 text-center">
                    <p className="text-slate-900 font-bold text-xl mb-4">Guide not found</p>
                    <button
                      onClick={() => setCurrentView({ type: 'guides' })}
                      className="text-blue-600 font-semibold underline"
                    >
                      Return to guides directory
                    </button>
                  </div>
                );
              }
              return (
                <GuideDetail
                  guide={guide}
                  onBack={() => setCurrentView({ type: 'guides' })}
                  onSelectCourse={(c) => setCurrentView({ type: 'course', courseSlug: c.slug })}
                  allCourses={COURSES_DATA}
                />
              );
            })()}
          </div>
        )}

        {/* VIEW: CATEGORY DIRECTORY */}
        {currentView.type === 'category' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="mb-8">
              <button
                onClick={() => setCurrentView({ type: 'home' })}
                className="text-sm font-semibold text-blue-600 hover:text-blue-700 mb-4 inline-flex items-center gap-1 cursor-pointer"
              >
                ← Back to Home
              </button>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {currentView.categoryName} Courses
              </h1>
              <p className="text-slate-600 text-sm mt-1">
                Verified free credential pathways specialized in {currentView.categoryName}.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {COURSES_DATA.filter((c) => c.category === (currentView as { type: 'category'; categoryName: CourseCategory }).categoryName).map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onSelect={(c) => setCurrentView({ type: 'course', courseSlug: c.slug })}
                />
              ))}
            </div>
          </div>
        )}

        {/* VIEW: LEGAL PAGES */}
        {currentView.type === 'legal' && (
          <LegalView pageKey={currentView.page} />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={setCurrentView} />

      {/* Global CCPA / GDPR Cookie & Consent Banner */}
      <CookieConsent />
    </div>
  );
}
export default App;
