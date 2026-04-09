import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/config/animation";
import { useLanguage } from "@/contexts/LanguageContext";

const AI_FEATURES = [
  {
    titleKey: "focus1Title",
    textKey: "focus1Text"
  },
  {
    titleKey: "focus2Title",
    textKey: "focus2Text"
  },
  {
    titleKey: "focus3Title",
    textKey: "focus3Text"
  }
] as const;

export default function AiPage() {
  const { t } = useLanguage();

  return (
    <main className="bg-white">
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 md:py-28">
          <motion.p
            {...fadeUp}
            className="text-sm uppercase tracking-[0.3em] text-white/50"
          >
            ZM Studio
          </motion.p>
          <motion.h1
            {...fadeUp}
            className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl"
          >
            {t.ai.title}
          </motion.h1>
          <motion.p
            {...fadeUp}
            className="mt-5 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl"
          >
            {t.ai.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-10 px-6 py-16 md:grid-cols-12 md:px-12 md:py-24">
        <motion.div {...fadeUp} className="md:col-span-5">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
            {t.ai.introTitle}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            {t.ai.title}
          </h2>
        </motion.div>
        <motion.div {...fadeUp} className="md:col-span-7">
          <p className="text-lg leading-relaxed text-neutral-600">
            {t.ai.introText}
          </p>
        </motion.div>
      </section>

      <section className="bg-[#f4f3f1] py-16 md:py-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <motion.h2
            {...fadeUp}
            className="text-2xl font-bold tracking-tight md:text-3xl"
          >
            {t.ai.focusTitle}
          </motion.h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {AI_FEATURES.map((item) => (
              <motion.div
                key={item.titleKey}
                {...fadeUp}
                className="bg-white p-8"
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {t.ai[item.titleKey]}
                </h3>
                <p className="mt-4 leading-relaxed text-neutral-600">
                  {t.ai[item.textKey]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-16 md:px-12 md:py-24">
        <motion.div
          {...fadeUp}
          className="grid gap-8 border border-neutral-200 p-8 md:grid-cols-[1.5fr_1fr] md:items-end md:p-12"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {t.ai.ctaTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
              {t.ai.ctaText}
            </p>
          </div>
          <div className="md:justify-self-end">
            <Button size="lg" asChild>
              <Link to="/contact">
                {t.home.getInTouch} <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
