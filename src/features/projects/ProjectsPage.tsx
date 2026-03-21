// Projects Page with search, filter, and view toggle

import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Filter, LayoutGrid, List, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Block from "@/components/shared/Block";
import { fadeUp } from "@/config/animation";
import { PROJECTS } from "@/config/data";
import { TYPOLOGIES, STATUSES } from "@/config/constants";
import type { Typology, Status } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedText, getLocalizedTextList } from "@/lib/i18n";
import { getStatusLabel, getTypologyLabel } from "@/lib/projectMeta";

export default function ProjectsPage() {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState("");
  const [typo, setTypo] = useState<Typology>("All");
  const [status, setStatus] = useState<Status>("Any");
  const [view, setView] = useState<"grid" | "list">("grid");
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesQuery = [
        getLocalizedText(p.title, language),
        getLocalizedText(p.location, language),
        getTypologyLabel(p.typology, t),
        getStatusLabel(p.status, t),
        getLocalizedTextList(p.tags, language).join(" ")
      ]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesTypo = typo === 'All' || p.typology === typo;
      const matchesStatus = status === 'Any' || p.status === status;
      return matchesQuery && matchesTypo && matchesStatus;
    });
  }, [language, query, typo, status, t]);
  const viewModeLabel = t.common.viewMode;

  const Toolbar = () => (
    <div className="border-b bg-white/80">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-3 px-6 md:px-12 py-3 md:py-4">
        <div className="relative grow md:max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />
          <Input
            placeholder={t.filters.searchProjectsExtended}
            className="pl-9"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Filter className="size-4" /> {t.filters.typology} <ChevronDown className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{t.filters.typology}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {TYPOLOGIES.map((typology) => (
              <DropdownMenuItem
                key={typology}
                onClick={() => setTypo(typology)}
                className={typo === typology ? "font-semibold" : ""}
              >
                {getTypologyLabel(typology, t)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              {t.filters.status} <ChevronDown className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{t.filters.projectStatus}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {STATUSES.map((s) => (
              <DropdownMenuItem
                key={s}
                onClick={() => setStatus(s)}
                className={status === s ? "font-semibold" : ""}
              >
                {getStatusLabel(s, t)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
          aria-label={`${viewModeLabel}: ${view === 'grid' ? t.common.list : t.common.grid}`}
        >
          {view === 'grid' ? <List className="size-4" /> : <LayoutGrid className="size-4" />}
        </Button>
      </div>
    </div>
  );

  return (
    <main className="bg-white">
      <Toolbar />
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-3 text-sm text-neutral-600">
        {filtered.length} {filtered.length !== 1 ? t.common.projects : t.common.project} • {viewModeLabel}: {view === "grid" ? t.common.grid : t.common.list}
      </div>
      {view === 'grid' ? (
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 px-6 md:px-12 pb-20 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              {...fadeUp}
              className="overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <button onClick={() => navigate(`/projects/${p.id}`)} className="block w-full text-left">
                <Block label={p.id.toUpperCase()} image={p.coverImage} className="" />
              </button>
              <div className="p-4">
                <h3 className="text-base font-semibold tracking-tight">{getLocalizedText(p.title, language)}</h3>
                <p className="text-sm text-neutral-600">
                  {getLocalizedText(p.location, language)} • {p.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 pb-20">
          <div className="divide-y">
            {filtered.map((p) => (
              <motion.div key={p.id} {...fadeUp} className="flex flex-col gap-4 py-5 md:flex-row">
                <button onClick={() => navigate(`/projects/${p.id}`)} className="w-full shrink-0 md:w-80">
                  <Block label={p.id.toUpperCase()} image={p.coverImage} className="" />
                </button>
                <div className="min-w-0 grow">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <h3 className="text-xl font-semibold tracking-tight">{getLocalizedText(p.title, language)}</h3>
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <span>{getLocalizedText(p.location, language)}</span>
                      <span>•</span>
                      <span>{p.year}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-neutral-600">{getLocalizedText(p.summary, language)}</p>
                  <div className="mt-4">
                    <Button variant="ghost" onClick={() => navigate(`/projects/${p.id}`)} className="gap-2 px-0">
                      {t.common.openDetails}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
