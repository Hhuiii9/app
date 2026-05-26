import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ExperienceShowcase from "@/components/home/ExperienceShowcase";
import ContactCTA from "@/components/home/ContactCTA";
import OfferSection from "@/components/home/OfferSection";

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#03131d] text-white">
      <HeroSection />

      {/* SECTION 2 — ABOUT (BLUR-TO-CLEAR NARRATIVE + PARALLAX DEPTH) */}
      <AboutPreview />

      <OfferSection/>

      {/* SECTION 5 — EXPERIENCE SHOWCASE (GSAP HORIZONTAL PINNED SCROLL) */}
      <ExperienceShowcase />


      {/* SECTION 6 — CTA (DARK PREMIUM GLOWING BLOCK) */}
      <ContactCTA />
    </main>
  );
}