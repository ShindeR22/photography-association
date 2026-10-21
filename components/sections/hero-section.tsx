"use client";

import { ArrowDown, Sparkles } from "lucide-react";
import { photos } from "@/data/site-data";
import { useLanguage } from "@/components/shared/language";
import { ButtonLink, Photo } from "@/components/shared/ui";

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="hero" id="home">
      <Photo
        src={photos[0]}
        alt="भारतीय विवाह सोहळ्याचे छायाचित्रण करणारा छायाचित्रकार"
        className="hero-image"
      />
      <div className="hero-wash" />
      <div className="hero-content">
        <span className="eyebrow">
          <Sparkles size={13} /> {t("छायाचित्रकारांची राष्ट्रीय संघटना")}
        </span>
        <h1>
          {t("एकजूट छायाचित्रकारांची,")}
          <br />
          <em>{t("उंची कलेची.")}</em>
        </h1>
        <p className="hero-mantra">
          {t("शिका")} <i>·</i> {t("जोडले जा")} <i>·</i> {t("प्रगती करा")}
        </p>
        <p className="hero-copy">
          {t("भारतातील छायाचित्रकारांना एकत्र आणणारे, अनुभव वाटून घेणारे आणि प्रत्येक फ्रेममधून नवी दृष्टी घडवणारे व्यासपीठ.")}
        </p>
        <div className="hero-actions">
          <ButtonLink href="#about">संघटनेविषयी</ButtonLink>
          <ButtonLink href="#workshops" secondary>
            कार्यशाळा पहा
          </ButtonLink>
        </div>
      </div>
      <a className="scroll-cue" href="#about">
          <ArrowDown size={15} /> {t("पुढे पाहा")}
      </a>
      <div className="hero-stats">
        <Stat value={t("५,०००")} suffix="+" label="सक्रिय छायाचित्रकार" />
        <Stat value={t("२८")} label="राज्ये व केंद्रशासित प्रदेश" />
        <Stat value={t("२५०")} suffix="+" label="वार्षिक कार्यशाळा" />
        <Stat value={t("१५")} suffix="+" label="आंतरराष्ट्रीय पुरस्कार" />
      </div>
    </section>
  );
}

function Stat({
  value,
  suffix = "",
  label,
}: {
  value: string;
  suffix?: string;
  label: string;
}) {
  const { t } = useLanguage();
  return (
    <div>
      <strong>
        {value}
        {suffix && <span>{suffix}</span>}
      </strong>
      <small>{t(label)}</small>
    </div>
  );
}
