// Project related types

export interface Project {
  id: string;
  title: string;
  year: number;
  location: string;
  typology: string;
  status: string;
  tags: string[];
  coverImage?: string;
  coverHue?: number;
  summary: string;
  body: string;
  gallery: (string | number)[];
}

export type Typology = "All" | "Installation" | "Research" | "Interior" | "Masterplan";

export type Status = "Any" | "Built" | "Prototype" | "Concept" | "Competition";
