
export interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
  achievements: string[];
}

export interface Project {
  id: number;
  title: string;
  author: string;
  genre: string;
  service: 'SEO' | 'PR' | 'Social Media' | 'Full Launch';
  successMetric: string;
  image: string;
  before: string;
  after: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}
