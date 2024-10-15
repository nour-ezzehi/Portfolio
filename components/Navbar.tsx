"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/NavbarMenu";
import { cn } from "@/lib/utils";
import Icon from "@/public/innovation-icon.svg"

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-0 inset-x-0 w-10/12 mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="absolute left-10 flex flex-row space-x-1"><Icon width={30} height={30} /><span className="text-font text-2xl">NOUR</span></div>
        <MenuItem setActive={setActive} active={active} item="About">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Skills">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Resume">
        </MenuItem>
      </Menu>
    </div>
  );
}
