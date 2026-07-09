'use client'

import NavLanding from "../components/layout/navbars";
import Footer from "../components/layout/footers";
import GlitchButtons from "../components/ui/glitchButtons";
import HeroSection from "../components/pages/landing/hero";
import Featured from "../components/pages/landing/featured";
import AboutSection from "../components/pages/landing/about";
import ContactSection from "../components/pages/landing/contact";

export default function Home() {
  return (
    <>
      <NavLanding/>
      <GlitchButtons/>
      <HeroSection/>
      <Featured/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
