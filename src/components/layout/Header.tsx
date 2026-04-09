// Header component with React Router navigation

import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const currentPath = location.pathname.split('/')[1] || '';

  const navItems = [
    { path: "/", label: t.nav.home, key: "" },
    { path: "/about", label: t.nav.about, key: "about" },
    { path: "/exhibition", label: t.nav.exhibition, key: "exhibition" },
    { path: "/ai", label: t.nav.ai, key: "ai" },
    { path: "/services", label: t.nav.services, key: "services" },
    { path: "/news", label: t.nav.news, key: "news" },
    { path: "/contact", label: t.nav.contact, key: "contact" }
  ];

  const languageOptions = [
    { code: "en", label: "EN" },
    { code: "zh", label: "中" },
    { code: "it", label: "IT" }
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-6 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label={t.nav.openMenu}>
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle>{t.nav.navigation}</SheetTitle>
                <SheetDescription className="sr-only">
                  {t.nav.menuDescription}
                </SheetDescription>
              </SheetHeader>
              <nav className="mt-6 grid gap-2">
                {navItems.map(({ path, label }) => (
                  <Button key={path} variant="ghost" className="justify-start text-lg" asChild>
                    <Link to={path}>{label}</Link>
                  </Button>
                ))}
              </nav>
              <div className="mt-8 border-t pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  {t.nav.language}
                </p>
                <div className="flex gap-2">
                  {languageOptions.map(({ code, label }) => (
                    <Button
                      key={code}
                      type="button"
                      variant={language === code ? "default" : "outline"}
                      onClick={() => setLanguage(code)}
                    >
                      {label}
                    </Button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link to="/" className="text-xl md:text-2xl font-black tracking-tight">
            ZM Studio
          </Link>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map(({ path, label, key }) => (
            <Link
              key={path}
              to={path}
              className={`text-sm font-medium hover:underline underline-offset-4 ${currentPath === key ? "underline" : ""}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-1 rounded-full border border-neutral-200 px-1 py-1">
            {languageOptions.map(({ code, label }) => (
              <button
                key={code}
                type="button"
                onClick={() => setLanguage(code)}
                className={`rounded-full px-3 py-1 text-xs font-semibold tracking-[0.2em] transition-colors ${
                  language === code ? "bg-neutral-900 text-white" : "text-neutral-500 hover:text-neutral-900"
                }`}
                aria-label={`${t.nav.language}: ${label}`}
              >
                {label}
              </button>
            ))}
          </div>
          <Button variant="outline" asChild>
            <Link to="/contact">{t.nav.startProject}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
