"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  aboutNarrative,
  projects,
  skillsSummary,
} from "@/lib/portfolio-content";

type TermLine =
  | { kind: "out"; text: string; key: string }
  | { kind: "cmd"; text: string; key: string };

const WELCOME: TermLine[] = [
  {
    kind: "out",
    key: "w1",
    text: 'Welcome to safwaan.sh terminal v1.0\nType "help" for available commands or just explore!',
  },
];

const MISSION_TEXT =
  "Mission: reduce dangerous manual labor through autonomous robotics and democratize access to AI — seven years in competitive robotics and counting.";

function buildFileMap(): Record<string, string> {
  const map: Record<string, string> = {
    "intro.txt": aboutNarrative,
    "mission.txt": MISSION_TEXT,
    "skills.txt": skillsSummary.replace(/ · /g, "\n"),
  };
  for (const p of projects) {
    map[`${p.id}.txt`] = p.front;
  }
  return map;
}

const FILE_MAP = buildFileMap();
const LS_NAMES = Object.keys(FILE_MAP).sort();

function helpText(): string {
  return [
    "Available commands:",
    "  help          Show this message",
    "  ls            List files in ~",
    "  cat <file>    Print file contents",
    "  clear         Clear the terminal",
  ].join("\n");
}

function runShell(input: string): string[] {
  const raw = input.trim();
  if (!raw) return [];
  const parts = raw.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const arg = parts.slice(1).join(" ");

  if (cmd === "help") return [helpText()];
  if (cmd === "ls") return [LS_NAMES.join("  ")];
  if (cmd === "clear") return ["__CLEAR__"];
  if (cmd === "cat") {
    if (!arg) return ["cat: missing operand"];
    const name = arg.replace(/^\.\//, "");
    const body = FILE_MAP[name];
    if (!body) return [`cat: ${name}: No such file or directory`];
    return [body];
  }
  return [`Command not found: ${parts[0]}. Type 'help' for commands.`];
}

export function TerminalHero() {
  const [lines, setLines] = useState<TermLine[]>(WELCOME);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [lines]);

  const onSubmit = useCallback(() => {
    const cmd = value;
    setValue("");
    const cmdKey = `c-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    setLines((prev) => {
      const outs = runShell(cmd);
      if (outs[0] === "__CLEAR__") return [...WELCOME];
      const next: TermLine[] = [
        ...prev,
        { kind: "cmd", text: cmd, key: cmdKey },
      ];
      outs.forEach((block, i) => {
        next.push({
          kind: "out",
          text: block,
          key: `o-${cmdKey}-${i}`,
        });
      });
      return next;
    });
  }, [value]);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pt-8 pb-2">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="terminal-font rounded-xl overflow-hidden border border-zinc-800/90 shadow-[0_24px_80px_-24px_rgba(99,102,241,0.25)]"
      >
        {/* Title bar */}
        <div className="flex h-9 items-center gap-2 border-b border-zinc-800/80 bg-[#161b22] px-3 font-mono">
          <span className="inline-flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </span>
          <p className="flex-1 text-center font-mono text-[11px] text-zinc-400 tracking-wide">
            safwaan@terminal ~ % sh
          </p>
          <span className="w-14" aria-hidden />
        </div>

        {/* Body */}
        <div
          ref={scrollRef}
          className="terminal-scroll max-h-[min(420px,55vh)] overflow-y-auto bg-[#0d1117] px-4 py-3"
        >
          <AnimatePresence initial={false}>
            {lines.map((line, i) => (
              <motion.div
                key={line.key}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: Math.min(i * 0.02, 0.15) }}
                className="mb-2 font-mono text-[13px] leading-relaxed"
              >
                {line.kind === "cmd" ? (
                  <p className="text-zinc-100">
                    <span className="text-[#4ade80]">$</span> {line.text}
                  </p>
                ) : (
                  <pre className="whitespace-pre-wrap text-[#4ade80] font-mono">
                    {line.text}
                  </pre>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Input row */}
          <div className="flex items-center gap-2 font-mono text-[13px] pt-1">
            <span className="shrink-0 text-[#4ade80]">$</span>
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  onSubmit();
                }
              }}
              className="flex-1 min-w-0 bg-transparent text-zinc-300 outline-none placeholder:text-zinc-600"
              placeholder="type a command..."
              spellCheck={false}
              autoCapitalize="off"
              aria-label="Terminal input"
            />
            <span
              className="inline-block h-4 w-2 shrink-0 bg-[#4ade80] animate-pulse"
              aria-hidden
            />
          </div>
        </div>
      </motion.div>

      <p className="mt-4 text-center text-xs text-zinc-500">
        <span className="mr-1" aria-hidden>
          💡
        </span>
        Try typing{" "}
        <kbd className="rounded border border-zinc-700 bg-zinc-900/80 px-1.5 py-0.5 font-mono text-zinc-400">
          ls
        </kbd>{" "}
        to see more files, or{" "}
        <kbd className="rounded border border-zinc-700 bg-zinc-900/80 px-1.5 py-0.5 font-mono text-zinc-400">
          help
        </kbd>{" "}
        for commands
      </p>
    </div>
  );
}
