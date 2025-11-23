"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue
} from "motion/react";
import { Briefcase, Code, Server, Database, Globe, Zap, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { workData } from "@/config/site";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function JobItem({ job, index }: { job: typeof workData[0]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  // Parallax effect: Move the card slightly against the scroll direction
  const y = useParallax(scrollYProgress, 50);

  // Opacity/Scale entry animation
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8]);

  const isEven = index % 2 === 0;

  // Icon selection logic
  let Icon = Briefcase;
  if (job.title.toLowerCase().includes("engineer")) Icon = Code;
  if (job.title.toLowerCase().includes("support")) Icon = Server;
  if (job.description.toLowerCase().includes("database")) Icon = Database;
  if (job.description.toLowerCase().includes("web")) Icon = Globe;

  return (
    <section
      ref={ref}
      className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""} gap-8 py-16`}
    >
      {/* Timeline Node (Static relative to the row) */}
      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
        <motion.div
          style={{ scale, opacity }}
          className="w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"
        >
          {index === 0 && (
            <div className="absolute -inset-2 rounded-full border border-primary/30 animate-ping"></div>
          )}
        </motion.div>
      </div>

      {/* Date/Meta Column */}
      <div className="hidden md:flex w-1/2 justify-end px-8 items-center">
        <motion.div
          style={{ opacity }}
          className={`text-sm font-mono text-muted-foreground flex items-center gap-2 ${isEven ? "flex-row-reverse text-right" : ""}`}
        >
          <span className="px-2 py-1 rounded bg-secondary/50 border border-border">
            {job.duration}
          </span>
          <div className="h-px w-8 bg-border"></div>
        </motion.div>
      </div>

      {/* Content Card with Parallax */}
      <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-8">
        <motion.div style={{ y, opacity }}>
          <Card className="relative overflow-hidden border-primary/10 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="mb-2 w-fit border-primary/20 text-primary">
                    {job.company}
                  </Badge>
                  <span className="md:hidden text-xs font-mono text-muted-foreground">
                    {job.duration}
                  </span>
                </div>
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                  <Icon size={18} className="text-primary" />
                  {job.title}
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="text-sm text-muted-foreground space-y-4">
              <p className="leading-relaxed">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {["React", "TypeScript", "Node.js"].map((tech, i) => (
                  <div key={i} className="flex items-center text-xs text-primary/70 bg-primary/5 px-2 py-0.5 rounded-full">
                    <Zap size={10} className="mr-1" />
                    {tech}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export function WorkExperienceSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div id="work-experience" className="w-full py-20 relative overflow-hidden bg-background/50" ref={containerRef}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
            Professional Journey
          </h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
            A parallax timeline of my technical evolution.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Static Background Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/10 transform -translate-x-1/2"></div>

          {/* Animated Progress Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-blue-500 transform -translate-x-1/2 origin-top"
            style={{ scaleY }}
          />

          <div className="space-y-0"> {/* Removed space-y-12 to let parallax handle spacing visually */}
            {workData.map((job, index) => (
              <JobItem key={index} job={job} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
