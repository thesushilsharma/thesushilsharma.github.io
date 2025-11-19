import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { projects } from "@/config/site";

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const hueA = (index * 45) % 360;
  const hueB = (hueA + 60) % 360;
  const background = `linear-gradient(135deg, ${hue(hueA)}, ${hue(hueB)})`;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Beta": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Development": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <motion.div
      className="relative h-full"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.2, once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 rounded-2xl opacity-20 blur-xl"
        style={{ background }}
      />

      <motion.div variants={cardVariants} className="relative z-10 h-full">
        <Card className="group relative overflow-hidden bg-card/95 backdrop-blur-sm border border-border/20 rounded-2xl transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.02] w-full h-full flex flex-col">
          {/* Status Badge */}
          <div className="absolute top-4 right-4 z-10">
            <Badge className={`${getStatusColor(project.status)} border text-xs font-medium`}>
              {project.status}
            </Badge>
          </div>

          {/* Emoji Header */}
          <CardHeader className="relative p-6 pb-4 flex-shrink-0">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
              <span className="text-3xl">{project.emoji}</span>
            </div>
            <CardTitle className="text-lg font-bold text-center group-hover:text-primary transition-colors line-clamp-2">
              {project.title}
            </CardTitle>
          </CardHeader>

          <div className="px-6 pb-6 flex flex-col flex-grow">
            <CardDescription className="text-center text-muted-foreground leading-relaxed mb-4 text-sm line-clamp-3 flex-grow">
              {project.description}
            </CardDescription>

            <CardContent className="p-0 mb-4">
              <div className="flex flex-wrap gap-1 justify-center">
                {project.tags.slice(0, 4).map(tag => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs font-medium bg-background/50 hover:bg-primary/10 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 4 && (
                  <Badge variant="outline" className="text-xs font-medium bg-background/50">
                    +{project.tags.length - 4}
                  </Badge>
                )}
              </div>
            </CardContent>

            <CardFooter className="p-0 flex gap-2 mt-auto">
              <Button variant="outline" size="sm" className="flex-1 group/btn text-xs" asChild>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1 h-3 w-3 group-hover/btn:rotate-12 transition-transform" />
                  Code
                </a>
              </Button>
              <Button size="sm" className="flex-1 group/btn text-xs" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1 h-3 w-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  Demo
                </a>
              </Button>
            </CardFooter>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Featured Work
          </Badge>
          <h2 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl lg:text-6xl">
            My Projects
          </h2>
          <p className="max-w-[800px] text-muted-foreground text-lg md:text-xl leading-relaxed">
            A curated selection of projects showcasing my expertise in full-stack development,
            blockchain technology, AI integration, and modern web solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 60,
    opacity: 0,
    scale: 0.9,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

