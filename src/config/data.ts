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
    body: "Soft infrastructure overlays the linear embankment with bulging curves hosting micro-programs. The pavilion responds to the river's seasonal rhythms, creating sheltered gathering spaces during winter and open-air platforms for summer events.\n\nThe design language draws from the organic forms found along the riverbank, translating natural erosion patterns into architectural gesture. Each curve frames a specific view of the water, guiding visitors through a choreographed sequence of experiences.\n\nMateriality emphasizes weathering steel and reclaimed timber, allowing the structure to age gracefully alongside its landscape context. The pavilion serves as both destination and waypoint, activating an underutilized stretch of urban waterfront.",
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
    body: "Two infrastructural arms shape a civic plaza and mitigate noise from aircraft operations. The Y-form creates a natural buffer zone while maximizing the efficiency of passenger flow between ground transport and aerial vehicles.\n\nThe research center component houses simulation facilities, maintenance workshops, and a public observation deck. Visitors can witness the future of urban air mobility while researchers develop next-generation vertiport standards.\n\nSustainability is embedded in every system: solar canopies power the facility, rainwater collection supports landscape irrigation, and modular construction allows for future expansion as the industry evolves.",
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
    body: "Gradient color and tactile materials anchor daily rituals within a circadian palette that shifts throughout the day. The 9m² prototype demonstrates how thoughtful design can enhance quality of life for elderly residents.\n\nEvery surface has been considered for both safety and sensory pleasure: soft-edge furniture, non-slip flooring with subtle texture variation, and lighting that mimics natural daylight patterns. The color scheme transitions from energizing warm tones in the morning to calming cool hues in the evening.\n\nThe project emerged from extensive research with care facilities and gerontologists, translating clinical findings into spatial poetry that respects dignity and promotes independence.",
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
    body: "Straight versus curve defines the identity of this 1.1km educational campus that reimagines a decommissioned runway. Five convex program peaks are stitched together by a continuous promenade, each housing distinct academic functions.\n\nThe linear datum of the original runway is counterpointed by organic classroom pods that swell outward to capture northern light. Between these volumes, sheltered courtyards create microclimates that extend Iceland's short outdoor season.\n\nGeothermal systems heat the entire complex, while the building's orientation and form maximize passive solar gain. The campus becomes a living laboratory for sustainable design in extreme climates.",
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
    body: "Lightweight textile modules create flexible exhibition spaces that adapt to various show formats and visitor flows. The system combines precision-engineered aluminum frames with custom-woven fabric panels that can be reconfigured within hours.\n\nLight becomes the primary medium: translucent textiles diffuse daylight by day and become luminous surfaces at night. The interplay of shadow and glow creates constantly shifting atmospheres that keep returning visitors engaged.\n\nDeveloped in partnership with local textile manufacturers, the project showcases Shanghai's heritage in fabric production while pushing material innovation forward. Every component is designed for disassembly and reuse.",
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
    body: "A refined residential interior featuring warm neutral tones, marble surfaces, and carefully curated natural elements. The design balances modern minimalism with timeless elegance, creating spaces that feel both sophisticated and genuinely livable.\n\nThe material palette centers on natural stone, warm-toned oak, and soft textiles that age beautifully. Each room flows seamlessly into the next, with consistent sightlines that emphasize the generous proportions of the historic building.\n\nCustom millwork integrates storage and display functions, keeping surfaces clear while allowing personal collections to become part of the architecture. The result is a home that feels curated rather than decorated.",
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
    body: "A sophisticated living space featuring panoramic views, natural light, and a harmonious blend of textures and materials that create warmth and tranquility. Floor-to-ceiling windows frame the bay, making the water an ever-present backdrop to daily life.\n\nThe interior composition responds to the exceptional views: low furniture maintains sightlines, while carefully positioned mirrors and reflective surfaces extend the sense of openness. A restrained palette allows the changing colors of sky and water to become the primary source of visual interest.\n\nZoning strategies separate active and contemplative spaces, with the living areas oriented toward sunset views and bedrooms positioned to receive gentle morning light.",
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
    body: "A thoughtful renovation that preserves the character of a heritage lane house while introducing contemporary comfort and functionality. Original timber beams and brick walls are celebrated, not concealed, creating a dialogue between old and new.\n\nThe intervention is deliberately minimal: modern systems are integrated invisibly, and new elements are expressed in materials that complement rather than compete with historic fabric. A new skylight floods the central circulation with daylight, transforming what was once a dark corridor into the heart of the home.\n\nThe project demonstrates that preservation and innovation are not opposites—thoughtful design can honor history while meeting contemporary needs.",
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
    body: "An exquisite model apartment showcasing refined material choices, bespoke furniture, and sophisticated spatial design for discerning homebuyers. Every detail has been considered to demonstrate the potential of luxury living in the development.\n\nThe showroom balances aspiration with attainability, featuring standard finishes elevated through expert coordination and custom accent pieces that suggest the possibilities of personalization. Lighting design creates distinct atmospheres for day and evening viewing.\n\nCirculation paths are choreographed to reveal each space at its best angle, with strategic compression and release creating memorable moments throughout the visitor journey.",
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
    body: "A refined model unit featuring contemporary furniture, textured walls, and a sophisticated palette of warm neutrals and earth tones. The design speaks to buyers seeking modern comfort with natural warmth.\n\nWall treatments introduce subtle depth through layered plasters and woven textiles, creating surfaces that reward closer inspection. Furniture selections emphasize craftsmanship and tactile quality, positioning the residence as an antidote to disposable culture.\n\nThe showroom narrative centers on sanctuary—a retreat from urban intensity where natural materials and considered proportions create genuine calm.",
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
    body: "A light-filled model apartment emphasizing spatial flow, natural materials, and a restrained color palette that creates genuine calm. The design demonstrates how minimalism can feel warm rather than austere.\n\nNatural light is the primary design element: full-height windows, reflective surfaces, and light-toned finishes work together to maximize brightness even on overcast days. Strategic reveals and frameless details create a sense of continuous space.\n\nThe furniture plan is deliberately sparse, allowing the architecture itself to be the focus. Carefully selected pieces demonstrate how restraint can feel generous rather than spartan.",
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
    body: "A luxurious model apartment featuring custom millwork, premium stone surfaces, and carefully curated furniture pieces. The design targets buyers seeking the highest level of finish and detail.\n\nMaterial selection prioritizes rarity and craftsmanship: book-matched stone slabs, hand-finished metals, and bespoke joinery that celebrates traditional techniques. The color palette is rich but restrained, allowing material quality to speak for itself.\n\nThe showroom experience is designed as a journey of discovery, with each room revealing new details and unexpected moments of beauty. Hidden lighting, concealed storage, and seamless transitions demonstrate the sophistication possible in residential design.",
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
