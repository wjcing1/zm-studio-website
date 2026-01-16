// Project related types

export type ProjectCategory = "exhibition" | "interior";

export interface Project {
  id: string;
  title: string;
  year: number;
  location: string;
  typology: string;
  status: string;
  tags: string[];
  category: ProjectCategory;
  coverImage?: string;
  coverHue?: number;
  summary: string;
  body: string;
  gallery: (string | number)[];
}

export type Typology = "All" | "Installation" | "Research" | "Interior" | "Masterplan" | "Exhibition";

export type Status = "Any" | "Built" | "Prototype" | "Concept" | "Competition";

