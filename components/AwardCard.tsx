"use client";

import { motion } from "framer-motion";
import type { AwardItem } from "@/lib/portfolio-content";

type Props = {
  item: AwardItem;
  index: number;
};

export function AwardCard({ item, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-5"
    >
      <h3 className="text-lg font-semibold text-zinc-100 mb-2">{item.title}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">{item.front}</p>
    </motion.article>
  );
}
