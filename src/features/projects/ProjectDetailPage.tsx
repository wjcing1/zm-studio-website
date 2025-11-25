// Project Detail Page

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Block from "@/components/shared/Block";
import { fadeUp } from "@/config/animation";
import { PROJECTS } from "@/config/data";

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS.find((p) => p.id === projectId);

  if (!project) {
    return (
      <main className="mx-auto max-w-[1600px] px-6 md:px-12 py-20">
        <h1 className="text-2xl font-bold">Not found</h1>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <motion.div {...fadeUp} className="relative">
        <Block label={project.id.toUpperCase()} image={project.coverImage} className="aspect-[21/9]" />
        <div className="mx-auto -mt-10 max-w-[1600px] px-6 md:px-12">
          <div className="bg-white/90 p-6 backdrop-blur">
            <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
            <p className="text-sm text-neutral-600">
              {project.location} • {project.year}
            </p>
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
              return isImagePath ? (
                <Block key={i} image={item} className="" />
              ) : (
                <Block key={i} label={`${project.id}-${i + 1}`} className="" />
              );
            })}
          </div>
        </motion.div>
        <motion.aside {...fadeUp} className="md:col-span-4">
          <div className="p-4 bg-neutral-50">
            <dl className="grid grid-cols-3 gap-2 text-sm">
              <dt className="col-span-1 text-neutral-500">Year</dt>
              <dd className="col-span-2">{project.year}</dd>
              <dt className="col-span-1 text-neutral-500">Location</dt>
              <dd className="col-span-2">{project.location}</dd>
              <dt className="col-span-1 text-neutral-500">Typology</dt>
              <dd className="col-span-2">{project.typology}</dd>
              <dt className="col-span-1 text-neutral-500">Status</dt>
              <dd className="col-span-2">{project.status}</dd>
            </dl>
          </div>
        </motion.aside>
      </div>
    </main>
  );
}
