
import { Milestone, Project, FAQItem, Review } from './types';

export const MILESTONES: Milestone[] = [
  {
    id: 1,
    year: '2014',
    title: 'The Beginning',
    description: 'Started as a junior publicist at a major publishing house.',
    achievements: ['Managed 12 simultaneous book tours', 'Launched 3 NYT Bestsellers in first year']
  },
  {
    id: 2,
    year: '2017',
    title: 'Digital Pivot',
    description: 'Founded independent consultancy focusing on Amazon Algorithm SEO.',
    achievements: ['Developed proprietary keyword strategy', 'Grew client sales by 400% on average']
  },
  {
    id: 3,
    year: '2020',
    title: 'Global Expansion',
    description: 'Opened offices in London and New York to handle international launches.',
    achievements: ['Handled cross-border translations and marketing', 'Keynote speaker at London Book Fair']
  },
  {
    id: 4,
    year: '2024',
    title: 'AI & Future',
    description: 'Integrating predictive analytics for viral book marketing.',
    achievements: ['100+ Bestsellers launched', 'Innovator of the Year Award']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'The Silent Echo',
    author: 'Elena Vance',
    genre: 'Thriller',
    service: 'Full Launch',
    successMetric: 'Top 10 Amazon Bestseller',
    image: 'https://picsum.photos/seed/book1/400/600',
    before: '50 sales/month',
    after: '5,000+ sales/month'
  },
  {
    id: 2,
    title: 'Growth Mindset for Teens',
    author: 'Dr. Marcus Thorne',
    genre: 'Non-Fiction',
    service: 'SEO',
    successMetric: '450% ROI on Ads',
    image: 'https://picsum.photos/seed/book2/400/600',
    before: 'Ranked #500 in category',
    after: 'Ranked #1 in 3 categories'
  },
  {
    id: 3,
    title: 'Beyond the Stars',
    author: 'K. S. Robinson',
    genre: 'Sci-Fi',
    service: 'PR',
    successMetric: 'Featured in NYT Books',
    image: 'https://picsum.photos/seed/book3/400/600',
    before: 'Zero media coverage',
    after: '15 major media features'
  },
  {
    id: 4,
    title: 'The Keto Kitchen',
    author: 'Sarah Jenkins',
    genre: 'Cookbook',
    service: 'Social Media',
    successMetric: 'Viral TikTok Campaign',
    image: 'https://picsum.photos/seed/book4/400/600',
    before: '200 followers',
    after: '50k+ followers'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How long does a typical marketing campaign last?",
    answer: "Most comprehensive campaigns run for 3-6 months, starting with pre-launch buzz building and ending with post-launch maintenance."
  },
  {
    question: "Do you guarantee Bestseller status?",
    answer: "While no one can ethically guarantee a specific rank, my historical success rate is 85% for clients who follow the full strategy."
  },
  {
    question: "What is your pricing model?",
    answer: "I offer both flat-fee packages for specific services and percentage-of-sales models for established authors."
  },
  {
    question: "Can you help self-published authors?",
    answer: "Absolutely. 60% of my client base are high-performing indie authors who need professional polish and reach."
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "James Paterson",
    role: "Thriller Author",
    text: "The marketing strategy provided was revolutionary. My book went from obscurity to a category leader in 3 weeks.",
    rating: 5
  },
  {
    id: 2,
    name: "Linda Wu",
    role: "Publishing Director",
    text: "In 10 years, I haven't seen someone with a better grasp of the digital landscape for books.",
    rating: 5
  }
];
