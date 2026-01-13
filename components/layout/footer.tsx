import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, MapPin, User, ArrowRight, Facebook, Instagram } from "lucide-react";
import { navLinks, contactInfo, socialLinks } from "@/lib/data";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const getIcon = (name: string) => {
        switch (name.toLowerCase()) {
            case "github": return <Github className="h-5 w-5" />;
            case "linkedin": return <Linkedin className="h-5 w-5" />;
            case "twitter": return <Twitter className="h-5 w-5" />;
            case "facebook": return <Facebook className="h-5 w-5" />;
            case "instagram": return <Instagram className="h-5 w-5" />;
            case "email": return <Mail className="h-5 w-5" />;
            default: return null;
        }
    };

    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black/50 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Column 1: Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                        <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                            <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            <span>{contactInfo.name}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                            <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                {contactInfo.email}
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                            <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            <span>{contactInfo.location}</span>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="grid grid-cols-2 gap-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Social Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Connect</h3>
                        <div className="flex flex-wrap gap-4">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:scale-110 transition-transform hover:border-blue-500 dark:hover:border-blue-400 group"
                                    aria-label={link.name}
                                >
                                    <span className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                        {getIcon(link.icon)}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        &copy; {currentYear} {contactInfo.name}. Built with Next.js and Vercel.
                    </p>
                </div>
            </div>
        </footer>
    );
}
