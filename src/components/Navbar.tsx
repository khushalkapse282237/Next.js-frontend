"use client"; // this we have to write to use the particular component or file in client side
// after this we can use the hooks and other client side features

import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import Link from "next/link";
import { cn } from "@/utils/cn";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item={"Home"}>
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item={"Our Courses"}>
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Advanced Composition</HoveredLink>
            <HoveredLink href="/courses">Songwriting</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>
          </div>
        </MenuItem>

        <Link href="/contact">
          <MenuItem setActive={setActive} active={active} item={"Contact"}>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
