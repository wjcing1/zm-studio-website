// Project Detail Page

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Block from "@/components/shared/Block";
import { fadeUp } from "@/config/animation";
import { PROJECTS } from "@/config/data";

// Gallery Image component with hover animation
function GalleryImage({ src, alt }: { src: string; alt: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Image with hover effect */}
      <motion.div
        className="relative overflow-hidden cursor-pointer group"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400 flex items-center justify-center">
          <span className="text-white text-sm tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-400 transform translate-y-2 group-hover:translate-y-0">
            View
          </span>
        </div>
      </motion.div>

      {/* Lightbox modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain"
          />
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white text-sm tracking-[0.2em] uppercase transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </motion.div>
      )}
    </>
  );
}

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
      {/* Hero */}
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

      {/* Content */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-6 md:px-12 py-10 md:grid-cols-12">
        {/* Main content */}
        <motion.div {...fadeUp} className="md:col-span-8">
          <h2 className="mb-2 text-xl font-semibold">Overview</h2>
          <p className="leading-relaxed text-neutral-700">{project.body}</p>

          {/* Gallery with hover animations */}
          <h3 className="mt-12 mb-6 text-lg font-semibold">Gallery</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.gallery.map((item, i) => {
              const isImagePath = typeof item === 'string';
              return isImagePath ? (
                <GalleryImage key={i} src={item} alt={`${project.title} - Image ${i + 1}`} />
              ) : (
                <Block key={i} label={`${project.id}-${i + 1}`} className="" />
              );
            })}
          </div>
        </motion.div>

        {/* Sticky sidebar */}
        <motion.aside {...fadeUp} className="md:col-span-4">
          <div className="md:sticky md:top-24 space-y-6 bg-neutral-50/80 p-6">
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 mb-1">Year</p>
              <p className="text-lg">{project.year}</p>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 mb-1">Location</p>
              <p className="text-lg">{project.location}</p>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 mb-1">Typology</p>
              <p className="text-lg">{project.typology}</p>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 mb-1">Status</p>
              <p className="text-lg">{project.status}</p>
            </div>
            {project.tags && project.tags.length > 0 && (
              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 mb-2">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-neutral-200/60 text-neutral-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.aside>
      </div>
    </main>
  );
}
