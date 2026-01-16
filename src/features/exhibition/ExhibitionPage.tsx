// Exhibition Design Projects Page

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
import { EXHIBITION_PROJECTS } from "@/config/data";
import { STATUSES } from "@/config/constants";
import type { Status } from "@/types";

export default function ExhibitionPage() {
    const [query, setQuery] = useState("");
    const [status, setStatus] = useState<Status>("Any");
    const [view, setView] = useState<"grid" | "list">("grid");
    const navigate = useNavigate();

    const filtered = useMemo(() => {
        return EXHIBITION_PROJECTS.filter((p) => {
            const matchesQuery = [p.title, p.location, p.typology, p.status, p.tags.join(" ")]
                .join(" ")
                .toLowerCase()
                .includes(query.toLowerCase());
            const matchesStatus = status === 'Any' || p.status === status;
            return matchesQuery && matchesStatus;
        });
    }, [query, status]);

    const Toolbar = () => (
        <div className="border-b bg-white/80">
            <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-3 px-6 md:px-12 py-3 md:py-4">
                <div className="relative grow md:max-w-md">
                    <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />
                    <Input
                        placeholder="Search projects…"
                        className="pl-9"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="gap-2">
                            <Filter className="size-4" /> Status <ChevronDown className="size-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Project status</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {STATUSES.map((s) => (
                            <DropdownMenuItem
                                key={s}
                                onClick={() => setStatus(s)}
                                className={status === s ? "font-semibold" : ""}
                            >
                                {s}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
                    aria-label="Toggle view"
                >
                    {view === 'grid' ? <List className="size-4" /> : <LayoutGrid className="size-4" />}
                </Button>
            </div>
        </div>
    );

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="bg-neutral-900 text-white py-16 md:py-24">
                <div className="mx-auto max-w-[1600px] px-6 md:px-12">
                    <motion.p {...fadeUp} className="text-sm md:text-base text-neutral-400 mb-2 tracking-widest uppercase">
                        ZM Studio × Ecat Group
                    </motion.p>
                    <motion.h1 {...fadeUp} className="text-4xl md:text-6xl font-bold tracking-tight">
                        Exhibition Design
                    </motion.h1>
                    <motion.p {...fadeUp} className="mt-4 text-lg md:text-xl text-neutral-300 max-w-2xl">
                        From concept to construction drawings to on-site coordination. We create immersive exhibition experiences.
                    </motion.p>
                </div>
            </section>

            <Toolbar />
            <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-3 text-sm text-neutral-600">
                {filtered.length} project{filtered.length !== 1 ? 's' : ''} • View: {view}
            </div>
            {view === 'grid' ? (
                <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 px-6 md:px-12 pb-20 md:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((p) => (
                        <motion.div
                            key={p.id}
                            {...fadeUp}
                            className="overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-md"
                        >
                            <button onClick={() => navigate(`/exhibition/${p.id}`)} className="block w-full text-left">
                                <Block label={p.id.toUpperCase()} image={p.coverImage} className="" />
                            </button>
                            <div className="p-4">
                                <h3 className="text-base font-semibold tracking-tight">{p.title}</h3>
                                <p className="text-sm text-neutral-600">
                                    {p.location} • {p.year}
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
                                <button onClick={() => navigate(`/exhibition/${p.id}`)} className="w-full shrink-0 md:w-80">
                                    <Block label={p.id.toUpperCase()} image={p.coverImage} className="" />
                                </button>
                                <div className="min-w-0 grow">
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                        <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                                        <div className="flex items-center gap-2 text-sm text-neutral-500">
                                            <span>{p.location}</span>
                                            <span>•</span>
                                            <span>{p.year}</span>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-neutral-600">{p.summary}</p>
                                    <div className="mt-4">
                                        <Button variant="ghost" onClick={() => navigate(`/exhibition/${p.id}`)} className="gap-2 px-0">
                                            Open details
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
