import React from "react";
import { cn } from "@/lib/utils";

export const Terminal = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "w-full max-w-lg mx-auto rounded-xl bg-gray-900 border border-gray-800 shadow-2xl overflow-hidden",
                className
            )}
        >
            <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="ml-4 text-xs text-gray-400 font-mono">bash</div>
            </div>
            <div className="p-4 space-y-2 font-mono text-sm">
                <div className="flex gap-2 text-green-400">
                    <span>➜</span>
                    <span>~</span>
                    <span className="text-white">whoami</span>
                </div>
                <div className="text-gray-300">
                    Software Developer & AI Enthusiast
                    <br />
                    Passionate about AI/ML, Security, and Scalable Architectures.
                </div>
                <div className="flex gap-2 text-green-400 mt-4">
                    <span>➜</span>
                    <span>~</span>
                    <span className="text-white">ls skills/</span>
                </div>
                <div className="grid grid-cols-2 gap-x-4 text-blue-300">
                    <span>FullStack</span>
                    <span>Python/AI</span>
                    <span>Networking</span>
                    <span>React/Next</span>
                    <span>Docker</span>
                    <span>Security</span>
                </div>
                <div className="flex gap-2 text-green-400 mt-4 h-4">
                    <span>➜</span>
                    <span>~</span>
                    <span className="animate-pulse bg-white w-2 h-4 block"></span>
                </div>
            </div>
        </div>
    );
};
