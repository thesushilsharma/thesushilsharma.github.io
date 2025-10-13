"use client";

import { motion } from "motion/react";
import { AnimatedSection } from "./animations/animated-section";
import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const academicData = [
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
        className="relative max-w-3xl mx-auto"
      >
        <div className="absolute left-6 top-0 h-full w-0.5 bg-border -z-10" />
        {academicData.map((item, index) => (
          <motion.div key={index} variants={itemVariants} className="pl-16 mb-12 relative">
             <div className="absolute left-6 -translate-x-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                <GraduationCap className="w-6 h-6" />
              </div>
              <Card className="shadow-lg hover:shadow-primary/20 transition-shadow">
                <CardHeader>
                  <CardTitle>{item.degree}</CardTitle>
                  <CardDescription>{item.institution} | {item.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
