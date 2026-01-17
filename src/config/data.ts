// All static data for the application

import type { Project } from '@/types';

// Projects data - Exhibition projects
export const EXHIBITION_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "River Loop Pavilion",
    year: 2025,
    location: "Milan, IT",
    typology: "Exhibition",
    status: "Competition",
    tags: ["Landscape", "Pavilion", "Curve"],
    category: "exhibition",
    coverImage: "/images/exhibition/p1-cover.jpg",
    summary: "Curvilinear riverside pavilion framing seasonal change.",
    body: "Soft infrastructure overlays linear embankment with bulging curves hosting micro‑programs.",
    gallery: ["/images/exhibition/p1-1.jpg", "/images/exhibition/p1-2.jpg", "/images/exhibition/p1-3.jpg"]
  },
  {
    id: "p2",
    title: "Y‑Vertiport Research Center",
    year: 2025,
    location: "Bresso, IT",
    typology: "Exhibition",
    status: "Concept",
    tags: ["Mobility", "Vertiport", "Y‑form"],
    category: "exhibition",
    coverImage: "/images/exhibition/p2-cover.jpg",
    summary: "Y‑shaped hub buffering parking & airside.",
    body: "Two infrastructural arms shape a civic plaza and mitigate noise.",
    gallery: ["/images/exhibition/p2-1.jpg", "/images/exhibition/p2-2.jpg", "/images/exhibition/p2-3.jpg"]
  },
  {
    id: "p3",
    title: "Aging & Comfort Micro‑Room",
    year: 2024,
    location: "Bari, IT",
    typology: "Exhibition",
    status: "Prototype",
    tags: ["Healing", "Color", "Elderly"],
    category: "exhibition",
    coverImage: "/images/exhibition/p3-cover.jpg",
    summary: "9m² color‑regulated space for seniors.",
    body: "Gradient color + tactile materials anchor daily rituals with circadian palette.",
    gallery: ["/images/exhibition/p3-1.jpg", "/images/exhibition/p3-2.jpg", "/images/exhibition/p3-3.jpg"]
  },
  {
    id: "p4",
    title: "Runway Curve Campus",
    year: 2025,
    location: "Iceland",
    typology: "Exhibition",
    status: "Concept",
    tags: ["Curve", "Runway", "Education"],
    category: "exhibition",
    coverImage: "/images/exhibition/p4-cover.jpg",
    summary: "1.1km runway reimagined with five curve rooms.",
    body: "Straight vs curve identity; five convex program peaks stitched by promenade.",
    gallery: ["/images/exhibition/p4-1.jpg", "/images/exhibition/p4-2.jpg", "/images/exhibition/p4-3.jpg"]
  },
  {
    id: "p5",
    title: "Urban Textile Exhibition",
    year: 2025,
    location: "Shanghai, CN",
    typology: "Exhibition",
    status: "Built",
    tags: ["Exhibition", "Textile", "Modular"],
    category: "exhibition",
    coverImage: "/images/exhibition/p5-cover.jpg",
    summary: "Modular exhibition system exploring fabric and light.",
    body: "Lightweight textile modules create flexible exhibition spaces that adapt to various show formats and visitor flows.",
    gallery: ["/images/exhibition/p5-1.jpg", "/images/exhibition/p5-2.jpg", "/images/exhibition/p5-3.jpg"]
  }
];

// Projects data - Interior projects
export const INTERIOR_PROJECTS: Project[] = [
  {
    id: "i1",
    title: "Xingguo Road Residence",
    year: 2023,
    location: "Shanghai, CN",
    typology: "Interior",
    status: "Built",
    tags: ["Interior", "Residential", "Minimal"],
    category: "interior",
    coverImage: "/images/projects/i1-cover.jpg",
    summary: "Elegant private residence on historic Xingguo Road.",
    body: "A refined residential interior featuring warm neutral tones, marble surfaces, and carefully curated natural elements. The design balances modern minimalism with timeless elegance.",
    gallery: ["/images/projects/i1-1.jpg", "/images/projects/i1-2.jpg", "/images/projects/i1-3.jpg"]
  },
  {
    id: "i2",
    title: "Shanghaiwan Residence",
    year: 2024,
    location: "Shanghai, CN",
    typology: "Interior",
    status: "Built",
    tags: ["Interior", "Living", "Contemporary"],
    category: "interior",
    coverImage: "/images/projects/i2-cover.jpg",
    summary: "Contemporary residence overlooking Shanghai Bay.",
    body: "A sophisticated living space featuring panoramic views, natural light, and a harmonious blend of textures and materials that create a sense of warmth and tranquility.",
    gallery: ["/images/projects/i2-1.jpg", "/images/projects/i2-2.jpg", "/images/projects/i2-3.jpg"]
  },
  {
    id: "i3",
    title: "Xiangyang South Road Private House",
    year: 2024,
    location: "Shanghai, CN",
    typology: "Interior",
    status: "Built",
    tags: ["Interior", "Heritage", "Modern"],
    category: "interior",
    coverImage: "/images/projects/i3-cover.jpg",
    summary: "Historic lane house transformed into modern living space.",
    body: "A thoughtful renovation that preserves the character of a heritage lane house while introducing contemporary comfort and functionality.",
    gallery: ["/images/projects/i3-1.jpg", "/images/projects/i3-2.jpg", "/images/projects/i3-3.jpg"]
  },
  {
    id: "i4",
    title: "Cangjia Mansion Showroom I",
    year: 2024,
    location: "Shanghai, CN",
    typology: "Interior",
    status: "Built",
    tags: ["Interior", "Showroom", "Luxury"],
    category: "interior",
    coverImage: "/images/projects/i4-cover.jpg",
    summary: "Premium showroom for luxury residential development.",
    body: "An exquisite model apartment showcasing refined material choices, bespoke furniture, and sophisticated spatial design for discerning homebuyers.",
    gallery: ["/images/projects/i4-1.jpg", "/images/projects/i4-2.jpg", "/images/projects/i4-3.jpg"]
  },
  {
    id: "i5",
    title: "Cangjia Mansion Showroom II",
    year: 2025,
    location: "Shanghai, CN",
    typology: "Interior",
    status: "Built",
    tags: ["Interior", "Showroom", "Contemporary"],
    category: "interior",
    coverImage: "/images/projects/i5-cover.jpg",
    summary: "Contemporary showroom with warm earth tones.",
    body: "A refined model unit featuring contemporary furniture, textured walls, and a sophisticated palette of warm neutrals and earth tones.",
    gallery: ["/images/projects/i5-1.jpg", "/images/projects/i5-2.jpg", "/images/projects/i5-3.jpg"]
  },
  {
    id: "i6",
    title: "Cangjia Mansion Showroom III",
    year: 2025,
    location: "Shanghai, CN",
    typology: "Interior",
    status: "Built",
    tags: ["Interior", "Showroom", "Minimal"],
    category: "interior",
    coverImage: "/images/projects/i6-cover.jpg",
    summary: "Minimalist showroom with natural light emphasis.",
    body: "A light-filled model apartment emphasizing spatial flow, natural materials, and a restrained color palette that creates a sense of calm.",
    gallery: ["/images/projects/i6-1.jpg", "/images/projects/i6-2.jpg", "/images/projects/i6-3.jpg"]
  },
  {
    id: "i7",
    title: "Cangjia Mansion Showroom IV",
    year: 2025,
    location: "Shanghai, CN",
    typology: "Interior",
    status: "Built",
    tags: ["Interior", "Showroom", "Elegant"],
    category: "interior",
    coverImage: "/images/projects/i7-cover.jpg",
    summary: "Elegant showroom with rich material palette.",
    body: "A luxurious model apartment featuring custom millwork, premium stone surfaces, and carefully curated furniture pieces.",
    gallery: ["/images/projects/i7-1.jpg", "/images/projects/i7-2.jpg", "/images/projects/i7-3.jpg"]
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
