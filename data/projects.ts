import type { Project } from "@/types";

export const projects: Project[] = [
    {
        id: "AI-FITNESS MICROSERVICES APPLICATION",
        title: "AI Fitness Microservices App",
        description:
            "A modern full-stack fitness application with AI-powered workout recommendations and real-time progress tracking.",
        longDescription: `The AI Fitness Microservices Application is a cutting-edge platform that leverages artificial intelligence to provide personalized workout plans and real-time progress monitoring. 
    It features a microservices architecture built with Spring Boot and React, ensuring scalability and maintainability. 
    Users can interact with the application through a responsive frontend, while the backend handles complex AI algorithms and data processing.`,
        techStack: [
            "Java",
            "Spring Boot",
            "React.js",
            "MongoDB",
            "Kafka",
            "Keycloak",
            "GEMINI API",
        ],
        category: "fullstack",
        features: [
            "AI-powered workout recommendations based on user preferences and performance data",
            "Real-time progress tracking with visual analytics",
            "Microservices architecture for scalability and maintainability",
            "Responsive React frontend for seamless user experience",
            "Integration with third-party fitness devices and APIs",
        ],
        liveUrl: "https://ai-fitness-app.vercel.app/",
        githubUrl: "https://github.com/sharmapranshu1706/AI-FITNESS-APP",
        featured: true,
        image: "/images/AI-Fitness_APP.png",
    },
//     
    {
        id: "SMART EMAIL ASSISTANT",
        title: "SMART EMAIL ASSISTANT",
        description:
            "An AI-powered email assistant that drafts, summarizes, and manages your inbox with natural language commands. Built with React, Node.js, and OpenAI's GPT-4 API.",
        longDescription: `The SMART EMAIL ASSISTANT is an innovative solution that leverages artificial intelligence to streamline email management. It can draft responses, summarize lengthy emails, and organize your inbox based on natural language commands. Built with React for the frontend and Node.js with OpenAI's GPT-4 API for the backend, it provides a seamless and efficient email experience.`,
        techStack: [
            "Java",
            "Spring Boot",
            "Maven",
            "WebFlux",
            "GEMINI API",
            "Bootstrap",
            "React.js",
        ],
        category: "fullstack",
        features: [
            "AI-powered email drafting and summarization",
            "EMAIL Suggestions based on email content and user preferences",
            "AI Reply generation for quick responses",
            "Separate AI Reply Button for user control",
            "GEMINI API integration for advanced natural language processing",
            "WebFlux for reactive programming and efficient handling of concurrent requests",
        ],
        liveUrl: "",
        githubUrl: "https://github.com/sharmapranshu1706/Email-Assistant-AI",
        featured: true,
        image: "/images/SMART-EMAIL-ASSISTANT.png",
    },
//     
];

export const featuredProjects = projects.filter((p) => p.featured);