// Home Page

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/config/animation";
import { HOME_SECTIONS } from "@/config/data";

// Get all image URLs from sections
const imageUrls = HOME_SECTIONS
  .filter(s => s.type === "image" && s.url)
  .map(s => s.url!);

export default function HomePage() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const loadedCountRef = useRef(0);
  const totalImages = imageUrls.length;

  const handleImageLoad = () => {
    loadedCountRef.current++;
    if (loadedCountRef.current >= totalImages) {
      setImagesLoaded(true);
    }
  };

  return (
    <>
      {/* Hidden preload images */}
      <div className="absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none" aria-hidden="true">
        {imageUrls.map((url, i) => (
          <img
            key={i}
            src={url}
            alt=""
            onLoad={handleImageLoad}
            onError={handleImageLoad}
          />
        ))}
      </div>

      {/* Show loading while images are loading */}
      {!imagesLoaded ? (
        <main className="min-h-screen grid place-items-center bg-white">
          <div className="flex gap-1">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-1 h-5 bg-neutral-800"
                animate={{
                  scaleY: [1, 2, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </main>
      ) : (
        <main>
          {HOME_SECTIONS.map((section, i) => {
            if (section.type === "image") {
              return (
                <motion.section
                  key={i}
                  {...fadeUp}
                  className="relative flex min-h-[75vh] md:min-h-screen items-end overflow-hidden"
                >
                  {/* Use img tag with object-cover to prevent mobile distortion */}
                  <img
                    src={section.url}
                    alt={section.title || ""}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className={`relative z-10 mx-auto grid w-full max-w-[1600px] px-6 md:px-12 py-16 ${section.align === 'left' ? 'place-items-start' : 'place-items-end'}`}>
                    <div className={`max-w-xl bg-white/15 p-6 md:p-8 backdrop-blur-xl shadow-xl shadow-black/10 ${section.align === 'left' ? 'justify-self-start' : 'justify-self-end'}`}>
                      <h1 className="text-2xl font-bold tracking-tight md:text-5xl text-white">{section.title}</h1>
                      <p className="mt-2 text-sm md:text-base text-white/80">{section.subtitle}</p>
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
      )}
    </>
  );
}


