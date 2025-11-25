// Services Page

import { motion } from "framer-motion";
import { fadeUp } from "@/config/animation";
import { SERVICES } from "@/config/data";

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20">
        <motion.div {...fadeUp}>
          <h1 className="text-4xl font-bold tracking-tight mb-3">Services</h1>
          <p className="text-xl text-neutral-600 mb-12">ZM Studio</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
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
