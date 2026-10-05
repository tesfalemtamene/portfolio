"use client";

import { motion } from "framer-motion";
import { leadershipData } from "@/lib/data";
import { Users, FileText, ExternalLink } from "lucide-react";
import { GridBackground } from "@/components/ui/backgrounds";
import { fadeIn } from "@/lib/animations";

export function Leadership() {
    return (
        <section id="leadership" className="pt-20 pb-20 relative overflow-hidden">
            <GridBackground />

            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Section Header */}
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white">
                            Leadership & Community Engagement
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Leadership and community initiatives through which I have contributed to student life, peer support, and community service.
                        </p>
                    </div>

                    {/* Vertical Timeline */}
                    <div className="relative border-l-2 border-blue-200 dark:border-blue-900/50 pl-6 md:pl-10 space-y-16 py-4">
                        {leadershipData.map((item, index) => (
                            <div key={index} className="relative group">

                                {/* Timeline Dot */}
                                <span className="absolute -left-[35px] md:-left-[51px] top-1 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-white dark:ring-[#0a0a0a] group-hover:scale-125 transition-transform duration-300 shadow-sm">
                                    <Users className="w-3 h-3 md:w-4 md:h-4 text-white" />
                                </span>

                                <div className="bg-white/60 dark:bg-gray-900/40 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all backdrop-blur-sm group-hover:border-blue-200 dark:group-hover:border-blue-800/50">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                                        <div>
                                            <h3 className="text-2xl md:text-[26px] font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                                                {item.organization}
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-3 text-lg font-medium">
                                                <span className="text-blue-600 dark:text-blue-400 font-bold">{item.role}</span>
                                                <span className="text-gray-300 dark:text-gray-700 hidden sm:inline">•</span>
                                                <span className="text-gray-500 dark:text-gray-400">{item.location}</span>
                                            </div>
                                        </div>
                                        <span className="text-sm font-bold text-gray-500 dark:text-gray-400 bg-gray-100/80 dark:bg-gray-800/80 px-4 py-2 rounded-full w-fit border border-gray-200 dark:border-gray-700 whitespace-nowrap">
                                            {item.period}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                                        {item.description}
                                    </p>

                                    {item.certificate && (
                                        <div className="pt-4 mt-2">
                                            <a
                                                href={item.certificate}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-sm font-bold text-gray-900 dark:text-white transition-all w-fit group/btn"
                                            >
                                                <FileText className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover/btn:text-purple-600 dark:group-hover/btn:text-purple-400 transition-colors" />
                                                View Document
                                                <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Timeline End gradient fade */}
                        <div className="absolute -bottom-10 left-[-2px] w-1 h-32 bg-gradient-to-b from-blue-200 dark:from-blue-900/50 to-transparent"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
