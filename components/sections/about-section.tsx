"use client";

import { ArrowRight, Check } from "lucide-react";
import { photos } from "@/data/site-data";
import { useLanguage } from "@/components/shared/language";
import { Photo, SectionTitle } from "@/components/shared/ui";

const pillars = [
  {
    number: "०१",
    title: "व्यावसायिक हक्क आणि सन्मान",
    body: "छायाचित्रकारांचे हक्क, योग्य मानधन आणि बौद्धिक संपदेबाबत जागरूकता.",
  },
  {
    number: "०२",
    title: "कौशल्य आणि ज्ञानाची देवाणघेवाण",
    body: "अनुभवी मार्गदर्शकांसोबत प्रत्यक्ष प्रशिक्षण, संवाद आणि नवे तंत्रज्ञान.",
  },
  {
    number: "०३",
    title: "कलेला व्यापक व्यासपीठ",
    body: "प्रदर्शने, फोटो सलून आणि राष्ट्रीय स्तरावर कलाकृतींना ओळख.",
  },
];

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <section className="section about" id="about">
      <div className="container">
        <SectionTitle
          eyebrow="छायाचित्रकारांसोबत १५ वर्षांची वाटचाल"
          title="आमच्याविषयी"
          text="छायाचित्रकारांसाठी खास उभी राहिलेली आमची संघटना गेली १५ वर्षे त्यांच्या हक्कांसाठी, कौशल्यविकासासाठी आणि कलेला योग्य व्यासपीठ मिळवून देण्यासाठी कार्यरत आहे."
        />
        <div className="about-grid">
          <div className="about-visual">
            <Photo src={photos[1]} alt="छायाचित्रणासाठी आधुनिक उपकरणे" />
            <div className="image-note">
              <span className="note-icon">
                <Check size={17} />
              </span>
              <div>
                <strong>{t("१५ वर्षे छायाचित्रकारांसाठी")}</strong>
                <small>{t("एकत्र शिकू · एकत्र घडू")}</small>
              </div>
              <span className="note-seal">
                IPPA
                <br />✳
              </span>
            </div>
          </div>
          <div className="pillars">
            {pillars.map((pillar) => (
              <article className="pillar" key={pillar.number}>
                <span className="pillar-number">{t(pillar.number)}</span>
                <div>
                  <h3>{t(pillar.title)}</h3>
                  <p>{t(pillar.body)}</p>
                </div>
                <ArrowRight className="pillar-arrow" size={17} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
