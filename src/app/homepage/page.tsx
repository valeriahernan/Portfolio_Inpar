import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "./components/HeroSection";
import BioSection from "./components/BioSection";
import WorkGridSection from "./components/WorkGridSection";
import MusicMultimediaSection from "./components/MusicMultimediaSection";
import CulturalManagementSection from "./components/CulturalManagementSection";

export default function Homepage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <BioSection />
      <WorkGridSection />
      <MusicMultimediaSection />
      <CulturalManagementSection />
      <Footer />
    </main>
  );
}