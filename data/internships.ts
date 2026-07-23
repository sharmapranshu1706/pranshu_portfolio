import type { Internship } from "@/types";

export const internships: Internship[] = [
    {
        id: "The Skybrisk-java-full-stack-developer-internship",
        company: "The Skybrisk",
        role: "Java Full Stack Developer Intern",
        subtitle: "Java Full Stack Developer Internship at The Skybrisk",
        description:"Developed a full-stack web application using Java, Spring Boot, and React.js. Implemented RESTful APIs and integrated with a PostgreSQL database. Collaborated with a team of developers using Git and Agile methodologies.",
        from: "January 01, 2026",
        to: "June 30, 2026",
        url: "https://drive.google.com/file/d/16slI7E5VUpFt_ApWrwW0tE0-VnVjrN3n/view?usp=drive_link",
        tags: ["React.js", "Redux", "REST APIs", "JavaScript", "Git"],
        featured: true,
    },
    {
        id: "spark-ventures-java-intern",
        company: "Spark Ventures LLP",
        role: "Java Developer Intern",
        subtitle: "Java Developer Internship at Spark Ventures LLP, New Delhi",
        description: "Designed and maintained MVC Architecture-based backend services for 3 production modules across 10,000+ lines of codebase. Reduced page load time by 30% through lazy loading and database query refactoring. Debugged 20+ production bugs in real-time and collaborated on code reviews using Git branching and pull request workflows. Delivered features on a 2-week Agile release cycle.",
        from: "December 01, 2025",
        to: "March 31, 2026",
        url: "https://drive.google.com/file/d/1niSRPLxVLIp4sQzwp11kCaBID8lwidNd/view?usp=drive_link",
        tags: ["Java", "Spring Boot", "MVC", "PostgreSQL", "Git", "Agile"],
        featured: true,
    },
    {
        id: "ibm-skills-build-frontend-developer-internship",
        company: "IBM Skills Build",
        role: "Frontend Developer Intern",
        subtitle: "Frontend Developer Internship at IBM Skills Build",
        description: "Developed a responsive web application using React.js and Redux. Implemented RESTful APIs and integrated with a MongoDB database. Collaborated with a team of developers using Git and Agile methodologies.",
        from: "August 21, 2025",
        to: "September 30, 2025",
        url: "https://drive.google.com/file/d/1Tuk8G6TUU2Gg_6ns3BdVXzNZrOEIAcI6/view?usp=drive_link",
        tags: ["React.js", "Redux", "REST APIs", "MongoDB", "Git"],
        featured: true,
    }
];

export const featuredInternships = internships.filter((i) => i.featured);