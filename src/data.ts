export interface TimelineItem {
  date: string;
  label: string;
  type: string;
  title: string;
  description: string;
  institution: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface SkillGroup {
  name: string;
  skills: { name: string; level: number }[];
}

export interface Publication {
  id: number;
  type: string;
  title: string;
  excerpt: string;
  tags: string[];
  imageUrl: string;
}

export interface BlogPost {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  category: string;
}

export const timelineData: TimelineItem[] = [
  { date: '2026', label: 'Vision 0.1 Launch', type: 'MILESTONE', title: 'Brand Identity & Vision', description: 'HATZ establishes its visual identity and corporate vision — "Cross-Border Connectivity" — positioning the Syrian market as a pivotal hub for future growth and regional expansion.', institution: 'HATZ CORP' },
  { date: '2025', label: 'Strategic Framework', type: 'MILESTONE', title: 'Partnership Architecture', description: 'Development of the strategic partnership model that bridges international brands with emerging markets, focusing on robust collaboration frameworks and local market integration.', institution: 'HATZ CORP' },
  { date: '2024', label: 'Market Analysis', type: 'MILESTONE', title: 'Emerging Market Research', description: 'Comprehensive analysis of retail landscapes in emerging markets, identifying key opportunities for cross-border brand expansion and local partnership development.', institution: 'HATZ CORP' },
  { date: '2023', label: 'Foundation', type: 'MILESTONE', title: 'Company Formation', description: 'HATZ is founded with the mission to redefine retail in emerging markets through strategic partnerships, constructing bridges for global innovations to flourish locally.', institution: 'HATZ CORP' },
];

export const projects: Project[] = [
  { id: 1, title: 'Retail Partnership Network', category: 'Market Expansion', image: 'https://seashell-seal-546316.hostingersite.com/wp-content/uploads/2022/11/javier-esteban-8zcp9L0zNhg-unsplash-1.jpg', description: 'Building a comprehensive retail partnership network connecting international brands with emerging market distributors and local retail channels.' },
  { id: 2, title: 'Cross-Border Brand Program', category: 'Strategic Alliance', image: 'https://seashell-seal-546316.hostingersite.com/wp-content/uploads/2022/11/travelapp.png', description: 'A structured program facilitating global brands to enter and thrive in Syrian and regional markets through local expertise and infrastructure.' },
  { id: 3, title: 'Emerging Market Hub', category: 'Infrastructure', image: 'https://seashell-seal-546316.hostingersite.com/wp-content/uploads/2022/11/abillion-F0e3AdcwVbM-unsplash-1.jpg', description: 'Development of a centralized hub in Syria serving as the gateway for international brands to access emerging market opportunities across the region.' },
];

export const skillGroups: SkillGroup[] = [
  { name: 'Strategic Partnerships', skills: [
    { name: 'Brand Alliance', level: 95 }, { name: 'Franchise Development', level: 90 }, { name: 'Market Entry Strategy', level: 88 },
    { name: 'Negotiation', level: 85 }, { name: 'Partner Relations', level: 92 },
  ]},
  { name: 'Market Expertise', skills: [
    { name: 'Emerging Markets', level: 94 }, { name: 'Retail Analytics', level: 85 }, { name: 'Consumer Insights', level: 88 },
    { name: 'Supply Chain', level: 80 }, { name: 'Regulatory Compliance', level: 82 },
  ]},
  { name: 'Operations', skills: [
    { name: 'Project Management', level: 92 }, { name: 'Cross-Cultural Communication', level: 90 }, { name: 'Strategic Planning', level: 88 },
    { name: 'Brand Operations', level: 85 }, { name: 'Business Development', level: 90 },
  ]},
];

export const publications: Publication[] = [
  { id: 1, type: 'Market Report', title: 'Emerging Retail Landscapes 2026', excerpt: 'Comprehensive analysis of retail opportunities in Syrian and regional emerging markets, highlighting key sectors for international brand entry.', tags: ['Markets', 'Retail'], imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80' },
  { id: 2, type: 'Strategy Paper', title: 'Cross-Border Franchise Models', excerpt: 'A framework for successful franchise development in emerging markets, focusing on local adaptation and brand integrity.', tags: ['Franchise', 'Strategy'], imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80' },
  { id: 3, type: 'Case Study', title: 'Brand Localization in MENA', excerpt: 'Lessons from successful international brand entries into Middle Eastern and North African markets, with actionable insights for new entrants.', tags: ['Localization', 'MENA'], imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80' },
  { id: 4, type: 'White Paper', title: 'The Syrian Market Opportunity', excerpt: 'An in-depth look at Syria as a pivotal hub for regional expansion, covering infrastructure, consumer trends, and partnership potential.', tags: ['Syria', 'Expansion'], imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80' },
];

export const blogPosts: BlogPost[] = [
  { id: 1, date: 'June 2026', title: 'Syria as a Regional Trade Hub', excerpt: 'Exploring how Syria\'s strategic location and market dynamics position it as a pivotal hub for cross-border retail expansion.', category: 'Markets' },
  { id: 2, date: 'May 2026', title: 'Franchising in Emerging Economies', excerpt: 'Best practices for international brands looking to establish franchise operations in emerging markets with local partnership models.', category: 'Strategy' },
  { id: 3, date: 'April 2026', title: 'The Bridge Model of Market Entry', excerpt: 'How the cross-border connectivity approach reduces risk and accelerates growth for brands entering new territories.', category: 'Insights' },
  { id: 4, date: 'March 2026', title: 'Retail Innovation in MENA', excerpt: 'A look at how technology and consumer behavior are reshaping retail in the Middle East and North Africa.', category: 'Trends' },
  { id: 5, date: 'February 2026', title: 'Building Strategic Alliances', excerpt: 'Key principles for forging partnerships that drive mutual growth between international franchisors and local operators.', category: 'Partnerships' },
  { id: 6, date: 'January 2026', title: 'Localization Beyond Translation', excerpt: 'Why successful market entry requires deep cultural adaptation and local expertise, not just language conversion.', category: 'Localization' },
];
