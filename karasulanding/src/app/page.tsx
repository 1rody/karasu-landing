'use client'
import Image from "next/image";

import NavLanding from "../components/layout/navbars";
import HeroSection from "../components/pages/landing/hero";
import Featured from "../components/pages/landing/featured";

export default function Home() {
  return (
    <>
      <NavLanding/>
      <HeroSection/>
      <Featured/>
    </>
  );
}
