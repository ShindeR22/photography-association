import { ArrowRight, Camera, Mail, MapPin, Phone } from "lucide-react";
import { MobileNavigation } from "./mobile-navigation";

const navigation = [
  { href: "#about", label: "संघटना" },
  { href: "#team", label: "आमची टीम" },
  { href: "#workshops", label: "कार्यशाळा" },
  { href: "#gallery", label: "गॅलरी" },
  { href: "#contact", label: "संपर्क" },
];

function Brand() {
  return (
    <span className="brand">
      <span className="brand-mark">
        <Camera size={20} />
      </span>
      <span>
        <strong>IPPA</strong>
        <small>भारतीय व्यावसायिक छायाचित्रकार संघटना</small>
      </span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <a href="#home" aria-label="IPPA मुख्यपृष्ठ">
        <Brand />
      </a>
      <nav aria-label="मुख्य नेव्हिगेशन">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#membership">
        सभासद व्हा <ArrowRight size={15} />
      </a>
      <MobileNavigation />
    </header>
  );
}

function ContactDetails() {
  return (
    <div className="contact-card">
      <span className="eyebrow">IPPA संपर्क कक्ष</span>
      <h3>
        बोलूया
        <br />
        <em>छायाचित्रणाबद्दल.</em>
      </h3>
      <p>तुमच्या प्रश्नांसाठी आणि कल्पनांसाठी आम्ही इथे आहोत.</p>
      <a href="mailto:info@ippaindia.org">
        <Mail size={17} /> info@ippaindia.org
      </a>
      <a href="tel:+912224567890">
        <Phone size={17} /> +९१ २२ २४५६ ७८९०
      </a>
      <span>
        <MapPin size={17} /> मुंबई, महाराष्ट्र · भारत
      </span>
      <div className="socials">
        <a href="#gallery" aria-label="छायाचित्रे">
          <Camera size={18} />
        </a>
        <a href="mailto:info@ippaindia.org" aria-label="ईमेल">
          <Mail size={18} />
        </a>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <form className="contact-form" action="mailto:info@ippaindia.org" method="get">
      <div className="form-heading">
        <h3>नमस्कार, कसे मदत करू?</h3>
        <p>खाली माहिती भरा. आम्ही लवकरच संपर्क करू.</p>
      </div>
      <div className="form-row">
        <label>
          तुमचं नाव
          <input name="name" placeholder="पूर्ण नाव" required />
        </label>
        <label>
          ईमेल पत्ता
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </label>
      </div>
      <label>
        मला कशाबद्दल जाणून घ्यायचं आहे?
        <select name="subject" defaultValue="">
          <option value="" disabled>
            एक पर्याय निवडा
          </option>
          <option>सभासदत्व</option>
          <option>कार्यशाळा</option>
          <option>इतर विचारणा</option>
        </select>
      </label>
      <label>
        तुमचा संदेश
        <textarea
          name="body"
          placeholder="तुमचा संदेश इथे लिहा…"
          rows={3}
        />
      </label>
      <button className="button" type="submit">
        संदेश पाठवा <ArrowRight size={16} />
      </button>
    </form>
  );
}

export function ContactSection() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">नवी ओळख, नवी सुरुवात</span>
          <h2>आमच्याशी संपर्क साधा</h2>
          <p>सभासदत्व, कार्यशाळा किंवा सहकार्य—आम्हाला लिहा.</p>
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
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <a href="#home" aria-label="IPPA मुख्यपृष्ठ">
            <Brand />
          </a>
          <p>
            छायाचित्रकारांची प्रतिष्ठा, कला आणि व्यावसायिक समृद्धीसाठी समर्पित.
          </p>
        </div>
        <div>
          <span className="footer-label">जलद दुवे</span>
          <a href="#about">आमच्याविषयी</a>
          <a href="#team">आमची टीम</a>
          <a href="#workshops">कार्यशाळा</a>
        </div>
        <div>
          <span className="footer-label">संपर्क</span>
          <a href="mailto:info@ippaindia.org">info@ippaindia.org</a>
          <a href="tel:+912224567890">+९१ २२ २४५६ ७८९०</a>
          <a href="#contact">मुंबई, महाराष्ट्र · भारत</a>
        </div>
        <div className="footer-note">
          दृष्टी असंख्य.
          <br />
          <em>फ्रेम एकच—एकजुटीची.</em>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© २०२५ IPPA · सर्व हक्क राखीव</span>
        <a href="#home">पुन्हा वर ↑</a>
      </div>
    </footer>
  );
}
