// Footer component - Norm Architects inspired minimal design

import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-neutral-200/60 py-16 md:py-24">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          {/* Work */}
          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-6">
              {t.footer.work}
            </h4>
            <nav className="space-y-3">
              <Link
                to="/exhibition"
                className="block text-sm text-neutral-600 hover:opacity-60 transition-opacity duration-300"
              >
                {t.nav.exhibition}
              </Link>
              <Link
                to="/interior"
                className="block text-sm text-neutral-600 hover:opacity-60 transition-opacity duration-300"
              >
                {t.nav.interior}
              </Link>
            </nav>
          </div>

          {/* Studio */}
          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-6">
              {t.footer.studio}
            </h4>
            <nav className="space-y-3">
              <Link
                to="/about"
                className="block text-sm text-neutral-600 hover:opacity-60 transition-opacity duration-300"
              >
                {t.nav.about}
              </Link>
              <Link
                to="/services"
                className="block text-sm text-neutral-600 hover:opacity-60 transition-opacity duration-300"
              >
                {t.nav.services}
              </Link>
              <Link
                to="/news"
                className="block text-sm text-neutral-600 hover:opacity-60 transition-opacity duration-300"
              >
                {t.nav.news}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-6">
              {t.footer.contact}
            </h4>
            <nav className="space-y-3">
              <a
                href="mailto:info@zmstudiomilano.it"
                className="block text-sm text-neutral-600 hover:opacity-60 transition-opacity duration-300"
              >
                info@zmstudiomilano.it
              </a>
              <p className="text-sm text-neutral-500">{t.contact.addressText}</p>
            </nav>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 mb-6">
              {t.footer.follow}
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
            © {new Date().getFullYear()} {t.footer.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
