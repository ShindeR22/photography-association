"use client";

import { ArrowRight } from "lucide-react";
import { team } from "@/data/site-data";
import { useLanguage } from "@/components/shared/language";
import { Photo, SectionTitle } from "@/components/shared/ui";

export function TeamSection() {
  const { t } = useLanguage();
  return (
    <section className="section team-section" id="team">
      <div className="container">
        <SectionTitle
          eyebrow="संस्थेचे मार्गदर्शक"
          title="आमची टीम"
          text="छायाचित्रण कलेला समर्पित मार्गदर्शक आणि कार्यतत्पर पदाधिकारी."
        />
        <div className="team-grid">
          {team.map(({ name, role, photo }, index) => (
            <article className="member-card" key={name}>
              <div className="member-photo-wrap">
                <Photo
                  src={photo}
                  alt={`${t(name)}, ${t("छायाचित्रकार")}`}
                />
                <span className="member-index">
                  {t(String(index + 1).padStart(2, "0"))}
                </span>
              </div>
              <div className="member-info">
                <div>
                  <h3>{t(name)}</h3>
                  <p>{t(role)}</p>
                </div>
                <ArrowRight size={15} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
