// About Page

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/config/animation";
import {
  ABOUT_KEYWORDS,
  ABOUT_MUTUAL_CONDUCT_PARAGRAPHS,
  ABOUT_QUALITY_BULLETS,
  ABOUT_QUALITY_PARAGRAPHS,
  ABOUT_SERVICE_CARDS,
  ABOUT_STUDIO_PARAGRAPHS,
  MILAN_TEAM
} from "@/config/data";
import { useLanguage } from "@/contexts/LanguageContext";
import { withBasePath } from "@/lib/assets";
import { getLocalizedText } from "@/lib/i18n";

const aboutHeroImage = withBasePath("/images/about/hero.jpg");

export default function AboutPage() {
  const { language, t } = useLanguage();
  const [heroLoaded, setHeroLoaded] = useState(false);

  // Preload hero image
  useEffect(() => {
    const img = new Image();
    img.src = aboutHeroImage;
    img.onload = () => setHeroLoaded(true);
  }, []);

  return (
    <main className="bg-white">
      {/* Hero Section with Three-line Statement */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-32 md:py-48">
        <motion.div {...fadeUp} className="max-w-6xl">
          <h1
            className={`text-[2.7rem] md:text-[3.8rem] lg:text-[4.3rem] leading-[1.1] tracking-tight uppercase ${language === "zh" ? "zh-serif-display" : ""}`}
            style={{
              fontFamily: language === "zh" ? undefined : "'IBM Plex Sans', -apple-system, sans-serif",
              fontWeight: 500,
              WebkitTextStroke: '2px black',
              WebkitTextFillColor: 'transparent'
            }}
          >
            <div>{t.about.heroLine1}</div>
            <div className="mt-2">{t.about.heroLine2}</div>
            <div className="mt-2">{t.about.heroLine3}</div>
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
              <p className="text-sm text-neutral-500 font-medium">{t.common.loading}</p>
            </div>
          </div>
        )}

        {/* Hero image with fade-in animation */}
        <div
          className="relative w-full min-h-[70vh] md:min-h-screen transition-opacity duration-700"
          style={{
            backgroundImage: `url(${aboutHeroImage})`,
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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{t.about.studioTitle}</h2>
              <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
                {ABOUT_STUDIO_PARAGRAPHS.map((paragraph, index) => (
                  <p key={index}>{getLocalizedText(paragraph, language)}</p>
                ))}
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="bg-white p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-4">{t.about.keywordsTitle}</h3>
                <ul className="space-y-2 text-neutral-700">
                  {ABOUT_KEYWORDS.map((keyword, index) => (
                    <li key={index}>{getLocalizedText(keyword, language)}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Board / Team */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-32 flex flex-col gap-20">
        {/* Milan Studio */}
        <div>
          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider mb-10">{t.about.milanStudio}</h2>
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
                    backgroundPosition: member.photoPosition ?? 'center'
                  }}
                />

                {/* Hover State: Text inside White Background */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                    {member.name}
                    {member.nameCN && member.nameCN !== member.name ? (
                      <span className="block mt-1 text-xl">{member.nameCN}</span>
                    ) : null}
                  </h3>
                  <p className="text-lg md:text-xl font-bold tracking-wide text-black">{getLocalizedText(member.role, language)}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">{t.about.whatWeDoTitle}</h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {ABOUT_SERVICE_CARDS.map((card, index) => (
              <motion.div key={index} {...fadeUp} className="bg-white p-8">
                <h3 className="text-xl font-bold tracking-tight mb-4">{getLocalizedText(card.title, language)}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">{t.about.provideLabel}</p>
                    <p className="text-neutral-700">{getLocalizedText(card.provide, language)}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2">{t.about.resultLabel}</p>
                    <p className="text-neutral-700">{getLocalizedText(card.result, language)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-32">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">{t.about.policiesTitle}</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Mutual Code of Conduct */}
          <motion.div {...fadeUp} className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">{t.about.mutualConductTitle}</h3>
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              {ABOUT_MUTUAL_CONDUCT_PARAGRAPHS.map((paragraph, index) => (
                <p key={index}>{getLocalizedText(paragraph, language)}</p>
              ))}
              <p className="text-sm italic text-neutral-600">
                {t.about.mutualConductNote}
              </p>
            </div>
          </motion.div>

          {/* Quality Management */}
          <motion.div {...fadeUp} className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">{t.about.qualityManagementTitle}</h3>
            <div className="space-y-4 text-neutral-700 leading-relaxed">
              {ABOUT_QUALITY_PARAGRAPHS.map((paragraph, index) => (
                <p key={index}>{getLocalizedText(paragraph, language)}</p>
              ))}

              <div>
                <p className="font-medium mb-3">{t.about.qualityApproachTitle}</p>
                <ul className="space-y-2 text-neutral-700">
                  {ABOUT_QUALITY_BULLETS.map((item, index) => (
                    <li key={index}>• {getLocalizedText(item, language)}</li>
                  ))}
                </ul>
              </div>

              <p className="text-sm italic text-neutral-600 pt-4">
                {t.about.qualityQuote}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
