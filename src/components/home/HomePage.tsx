"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { KeyboardMock } from "@/components/keyboard/KeyboardMock";
import { downloadHref } from "@/lib/site";

export function HomePage() {
  const t = useTranslations("home");

  const pillars = [
    { title: t("pillar1Title"), body: t("pillar1Body") },
    { title: t("pillar2Title"), body: t("pillar2Body") },
    { title: t("pillar3Title"), body: t("pillar3Body") },
  ];

  const trust = [
    { title: t("trust1Title"), body: t("trust1Body") },
    { title: t("trust2Title"), body: t("trust2Body") },
    { title: t("trust3Title"), body: t("trust3Body") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-16 sm:pb-24 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
        <div className="pointer-events-none absolute inset-0 bg-grid" />

        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground-secondary">
                {t("badge")}
              </span>
            </FadeIn>

            <FadeIn delay={0.06}>
              <h1 className="mt-6 whitespace-pre-line text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl sm:leading-[1.05]">
                {t("heroTitle")}
              </h1>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground-secondary sm:text-lg">
                {t("heroSubtitle")}
              </p>
            </FadeIn>

            <FadeIn delay={0.18} className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button href={downloadHref()}>{t("ctaPrimary")}</Button>
              <Button href="/features" variant="secondary">
                {t("ctaSecondary")}
              </Button>
            </FadeIn>

            <FadeIn delay={0.22}>
              <p className="mt-3 text-xs text-foreground-muted">{t("ctaHint")}</p>
            </FadeIn>
          </div>

          <div className="mx-auto mt-14 max-w-2xl sm:mt-16">
            <KeyboardMock />
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="border-t border-border py-20 sm:py-28">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t("pillarsTitle")}
            </h2>
            <p className="mt-3 text-foreground-secondary">{t("pillarsSubtitle")}</p>
          </FadeIn>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <article className="group h-full rounded-2xl border border-border bg-card p-6 transition duration-300 hover:border-border-strong hover:bg-card-solid hover:shadow-[var(--shadow-soft)]">
                  <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-xs font-semibold text-accent">
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-medium tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                    {p.body}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Showcase placeholders */}
      <section className="border-t border-border py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {t("showcaseTitle")}
              </h2>
              <p className="mt-3 text-foreground-secondary">{t("showcaseBody")}</p>
              <p className="mt-4 text-xs text-foreground-muted">{t("showcaseNote")}</p>
            </FadeIn>

            <div className="grid gap-3 sm:grid-cols-2">
              {[0, 1, 2, 3].map((i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <div className="flex aspect-[9/16] max-h-64 items-center justify-center rounded-2xl border border-dashed border-border-strong bg-card sm:max-h-none sm:aspect-[3/4]">
                    <div className="px-4 text-center">
                      <div className="mx-auto mb-2 h-8 w-8 rounded-full border border-border bg-accent-soft" />
                      <p className="text-xs text-foreground-muted">
                        {t("showcasePlaceholder")}
                      </p>
                      <p className="mt-1 text-[10px] text-foreground-muted/80">
                        {i + 1}/4
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Trust */}
      <section className="border-t border-border py-20 sm:py-28">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {t("trustTitle")}
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {trust.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.06}>
                <div className="h-full bg-background-elevated p-6 sm:p-8">
                  <h3 className="font-medium tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA band */}
      <section className="border-t border-border py-20 sm:py-24">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card-solid px-6 py-12 text-center sm:px-12 sm:py-16">
              <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-80" />
              <div className="relative">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {t("ctaBandTitle")}
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-foreground-secondary">
                  {t("ctaBandBody")}
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button href={downloadHref()}>{t("ctaPrimary")}</Button>
                  <Button href="/get-started" variant="secondary">
                    {t("ctaBandButton")}
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
