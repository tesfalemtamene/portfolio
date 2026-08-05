"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { fadeIn } from "@/lib/animations";
import { GridBackground } from "@/components/ui/backgrounds";

export function Projects() {
    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-[1px] -z-10"></div>
            <GridBackground />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white">
                        Featured Projects
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-800 overflow-hidden group-hover:opacity-100">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Placeholder for project image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100 dark:bg-gray-800 group-hover:scale-110 transition-transform duration-700">
                                        <div className="text-center">
                                            <div className="w-12 h-12 mx-auto mb-2 text-gray-300 dark:text-gray-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-end gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/90 dark:bg-black/90 rounded-full hover:bg-blue-600 hover:text-white transition-colors shadow-lg" title="View Code">
                                            <Github className="w-4 h-4" />
                                        </a>
                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/90 dark:bg-black/90 rounded-full hover:bg-blue-600 hover:text-white transition-colors shadow-lg" title="Live Demo">
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-sm flex-grow">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-semibold text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <Github className="w-5 h-5" />
                            View More on GitHub
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
