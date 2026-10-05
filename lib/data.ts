import { Skill, Project, ExperienceItem, EducationItem, NavLink, SocialLink, ContactInfo, AwardItem, LeadershipItem } from "@/lib/types";

export const navLinks: NavLink[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Awards", href: "#awards" },
    { name: "Leadership", href: "#leadership" },
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
];

export const skills: Skill[] = [
    { name: "AI & Machine Learning", items: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "RAG", "LLMs", "TensorFlow/Keras"] },
    { name: "Full-Stack Software Development", items: ["React", "Next.js", "Django", "FastAPI", "Odoo", "REST APIs"] },
    { name: "Database & DevOps", items: ["PostgreSQL", "SQLite", "Docker", "GitLab CI/CD", "Linux"] },
    { name: "Network & Security", items: ["Secure APIs", "Authentication", "RBAC", "Network Security", "CCNA"] },
];

export const projects: Project[] = [
    {
        title: "AI-Driven Adaptive Face Recognition & Surveillance",
        description: "Developed an AI-driven security system that combines face recognition, computer vision, and schedule-based access monitoring for corporate environments.",
        category: "Academic Project",
        tags: ["Python, OpenCV, TensorFlow/Keras, CNN, SQLite"],
        demoUrl: "https://example.com",
        repoUrl: "https://github.com",
        image: "/images/project1.jpg",
    },
    {
        title: "Enterprise ERP & Business Automation",
        description: "Developing and implementing customized Odoo ERP solutions for organizations across multiple business domains.",
        category: "Professional Project",
        tags: ["Odoo 18, Python, XML, JavaScript, PostgreSQL, Docker, REST APIs, GitLab CI/CD"],
        demoUrl: "https://example.com",
        repoUrl: "https://github.com",
        image: "/images/project2.jpg",
    },
    {
        title: "OpenPAYGO Solar Financing Platform",
        description: "This system integrates digital payment services, payment verification, customer financing plans, credit-ledger management, PAYG token generation, and device management.",
        category: "Professional Project",
        tags: ["Django/FastAPI, PostgreSQL, REST APIs, OpenPAYGO, Docker, GitLab CI/CD"],
        demoUrl: "https://example.com",
        repoUrl: "https://github.com",
        image: "/images/project3.jpg",
    },
    {
        title: "Tigrigna NLP Processing Pipeline",
        description: "Developed a NLP preprocessing pipeline for Tigrigna, an under-resourced Semitic language.",
        category: "Research Project",
        tags: ["Python, NLP, Text Processing, Machine Learning"],
        demoUrl: "https://example.com",
        repoUrl: "https://github.com",
        image: "/images/project3.jpg",
    },
    {
        title: "RAG-Based Document Assistant",
        description: "Built a retrieval-augmented document assistant that combines transformer-based embeddings with semantic search to retrieve relevant information from organizational documents before generating responses.",
        category: "Personal/Technical Project",
        tags: ["Transformer Embeddings, Semantic Search, RAG, Vector Retrieval, LLMs"],
        demoUrl: "https://example.com",
        repoUrl: "https://github.com",
        image: "/images/project3.jpg",
    },
    {
        title: "Helpdesk Platform",
        description: "A full-stack helpdesk platform for managing support requests, workflows, users, and organizational operations.",
        category: "Software Engineering Training Project",
        tags: ["FastAPI, Next.js, PostgreSQL, Docker, Alembic, Argon2, Zustand, Axios"],
        demoUrl: "https://example.com",
        repoUrl: "https://github.com",
        image: "/images/project3.jpg",
    },
];

export const experience: ExperienceItem[] = [
    {
        role: "Software Engineer",
        company: "Niyat Consultancy",
        period: "Sep 2025 - Present",
        description: "Develop enterprise software and digital solutions using Odoo, Python, Django, FastAPI, React, PostgreSQL, and REST APIs, delivering customized ERP workflows and integrations for 7+ companies. Contribute to the OpenPAYGO solar-financing platform, integrating digital payments, financing workflows, and device management, while also developing AI-enabled applications and supporting containerized deployment with Docker and GitLab CI/CD.",
    },
    {
        role: "Internship",
        company: "Adigrat University",
        period: "Sep 2024 - Jan 2025",
        description: "Contributed to the configuration and security of network infrastructure, including access control, reliability improvements, and system protection.",
    },
];

export const education: EducationItem[] = [
    {
        degree: "BSc in Computer Science and Engineering",
        school: "Mekelle Institute of Technology - Mekelle University,Ethiopia",
        year: "2018-2025",
    },
    {
        degree: " Diploma in Natural Science",
        school: "Kinfe Gebremedhin Preparatory School",
        year: "2016-2018",
    },
];

export const awardsData: AwardItem[] = [
    {
        title: "National Voluntary Community Service Volunteer",
        organization: "Ministry of Peace & Ministry of Education",
        date: "July 2024",
        description: "National volunteering service recognizing commitment to community engagement and public service in Adigrat.",
        certificate: "/certificates/national-community-service.pdf"
    },
    {
        title: "Scholarship Award for Academic Excellence in Undergraduate Program",
        organization: "Mekelle Institute of Technology",
        date: "2018",
        description: "Cost-sharing based academic excellence scholarship awarded by Mekelle Institute of Technology.",
        certificate: "/certificates/academic-scholarship.pdf"
    }
];

export const leadershipData: LeadershipItem[] = [

    {
        organization: "Miknay Community Volunteer Initiative",
        role: "Co-Founder & Coordinator",
        location: "Tigray",
        period: "December 2021 – August 2025",
        description: "Co-founded and coordinated a community volunteer initiative supporting displaced families through emergency food, clothing, and shelter assistance during a period of severe resource constraints."
    },
    {
        organization: "MIT Campus Peace Forum",
        role: "Coordinator",
        location: "Mekelle",
        period: "2018–2025",
        description: "Progressed from member to coordinator, supporting student dialogue, community engagement, and collaborative initiatives throughout university.",
        certificate: "/certificates/mit-peace-forum.pdf"
    },
    {
        organization: "Araya Women & Children Charitable Organization",
        role: "Fundraising Coordinator",
        location: "Mekelle",
        period: "2024–2025",
        description: "Supported fundraising activities and community engagement initiatives serving women and children.",
        certificate: "/certificates/araya-charity.pdf"
    },
    {
        organization: "War Injuries Students Support Initiative",
        role: "Coordinator",
        location: "Mekelle University",
        period: "September 2023 – June 2025",
        description: "Managed a peer support network and collaborated with university community and local aid providers to secure essential academic relief, healthcare, and physical accessibility accommodations for war-injured students."
    },
    {
        organization: "Mekelle Institute of Technology",
        role: "Campus GC Events Coordinator",
        location: "MIT",
        period: "2024 - 2025",
        description: "Coordinating in-campus and out-campus events for the Graduation Class (GC).",
        certificate: "/certificates/mit-gc-events.pdf"
    },

    {
        organization: "Mekelle Institute of Technology Campus Half-Life Events",
        role: "Events Coordinator",
        location: "MIT",
        period: "February 2024",
        description: "Coordinated in-campus and out-campus events for the half-life celebration of my batch.",
        certificate: "/certificates/mit-half-life-events.pdf"
    }

];