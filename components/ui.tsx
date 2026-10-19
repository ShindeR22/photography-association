import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export function SectionTitle({ eyebrow, title, text }: SectionTitleProps) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  secondary?: boolean;
};

export function ButtonLink({ href, children, secondary = false }: ButtonLinkProps) {
  return (
    <a className={`button ${secondary ? "button-outline" : ""}`} href={href}>
      {children}
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
  return (
    <div
      className={`photo ${className}`}
      role="img"
      aria-label={alt}
      style={{ backgroundImage: `url("${src}")` }}
    />
  );
}
