"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";
import SectionWrapper from "@/components/common/SectionWrapper";
import { internships } from "@/data/internships";

// Highlights per internship id — add real bullet points here
const highlights: Record<string, string[]> = {
    "spark-ventures-java-intern": [
        "MVC backend for 3 production modules (10 000+ LOC)",
        "30% faster page load via lazy loading & query tuning",
        "Resolved 20+ prod bugs; Agile 2-week release cycle",
    ],
    "ibm-frontend-intern": [
        "Reusable React components, Redux global state",
        "Real-time dashboards via REST API integration",
        "Git workflow: branching, PRs, conflict resolution",
    ],
};

// Compact company logo placeholder — amber initials badge
function CompanyBadge({ company }: { company: string }) {
    const initials = company
        .split(/\s+/)
        .slice(0, 2)
        .map((w) => w[0])
        .join("")
        .toUpperCase();
    return (
        <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0">
            <span className="text-amber-400 font-bold font-mono text-sm">{initials}</span>
        </div>
    );
}

export default function Internships() {
    return (
        <SectionWrapper
            id="internships"
            className="py-20 border-t border-border bg-card/30 dark:bg-card/10"
        >
            <div className="max-w-4xl mx-auto px-6">
                {/* ── Header ── */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-widest bg-amber-500/5 px-2.5 py-1 border border-amber-500/20 rounded">
                        Professional Experience
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-3 tracking-tighter">
                        Internships &{" "}
                        <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                            Training
                        </span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
                        Hands-on experience with Java, Spring Boot, React.js, and modern Git workflows
                        across on-site and certified programs.
                    </p>
                </motion.div>

                {/* ── Timeline Cards ── */}
                <div className="relative flex flex-col gap-5">
                    {/* Vertical line */}
                    <div className="absolute left-[21px] top-6 bottom-6 w-px bg-border hidden md:block" />

                    {internships.map((internship, i) => {
                        const bullets = highlights[internship.id] ?? [];
                        const hasUrl = !!internship.url;

                        return (
                            <motion.div
                                key={internship.id}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                                className="md:pl-12 relative group"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-5 w-[11px] h-[11px] rounded-full bg-amber-500 border-2 border-background hidden md:block ring-2 ring-amber-500/20" />

                                <div className="rounded-2xl border border-border bg-card hover:border-amber-500/30 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden">
                                    {/* Top accent bar */}
                                    <div className="h-0.5 w-full bg-gradient-to-r from-amber-500/60 via-amber-400/30 to-transparent" />

                                    <div className="p-5 md:p-6">
                                        {/* ── Row 1: Badge + Title + Date ── */}
                                        <div className="flex items-start gap-3 mb-4">
                                            <CompanyBadge company={internship.company} />

                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-wrap items-start justify-between gap-2">
                                                    <div>
                                                        <h3 className="text-base font-bold text-foreground group-hover:text-amber-500 transition-colors leading-tight">
                                                            {internship.role}
                                                        </h3>
                                                        <p className="text-sm text-amber-500/80 font-semibold mt-0.5">
                                                            {internship.company}
                                                        </p>
                                                    </div>

                                                    {/* Date badge */}
                                                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground bg-secondary px-2.5 py-1 rounded-lg border border-border shrink-0">
                                                        <Calendar className="w-3 h-3 text-amber-500/60" />
                                                        {internship.from} — {internship.to ?? "Present"}
                                                    </div>
                                                </div>

                                                {/* Subtitle */}
                                                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mt-1">
                                                    {internship.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        {/* ── Row 2: Highlights ── */}
                                        {bullets.length > 0 && (
                                            <ul className="flex flex-col gap-1.5 mb-4 pl-1">
                                                {bullets.map((b) => (
                                                    <li
                                                        key={b}
                                                        className="flex items-start gap-2 text-sm text-muted-foreground"
                                                    >
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500/70 mt-0.5 shrink-0" />
                                                        {b}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* ── Row 3: Tags + Link ── */}
                                        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border">
                                            <div className="flex flex-wrap gap-1.5">
                                                {internship.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2 py-0.5 font-mono text-[10px] text-muted-foreground rounded-full border border-border bg-secondary"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {hasUrl && (
                                                <a
                                                    href={internship.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-500 hover:text-amber-400 transition-colors group/link"
                                                >
                                                    <Briefcase className="w-3 h-3" />
                                                    View Certificate
                                                    <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
}

