"use client";

import { motion } from "framer-motion";
import { awardsData } from "@/lib/data";
import { Award, FileText, ExternalLink } from "lucide-react";
import { GridBackground } from "@/components/ui/backgrounds";
import { fadeIn } from "@/lib/animations";

export function Awards() {
    return (
        <section id="awards" className="pt-20 pb-20 relative overflow-hidden">
            <GridBackground />

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Section Header */}
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white">
                            Awards & Recognition
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Recognition and certifications that reflect my academic performance, professional development, and commitment to service.
                        </p>
                    </div>

                    {/* Awards List */}
                    <div className="space-y-8">
                        {awardsData.map((award, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-900/80 p-8 md:p-10 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group flex flex-col md:flex-row gap-8 items-start"
                            >
                                <div className="w-16 h-16 shrink-0 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center border border-blue-100 dark:border-blue-800/50 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                                    <Award className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                                </div>

                                <div className="flex-grow space-y-4 w-full">
                                    <div>
                                        <h3 className="text-2xl md:text-[28px] font-bold text-gray-900 dark:text-white leading-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {award.title}
                                        </h3>
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 dark:text-gray-400 font-medium">
                                            <span className="text-blue-600 dark:text-blue-400">{award.organization}</span>
                                            <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
                                            <span>{award.date}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
                                        {award.description}
                                    </p>

                                    {award.certificate && (
                                        <div className="pt-4">
                                            <a
                                                href={award.certificate}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 text-sm font-bold text-gray-900 dark:text-white transition-all w-fit group/btn"
                                            >
                                                <FileText className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover/btn:text-blue-600 dark:group-hover/btn:text-blue-400 transition-colors" />
                                                View Certificate
                                                <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
