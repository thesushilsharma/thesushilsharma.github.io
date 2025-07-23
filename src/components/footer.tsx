"use client";

import React, { useState, useEffect } from "react";

import { Button } from "./ui/button";
import { motion } from "motion/react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { SiLinkedin } from "react-icons/si";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  
  const socialLinks = [
    { name: "GitHub", icon: SiGithub, url: "https://github.com" },
    { name: "LinkedIn", icon: SiLinkedin, url: "https://linkedin.com" },
    { name: "Twitter", icon: SiX, url: "https://twitter.com" },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="bg-background border-t border-border"
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          {year ? `© ${year} thesushilsharma. All rights reserved.` : "© thesushilsharma. All rights reserved."}
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((social) => (
            <Button key={social.name} variant="ghost" size="icon" asChild>
              <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                <social.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
