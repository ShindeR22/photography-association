"use client";

import { useState } from "react";
import { Camera, Home, Info, Menu, Phone, Users, X, Images } from "lucide-react";
import { useLanguage } from "./language";

const links = [
  { href: "#home", label: "मुख्यपृष्ठ", Icon: Home },
  { href: "#about", label: "आमच्याविषयी", Icon: Info },
  { href: "#team", label: "आमची टीम", Icon: Users },
  { href: "#workshops", label: "कार्यशाळा", Icon: Camera },
  { href: "#gallery", label: "गॅलरी", Icon: Images },
  { href: "#contact", label: "संपर्क", Icon: Phone },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        className={`mobile-menu ${isOpen ? "is-open" : ""}`}
        type="button"
        aria-label={t(isOpen ? "मेन्यू बंद करा" : "मेन्यू उघडा")}
        aria-expanded={isOpen}
        aria-controls="mobile-site-menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={21} />}
      </button>

      {isOpen && (
        <div className="mobile-drawer-layer">
          <button
            className="mobile-drawer-backdrop"
            type="button"
            aria-label={t("मेन्यू बंद करा")}
            onClick={closeMenu}
          />
          <aside id="mobile-site-menu" className="mobile-drawer" aria-label={t("मुख्य मेन्यू")}>
            <div className="mobile-drawer-heading">
              <div>
                <span className="brand-mark"><Camera size={18} /></span>
                <strong>{t("असोसिएशन मेन्यू")}</strong>
              </div>
              <button type="button" aria-label={t("मेन्यू बंद करा")} onClick={closeMenu}>
                <X size={20} />
              </button>
            </div>
            <nav>
              {links.map(({ href, label, Icon }) => (
                <a href={href} key={href} onClick={closeMenu}>
                  <Icon size={19} /> {t(label)}
                </a>
              ))}
              <a className="drawer-join" href="#membership" onClick={closeMenu}>
                {t("सभासद नोंदणी")} <span>→</span>
              </a>
            </nav>
            <p>{t("महाराष्ट्र राज्य शाखा")}<br />{t("व्यावसायिक छायाचित्रण कला संवर्धन")}</p>
          </aside>
        </div>
      )}
    </>
  );
}
