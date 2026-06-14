"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [counterUrl, setCounterUrl] = useState<string | null>(null);

    useEffect(() => {
        // Safe to access window only on client
        const origin = window.location.origin;
        setCounterUrl(
            `https://counter.websiteout.com/compte.php?S=${encodeURIComponent(origin)}&C=20&D=0&N=0&M=1`
        );
    }, []);

    return (
        <footer className="w-full border-t border-border bg-card dark:bg-[#0d0d0e] py-20 px-6 font-mono transition-colors duration-300">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
                    <div className="col-span-2 space-y-6">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded border border-amber-500/20 bg-amber-500/5 flex items-center justify-center">
                                <span className="text-amber-500 font-bold text-sm">P</span>
                            </div>
                            <span className="text-xl font-bold tracking-tighter text-foreground">
                                Pranshu<span className="text-amber-500">.</span>sys
                            </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 max-w-sm text-xs leading-relaxed">
                            Full Stack Systems Engineer specializing in robust backend architectures, decoupled microservices, and fluid interface design.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Sitemap</h4>
                        <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                            <li><a href="#about" className="hover:text-amber-500 transition-colors">/about</a></li>
                            <li><a href="#skills" className="hover:text-amber-500 transition-colors">/skills</a></li>
                            <li><a href="#projects" className="hover:text-amber-500 transition-colors">/projects</a></li>
                            <li><a href="#console" className="hover:text-amber-500 transition-colors">/console</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Resources</h4>
                        <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                            <li>
                                <a
                                    href="https://github.com/sharmapranshu1706"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-amber-500 transition-colors"
                                >
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Connect</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            Wanna chat? Contact anywhere below.
                        </p>
                        <div className="flex items-center gap-2 pt-1 flex-wrap">
                            {[
                                { href: "https://github.com/sharmapranshu1706", icon: <FaGithub className="w-[18px] h-[18px]" />, label: "GitHub" },
                                { href: "https://x.com/Sharmapranshu17", icon: <FaTwitter className="w-[18px] h-[18px]" />, label: "X (Twitter)" },
                                { href: "https://www.instagram.com/pranshu_sharma17", icon: <FaInstagram className="w-[18px] h-[18px]" />, label: "Instagram" },
                                { href: "mailto:sharma.pranshu1706@gmail.com", icon: <FaEnvelope className="w-[18px] h-[18px]" />, label: "Email" },
                                { href: "https://www.linkedin.com/in/pranshu-3421251b8/", icon: <FaLinkedin className="w-[18px] h-[18px]" />, label: "LinkedIn" },
                            ].map(({ href, icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith("mailto") ? undefined : "_blank"}
                                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                                    aria-label={label}
                                    className="w-9 h-9 rounded-full bg-slate-100 dark:bg-[#18181b]/50 text-slate-600 dark:text-slate-400 hover:bg-amber-500/10 hover:text-amber-500 dark:hover:bg-amber-500/10 dark:hover:text-amber-500 border border-slate-200 dark:border-slate-800 transition-colors flex items-center justify-center"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                        <span>© {currentYear} Pranshu Sharma · Node: operational</span>
                        <span className="h-3 w-px bg-slate-800 hidden sm:inline-block" />

                        {/* Counter — only renders on client after hydration */}
                        {counterUrl && (
                            <div className="flex items-center opacity-70 hover:opacity-100 transition-opacity">
                                <a
                                    href="https://counter.websiteout.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center"
                                    aria-label="Web Hit Counter"
                                >
                                    <img
                                        src={counterUrl}
                                        alt="Web Hit Counter"
                                        className="h-3.5 object-contain filter contrast-125 brightness-110"
                                    />
                                </a>
                            </div>
                        )}
                    </div>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
                        Stay Curious // Built with passion
                    </p>
                </div>
            </div>
        </footer>
    );
}
