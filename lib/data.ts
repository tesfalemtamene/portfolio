import { Skill, Project, ExperienceItem, EducationItem, NavLink, SocialLink, ContactInfo } from "@/lib/types";

export const navLinks: NavLink[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export const contactInfo: ContactInfo = {
    name: "Tesfalem Tamene Weldu",
    email: "tesfalemtamene2023@gmail.com",
    location: "Addis Ababa, Ethiopia",
};

export const socialLinks: SocialLink[] = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/tesfalem-tamene", icon: "linkedin" },
    { name: "Twitter", href: "https://twitter.com", icon: "twitter" },
    { name: "Facebook", href: "https://web.facebook.com/tesfalem.tamene", icon: "facebook" },
    { name: "Instagram", href: "https://www.instagram.com/tf_tamene", icon: "instagram" },
    { name: "Email", href: "mailto:tesfalemtamene2023@gmail.com", icon: "mail" },
    { name: "GitHub", href: "https://github.com/tesfalemtamene", icon: "github" },
];

export const skills: Skill[] = [
    { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { name: "Backend", items: ["Node.js", "Django", "PostgreSQL", "Odoo Development", "ML"] },
    { name: "Tools", items: ["Git", "Docker", "Figma", "VS Code",] },
];

export const projects: Project[] = [
    {
        title: "Project One",
        description: "A high-performance web application built with modern technologies.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        demoUrl: "https://example.com",
        repoUrl: "https://github.com",
        image: "/images/project1.jpg",
    },
    {
        title: "Project Two",
        description: "Interactive dashboard with real-time data visualization.",
        tags: ["React", "D3.js", "Firebase"],
        demoUrl: "https://example.com",
        repoUrl: "https://github.com",
        image: "/images/project2.jpg",
    },
    {
        title: "Project Three",
        description: "E-commerce platform with seamless checkout experience.",
        tags: ["Next.js", "Stripe", "Sanity"],
        demoUrl: "https://example.com",
        repoUrl: "https://github.com",
        image: "/images/project3.jpg",
    },
];

export const experience: ExperienceItem[] = [
    {
        role: "Internship",
        company: "Adigrat University",
        period: "Sep 2024 - Jan 2025",
        description: "Participated in Network Infrastructure and Security configuration, improving performance by 40%.",
    },
    {
        role: "Software Developer",
        company: "Niyat Consultancy",
        period: "Sep 2025 - Present",
        description: "Building Odoo ERP Modules for Wagwago Business group",
    },
];

export const education: EducationItem[] = [
    {
        degree: "BSc in Computer Science and Engineering",
        school: "Mekelle Institute of Technology - Mekelle University,Ethiopia",
        year: "2025",
    },
    {
        degree: "CCNA Certification",
        school: "Cisco Academy",
        year: "2025",
    },
];