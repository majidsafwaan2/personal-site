"use client";

import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Text } from "@mantine/core";
import { motion } from "framer-motion";
import type { ModalItem } from "@/lib/portfolio-content";
import { siteLinks } from "@/lib/site-config";

type Props = {
  item: ModalItem;
  index: number;
};

export function PortfolioCard({ item, index }: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  const href =
    item.linkHref && siteLinks[item.linkHref]
      ? siteLinks[item.linkHref]
      : null;

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, delay: index * 0.05 }}
        className="group relative cursor-pointer"
        onClick={open}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            open();
          }
        }}
        role="button"
        tabIndex={0}
      >
        <div className="relative rounded-xl border border-zinc-800/90 bg-zinc-900/40 px-4 py-4 pb-9 transition-all duration-300 hover:border-indigo-500/80 hover:bg-zinc-900/70 hover:shadow-[0_0_0_1px_rgba(99,102,241,0.35)]">
          <h3 className="text-base font-semibold text-zinc-100 mb-1.5">
            {item.title}
          </h3>
          <p className="text-sm leading-snug text-zinc-400">
            {item.front}
          </p>
          <span className="pointer-events-none absolute bottom-3 right-3 text-xs font-medium text-indigo-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Learn more →
          </span>
        </div>
      </motion.article>

      <Modal
        opened={opened}
        onClose={close}
        title={item.title}
        size="lg"
        radius="md"
        overlayProps={{ backgroundOpacity: 0.65, blur: 4 }}
        classNames={{
          content: "bg-[#1a1a1a] border border-zinc-800",
          header: "bg-[#1a1a1a] border-b border-zinc-800",
          title: "text-zinc-100 font-semibold",
        }}
      >
        <Text className="text-zinc-300 leading-relaxed">{item.modalBody}</Text>
        <div className="mt-6 flex flex-wrap gap-3">
          {href && item.linkLabel ? (
            <Button
              component="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              variant="filled"
              color="indigo"
            >
              {item.linkLabel}
            </Button>
          ) : null}
          <Button variant="default" onClick={close} color="gray">
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
}
