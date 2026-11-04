export type ProviderType = 'Harvard' | 'MIT' | 'Google' | 'Amazon AWS' | 'Stanford' | 'IBM' | 'Microsoft' | 'Linux Foundation';

export type CourseCategory = 'Artificial Intelligence' | 'Computer Science & Code' | 'Cybersecurity' | 'Cloud Computing' | 'Data & Analytics' | 'Business & Product';

export interface Course {
  id: string;
  slug: string;
  title: string;
  provider: ProviderType;
  providerLogoText: string;
  category: CourseCategory;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  certificate: 'Official Free' | 'Free Audit + Honors' | 'Verified Digital Badge';
  rating: number;
  reviewsCount: number;
  studentsCount: string;
  summary: string;
  description: string;
  imageUrl: string;
  modules: string[];
  prerequisites: string;
  officialEnrollUrl: string;
  badge?: string;
  updatedAt: string;
}

export interface ArticleGuide {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  authorRole: string;
  publishedDate: string;
  heroImage: string;
  content: {
    heading: string;
    body: string;
    keyPoints?: string[];
  }[];
  relatedCourseIds: string[];
}

export type ActiveView = 
  | { type: 'home' }
  | { type: 'course'; courseSlug: string }
  | { type: 'guides' }
  | { type: 'guide'; guideSlug: string }
  | { type: 'category'; categoryName: CourseCategory }
  | { type: 'legal'; page: 'privacy' | 'terms' | 'disclaimer' | 'about' | 'contact' };
