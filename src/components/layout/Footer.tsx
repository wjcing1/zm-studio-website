// Footer component - Norm Architects inspired minimal design

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/60 py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          {/* Work */}
          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-6">
              Work
            </h4>
            <nav className="space-y-3">
              <Link
                to="/exhibition"
                className="block text-sm text-neutral-600 hover:opacity-60 transition-opacity duration-300"
              >
                Exhibition
              </Link>
              <Link
                to="/interior"
                className="block text-sm text-neutral-600 hover:opacity-60 transition-opacity duration-300"
              >
                Interior
              </Link>
            </nav>
          </div>

          {/* Studio */}
          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-6">
              Studio
            </h4>
            <nav className="space-y-3">
              <Link
                to="/about"
                className="block text-sm text-neutral-600 hover:opacity-60 transition-opacity duration-300"
              >
                About
              </Link>
              <Link
                to="/services"
                className="block text-sm text-neutral-600 hover:opacity-60 transition-opacity duration-300"
              >
                Services
              </Link>
              <Link
                to="/news"
                className="block text-sm text-neutral-600 hover:opacity-60 transition-opacity duration-300"
              >
                News
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-6">
              Contact
            </h4>
            <nav className="space-y-3">
              <a
                href="mailto:info@zmstudiomilano.it"
                className="block text-sm text-neutral-600 hover:opacity-60 transition-opacity duration-300"
              >
                info@zmstudiomilano.it
              </a>
              <p className="text-sm text-neutral-500">Milan, Italy</p>
            </nav>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-6">
              Follow
            </h4>
            <nav className="space-y-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-neutral-600 hover:opacity-60 transition-opacity duration-300"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-neutral-600 hover:opacity-60 transition-opacity duration-300"
              >
                LinkedIn
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-neutral-200/40 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[11px] tracking-[0.15em] uppercase text-neutral-400">
            ZM Studio
          </p>
          <p className="text-[11px] text-neutral-400">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
