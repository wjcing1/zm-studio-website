// Header component with React Router navigation

import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1] || '';

  const navItems = [
    { path: "/", label: "Home", key: "" },
    { path: "/about", label: "About", key: "about" },
    { path: "/projects", label: "Projects", key: "projects" },
    { path: "/services", label: "Services", key: "services" },
    { path: "/news", label: "News", key: "news" },
    { path: "/contact", label: "Contact", key: "contact" }
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-6 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 grid gap-2">
                {navItems.map(({ path, label }) => (
                  <Button key={path} variant="ghost" className="justify-start text-lg" asChild>
                    <Link to={path}>{label}</Link>
                  </Button>
                ))}
              </nav>
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
        <div className="hidden md:block">
          <Button variant="outline" asChild>
            <Link to="/contact">Start a project</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
