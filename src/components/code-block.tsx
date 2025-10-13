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
  // Safe syntax highlighting using React components instead of innerHTML
  const renderHighlightedCode = (text: string) => {
    const keywords = [
      'import', 'export', 'default', 'const', 'let', 'var', 'function', 
      'return', 'if', 'else', 'for', 'while', 'class', 'interface', 'type',
      'async', 'await', 'try', 'catch', 'finally', 'throw', 'new'
    ];
    
    const parts = text.split(/(\s+|[{}()[\];,.]|\/\/.*$)/);
    
    return parts.map((part, index) => {
      const key = `${part}-${index}`;
      
      // Comments
      if (part.startsWith('//')) {
        return <span key={key} className="text-gray-500 italic">{part}</span>;
      }
      
      // Strings
      if (/^["'`].*["'`]$/.test(part)) {
        return <span key={key} className="text-green-400">{part}</span>;
      }
      
      // Keywords
      if (keywords.includes(part)) {
        return <span key={key} className="text-blue-400 font-medium">{part}</span>;
      }
      
      // JSX tags
      if (/^<\/?[a-zA-Z]/.test(part)) {
        return <span key={key} className="text-red-400">{part}</span>;
      }
      
      // Numbers
      if (/^\d+\.?\d*$/.test(part)) {
        return <span key={key} className="text-orange-400">{part}</span>;
      }
      
      return <span key={key}>{part}</span>;
    });
  };

  return (
    <span className="flex-1 text-foreground leading-relaxed">
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

  const developer = {
    name: "Full-Stack Developer",
    passion: "Building amazing experiences",
    focus: "Performance & User Experience"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="portfolio"
    >
      <h1>{developer.name}</h1>
      <p>{developer.passion}</p>
      <div className="skills">
        {skills.map(skill => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
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
      animate="animate"
      variants={{
        initial: { y: 20, opacity: 0 },
        animate: {
          y: 0,
          opacity: 1,
          transition: { delay: 0.8, duration: 0.8, ease: "easeOut" },
        },
      }}
      className={cn("relative group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        animate={{ 
          y: [0, -10, 0],
          rotateX: isHovered ? 2 : 0,
          rotateY: isHovered ? -2 : 0,
        }}
        transition={{ 
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotateX: { duration: 0.3 },
          rotateY: { duration: 0.3 }
        }}
        className="rounded-xl border border-primary/20 bg-background/80 backdrop-blur-sm shadow-2xl shadow-primary/10 overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Window Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-primary/20 bg-muted/50">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500 shadow-sm"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500 shadow-sm"></span>
            <span className="h-3 w-3 rounded-full bg-green-500 shadow-sm"></span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Terminal className="h-4 w-4" />
            <span className="font-mono">{filename}</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={copyToClipboard}
              className="h-8 w-8 p-0 hover:bg-primary/10"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </motion.div>
        </div>

        {/* Code Content */}
        <div className="relative">
          <pre className="p-4 text-sm font-mono overflow-x-auto max-h-96 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
            <code className="block">
              {lines.map((line, index) => (
                <motion.div
                  key={`line-${index}-${line.slice(0, 10)}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.05, duration: 0.3 }}
                  className="flex items-start gap-4 hover:bg-primary/5 px-2 py-0.5 rounded transition-colors"
                >
                  {showLineNumbers && (
                    <span className="text-muted-foreground/60 text-xs font-mono select-none w-8 text-right flex-shrink-0 pt-0.5">
                      {index + 1}
                    </span>
                  )}
                  <CodeLine content={line} />
                </motion.div>
              ))}
            </code>
          </pre>
          
          {/* Gradient overlay for scroll indication */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
        </div>

        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-xl border border-primary/30 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'linear-gradient(45deg, transparent, rgba(var(--primary), 0.1), transparent)',
          }}
        />
      </motion.div>

      {/* Copy feedback */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{ 
          opacity: copied ? 1 : 0, 
          y: copied ? -10 : 10,
          scale: copied ? 1 : 0.8
        }}
        className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium shadow-lg"
      >
        Copied!
      </motion.div>
    </motion.div>
  );
}
