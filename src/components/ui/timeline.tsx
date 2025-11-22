"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Check, Circle, X } from "lucide-react"

import { cn } from "@/lib/utils"

const Timeline = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col space-y-4", className)}
        {...props}
    />
))
Timeline.displayName = "Timeline"

const TimelineItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("relative flex gap-6 pb-8 last:pb-0", className)}
        {...props}
    />
))
TimelineItem.displayName = "TimelineItem"

const TimelineConnector = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "absolute left-[19px] top-8 -bottom-2 w-px bg-border",
            className
        )}
        {...props}
    />
))
TimelineConnector.displayName = "TimelineConnector"

const timelineIconVariants = cva(
    "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 bg-background shadow-sm transition-colors",
    {
        variants: {
            status: {
                default: "border-primary text-primary",
                completed: "border-primary bg-primary text-primary-foreground",
                "in-progress": "border-blue-500 text-blue-500",
                pending: "border-muted-foreground/50 text-muted-foreground",
                error: "border-destructive text-destructive",
            },
        },
        defaultVariants: {
            status: "default",
        },
    }
)

interface TimelineIconProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof timelineIconVariants> {
    icon?: React.ElementType
}

const TimelineIcon = React.forwardRef<HTMLDivElement, TimelineIconProps>(
    ({ className, status, icon: Icon, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(timelineIconVariants({ status }), className)}
                {...props}
            >
                {children ? (
                    children
                ) : Icon ? (
                    <Icon className="h-5 w-5" />
                ) : status === "completed" ? (
                    <Check className="h-5 w-5" />
                ) : status === "error" ? (
                    <X className="h-5 w-5" />
                ) : (
                    <Circle className="h-4 w-4 fill-current" />
                )}
            </div>
        )
    }
)
TimelineIcon.displayName = "TimelineIcon"

const TimelineContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex-1 pt-1.5", className)} {...props} />
))
TimelineContent.displayName = "TimelineContent"

const TimelineHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center justify-between gap-4 mb-2", className)}
        {...props}
    />
))
TimelineHeader.displayName = "TimelineHeader"

const TimelineTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn("font-semibold leading-none tracking-tight", className)}
        {...props}
    />
))
TimelineTitle.displayName = "TimelineTitle"

const TimelineDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
))
TimelineDescription.displayName = "TimelineDescription"

const TimelineTime = React.forwardRef<
    HTMLTimeElement,
    React.HTMLAttributes<HTMLTimeElement>
>(({ className, ...props }, ref) => (
    <time
        ref={ref}
        className={cn("text-sm text-muted-foreground font-mono", className)}
        {...props}
    />
))
TimelineTime.displayName = "TimelineTime"

export {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineIcon,
    TimelineContent,
    TimelineHeader,
    TimelineTitle,
    TimelineDescription,
    TimelineTime,
}
