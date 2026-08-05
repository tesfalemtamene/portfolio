"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { fadeIn } from "@/lib/animations";
import { DotBackground } from "@/components/ui/backgrounds";
import { Terminal } from "@/components/ui/terminal";

export function About() {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <DotBackground />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white">
                        About & Skills
                    </h2>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                                Bridging Design & <span className="text-blue-600 dark:text-blue-400">Engineering</span>
                            </h3>
                            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>
                                    I am a Software Developer with a strong foundation in <span className="font-semibold text-blue-600 dark:text-blue-400">Computer Science and Engineering</span>.
                                    My expertise spans full-stack development and <span className="font-semibold text-blue-600 dark:text-blue-400">Network Engineering</span> (CCNA Certified), allowing me to build secure and scalable systems.
                                </p>
                                <p>
                                    Beyond traditional coding, I am an <span className="font-semibold text-blue-600 dark:text-blue-400">AI & Machine Learning</span> enthusiast, constantly exploring how to leverage intelligent algorithms to solve real-world problems.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {skills.map((skillGroup, index) => (
                                    <div key={index}>
                                        <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 mb-3 uppercase tracking-wider">
                                            {skillGroup.name}
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                            {skillGroup.items.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-sm font-medium hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-default backdrop-blur-sm shadow-sm"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-2xl animate-pulse"></div>
                            <Terminal />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
