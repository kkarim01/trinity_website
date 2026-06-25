import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { OurApproach } from "@/components/sections/OurApproach";
import { Pillars } from "@/components/sections/Pillars";

export default function Home() {
  return (
    <>
      <main id="top">
        <Header />
        <Hero />
        <OurApproach />
        <Pillars />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
