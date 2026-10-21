"use client";

import { ArrowRight } from "lucide-react";
import { photos, workshops } from "@/data/site-data";
import { useLanguage } from "@/components/shared/language";
import { ButtonLink, Photo } from "@/components/shared/ui";

export function WorkshopsSection() {
  const { t } = useLanguage();
  return (
    <section className="section workshops" id="workshops">
      <div className="container">
        <div className="workshop-banner">
          <div>
            <span className="eyebrow">{t("शिका · प्रयोग करा · घडवा")}</span>
            <h2>
              {t("कॅमेऱ्याच्या मागची")}
              <br />
              <em>{t("नवी दृष्टी.")}</em>
            </h2>
            <p>{t("मैदानी अनुभव, उत्तम मार्गदर्शन आणि तुमच्या कलेसाठी नवी प्रेरणा.")}</p>
            <ButtonLink href="#contact">सर्व कार्यशाळा</ButtonLink>
          </div>
          <Photo src={photos[4]} alt="छायाचित्रण कार्यशाळेत सहभागी" />
        </div>

        <div className="workshop-heading">
          <div>
            <span className="eyebrow">{t("आगामी संधी")}</span>
            <h2>{t("शिका आणि घडवा")}</h2>
          </div>
          <a href="#contact" className="text-link">
            {t("कार्यशाळा पाहा")} <ArrowRight size={15} />
          </a>
        </div>

        <div className="workshop-grid">
          {workshops.map((workshop, index) => (
            <article className="workshop-card" key={workshop.title}>
              <Photo src={workshop.image} alt={workshop.title} />
              <div className="workshop-meta">
                <span>{t(workshop.type)}</span>
                <span>{t(`०${index + 1}`)}</span>
              </div>
              <h3>{t(workshop.title)}</h3>
              <p>{t(workshop.date)}</p>
              <a href="#contact" aria-label={`${t(workshop.title)}: ${t("संपर्क")}`}>
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
