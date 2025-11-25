// Constants for project filtering

import type { Typology, Status } from '@/types';

export const TYPOLOGIES: readonly Typology[] = [
  "All",
  "Installation",
  "Research",
  "Interior",
  "Masterplan"
] as const;

export const STATUSES: readonly Status[] = [
  "Any",
  "Built",
  "Prototype",
  "Concept",
  "Competition"
] as const;
