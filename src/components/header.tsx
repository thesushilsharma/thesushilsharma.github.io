"use client";

import { useState, useEffect } from "react";
import { motion, Variants, useScroll, useMotionValueEvent } from "motion/react";
import { TextReveal } from "./animations/typography";
import Link from "next/link";
import { Transition } from "./animations/transitions";
import { MoveUpRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface HeaderProps {
  social: SocialLink[];
}
const Header = ({ social }: HeaderProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();
  
  // Track scroll position to change header appearance
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const MotionLink = motion.create(Link);

  const variants: Variants = {
    open: {
      clipPath: `inset(0% 0% 0% 0% round ${isMobile ? 0 : "24px"})`,
      transition: { duration: 0.75, type: "tween", ease: "easeOut" },
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
    <motion.header 
      className={cn(
        "fixed top-0 right-0 z-20 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "md:mt-12 md:mr-12"
      )}
    >
      <div className={cn(
        "flex items-center justify-between w-full px-6 py-4",
        isScrolled ? "md:px-12" : ""
      )}>
        <Transition className={cn(
          "z-30",
          isScrolled ? "" : "fixed md:top-8 top-6 md:left-8 left-6"
        )}>
          <Link href={"/"}>
            <TextReveal className="font-semibold">THESUSHILSHARMA</TextReveal>
          </Link>
        </Transition>
      </div>
      <motion.div
        initial={false}
        animate={isActive ? "open" : "closed"}
        variants={variants}
        className={cn(
          "absolute top-0 right-0 w-dvw md:w-[480px] h-dvh bg-primary",
          isScrolled ? "" : "md:-top-6 md:-right-6 md:h-[calc(100dvh_-_2.5rem)]"
        )}
      >
        {isActive && (
          <nav className="flex justify-between flex-col w-full h-full px-10 pt-[100px] pb-[50px]">
            <div className="flex gap-2 flex-col">
              {navLinks.map((link, i) => {
                const { title, href } = link;
                return (
                  <div
                    key={`b_${i}`}
                    className=""
                    onClick={() => setIsActive(false)}
                  >
                    <Link
                      href={href}
                      className="flex flex-wrap overflow-hidden"
                    >
                      <motion.div
                        variants={perspective}
                        custom={i}
                        initial="initial"
                        animate="enter"
                        whileHover="whileHover"
                        whileTap="whileHover"
                        exit="exit"
                        className="text-5xl text-background flex items-center justify-between"
                      >
                        <motion.span
                          variants={{
                            initial: { x: -20 },
                            whileHover: { x: 0 },
                          }}
                        >
                          <MoveUpRight />
                        </motion.span>
                        <motion.span
                          variants={{
                            initial: { x: 0 },
                            whileHover: { x: 20 },
                          }}
                        >
                          {title}
                        </motion.span>
                      </motion.div>
                    </Link>
                  </div>
                );
              })}
            </div>
            <motion.div className="flex flex-wrap">
              {social.map((link, i) => {
                const { platform, _id, url } = link;
                return (
                  <MotionLink
                    href={url}
                    target="_blank"
                    className=" w-1/2 mt-1 text-background"
                    variants={slideIn}
                    custom={i}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    key={_id}
                  >
                    <TextReveal>{platform}</TextReveal>
                  </MotionLink>
                );
              })}
            </motion.div>
          </nav>
        )}
      </motion.div>
      <Button
        isActive={isActive}
        isScrolled={isScrolled}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </motion.header>
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
    <div className={cn(
      "absolute w-[100px] h-10 rounded-full overflow-hidden cursor-pointer transition-all duration-300",
      isScrolled 
        ? "md:top-4 top-4 right-4 md:right-12" 
        : "md:top-0 top-4 right-4 md:right-0"
    )}>
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.div
          className="bg-primary h-full w-full grid place-items-center text-background hover:bg-primary/90 transition-colors"
          onClick={() => {
            toggleMenu();
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <TextReveal>Menu</TextReveal>
        </motion.div>
        <motion.div
          className="bg-black h-full w-full grid place-items-center text-background hover:bg-black/90 transition-colors"
          onClick={() => {
            toggleMenu();
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <TextReveal>Close</TextReveal>
        </motion.div>
      </motion.div>
    </div>
  );
}

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Academics",
    href: "#academic-experience",
  },
  {
    title: "Experience",
    href: "#academic-experience",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Blog",
    href: "#blog",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const perspective : Variants = {
  initial: {
    y: 50,
  },
  enter: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
  },
};

const slideIn: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
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
