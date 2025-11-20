"use client";

import { cn } from "@/lib/utils";

interface GlitchTextProps {
    text: string;
    className?: string;
}

export function GlitchText({ text, className }: GlitchTextProps) {
    return (
        <div className={cn("relative inline-block overflow-hidden", className)}>
            <span className="absolute top-0 left-0 -z-10 text-primary/20 animate-pulse translate-x-[-2px] translate-y-[2px]" aria-hidden="true">
                {text}
            </span>
            <span className="absolute top-0 left-0 -z-10 text-primary/10 animate-pulse translate-x-[2px] translate-y-[-2px] delay-75" aria-hidden="true">
                {text}
            </span>
            <span className="relative z-10">{text}</span>
        </div>
    );
}
