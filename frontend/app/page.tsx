import { Contact } from "@/components/sections/Contact";
import { HeaderTextVariantProvider } from "@/components/dev/HeaderTextVariantContext";
import { HeaderTextVariantToggle } from "@/components/dev/HeaderTextVariantToggle";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { OurApproach } from "@/components/sections/OurApproach";
import { Pillars } from "@/components/sections/Pillars";

export default function Home() {
  return (
    // TEMP preview wrapper — see HeaderTextVariantContext.tsx for removal notes.
    <HeaderTextVariantProvider>
      <main id="top">
        <Header />
        <Hero />
        <OurApproach />
        <Pillars />
        <Contact />
      </main>
      <Footer />
      <HeaderTextVariantToggle />
    </HeaderTextVariantProvider>
  );
}
