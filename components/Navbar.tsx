"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/NavbarMenu";
import { cn } from "@/lib/utils";
import Icon from "@/public/innovation-icon.svg"
import Link from "next/link";
import { PiReadCvLogo } from "react-icons/pi";
import { HiMenu, HiX } from "react-icons/hi";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false); // State for the mobile menu

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={cn("fixed top-0 inset-x-0 w-11/12 mx-auto z-50 sm:pb-4 max-lg:shadow-2xl", className)}
    >
      <Menu setActive={setActive}>
      <Link href="#/" className="absolute left-10 flex flex-row space-x-1" onClick={() => setActive(null)}>
          <Icon width={30} height={30} />
          <span className="text-font text-2xl">NOUR</span>
        </Link>
        <div className="lg:hidden absolute right-10 max-md:pb-4">
        <button onClick={handleMenuToggle}>
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />} {/* Toggle icon */}
        </button>
      </div>
      <div className={cn("lg:flex lg:flex-row lg:space-x-8", isOpen ? "flex flex-col space-y-4 mt-12" : "hidden")}>
        <MenuItem setActive={setActive} active={active} item="About" href="#about">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Skills" href="#skills">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services" href="#services">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact" href="#contact">
        </MenuItem>
        <div className="flex flex-row">
          <MenuItem setActive={setActive} active={active} item="Resume" href="/resume.pdf" isResume={true}>
          </MenuItem>
          <PiReadCvLogo className="ml-2 mt-1"/>
        </div>
        </div>
      </Menu>
    </div>
  );
}
