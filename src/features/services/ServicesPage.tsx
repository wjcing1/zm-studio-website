// Services Page

import { motion } from "framer-motion";
import { fadeUp } from "@/config/animation";
import { SERVICES } from "@/config/data";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedText } from "@/lib/i18n";

const VISIBLE_SERVICE_TITLES = new Set([
  "Exhibition Application & Registration",
  "Custom Booth Design & Construction",
  "On-site Supervision"
]);

export default function ServicesPage() {
  const { language, t } = useLanguage();
  const visibleServices = SERVICES.filter((service) => VISIBLE_SERVICE_TITLES.has(getLocalizedText(service.title, "en")));

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20">
        <motion.div {...fadeUp}>
          <h1 className="text-4xl font-bold tracking-tight mb-3">{t.services.title}</h1>
          <p className="text-xl text-neutral-600 mb-12">{t.services.subtitle}</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((s) => (
            <motion.article key={getLocalizedText(s.title, language)} {...fadeUp} className="flex flex-col">
              <h3 className="text-xl font-bold tracking-tight mb-2">{getLocalizedText(s.title, language)}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{getLocalizedText(s.text, language)}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
