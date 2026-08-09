import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:opacity-90 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]",
  secondary:
    "bg-card text-foreground border border-border hover:border-border-strong hover:bg-card-solid",
  ghost: "text-foreground-secondary hover:text-foreground hover:bg-accent-soft",
};

function buttonClasses(variant: Variant, className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    className,
  );
}

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = Common &
  ComponentProps<"button"> & {
    href?: undefined;
  };

type ButtonAsLink = Common & {
  href: string;
  external?: boolean;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  if ("href" in props && props.href) {
    const { children, className, variant = "primary", href, external } = props;
    const classes = buttonClasses(variant, className);

    if (external || href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={classes}
          target={external || href.startsWith("http") ? "_blank" : undefined}
          rel={
            external || href.startsWith("http")
              ? "noopener noreferrer"
              : undefined
          }
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { children, className, variant = "primary", ...buttonProps } = props;
  const classes = buttonClasses(variant, className);

  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
