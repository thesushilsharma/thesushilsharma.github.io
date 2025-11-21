import { motion } from "motion/react";

// Geometric Grid Paths
export function GeometricPaths() {
  const gridSize = 40
  const paths = []
  
  for (let x = 0; x < 20; x++) {
    for (let y = 0; y < 12; y++) {
      if (Math.random() > 0.7) {
        paths.push({
          id: `grid-${x}-${y}`,
          d: `M${x * gridSize},${y * gridSize} L${(x + 1) * gridSize},${y * gridSize} L${(x + 1) * gridSize},${(y + 1) * gridSize} L${x * gridSize},${(y + 1) * gridSize} Z`,
          delay: Math.random() * 5,
        })
      }
    }
  }

  return (
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 480">
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0], 
            opacity: [0, 0.6, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 8,
            delay: path.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  )
}