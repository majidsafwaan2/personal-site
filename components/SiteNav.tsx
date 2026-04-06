"use client";

import { Button } from "@mantine/core";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#awards", label: "Awards" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#121212]/85 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2.5">
        <Button
          component="a"
          href="#"
          variant="subtle"
          color="gray"
          size="compact-sm"
          classNames={{
            root: "text-zinc-100 font-semibold hover:bg-zinc-800/50 px-2",
            label: "text-sm",
          }}
        >
          Safwaan Majid
        </Button>
        <div className="flex flex-wrap items-center justify-end gap-0.5 sm:gap-1">
          {links.map((l) => (
            <Button
              key={l.href}
              component="a"
              href={l.href}
              variant="subtle"
              color="gray"
              size="compact-sm"
              classNames={{
                root: "text-zinc-400 hover:text-indigo-300 hover:bg-zinc-800/60 px-2 sm:px-3",
                label: "text-xs sm:text-sm font-medium",
              }}
            >
              {l.label}
            </Button>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
