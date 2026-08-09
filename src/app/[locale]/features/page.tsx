import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("featuresTitle"),
    description: t("featuresDescription"),
  };
}

const groupKeys = ["input", "rime", "intelligence", "privacy"] as const;

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("features");

  return (
    <div className="pb-20 pt-14 sm:pb-28 sm:pt-20">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-3 text-foreground-secondary">{t("subtitle")}</p>
        </FadeIn>

        <div className="mt-16 space-y-16">
          {groupKeys.map((group, gi) => (
            <section key={group}>
              <FadeIn delay={gi * 0.04}>
                <h2 className="text-sm font-medium uppercase tracking-wider text-accent">
                  {t(`groups.${group}.title`)}
                </h2>
              </FadeIn>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {[0, 1, 2].map((i) => (
                  <FadeIn key={i} delay={0.05 + i * 0.05}>
                    <article className="h-full rounded-2xl border border-border bg-card p-5 transition hover:border-border-strong hover:bg-card-solid">
                      <h3 className="font-medium tracking-tight">
                        {t(`groups.${group}.items.${i}.title`)}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                        {t(`groups.${group}.items.${i}.body`)}
                      </p>
                    </article>
                  </FadeIn>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
