"use client";
import React, { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

const graphicProjects = [
{
  title: "SOMERSET HOUSE IDENTITY",
  year: "2024",
  tags: ["Branding", "Print"],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10560d297-1774396597027.png",
  alt: "Bold graphic design identity system with geometric shapes and typography",
  color: "#FF00AA",
  span: "col-span-2"
},
{
  title: "AFROFUTURIST ZINE VOL.3",
  year: "2023",
  tags: ["Editorial", "Zine"],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_14798b7f1-1772480826966.png",
  alt: "Colorful editorial zine spread with bold typography and abstract imagery",
  color: "#FFE500",
  span: "col-span-1"
},
{
  title: "RADICAL ARCHIVE POSTER SERIES",
  year: "2023",
  tags: ["Poster", "Typography"],
  image: "https://images.unsplash.com/photo-1558100984-01e6cd6fc9aa",
  alt: "Series of bold typographic posters with vivid color backgrounds",
  color: "#00D04B",
  span: "col-span-1"
},
{
  title: "DISOBEDIENT OBJECTS CATALOGUE",
  year: "2022",
  tags: ["Publication", "Art Direction"],
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_133b74f85-1772511006252.png",
  alt: "Art exhibition catalogue with clean white pages and bold imagery",
  color: "#87CEEB",
  span: "col-span-2"
}];


const artworkProjects = [
{
  title: "IMAGINARY WORLDS I–VI",
  year: "2024",
  medium: "Mixed Media / Installation",
  image: "https://images.unsplash.com/photo-1709909957392-7aa54730c1ec",
  alt: "Large scale mixed media installation with vivid colors and found objects",
  color: "#FF6B00",
  large: true
},
{
  title: "BLACK BRITISH FUTURES",
  year: "2023",
  medium: "Photography / Collage",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e3ea6c42-1774396594332.png",
  alt: "Photographic collage series exploring Black British cultural identity",
  color: "#FF00AA",
  large: false
},
{
  title: "ARCHIVE FEVER",
  year: "2022",
  medium: "Video / Found Materials",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e3103878-1774396594883.png",
  alt: "Video installation with archival footage and found historical materials",
  color: "#00D04B",
  large: false
}];


export default function WorkGridSection() {
  const graphicRef = useRef<HTMLDivElement>(null);
  const artworkRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.08 }
    );

    if (graphicRef?.current) observer?.observe(graphicRef?.current);
    if (artworkRef?.current) observer?.observe(artworkRef?.current);
    if (sectionRef?.current) {
      sectionRef?.current?.querySelectorAll(".reveal-blur, .reveal-up")?.forEach((el) =>
      observer?.observe(el)
      );
    }

    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="graphic-design"
      ref={sectionRef}
      className="relative bg-white"
      aria-label="Work sections: Graphic Design and Artwork">
      
      {/* ── GRAPHIC DESIGN ── */}
      <div className="border-b-2 border-foreground">
        {/* Header */}
        <div
          className="border-b-2 border-foreground flex items-center justify-between px-6 lg:px-10 py-3"
          style={{ background: "#FF00AA" }}>
          
          <div className="flex items-center gap-3">
            <span
              className="font-display font-black text-2xl lg:text-3xl uppercase tracking-tight text-white"
              style={{ fontStyle: "italic" }}>
              
              02 — Graphic Design
            </span>
          </div>
          <div className="flex gap-2">
            <span className="pill-btn text-xs" style={{ background: "var(--yellow)" }}>
              SELECTED WORKS
            </span>
            <span className="font-mono text-xs text-white self-center">
              {graphicProjects?.length} PROJECTS
            </span>
          </div>
        </div>

        {/* Bento Grid */}
        <div
          ref={graphicRef}
          className="stagger-grid grid grid-cols-1 md:grid-cols-3 gap-0">
          
          {graphicProjects?.map((project, i) =>
          <div
            key={project?.title}
            className={`group project-row relative border-b-2 border-r-2 border-foreground overflow-hidden cursor-pointer hover-shine ${
            i === 0 ? "md:col-span-2" : i === 3 ? "md:col-span-2" : "md:col-span-1"}`
            }
            style={{ minHeight: "280px" }}>
            
              {/* Image */}
              <div className="absolute inset-0">
                <AppImage
                src={project?.image}
                alt={project?.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105" />
              
                <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background: `${project?.color}CC`,
                  opacity: 0.7
                }} />
              
              </div>

              {/* Content */}
              <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex gap-1 flex-wrap">
                    {project?.tags?.map((tag) =>
                  <span key={tag} className="archive-tag">
                        {tag}
                      </span>
                  )}
                  </div>
                  <span className="font-mono text-xs text-white font-bold">
                    {project?.year}
                  </span>
                </div>

                <div>
                  <h3
                  className="font-display font-black text-white uppercase leading-tight mb-2"
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.5rem)",
                    fontStyle: "italic",
                    letterSpacing: "-0.01em",
                    textShadow: "1px 1px 0 rgba(0,0,0,0.3)"
                  }}>
                  
                    {project?.title}
                  </h3>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="pill-btn text-[0.6rem] py-1 px-3" style={{ background: "var(--yellow)" }}>
                      VIEW PROJECT
                    </span>
                    <Icon name="ArrowRightIcon" size={14} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* ── ARTWORK ── */}
      <div id="artwork" className="border-b-2 border-foreground">
        {/* Header */}
        <div
          className="border-b-2 border-foreground flex items-center justify-between px-6 lg:px-10 py-3"
          style={{ background: "#FF6B00" }}>
          
          <div className="flex items-center gap-3">
            <span
              className="font-display font-black text-2xl lg:text-3xl uppercase tracking-tight text-white"
              style={{ fontStyle: "italic" }}>
              
              03 — Artwork
            </span>
          </div>
          <div className="flex gap-2">
            <span className="pill-btn text-xs" style={{ background: "var(--yellow)" }}>
              EXHIBITIONS
            </span>
            <span className="font-mono text-xs text-white self-center">
              {artworkProjects?.length} SERIES
            </span>
          </div>
        </div>

        {/* Artwork grid: asymmetric */}
        <div
          ref={artworkRef}
          className="stagger-grid grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Large featured work */}
          <div
            className="lg:col-span-7 group project-row relative border-b-2 lg:border-b-0 lg:border-r-2 border-foreground overflow-hidden cursor-pointer"
            style={{ minHeight: "420px" }}>
            
            <AppImage
              src={artworkProjects?.[0]?.image}
              alt={artworkProjects?.[0]?.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105" />
            
            <div
              className="absolute inset-0"
              style={{ background: "rgba(255,107,0,0.5)" }} />
            
            <div className="relative z-10 p-6 h-full flex flex-col justify-between">
              <div>
                <span className="archive-tag">FEATURED</span>
              </div>
              <div>
                <span className="font-mono text-xs text-white mb-2 block">
                  {artworkProjects?.[0]?.medium} · {artworkProjects?.[0]?.year}
                </span>
                <h3
                  className="font-display font-black text-white uppercase leading-none"
                  style={{
                    fontSize: "clamp(1.5rem, 4vw, 3rem)",
                    fontStyle: "italic",
                    letterSpacing: "-0.02em"
                  }}>
                  
                  {artworkProjects?.[0]?.title}
                </h3>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="pill-btn text-xs" style={{ background: "var(--yellow)" }}>
                    EXPLORE SERIES →
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: two smaller works */}
          <div className="lg:col-span-5 flex flex-col">
            {artworkProjects?.slice(1)?.map((project, i) =>
            <div
              key={project?.title}
              className={`group project-row relative flex-1 overflow-hidden cursor-pointer border-foreground ${
              i === 0 ? "border-b-2" : ""}`
              }
              style={{ minHeight: "210px" }}>
              
                <AppImage
                src={project?.image}
                alt={project?.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105" />
              
                <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{ background: `${project?.color}99` }} />
              
                <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                  <span className="font-mono text-xs text-white">{project?.year}</span>
                  <div>
                    <span className="font-mono text-[0.65rem] text-white/80 block mb-1 uppercase">
                      {project?.medium}
                    </span>
                    <h3
                    className="font-display font-black text-white uppercase leading-tight"
                    style={{
                      fontSize: "clamp(1rem, 2vw, 1.4rem)",
                      fontStyle: "italic"
                    }}>
                    
                      {project?.title}
                    </h3>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="pill-btn text-[0.6rem] py-1 px-3" style={{ background: "var(--yellow)" }}>
                        VIEW →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}