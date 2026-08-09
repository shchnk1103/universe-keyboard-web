"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Link, usePathname } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig, downloadHref } from "@/lib/site";
import { cn } from "@/lib/cn";
import type { AppLocale } from "@/i18n/routing";

const navKeys = [
  { key: "features", href: "/features" },
  { key: "getStarted", href: "/get-started" },
  { key: "changelog", href: "/changelog" },
  { key: "about", href: "/about" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const locale = useLocale() as AppLocale;
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const otherLocale: AppLocale = locale === "zh" ? "en" : "zh";

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/75 backdrop-blur-xl">
      <Container className="flex h-14 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight"
          >
            <span className="relative flex h-6 w-6 items-center justify-center rounded-[7px] bg-foreground text-[10px] font-bold text-background shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]">
              U
              <span className="absolute -inset-px rounded-[7px] opacity-0 transition group-hover:opacity-100 group-hover:shadow-[0_0_20px_var(--accent-glow)]" />
            </span>
            <span className="hidden sm:inline">{siteConfig.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navKeys.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm transition-colors",
                    active
                      ? "bg-accent-soft text-foreground"
                      : "text-foreground-secondary hover:text-foreground",
                  )}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Link
            href={pathname}
            locale={otherLocale}
            className="rounded-full px-2.5 py-1.5 text-xs font-medium text-foreground-secondary transition hover:bg-accent-soft hover:text-foreground"
            aria-label={otherLocale === "zh" ? "中文" : "English"}
          >
            {otherLocale === "zh" ? "中文" : "EN"}
          </Link>

          <button
            type="button"
            onClick={() =>
              setTheme(
                resolvedTheme === "dark" || theme === "dark" ? "light" : "dark",
              )
            }
            className="rounded-full p-2 text-foreground-secondary transition hover:bg-accent-soft hover:text-foreground"
            aria-label="Toggle theme"
          >
            <ThemeIcon />
          </button>

          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full p-2 text-foreground-secondary transition hover:bg-accent-soft hover:text-foreground sm:inline-flex"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>

          <Button
            href={downloadHref()}
            variant="primary"
            className="hidden !px-3.5 !py-1.5 text-xs sm:inline-flex"
          >
            {t("download")}
          </Button>

          <button
            type="button"
            className="rounded-full p-2 text-foreground-secondary md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navKeys.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-foreground-secondary hover:bg-accent-soft hover:text-foreground"
              >
                {t(item.key)}
              </Link>
            ))}
            <Link
              href="/privacy"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-foreground-secondary hover:bg-accent-soft hover:text-foreground"
            >
              {t("privacy")}
            </Link>
            <Button href={downloadHref()} className="mt-2 w-full">
              {t("download")}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}

function ThemeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="dark:hidden"
      />
      <path
        d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        className="hidden dark:block"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10Z" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
