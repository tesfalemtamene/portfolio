"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, User } from "lucide-react";
import { fadeIn } from "@/lib/animations";

export function Hero() {
    const [imgError, setImgError] = useState(false);

    return (
        <section
            id="home"
            className="min-h-[85vh] flex items-center justify-center pt-20 pb-10 relative overflow-hidden"
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
                        className="text-center md:text-left flex flex-col justify-center pt-10 md:pt-0"
                    >
                        <div className="mb-4">
                            <span className="text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-sm md:text-base">
                                Hello, my name is
                            </span>
                        </div>
                        <h1 className="text-2xl md:text-3xl lg:text-[42px] font-bold tracking-tight mb-2 text-gray-900 dark:text-white leading-tight">
                            Tesfalem Tamene Weldu.
                        </h1>
                        <h2 className="text-1xl md:text-3xl lg:text-[32px] font-bold tracking-tight mb-6 text-gray-400 dark:text-gray-500 leading-tight">
                            I am a Software Engineer.
                        </h2>
                        <p className="text-base md:text-[16px] text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0 mb-10 text-balance leading-relaxed">
                            I develop secure, scalable, and practical software solutions, with interests spanning AI/ML, NLP, computer vision, and intelligent information systems.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                            <a
                                href="#projects"
                                className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-105"
                            >
                                View My Projects
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3.5 rounded-full bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 text-gray-900 dark:text-white font-bold text-lg transition-all flex items-center gap-2"
                            >
                                <Download className="h-5 w-5" /> Resume
                            </a>
                            <a
                                href="https://github.com/tesfalemtamene"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 text-gray-900 dark:text-white font-bold text-lg transition-all"
                            >
                                GitHub
                            </a>
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
