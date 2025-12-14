// Common types used across the portfolio

export interface Project {
  title: string;
  overview: string;
  problem: string;
  role: string;
  methodology: string;
  results: string;
  techStack: string[];
  image: string;
  githubLink: string;
  demoLink: string | null;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  cgpa: string;
  highlight: boolean;
}

export interface Achievement {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  category: string;
}

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  link: string;
}

export interface SkillCategory {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  skills: string[];
  featured: string[];
}

export interface FormData {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}

export interface FormErrors {
  [key: string]: string;
}
