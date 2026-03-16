// About Page

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/config/animation";
import { MILAN_TEAM, SHANGHAI_TEAM } from "@/config/data";

export default function AboutPage() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  // Preload hero image
  useEffect(() => {
    const img = new Image();
    img.src = '/images/about/hero.jpg';
    img.onload = () => setHeroLoaded(true);
  }, []);

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

      {/* Board / Team */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-32 flex flex-col gap-20">
        {/* Shanghai Studio */}
        <div>
          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider mb-10">Shanghai Studio</h2>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4">
            {SHANGHAI_TEAM.map((member, idx) => (
              <motion.div
                key={`shanghai-${idx}`}
                {...fadeUp}
                className="group relative aspect-[4/5] bg-neutral-100 overflow-hidden cursor-pointer"
              >
                {/* Default State: Photo */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                  style={{
                    backgroundImage: `url(${member.photo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                {/* Hover State: Text inside White Background */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                    {member.name}
                    <span className="block mt-1 text-xl">{member.nameCN}</span>
                  </h3>
                  <p className="text-lg md:text-xl font-bold tracking-wide text-black">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Milan Studio */}
        <div>
          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider mb-10">Milan Studio</h2>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4">
            {MILAN_TEAM.map((member, idx) => (
              <motion.div
                key={`milan-${idx}`}
                {...fadeUp}
                className="group relative aspect-[4/5] bg-neutral-100 overflow-hidden cursor-pointer"
              >
                {/* Default State: Photo */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                  style={{
                    backgroundImage: `url(${member.photo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                {/* Hover State: Text inside White Background */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                    {member.name}
                    <span className="block mt-1 text-xl">{member.nameCN}</span>
                  </h3>
                  <p className="text-lg md:text-xl font-bold tracking-wide text-black">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
