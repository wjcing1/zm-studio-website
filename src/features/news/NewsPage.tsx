// News Page

import { motion } from "framer-motion";
import { fadeUp } from "@/config/animation";
import { NEWS } from "@/config/data";

export default function NewsPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20">
        <motion.h1 {...fadeUp} className="text-3xl font-bold tracking-tight">
          News
        </motion.h1>
        <div className="mt-8 space-y-6">
          {NEWS.map((n) => (
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
