"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import type { Variants } from "motion/react";
import { navLinks, socialLinks } from "@/config/site";
import { TextReveal } from "./animations/typography";

interface HeaderProps {
  social?: typeof socialLinks;
}

// useIsMobile hook
function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia("(max-width: 767px)");
    const onChange = () => {
      setIsMobile(window.innerWidth < 768);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < 768);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

const Header = ({ social = socialLinks }: HeaderProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();

  // Track scroll position
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const menuVariants: Variants = {
    open: {
      scale: 1,
      opacity: 1,
      clipPath: `inset(0% 0% 0% 0% round ${isMobile ? 0 : "24px"})`,
      pointerEvents: "auto",
      transition: {
        scale: {
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20,
        },
        clipPath: {
          duration: 0.8,
          ease: [0.34, 1.56, 0.64, 1],
        },
        opacity: {
          duration: 0.3,
          ease: "easeOut",
        },
      },
    },
    closed: {
      scale: 0,
      opacity: 0,
      clipPath: `circle(0% at 100% 0%)`,
      pointerEvents: "none",
      transition: {
        scale: {
          duration: 0.6,
          type: "spring",
          stiffness: 200,
          damping: 25,
        },
        clipPath: {
          duration: 0.6,
          ease: [0.76, 0, 0.24, 1],
        },
        opacity: {
          duration: 0.2,
          ease: "easeIn",
        },
      },
    },
  };

  const headerVariants: Variants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const headerBgVariants: Variants = {
    initial: {
      backdropFilter: "blur(0px)",
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    scrolled: {
      backdropFilter: "blur(20px)",
      backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="absolute inset-0"
        variants={headerBgVariants}
        animate={isScrolled ? "scrolled" : "initial"}
      />
      <motion.div
        className="relative flex justify-between items-center p-6 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.a
          href="/"
          className={`text-2xl font-bold transition-colors relative z-10 ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <TextReveal>THESUSHILSHARMA</TextReveal>
        </motion.a>

        <Button
          isActive={isActive}
          toggleMenu={() => setIsActive(!isActive)}
          isScrolled={isScrolled}
        />
      </motion.div>

      <motion.div
        initial={false}
        animate={isActive ? "open" : "closed"}
        variants={menuVariants}
        className="absolute top-0 right-0 md:-top-6 md:-right-6 w-screen md:w-[480px] h-screen md:h-[calc(100vh_-_2.5rem)] bg-gray-900"
        style={{
          transformOrigin: "top right",
        }}
      >
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              key="menu-content"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.2,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className="flex flex-col justify-between h-full p-8"
            >
              <nav className="flex flex-col gap-2 px-10 pt-[100px]">
                {navLinks.map((link, i) => {
                  const { title, href } = link;
                  return (
                    <motion.div
                      key={title}
                      custom={i}
                      variants={perspective}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                    >
                      <motion.a
                        href={href}
                        className="text-4xl md:text-6xl font-bold text-white hover:text-gray-300 transition-colors block"
                        onClick={() => setIsActive(false)}
                        whileHover={{ x: 10, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        {title}
                      </motion.a>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                className="flex gap-6 px-10 pb-[50px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                {social.map((link, i) => {
                  const { platform, _id, url } = link;
                  return (
                    <motion.a
                      key={_id}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      custom={i}
                      variants={slideIn}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      className="text-white hover:text-gray-300 transition-colors flex items-center gap-2"
                      whileHover={{ scale: 1.1, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {platform}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
};

export default Header;

interface ButtonProps {
  isActive: boolean;
  toggleMenu: () => void;
  isScrolled: boolean;
}

function Button({ isActive, toggleMenu, isScrolled }: ButtonProps) {
  const topColor = isScrolled ? "bg-gray-900 text-white" : "bg-white text-gray-900";
  const bottomColor = isActive ? "bg-gray-900 text-white" : "bg-white text-gray-900";

  return (
    <motion.div
      className="relative w-[100px] h-10 rounded-full overflow-hidden cursor-pointer z-10"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ y: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
        style={{ willChange: "transform" }}
      >
        <motion.div
          className={`absolute top-0 left-0 h-full w-full flex items-center justify-center font-medium transition-colors ${topColor}`}
          onClick={toggleMenu}
        >
          <TextReveal>Menu</TextReveal>
        </motion.div>

        <motion.div
          className={`absolute top-full left-0 h-full w-full flex items-center justify-center font-medium transition-colors ${bottomColor}`}
          onClick={toggleMenu}
        >
          <TextReveal>Close</TextReveal>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}


const perspective: Variants = {
  initial: { y: 30, opacity: 0, scale: 0.95 },
  enter: (i: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.3 + i * 0.08,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { 
      duration: 0.3, 
      ease: [0.76, 0, 0.24, 1] 
    },
  },
};

const slideIn: Variants = {
  initial: { opacity: 0, y: 15, scale: 0.9 },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.6 + i * 0.08,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.9,
    transition: { 
      duration: 0.3, 
      ease: [0.76, 0, 0.24, 1] 
    },
  },
};