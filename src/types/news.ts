export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: 'news' | 'announcement' | 'achievement' | 'publication';
  date: string;
  image: string;
  featured: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  type: 'seminar' | 'conference' | 'workshop' | 'lecture' | 'ceremony';
  date: string;
  time: string;
  venue: string;
  speaker?: string;
  speakerAffiliation?: string;
  registrationOpen: boolean;
  tags: string[];
}
