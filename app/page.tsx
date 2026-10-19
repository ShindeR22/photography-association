import {
  AboutSection,
  GallerySection,
  HeroSection,
  MembershipSection,
  TeamSection,
  WorkshopsSection,
} from "@/components/sections";
import {
  ContactSection,
  SiteFooter,
  SiteHeader,
} from "@/components/site-chrome";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <WorkshopsSection />
      <GallerySection />
      <MembershipSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
