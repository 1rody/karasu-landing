'use client'
import Image from "next/image";
import NavLanding from "../components/layout/navbars";
import HeroSection from "../components/pages/landing/hero";



export default function Home() {
  return (
    <>
      <NavLanding/>
      <HeroSection/>
    </>
  );
}
