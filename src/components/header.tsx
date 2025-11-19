"use client";
import { useState } from "react";
import { motion, Variants, useScroll, useMotionValueEvent } from "motion/react";

interface SocialLink {
  _id: string;
  platform: string;
  url: string;
}

interface HeaderProps {
  social: SocialLink[];
}

const Header = ({ social }: HeaderProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  // Track mobile viewport
  useState(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  });

  // Track scroll position
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const variants: Variants = {
    open: {
      clipPath: `inset(0% 0% 0% 0% round ${isMobile ? 0 : "24px"})`,
      transition: {
        duration: 0.75,
        type: "tween",
        ease: "easeOut",
      },
    },
    closed: {
      clipPath: `inset(5% 12% 93% 85% round ${isMobile ? 0 : "24px"})`,
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center p-6 md:p-8">
        <motion.a
          href="/"
          className={`text-2xl font-bold transition-colors ${isScrolled ? "text-gray-900" : "text-white"
            }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          THESUSHILSHARMA
        </motion.a>

        <Button
          isActive={isActive}
          toggleMenu={() => setIsActive(!isActive)}
          isScrolled={isScrolled}
        />
      </div>

      {isActive && (
        <motion.div
          variants={variants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 bg-gray-900 overflow-hidden"
        >
          <div className="flex flex-col justify-center items-center h-full p-8">
            <nav className="flex flex-col gap-4 mb-12">
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
                      className="text-4xl md:text-6xl font-bold text-white hover:text-gray-300 transition-colors"
                      onClick={() => setIsActive(false)}
                      whileHover={{ x: 10 }}
                    >
                      {title}
                    </motion.a>
                  </motion.div>
                );
              })}
            </nav>

            <div className="flex gap-6">
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
                    whileHover={{ scale: 1.1 }}
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
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Header;

function Button({
  isActive,
  toggleMenu,
  isScrolled,
}: {
  isActive: boolean;
  toggleMenu: () => void;
  isScrolled?: boolean;
}) {
  return (
    <div className="relative">
      <motion.button
        className={`px-6 py-3 rounded-full font-medium transition-all ${isActive
          ? "bg-white text-gray-900"
          : isScrolled
            ? "bg-gray-900 text-white"
            : "bg-white text-gray-900"
          }`}
        onClick={toggleMenu}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isActive ? "Close menu" : "Open menu"}
      >
        {isActive ? "Close" : "Menu"}
      </motion.button>
    </div>
  );
}

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "#about" },
  { title: "Academics", href: "#academic-experience" },
  { title: "Experience", href: "#academic-experience" },
  { title: "Projects", href: "#projects" },
  { title: "Blog", href: "#blog" },
  { title: "Contact", href: "#contact" },
];

const perspective: Variants = {
  initial: { y: 50, opacity: 0 },
  enter: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
  },
};

const slideIn: Variants = {
  initial: { opacity: 0, y: 20 },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
  },
};