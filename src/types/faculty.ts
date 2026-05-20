export type FacultyRank = 'Professor' | 'Associate Professor' | 'Assistant Professor' | 'Lecturer';

export interface FacultyEducation {
  degree: string;
  institution: string;
  year: number;
}

export interface FacultyMember {
  id: string;
  name: string;
  title: FacultyRank;
  designation?: string;
  specialization: string[];
  education: FacultyEducation[];
  email: string;
  phone?: string;
  office: string;
  avatarColor: string;
  publications: number;
  courses: string[];
  bio: string;
  featured: boolean;
}
