"use client";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { TbCode } from "react-icons/tb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Internal interface for the visualization, extending the global TechItem
interface OrbitalItem extends TechItem {
  id: number;
  relatedIds: number[];
  status: "proficient" | "learning" | "mastered";
  level: number; // 0-100
}

interface RadialOrbitalTechStackProps {
  items: TechItem[];
}

const categoryStyles = {
  frontend: {
    textColor: "text-blue-400",
    bg: "bg-blue-500/20",
    border: "border-blue-400",
    borderOpacity: "/70",
    shadow: "shadow-blue-400/30",
    highlightBg: "bg-blue-500/30",
    highlightBorder: "border-blue-300",
    accent: "from-blue-400 via-blue-500 to-blue-600",
    hoverBg: "bg-blue-500/10",
  },
  backend: {
    textColor: "text-green-400",
    bg: "bg-green-500/20",
    border: "border-green-400",
    borderOpacity: "/70",
    shadow: "shadow-green-400/30",
    highlightBg: "bg-green-500/30",
    highlightBorder: "border-green-300",
    accent: "from-green-400 via-green-500 to-green-600",
    hoverBg: "bg-green-500/10",
  },
  database: {
    textColor: "text-purple-400",
    bg: "bg-purple-500/20",
    border: "border-purple-400",
    borderOpacity: "/70",
    shadow: "shadow-purple-400/30",
    highlightBg: "bg-purple-500/30",
    highlightBorder: "border-purple-300",
    accent: "from-purple-400 via-purple-500 to-purple-600",
    hoverBg: "bg-purple-500/10",
  },
  devops: {
    textColor: "text-orange-400",
    bg: "bg-orange-500/20",
    border: "border-orange-400",
    borderOpacity: "/70",
    shadow: "shadow-orange-400/30",
    highlightBg: "bg-orange-500/30",
    highlightBorder: "border-orange-300",
    accent: "from-orange-400 via-orange-500 to-orange-600",
    hoverBg: "bg-orange-500/10",
  },
  cloud: {
    textColor: "text-cyan-400",
    bg: "bg-cyan-500/20",
    border: "border-cyan-400",
    borderOpacity: "/70",
    shadow: "shadow-cyan-400/30",
    highlightBg: "bg-cyan-500/30",
    highlightBorder: "border-cyan-300",
    accent: "from-cyan-400 via-cyan-500 to-cyan-600",
    hoverBg: "bg-cyan-500/10",
  },
  default: {
    textColor: "text-gray-200",
    bg: "bg-white/20",
    border: "border-white",
    borderOpacity: "/60",
    shadow: "shadow-white/30",
    highlightBg: "bg-white/30",
    highlightBorder: "border-white",
    accent: "from-gray-400 via-gray-500 to-gray-600",
    hoverBg: "bg-white/10",
  },
} as const;

type CategoryStyle = typeof categoryStyles[keyof typeof categoryStyles];

export default function RadialOrbital({ items }: RadialOrbitalTechStackProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {},
  );
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLButtonElement | null>>({});

  const closeExpandedItems = useCallback(() => {
    setExpandedItems({});
    setActiveNodeId(null);
    setPulseEffect({});
    setAutoRotate(true);
  }, []);

  const handleContainerClick = (e: React.MouseEvent<HTMLElement>) => {
    // Check if click is on the container itself or orbit background (not on nodes or cards)
    const target = e.target as HTMLElement;
    const isClickOnNode = target.closest('button[aria-label*="View details"]');
    const isClickOnCard = target.closest('[role="dialog"], .card, [class*="Card"]');
    
    if (!isClickOnNode && !isClickOnCard) {
      closeExpandedItems();
    }
  };

  // Global ESC key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && Object.keys(expandedItems).length > 0) {
        closeExpandedItems();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [expandedItems, closeExpandedItems]);

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const orbitalItems = useMemo(() => {
    return items.map((item, index) => {
      // Find related items by category
      const relatedIds = items
        .map((other, idx) =>
          other.category === item.category && idx !== index ? idx : -1,
        )
        .filter((id) => id !== -1);

      return {
        ...item,
        id: index,
        relatedIds,
        status: "proficient" as const,
        level: Math.floor(Math.random() * 40) + 60,
      };
    });
  }, [items]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = orbitalItems.findIndex((item) => item.id === nodeId);
    const totalNodes = items.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 280;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)),
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = orbitalItems.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  // Get status badge styles
  const getStatusStyles = (status: OrbitalItem["status"]): string => {
    const styles = {
      mastered: "text-primary bg-primary/10 border-primary",
      proficient: "text-blue-400 bg-blue-400/10 border-blue-400",
      learning: "text-yellow-400 bg-yellow-400/10 border-yellow-400",
    };
    return styles[status] || "text-gray-400 bg-gray-400/10 border-gray-400";
  };

  // Get category style object
  const getCategoryStyle = (category: string): CategoryStyle =>
    categoryStyles[category as keyof typeof categoryStyles] ??
    categoryStyles.default;

  return (
    <section
      className="w-full h-[500px] md:h-[600px] lg:h-[700px] flex flex-col items-center justify-center overflow-visible py-8"
      aria-label="Tech stack orbital visualization"
    >
      <div 
        className="relative w-full max-w-4xl h-full flex items-center justify-center overflow-visible py-8"
        ref={containerRef}
        onClick={handleContainerClick}
        onKeyDown={() => {
          // Keyboard handling is done via global ESC listener
        }}
      >
        <div
          className="absolute w-full h-full flex items-center justify-center overflow-visible"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          <div className="absolute flex items-center justify-center z-10">
            <div className="relative w-20 h-20 flex items-center justify-center">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-xl animate-pulse"></div>
              
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary/60"></div>
              </div>
              
              {/* Glassmorphism container */}
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 backdrop-blur-md border border-primary/20 shadow-lg shadow-primary/10 flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-full bg-primary/10 blur-sm group-hover:bg-primary/20 transition-colors duration-300"></div>
                
                {/* Icon */}
                <TbCode 
                  className="relative z-10 w-8 h-8 text-primary group-hover:text-primary/90 transition-colors duration-300" 
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className="absolute w-[560px] h-[560px] rounded-full border border-primary/5"></div>

          {orbitalItems.map((item, index) => {
            const position = calculateNodePosition(index, orbitalItems.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;
            const categoryStyle = getCategoryStyle(item.category);

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            // Circle classes based on state and category
            const circleBgClass = isExpanded
              ? "bg-white"
              : isRelated
                ? categoryStyle.highlightBg
                : categoryStyle.bg;
            const circleTextClass = isExpanded ? "text-black" : categoryStyle.textColor;
            const circleBorderClass = isExpanded
              ? "border-white"
              : isRelated
                ? categoryStyle.highlightBorder
                : `${categoryStyle.border}${categoryStyle.borderOpacity}`;
            const circleShadowClass = isExpanded
              ? "shadow-lg shadow-white/30"
              : categoryStyle.shadow;

            return (
              <button
                key={item.id}
                type="button"
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute transition-all duration-700 cursor-pointer bg-transparent border-none p-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-transparent rounded-full"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleItem(item.id);
                  }
                }}
                aria-label={`View details for ${item.name}`}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse duration-1000" : ""
                    }`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.level * 0.5 + 40}px`,
                    height: `${item.level * 0.5 + 40}px`,
                    left: `-${(item.level * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.level * 0.5 + 40 - 40) / 2}px`,
                  }}
                ></div>

                <div
                  className={cn(
                    `${circleBgClass} ${circleTextClass} ${circleBorderClass} ${circleShadowClass} w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 transform`,
                    isExpanded ? "scale-150" : "",
                    isRelated ? "animate-pulse" : ""
                  )}
                >
                  <Icon
                    size={20}
                    aria-hidden="true"
                  />
                </div>
                <div
                  className={cn(
                    "absolute top-12 whitespace-nowrap text-xs font-semibold tracking-wider transition-all duration-300",
                    isExpanded ? "text-black scale-125" : categoryStyle.textColor
                  )}
                >
                  {item.name}
                </div>

                {isExpanded && (
                  <Card 
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 w-64 bg-black/90 backdrop-blur-lg shadow-xl shadow-white/10 overflow-visible z-50",
                      `border ${categoryStyle.border}/20`,
                      position.y > 0 ? "bottom-20" : "top-20"
                    )}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className={cn(
                      "absolute left-1/2 -translate-x-1/2 w-px h-3 bg-white/50",
                      position.y > 0 ? "-bottom-3" : "-top-3"
                    )}></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge
                          className={`px-2 text-xs ${getStatusStyles(
                            item.status,
                          )}`}
                        >
                          {item.status}
                        </Badge>
                        <span className={`text-[10px] font-mono uppercase ${categoryStyle.textColor}/80`}>
                          {item.category}
                        </span>
                      </div>
                      <CardTitle className="text-sm mt-2 text-white">
                        {item.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-white/80">
                      <p>{item.description}</p>

                      <div className="mt-4 pt-3 border-t border-white/10">
                        <div className="flex justify-between items-center text-xs mb-1">
                          <span className="flex items-center">
                            <Zap size={10} className="mr-1" />
                             Level
                          </span>
                          <span className="font-mono">{item.level}%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${categoryStyle.accent}`}
                            style={{ width: `${item.level}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-white/10">
                          <div className="flex items-center mb-2">
                            <Link size={10} className="text-white/70 mr-1" />
                            <h4 className="text-xs uppercase tracking-wider font-medium text-white/70">
                              Connected Nodes
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = orbitalItems.find((i) => i.id === relatedId);
                              if (!relatedItem) return null;
                              const relatedCategoryStyle = getCategoryStyle(relatedItem.category);
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className={cn(
                                    "flex items-center h-6 px-2 py-0 text-xs rounded-none bg-transparent hover:text-white transition-all",
                                    `${relatedCategoryStyle.textColor}/80`,
                                    `border ${relatedCategoryStyle.border}/30`,
                                    `hover:${relatedCategoryStyle.hoverBg}`
                                  )}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                  aria-label={`View ${relatedItem.name}`}
                                >
                                  {relatedItem.name}
                                  <ArrowRight
                                    size={8}
                                    className="ml-1 text-white/60" aria-hidden="true"
                                  />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}