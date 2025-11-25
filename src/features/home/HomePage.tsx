// Home Page

import { motion } from "framer-motion";
import { fadeUp } from "@/config/animation";
import { HOME_SECTIONS } from "@/config/data";

export default function HomePage() {
  return (
    <main>
      {HOME_SECTIONS.map((section, i) => {
        if (section.type === "image") {
          return (
            <motion.section
              key={i}
              {...fadeUp}
              className="relative flex min-h-[60vh] md:min-h-screen items-end overflow-hidden"
              style={{
                backgroundImage: `url(${section.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className={`relative z-10 mx-auto grid w-full max-w-[1600px] px-6 md:px-12 py-16 ${section.align === 'left' ? 'place-items-start' : 'place-items-end'}`}>
                <div className={`max-w-xl bg-white/90 p-6 md:p-8 backdrop-blur ${section.align === 'left' ? 'justify-self-start' : 'justify-self-end'}`}>
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
