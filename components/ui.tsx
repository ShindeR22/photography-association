"use client";

import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { useLanguage } from "./language";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export function SectionTitle({ eyebrow, title, text }: SectionTitleProps) {
  const { t } = useLanguage();
  return (
    <div className="section-title">
      <span className="eyebrow">{t(eyebrow)}</span>
      <h2>{t(title)}</h2>
      {text && <p>{t(text)}</p>}
    </div>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  secondary?: boolean;
};

export function ButtonLink({ href, children, secondary = false }: ButtonLinkProps) {
  const { t } = useLanguage();
  return (
    <a className={`button ${secondary ? "button-outline" : ""}`} href={href}>
      {typeof children === "string" ? t(children) : children}
      <ArrowRight size={16} />
    </a>
  );
}

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
};

export function Photo({ src, alt, className = "" }: PhotoProps) {
  const { t } = useLanguage();
  return (
    <div
      className={`photo ${className}`}
      role="img"
      aria-label={t(alt)}
      style={{ backgroundImage: `url("${src}")` }}
    />
  );
}
