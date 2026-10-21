"use client";

import { photos } from "@/data/site-data";
import { useLanguage } from "@/components/shared/language";
import { Photo, SectionTitle } from "@/components/shared/ui";

const galleryAlt = [
  "भारतीय छायाचित्रकार",
  "छायाचित्रण कार्यशाळा",
  "स्टुडिओमध्ये प्रकाशयोजना",
  "कॅमेरा प्रशिक्षण",
  "भारतीय संस्कृतीचे क्षण",
];

export function GallerySection() {
  const { t } = useLanguage();
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <SectionTitle
          eyebrow="फ्रेममध्ये जपलेले क्षण"
          title="आमची छायाचित्रे"
          text="आपल्या सभासदांच्या नजरेतून भारत—संस्कृती, माणसं आणि निसर्ग."
        />
        <div className="gallery-filters">
          <span className="filter-active">{t("सर्व छायाचित्रे")}</span>
          <span>{t("पोर्ट्रेट")}</span>
          <span>{t("संस्कृती")}</span>
          <span>{t("निसर्ग")}</span>
          <span>{t("कार्यशाळा")}</span>
        </div>
        <div className="gallery-grid">
          {photos.slice(2).map((photo, index) => (
            <Photo
              key={photo}
              src={photo}
              alt={t(galleryAlt[index])}
              className={`gallery-photo gallery-photo-${index + 1}`}
            />
          ))}
        </div>
        <div className="gallery-caption">
          <span>{t("IPPA फोटो सलून")} · {t("२०२५")}</span>
          <span>{t("०१ — ०५")}</span>
        </div>
      </div>
    </section>
  );
}
