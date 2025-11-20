"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform, Variants } from "motion/react";
import Link from "next/link";
import { CodeBlock } from "./code-block";
import { useRef, useMemo } from "react";
import { GlitchText } from "./ui/glitch-text";
import { socialLinks } from "@/config/site";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      width: Math.random() * 100 + 50,
      height: Math.random() * 100 + 50,
      x: `${Math.random() * 100 - 50}%`,
      y: `${Math.random() * 100 - 50}%`,
      animateX: [`${Math.random() * 100 - 50}%`, `${Math.random() * 100 - 50}%`],
      animateY: [`${Math.random() * 100 - 50}%`, `${Math.random() * 100 - 50}%`],
      duration: Math.random() * 20 + 10,
    }));
  }, []);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
        when: "beforeChildren"
      },
    },
  };

  const itemVariants: Variants = {

    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const badgeVariants: Variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.1
      }
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-20 bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      {/* Animated background particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: particle.width,
              height: particle.height,
              x: particle.x,
              y: particle.y,
            }}
            animate={{
              x: particle.animateX,
              y: particle.animateY,
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y, opacity }}
        className="container mx-auto grid min-h-screen grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6"
      >
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <motion.div
            variants={badgeVariants}
            initial="initial"
            animate="animate"
            className="mb-4 inline-block rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-sm text-primary shadow-lg shadow-primary/10"
          >
            Open to New Opportunities
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl relative overflow-hidden"
          >
            <GlitchText text="Versatile Full-Stack Developer" />
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-[700px] text-muted-foreground md:text-xl"
          >
            Crafting high-performance web applications and decentralized solutions with a focus on user experience and robust architecture.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="group" asChild>
              <Link href="#projects">
                View My Work
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <ArrowRight className="ml-2" />
                </motion.span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="backdrop-blur-sm bg-background/50" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 transition-all duration-300" asChild>
                  <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.platform}>
                    <social.icon className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative hidden md:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <CodeBlock />
        </motion.div>
      </motion.div>
    </section>
  );
}
