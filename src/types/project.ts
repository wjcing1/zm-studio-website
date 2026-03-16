// Project related types

import type { LocalizedText, LocalizedTextList } from "@/lib/i18n";

export type ProjectCategory = "exhibition" | "interior";

export interface Project {
  id: string;
  title: LocalizedText;
  year: number;
  location: LocalizedText;
  typology: string;
  status: string;
  tags: LocalizedTextList;
  category: ProjectCategory;
  coverImage?: string;
  coverHue?: number;
  summary: LocalizedText;
  body: LocalizedText;
  gallery: (string | number)[];
}

export type Typology = "All" | "Installation" | "Research" | "Interior" | "Masterplan" | "Exhibition";

export type Status = "Any" | "Built" | "Prototype" | "Concept" | "Competition";
