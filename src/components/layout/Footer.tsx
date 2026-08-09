import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-background-elevated/50">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <span className="flex h-6 w-6 items-center justify-center rounded-[7px] bg-foreground text-[10px] font-bold text-background">
              U
            </span>
            {siteConfig.name}
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground-secondary">
            {t("tagline")}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
            {t("product")}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-foreground-secondary">
            <li>
              <Link href="/features" className="hover:text-foreground">
                {nav("features")}
              </Link>
            </li>
            <li>
              <Link href="/get-started" className="hover:text-foreground">
                {nav("getStarted")}
              </Link>
            </li>
            <li>
              <Link href="/changelog" className="hover:text-foreground">
                {nav("changelog")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
            {t("resources")}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-foreground-secondary">
            <li>
              <Link href="/about" className="hover:text-foreground">
                {nav("about")}
              </Link>
            </li>
            <li>
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                {nav("github")}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-foreground-muted">
            {t("legal")}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-foreground-secondary">
            <li>
              <Link href="/privacy" className="hover:text-foreground">
                {nav("privacy")}
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-2 py-6 text-xs text-foreground-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. {t("rights")}
          </p>
          <p>{t("syncNote")}</p>
        </Container>
      </div>
    </footer>
  );
}
