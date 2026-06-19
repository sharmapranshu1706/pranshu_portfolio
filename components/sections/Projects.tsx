"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionWrapper from "@/components/common/SectionWrapper";
import { Button } from "@/components/ui/button";

interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    github: string;
    live?: string;
    image?: string;
    category: string;
    longDescription?: string;
}

const PROJECTS: Project[] = [
    
    {
        id: "AI-FITNESS MICROSERVICES APPLICATION",
        title: "AI Fitness Microservices App",
        description: "A modern full-stack fitness application with AI-powered workout recommendations and real-time progress tracking.",
        longDescription: `A modern full-stack fitness application with AI-powered workout recommendations and real-time progress tracking. The AI Fitness Microservices Application is a cutting-edge platform that leverages artificial intelligence to provide personalized workout plans and real-time progress monitoring. 
                          It features a microservices architecture built with Spring Boot and React, ensuring scalability and maintainability. 
                          Users can interact with the application through a responsive frontend, while the backend handles complex AI algorithms and data processing.`,
        tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Redis"],
        github: "https://github.com/sharmapranshu1706/AI-FITNESS-APP",
        live: "",
        image: "/images/AI-Fitness-APP.png",
        category: "Full Stack",
    }
    ,
    {
        id: "SMART EMAIL ASSISTANT",
        title: "SMART EMAIL ASSISTANT",
        description: "An AI-powered email assistant that drafts, summarizes, and manages your inbox with natural language commands.",
        longDescription: `The SMART EMAIL ASSISTANT is an innovative solution that leverages artificial intelligence to streamline email management. It can draft responses, summarize lengthy emails, and organize your inbox based on natural language commands. Built with React for the frontend and Node.js with OpenAI's GPT-4 API for the backend, it provides a seamless and efficient email experience.`,
        tech: ["Spring Boot","React", "WebFlux", "GEMINI API", "Bootstrap","Maven" ],
        github: "https://github.com/sharmapranshu1706/Email-Assistant-AI",
        live: "",
        image: "/images/SMART-EMAIL-ASSISTANT.png",
        category: "Full Stack",
    }
        
,
    {
        id: "portfolio",
        title: "Personal Portfolio",
        description: "A high-performance personal website with advanced animations, glassmorphism, and a custom design system. Optimized for SEO and mobile responsiveness.",
        longDescription: `A high-performance personal website built with Next.js 15, featuring advanced animations powered by Framer Motion and a custom design system. The portfolio showcases a sleek glassmorphism aesthetic, optimized for SEO and mobile responsiveness. It serves as a dynamic platform to highlight projects, skills, and experiences with an engaging user interface and seamless navigation.`,
        tech: ["Next.js 15", "Framer Motion", "Tailwind v4", "TypeScript", "Vercel"],
        github: "https://github.com/sharmapranshu1706/pranshu_portfolio",
        live: "https://pranshu-portfolio-v1.vercel.app/",
        image: "/images/portfolio_v3.png",
        category: "Frontend",
    }
];

function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col h-full rounded-xl border border-border bg-card overflow-hidden hover:border-amber-500/30 transition-all duration-500 shadow-lg"
        >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0d0d0e]">
                {project.image ? (
                    <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                ) : (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h3 className="text-3xl font-black text-amber-500/10 select-none group-hover:text-amber-500/20 transition-colors font-mono">
                                {project.title.toUpperCase()}
                            </h3>
                        </div>
                    </>
                )}
                <div className="absolute top-4 left-4 z-10">
                    <span className="px-2 py-0.5 rounded border border-amber-500/30 bg-amber-500/5 text-amber-500 font-mono text-[9px] uppercase tracking-wider">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight group-hover:text-amber-500 transition-colors">
                    {project.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 font-mono text-[10px] text-muted-foreground rounded border border-border bg-secondary">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3">
                    <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 rounded border border-border bg-card text-foreground hover:bg-secondary font-mono h-10 text-xs hover:text-amber-500"
                        asChild
                    >
                        <a href={project.github} target="_blank">
                            <FaGithub className="w-3.5 h-3.5 mr-2" />
                            Code
                        </a>
                    </Button>
                    {project.live && (
                        <Button
                            size="sm"
                            className="flex-1 rounded bg-amber-500 text-black hover:bg-amber-600 font-mono h-10 text-xs font-bold"
                            asChild
                        >
                            <a href={project.live} target="_blank">
                                <ExternalLink className="w-3.5 h-3.5 mr-2" />
                                Live
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const [filter, setFilter] = useState("All");
    const categories = ["All", ...Array.from(new Set(PROJECTS.map(p => p.category)))];

    const filtered = filter === "All" 
        ? PROJECTS 
        : PROJECTS.filter(p => p.category === filter);

    return (
        <SectionWrapper id="projects" className="py-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                            Featured <span className="text-gradient">Projects</span>
                        </h2>
                        <p className="text-muted-foreground max-w-md text-lg">
                            A curated selection of my most impactful projects and experiments.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {categories.map((c) => (
                            <button
                                key={c}
                                onClick={() => setFilter(c)}
                                className={`px-4 py-1.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                                    filter === c 
                                        ? "bg-amber-500 text-black border border-amber-500 shadow-lg shadow-amber-500/10" 
                                        : "bg-secondary border border-border text-muted-foreground hover:bg-card hover:text-foreground"
                                }`}
                            >
                                {c}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <div className={`flex flex-wrap gap-8 ${filter === "All" ? "justify-center" : "justify-start"}`}>
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project) => (
                            <div key={project.id} className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.33px)] flex flex-col">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </AnimatePresence>
                </div>

                <motion.div 
                    className="mt-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Button variant="ghost" className="group text-muted-foreground hover:text-foreground text-lg font-bold" asChild>
                        <a href="https://github.com/sharmapranshu1706" target="_blank">
                            View More on GitHub
                            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </Button>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}