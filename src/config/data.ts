// All static data for the application

import type { Project } from '@/types';

// Projects data - Exhibition projects
export const EXHIBITION_PROJECTS: Project[] = [
  {
    id: "e1",
    title: "ZM Studio Exhibition Booth",
    year: 2025,
    location: "Milan, IT",
    typology: "Exhibition",
    status: "Built",
    tags: ["Exhibition", "Booth", "Modular"],
    category: "exhibition",
    coverImage: "/images/projects/e1-cover.jpg",
    summary: "Modular exhibition booth with black frame structure.",
    body: "A flexible exhibition system featuring a modern black steel frame, integrated lighting, and modular display panels.",
    gallery: ["/images/projects/e1-1.jpg", "/images/projects/e1-2.jpg"]
  },
  {
    id: "e2",
    title: "TOPBAND Energy Expo",
    year: 2025,
    location: "Shanghai, CN",
    typology: "Exhibition",
    status: "Built",
    tags: ["Exhibition", "Energy", "Technology"],
    category: "exhibition",
    coverImage: "/images/projects/e2-cover.jpg",
    summary: "Green technology exhibition for TOPBAND energy solutions.",
    body: "A vibrant green-themed exhibition space showcasing cutting-edge energy technology and sustainable solutions.",
    gallery: ["/images/projects/e2-1.jpg", "/images/projects/e2-2.jpg"]
  },
  {
    id: "e3",
    title: "ZM Studio Food & Beverage Expo",
    year: 2025,
    location: "Milan, IT",
    typology: "Exhibition",
    status: "Built",
    tags: ["Exhibition", "Food", "Hospitality"],
    category: "exhibition",
    coverImage: "/images/projects/e3-cover.jpg",
    summary: "Restaurant and hospitality exhibition booth.",
    body: "A sophisticated exhibition booth for the food and beverage industry, featuring integrated display areas and meeting spaces.",
    gallery: ["/images/projects/e3-1.jpg", "/images/projects/e3-2.jpg"]
  },
  {
    id: "e4",
    title: "JETINNO Coffee Machine Expo",
    year: 2025,
    location: "Milan, IT",
    typology: "Exhibition",
    status: "Built",
    tags: ["Exhibition", "Coffee", "Product"],
    category: "exhibition",
    coverImage: "/images/projects/e4-cover.jpg",
    summary: "Premium coffee machine brand exhibition.",
    body: "A warm, wood-accented exhibition space designed to showcase JETINNO's premium coffee machines and brand experience.",
    gallery: ["/images/projects/e4-1.jpg", "/images/projects/e4-2.jpg"]
  }
];

// Projects data - Interior projects
export const INTERIOR_PROJECTS: Project[] = [
  {
    id: "i1",
    title: "Minimal Kitchen Design",
    year: 2025,
    location: "Milan, IT",
    typology: "Interior",
    status: "Built",
    tags: ["Interior", "Kitchen", "Minimal"],
    category: "interior",
    coverImage: "/images/projects/i1-cover.jpg",
    summary: "Minimal kitchen with marble countertop and organic elements.",
    body: "A serene kitchen space featuring a white marble island, neutral tones, and carefully curated natural elements.",
    gallery: ["/images/projects/i1-1.jpg", "/images/projects/i1-2.jpg"]
  },
  {
    id: "i2",
    title: "Warm Living Space",
    year: 2024,
    location: "Milan, IT",
    typology: "Interior",
    status: "Built",
    tags: ["Interior", "Living", "Natural Light"],
    category: "interior",
    coverImage: "/images/projects/i2-cover.jpg",
    summary: "Sun-filled living room with natural materials.",
    body: "A warm residential interior bathed in natural light, featuring sheer curtains and a harmonious blend of textures.",
    gallery: ["/images/projects/i2-1.jpg", "/images/projects/i2-2.jpg"]
  },
  {
    id: "i3",
    title: "Contemporary Lounge",
    year: 2024,
    location: "Rome, IT",
    typology: "Interior",
    status: "Built",
    tags: ["Interior", "Lounge", "Furniture"],
    category: "interior",
    coverImage: "/images/projects/i3-cover.jpg",
    summary: "Modern lounge with curated furniture collection.",
    body: "A sophisticated lounge space featuring warm brown tones, designer furniture, and thoughtful spatial composition.",
    gallery: ["/images/projects/i3-1.jpg", "/images/projects/i3-2.jpg"]
  },
  {
    id: "i4",
    title: "Japanese-Inspired Residence",
    year: 2024,
    location: "Milan, IT",
    typology: "Interior",
    status: "Built",
    tags: ["Interior", "Japanese", "Minimal"],
    category: "interior",
    coverImage: "/images/projects/i4-cover.jpg",
    summary: "Serene Japanese-inspired residential interior.",
    body: "A tranquil living space inspired by Japanese aesthetics, featuring clean lines, natural materials, and a sense of calm.",
    gallery: ["/images/projects/i4-1.jpg", "/images/projects/i4-2.jpg"]
  }
];

// Combined projects for backward compatibility
export const PROJECTS: Project[] = [...EXHIBITION_PROJECTS, ...INTERIOR_PROJECTS];


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
