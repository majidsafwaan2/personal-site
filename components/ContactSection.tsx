"use client";

import { Button } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconBriefcase,
} from "@tabler/icons-react";
import { siteLinks } from "@/lib/site-config";

const btnClass = {
  root: "border-zinc-700 bg-zinc-900/50 hover:border-indigo-500/60 hover:bg-zinc-800/60",
  label: "text-zinc-200",
};

export function ContactSection() {
  return (
    <section id="contact" className="mt-16 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-zinc-100 border-b border-zinc-800 pb-2 mb-6">
        Contact
      </h2>
      <p className="mb-6 max-w-xl text-sm text-zinc-400">
        Reach out for collaborations, robotics, or engineering opportunities.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button
          component="a"
          href={siteLinks.email}
          variant="filled"
          color="indigo"
          leftSection={<IconMail size={18} stroke={1.5} />}
        >
          Email
        </Button>
        <Button
          component="a"
          href={siteLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          variant="default"
          leftSection={<IconBrandGithub size={18} stroke={1.5} />}
          classNames={btnClass}
        >
          GitHub
        </Button>
        <Button
          component="a"
          href={siteLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          variant="default"
          leftSection={<IconBrandLinkedin size={18} stroke={1.5} />}
          classNames={btnClass}
        >
          LinkedIn
        </Button>
        <Button
          component="a"
          href={siteLinks.devpost}
          target="_blank"
          rel="noopener noreferrer"
          variant="default"
          leftSection={<IconBriefcase size={18} stroke={1.5} />}
          classNames={btnClass}
        >
          Devpost
        </Button>
      </div>
    </section>
  );
}
