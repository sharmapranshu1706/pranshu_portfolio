import type { Internship } from "@/types";

export const internships: Internship[] = [
    {
        id: "spark-ventures-java-intern",
        company: "Spark Ventures LLP",
        role: "Java Developer Intern",
        subtitle: "Java Developer Internship at Spark Ventures LLP, New Delhi",
        description:
            "Designed and maintained MVC Architecture-based backend services for 3 production modules across 10,000+ lines of codebase. Reduced page load time by 30% through lazy loading and database query refactoring. Debugged 20+ production bugs in real-time and collaborated on code reviews using Git branching and pull request workflows. Delivered features on a 2-week Agile release cycle.",
        from: "March 01, 2026",
        to: "June 01, 2026",
        url: "",
        tags: ["Java", "Spring Boot", "MVC", "PostgreSQL", "Git", "Agile"],
        featured: true,
    },
    {
        id: "ibm-frontend-intern",
        company: "IBM SkillsBuild (AICTE)",
        role: "Front End Web Development Intern",
        subtitle: "IBM-Certified Frontend Internship via AICTE",
        description:
            "Built reusable React components reducing UI duplication and improving page maintainability. Developed interactive dashboards with real-time data visualization by integrating REST APIs and managing global state with Redux. Practised collaborative Git workflows including feature branching, pull requests, and merge conflict resolution.",
        from: "August 01, 2025",
        to: "September 30, 2025",
        url: "",
        tags: ["React.js", "Redux", "REST APIs", "JavaScript", "Git"],
        featured: true,
    },
];

export const featuredInternships = internships.filter((i) => i.featured);