"use client";
import React, { useEffect, useRef, useState } from "react";
import AppImage from "@/components/ui/AppImage";

const navPills = [
{ label: "Bio", href: "#bio", color: "var(--yellow)" },
{ label: "Graphic Design", href: "#graphic-design", color: "var(--yellow)" },
{ label: "Artwork", href: "#artwork", color: "var(--yellow)" },
{ label: "Musical Project", href: "#musical-project", color: "var(--yellow)" },
{ label: "Multimedia", href: "#multimedia", color: "var(--yellow)" },
{ label: "Cultural Management", href: "#cultural-management", color: "var(--yellow)" }];


const sidebarSections = [
{ color: "#FF00AA", label: "Graphic Design", href: "#graphic-design" },
{ color: "#FF6B00", label: "Artwork", href: "#artwork" },
{ color: "#87CEEB", label: "Musical Project", href: "#musical-project" }];


const processSteps = [
{ label: "PICK A\nSECTION" },
{ label: "EXPLORE\nTHE WORK" },
{ label: "CONNECT\nWITH ME" }];


export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  // Split title into chars
  const titleLine1 = "A MULTIDISCIPLINARY";
  const titleLine2 = "ARTIST";
  const titleLine3 = "ARCHIVE";

  const renderChars = (text: string, baseDelay: number) =>
  text.split("").map((char, i) =>
  <span
    key={i}
    className="char-reveal"
    style={{ transitionDelay: `${baseDelay + i * 0.03}s` }}
    aria-hidden="true">
    
        {char === " " ? "\u00A0" : char}
      </span>
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex overflow-hidden pt-16"
      style={{ background: "var(--green)" }}
      aria-label="Hero section">
      
      {/* Left sidebar: color blocks */}
      <aside className="hidden md:flex flex-col w-[180px] lg:w-[220px] flex-shrink-0 border-r-2 border-foreground">
        {/* Sky image top */}
        <div className="relative flex-1 overflow-hidden border-b-2 border-foreground" style={{ minHeight: "160px" }}>
          <AppImage
            src="https://images.unsplash.com/photo-1601650888781-e75bd31ec9d2"
            alt="Blue sky with white clouds, atmospheric landscape"
            fill
            className="object-cover" />
          
        </div>

        {/* Magenta block */}
        <div
          className="flex-1 flex flex-col items-center justify-center border-b-2 border-foreground hover-shine cursor-pointer transition-all duration-300 hover:brightness-110"
          style={{ background: "#FF00AA", minHeight: "140px" }}>
          
          <a href="#graphic-design" className="pill-btn text-xs" style={{ background: "var(--yellow)" }}>
            GRAPHIC DESIGN
          </a>
        </div>

        {/* Orange block */}
        <div
          className="flex-1 flex flex-col items-center justify-center border-b-2 border-foreground hover-shine cursor-pointer transition-all duration-300 hover:brightness-110"
          style={{ background: "#FF6B00", minHeight: "140px" }}>
          
          <a href="#artwork" className="pill-btn text-xs" style={{ background: "var(--yellow)" }}>
            ARTWORK
          </a>
        </div>

        {/* Sky blue block with sub-pills */}
        <div
          className="flex-1 flex flex-col items-center justify-center gap-3 border-b-2 border-foreground hover-shine cursor-pointer transition-all duration-300 hover:brightness-110"
          style={{ background: "#87CEEB", minHeight: "140px" }}>
          
          <a href="#musical-project" className="pill-btn text-[0.65rem]" style={{ background: "var(--yellow)" }}>
            MUSICAL PROJECT
          </a>
          <a href="#multimedia" className="pill-btn text-[0.65rem]" style={{ background: "var(--yellow)" }}>
            MULTIMEDIA
          </a>
        </div>

        {/* Cloud image bottom */}
        <div className="relative overflow-hidden" style={{ minHeight: "120px" }}>
          <AppImage
            src="https://images.unsplash.com/photo-1724665919900-5803e8826f96"
            alt="Fluffy white clouds against blue sky"
            fill
            className="object-cover" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-end gap-2 pb-3 px-2">
            <a href="#cultural-management" className="pill-btn text-[0.6rem] w-full text-center" style={{ background: "var(--yellow)" }}>
              CULTURAL MGT
            </a>
          </div>
        </div>
      </aside>

      {/* Main hero content */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {/* Scan line effect */}
        <div
          className="scan-line absolute left-0 w-full h-1 pointer-events-none z-10"
          style={{ background: "rgba(255,255,255,0.15)" }} />
        

        {/* Top area: massive title */}
        <div
          ref={titleRef}
          className="relative z-10 px-6 lg:px-10 pt-8 pb-4"
          aria-label="A Multidisciplinary Artist Archive">
          
          {/* Archive tag top-right */}
          <div className="absolute top-6 right-6 flex items-center gap-2">
            <span className="archive-tag">ARTIST TOOLKIT 1.0</span>
            <div
              className="w-8 h-8 rounded-full border-2 border-foreground flex items-center justify-center text-xs font-bold cursor-pointer hover:bg-foreground hover:text-white transition-colors"
              style={{ background: "var(--yellow)" }}
              title="About this site">
              
              ?
            </div>
          </div>

          {/* Giant display title */}
          <h1
            className="font-display font-black text-foreground leading-none select-none"
            style={{
              fontSize: "clamp(2.2rem, 7.5vw, 7rem)",
              lineHeight: "0.88",
              letterSpacing: "-0.02em",
              fontStyle: "italic"
            }}>
            
            <div className="block overflow-hidden">
              {renderChars(titleLine1, 0.1)}
            </div>
            <div className="block overflow-hidden mt-1">
              {renderChars(titleLine2, 0.4)}
            </div>
            <div className="block overflow-hidden mt-1">
              {renderChars(titleLine3, 0.65)}
            </div>
          </h1>
        </div>

        {/* Middle: description + cloud image */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
          {/* Left: description text */}
          <div className="px-6 lg:px-10 py-6 flex flex-col justify-between">
            <div className="reveal-blur">
              <p
                className="font-sans font-bold text-foreground text-sm lg:text-base leading-relaxed uppercase mb-3"
                style={{ maxWidth: "480px" }}>
                
                WELCOME TO THE ARCHIVE.
              </p>
              <p
                className="font-sans font-medium text-foreground text-sm lg:text-base leading-relaxed uppercase mb-3"
                style={{ maxWidth: "480px" }}>
                
                EXPLORE THE CREATIVE PRACTICE OF A MULTIDISCIPLINARY ARTIST WORKING ACROSS VISUAL ART, SOUND, AND CULTURE.
              </p>
              <p
                className="font-sans font-medium text-foreground text-sm leading-relaxed uppercase mb-3"
                style={{ maxWidth: "480px" }}>
                
                USING OBJECTS, IMAGES, AND SOUND DRAWN FROM YEARS OF PRACTICE — SPANNING EXHIBITIONS, RECORDS, AND COMMUNITY PROJECTS.
              </p>
              <p
                className="font-sans font-medium text-foreground text-sm leading-relaxed uppercase"
                style={{ maxWidth: "480px" }}>
                
                NAVIGATE THE SECTIONS BELOW & ENGAGE WITH THE LIVING ARCHIVE.
              </p>
            </div>

            {/* Process flow steps */}
            <div className="mt-8 flex flex-wrap items-center gap-3 reveal-blur" style={{ transitionDelay: "0.3s" }}>
              {processSteps.map((step, i) =>
              <React.Fragment key={step.label}>
                  <div
                  className="blob-btn"
                  style={{
                    minWidth: "110px",
                    minHeight: "70px",
                    fontSize: "0.7rem",
                    whiteSpace: "pre-line"
                  }}>
                  
                    {step.label}
                  </div>
                  {i < processSteps.length - 1 &&
                <span className="text-foreground font-black text-xl">→</span>
                }
                </React.Fragment>
              )}
            </div>

            {/* START button */}
            <div className="mt-6 reveal-blur" style={{ transitionDelay: "0.5s" }}>
              <a
                href="#bio"
                className="pill-btn text-base px-10 py-3"
                style={{ background: "var(--yellow)", fontSize: "1rem", border: "3px solid var(--foreground)" }}>
                
                START
              </a>
            </div>
          </div>

          {/* Right: cloud portal image */}
          <div className="relative hidden lg:flex items-center justify-center p-6">
            <div
              className="relative overflow-hidden float-anim"
              style={{
                width: "min(340px, 90%)",
                aspectRatio: "3/4",
                border: "3px solid var(--foreground)",
                borderRadius: "8px",
                boxShadow: "8px 8px 0 var(--foreground)"
              }}>
              
              <AppImage
                src="https://images.unsplash.com/photo-1723740459304-76c7a09faf7e"
                alt="Dramatic blue sky with towering white clouds, ethereal atmosphere"
                fill
                className="object-cover"
                priority />
              
              {/* Green glow overlay edges */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 60px 20px var(--green)"
                }} />
              
            </div>
          </div>
        </div>

        {/* Bottom mobile nav pills */}
        <div className="md:hidden px-4 pb-6 flex flex-wrap gap-2 justify-center relative z-10">
          {navPills.map((pill) =>
          <a key={pill.href} href={pill.href} className="pill-btn text-xs">
              {pill.label}
            </a>
          )}
        </div>
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-20"
        style={{
          backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px"
        }} />
      
    </section>);

}