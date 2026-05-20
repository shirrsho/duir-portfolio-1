export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  facultyCount: number;
  publications: number;
}

export interface ResearchCenter {
  id: string;
  name: string;
  shortName: string;
  description: string;
  director: string;
  established: number;
  focus: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  type: 'journal' | 'book' | 'chapter' | 'report';
  doi?: string;
  featured: boolean;
}
