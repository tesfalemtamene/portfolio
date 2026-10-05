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
                            <h3 className="text-[32px] md:text-[40px] leading-tight font-bold text-gray-900 dark:text-white">
                                Engineering Seamless & <span className="text-blue-600 dark:text-blue-400">Intelligent Systems</span>
                            </h3>
                            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>
                                    I am a Software Engineer with a rigorous foundation in <span className="font-semibold text-blue-600 dark:text-blue-400">Computer Science and Engineering</span>.
                                    My expertise bridges full-stack engineering and <span className="font-semibold text-blue-600 dark:text-blue-400">Network Security</span> (CCNA Certified), enabling me to build robust, secure, and secure systems.
                                </p>
                                <p>
                                    I specialize in <span className="font-semibold text-blue-600 dark:text-blue-400">AI & Machine Learning</span>, actively constructing intelligent solutions—from RAG-based systems to customized predictive algorithms that have massive real-world impact.
                                </p>
                            </div>

                            {/* At a Glance */}
                            <div className="grid grid-cols-2 gap-4 my-8">
                                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
                                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">3.94<span className="text-lg text-gray-400">/4.00</span></div>
                                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Cum. GPA</div>
                                </div>
                                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
                                    <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">BSc Computer Science & Engineering</div>
                                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Degree</div>
                                </div>
                                <div className="col-span-2 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
                                    <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">AI & Intelligent Systems</div>
                                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Primary Focus</div>
                                </div>
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
