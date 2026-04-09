// Home Page - Restructured with dual business showcase

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { fadeUp } from "@/config/animation";
import { HOME_SECTIONS, FEATURED_EXHIBITION } from "@/config/data";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedText } from "@/lib/i18n";

export default function HomePage() {
  const { language, t } = useLanguage();
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const loadedCountRef = useRef(0);
  const heroSlides = HOME_SECTIONS
    .filter(s => s.type === "image" && s.url)
    .map(s => ({
      url: s.url!,
      title: s.title ? getLocalizedText(s.title, language) : "",
      subtitle: s.subtitle ? getLocalizedText(s.subtitle, language) : ""
    }));
  const totalImages = heroSlides.length;
  const navigate = useNavigate();

  const handleImageLoad = () => {
    loadedCountRef.current++;
    if (loadedCountRef.current >= totalImages) {
      setImagesLoaded(true);
    }
  };

  // Auto-advance carousel
  useEffect(() => {
    if (!imagesLoaded) return;
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [imagesLoaded]);

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length);

  // Loading state
  if (!imagesLoaded) {
    return (
      <>
        <div className="absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none" aria-hidden="true">
          {heroSlides.map((slide, i) => (
            <img key={i} src={slide.url} alt="" onLoad={handleImageLoad} onError={handleImageLoad} />
          ))}
        </div>
        <main className="min-h-screen grid place-items-center bg-white">
          <div className="flex gap-1">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-1 h-5 bg-neutral-800"
                animate={{ scaleY: [1, 2, 1], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
              />
            ))}
          </div>
        </main>
      </>
    );
  }

  return (
    <main>
      {/* Hero Carousel Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={slide.url} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 flex h-full items-end pb-24 md:pb-32">
          <div className="mx-auto w-full max-w-[1600px] px-6 md:px-12">
            <motion.div {...fadeUp} className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="mt-3 text-lg md:text-xl text-white/80">
                {heroSlides[currentSlide].subtitle}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Side Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all"
        >
          <ChevronLeft className="size-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all"
        >
          <ChevronRight className="size-6 text-white" />
        </button>

        {/* Bottom Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"}`}
            />
          ))}
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="bg-white">
        <motion.div
          {...fadeUp}
          className="mx-auto flex min-h-[50svh] max-w-4xl items-center justify-center px-6 md:px-12 py-24 md:py-32 text-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{t.home.designPhilosophy}</h2>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-neutral-600">
              {t.home.designPhilosophyText}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Exhibition Featured Section */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-sm text-neutral-500 tracking-widest uppercase mb-2">{t.common.featuredWork}</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">{t.exhibition.title}</h2>
            </div>
            <Button
              variant="outline"
              className="self-start md:self-auto"
              onClick={() => navigate("/exhibition")}
            >
              {t.common.viewAll} <ArrowRight className="ml-2 size-4" />
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURED_EXHIBITION.map((p) => (
              <motion.div key={p.id} {...fadeUp}>
                <button
                  onClick={() => navigate(`/exhibition/${p.id}`)}
                  className="block w-full text-left group"
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={p.coverImage}
                      alt={getLocalizedText(p.title, language)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors">{getLocalizedText(p.title, language)}</h3>
                    <p className="text-sm text-neutral-500 mt-1">{getLocalizedText(p.location, language)} • {p.year}</p>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 md:py-28">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.home.ctaTitle}</h2>
          <p className="mt-4 text-lg text-neutral-600">
            {t.home.ctaText}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate("/contact")}>
              {t.home.getInTouch} <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/services")}>
              {t.common.ourServices}
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
