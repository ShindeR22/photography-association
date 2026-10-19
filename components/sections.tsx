"use client";

import {
  ArrowDown,
  ArrowRight,
  Camera,
  Check,
  Quote,
  Sparkles,
  Users,
} from "lucide-react";
import { photos, team, workshops } from "./data";
import { useLanguage } from "./language";
import { ButtonLink, Photo, SectionTitle } from "./ui";

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

const membershipBenefits = [
  { title: "सक्रिय समुदाय", detail: "संपूर्ण भारतातील सहकारी", Icon: Users },
  { title: "विशेष प्रशिक्षण", detail: "कार्यशाळा आणि मार्गदर्शन", Icon: Camera },
  { title: "तुमच्या कलेला मंच", detail: "प्रदर्शन आणि फोटो सलून", Icon: Quote },
];

export function MembershipSection() {
  const { t } = useLanguage();
  return (
    <section className="membership" id="membership">
      <div className="container membership-grid">
        <div className="membership-portrait">
          <Photo
            src={photos[6]}
            alt="कॅमेरा हातात घेतलेली व्यावसायिक छायाचित्रकार"
          />
          <span className="portrait-caption">{t("दृष्टी तुमची. व्यासपीठ आमचं.")}</span>
        </div>
        <div className="membership-copy">
          <span className="eyebrow">{t("तुमची पुढची फ्रेम इथून सुरू")}</span>
          <h2>
            {t("छायाचित्रकारांच्या")}
            <br />
            {t("परिवाराचा")} <em>{t("भाग व्हा.")}</em>
          </h2>
          <p>
            {t("सहकार्य, सन्मान आणि सातत्याने शिकण्याची संधी—तुमच्या छायाचित्रण प्रवासासाठी.")}
          </p>
          <div className="benefit-grid">
            {membershipBenefits.map(({ title, detail, Icon }) => (
              <div key={title}>
                <Icon size={18} />
                <strong>{t(title)}</strong>
                <small>{t(detail)}</small>
              </div>
            ))}
          </div>
          <ButtonLink href="#contact">सभासदत्वासाठी संपर्क</ButtonLink>
        </div>
      </div>
    </section>
  );
}
