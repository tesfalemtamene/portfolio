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
    { name: "Twitter", href: "https://x.com/tf_tamene_weldu", icon: "twitter" },
    { name: "Facebook", href: "https://web.facebook.com/tesfalem.tamene", icon: "facebook" },
    { name: "Instagram", href: "https://www.instagram.com/tf_tamene", icon: "instagram" },
    { name: "Email", href: "mailto:tesfalemtamene2023@gmail.com", icon: "mail" },
    { name: "GitHub", href: "https://github.com/tesfalemtamene", icon: "github" },
];

export const skills: Skill[] = [
    { name: "AI & Intelligent Systems", items: ["Python", "Machine Learning", "Deep Learning", "Computer Vision", "NLP", "RAG", "TensorFlow/Keras"] },
    { name: "Application Engineering", items: ["React", "Next.js", "Django", "FastAPI", "Odoo", "REST APIs"] },
    { name: "Data & Infrastructure", items: ["PostgreSQL", "SQLite", "Docker", "GitLab CI/CD", "Linux"] },
    { name: "Security", items: ["Secure APIs", "Authentication", "RBAC", "Network Security", "CCNA"] },
];

export const projects: Project[] = [
    {
        title: "AI-Driven Adaptive Face Recognition & Surveillance",
        description: "Developed an AI-driven security system that combines face recognition, computer vision, and schedule-based access monitoring for corporate environments.",
        tags: ["Python, OpenCV, TensorFlow/Keras, CNN, SQLite"],
        demoUrl: "https://example.com",
        repoUrl: "https://github.com",
        image: "/images/project1.jpg",
    },
    {
        title: "Enterprise ERP & Business Automation",
        description: "Developing and implementing customized Odoo ERP solutions for organizations across multiple business domains.",
        tags: ["Odoo 18, Python, XML, JavaScript, PostgreSQL, Docker, REST APIs, GitLab CI/CD"],
        demoUrl: "https://example.com",
        repoUrl: "https://github.com",
        image: "/images/project2.jpg",
    },
    {
        title: "OpenPAYGO Solar Financing Platform",
        description: "This system integrates digital payment services, payment verification, customer financing plans, credit-ledger management, PAYG token generation, and device management.",
        tags: ["Django/FastAPI, PostgreSQL, REST APIs, OpenPAYGO, Docker, GitLab CI/CD"],
        demoUrl: "https://example.com",
        repoUrl: "https://github.com",
        image: "/images/project3.jpg",
    },
    {
        title: "Tigrigna NLP Processing Pipeline",
        description: "Developed a NLP preprocessing pipeline for Tigrigna, an under-resourced Semitic language.",
        tags: ["Python, NLP, Text Processing, Machine Learning"],
        demoUrl: "https://example.com",
        repoUrl: "https://github.com",
        image: "/images/project3.jpg",
    },
    {
        title: "RAG-Based Document Assistant",
        description: "Built a retrieval-augmented document assistant that combines transformer-based embeddings with semantic search to retrieve relevant information from organizational documents before generating responses.",
        tags: ["Transformer Embeddings, Semantic Search, RAG, Vector Retrieval, LLMs"],
        demoUrl: "https://example.com",
        repoUrl: "https://github.com",
        image: "/images/project3.jpg",
    },
    {
        title: "Helpdesk Platform",
        description: "A full-stack helpdesk platform for managing support requests, workflows, users, and organizational operations.",
        tags: ["FastAPI, Next.js, PostgreSQL, Docker, Alembic, Argon2, Zustand, Axios"],
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