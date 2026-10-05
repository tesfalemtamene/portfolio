"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { fadeIn } from "@/lib/animations";
import { DotBackground } from "@/components/ui/backgrounds";
import { Terminal } from "@/components/ui/terminal";

export function About() {
    return (
        <section id="about" className="pt-10 pb-20 relative overflow-hidden">
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

                    <div className="mb-16 max-w-5xl mx-auto">
                        <h3 className="text-[32px] md:text-[40px] leading-tight font-bold text-gray-900 dark:text-white mb-8 text-center">
                            Building Intelligent & <span className="text-blue-600 dark:text-blue-400">Secure Systems</span>
                        </h3>
                        <div className="space-y-4 text-justify text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            <p>
                                I am a Software Engineer and Computer Science and Engineering graduate in MIT, combining software development with a growing focus on AI, machine learning, and secure intelligent systems. In my professional work, I engineer enterprise applications, RESTful APIs, ERP solutions, and data-driven systems.
                            </p>
                            <p>
                                My academic and personal projects have allowed me to explore applied AI spanning computer vision, natural language processing, and retrieval-augmented generation. This includes an AI-driven adaptive face recognition system, as well as specialized NLP preprocessing pipelines for Tigrigna, an under-resourced language. Furthermore, my CCNA certification and hands-on experience with network infrastructure provide a robust foundation for building highly reliable and secure software architectures.
                            </p>
                            <p>
                                I am deeply motivated by applying machine learning to practical challenges, and I am actively seeking opportunities to advance my research in secure, intelligent systems.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
                        {/* At a Glance */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm transition-all hover:-translate-y-1">
                                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">3.94<span className="text-lg text-gray-400">/4.00</span></div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">CGPA</div>
                            </div>
                            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col justify-center transition-all hover:-translate-y-1">
                                <div className="text-lg font-bold text-gray-900 dark:text-white leading-tight mb-1">BSc in Computer Science & Engineering</div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Degree</div>
                            </div>
                            <div className="col-span-2 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm transition-all hover:-translate-y-1">
                                <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">AI & Intelligent Systems</div>
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Primary Focus</div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-2xl animate-pulse"></div>
                            <Terminal />
                        </div>
                    </div>

                    <div className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-16">
                        <h3 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white tracking-tight">Technical Expertise</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {skills.map((skillGroup, index) => (
                                <div key={index} className="p-6 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-800/50 transition-all duration-300 group">
                                    <h4 className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-5 uppercase tracking-wider">
                                        {skillGroup.name}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1.5 rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-[13px] font-semibold text-gray-700 dark:text-gray-300 group-hover:border-blue-200 dark:group-hover:border-blue-900/40 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
