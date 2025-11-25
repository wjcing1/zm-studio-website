// ZM Studio — Multipage (client‑side) React app
// Pages: Home, About, Projects, Project Detail, Services, News, Contact
// Sticky header restored (original style). No borders/rounded on components except header bottom rule.
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, Filter, LayoutGrid, List, Mail, MapPin, Menu, Phone, Search } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// ---------------- Data ----------------
const PROJECTS = [
  { id: "p1", title: "River Loop Pavilion", year: 2025, location: "Milan, IT", typology: "Installation", status: "Competition", tags: ["Landscape","Pavilion","Curve"], coverImage: "/images/projects/p1-cover.jpg", summary: "Curvilinear riverside pavilion framing seasonal change.", body: "Soft infrastructure overlays linear embankment with bulging curves hosting micro‑programs.", gallery: ["/images/projects/p1-1.jpg", "/images/projects/p1-2.jpg"] },
  { id: "p2", title: "Y‑Vertiport Research Center", year: 2025, location: "Bresso, IT", typology: "Research", status: "Concept", tags: ["Mobility","Vertiport","Y‑form"], coverHue: 260, summary: "Y‑shaped hub buffering parking & airside.", body: "Two infrastructural arms shape a civic plaza and mitigate noise.", gallery: [260,270,280] },
  { id: "p3", title: "Aging & Comfort Micro‑Room", year: 2024, location: "Bari, IT", typology: "Interior", status: "Prototype", tags: ["Healing","Color","Elderly"], coverHue: 20, summary: "9m² color‑regulated space for seniors.", body: "Gradient color + tactile materials anchor daily rituals with circadian palette.", gallery: [20,30,40] },
  { id: "p4", title: "Runway Curve Campus", year: 2025, location: "Iceland", typology: "Masterplan", status: "Concept", tags: ["Curve","Runway","Education"], coverHue: 120, summary: "1.1km runway reimagined with five curve rooms.", body: "Straight vs curve identity; five convex program peaks stitched by promenade.", gallery: [120,130,140] },
];

const TYPOLOGIES = ["All","Installation","Research","Interior","Masterplan"] as const;
const STATUSES = ["Any","Built","Prototype","Concept","Competition"] as const;

// ---------------- Motion ----------------
const fadeUp = { initial:{opacity:0,y:24}, whileInView:{opacity:1,y:0}, transition:{duration:0.6,ease:[0.22,1,0.36,1]}, viewport:{once:true,amount:0.25} };

// ---------------- Helpers ----------------
function Block({ label = "IMG", className = "", image }: { label?: string, className?: string, image?: string }){
  if (image) {
    return (
      <div
        className={`aspect-[4/3] w-full bg-neutral-200/60 bg-cover bg-center ${className}`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
    );
  }
  return (
    <div className={`aspect-[4/3] w-full bg-neutral-200/60 grid place-items-center ${className}`}>
      <span className="select-none text-4xl font-semibold text-neutral-400">{label}</span>
    </div>
  );
}

function useHashRoute(){
  const [path, setPath] = useState(() => window.location.hash.replace(/^#\/?/, ""));
  useEffect(()=>{
    const onHash = ()=> setPath(window.location.hash.replace(/^#\/?/, ""));
    window.addEventListener("hashchange", onHash);
    return ()=> window.removeEventListener("hashchange", onHash);
  },[]);
  const navigate = (to: string)=>{ window.location.hash = to; window.scrollTo({top:0, behavior:"instant" as ScrollBehavior}); };
  return { path, navigate };
}

function parseProjectId(path:string){
  const m = path.match(/^projects\/([^\/]+)$/);
  return m? m[1] : null;
}

// ---------------- Header ----------------
function Header(){
  const { navigate, path } = useHashRoute();
  const to = (p:string)=>()=>navigate(p);
  const currentTop = path.split("/")[0] || "";
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-6 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu"><Menu className="size-5"/></Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader><SheetTitle>Navigation</SheetTitle></SheetHeader>
              <nav className="mt-6 grid gap-2">
                {[
                  ["","Home"],
                  ["about","About"],
                  ["projects","Projects"],
                  ["services","Services"],
                  ["news","News"],
                  ["contact","Contact"],
                ].map(([p,l])=> (
                  <Button key={p} variant="ghost" className="justify-start text-lg" onClick={to(p)}>{l}</Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <a className="text-xl md:text-2xl font-black tracking-tight" href="#" onClick={(e)=>{e.preventDefault(); navigate("");}}>ZM Studio</a>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {[
            ["","Home"],
            ["about","About"],
            ["projects","Projects"],
            ["services","Services"],
            ["news","News"],
            ["contact","Contact"],
          ].map(([p,l])=> (
            <button key={p} onClick={to(p)} className={`text-sm font-medium hover:underline underline-offset-4 ${currentTop===p?"underline":""}`}>{l}</button>
          ))}
        </nav>
        <div className="hidden md:block"><Button variant="outline" onClick={to("contact")}>Start a project</Button></div>
      </div>
    </header>
  );
}

// ---------------- Pages ----------------
function HomePage(){
  // 📝 修改首页内容：在这里修改标题、文字和图片
  // 💡 图片替换方法：把图片命名为 hero1.jpg, hero2.jpg, hero3.jpg, hero4.jpg
  //    放到 public/images/home/ 文件夹，然后修改下面的标题和文字即可！
  const sections = [
    { 
      type: "image",
      title:"ZM Studio",  // ← 修改标题
      subtitle:"Exhibition & Architecture",  // ← 修改副标题
      align:"left",  // left 或 right，控制标题位置
      url:"/images/home/hero1.jpg"  // ← 图片1：把你的图片命名为 hero1.jpg 放到 public/images/home/ 文件夹
    },
    { 
      type: "text",
      heading: "Design Philosophy",  // ← 修改标题
      text: "We believe architecture is not static — it moves, adapts, and connects to emotion. Each project is a deep exploration of space, time, and human experience, combining parametric precision with craft aesthetics."  // ← 修改介绍文字
    },
    { 
      type: "image",
      title:"Food & Beverage Expo",  // ← 修改标题
      subtitle:"chantilly cream",  // ← 修改副标题
      align:"right", 
      url:"/images/home/hero2.jpg"  // ← 图片2
    },
    { 
      type: "text",
      heading: "Exhibition Design",  // ← 修改标题
      text: "From concept to construction drawings to on-site coordination. We focus on creating light, fast, and reusable systems that provide temporary structures for events and exhibitions, allowing each space to tell a unique story."  // ← 修改介绍文字
    },
    { 
      type: "image",
      title:"Labor Protection Exhibition",  // ← 修改标题
      subtitle:"Plaza buffers noise & parking",  // ← 修改副标题
      align:"left", 
      url:"/images/home/hero3.jpg"  // ← 图片3
    },
    { 
      type: "text",
      heading: "Practice",  // ← 修改标题
      text: "We work like editors: choose one strong idea, then remove everything that weakens it. Materials are honest, colors do the emotional work, and details guide the body through space."  // ← 修改介绍文字
    },
    { 
      type: "image",
      title:"Hotel & Restaurant Expo Milan",  // ← 修改标题
      subtitle:"2025 Cafer JEtinno Coffee Machine",  // ← 修改副标题
      align:"right", 
      url:"/images/home/hero4.jpg"  // ← 图片4
    },
  ];

  return (
    <main>
      {sections.map((section, i)=> {
        if (section.type === "image") {
          return (
            <motion.section
              key={i}
              {...fadeUp}
              className="relative flex min-h-[60vh] md:min-h-screen items-end overflow-hidden"
              style={{
                backgroundImage:`url(${section.url})`,
                backgroundSize:"cover",
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"/>
              <div className={`relative z-10 mx-auto grid w-full max-w-[1600px] px-6 md:px-12 py-16 ${section.align==='left'? 'place-items-start':'place-items-end'}`}>
                <div className={`max-w-xl bg-white/90 p-6 md:p-8 backdrop-blur ${section.align==='left'? 'justify-self-start':'justify-self-end'}`}>
                  <h1 className="text-2xl font-bold tracking-tight md:text-5xl">{section.title}</h1>
                  <p className="mt-2 text-sm md:text-base text-neutral-700">{section.subtitle}</p>
                </div>
              </div>
            </motion.section>
          );
        } else {
          return (
            <section key={i} className="bg-white">
              <motion.div 
                {...fadeUp} 
                className="mx-auto flex min-h-[50svh] max-w-5xl items-center justify-center px-6 md:px-12 py-20 md:py-32 text-center"
              >
                <div>
                  <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">{section.heading}</h2>
                  <p className="mt-6 text-lg md:text-xl leading-relaxed text-neutral-600 max-w-3xl">{section.text}</p>
                </div>
              </motion.div>
            </section>
          );
        }
      })}
    </main>
  );
}

function AboutPage(){
  const [heroLoaded, setHeroLoaded] = useState(false);

  // Preload hero image
  useEffect(() => {
    const img = new Image();
    img.src = '/images/about/hero.jpg';
    img.onload = () => setHeroLoaded(true);
  }, []);

  const founders = [
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

  return (
    <main className="bg-white">
      {/* Hero Section with Three-line Statement */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-32 md:py-48">
        <motion.div {...fadeUp} className="max-w-6xl">
          <h1
            className="text-[2.7rem] md:text-[3.8rem] lg:text-[4.3rem] leading-[1.1] tracking-tight uppercase"
            style={{
              fontFamily: "'IBM Plex Sans', -apple-system, sans-serif",
              fontWeight: 500,
              WebkitTextStroke: '2px black',
              WebkitTextFillColor: 'transparent'
            }}
          >
            <div>WITH HONEST MATERIALS</div>
            <div className="mt-2">AND REAL EXECUTION,</div>
            <div className="mt-2">WE CREATE SPATIAL EXPERIENCES.</div>
          </h1>
        </motion.div>
      </section>

      {/* Full Screen Image */}
      <section className="relative w-full overflow-hidden bg-neutral-100">
        {/* Loading skeleton */}
        {!heroLoaded && (
          <div className="absolute inset-0 flex items-center justify-center min-h-[70vh] md:min-h-screen">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-neutral-300 border-t-neutral-600 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-sm text-neutral-500 font-medium">Loading...</p>
            </div>
          </div>
        )}

        {/* Hero image with fade-in animation */}
        <div
          className="relative w-full min-h-[70vh] md:min-h-screen transition-opacity duration-700"
          style={{
            backgroundImage: 'url(/images/about/hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'contrast(1.15) saturate(1.2) brightness(1.05)',
            transform: 'scale(1.02)',
            opacity: heroLoaded ? 1 : 0
          }}
        >
          {/* HDR effect layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" style={{ mixBlendMode: 'multiply' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-white/3 via-transparent to-white/5" style={{ mixBlendMode: 'overlay' }} />

          {/* Subtle vignette */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, transparent 0%, transparent 50%, rgba(0,0,0,0.15) 100%)',
              mixBlendMode: 'multiply'
            }}
          />
        </div>
      </section>

      {/* Studio Description */}
      <section style={{ backgroundColor: '#F4F3F1', backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.03\'/%3E%3C/svg%3E")' }}>
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-32">
          <motion.div {...fadeUp} className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Studio</h2>
              <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
                <p>
                  ZM Studio was founded by three graduates of Politecnico di Milano's School of Architecture. Based in Milan, the studio focuses on exhibition design, brand narrative spaces, and art installations.
                </p>
                <p>
                  We care about spatial experience and material details. Through understanding brand identity and storytelling, we abstract concepts into spatial forms with tactile qualities and emotional power.
                </p>
                <p>
                  The studio maintains long-term partnerships with manufacturing and processing facilities located in Italy, Poland, and Germany, enabling rapid progression from sketches to implementation. We provide comprehensive support for design, production, and installation across Europe.
                </p>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="bg-white p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-4">Keywords</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>Spatial Storytelling</li>
                  <li>Material Experimentation</li>
                  <li>On-site Implementation</li>
                  <li>International Supply Chain</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Founders */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-32">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">The Founders</h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              {...fadeUp}
              className="space-y-4"
            >
              {/* Founder headshot photo */}
              <div
                className="aspect-square w-48 mx-auto rounded-full overflow-hidden bg-neutral-200"
                style={{
                  backgroundImage: `url(${founder.photo})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Fallback text if image doesn't load */}
                <div className="w-full h-full grid place-items-center text-2xl font-semibold text-neutral-400" style={{ display: 'none' }}>
                  PHOTO
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold tracking-tight">{founder.name}</h3>
                <p className="text-sm text-neutral-500 mt-1">{founder.nameCN}</p>
                <p className="text-sm font-medium text-neutral-600 mt-2">{founder.education}</p>
              </div>

              <div className="text-sm leading-relaxed text-neutral-700">
                <p>{founder.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section style={{ backgroundColor: '#F4F3F1', backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.03\'/%3E%3C/svg%3E")' }}>
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-32">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">What We Do</h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div {...fadeUp} className="bg-white p-8">
              <h3 className="text-xl font-bold tracking-tight mb-4">Exhibition & Brand Space Design</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">We Provide</p>
                  <p className="text-neutral-700">Concept → 3D → Detail drawings → On-site coordination</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">You Get</p>
                  <p className="text-neutral-700">Unique brand presentation and immersive experiences</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="bg-white p-8">
              <h3 className="text-xl font-bold tracking-tight mb-4">Booth Production & Installation</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">We Provide</p>
                  <p className="text-neutral-700">Multi-location partner factories + Transport + Installation teams</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">You Get</p>
                  <p className="text-neutral-700">Fast, reliable, cost-effective implementation solutions</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="bg-white p-8">
              <h3 className="text-xl font-bold tracking-tight mb-4">Art & Interactive Installations</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">We Provide</p>
                  <p className="text-neutral-700">Material experiments + Model development + Prototype testing</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">You Get</p>
                  <p className="text-neutral-700">Tangible, perceptible brand narratives that tell your story</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-32">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">Policies</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Mutual Code of Conduct */}
          <motion.div {...fadeUp} className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">Mutual Code of Conduct</h3>
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>
                We value respectful collaboration and transparent communication.
              </p>
              <p>
                Clients, partners, and suppliers working with ZM Studio are expected to maintain professional conduct, support fair working conditions, and respect intellectual and creative work.
              </p>
              <p className="text-sm italic text-neutral-600">
                Our full Mutual Code of Conduct is available upon request.
              </p>
            </div>
          </motion.div>

          {/* Quality Management */}
          <motion.div {...fadeUp} className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">Quality Management</h3>
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              <p>
                ZM Studio is committed to delivering spaces that are both conceptually strong and precisely executed. We work closely with our fabrication partners to ensure consistent quality from design to installation.
              </p>

              <div>
                <p className="font-medium mb-3">Our quality approach focuses on:</p>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Understanding each client's narrative and transforming it into spatial experience.</li>
                  <li>• Maintaining reliable communication between design, fabrication, and on-site teams.</li>
                  <li>• Ensuring clarity in drawings, materials, and construction details to reduce implementation risk.</li>
                  <li>• Continuously improving workflows based on project feedback and installation experience.</li>
                  <li>• Conducting our work responsibly and in compliance with local regulations and safety standards.</li>
                </ul>
              </div>

              <p className="text-sm italic text-neutral-600 pt-4">
                We believe quality comes from clear design intent + precise execution + consistent coordination.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function ProjectsPage(){
  const [query, setQuery] = useState("");
  const [typo, setTypo] = useState<typeof TYPOLOGIES[number]>("All");
  const [status, setStatus] = useState<typeof STATUSES[number]>("Any");
  const [view, setView] = useState<"grid"|"list">("grid");
  const { navigate } = useHashRoute();

  const filtered = useMemo(()=> PROJECTS.filter(p=>{
    const matchesQuery = [p.title,p.location,p.typology,p.status,p.tags.join(" ")].join(" ").toLowerCase().includes(query.toLowerCase());
    const matchesTypo = typo==='All' || p.typology===typo; const matchesStatus = status==='Any' || p.status===status; return matchesQuery && matchesTypo && matchesStatus;
  }),[query,typo,status]);

  const Toolbar = () => (
    <div className="border-b bg-white/80">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-3 px-6 md:px-12 py-3 md:py-4">
        <div className="relative grow md:max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-400"/>
          <Input placeholder="Search title, tags, city…" className="pl-9" value={query} onChange={(e)=>setQuery(e.target.value)} />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild><Button variant="outline" className="gap-2"><Filter className="size-4"/> Typology <ChevronDown className="size-4"/></Button></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Typology</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            {TYPOLOGIES.map(t=> <DropdownMenuItem key={t} onClick={()=>setTypo(t as any)} className={typo===t?"font-semibold":""}>{t}</DropdownMenuItem>)}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild><Button variant="outline" className="gap-2">Status <ChevronDown className="size-4"/></Button></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Project status</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            {STATUSES.map(s=> <DropdownMenuItem key={s} onClick={()=>setStatus(s as any)} className={status===s?"font-semibold":""}>{s}</DropdownMenuItem>)}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="outline" size="icon" onClick={()=> setView(view==='grid'?'list':'grid')} aria-label="Toggle view">{view==='grid'? <List className="size-4"/> : <LayoutGrid className="size-4"/>}</Button>
      </div>
    </div>
  );

  return (
    <main className="bg-white">
      <Toolbar />
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-3 text-sm text-neutral-600">{filtered.length} project{filtered.length!==1?'s':''} • View: {view}</div>
      {view==='grid'? (
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 px-6 md:px-12 pb-20 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(p=> (
            <motion.div key={p.id} {...fadeUp} className="overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-md">
              <button onClick={()=> navigate(`projects/${p.id}`)} className="block w-full text-left">
                <Block label={p.id.toUpperCase()} image={p.coverImage} className=""/>
              </button>
              <div className="p-4">
                <h3 className="text-base font-semibold tracking-tight">{p.title}</h3>
                <p className="text-sm text-neutral-600">{p.location} • {p.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 pb-20">
          <div className="divide-y">
            {filtered.map(p=> (
              <motion.div key={p.id} {...fadeUp} className="flex flex-col gap-4 py-5 md:flex-row">
                <button onClick={()=> navigate(`projects/${p.id}`)} className="w-full shrink-0 md:w-80"><Block label={p.id.toUpperCase()} image={p.coverImage} className=""/></button>
                <div className="min-w-0 grow">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-neutral-500"><span>{p.location}</span><span>•</span><span>{p.year}</span></div>
                  </div>
                  <p className="mt-2 text-neutral-600">{p.summary}</p>
                  <div className="mt-4"><Button variant="ghost" onClick={()=> navigate(`projects/${p.id}`)} className="gap-2 px-0">Open details</Button></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

function ProjectDetailPage({ id }:{id:string}){
  const project = PROJECTS.find(p=> p.id===id);
  if(!project) return (<main className="mx-auto max-w-[1600px] px-6 md:px-12 py-20"><h1 className="text-2xl font-bold">Not found</h1></main>);
  return (
    <main className="bg-white">
      <motion.div {...fadeUp} className="relative">
        <Block label={project.id.toUpperCase()} image={project.coverImage} className="aspect-[21/9]"/>
        <div className="mx-auto -mt-10 max-w-[1600px] px-6 md:px-12">
          <div className="bg-white/90 p-6 backdrop-blur">
            <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
            <p className="text-sm text-neutral-600">{project.location} • {project.year}</p>
          </div>
        </div>
      </motion.div>
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-6 md:px-12 py-10 md:grid-cols-12">
        <motion.div {...fadeUp} className="md:col-span-8">
          <h2 className="mb-2 text-xl font-semibold">Overview</h2>
          <p className="leading-relaxed text-neutral-700">{project.body}</p>
          <h3 className="mt-8 mb-3 text-lg font-semibold">Gallery</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.gallery.map((item, i) => {
              // Check if item is a string (image path) or number (color hue)
              const isImagePath = typeof item === 'string';
              return isImagePath
                ? <Block key={i} image={item} className=""/>
                : <Block key={i} label={`${project.id}-${i+1}`} className=""/>;
            })}
          </div>
        </motion.div>
        <motion.aside {...fadeUp} className="md:col-span-4">
          <div className="p-4 bg-neutral-50">
            <dl className="grid grid-cols-3 gap-2 text-sm">
              <dt className="col-span-1 text-neutral-500">Year</dt><dd className="col-span-2">{project.year}</dd>
              <dt className="col-span-1 text-neutral-500">Location</dt><dd className="col-span-2">{project.location}</dd>
              <dt className="col-span-1 text-neutral-500">Typology</dt><dd className="col-span-2">{project.typology}</dd>
              <dt className="col-span-1 text-neutral-500">Status</dt><dd className="col-span-2">{project.status}</dd>
            </dl>
          </div>
        </motion.aside>
      </div>
    </main>
  );
}

function ServicesPage(){
  const items = [
    { title: "Exhibition Application & Registration", text: "Documents, registration and liaison with organizers." },
    { title: "Custom Booth Design & Construction", text: "3D concepts, construction, on-site management." },
    { title: "Graphic Design & Printing", text: "Brochures, posters, backdrops, business cards." },
    { title: "Furniture & Equipment Rental", text: "Rental of chairs, lighting, audio and display stands." },
    { title: "Logistics & Shipping Coordination", text: "Transport, customs, storage and venue access." },
    { title: "On-site Supervision", text: "Full monitoring during setup and dismantling." },
    { title: "Interpretation & Translation (CN/EN/IT)", text: "On-site interpretation and document translation." },
    { title: "Hospitality & Travel Support", text: "Hotel booking, transport and business travel." },
    { title: "Catering & Event Management", text: "Catering, receptions and product launches." },
  ];
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20">
        <motion.div {...fadeUp}>
          <h1 className="text-4xl font-bold tracking-tight mb-3">Services</h1>
          <p className="text-xl text-neutral-600 mb-12">ZM Studio</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map(s=> (
            <motion.article key={s.title} {...fadeUp} className="flex flex-col">
              <h3 className="text-xl font-bold tracking-tight mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{s.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}

function NewsPage(){
  const news = [
    { date: "2025-10-01", title: "Shortlisted for pop‑up pavilion", desc: "Reusable timber frames." },
    { date: "2025-09-12", title: "Runway Curve Campus concept released", desc: "Five convex nodes transform a 1.1 km strip." },
    { date: "2025-08-20", title: "Talk: Healing Micro‑Rooms", desc: "Color‑based comfort environments." },
  ];
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20">
        <motion.h1 {...fadeUp} className="text-3xl font-bold tracking-tight">News</motion.h1>
        <div className="mt-8 space-y-6">
          {news.map(n=> (
            <motion.div key={n.title} {...fadeUp} className="bg-neutral-50 p-5">
              <div className="text-xs uppercase tracking-wider text-neutral-500">{n.date}</div>
              <div className="mt-1 text-lg font-semibold">{n.title}</div>
              <div className="text-neutral-600">{n.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

function ContactPage(){
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 重置状态
    setSubmitStatus(null);
    
    // 前端验证
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ type: 'error', message: '请填写所有字段' });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message });
        // 清空表单
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || '发送失败，请重试' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: '网络错误，请稍后重试' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20">
        <motion.h1 {...fadeUp} className="text-3xl font-bold tracking-tight">Contact</motion.h1>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div {...fadeUp}>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <Input 
                placeholder="Your name" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-0 border-b border-neutral-300 rounded-none focus:ring-0 focus:border-black" 
                required
              />
              <Input 
                type="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-0 border-b border-neutral-300 rounded-none focus:ring-0 focus:border-black" 
                required
              />
              <Textarea 
                placeholder="Message" 
                rows={6} 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="border-0 border-b border-neutral-300 rounded-none focus:ring-0 focus:border-black" 
                required
              />
              
              {/* 提示信息 */}
              {submitStatus && (
                <div className={`p-3 rounded ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <Button type="submit" className="w-fit" disabled={isSubmitting}>
                {isSubmitting ? '发送中...' : 'Send message'}
              </Button>
            </form>
          </motion.div>
          <motion.div {...fadeUp} className="space-y-2 text-neutral-700">
            <div><Mail className="inline size-4 mr-2"/> <a href="mailto:info@zmstudiomilano.it" className="hover:underline">info@zmstudiomilano.it</a></div>
            <div><Phone className="inline size-4 mr-2"/> <a href="tel:+393444731427" className="hover:underline">+39 3444731427</a></div>
            <div><MapPin className="inline size-4 mr-2"/> Milan, Italy</div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

// ---------------- Router ----------------
function Router(){
  const { path } = useHashRoute();
  const top = path.split("/")[0] || "";
  if(top==="") return <HomePage/>;
  if(top==="about") return <AboutPage/>;
  if(top==="projects"){ const id = parseProjectId(path); return id? <ProjectDetailPage id={id}/> : <ProjectsPage/>; }
  if(top==="services") return <ServicesPage/>;
  if(top==="news") return <NewsPage/>;
  if(top==="contact") return <ContactPage/>;
  return <HomePage/>;
}

export default function ZMSite(){
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <Router />
      <footer className="border-t py-10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Studio</h4>
              <p className="mt-2 text-sm text-neutral-600">ZM Studio — Exhibition & Architecture. Milan, Italy.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Contact</h4>
              <p className="mt-2 text-sm text-neutral-600"><a href="mailto:info@zmstudiomilano.it" className="hover:underline">info@zmstudiomilano.it</a></p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Social</h4>
              <nav className="mt-2 grid gap-1 text-sm text-neutral-700">
                <a href="#" className="hover:underline">Instagram</a>
                <a href="#" className="hover:underline">LinkedIn</a>
                <a href="#" className="hover:underline">X / Twitter</a>
              </nav>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Newsletter</h4>
              <div className="mt-2 flex gap-2">
                <Input placeholder={'Your email'} />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} ZM Studio. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

