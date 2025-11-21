"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

// ------------------ TAB DATA ------------------

const TABS = [
  {
    id: "index",
    label: "index.tsx",
    code: `import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
    </main>
  );
}`,
  },
  {
    id: "portfolio",
    label: "portfolio.tsx",
    code: `import { motion } from "motion/react";

export const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold">Full-Stack Developer</h1>
      <p className="opacity-70 mt-2">
        Building elegant interfaces & smooth experiences.
      </p>
    </motion.div>
  );
};`,
  },
  {
    id: "button",
    label: "ui/button.tsx",
    code: `import { cn } from "@/lib/utils";

export function Button({ className, ...props }) {
  return (
    <button
      className={cn(
        "px-4 py-2 bg-white text-black rounded-md hover:bg-zinc-200 transition",
        className
      )}
      {...props}
    />
  );
}`,
  },
];

// ------------------ TYPEWRITER ------------------

const useTypewriter = (text: string) => {
  const [output, setOutput] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    setOutput("");
    indexRef.current = 0;

    let animationFrame: number;

    const type = () => {
      const current = indexRef.current;
      if (current < text.length) {
        const nextChar = text[current];

        // mechanical jitter timing (random 5–25ms delay)
        const jitter = Math.random() * 20 + 5;

        setOutput((o) => o + nextChar);
        indexRef.current++;

        animationFrame = window.setTimeout(() => {
          requestAnimationFrame(type);
        }, jitter);
      }
    };

    requestAnimationFrame(type);

    return () => {
      clearTimeout(animationFrame);
    };
  }, [text]);

  return output;
};

// ------------------ MAIN COMPONENT ------------------

export function CodeBlock() {
  const [activeTab, setActiveTab] = useState(0);

  // autoplay tab switching
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % TABS.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const code = TABS[activeTab].code;
  const animatedText = useTypewriter(code);

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-10 select-none">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-xl bg-[#0B0B0D] border border-white/10 shadow-[0_0_80px_-20px_rgba(255,255,255,0.1)]"
      >
        {/* TERMINAL HEADER */}
        <div className="flex justify-between items-center px-4 py-2 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
          </div>

          {/* TABS */}
          <div className="flex items-center gap-4">
            {TABS.map((tab, i) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={cn(
                  "text-xs font-mono px-2 py-1 rounded-md transition",
                  activeTab === i
                    ? "bg-white/10 text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          <div className="w-6" />
        </div>

        {/* CODE WINDOW */}
        <div className="relative p-4 overflow-hidden min-h-[260px]">
          <pre className="text-[11.5px] leading-relaxed font-mono text-zinc-100 whitespace-pre-wrap overflow-hidden">
            {animatedText}
          </pre>

          {/* glossy overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/2 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}
