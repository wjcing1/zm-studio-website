// All static data for the application

import type { Project } from '@/types';

// Projects data
export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "River Loop Pavilion",
    year: 2025,
    location: "Milan, IT",
    typology: "Installation",
    status: "Competition",
    tags: ["Landscape", "Pavilion", "Curve"],
    coverImage: "/images/projects/p1-cover.jpg",
    summary: "Curvilinear riverside pavilion framing seasonal change.",
    body: "Soft infrastructure overlays linear embankment with bulging curves hosting micro‑programs.",
    gallery: ["/images/projects/p1-1.jpg", "/images/projects/p1-2.jpg"]
  },
  {
    id: "p2",
    title: "Y‑Vertiport Research Center",
    year: 2025,
    location: "Bresso, IT",
    typology: "Research",
    status: "Concept",
    tags: ["Mobility", "Vertiport", "Y‑form"],
    coverImage: "/images/projects/p2-cover.jpg",
    summary: "Y‑shaped hub buffering parking & airside.",
    body: "Two infrastructural arms shape a civic plaza and mitigate noise.",
    gallery: ["/images/projects/p2-1.jpg", "/images/projects/p2-2.jpg", "/images/projects/p2-3.jpg"]
  },
  {
    id: "p3",
    title: "Aging & Comfort Micro‑Room",
    year: 2024,
    location: "Bari, IT",
    typology: "Interior",
    status: "Prototype",
    tags: ["Healing", "Color", "Elderly"],
    coverImage: "/images/projects/p3-cover.jpg",
    summary: "9m² color‑regulated space for seniors.",
    body: "Gradient color + tactile materials anchor daily rituals with circadian palette.",
    gallery: ["/images/projects/p3-1.jpg", "/images/projects/p3-2.jpg", "/images/projects/p3-3.jpg"]
  },
  {
    id: "p4",
    title: "Runway Curve Campus",
    year: 2025,
    location: "Iceland",
    typology: "Masterplan",
    status: "Concept",
    tags: ["Curve", "Runway", "Education"],
    coverImage: "/images/projects/p4-cover.jpg",
    summary: "1.1km runway reimagined with five curve rooms.",
    body: "Straight vs curve identity; five convex program peaks stitched by promenade.",
    gallery: ["/images/projects/p4-1.jpg", "/images/projects/p4-2.jpg", "/images/projects/p4-3.jpg"]
  },
  {
    id: "p5",
    title: "Urban Textile Exhibition",
    year: 2025,
    location: "Shanghai, CN",
    typology: "Installation",
    status: "Built",
    tags: ["Exhibition", "Textile", "Modular"],
    coverImage: "/images/projects/p5-cover.jpg",
    summary: "Modular exhibition system exploring fabric and light.",
    body: "Lightweight textile modules create flexible exhibition spaces that adapt to various show formats and visitor flows.",
    gallery: ["/images/projects/p5-1.jpg", "/images/projects/p5-2.jpg", "/images/projects/p5-3.jpg"]
  }
];

// Homepage sections data
export interface HomeSection {
  type: "image" | "text";
  title?: string;
  subtitle?: string;
  align?: "left" | "right";
  url?: string;
  heading?: string;
  text?: string;
}

export const HOME_SECTIONS: HomeSection[] = [
  {
    type: "image",
    title: "ZM Studio",
    subtitle: "Exhibition & Architecture",
    align: "left",
    url: "/images/home/hero1.jpg"
  },
  {
    type: "text",
    heading: "Design Philosophy",
    text: "We believe architecture is not static — it moves, adapts, and connects to emotion. Each project is a deep exploration of space, time, and human experience, combining parametric precision with craft aesthetics."
  },
  {
    type: "image",
    title: "Food & Beverage Expo",
    subtitle: "chantilly cream",
    align: "right",
    url: "/images/home/hero2.jpg"
  },
  {
    type: "text",
    heading: "Exhibition Design",
    text: "From concept to construction drawings to on-site coordination. We focus on creating light, fast, and reusable systems that provide temporary structures for events and exhibitions, allowing each space to tell a unique story."
  },
  {
    type: "image",
    title: "Labor Protection Exhibition",
    subtitle: "Plaza buffers noise & parking",
    align: "left",
    url: "/images/home/hero3.jpg"
  },
  {
    type: "text",
    heading: "Practice",
    text: "We work like editors: choose one strong idea, then remove everything that weakens it. Materials are honest, colors do the emotional work, and details guide the body through space."
  },
  {
    type: "image",
    title: "Hotel & Restaurant Expo Milan",
    subtitle: "2025 Cafer JEtinno Coffee Machine",
    align: "right",
    url: "/images/home/hero4.jpg"
  }
];

// Founders data for About page
export interface Founder {
  name: string;
  nameCN: string;
  education: string;
  specialty: string;
  photo: string;
}

export const FOUNDERS: Founder[] = [
  {
    name: "Niko Chew",
    nameCN: "周尼科",
    education: "M.Arch, Politecnico di Milano",
    specialty: "Specializes in end-to-end project management from concept to implementation, coordinating with factories, venue teams, and multiple stakeholders to ensure precise design realization in real environments.",
    photo: "/images/about/niko.jpg"
  },
  {
    name: "Wei Ma",
    nameCN: "马伟",
    education: "M.Arch, Politecnico di Milano",
    specialty: "Focuses on narrative structure and formal expression in exhibition spaces, specializing in conceptual design, spatial composition, and material language to build unified brand experiences through visual and spatial coherence.",
    photo: "/images/about/wei.jpg"
  },
  {
    name: "Jiachen Wang",
    nameCN: "王嘉宸",
    education: "B.Arch, Politecnico di Milano",
    specialty: "Focuses on the connection between brand strategy and spatial expression, specializing in design marketing, brand communication, and visual storytelling to transform spatial experiences into perceptible brand value.",
    photo: "/images/about/jiachen.jpg"
  }
];

// Services data
export interface Service {
  title: string;
  text: string;
}

export const SERVICES: Service[] = [
  { title: "Exhibition Application & Registration", text: "Documents, registration and liaison with organizers." },
  { title: "Custom Booth Design & Construction", text: "3D concepts, construction, on-site management." },
  { title: "Graphic Design & Printing", text: "Brochures, posters, backdrops, business cards." },
  { title: "Furniture & Equipment Rental", text: "Rental of chairs, lighting, audio and display stands." },
  { title: "Logistics & Shipping Coordination", text: "Transport, customs, storage and venue access." },
  { title: "On-site Supervision", text: "Full monitoring during setup and dismantling." },
  { title: "Interpretation & Translation (CN/EN/IT)", text: "On-site interpretation and document translation." },
  { title: "Hospitality & Travel Support", text: "Hotel booking, transport and business travel." },
  { title: "Catering & Event Management", text: "Catering, receptions and product launches." }
];

// News data
export interface NewsItem {
  date: string;
  title: string;
  desc: string;
}

export const NEWS: NewsItem[] = [
  { date: "2025-10-01", title: "Shortlisted for pop‑up pavilion", desc: "Reusable timber frames." },
  { date: "2025-09-12", title: "Runway Curve Campus concept released", desc: "Five convex nodes transform a 1.1 km strip." },
  { date: "2025-08-20", title: "Talk: Healing Micro‑Rooms", desc: "Color‑based comfort environments." }
];
