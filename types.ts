export enum Page {
  Home = 'Home',
  About = 'About',
  Services = 'Services',
  Insights = 'Insights',
  Contact = 'Contact',
}

export interface TeamMember {
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
}

export interface Service {
  title: string;
  description: string;
  imageUrl: string;
  details: string[];
}

export interface Article {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  content: string;
  category: string;
}