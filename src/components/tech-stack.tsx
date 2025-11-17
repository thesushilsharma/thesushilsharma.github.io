"use client";

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
import { motion } from "motion/react";
import { AnimatedSection } from "./animations/animated-section";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { MdOutlineToken } from "react-icons/md";
import { TbApi } from "react-icons/tb";

interface TechItem {
  name: string;
  icon: React.ReactNode;
  category: "frontend" | "backend" | "database" | "devops" | "cloud";
  description: string;
}

const techStack: TechItem[] = [
  {
    name: "TypeScript",
    icon: <SiTypescript className="h-8 w-8 md:h-10 md:w-10" />,
    category: "frontend",
    description: "Making code more maintainable and less prone to errors.",
  },
  {
    name: "React",
    icon: <SiReact className="h-8 w-8 md:h-10 md:w-10" />,
    category: "frontend",
    description: "Modern UI library for building interactive interfaces",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="h-8 w-8 md:h-10 md:w-10" />,
    category: "frontend",
    description: "Full-stack React framework with SSR and SSG",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="h-8 w-8 md:h-10 md:w-10" />,
    category: "backend",
    description: "JavaScript runtime for server-side development",
  },
  {
    name: "APIs",
    icon: <TbApi className="h-8 w-8 md:h-10 md:w-10" />,
    category: "backend",
    description: "RESTful and GraphQL API development",
  },
  {
    name: "Blockchain",
    icon: <MdOutlineToken className="h-8 w-8 md:h-10 md:w-10" />,
    category: "backend",
    description: "Web3 and wallet integration",
  },
  {
    name: "C++",
    icon: <SiCplusplus className="h-8 w-8 md:h-10 md:w-10" />,
    category: "backend",
    description: "DSA and Competitive Programming",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="h-8 w-8 md:h-10 md:w-10" />,
    category: "database",
    description: "Advanced relational (SQL) database system",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="h-8 w-8 md:h-10 md:w-10" />,
    category: "database",
    description: "Advanced NoSQL database system",
  },
  {
    name: "Docker",
    icon: <SiDocker className="h-8 w-8 md:h-10 md:w-10" />,
    category: "devops",
    description: "Containerization and deployment platform",
  },
  {
    name: "Vercel",
    icon: <SiVercel className="h-8 w-8 md:h-10 md:w-10" />,
    category: "cloud",
    description: "Modern deployment platform for frontend apps",
  },
  {
    name: "Cloudflare",
    icon: <SiCloudflare className="h-8 w-8 md:h-10 md:w-10" />,
    category: "cloud",
    description: "CDN and web security services",
  },
  {
    name: "Ethers.js",
    icon: <SiEthers className="h-8 w-8 md:h-10 md:w-10" />,
    category: "backend",
    description:
      "Ethers.js is a JavaScript library for interacting with the Ethereum blockchain.",
  },
];

const categoryColors = {
  frontend:
    "from-blue-500/20 to-cyan-500/20 border-blue-500/30 hover:border-blue-500/60",
  backend:
    "from-green-500/20 to-emerald-500/20 border-green-500/30 hover:border-green-500/60",
  database:
    "from-purple-500/20 to-violet-500/20 border-purple-500/30 hover:border-purple-500/60",
  devops:
    "from-orange-500/20 to-red-500/20 border-orange-500/30 hover:border-orange-500/60",
  cloud:
    "from-indigo-500/20 to-blue-500/20 border-indigo-500/30 hover:border-indigo-500/60",
};

export function TechStackSection() {
  return (
    <AnimatedSection id="tech-stack" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      <div className="relative z-10">
        <motion.div
          className="flex flex-col items-center text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="space-y-2">
            <motion.div
              className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Technologies
            </motion.div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-foreground sm:text-4xl lg:text-5xl">
              My Tech Stack
            </h2>
          </div>
          <p className="max-w-[700px] text-muted-foreground md:text-xl leading-relaxed">
            I work with a carefully selected set of modern technologies to build
            scalable, performant, and maintainable applications.
          </p>
        </motion.div>

        <TooltipProvider delayDuration={200}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`
                      group relative overflow-hidden rounded-xl p-6 md:p-8
                      bg-gradient-to-br ${categoryColors[tech.category]}
                      backdrop-blur-sm border transition-all duration-300
                      hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1
                      cursor-pointer
                    `}
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                      <div className="relative z-10 flex flex-col items-center space-y-3">
                        <div className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                          {tech.icon}
                        </div>
                        <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="max-w-xs p-3 bg-popover/95 backdrop-blur-sm border border-border/50"
                  >
                    <div className="space-y-1">
                      <p className="font-medium text-popover-foreground">
                        {tech.name}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </div>
        </TooltipProvider>

        {/* Category legend */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-12 pt-8 border-t border-border/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {Object.entries(categoryColors).map(([category, colors]) => (
            <div key={category} className="flex items-center space-x-2">
              <div
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${colors.split(" ")[0]} ${colors.split(" ")[1]}`}
              />
              <span className="text-xs font-medium text-muted-foreground capitalize">
                {category}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
