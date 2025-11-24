"use client";

import { motion } from "motion/react";
import { AnimatedSection } from "./animations/animated-section";
import { GraduationCap } from "lucide-react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  TimelineContent,
  TimelineHeader,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
} from "@/components/ui/timeline";
import { academicData } from "@/config/site";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function AcademicExperienceSection() {
  const MotionTimelineItem = motion.create(TimelineItem);

  return (
    <AnimatedSection id="academic-experience">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">Academic Experience</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          My educational background and academic achievements.
        </p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <Timeline>
          {academicData.map((item, index) => (
            <MotionTimelineItem key={`${item.degree}-${item.institution}`} variants={itemVariants}>
              {index !== academicData.length - 1 && <TimelineConnector />}
              <TimelineIcon icon={GraduationCap} />
              <TimelineContent>
                <TimelineHeader>
                  <TimelineTitle>{item.degree}</TimelineTitle>
                  <TimelineTime>{item.duration}</TimelineTime>
                </TimelineHeader>
                <TimelineDescription className="text-base text-foreground font-medium">
                  {item.institution}
                </TimelineDescription>
                <TimelineDescription className="mt-2">
                  {item.description}
                </TimelineDescription>
              </TimelineContent>
            </MotionTimelineItem>
          ))}
        </Timeline>
      </motion.div>
    </AnimatedSection>
  );
}