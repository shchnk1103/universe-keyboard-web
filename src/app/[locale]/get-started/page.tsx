import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { downloadHref } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("getStartedTitle"),
    description: t("getStartedDescription"),
  };
}

export default async function GetStartedPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("getStarted");
  const nav = await getTranslations("nav");

  return (
    <div className="pb-20 pt-14 sm:pb-28 sm:pt-20">
      <Container className="max-w-3xl">
        <FadeIn>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-3 text-foreground-secondary">{t("subtitle")}</p>
          <p className="mt-2 text-xs text-foreground-muted">{t("note")}</p>
          <div className="mt-6">
            <Button href={downloadHref()}>{nav("download")}</Button>
          </div>
        </FadeIn>

        <ol className="mt-14 space-y-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <li className="flex gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
                  {i + 1}
                </span>
                <div>
                  <h2 className="font-medium tracking-tight">
                    {t(`steps.${i}.title`)}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground-secondary">
                    {t(`steps.${i}.body`)}
                  </p>
                </div>
              </li>
            </FadeIn>
          ))}
        </ol>

        <section className="mt-16">
          <FadeIn>
            <h2 className="text-xl font-semibold tracking-tight">
              {t("faqTitle")}
            </h2>
          </FadeIn>
          <div className="mt-6 space-y-3">
            {[0, 1, 2, 3].map((i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <details className="group rounded-2xl border border-border bg-card open:bg-card-solid">
                  <summary className="cursor-pointer list-none px-5 py-4 font-medium tracking-tight marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-3">
                      {t(`faqs.${i}.q`)}
                      <span className="text-foreground-muted transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-foreground-secondary">
                    {t(`faqs.${i}.a`)}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
