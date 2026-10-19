"use client";

import { ArrowRight, Camera, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { LanguageToggle, useLanguage } from "./language";
import { MobileNavigation } from "./mobile-navigation";

const navigation = [
  { href: "#about", label: "संघटना" },
  { href: "#team", label: "आमची टीम" },
  { href: "#workshops", label: "कार्यशाळा" },
  { href: "#gallery", label: "गॅलरी" },
  { href: "#contact", label: "संपर्क" },
];

function Brand() {
  const { t } = useLanguage();
  return (
    <span className="brand">
      <Image
        className="brand-logo"
        src="/pcpa-logo.png"
        alt={t("पिंपरी चिंचवड फोटोग्राफर असोसिएशन लोगो")}
        width={600}
        height={400}
        priority
      />
      <span className="brand-copy">
        <strong>{t("पिंपरी चिंचवड")}</strong>
        <small>{t("फोटोग्राफर असोसिएशन")}</small>
      </span>
    </span>
  );
}

export function SiteHeader() {
  const { t } = useLanguage();
  return (
    <header className="site-header">
      <a href="#home" aria-label={t("पिंपरी चिंचवड फोटोग्राफर असोसिएशन मुख्यपृष्ठ")}>
        <Brand />
      </a>
      <nav className="primary-nav" aria-label={t("मुख्य नेव्हिगेशन")}>
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {t(item.label)}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#membership">
        {t("सभासद व्हा")} <ArrowRight size={15} />
      </a>
      <LanguageToggle />
      <MobileNavigation />
    </header>
  );
}

function ContactDetails() {
  const { t } = useLanguage();
  return (
    <div className="contact-card">
      <span className="eyebrow">{t("IPPA संपर्क कक्ष")}</span>
      <h3>
        {t("बोलूया")}
        <br />
        <em>{t("छायाचित्रणाबद्दल.")}</em>
      </h3>
      <p>{t("तुमच्या प्रश्नांसाठी आणि कल्पनांसाठी आम्ही इथे आहोत.")}</p>
      <a href="mailto:info@ippaindia.org">
        <Mail size={17} /> info@ippaindia.org
      </a>
      <a href="tel:+912224567890">
        <Phone size={17} /> {t("+९१ २२ २४५६ ७८९०")}
      </a>
      <span>
        <MapPin size={17} /> {t("मुंबई, महाराष्ट्र · भारत")}
      </span>
      <div className="socials">
        <a href="#gallery" aria-label={t("छायाचित्रे")}>
          <Camera size={18} />
        </a>
        <a href="mailto:info@ippaindia.org" aria-label={t("ईमेल")}>
          <Mail size={18} />
        </a>
      </div>
    </div>
  );
}

function ContactForm() {
  const { t } = useLanguage();
  return (
    <form className="contact-form" action="mailto:info@ippaindia.org" method="get">
      <div className="form-heading">
        <h3>{t("नमस्कार, कसे मदत करू?")}</h3>
        <p>{t("खाली माहिती भरा. आम्ही लवकरच संपर्क करू.")}</p>
      </div>
      <div className="form-row">
        <label>
          {t("तुमचं नाव")}
          <input name="name" placeholder={t("पूर्ण नाव")} required />
        </label>
        <label>
          {t("ईमेल पत्ता")}
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </label>
      </div>
      <label>
        {t("मला कशाबद्दल जाणून घ्यायचं आहे?")}
        <select name="subject" defaultValue="">
          <option value="" disabled>
            {t("एक पर्याय निवडा")}
          </option>
          <option>{t("सभासदत्व")}</option>
          <option>{t("कार्यशाळा")}</option>
          <option>{t("इतर विचारणा")}</option>
        </select>
      </label>
      <label>
        {t("तुमचा संदेश")}
        <textarea
          name="body"
          placeholder={t("तुमचा संदेश इथे लिहा…")}
          rows={3}
        />
      </label>
      <button className="button" type="submit">
        {t("संदेश पाठवा")} <ArrowRight size={16} />
      </button>
    </form>
  );
}

export function ContactSection() {
  const { t } = useLanguage();
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">{t("नवी ओळख, नवी सुरुवात")}</span>
          <h2>{t("आमच्याशी संपर्क साधा")}</h2>
          <p>{t("सभासदत्व, कार्यशाळा किंवा सहकार्य—आम्हाला लिहा.")}</p>
        </div>
        <div className="contact-grid">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <a href="#home" aria-label={t("पिंपरी चिंचवड फोटोग्राफर असोसिएशन मुख्यपृष्ठ")}>
            <Brand />
          </a>
          <p>
            {t("पिंपरी चिंचवडमधील छायाचित्रकारांची प्रतिष्ठा, कला आणि व्यावसायिक समृद्धीसाठी समर्पित.")}
          </p>
        </div>
        <div>
          <span className="footer-label">{t("जलद दुवे")}</span>
          <a href="#about">{t("आमच्याविषयी")}</a>
          <a href="#team">{t("आमची टीम")}</a>
          <a href="#workshops">{t("कार्यशाळा")}</a>
        </div>
        <div>
          <span className="footer-label">{t("संपर्क")}</span>
          <a href="mailto:info@ippaindia.org">info@ippaindia.org</a>
          <a href="tel:+912224567890">{t("+९१ २२ २४५६ ७८९०")}</a>
          <a href="#contact">{t("मुंबई, महाराष्ट्र · भारत")}</a>
        </div>
        <div className="footer-note">
          {t("दृष्टी असंख्य.")}
          <br />
          <em>{t("फ्रेम एकच—एकजुटीची.")}</em>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {t("२०२५")} {t("पिंपरी चिंचवड")} {t("फोटोग्राफर असोसिएशन")} · {t("सर्व हक्क राखीव")}</span>
        <a href="#home">{t("पुन्हा वर ↑")}</a>
      </div>
    </footer>
  );
}
