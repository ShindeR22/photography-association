"use client";

import {
  ArrowDown,
  ArrowRight,
  Camera,
  Check,
  Quote,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";
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

const professionOptions = [
  { value: "Photographer", label: "फोटोग्राफर" },
  { value: "Cinematographer", label: "सिनेमॅटोग्राफर" },
  { value: "Video editor", label: "व्हिडिओ एडिटर" },
  { value: "Photo editor", label: "फोटो एडिटर" },
  { value: "Reel maker", label: "रील मेकर" },
  { value: "Other", label: "इतर" },
];

const cameraOptions = ["Canon", "Sony", "Nikon", "Fujifilm", "Lumix"];

export function MembershipSection() {
  const { t } = useLanguage();
  const [formOpen, setFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [successNotice, setSuccessNotice] = useState<{ name: string; memberId: string } | null>(null);
  const [uploadingField, setUploadingField] = useState("");
  const [uploadErrors, setUploadErrors] = useState<Record<string, string>>({});
  const [uploadedUrls, setUploadedUrls] = useState<Record<string, string>>({});

  async function uploadMembershipImage(file: File | undefined, kind: "profile" | "document", fieldName: string) {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setUploadErrors((errors) => ({ ...errors, [fieldName]: t("कृपया image file निवडा.") }));
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setUploadErrors((errors) => ({ ...errors, [fieldName]: t("Image file 5 MB पेक्षा लहान असावी.") }));
      return;
    }

    setUploadingField(fieldName);
    setUploadErrors((errors) => ({ ...errors, [fieldName]: "" }));
    setUploadedUrls((urls) => ({ ...urls, [fieldName]: "" }));
    const previousUrlField = document.querySelector<HTMLInputElement>(`input[name="${fieldName}"]`);
    if (previousUrlField) previousUrlField.value = "";
    try {
      const signatureResponse = await fetch("/api/cloudinary-signature", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind }),
      });
      const signatureData = await signatureResponse.json();
      if (!signatureResponse.ok) throw new Error(signatureData.message || t("Cloudinary सेटिंग तपासा."));

      const uploadData = new FormData();
      uploadData.append("file", file);
      uploadData.append("api_key", signatureData.apiKey);
      uploadData.append("timestamp", String(signatureData.timestamp));
      uploadData.append("signature", signatureData.signature);
      uploadData.append("folder", signatureData.folder);
      if (signatureData.type) uploadData.append("type", signatureData.type);

      const uploadResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${signatureData.cloudName}/image/upload`,
        { method: "POST", body: uploadData },
      );
      const result = await uploadResponse.json();
      if (!uploadResponse.ok) throw new Error(result.error?.message || t("Image upload अयशस्वी झाले."));

      const urlField = document.querySelector<HTMLInputElement>(`input[name="${fieldName}"]`);
      if (urlField) urlField.value = result.secure_url;
      setUploadedUrls((urls) => ({ ...urls, [fieldName]: result.secure_url }));
    } catch (error) {
      setUploadErrors((errors) => ({
        ...errors,
        [fieldName]: error instanceof Error ? error.message : t("Image upload अयशस्वी झाले."),
      }));
    } finally {
      setUploadingField("");
    }
  }

  async function submitMembership(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (uploadingField) {
      setSubmitMessage(t("Image upload पूर्ण होईपर्यंत थांबा."));
      return;
    }
    if (!uploadedUrls.photoUrl || !uploadedUrls.aadhaarPhotoUrl) {
      setSubmitMessage(t("कृपया सदस्याचा आणि आधार कार्डचा फोटो अपलोड करा."));
      return;
    }
    setIsSubmitting(true);
    setSubmitMessage("");

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const list = (name: string) => form.getAll(name).map(String);
    const payload = {
      name: String(form.get("name") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      phone: String(form.get("phone") ?? "").trim(),
      address: String(form.get("address") ?? "").trim(),
      studioName: String(form.get("studioName") ?? "").trim(),
      aadhaarNumber: String(form.get("aadhaarNumber") ?? "").trim(),
      udyamAadhaar: String(form.get("udyamAadhaar") ?? "").trim(),
      membershipFee: 1000,
      membershipPeriodYears: Number(form.get("membershipPeriodYears")),
      registrationDate: String(form.get("registrationDate") ?? ""),
      experienceYears: Number(form.get("experienceYears")),
      bloodGroup: String(form.get("bloodGroup") ?? ""),
      professions: list("professions"),
      camerasUsed: list("camerasUsed"),
      photoUrl: uploadedUrls.photoUrl,
      aadhaarPhotoUrl: uploadedUrls.aadhaarPhotoUrl,
      udyamAadhaarPhotoUrl: uploadedUrls.udyamAadhaarPhotoUrl ?? "",
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_MEMBERS_API_URL || "http://localhost:3000/api/members",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      const result = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(result?.message || `Request failed (${response.status})`);
      }
      const memberIdValue = result?.memberId
        ?? result?.member_id
        ?? result?.memberCode
        ?? result?.registrationNumber
        ?? result?.member?.memberId
        ?? result?.member?.id
        ?? result?.member?._id
        ?? result?.data?.memberId
        ?? result?.data?.member_id
        ?? result?.data?.memberCode
        ?? result?.data?.registrationNumber
        ?? result?.data?.member?.memberId
        ?? result?.data?.member?.id
        ?? result?.data?.member?._id
        ?? result?.data?.id
        ?? result?.id
        ?? result?._id;
      setSuccessNotice({ name: payload.name, memberId: memberIdValue ? String(memberIdValue) : "" });
      setSubmitMessage("");
      formElement.reset();
      setUploadedUrls({});
      setFormOpen(false);
    } catch (error) {
      setSubmitMessage(error instanceof Error ? error.message : t("अर्ज पाठवता आला नाही. पुन्हा प्रयत्न करा."));
    } finally {
      setIsSubmitting(false);
    }
  }
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
          <button className="button" type="button" onClick={() => setFormOpen(true)}>
            {t("सभासद व्हा")} <ArrowRight size={16} />
          </button>
        </div>
      </div>
      {formOpen && (
        <div className="membership-modal-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setFormOpen(false);
        }}>
          <section className="membership-modal" role="dialog" aria-modal="true" aria-labelledby="membership-form-title">
            <button className="membership-modal-close" type="button" aria-label={t("फॉर्म बंद करा")} onClick={() => setFormOpen(false)}>
              <X size={20} />
            </button>
            <form className="contact-form membership-form" onSubmit={submitMembership}>
              <div className="form-heading">
                <h3 id="membership-form-title">{t("सभासद नोंदणी")}</h3>
                <p>{t("सभासदत्वासाठी खालील माहिती भरा.")}</p>
              </div>
              <div className="form-row">
                <label>{t("तुमचं नाव")}<input name="name" placeholder={t("पूर्ण नाव")} required /></label>
                <label>{t("ईमेल पत्ता")}<input name="email" type="email" placeholder="you@example.com" required /></label>
              </div>
              <div className="form-row">
                <label>{t("फोन")}<input name="phone" type="tel" placeholder={t("मोबाइल नंबर")} required /></label>
                <label>{t("पत्ता")}<input name="address" placeholder={t("तुमचा पूर्ण पत्ता")} required /></label>
              </div>
              <div className="form-row">
                <label>{t("स्टुडिओचे नाव")}<input name="studioName" placeholder={t("स्टुडिओचे नाव")} /></label>
                <label>{t("आधार क्रमांक")}<input name="aadhaarNumber" inputMode="numeric" pattern="[0-9]{12}" maxLength={12} placeholder="12-digit Aadhaar number" required /></label>
              </div>
              <div className="form-row">
                <label>{t("उद्यम आधार")}<input name="udyamAadhaar" placeholder={t("उद्यम आधार क्रमांक (ऐच्छिक)")} /></label>
                <label>{t("छायाचित्रणाचा अनुभव (वर्षे)")}<input name="experienceYears" type="number" min="0" step="1" required /></label>
              </div>
              <div className="form-row">
                <label>{t("रक्तगट")}
                  <select name="bloodGroup" defaultValue="" required>
                    <option value="" disabled>{t("रक्तगट निवडा")}</option>
                    {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((group) => <option key={group}>{group}</option>)}
                  </select>
                </label>
                <label>{t("सभासदत्वाचा कालावधी (वर्षे)")}<input name="membershipPeriodYears" type="number" min="1" step="1" defaultValue="1" required /></label>
              </div>
              <div className="form-row">
                <label>{t("सभासद शुल्क (₹)")}<input name="membershipFee" type="number" value="1000" readOnly aria-readonly="true" /></label>
                <label>{t("नोंदणी तारीख")}<input name="registrationDate" type="date" defaultValue={new Date(Date.now() - new Date().getTimezoneOffset() * 60_000).toISOString().slice(0, 10)} required /></label>
              </div>
              <fieldset className="membership-options">
                <legend>{t("व्यवसाय")}</legend>
                <div className="membership-option-list">
                  {professionOptions.map(({ value, label }) => (
                    <label key={value} className="membership-option">
                      <input type="checkbox" name="professions" value={value} />
                      <span>{t(label)}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <fieldset className="membership-options">
                <legend>{t("वापरत असलेले कॅमेरे")}</legend>
                <div className="membership-option-list">
                  {cameraOptions.map((camera) => (
                    <label key={camera} className="membership-option">
                      <input type="checkbox" name="camerasUsed" value={camera} />
                      <span>{camera}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <label>{t("सदस्याचा फोटो")}
                <input type="file" accept="image/*" required disabled={Boolean(uploadingField)} onChange={(event) => uploadMembershipImage(event.target.files?.[0], "profile", "photoUrl")} />
                <input name="photoUrl" type="hidden" required />
                {uploadingField === "photoUrl" && <small>{t("अपलोड होत आहे…")}</small>}
                {uploadErrors.photoUrl && <small className="upload-error">{uploadErrors.photoUrl}</small>}
              </label>
              <label>{t("आधार कार्डचा फोटो")}
                <input type="file" accept="image/*" required disabled={Boolean(uploadingField)} onChange={(event) => uploadMembershipImage(event.target.files?.[0], "document", "aadhaarPhotoUrl")} />
                <input name="aadhaarPhotoUrl" type="hidden" required />
                {uploadingField === "aadhaarPhotoUrl" && <small>{t("अपलोड होत आहे…")}</small>}
                {uploadErrors.aadhaarPhotoUrl && <small className="upload-error">{uploadErrors.aadhaarPhotoUrl}</small>}
              </label>
              <label>{t("उद्यम आधारचा फोटो")}
                <input type="file" accept="image/*" disabled={Boolean(uploadingField)} onChange={(event) => uploadMembershipImage(event.target.files?.[0], "document", "udyamAadhaarPhotoUrl")} />
                <input name="udyamAadhaarPhotoUrl" type="hidden" />
                {uploadingField === "udyamAadhaarPhotoUrl" && <small>{t("अपलोड होत आहे…")}</small>}
                {uploadErrors.udyamAadhaarPhotoUrl && <small className="upload-error">{uploadErrors.udyamAadhaarPhotoUrl}</small>}
              </label>
              {submitMessage && <p className="membership-form-status" role="status">{submitMessage}</p>}
              <button className="button" type="submit" disabled={isSubmitting}>{isSubmitting ? t("पाठवत आहे…") : t("अर्ज पाठवा")} <ArrowRight size={16} /></button>
            </form>
          </section>
        </div>
      )}
      {successNotice && (
        <div className="membership-success-overlay">
          <section className="membership-success-card" role="dialog" aria-modal="true" aria-labelledby="membership-success-title">
            <button className="membership-modal-close" type="button" aria-label={t("सूचना बंद करा")} onClick={() => setSuccessNotice(null)}>
              <X size={19} />
            </button>
            <span className="membership-success-mark"><Check size={22} /></span>
            <h3 id="membership-success-title">{t("नमस्कार")}, {successNotice.name}!</h3>
            <p>{t("तुमचा फॉर्म यशस्वीरित्या सबमिट झाला आहे.")}</p>
            {successNotice.memberId ? (
              <div className="membership-id-box">
                <small>{t("तुमचा सदस्य क्रमांक")}</small>
                <strong>{successNotice.memberId}</strong>
              </div>
            ) : (
              <p>{t("सदस्य क्रमांक API कडून मिळाला नाही. असोसिएशनकडून तुम्हाला लवकरच कॉल येईल.")}</p>
            )}
            <p>{t("असोसिएशनकडून तुम्हाला लवकरच कॉल येईल.")}</p>
            <button className="button" type="button" onClick={() => setSuccessNotice(null)}>{t("ठीक आहे")}</button>
          </section>
        </div>
      )}
    </section>
  );
}
