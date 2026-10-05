import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, MapPin, User, Facebook, Instagram } from "lucide-react";
import { contactInfo, socialLinks } from "@/lib/data";

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
        <footer id="contact" className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black/50 pt-16 pb-8">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12">

                    {/* Column 1: Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold mb-6">Contact Info</h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                <User className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />
                                <span>{contactInfo.name}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />
                                <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {contactInfo.email}
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />
                                <span>{contactInfo.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Social Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 md:text-right">Connect</h3>
                        <div className="flex flex-wrap gap-4 md:justify-end">
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

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        &copy; {currentYear} {contactInfo.name}. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-400 dark:text-gray-600">
                        Designed & Built for Scale.
                    </p>
                </div>
            </div>
        </footer>
    );
}
