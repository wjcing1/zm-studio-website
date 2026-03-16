// All static data for the application

import type { Project } from '@/types';

// Projects data - Exhibition projects
export const EXHIBITION_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Highfield Boat Show",
    year: 2025,
    location: "Düsseldorf, DE",
    typology: "Exhibition",
    status: "Built",
    tags: ["Boat Show", "Trade Fair", "Brand Experience"],
    category: "exhibition",
    coverImage: "/images/exhibition/p1-cover.jpg",
    summary: "Premium yacht exhibition booth for Highfield at Boot Düsseldorf 2025.",
    body: "A striking exhibition space designed for Highfield at Boot Düsseldorf 2025, the world's largest indoor boat show. The booth showcases multiple yacht models in an immersive brand environment.\n\nThe design features a bold turquoise floor that creates a visual connection to the sea, while suspended brand signage and strategic lighting draw attention from across the hall. The layout allows visitors to walk around and inspect each vessel while experiencing the Highfield brand story.\n\nCareful attention was paid to product positioning and sightlines, ensuring each boat is presented at its best angle. The open structure invites exploration while maintaining clear brand presence throughout.",
    gallery: ["/images/exhibition/p1-1.jpg", "/images/exhibition/p1-2.jpg", "/images/exhibition/p1-3.jpg"]
  },
  {
    id: "p2",
    title: "Mode Safety Exhibition",
    year: 2025,
    location: "Düsseldorf, DE",
    typology: "Exhibition",
    status: "Built",
    tags: ["A+A", "Safety Equipment", "Industrial"],
    category: "exhibition",
    coverImage: "/images/exhibition/p2-cover.jpg",
    summary: "Modern exhibition booth for Mode at A+A 2025 international safety trade fair.",
    body: "A sophisticated booth design for Mode at A+A 2025, the world's leading trade fair for safety, security and health at work. The design combines professional presentation with approachable brand storytelling.\n\nThe booth features a distinctive black and white color scheme with gold accents, creating a premium yet industrial aesthetic. Display cases showcase safety equipment while wall graphics communicate the brand's commitment to protection and innovation.\n\nThe layout includes dedicated zones for product demonstration, client meetings, and brand immersion, allowing the booth to serve multiple functions throughout the exhibition.",
    gallery: ["/images/exhibition/p2-1.jpg", "/images/exhibition/p2-2.png", "/images/exhibition/p2-3.png"]
  },
  {
    id: "p3",
    title: "Topband Solar Exhibition",
    year: 2025,
    location: "Shanghai, CN",
    typology: "Exhibition",
    status: "Concept",
    tags: ["Solar", "Energy", "Technology"],
    category: "exhibition",
    coverImage: "/images/exhibition/p3-cover.png",
    summary: "Innovative exhibition design for Topband at a major solar energy trade fair.",
    body: "A forward-thinking exhibition concept for Topband, showcasing their solar energy solutions and smart grid technology. The design emphasizes clean energy through its bright, open aesthetic and green accent lighting.\n\nThe booth layout creates distinct zones for different product categories while maintaining visual unity through consistent branding and material choices. Interactive displays allow visitors to explore the technology behind Topband's solar solutions.\n\nSustainability principles informed every design decision, from material selection to lighting efficiency, reinforcing the brand's commitment to a greener future.",
    gallery: ["/images/exhibition/p3-1.png", "/images/exhibition/p3-2.png", "/images/exhibition/p3-3.png"]
  },
  {
    id: "p4",
    title: "Safety Workwear Booth",
    year: 2025,
    location: "Düsseldorf, DE",
    typology: "Exhibition",
    status: "Concept",
    tags: ["A+A", "Workwear", "Fashion"],
    category: "exhibition",
    coverImage: "/images/exhibition/p4-cover.png",
    summary: "Contemporary booth design featuring safety workwear and protective equipment.",
    body: "A modern exhibition booth concept blending fashion retail aesthetics with industrial safety equipment presentation. The design creates an elevated experience for safety workwear products.\n\nNatural wood tones and clean white surfaces create a warm, approachable atmosphere that differentiates the booth from typical industrial exhibitions. Mannequin displays show complete workwear ensembles, helping visitors visualize the products in use.\n\nThe semi-enclosed structure provides intimacy for client conversations while the open front maximizes visibility from the aisle.",
    gallery: ["/images/exhibition/p4-1.png", "/images/exhibition/p4-2.png", "/images/exhibition/p4-3.png"]
  },
  {
    id: "p5",
    title: "BKT Tires Exhibition",
    year: 2025,
    location: "Hanover, DE",
    typology: "Exhibition",
    status: "Concept",
    tags: ["Agricultural", "Tires", "Industrial"],
    category: "exhibition",
    coverImage: "/images/exhibition/p5-cover.png",
    summary: "Dynamic exhibition booth for BKT Tires showcasing agricultural and industrial tire solutions.",
    body: "A bold exhibition concept for BKT Tires, designed to showcase their range of agricultural and industrial tires. The booth makes a strong visual statement with oversized product displays and the iconic BKT green accent color.\n\nThe centerpiece is a dramatic tire tunnel that draws visitors into the booth while creating an Instagram-worthy photo opportunity. Product displays are strategically positioned to highlight the breadth of the BKT range.\n\nDigital screens and informational graphics help communicate technical specifications while maintaining the visual impact of the physical products.",
    gallery: ["/images/exhibition/p5-1.png", "/images/exhibition/p5-2.png", "/images/exhibition/p5-3.png"]
  },
  {
    id: "p6",
    title: "Jetinno Hotel Equipment",
    year: 2025,
    location: "Shanghai, CN",
    typology: "Exhibition",
    status: "Concept",
    tags: ["Hospitality", "Coffee", "Equipment"],
    category: "exhibition",
    coverImage: "/images/exhibition/p6-cover.png",
    summary: "Warm and inviting booth design for Jetinno hotel and hospitality equipment.",
    body: "An inviting exhibition concept for Jetinno, showcasing their range of hotel and hospitality equipment including professional coffee machines. The design creates a café-like atmosphere that allows visitors to experience the products in context.\n\nWarm wood tones, green plant accents, and soft lighting create a welcoming environment that stands out from typical trade show aesthetics. Product displays are integrated into lifestyle vignettes that help buyers visualize the equipment in their own establishments.\n\nThe booth layout encourages exploration and product interaction, with demonstration areas where visitors can see the equipment in action.",
    gallery: ["/images/exhibition/p6-1.png", "/images/exhibition/p6-2.png", "/images/exhibition/p6-3.png"]
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

// Featured projects for homepage
export const FEATURED_EXHIBITION = EXHIBITION_PROJECTS.filter(p =>
  ['p1', 'p2'].includes(p.id)
);
export const FEATURED_INTERIOR = INTERIOR_PROJECTS.filter(p =>
  ['i1', 'i2', 'i4'].includes(p.id)
);


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
    subtitle: "Exhibition & Interior Design",
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
    title: "Highfield Boat Show",
    subtitle: "Boot Düsseldorf 2025",
    align: "right",
    url: "/images/home/hero-exhibition1.jpg"
  },
  {
    type: "text",
    heading: "Exhibition Design",
    text: "From concept to construction drawings to on-site coordination. We focus on creating light, fast, and reusable systems that provide temporary structures for events and exhibitions, allowing each space to tell a unique story."
  },
  {
    type: "image",
    title: "BKT Tires Exhibition",
    subtitle: "Agricultural Trade Fair",
    align: "left",
    url: "/images/home/hero-exhibition2.png"
  },
  {
    type: "image",
    title: "Interior Design",
    subtitle: "Creating harmonious living spaces",
    align: "right",
    url: "/images/home/hero3.jpg"
  },
  {
    type: "text",
    heading: "Practice",
    text: "We work like editors: choose one strong idea, then remove everything that weakens it. Materials are honest, colors do the emotional work, and details guide the body through space."
  },
  {
    type: "image",
    title: "Topband Solar Exhibition",
    subtitle: "Clean Energy Trade Fair",
    align: "left",
    url: "/images/home/hero-exhibition3.png"
  },
  {
    type: "image",
    title: "Crafted Spaces",
    subtitle: "Where function meets aesthetics",
    align: "right",
    url: "/images/home/hero4.jpg"
  }
];

// Founders data for About page
export interface Founder {
  name: string;
  nameCN: string;
  role: string;
  education: string;
  specialty: string;
  photo: string;
}

export const MILAN_TEAM: Founder[] = [
  {
    name: "Niko Chew",
    nameCN: "周家桢",
    role: "Partner / Project Manager",
    education: "M.Arch, Politecnico di Milano",
    specialty: "Specializes in end-to-end project management from concept to implementation, coordinating with factories, venue teams, and multiple stakeholders to ensure precise design realization in real environments.",
    photo: "/images/about/niko.png"
  },
  {
    name: "Wei Ma",
    nameCN: "马威",
    role: "Partner / Architect",
    education: "M.Arch, Politecnico di Milano",
    specialty: "Focuses on narrative structure and formal expression in exhibition spaces, specializing in conceptual design, spatial composition, and material language to build unified brand experiences through visual and spatial coherence.",
    photo: "/images/about/wei.png"
  },
  {
    name: "Jiachen Wang",
    nameCN: "王嘉琛",
    role: "Partner / Brand Strategist",
    education: "B.Arch, Politecnico di Milano",
    specialty: "Focuses on the connection between brand strategy and spatial expression, specializing in design marketing, brand communication, and visual storytelling to transform spatial experiences into perceptible brand value.",
    photo: "/images/about/jiachen.png"
  }
];

export const SHANGHAI_TEAM: Founder[] = [
  {
    name: "Minjun Fan",
    nameCN: "范敏俊",
    role: "Founder / Principal Designer",
    education: "Renowned Interior Designer & Crossover Artist",
    specialty: "Born in Shanghai, MJ has designed and transformed over 1000 historic lane houses and apartments. His representative work was featured in 'The Most Beautiful Rooms in the World' by AD Magazine, and he won the 2021 China Interior Design Award.",
    photo: "/images/about/shanghai1.png"
  },
  {
    name: "Jian Liu",
    nameCN: "刘健",
    role: "Shanghai Studio Director",
    education: "Architectural Design",
    specialty: "Oversees the Shanghai studio's operations and leads the design team in executing high-quality residential and commercial projects.",
    photo: "/images/about/shanghai2.png"
  },
  {
    name: "Luna",
    nameCN: "Luna",
    role: "Designer",
    education: "Interior Design",
    specialty: "Focuses on spatial planning, material selection, and bringing conceptual designs to life with rigorous attention to detail.",
    photo: "/images/about/shanghai3.png"
  },
  {
    name: "Jerry",
    nameCN: "Jerry",
    role: "Designer",
    education: "Interior Design",
    specialty: "Specializes in 3D visualization, technical drawing, and coordinating with contractors to ensure design intent is fully realized.",
    photo: "/images/about/shanghai4.png"
  },
  {
    name: "May",
    nameCN: "May",
    role: "Designer",
    education: "Interior Design",
    specialty: "Passionate about creating unique spatial narratives through custom furniture, lighting design, and soft furnishings.",
    photo: "/images/about/shanghai5.png"
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
