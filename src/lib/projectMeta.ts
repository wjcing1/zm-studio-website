import type { Translations } from "@/i18n";

export function getStatusLabel(status: string, t: Translations): string {
  switch (status) {
    case "Built":
      return t.filters.built;
    case "Prototype":
      return t.filters.prototype;
    case "Concept":
      return t.filters.concept;
    case "Competition":
      return t.filters.competition;
    case "Any":
      return t.filters.any;
    default:
      return status;
  }
}

export function getTypologyLabel(typology: string, t: Translations): string {
  switch (typology) {
    case "Exhibition":
      return t.filters.exhibition;
    case "Interior":
      return t.filters.interior;
    case "Installation":
      return t.filters.installation;
    case "Research":
      return t.filters.research;
    case "Masterplan":
      return t.filters.masterplan;
    case "All":
      return t.filters.all;
    default:
      return typology;
  }
}
