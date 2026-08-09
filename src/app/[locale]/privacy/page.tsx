import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { MarkdownBody } from "@/components/content/MarkdownBody";
import { readSyncedMarkdown } from "@/lib/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("privacyTitle"),
    description: t("privacyDescription"),
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");
  const { markdown, source } = readSyncedMarkdown("PRIVACY_POLICY.md");

  return (
    <div className="pb-20 pt-14 sm:pb-28 sm:pt-20">
      <Container className="max-w-3xl">
        <FadeIn>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-3 text-foreground-secondary">{t("subtitle")}</p>
          <p className="mt-2 text-xs text-foreground-muted">
            {t("lastSynced")}: {source}
            {source === "fallback" ? ` · ${t("fallbackNotice")}` : null}
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-10">
          <MarkdownBody markdown={markdown} />
        </FadeIn>
      </Container>
    </div>
  );
}
