"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  href,
  isResume,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  href: string;
  isResume?: boolean;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      {isResume ? (
        // External link for resume, handled as an <a> tag
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setActive(item)}
          className="block cursor-pointer text-black hover:opacity-[0.7] dark:text-font"
          transition={transition}
        >
          <div>
            <motion.p>{item}</motion.p>
          </div>
        </motion.a>
      ) : (
        // Internal navigation link handled by Next.js <Link>
        <Link href={href} passHref>
          <div
            onClick={() => setActive(item)}
            className="block cursor-pointer text-black hover:opacity-[0.7] dark:text-font"
          >
            <motion.p transition={transition}>{item}</motion.p>
          </div>
        </Link>
      )}
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-bd dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-3xl border border-transparent dark:bg-black dark:border-white/[0.6] bg-bd shadow-input flex justify-center w-full space-x-6 px-8 p-6 "
    >
      {children}
    </nav>
  );
};

