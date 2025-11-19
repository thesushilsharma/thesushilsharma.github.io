import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { SiLinkedin } from "react-icons/si";
import * as THREE from "three";
import { MdOutlineToken } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import {
  SiCloudflare,
  SiDocker,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiVercel,
  SiEthers,
  SiMongodb,
  SiCplusplus,
} from "@icons-pack/react-simple-icons";

export const siteConfig = {
  name: "TheSushilSharma",
  title: "Versafolio | Full-Stack Developer Portfolio",
  description:
    "A modern, animated personal portfolio for a full-stack developer specializing in blockchain, APIs, databases, React, and Next.js.",
  url: "https://thesushilsharma.github.io",
};

export const socialLinks: SocialLink[] = [
  {
    _id: "1",
    platform: "GitHub",
    icon: SiGithub,
    url: "https://github.com/thesushilsharma",
  },
  {
    _id: "2",
    platform: "LinkedIn",
    icon: SiLinkedin,
    url: "https://linkedin.com/in/thesushilsharma",
  },
  {
    _id: "3",
    platform: "Twitter",
    icon: SiX,
    url: "https://twitter.com",
  },
];

export const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Academics",
    href: "#academic-experience",
  },
  {
    title: "Experience",
    href: "#academic-experience",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Blog",
    href: "#blog",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export const projects = [
  {
    id: "dexweaver",
    title: "DexWeaver - The Pool Whisperer",
    description:
      "Dex Weaver leverages oracles of pools to intelligently detect the DEX a pool belongs to and retrieve the token addresses within a specific liquidity pool.",
    emoji: "💰",
    tags: ["Blockchain", "React", "Next.js", "Typescript", "Web3", "Ethers.js"],
    liveUrl: "#",
    repoUrl: "https://github.com/thesushilsharma/DexWeaver",
    status: "Development",
  },
  {
    id: "interlock",
    title: "Interlock - Galactic Gateway",
    description:
      "Interlock is a decentralised gateway that aims to connect users with the Ethereum blockchain seamlessly.",
    emoji: "🌐",
    tags: ["Next.js", "Node.js", "Supabase", "Wagmi", "TypeScript", "Viem"],
    liveUrl: "#",
    repoUrl: "https://github.com/thesushilsharma/Interlock",
    status: "Development",
  },
  {
    id: "unfriended",
    title: "Unfriended",
    description:
      "This Golang script is designed to analyze your social media followers and following to identify users you are following but who are not following you back.",
    emoji: "📊",
    tags: ["Open Source", "Golang", "Instagram"],
    liveUrl: "#",
    repoUrl: "https://github.com/thesushilsharma/Unfriended",
    status: "Live",
  },
  {
    id: "voting-system",
    title: "Voting System",
    description: "A voting system built with Laravel, PHP and SQLite.",
    emoji: "🤖",
    tags: ["PHP", "SQLite", "Laravel", "React", "Node.js"],
    liveUrl: "#",
    repoUrl: "https://github.com/thesushilsharma/Voting_System",
    status: "Development",
  },
  {
    id: "loop",
    title: "Loop - Find Your Future",
    description:
      "Explore universities, read student reviews, and join community discussions to make the right choice.",
    emoji: "🥽",
    tags: [
      "Web3",
      "Next.js",
      "Tailwind CSS",
      "Vercel",
      "Framer Motion",
      "PostgreSQL",
      "Drizzle Orm",
      "NeonDB",
      "Kinde",
    ],
    liveUrl: "#",
    repoUrl: "https://github.com/thesushilsharma/Loop",
    status: "Development",
  },
  {
    id: "mayalu",
    title: "Mayalu",
    description:
      "Mayalu is a modern dating application built with a robust tech stack designed to create meaningful connections between people. Leveraging graph database technology to power its matching algorithm, Mayalu helps users find their perfect match based on shared interests, preferences, and compatibility.",
    emoji: "☁️",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Vercel",
      "Framer Motion",
      "Neo4j",
      "Firebase Auth",
      "Zod",
      "TanStack Query",
    ],
    liveUrl: "https://mayalu-saino.vercel.app/",
    repoUrl: "https://github.com/thesushilsharma/Mayalu",
    status: "Beta",
  },
];

export const workData = [
  {
    title: "Software Engineer",
    company: "PropFi",
    duration: "May 2025 - Present",
    description: "Developed a tokenized real estate platform on Ethereum (Base) with secure APIs using TypeScript & Node.js. Built responsive frontend with Next.js, React, and Tailwind. Integrated Swagger, end-to-end encryption, and Firebase Cloud Messaging.",
    position: new THREE.Vector3(0, 5, 0),
  },
  {
    title: "Software Engineer",
    company: "Web3Ocean",
    duration: "May 2024 - April 2025",
    description: "Developed scalable apps and RESTful APIs using TypeScript, Node.js, Express, Next.js, and React. Built crypto trading solutions and blockchain apps (Ethereum, Solana, Sui) using Ethers.js. Created Telegram bots and integrated third-party APIs.",
    position: new THREE.Vector3(4, 3.5, -2),
  },
  {
    title: "IT Support Intern",
    company: "Middle East Communications Networks",
    duration: "Apr 2023 - Oct 2023",
    description: "Provided technical support for hardware, software, Azure VDI, and Windows servers. Configured new employee laptops, delivered IT training programs, and leveraged Power BI to analyze IT data and optimize operations.",
    position: new THREE.Vector3(-3, 2, 3),
  },
  {
    title: "Software Engineer",
    company: "Sunlight Events Organizing L.L.C",
    duration: "Dec 2021 - Mar 2023",
    description: "Developed and maintained secure, high-performing company website with MySQL and MongoDB integration. Implemented web analytics solutions and provided extensive IT support including hardware and software troubleshooting.",
    position: new THREE.Vector3(3.5, 0.5, -3),
  },
  {
    title: "Web and IT Support",
    company: "Ask International Group",
    duration: "Jan 2021 - Nov 2021",
    description: "Built and hosted website, configured mail server and DNS, integrated Cloudflare for security. Utilized SQL for database management and provided technical support. Optimized website performance with SEO strategies, achieving 15% increase in organic traffic.",
    position: new THREE.Vector3(-4, -1, 2.5),
  },
  {
    title: "Junior Web Developer",
    company: "Global Valve Solution",
    duration: "Sept 2020 - Dec 2020",
    description: "Collaborated with development team to build and maintain user-friendly company website. Implemented new features including API integration and efficient page routing, enhancing user experience and functionality.",
    position: new THREE.Vector3(2.5, -2.5, -2.5),
  },
  {
    title: "Web Programmer",
    company: "Mad About Dance",
    duration: "Mar 2019 - Sept 2020",
    description: "Designed and developed responsive websites offering optimal user experience across various devices. Increased website traffic through effective SEO and web analytics strategies. Integrated Cloudflare services for enhanced security and performance.",
    position: new THREE.Vector3(-2, -4, 1.5),
  },
];

export const blogPosts = [
  {
    title: "These online classes help you stay engaged whilestaying home.",
    description:
      "Explore how online classes can keep you productive and engaged from home.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    hint: "code abstract",
    date: "Sept 27, 2018",
    readTime: "8 min read",
    category: "Online Learning",
    link: "https://thesushilsharma.blogspot.com/2018/09/e-learning.html",
  },
  {
    title: "Companies hire from these coding websites",
    description:
      "Discover top coding websites where companies find talented developers.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    hint: "3d abstract",
    date: "May 31, 2020",
    readTime: "12 min read",
    category: "Online Learning",
    link: "https://thesushilsharma.blogspot.com/2020/05/challenges.html",
  },
  {
    title: "Elevate your programming life with GIT CI/CD",
    description:
      "Learn how GIT CI/CD can streamline and enhance your programming workflow.",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop",
    hint: "server code",
    date: "March 07, 2023",
    readTime: "25 min read",
    category: "Backend",
    link: "https://thesushilsharma.hashnode.dev/git-set-and-bash",
  },
  {
    title: "In 5 minutes, how to make a website",
    description:
      "A quick guide to building your own website in just five minutes.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop",
    hint: "server code",
    date: "January 01, 2021",
    readTime: "10 min read",
    category: "Frontend",
    link: "https://thesushilsharma.blogspot.com/2021/01/tailwindcss.html",
  },
];

export const techStack: TechItem[] = [
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "frontend",
    description: "Making code more maintainable and less prone to errors.",
  },
  {
    name: "React",
    icon: SiReact,
    category: "frontend",
    description: "Modern UI library for building interactive interfaces",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "frontend",
    description: "Full-stack React framework with SSR and SSG",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    category: "backend",
    description: "JavaScript runtime for server-side development",
  },
  {
    name: "APIs",
    icon: TbApi,
    category: "backend",
    description: "RESTful and GraphQL API development",
  },
  {
    name: "Blockchain",
    icon: MdOutlineToken,
    category: "backend",
    description: "Web3 and wallet integration",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    category: "backend",
    description: "DSA and Competitive Programming",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "database",
    description: "Advanced relational (SQL) database system",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "database",
    description: "Advanced NoSQL database system",
  },
  {
    name: "Docker",
    icon: SiDocker,
    category: "devops",
    description: "Containerization and deployment platform",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    category: "cloud",
    description: "Modern deployment platform for frontend apps",
  },
  {
    name: "Cloudflare",
    icon: SiCloudflare,
    category: "cloud",
    description: "CDN and web security services",
  },
  {
    name: "Ethers.js",
    icon: SiEthers,
    category: "backend",
    description:
      "Ethers.js is a JavaScript library for interacting with the Ethereum blockchain.",
  },
];

export const academicData = [
  {
    degree: "Bachelor of Computer Science",
    institution: "University of Wollongong",
    duration: "2018 - 2023",
    description: "Specialized in Web Development and Artificial Intelligence.",
  },
  {
    degree: "12th Grade in Computer Science",
    institution: "CBSE",
    duration: "2015 - 2017",
    description: "Co-op experience, focusing on full-stack development and cloud computing.",
  },
];