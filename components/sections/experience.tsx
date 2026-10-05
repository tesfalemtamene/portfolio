"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";
import { fadeIn } from "@/lib/animations";
import { BeamBackground } from "@/components/ui/backgrounds";
import Image from "next/image";

export function Experience() {
    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            <BeamBackground />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white">
                        Experience
                    </h2>

                    <div className="relative border-l-2 border-blue-200 dark:border-blue-900 ml-4 md:ml-6 space-y-12">
                        {experience.map((job, index) => (
                            <div key={index} className="relative pl-8 md:pl-12 group">
                                {/* Timeline Dot */}
                                <span className="absolute -left-[9px] top-1 flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-white dark:ring-black group-hover:scale-125 transition-transform duration-300">
                                    <Briefcase className="w-3 h-3 text-white" />
                                </span>

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 bg-white/50 dark:bg-gray-900/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all backdrop-blur-sm">
                                    <div>
                                        <h3 className="text-[22px] md:text-[26px] font-bold text-gray-900 dark:text-white mb-1">{job.role}</h3>
                                        <p className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400">{job.company}</p>
                                    </div>
                                    <span className="text-sm font-bold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-4 py-1.5 rounded-full w-fit mt-2 sm:mt-0 border border-gray-200 dark:border-gray-700">
                                        {job.period}
                                    </span>
                                </div>
                                <p className="text-justify text-gray-600 dark:text-gray-300 leading-relaxed pl-2">
                                    {job.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800">
                        <h3 className="text-2xl font-bold mb-8 text-center text-gray-400 dark:text-gray-600 uppercase tracking-widest text-sm">Trusted By</h3>
                        <div className="flex flex-wrap justify-center gap-6 md:gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">


                            <a
                                href="https://niyatconsultancy.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group h-16 w-48 px-4 flex items-center justify-center bg-white rounded-xl border border-gray-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all overflow-hidden relative"
                            >
                                <Image src="/niyat-logo.jpg" alt="Niyat Consultancy" fill className="object-contain p-3 mb-1 opacity-80 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <a
                                href="https://www.mu.edu.et/index.php/undergraduate-programs/mekelle-institute-of-technology-undergraduate-programs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group h-16 w-48 px-4 flex items-center justify-center bg-white rounded-xl border border-gray-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all overflow-hidden relative"
                            >
                                <Image src="/mit-logo.png" alt="Mekelle Institute of Technology" fill className="object-contain p-3 mb-1 opacity-80 group-hover:opacity-100 transition-opacity" />
                            </a>

                            <a
                                href="https://www.mu.edu.et/index.php"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group h-16 w-48 px-4 flex items-center justify-center bg-white rounded-xl border border-gray-200 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all overflow-hidden relative"
                            >
                                <Image src="/mu-logo.png" alt="Mekelle University" fill className="object-contain p-3 mb-1 opacity-80 group-hover:opacity-100 transition-opacity" />
                            </a>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
