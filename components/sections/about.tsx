"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { fadeIn } from "@/lib/animations";

export function About() {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-black/50">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About & Skills</h2>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold mb-4">Background</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                As a Software Developer, I am passionate about bridging the gap between design and engineering. I thrive in collaborative
                                environments and enjoy tackling complex problems with clean, scalable solutions.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                When I'm not coding, I'm exploring new technologies, contributing to open source,
                                or sharing my knowledge through technical writing and mentorship.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
                            <div className="space-y-6">
                                {skills.map((skillGroup, index) => (
                                    <div key={index}>
                                        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-500 mb-3 uppercase tracking-wider">
                                            {skillGroup.name}
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                            {skillGroup.items.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-sm font-medium hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-default"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
