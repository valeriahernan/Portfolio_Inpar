"use client";
import React, { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";

export default function BioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    if (gridRef?.current) observer?.observe(gridRef?.current);

    const revealEls = sectionRef?.current?.querySelectorAll(".reveal-blur, .reveal-up");
    revealEls?.forEach((el) => observer?.observe(el));

    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="bio"
      ref={sectionRef}
      className="relative bg-white border-b-2 border-foreground"
      aria-label="Bio section">
      
      {/* Section label bar */}
      <div className="border-b-2 border-foreground flex items-center justify-between px-6 lg:px-10 py-3">
        <div className="flex items-center gap-3">
          <span
            className="font-display font-black text-2xl lg:text-3xl uppercase tracking-tight"
            style={{ fontStyle: "italic" }}>
            
            01 — Bio
          </span>
          <span className="archive-tag">ARTIST STATEMENT</span>
        </div>
        <div className="flex gap-2">
          <span
            className="pill-btn text-xs"
            style={{ background: "var(--magenta, #FF00AA)", color: "var(--foreground)" }}>
            
            ABOUT
          </span>
        </div>
      </div>
      {/* Main content: asymmetric grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
        {/* Left: large image */}
        <div
          className="lg:col-span-4 relative border-r-2 border-foreground overflow-hidden"
          style={{ minHeight: "400px" }}>
          
          <AppImage
            src="https://images.unsplash.com/photo-1591329112356-06dd084da130"
            alt="Artist portrait in a studio environment with creative work displayed behind"
            fill
            className="object-cover" />
          
          {/* Color overlay strip */}
          <div
            className="absolute bottom-0 left-0 right-0 h-2"
            style={{ background: "var(--green)" }} />
          
          {/* Floating tag */}
          <div className="absolute top-4 left-4">
            <span className="archive-tag">MULTIDISCIPLINARY ARTIST</span>
          </div>
        </div>

        {/* Center: statement text */}
        <div className="lg:col-span-5 px-6 lg:px-10 py-8 border-r-2 border-foreground flex flex-col justify-between">
          <div className="reveal-blur">
            <h2
              className="font-display font-black text-foreground mb-6 uppercase leading-none"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontStyle: "italic",
                letterSpacing: "-0.02em"
              }}>
              
              Making Work That Lives Between Disciplines
            </h2>

            <div className="space-y-4 font-sans">
              <p className="text-sm lg:text-base leading-relaxed text-foreground font-medium uppercase">
                MY PRACTICE SPANS GRAPHIC DESIGN, VISUAL ART, MUSIC PRODUCTION, FILM, AND CULTURAL PROGRAMMING — EACH DISCIPLINE FEEDING THE OTHERS IN AN ONGOING CREATIVE CONVERSATION.
              </p>
              <p className="text-sm leading-relaxed text-foreground/70 uppercase">
                I WORK AT THE INTERSECTION OF ARCHIVE AND INVENTION, DRAWING ON HISTORICAL MATERIALS TO BUILD NEW IMAGINARIES. EXHIBITIONS, RECORDS, ZINES, AND EVENTS ARE ALL PART OF THE SAME PROJECT.
              </p>
              <p className="text-sm leading-relaxed text-foreground/70 uppercase">
                BASED BETWEEN LONDON AND ACCRA. AVAILABLE FOR COMMISSIONS, COLLABORATIONS, AND RESIDENCIES.
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div
            className="mt-8 grid grid-cols-3 gap-4 border-t-2 border-foreground pt-6 reveal-up"
            style={{ transitionDelay: "0.2s" }}>
            
            {[
            { num: "12+", label: "Years Practice" },
            { num: "40+", label: "Exhibitions" },
            { num: "6", label: "Disciplines" }]?.
            map((stat) =>
            <div key={stat?.label} className="text-center">
                <div
                className="font-display font-black text-3xl lg:text-4xl"
                style={{ fontStyle: "italic", color: "var(--green)" }}>
                
                  {stat?.num}
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-foreground/60 mt-1">
                  {stat?.label}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: skills/tags block */}
        <div className="lg:col-span-3 py-8 px-6 flex flex-col gap-4">
          <div className="reveal-blur" style={{ transitionDelay: "0.3s" }}>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-4">
              DISCIPLINES
            </p>
            <div className="flex flex-wrap gap-2">
              {[
              "Graphic Design",
              "Visual Art",
              "Music Production",
              "Film & Video",
              "Cultural Management",
              "Exhibition Curation",
              "Zine Making",
              "Community Projects",
              "Sound Design",
              "Art Direction"]?.
              map((skill) =>
              <span
                key={skill}
                className="blob-btn text-[0.65rem] px-3 py-2"
                style={{ minWidth: "unset", minHeight: "unset", borderRadius: "50% 40% 55% 45% / 45% 55% 40% 50%" }}>
                
                  {skill}
                </span>
              )}
            </div>
          </div>

          {/* Color coded section preview */}
          <div className="mt-auto reveal-up" style={{ transitionDelay: "0.4s" }}>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-3">
              SECTIONS
            </p>
            <div className="flex flex-col gap-2">
              {[
              { color: "#FF00AA", label: "Graphic Design" },
              { color: "#FF6B00", label: "Artwork" },
              { color: "#0A0A0A", label: "Musical Project" },
              { color: "#87CEEB", label: "Multimedia" },
              { color: "#00D04B", label: "Cultural Management" }]?.
              map((item) =>
              <div key={item?.label} className="flex items-center gap-2">
                  <div
                  className="w-4 h-4 rounded-full border-2 border-foreground flex-shrink-0"
                  style={{ background: item?.color }} />
                
                  <span className="font-sans text-xs font-medium uppercase">
                    {item?.label}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}