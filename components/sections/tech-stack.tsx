"use client";

import { motion } from "framer-motion";
import { Server, Database, Smartphone, Cloud, Code, GitBranch } from "lucide-react";
import { fadeIn } from "@/lib/animations";

export function TechStack() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const layers = [
        {
            title: "Frontend & Client",
            icon: <Smartphone className="w-8 h-8 text-blue-500" />,
            description: "Responsive interfaces built with modern frameworks.",
            tech: ["React.js", "Next.js 14", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"]
        },
        {
            title: "Backend & API",
            icon: <Server className="w-8 h-8 text-green-500" />,
            description: "Scalable server-side logic and RESTful/GraphQL APIs.",
            tech: ["Node.js", "Django", "Python", "GraphQL", "Odoo Development"]
        },
        {
            title: "Data Layer",
            icon: <Database className="w-8 h-8 text-purple-500" />,
            description: "Optimized database bridging and caching strategies.",
            tech: ["PostgreSQL", "MongoDB", "MySQL", "Prisma",]
        },
        {
            title: "DevOps & Infrastructure",
            icon: <Cloud className="w-8 h-8 text-orange-500" />,
            description: "CI/CD pipelines, containerization, and cloud deployment.",
            tech: ["Docker", "AWS", "Vercel", "Git/GitHub Actions", "Nginx", "Linux"]
        }
    ];

    return (
        <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-black/50">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">System Architecture</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A high-level overview of my technical expertise, demonstrating full-stack capabilities from client-side interactions to server infrastructure.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
                >
                    {/* Visual connector line for desktop */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 -z-10 opacity-30" />

                    {layers.map((layer, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow relative"
                        >
                            <div className="bg-gray-100 dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto relative z-10 border-4 border-white dark:border-gray-900">
                                {layer.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-center">{layer.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6 min-h-[40px]">
                                {layer.description}
                            </p>

                            <div className="flex flex-wrap justify-center gap-2">
                                {layer.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium rounded-full text-gray-700 dark:text-gray-300"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
