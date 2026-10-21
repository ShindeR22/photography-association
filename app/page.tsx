import { AboutSection } from "@/components/sections/about-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MembershipSection } from "@/components/sections/membership-section";
import { TeamSection } from "@/components/sections/team-section";
import { WorkshopsSection } from "@/components/sections/workshops-section";
import {
  ContactSection,
  SiteFooter,
  SiteHeader,
} from "@/components/navigation/site-chrome";

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
