export interface Skill {
    name: string;
    items: string[];
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    demoUrl: string;
    repoUrl: string;
    image: string;
}

export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    description: string;
}

export interface EducationItem {
    degree: string;
    school: string;
    year: string;
}

export interface NavLink {
    name: string;
    href: string;
}

export interface SocialLink {
    name: string;
    href: string;
    icon: string; // We'll map string names to icons in the component
}

export interface ContactInfo {
    name: string;
    email: string;
    location: string;
}
