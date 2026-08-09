"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["⇧", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
  ["123", "中", "空格", "↵"],
];

const candidates = ["宇宙", "键盘", "输入", "法", "Universe"];

export function KeyboardMock({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]",
        className,
      )}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, var(--accent-soft), transparent)",
        }}
      />

      <div className="relative bg-[var(--keyboard-bg)] p-3 sm:p-4">
        {/* Candidate bar */}
        <div className="mb-3 flex items-center gap-2 overflow-hidden rounded-lg bg-black/5 px-2 py-1.5 dark:bg-white/5">
          {candidates.map((c, i) => (
            <motion.span
              key={c}
              className={cn(
                "shrink-0 rounded-md px-2.5 py-1 text-xs sm:text-sm",
                i === 0
                  ? "bg-[var(--keyboard-text)] text-[var(--keyboard-bg)]"
                  : "text-[var(--keyboard-text)]/80",
              )}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.06 }}
            >
              {c}
            </motion.span>
          ))}
        </div>

        {/* Composition hint */}
        <div className="mb-2 px-1 font-mono text-[11px] text-[var(--keyboard-text)]/50">
          yu zhou
        </div>

        <div className="flex flex-col gap-1.5 sm:gap-2">
          {rows.map((row, ri) => (
            <div key={ri} className="flex justify-center gap-1 sm:gap-1.5">
              {row.map((key, ki) => {
                const wide =
                  key === "空格" || key === "123" || key === "↵" || key === "⇧";
                const fn =
                  key === "⇧" ||
                  key === "⌫" ||
                  key === "123" ||
                  key === "中" ||
                  key === "↵";
                return (
                  <motion.div
                    key={`${ri}-${key}`}
                    className={cn(
                      "flex h-9 items-center justify-center rounded-[7px] text-[11px] font-medium sm:h-11 sm:rounded-[9px] sm:text-[13px]",
                      wide ? "min-w-[3rem] flex-1 sm:min-w-[4rem]" : "w-7 sm:w-9",
                      key === "空格" && "flex-[2.5]",
                      fn
                        ? "bg-[var(--keyboard-key-fn)] text-[var(--keyboard-text)]"
                        : "bg-[var(--keyboard-key)] text-[var(--keyboard-text)]",
                      "shadow-[0_1px_0_rgba(0,0,0,0.12)]",
                    )}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 + ri * 0.05 + ki * 0.012 }}
                  >
                    {key}
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
