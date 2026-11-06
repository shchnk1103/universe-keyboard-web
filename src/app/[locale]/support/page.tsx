import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FadeIn } from "@/components/motion/FadeIn";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("supportTitle"), description: t("supportDescription") };
}

export default async function SupportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("support");
  return (
    <div className="pb-20 pt-14 sm:pb-28 sm:pt-20">
      <Container className="max-w-3xl">
        <FadeIn>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("title")}</h1>
          <p className="mt-3 text-foreground-secondary">{t("subtitle")}</p>
          <p className="mt-6"><a className="underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a></p>
          <ul className="mt-6 space-y-2">
            <li><Link className="underline" href="/get-started">{t("guide")}</Link></li>
            <li><Link className="underline" href="/privacy">{t("privacy")}</Link></li>
          </ul>
        </FadeIn>
      </Container>
    </div>
  );
}
