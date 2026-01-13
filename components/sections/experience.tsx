"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";
import { fadeIn } from "@/lib/animations";

export function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>

                    <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 md:ml-6 space-y-12">
                        {experience.map((job, index) => (
                            <div key={index} className="relative pl-8 md:pl-12">
                                {/* Timeline Dot */}
                                <span className="absolute -left-3 top-1 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 border-2 border-white dark:border-black ring-2 ring-blue-500/20">
                                    <Briefcase className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                                </span>

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 className="text-xl font-bold">{job.role}</h3>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                                        {job.period}
                                    </span>
                                </div>
                                <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">{job.company}</p>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {job.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800">
                        <h3 className="text-2xl font-bold mb-8 text-center">Social Proof</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Placeholders for Social Proof / Logos */}
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-16 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
                                    <span className="text-sm font-semibold text-gray-400">Client {i}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
