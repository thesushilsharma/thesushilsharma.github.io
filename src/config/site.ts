import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { SiLinkedin } from "react-icons/si";

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