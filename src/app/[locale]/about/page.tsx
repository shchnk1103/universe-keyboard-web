import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <div className="pb-20 pt-14 sm:pb-28 sm:pt-20">
      <Container className="max-w-3xl">
        <FadeIn>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-3 text-lg text-foreground-secondary">{t("subtitle")}</p>
        </FadeIn>

        <FadeIn delay={0.06} className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">
            {t("storyTitle")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground-secondary sm:text-base">
            {t("storyBody")}
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">
            {t("stackTitle")}
          </h2>
          <ul className="mt-4 space-y-2">
            {[0, 1, 2, 3].map((i) => (
              <li
                key={i}
                className="flex gap-3 text-sm text-foreground-secondary"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {t(`stack.${i}`)}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.14} className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">
            {t("licenseTitle")}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
            {t("licenseBody")}
          </p>
        </FadeIn>

        <FadeIn delay={0.18} className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight">
            {t("linksTitle")}
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-4 hover:underline"
              >
                {t("github")}
              </a>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-accent underline-offset-4 hover:underline"
              >
                {t("privacy")}
              </Link>
            </li>
            <li>
              <Link
                href="/changelog"
                className="text-accent underline-offset-4 hover:underline"
              >
                {t("changelog")}
              </Link>
            </li>
          </ul>
        </FadeIn>
      </Container>
    </div>
  );
}
