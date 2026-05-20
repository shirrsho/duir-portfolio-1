export type ProgramLevel = 'undergraduate' | 'masters' | 'phd';

export interface Program {
  id: string;
  level: ProgramLevel;
  title: string;
  shortTitle: string;
  duration: string;
  credits: number;
  description: string;
  highlights: string[];
  careerPaths: string[];
  admissionRequirements: string[];
  applicationDeadline: string;
  semesters: number;
  icon: string;
  courses?: { label: string; items: string[] }[];
}
