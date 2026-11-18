"use client";

import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useState, type FormEvent, type MouseEvent } from "react";
import { photos } from "@/data/site-data";
import { useLanguage } from "@/components/shared/language";
import { ButtonLink, Photo } from "@/components/shared/ui";

type Workshop = {
  id: string;
  title: string;
  date: string;
  venue: string;
  registrationFee: number;
  memberRegistrationFee: number;
  description: string;
  mentorName: string;
  time: string;
  status: string;
  imageUrls: string[];
};

const workshopsApiUrl =
  process.env.NEXT_PUBLIC_WORKSHOPS_API_URL ??
  "http://photography-admin-kohl.vercel.app/api/public/workshops";
const publicApiBase = workshopsApiUrl.replace(/\/workshops\/?$/, "");

type MemberDetails = {
  memberNumber: string;
  name: string;
  phoneNumber: string;
  studioName: string;
  address: string;
  profession: string;
};

function WorkshopCard({
  workshop,
  t,
}: {
  workshop: Workshop;
  t: (value: string) => string;
}) {
  const images = workshop.imageUrls?.filter(Boolean) ?? [];
  const [activeImage, setActiveImage] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [memberNumber, setMemberNumber] = useState("");
  const [member, setMember] = useState<MemberDetails | null>(null);
  const [lookupMessage, setLookupMessage] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const fee = member
    ? workshop.memberRegistrationFee
    : workshop.registrationFee;

  useEffect(() => {
    if (images.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    if (!detailsOpen && !registrationOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDetailsOpen(false);
        setRegistrationOpen(false);
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [detailsOpen, registrationOpen]);

  async function lookupMember(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLookupMessage("");
    setMember(null);
    try {
      const response = await fetch(
        `${publicApiBase}/members/lookup?memberNumber=${encodeURIComponent(memberNumber.trim())}`,
      );
      if (!response.ok)
        throw new Error(
          response.status === 404
            ? "Active member not found. Complete the form as a non-member."
            : "Could not verify membership.",
        );
      setMember((await response.json()) as MemberDetails);
      setLookupMessage("Active membership verified. Member fee applied.");
    } catch (error) {
      setLookupMessage(
        error instanceof Error ? error.message : "Could not verify membership.",
      );
    }
  }

  async function submitRegistration(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setRegistrationMessage("");
    const form = new FormData(event.currentTarget);
    const payload = member
      ? { workshopId: workshop.id, memberNumber: member.memberNumber }
      : {
          workshopId: workshop.id,
          name: String(form.get("name") ?? ""),
          phoneNumber: String(form.get("phoneNumber") ?? ""),
          studioName: String(form.get("studioName") ?? ""),
          address: String(form.get("address") ?? ""),
          profession: String(form.get("profession") ?? ""),
        };
    try {
      const response = await fetch(`${publicApiBase}/workshop-registrations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(
          data?.message ?? "Registration could not be completed.",
        );
      setRegistrationMessage(
        `Registration successful. Number: ${data.registration.registrationNumber}. Amount: ₹${data.fee}.`,
      );
    } catch (error) {
      setRegistrationMessage(
        error instanceof Error
          ? error.message
          : "Registration could not be completed.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  function openRegistration(event: MouseEvent) {
    event.stopPropagation();
    setMember(null);
    setMemberNumber("");
    setLookupMessage("");
    setRegistrationMessage("");
    setRegistrationOpen(true);
  }

  const showPrevious = () => {
    setActiveImage((current) => (current - 1 + images.length) % images.length);
  };
  const showNext = () => {
    setActiveImage((current) => (current + 1) % images.length);
  };
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
            <button
              className="workshop-image-arrow previous"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              type="button"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="workshop-image-arrow next"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              type="button"
            >
              <ChevronRight size={18} />
            </button>
            <div className="workshop-image-dots" aria-label="Workshop images">
              {images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  className={index === activeImage ? "active" : ""}
                  onClick={(event) => {
                    event.stopPropagation();
                    setActiveImage(index);
                  }}
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
      <p className="workshop-mentor">
        Mentor: <strong>{workshop.mentorName}</strong>
      </p>
      <p>
        {new Date(workshop.date).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
        {` · ${workshop.time} · ${workshop.venue}`}
      </p>
      <p>{workshop.description}</p>
      <button
        className="button workshop-card-register"
        onClick={openRegistration}
        type="button"
      >
        Register <ArrowRight size={14} />
      </button>
      {detailsOpen &&
        createPortal(
          <div
            className="workshop-dialog-backdrop"
            onClick={(event) => {
              event.stopPropagation();
              setDetailsOpen(false);
            }}
          >
            <section
              className="workshop-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby={`workshop-title-${workshop.id}`}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="workshop-dialog-close"
                onClick={() => setDetailsOpen(false)}
                aria-label="Close details"
                type="button"
              >
                <X size={20} />
              </button>
              <div className="workshop-dialog-image">
                <Photo
                  src={images[activeImage] || photos[3]}
                  alt={workshop.title}
                />
                {images.length > 1 && (
                  <>
                    <button
                      className="workshop-image-arrow previous"
                      onClick={showPrevious}
                      aria-label="Previous image"
                      type="button"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      className="workshop-image-arrow next"
                      onClick={showNext}
                      aria-label="Next image"
                      type="button"
                    >
                      <ChevronRight size={18} />
                    </button>
                    <span className="workshop-dialog-image-count">
                      {activeImage + 1} / {images.length}
                    </span>
                  </>
                )}
              </div>
              <div className="workshop-dialog-content">
                <div className="workshop-meta">
                  <span>{workshop.status}</span>
                  <span>₹{workshop.registrationFee}</span>
                </div>
                <h2 id={`workshop-title-${workshop.id}`}>
                  {t(workshop.title)}
                </h2>
                <p className="workshop-dialog-mentor">
                  Mentor: <strong>{workshop.mentorName}</strong>
                </p>
                <p>{workshop.description}</p>
                <dl>
                  <div>
                    <dt>Date</dt>
                    <dd>
                      {new Date(workshop.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </dd>
                  </div>
                  <div>
                    <dt>Time</dt>
                    <dd>{workshop.time}</dd>
                  </div>
                  <div>
                    <dt>Venue</dt>
                    <dd>{workshop.venue}</dd>
                  </div>
                  <div>
                    <dt>Registration fee</dt>
                    <dd>₹{workshop.registrationFee}</dd>
                  </div>
                </dl>
                <button
                  className="button workshop-register"
                  onClick={(event) => {
                    setDetailsOpen(false);
                    openRegistration(event);
                  }}
                  type="button"
                >
                  Register <ArrowRight size={16} />
                </button>
              </div>
            </section>
          </div>,
          document.body,
        )}
      {registrationOpen &&
        createPortal(
          <div
            className="workshop-dialog-backdrop"
            onClick={() => setRegistrationOpen(false)}
          >
            <section
              className="workshop-registration-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby={`registration-title-${workshop.id}`}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="workshop-dialog-close"
                onClick={() => setRegistrationOpen(false)}
                aria-label="Close registration"
                type="button"
              >
                <X size={20} />
              </button>
              <h2 id={`registration-title-${workshop.id}`}>
                Workshop registration
              </h2>
              <p>{workshop.title}</p>
              <div className="workshop-registration-fee">
                Registration fee: <strong>₹{fee}</strong>
                {member && <span> · Member discount applied</span>}
              </div>
              {registrationMessage ? (
                <p role="status">{registrationMessage}</p>
              ) : (
                <>
                  <form className="member-lookup-form" onSubmit={lookupMember}>
                    <label>
                      Member number (optional)
                      <input
                        value={memberNumber}
                        onChange={(event) =>
                          setMemberNumber(event.target.value)
                        }
                        placeholder="PCPA-123"
                      />
                    </label>
                    <button className="button" type="submit">
                      Verify member
                    </button>
                  </form>
                  {lookupMessage && <p role="status">{lookupMessage}</p>}
                  <form
                    className="workshop-registration-form"
                    onSubmit={submitRegistration}
                  >
                    {!member && (
                      <>
                        <label>
                          Full name
                          <input name="name" required />
                        </label>
                        <label>
                          Phone number
                          <input name="phoneNumber" type="tel" required />
                        </label>
                        <label>
                          Studio / Farm name
                          <input name="studioName" required />
                        </label>
                        <label>
                          Address
                          <textarea name="address" required rows={2} />
                        </label>
                        <label>
                          Profession
                          <input name="profession" required />
                        </label>
                      </>
                    )}
                    {member && (
                      <p>
                        Registering as {member.name} ({member.memberNumber}).
                      </p>
                    )}
                    <button
                      className="button workshop-register"
                      disabled={submitting}
                      type="submit"
                    >
                      {submitting ? "Submitting…" : "Submit registration"}
                    </button>
                  </form>
                </>
              )}
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
        if (!response.ok)
          throw new Error(`Workshop request failed (${response.status})`);
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
            <p>
              {t(
                "मैदानी अनुभव, उत्तम मार्गदर्शन आणि तुमच्या कलेसाठी नवी प्रेरणा.",
              )}
            </p>
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
