import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import OfferSection from "@/components/home/OfferSection";
import CoursesSection from "@/components/home/CoursesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-slate-950 text-white">
      <HeroSection />

      <AboutPreview />

      <OfferSection />

      <CoursesSection />

      <WhyChooseUs />

      <ContactCTA />
    </main>
  );
}