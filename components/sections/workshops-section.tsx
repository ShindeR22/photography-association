"use client";

import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { photos } from "@/data/site-data";
import { useLanguage } from "@/components/shared/language";
import { ButtonLink, Photo } from "@/components/shared/ui";

type Workshop = {
  id: string;
  title: string;
  date: string;
  venue: string;
  registrationFee: number;
  description: string;
  mentorName: string;
  time: string;
  status: string;
  imageUrls: string[];
};

const workshopsApiUrl =
  process.env.NEXT_PUBLIC_WORKSHOPS_API_URL ?? "http://localhost:3000/api/public/workshops";

function WorkshopCard({ workshop, t }: { workshop: Workshop; t: (value: string) => string }) {
  const images = workshop.imageUrls?.filter(Boolean) ?? [];
  const [activeImage, setActiveImage] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    if (!detailsOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDetailsOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [detailsOpen]);

  const showPrevious = () => {
    setActiveImage((current) => (current - 1 + images.length) % images.length);
  };
  const showNext = () => {
    setActiveImage((current) => (current + 1) % images.length);
  };
  const registrationHref = `mailto:info@ippaindia.org?subject=${encodeURIComponent(`Workshop registration: ${workshop.title}`)}&body=${encodeURIComponent(`Hello,\n\nI would like to register for ${workshop.title}.\nDate: ${workshop.date}\nVenue: ${workshop.venue}\n\nMy name and phone number:\n`)}`;

  return (
    <article
      className="workshop-card"
      key={workshop.id}
      onClick={() => setDetailsOpen(true)}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setDetailsOpen(true);
        }
      }}
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-label={`${t(workshop.title)} — view details`}
    >
      <div className="workshop-images">
        <Photo
          src={images[activeImage] || photos[3]}
          alt={`${workshop.title} — image ${activeImage + 1}`}
        />
        {images.length > 1 && (
          <>
            <button className="workshop-image-arrow previous" onClick={(event) => { event.stopPropagation(); showPrevious(); }} aria-label="Previous image" type="button">
              <ChevronLeft size={18} />
            </button>
            <button className="workshop-image-arrow next" onClick={(event) => { event.stopPropagation(); showNext(); }} aria-label="Next image" type="button">
              <ChevronRight size={18} />
            </button>
            <div className="workshop-image-dots" aria-label="Workshop images">
              {images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  className={index === activeImage ? "active" : ""}
                  onClick={(event) => { event.stopPropagation(); setActiveImage(index); }}
                  aria-label={`Show image ${index + 1}`}
                  aria-current={index === activeImage ? "true" : undefined}
                  type="button"
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="workshop-meta">
        <span>{workshop.status}</span>
        <span>₹{workshop.registrationFee}</span>
      </div>
      <h3>{t(workshop.title)}</h3>
      <p className="workshop-mentor">Mentor: <strong>{workshop.mentorName}</strong></p>
      <p>
        {new Date(workshop.date).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
        {` · ${workshop.time} · ${workshop.venue}`}
      </p>
      <p>{workshop.description}</p>
      <a
        className="button workshop-card-register"
        href={registrationHref}
        onClick={(event) => event.stopPropagation()}
      >
        Register <ArrowRight size={14} />
      </a>
      {detailsOpen && createPortal(
        <div className="workshop-dialog-backdrop" onClick={(event) => { event.stopPropagation(); setDetailsOpen(false); }}>
          <section
            className="workshop-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`workshop-title-${workshop.id}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button className="workshop-dialog-close" onClick={() => setDetailsOpen(false)} aria-label="Close details" type="button">
              <X size={20} />
            </button>
            <div className="workshop-dialog-image">
              <Photo src={images[activeImage] || photos[3]} alt={workshop.title} />
              {images.length > 1 && (
                <>
                  <button className="workshop-image-arrow previous" onClick={showPrevious} aria-label="Previous image" type="button"><ChevronLeft size={18} /></button>
                  <button className="workshop-image-arrow next" onClick={showNext} aria-label="Next image" type="button"><ChevronRight size={18} /></button>
                  <span className="workshop-dialog-image-count">{activeImage + 1} / {images.length}</span>
                </>
              )}
            </div>
            <div className="workshop-dialog-content">
              <div className="workshop-meta">
                <span>{workshop.status}</span>
                <span>₹{workshop.registrationFee}</span>
              </div>
              <h2 id={`workshop-title-${workshop.id}`}>{t(workshop.title)}</h2>
              <p className="workshop-dialog-mentor">Mentor: <strong>{workshop.mentorName}</strong></p>
              <p>{workshop.description}</p>
              <dl>
                <div><dt>Date</dt><dd>{new Date(workshop.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</dd></div>
                <div><dt>Time</dt><dd>{workshop.time}</dd></div>
                <div><dt>Venue</dt><dd>{workshop.venue}</dd></div>
                <div><dt>Registration fee</dt><dd>₹{workshop.registrationFee}</dd></div>
              </dl>
              <a className="button workshop-register" href={registrationHref}>
                Register <ArrowRight size={16} />
              </a>
            </div>
          </section>
        </div>,
        document.body,
      )}
    </article>
  );
}

export function WorkshopsSection() {
  const { t } = useLanguage();
  const [workshops, setWorkshops] = useState<Workshop[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch(workshopsApiUrl, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Workshop request failed (${response.status})`);
        return response.json() as Promise<Workshop[]>;
      })
      .then((data) => setWorkshops(Array.isArray(data) ? data : []))
      .catch((error: unknown) => {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Could not load workshops:", error);
        }
      });

    return () => controller.abort();
  }, []);

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
          {workshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
