"use client";

import { motion } from "motion/react";
import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Copy, Check, Terminal } from "lucide-react";
import { Button } from "./ui/button";

interface CodeLineProps {
  content: string;
}

const CodeLine = ({ content }: CodeLineProps) => {
  // Improved syntax highlighting with vibrant colors
  const renderHighlightedCode = (text: string) => {
    const keywords = [
      'import', 'export', 'default', 'const', 'let', 'var', 'function',
      'return', 'if', 'else', 'for', 'while', 'class', 'interface', 'type',
      'async', 'await', 'try', 'catch', 'finally', 'throw', 'new', 'from'
    ];

    const builtins = ['console', 'window', 'document', 'Math', 'JSON', 'Promise'];

    const parts = text.split(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\/\/.*$|[{}()[\];,.]|\s+)/g);

    return parts.map((part, index) => {
      const key = `${index}`;

      if (!part) return null;

      // Comments - Muted grey but readable
      if (part.startsWith('//')) {
        return <span key={key} className="text-zinc-500 italic">{part}</span>;
      }

      // Strings - Vibrant Green
      if (/^["']/.test(part)) {
        return <span key={key} className="text-emerald-400">{part}</span>;
      }

      // Keywords - Vibrant Pink/Purple
      if (keywords.includes(part)) {
        return <span key={key} className="text-pink-400 font-medium">{part}</span>;
      }

      // Builtins/Types - Vibrant Blue
      if (builtins.includes(part) || /^[A-Z]/.test(part)) {
        return <span key={key} className="text-blue-400">{part}</span>;
      }

      // Numbers - Orange
      if (/^\d+/.test(part)) {
        return <span key={key} className="text-orange-400">{part}</span>;
      }

      // Default Text - Off-white for high contrast against dark bg
      return <span key={key} className="text-zinc-100">{part}</span>;
    });
  };

  return (
    <span className="flex-1 leading-relaxed font-mono text-[13px]">
      {renderHighlightedCode(content)}
    </span>
  );
};

interface CodeBlockProps {
  code?: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

const defaultCode = `// portfolio.tsx
import { motion } from "motion/react";

const Portfolio = () => {
  const skills = [
    "React", "Next.js", "TypeScript",
    "Node.js", "AI/ML", "Blockchain"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="portfolio"
    >
      <h1>Full-Stack Developer</h1>
      <p>Building amazing experiences</p>
    </motion.div>
  );
};

export default Portfolio;`;

export function CodeBlock({
  code = defaultCode,
  filename = "portfolio.tsx",
  showLineNumbers = true,
  className
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  }, [code]);

  const lines = code.split('\n');

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        initial: { y: 40, opacity: 0, scale: 0.95 },
        animate: {
          y: 0,
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={cn("relative group perspective-1000", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          rotateX: isHovered ? 2 : 0,
          rotateY: isHovered ? -2 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
        // Darker background for better contrast: bg-[#09090b] (Zinc 950)
        className="rounded-xl border border-white/10 bg-[#09090b]/90 backdrop-blur-md shadow-2xl overflow-hidden transform-gpu"
      >
        {/* Window Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#FF5F56] shadow-inner" />
            <div className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-inner" />
            <div className="h-3 w-3 rounded-full bg-[#27C93F] shadow-inner" />
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
            <Terminal className="h-3.5 w-3.5" />
            <span className="font-mono tracking-tight">{filename}</span>
          </div>

          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="ghost"
              size="icon"
              onClick={copyToClipboard}
              className="h-6 w-6 text-zinc-400 hover:text-zinc-100 hover:bg-white/10"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-emerald-400" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </Button>
          </div>
        </div>

        {/* Code Content */}
        <div className="relative bg-black/20">
          <pre className="p-4 overflow-x-auto max-h-[500px] scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            <code className="block min-w-max">
              {lines.map((line, index) => (
                <div
                  key={`line-${index}`}
                  className="flex items-start gap-4 px-2 py-0.5 hover:bg-white/5 rounded-sm transition-colors"
                >
                  {showLineNumbers && (
                    <span className="text-zinc-600 text-xs font-mono select-none w-6 text-right flex-shrink-0 pt-[2px]">
                      {index + 1}
                    </span>
                  )}
                  <CodeLine content={line} />
                </div>
              ))}
            </code>
          </pre>

          {/* Gradient overlay for scroll indication */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#09090b]/40 to-transparent pointer-events-none" />
        </div>

        {/* Glossy overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
      </motion.div>

      {/* Copy feedback */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{
          opacity: copied ? 1 : 0,
          y: copied ? -40 : 10,
          scale: copied ? 1 : 0.9
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900/90 text-white px-3 py-1.5 rounded-md text-xs font-medium shadow-xl border border-white/10 backdrop-blur-sm z-50 pointer-events-none"
      >
        Copied to clipboard!
      </motion.div>
    </motion.div>
  );
}
