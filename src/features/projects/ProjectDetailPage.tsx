// Project Detail Page - Norm Architects Style

import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { fadeUp } from "@/config/animation";
import { PROJECTS } from "@/config/data";

// Gallery Image component with hover animation and lightbox
function GalleryImage({ src, alt }: { src: string; alt: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Image with hover effect */}
      <motion.div
        className="relative overflow-hidden cursor-pointer group w-full h-full"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400 flex items-center justify-center">
          <span className="text-white text-sm tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-400">
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

// Gallery Carousel with navigation buttons - responsive for mobile
function GalleryCarousel({ images, title }: { images: (string | number)[]; title: string }) {
  const [startIndex, setStartIndex] = useState(0);

  // Filter to only string image paths
  const imageUrls = images.filter((img): img is string => typeof img === 'string');
  const totalImages = imageUrls.length;

  // Get visible count based on screen size (using window width detection would require useEffect)
  // For SSR-safe approach, we render all 3 and hide with CSS
  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % totalImages;
      visible.push({ src: imageUrls[index], originalIndex: index });
    }
    return visible;
  };

  const goNext = () => {
    setStartIndex((prev) => (prev + 1) % totalImages);
  };

  const goPrev = () => {
    setStartIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  if (totalImages === 0) return null;

  const visibleImages = getVisibleImages();

  return (
    <section className="pb-16 md:pb-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-10">
        <div className="relative">
          {/* Images Grid - responsive: 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {visibleImages.map((item, i) => (
              <motion.div
                key={`${startIndex}-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                // Hide 2nd image on mobile, 3rd image on tablet
                className={`overflow-hidden aspect-[3/4] ${i === 1 ? 'hidden md:block' : ''
                  } ${i === 2 ? 'hidden lg:block' : ''}`}
              >
                <GalleryImage src={item.src} alt={`${title} - Image ${item.originalIndex + 1}`} />
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons - elegant minimal design */}
          {totalImages > 1 && (
            <>
              {/* Left Button - sleek circular design */}
              <button
                onClick={goPrev}
                className="absolute left-3 md:-left-5 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-sm shadow-lg shadow-black/10 flex items-center justify-center transition-all duration-400 hover:bg-neutral-900 hover:shadow-xl group z-10"
                aria-label="Previous images"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-neutral-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right Button - sleek circular design */}
              <button
                onClick={goNext}
                className="absolute right-3 md:-right-5 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-full bg-white/95 backdrop-blur-sm shadow-lg shadow-black/10 flex items-center justify-center transition-all duration-400 hover:bg-neutral-900 hover:shadow-xl group z-10"
                aria-label="Next images"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-neutral-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
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

  // Use all gallery images for the bottom row
  const galleryImages = project.gallery;
  // First image for the right column
  const featureImage = project.gallery[0];

  return (
    <main className="bg-white">
      {/* Hero Section - Full width with title overlay */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        </motion.div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <motion.h1
            {...fadeUp}
            className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.3em] uppercase"
          >
            {project.title}
          </motion.h1>
          <motion.div
            {...fadeUp}
            className="mt-4 flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-white/80"
          >
            <span>{project.typology}</span>
            <span className="text-white/40">|</span>
            <span>{project.status}</span>
          </motion.div>
          <motion.p
            {...fadeUp}
            className="mt-8 max-w-2xl text-sm md:text-base text-white/70 leading-relaxed"
          >
            {project.summary}
          </motion.p>
        </div>
      </section>

      {/* Content Section - Three column layout */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[1200px] px-8 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left Sidebar - Metadata (Fixed/Sticky) */}
            <motion.aside {...fadeUp} className="lg:col-span-2 self-start">
              <div className="lg:sticky lg:top-28 space-y-8">
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-1 font-medium">
                    Location
                  </p>
                  <p className="text-sm text-neutral-700">{project.location}</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-1 font-medium">
                    Category
                  </p>
                  <p className="text-sm text-neutral-700">{project.typology}</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-1 font-medium">
                    Year
                  </p>
                  <p className="text-sm text-neutral-700">{project.year}</p>
                </div>
                {project.tags && project.tags.length > 0 && (
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-1 font-medium">
                      Tags
                    </p>
                    <div className="flex flex-col gap-1">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-sm text-neutral-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.aside>

            {/* Middle - Description Text */}
            <motion.div {...fadeUp} className="lg:col-span-6">
              <div className="space-y-6">
                {project.body.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-base leading-[1.8] text-neutral-600 tracking-wide">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Right - Feature Image with Caption (Smaller) */}
            {typeof featureImage === 'string' && (
              <motion.div {...fadeUp} className="lg:col-span-4">
                <div className="space-y-3 max-w-[280px] ml-auto">
                  <img
                    src={featureImage}
                    alt={`${project.title} - Feature`}
                    className="w-full aspect-[3/4] object-cover"
                  />
                  <p className="text-[11px] text-neutral-500 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Carousel - Three Images with Navigation */}
      {galleryImages.length > 0 && (
        <GalleryCarousel images={galleryImages} title={project.title} />
      )}
    </main>
  );
}
