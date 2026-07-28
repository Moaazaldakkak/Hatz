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
  { date: '2008 - 2010', label: 'Computer Engineering', type: 'EDUCATION', title: 'Computer Engineering', description: 'I immersed myself in computer engineering, seamlessly blending coding finesse with hardware intricacies. Navigating the realms of algorithms and circuitry, I forged a dynamic path in the world of digital systems', institution: 'UNIVERSITY OF CALIFORNIA' },
  { date: '2004 - 2008', label: 'Electronics Engineering', type: 'EDUCATION', title: 'Electronics Engineering', description: 'Demonstrated expertise in Electronics Engineering, seamlessly integrating theoretical knowledge with hands-on experience. Proficient in circuit design, signal processing, and mastering intricacies of electronic systems', institution: 'UNIVERSITY OF CALIFORNIA' },
  { date: '2009 - 2010', label: 'Student Researcher', type: 'ACADEMIC POSITION', title: 'Student Researcher', description: "As a Student Researcher, I conducted impactful investigations, showcasing a commitment to rigorous inquiry and contributing to advancements in programming. My work reflects a blend of analytical acumen and collaborative problem-solving", institution: 'UNIVERSITY OF CALIFORNIA' },
  { date: '2009 - 2010', label: 'Lab Assistant', type: 'ACADEMIC POSITION', title: 'Lab Assistant', description: 'As a Lab Assistant, I facilitated smooth laboratory operations, demonstrating precision in equipment handling and adherence to protocols.', institution: 'UNIVERSITY OF CALIFORNIA' },
];

export const projects: Project[] = [
  { id: 1, title: 'NFT App Development', category: 'Web application', image: 'https://seashell-seal-546316.hostingersite.com/wp-content/uploads/2022/11/javier-esteban-8zcp9L0zNhg-unsplash-1.jpg', description: 'NFT App Development project description.' },
  { id: 2, title: 'Travel Mobile App Design', category: 'Mobile application', image: 'https://seashell-seal-546316.hostingersite.com/wp-content/uploads/2022/11/travelapp.png', description: 'Travel Mobile App Design project description.' },
  { id: 3, title: 'Restaurant Web Application', category: 'UI / UX', image: 'https://seashell-seal-546316.hostingersite.com/wp-content/uploads/2022/11/abillion-F0e3AdcwVbM-unsplash-1.jpg', description: 'Restaurant Web Application project description.' },
];

export const skillGroups: SkillGroup[] = [
  { name: 'Programming', skills: [
    { name: 'Python', level: 95 }, { name: 'JavaScript', level: 90 }, { name: 'TypeScript', level: 85 },
    { name: 'Java', level: 75 }, { name: 'C++', level: 65 },
  ]},
  { name: 'Frameworks', skills: [
    { name: 'React', level: 92 }, { name: 'Node.js', level: 88 }, { name: 'TensorFlow', level: 80 },
    { name: 'Docker', level: 78 }, { name: 'GraphQL', level: 72 },
  ]},
  { name: 'Soft Skills', skills: [
    { name: 'Leadership', level: 90 }, { name: 'Communication', level: 88 }, { name: 'Management', level: 85 },
    { name: 'Writing', level: 92 }, { name: 'Mentoring', level: 85 },
  ]},
];

export const publications: Publication[] = [
  { id: 1, type: 'Conference Paper', title: 'Deep Learning for NLP', excerpt: 'This paper presents novel deep learning architectures for improving natural language understanding.', tags: ['AI', 'NLP'], imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80' },
  { id: 2, type: 'Journal Article', title: 'Scalable ML Pipelines', excerpt: 'A comprehensive study on building scalable ML pipelines for processing large datasets.', tags: ['ML', 'Big Data'], imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80' },
  { id: 3, type: 'Book Chapter', title: 'Ethical AI', excerpt: 'An exploration of ethical frameworks for responsible AI development.', tags: ['AI', 'Ethics'], imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80' },
  { id: 4, type: 'Conference Paper', title: 'Reinforcement Learning', excerpt: 'Novel RL algorithms for autonomous systems in complex environments.', tags: ['RL', 'AI'], imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80' },
];

export const blogPosts: BlogPost[] = [
  { id: 1, date: 'March 15, 2024', title: 'The Rise of Large Language Models', excerpt: 'Exploring how LLMs are transforming industries and what this means for the future of AI.', category: 'AI' },
  { id: 2, date: 'February 28, 2024', title: 'Building Scalable Data Pipelines', excerpt: 'Best practices for designing data pipelines that handle millions of events per second.', category: 'Data Engineering' },
  { id: 3, date: 'January 10, 2024', title: 'Introduction to Quantum ML', excerpt: 'A beginner-friendly guide to the intersection of quantum computing and machine learning.', category: 'Quantum' },
  { id: 4, date: 'December 5, 2023', title: 'Ethical AI Framework', excerpt: 'How organizations can implement ethical AI practices while maintaining innovation.', category: 'AI Ethics' },
  { id: 5, date: 'November 20, 2023', title: 'Microservices vs Monoliths', excerpt: 'A balanced comparison of architectural patterns for modern applications.', category: 'Architecture' },
  { id: 6, date: 'October 8, 2023', title: 'Developer Experience', excerpt: 'How improving developer experience leads to better products and happier teams.', category: 'Culture' },
];
