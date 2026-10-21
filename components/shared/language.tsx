"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Locale = "mr" | "en";

const english: Record<string, string> = {
  "संघटना": "Association",
  "आमची टीम": "Our Team",
  "कार्यशाळा": "Workshops",
  "गॅलरी": "Gallery",
  "संपर्क": "Contact",
  "सभासद व्हा": "Become a Member",
  "छायाचित्रकारांची राष्ट्रीय संघटना": "A National Association of Photographers",
  "एकजूट छायाचित्रकारांची,": "Photographers, United,",
  "उंची कलेची.": "Elevating the Art.",
  "शिका": "Learn",
  "जोडले जा": "Connect",
  "प्रगती करा": "Grow",
  "भारतातील छायाचित्रकारांना एकत्र आणणारे, अनुभव वाटून घेणारे आणि प्रत्येक फ्रेममधून नवी दृष्टी घडवणारे व्यासपीठ.": "A community that brings photographers together, shares experience, and inspires a fresh perspective in every frame.",
  "संघटनेविषयी": "About the Association",
  "कार्यशाळा पहा": "Explore Workshops",
  "पुढे पाहा": "Scroll to explore",
  "सक्रिय छायाचित्रकार": "Active Photographers",
  "राज्ये व केंद्रशासित प्रदेश": "States and Union Territories",
  "वार्षिक कार्यशाळा": "Workshops Each Year",
  "आंतरराष्ट्रीय पुरस्कार": "International Awards",
  "छायाचित्रकारांसोबत १५ वर्षांची वाटचाल": "15 Years Alongside Photographers",
  "आमच्याविषयी": "About Us",
  "छायाचित्रकारांसाठी खास उभी राहिलेली आमची संघटना गेली १५ वर्षे त्यांच्या हक्कांसाठी, कौशल्यविकासासाठी आणि कलेला योग्य व्यासपीठ मिळवून देण्यासाठी कार्यरत आहे.": "Built especially for photographers, our association has spent the past 15 years championing their rights, developing their skills, and creating platforms for their work.",
  "छायाचित्रणासाठी आधुनिक उपकरणे": "Modern photography equipment",
  "१५ वर्षे छायाचित्रकारांसाठी": "15 Years for Photographers",
  "एकत्र शिकू · एकत्र घडू": "Learn together · Grow together",
  "व्यावसायिक हक्क आणि सन्मान": "Professional Rights and Recognition",
  "छायाचित्रकारांचे हक्क, योग्य मानधन आणि बौद्धिक संपदेबाबत जागरूकता.": "Advocating photographers’ rights, fair fees, and intellectual property awareness.",
  "कौशल्य आणि ज्ञानाची देवाणघेवाण": "Skills and Knowledge Sharing",
  "अनुभवी मार्गदर्शकांसोबत प्रत्यक्ष प्रशिक्षण, संवाद आणि नवे तंत्रज्ञान.": "Hands-on training, discussion, and new technology with experienced mentors.",
  "कलेला व्यापक व्यासपीठ": "A Wider Platform for Art",
  "प्रदर्शने, फोटो सलून आणि राष्ट्रीय स्तरावर कलाकृतींना ओळख.": "Exhibitions, photo salons, and national recognition for members’ work.",
  "संस्थेचे मार्गदर्शक": "Our Community Leaders",
  "अध्यक्ष": "President",
  "उपाध्यक्ष": "Vice President",
  "सचिव": "Secretary",
  "कार्यकारी सदस्य": "Executive Member",
  "संपादक": "Editor",
  "खजिनदार": "Treasurer",
  "सह सचिव": "Joint Secretary",
  "सह खजिनदार": "Joint Treasurer",
  "कार्याध्यक्ष": "Working President",
  "सह कार्याध्यक्ष": "Joint Working President",
  "विद्यापीठ प्रतिनिधी": "University Representative",
  "सदस्य": "Member",
  "प्रसिद्धी प्रमुख": "Publicity Head",
  "संस्थापक सदस्य": "Founding Member",
  "सल्लागार सदस्य": "Advisory Member",
  "महिला सदस्य": "Women’s Representative",
  "शिका · प्रयोग करा · घडवा": "Learn · Experiment · Create",
  "कॅमेऱ्याच्या मागची": "Behind the Camera,",
  "नवी दृष्टी.": "A New Perspective.",
  "मैदानी अनुभव, उत्तम मार्गदर्शन आणि तुमच्या कलेसाठी नवी प्रेरणा.": "Field experience, expert guidance, and fresh inspiration for your craft.",
  "सर्व कार्यशाळा": "All Workshops",
  "आगामी संधी": "Upcoming Opportunities",
  "शिका आणि घडवा": "Learn and Create",
  "कार्यशाळा पाहा": "View Workshops",
  "छायाचित्रण कलेला समर्पित मार्गदर्शक आणि कार्यतत्पर पदाधिकारी.": "Dedicated mentors and committed office bearers, united by the art of photography.",
  "प्रकाश आणि पोर्ट्रेटची भाषा": "The Language of Light and Portraiture",
  "पोर्ट्रेट फोटोग्राफी": "Portrait Photography",
  "कॅमेऱ्याच्या पलीकडचं कथाकथन": "Stories Beyond the Camera",
  "डॉक्युमेंटरी": "Documentary",
  "स्टुडिओ लाईटिंग मास्टरक्लास": "Studio Lighting Masterclass",
  "लाईटिंग": "Lighting",
  "छायाचित्रण कार्यशाळेत सहभागी": "Participants at a photography workshop",
  "फ्रेममध्ये जपलेले क्षण": "Moments Preserved in a Frame",
  "आमची छायाचित्रे": "Our Photographs",
  "आपल्या सभासदांच्या नजरेतून भारत—संस्कृती, माणसं आणि निसर्ग.": "India through our members’ eyes—culture, people, and nature.",
  "सर्व छायाचित्रे": "All Photos",
  "पोर्ट्रेट": "Portraits",
  "संस्कृती": "Culture",
  "निसर्ग": "Nature",
  "IPPA फोटो सलून": "PCPA Photo Salon",
  "भारतीय छायाचित्रकार": "Indian photographer",
  "छायाचित्रण कार्यशाळा": "Photography workshop",
  "स्टुडिओमध्ये प्रकाशयोजना": "Studio lighting",
  "कॅमेरा प्रशिक्षण": "Camera training",
  "भारतीय संस्कृतीचे क्षण": "Moments from Indian culture",
  "कॅमेरा हातात घेतलेली व्यावसायिक छायाचित्रकार": "A professional photographer holding a camera",
  "दृष्टी तुमची. व्यासपीठ आमचं.": "Your vision. Our platform.",
  "तुमची पुढची फ्रेम इथून सुरू": "Your next frame starts here",
  "छायाचित्रकारांच्या": "Photographers’",
  "परिवाराचा": "Community",
  "भाग व्हा.": "Join Us.",
  "सहकार्य, सन्मान आणि सातत्याने शिकण्याची संधी—तुमच्या छायाचित्रण प्रवासासाठी.": "A place for collaboration, recognition, and continual learning on your photography journey.",
  "सक्रिय समुदाय": "A Connected Community",
  "संपूर्ण भारतातील सहकारी": "Peers across India",
  "विशेष प्रशिक्षण": "Expert Training",
  "कार्यशाळा आणि मार्गदर्शन": "Workshops and mentoring",
  "तुमच्या कलेला मंच": "A Platform for Your Work",
  "प्रदर्शन आणि फोटो सलून": "Exhibitions and photo salons",
  "सभासदत्वासाठी संपर्क": "Ask About Membership",
  "सभासदत्वासाठी खालील माहिती भरा.": "Fill in the details below to apply for membership.",
  "मोबाइल नंबर": "Mobile number",
  "शहर": "City",
  "तुमचं शहर": "Your city",
  "छायाचित्रणाचा अनुभव": "Photography experience",
  "अनुभव निवडा": "Select your experience",
  "१ वर्षापेक्षा कमी": "Less than 1 year",
  "१ ते ५ वर्षे": "1 to 5 years",
  "५ वर्षांपेक्षा जास्त": "More than 5 years",
  "तुमच्याबद्दल सांगा": "Tell us about yourself",
  "अर्ज पाठवा": "Submit Application",
  "फॉर्म बंद करा": "Close form",
  "पत्ता": "Address",
  "तुमचा पूर्ण पत्ता": "Full address",
  "स्टुडिओचे नाव": "Studio name",
  "आधार क्रमांक": "Aadhaar number",
  "उद्यम आधार": "Udyam Aadhaar",
  "उद्यम आधार क्रमांक (ऐच्छिक)": "Udyam Aadhaar number (optional)",
  "छायाचित्रणाचा अनुभव (वर्षे)": "Experience in photography (years)",
  "रक्तगट": "Blood group",
  "रक्तगट निवडा": "Select blood group",
  "सभासदत्वाचा कालावधी (वर्षे)": "Membership period (years)",
  "सभासद शुल्क (₹)": "Membership fee (₹)",
  "नोंदणी तारीख": "Registration date",
  "व्यवसाय (स्वल्पविरामाने वेगळे करा)": "Professions (comma separated)",
  "उदा. लग्न फोटोग्राफी, पोर्ट्रेट": "e.g. Wedding photography, portrait",
  "वापरत असलेले कॅमेरे (स्वल्पविरामाने वेगळे करा)": "Cameras used (comma separated)",
  "उदा. Canon, Nikon": "e.g. Canon, Nikon",
  "फोटो URL": "Photo URL",
  "आधार कार्ड फोटो URL": "Aadhaar photo URL",
  "उद्यम आधार फोटो URL": "Udyam Aadhaar photo URL",
  "सभासद नोंदणी यशस्वी झाली.": "Membership application submitted successfully.",
  "अर्ज पाठवता आला नाही. पुन्हा प्रयत्न करा.": "Could not submit the application. Please try again.",
  "पाठवत आहे…": "Submitting…",
  "सदस्याचा फोटो": "Member photo",
  "आधार कार्डचा फोटो": "Aadhaar card photo",
  "उद्यम आधारचा फोटो": "Udyam Aadhaar photo",
  "कृपया image file निवडा.": "Please choose an image file.",
  "Image file 5 MB पेक्षा लहान असावी.": "Image file must be smaller than 5 MB.",
  "Cloudinary सेटिंग तपासा.": "Check the Cloudinary configuration.",
  "Image upload अयशस्वी झाले.": "Image upload failed.",
  "अपलोड होत आहे…": "Uploading…",
  "Image upload पूर्ण होईपर्यंत थांबा.": "Wait for the image upload to finish.",
  "कृपया सदस्याचा आणि आधार कार्डचा फोटो अपलोड करा.": "Please upload the member photo and Aadhaar card photo.",
  "व्यवसाय": "Profession",
  "फोटोग्राफर": "Photographer",
  "सिनेमॅटोग्राफर": "Cinematographer",
  "व्हिडिओ एडिटर": "Video editor",
  "फोटो एडिटर": "Photo editor",
  "रील मेकर": "Reel maker",
  "इतर": "Other",
  "वापरत असलेले कॅमेरे": "Cameras used",
  "नमस्कार": "Hello",
  "तुमचा फॉर्म यशस्वीरित्या सबमिट झाला आहे.": "Your form has been submitted successfully.",
  "तुमचा सदस्य क्रमांक": "Your member number",
  "सदस्य क्रमांक API कडून मिळाला नाही. असोसिएशनकडून तुम्हाला लवकरच कॉल येईल.": "The API did not return a member number. The association will call you soon.",
  "असोसिएशनकडून तुम्हाला लवकरच कॉल येईल.": "The association will call you soon.",
  "ठीक आहे": "Done",
  "सूचना बंद करा": "Dismiss notification",
  "नवी ओळख, नवी सुरुवात": "A New Connection, A New Beginning",
  "आमच्याशी संपर्क साधा": "Get in Touch",
  "सभासदत्व, कार्यशाळा किंवा सहकार्य—आम्हाला लिहा.": "Questions about membership, workshops, or partnerships? Send us a message.",
  "IPPA संपर्क कक्ष": "PCPA Contact Desk",
  "बोलूया": "Let’s Talk",
  "छायाचित्रणाबद्दल.": "About Photography.",
  "तुमच्या प्रश्नांसाठी आणि कल्पनांसाठी आम्ही इथे आहोत.": "We’re here for your questions and ideas.",
  "मुंबई, महाराष्ट्र · भारत": "Pimpri-Chinchwad, Maharashtra · India",
  "नमस्कार, कसे मदत करू?": "Hello, how can we help?",
  "खाली माहिती भरा. आम्ही लवकरच संपर्क करू.": "Fill in the details below and we’ll be in touch.",
  "तुमचं नाव": "Your Name",
  "पूर्ण नाव": "Full name",
  "ईमेल पत्ता": "Email Address",
  "मला कशाबद्दल जाणून घ्यायचं आहे?": "What would you like to know about?",
  "एक पर्याय निवडा": "Choose an option",
  "सभासदत्व": "Membership",
  "इतर विचारणा": "Other enquiry",
  "तुमचा संदेश": "Your Message",
  "तुमचा संदेश इथे लिहा…": "Write your message here…",
  "संदेश पाठवा": "Send Message",
  "पिंपरी चिंचवड": "Pimpri-Chinchwad",
  "पिंपरी चिंचवडमधील छायाचित्रकारांची प्रतिष्ठा, कला आणि व्यावसायिक समृद्धीसाठी समर्पित.": "Dedicated to the recognition, craft, and professional growth of photographers in Pimpri-Chinchwad.",
  "जलद दुवे": "Quick Links",
  "दृष्टी असंख्य.": "Many visions.",
  "फ्रेम एकच—एकजुटीची.": "One frame—together.",
  "सर्व हक्क राखीव": "All rights reserved",
  "पुन्हा वर ↑": "Back to top ↑",
  "मेन्यू बंद करा": "Close menu",
  "मेन्यू उघडा": "Open menu",
  "असोसिएशन मेन्यू": "Association Menu",
  "मुख्यपृष्ठ": "Home",
  "सभासद नोंदणी": "Membership Registration",
  "महाराष्ट्र राज्य शाखा": "Maharashtra State Chapter",
  "व्यावसायिक छायाचित्रण कला संवर्धन": "Advancing the art of professional photography",
  "मोबाइल नेव्हिगेशन": "Mobile navigation",
  "मुख्य नेव्हिगेशन": "Main navigation",
  "मुख्य मेन्यू": "Main menu",
  "छायाचित्रकारांची टीम": "Photographers team",
  "पिंपरी चिंचवड फोटोग्राफर असोसिएशन लोगो": "Pimpri-Chinchwad Photographers Association logo",
  "पिंपरी चिंचवड फोटोग्राफर असोसिएशन मुख्यपृष्ठ": "Pimpri-Chinchwad Photographers Association home",
  "भारतीय विवाह सोहळ्याचे छायाचित्रण करणारा छायाचित्रकार": "A photographer capturing an Indian wedding",
  "कॅमेऱ्याच्या मागे छायाचित्रकार": "A photographer behind the camera",
  "पुणे": "Pune",
  "मुंबई": "Mumbai",
  "नाशिक": "Nashik",
  "२६ ऑक्टोबर · पुणे": "October 26 · Pune",
  "०२ नोव्हेंबर · मुंबई": "November 02 · Mumbai",
  "१६ नोव्हेंबर · नाशिक": "November 16 · Nashik",
  "योगेश कावळी (योगी)": "Yogesh Kawli (Yogi)",
  "शिवा बायगुल": "Shiva Baygul",
  "अशपाक शेख": "Ashpak Shaikh",
  "अनंत पिसे": "Anant Pise",
  "भूषण शाह": "Bhushan Shah",
  "नेतन हिवाळे": "Netan Hivale",
  "विजय जाधव": "Vijay Jadhav",
  "अमोल मानापाटील": "Amol Manapatil",
  "सुनीत कडवी": "Sunit Kadvi",
  "सचिन बीजापूर": "Sachin Bijapur",
  "प्रसाद गायकवाड": "Prasad Gaikwad",
  "तुषार शिंदे": "Tushar Shinde",
  "जगन्नाथ भुसरे": "Jagannath Bhusare",
  "महेंद्र बेंद्रे": "Mahendra Bendre",
  "उमा भाटकर": "Uma Bhatkar",
  "०१": "01",
  "०२": "02",
  "०३": "03",
  "०१ — ०५": "01 — 05",
  "फोटोग्राफर असोसिएशन": "Photographers Association",
  "फोन": "Phone",
  "छायाचित्रकार": "Photographer",
  "छायाचित्रे": "Photos",
  "ईमेल": "Email",
  "२०२५": "2025",
  "+९१ २२ २४५६ ७८९०": "+91 22 2456 7890",
};

type LanguageContextValue = { locale: Locale; setLocale: (locale: Locale) => void; t: (text: string) => string };
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = locale === "en"
      ? "Pimpri-Chinchwad Photographers Association"
      : "पिंपरी चिंचवड फोटोग्राफर असोसिएशन";
  }, [locale]);

  function t(text: string) {
    if (locale === "mr") return text;
    const translated = english[text] ?? text;
    return translated.replace(/[०-९]/g, (digit) => String("०१२३४५६७८९".indexOf(digit)));
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();
  const isMarathi = locale === "mr";
  return (
    <button
      className={`language-switch ${isMarathi ? "is-marathi" : ""}`}
      type="button"
      role="switch"
      aria-checked={isMarathi}
      aria-label={isMarathi ? "Switch language to English" : "भाषा मराठी करा"}
      onClick={() => setLocale(isMarathi ? "en" : "mr")}
    >
      <span className="language-switch-label">{isMarathi ? "मराठी" : "EN"}</span>
      <span className="language-switch-knob" aria-hidden="true" />
    </button>
  );
}
