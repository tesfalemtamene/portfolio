"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { fadeIn } from "@/lib/animations";

export function Hero() {
    return (
        <section
            id="home"
            className="min-h-[90vh] flex items-center justify-center py-20 relative overflow-hidden"
        >
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/20 dark:bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                >
                    <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-900 dark:text-gray-100 inline-block mb-6">
                        Senior Frontend Engineer
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-400 dark:to-gray-600 pb-2">
                        Building Scalable <br /> Cloud-Native Solutions
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-balance">
                        I help startups and enterprises engineer robust full-stack applications that drive business growth.
                        Focused on performance, security, and exceptional user experience.
                    </p>
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all hover:scale-105 flex items-center gap-2"
                            >
                                <ArrowRight className="h-4 w-4" /> Download Resume
                            </a>
                            <Link
                                href="#projects"
                                className="px-8 py-4 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 text-gray-900 dark:text-white font-medium transition-all hover:bg-gray-50 dark:hover:bg-gray-900"
                            >
                                View Projects
                            </Link>
                        </div>

                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
                        >
                            View GitHub Statistics <ArrowRight className="h-3 w-3" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
