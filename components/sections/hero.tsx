"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, User } from "lucide-react";
import { fadeIn } from "@/lib/animations";

export function Hero() {
    const [imgError, setImgError] = useState(false);

    return (
        <section
            id="home"
            className="min-h-[90vh] flex items-center justify-center py-20 relative overflow-hidden"
        >
            {/* Grid Background */}
            <div className="absolute inset-0 -z-30 h-full w-full bg-[#f8fafc] dark:bg-[#0a0a0a]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            </div>

            <div className="container mx-auto px-6 z-10 h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 h-full min-h-[90vh]">

                    {/* Text Container (Left side) */}
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        className="text-center flex flex-col justify-center pt-24 md:pt-0"
                    >
                        <div className="mb-4">
                            <span className="px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-sm font-medium text-blue-700 dark:text-blue-300 inline-block border border-blue-200 dark:border-blue-800">
                                Software Developer | AI Enthusiast
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white leading-tight">
                            Building Intelligent & <br /> Scalable Solutions
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto mb-10 text-balance leading-relaxed">
                            I engineer robust full-stack applications and secure network infrastructures.
                            Passionate about integrating AI/ML to drive innovation and business growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105 flex items-center gap-2"
                            >
                                <ArrowRight className="h-5 w-5" /> Download Resume
                            </a>
                            <Link
                                href="#projects"
                                className="px-8 py-3.5 rounded-full bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 text-gray-900 dark:text-white font-bold text-lg transition-all"
                            >
                                View Projects
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image Container (Right side) */}
                    <div className="relative w-full h-[600px] md:h-[85vh] min-h-[70vh] flex items-center justify-center overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full h-full max-w-[700px] lg:max-w-[900px]"
                            style={{
                                WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
                                maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)'
                            }}
                        >
                            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>
                            {!imgError ? (
                                <Image
                                    src="/profile.jpg"
                                    alt="Profile Picture"
                                    fill
                                    className="object-cover object-center md:object-contain md:object-bottom drop-shadow-2xl z-10"
                                    onError={() => setImgError(true)}
                                    priority
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <User className="w-16 h-16 text-gray-400 z-10" />
                                </div>
                            )}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
