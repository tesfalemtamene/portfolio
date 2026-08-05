"use client";

import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useContactForm } from "@/hooks/use-contact-form";
import { fadeIn } from "@/lib/animations";
import { DotBackground } from "@/components/ui/backgrounds";
export function Contact() {
    const { register, handleSubmit, errors, isSubmitting, isSuccess, errorMsg, onSubmit, resetForm } = useContactForm();

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <DotBackground />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white">
                        Get In Touch
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
                        I'm currently available for freelance projects and full-time opportunities.
                        If you have a project that needs some creative touch, let's talk.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl">
                        {isSuccess ? (
                            <div className="col-span-1 md:col-span-2 text-center py-10">
                                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Thanks for reaching out. I'll get back to you soon.
                                </p>
                                <button
                                    onClick={resetForm}
                                    className="mt-6 text-blue-600 font-medium hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-8">
                                    <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Info</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Fill out the form and I will get back to you within 24 hours.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                                                <Send className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:text-white" />
                                            </div>
                                            <span className="text-gray-600 dark:text-gray-300 font-medium">tesfalemtamene2023@gmail.com</span>
                                        </div>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Name</label>
                                        <input
                                            {...register("name", { required: "Name is required" })}
                                            className={cn(
                                                "w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all",
                                                errors.name && "border-red-500 focus:ring-red-500"
                                            )}
                                            placeholder="Your Full Name"
                                        />
                                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email</label>
                                        <input
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid email address"
                                                }
                                            })}
                                            className={cn(
                                                "w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all",
                                                errors.email && "border-red-500 focus:ring-red-500"
                                            )}
                                            placeholder="Your Email"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
                                        <textarea
                                            {...register("message", { required: "Message is required" })}
                                            className={cn(
                                                "w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all min-h-[150px] resize-none",
                                                errors.message && "border-red-500 focus:ring-red-500"
                                            )}
                                            placeholder="Tell me what you have in mind..."
                                        />
                                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                                    </div>

                                    {errorMsg && <p className="text-red-500 text-sm text-center">{errorMsg}</p>}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1"
                                    >
                                        {isSubmitting ? <Loader2 className="animate-spin" /> : <Send className="w-4 h-4" />}
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
