"use client";

import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useContactForm } from "@/hooks/use-contact-form";
import { fadeIn } from "@/lib/animations";
export function Contact() {
    const { register, handleSubmit, errors, isSubmitting, isSuccess, errorMsg, onSubmit, resetForm } = useContactForm();

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-black/50">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In Touch</h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>

                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
                        {isSuccess ? (
                            <div className="text-center py-10">
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
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Name</label>
                                    <input
                                        {...register("name", { required: "Name is required" })}
                                        className={cn(
                                            "w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all",
                                            errors.name && "border-red-500 focus:ring-red-500"
                                        )}
                                        placeholder="Your Full Name"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Email</label>
                                    <input
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address"
                                            }
                                        })}
                                        className={cn(
                                            "w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all",
                                            errors.email && "border-red-500 focus:ring-red-500"
                                        )}
                                        placeholder="Your Email"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        {...register("message", { required: "Message is required" })}
                                        className={cn(
                                            "w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all min-h-[150px]",
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
                                    className="w-full py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin" /> : <Send className="w-4 h-4" />}
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
