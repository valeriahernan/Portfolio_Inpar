"use client";
import React, { useEffect, useRef, useState } from "react";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

const musicReleases = [
{
  title: "AFRO NOWISM",
  type: "LP",
  year: "2024",
  label: "Independent",
  tracks: 11,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1de15eef5-1770939305234.png",
  alt: "Abstract music album cover with geometric shapes and deep colors",
  color: "#00D04B"
},
{
  title: "DISOBEDIENT FREQUENCIES",
  type: "EP",
  year: "2023",
  label: "Bandcamp",
  tracks: 5,
  image: "https://images.unsplash.com/photo-1604923556249-4ee0d83a6b7f",
  alt: "Music studio with synthesizers and recording equipment in dim light",
  color: "#FF00AA"
},
{
  title: "POLITICAL SOUND ARCHIVE",
  type: "Compilation",
  year: "2022",
  label: "SoundCloud",
  tracks: 18,
  image: "https://images.unsplash.com/photo-1673260754698-6b81321fda08",
  alt: "Vinyl records stacked with colorful album sleeves",
  color: "#FFE500"
}];


const multimediaWorks = [
{
  title: "IMAGINARY GEOGRAPHIES",
  type: "Short Film",
  duration: "14 min",
  year: "2024",
  image: "https://images.unsplash.com/photo-1671617276076-dad9cb1d6134",
  alt: "Film still showing dramatic landscape with layered visual textures"
},
{
  title: "ORAL HISTORIES PROJECT",
  type: "Documentary Series",
  duration: "3 × 22 min",
  year: "2023",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10e7fd575-1772769512322.png",
  alt: "Documentary film still showing two people in conversation, warm lighting"
},
{
  title: "THE ARCHIVE SPEAKS",
  type: "Video Installation",
  duration: "Loop",
  year: "2022",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a1d9be14-1767516382705.png",
  alt: "Video installation in gallery space with projected imagery on multiple screens"
}];


const MusicBar = ({ delay, duration }: {delay: number;duration: number;}) =>
<div
  className="music-bar w-1.5 rounded-full"
  style={{
    background: "var(--green)",
    "--delay": `${delay}s`,
    "--duration": `${duration}s`,
    minHeight: "8px"
  } as React.CSSProperties} />;



export default function MusicMultimediaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const musicGridRef = useRef<HTMLDivElement>(null);
  const mediaGridRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState<number | null>(null);

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

    if (musicGridRef.current) observer.observe(musicGridRef.current);
    if (mediaGridRef.current) observer.observe(mediaGridRef.current);
    if (sectionRef.current) {
      sectionRef.current.querySelectorAll(".reveal-blur, .reveal-up").forEach((el) =>
      observer.observe(el)
      );
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="musical-project"
      ref={sectionRef}
      className="relative"
      style={{ background: "#0A0A0A" }}
      aria-label="Musical Project and Multimedia sections">
      
      {/* ── MUSICAL PROJECT ── */}
      <div className="border-b-2 border-white/20">
        {/* Header */}
        <div
          className="border-b-2 flex items-center justify-between px-6 lg:px-10 py-3"
          style={{ borderColor: "rgba(255,255,255,0.15)" }}>
          
          <div className="flex items-center gap-3">
            <span
              className="font-display font-black text-2xl lg:text-3xl uppercase tracking-tight text-white"
              style={{ fontStyle: "italic" }}>
              
              04 — Musical Project
            </span>
            {/* Live music bars */}
            <div className="flex items-end gap-0.5 h-6 ml-2">
              {[0.1, 0.3, 0.0, 0.5, 0.2].map((d, i) =>
              <MusicBar key={i} delay={d} duration={0.9 + i * 0.15} />
              )}
            </div>
          </div>
          <span className="pill-btn text-xs" style={{ background: "var(--green)" }}>
            LISTEN
          </span>
        </div>

        {/* Music releases grid */}
        <div
          ref={musicGridRef}
          className="stagger-grid grid grid-cols-1 md:grid-cols-3 gap-0">
          
          {musicReleases.map((release, i) =>
          <div
            key={release.title}
            className="group relative border-r-2 overflow-hidden cursor-pointer"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              minHeight: "320px"
            }}
            onMouseEnter={() => setPlaying(i)}
            onMouseLeave={() => setPlaying(null)}>
            
              {/* Album art background */}
              <div className="absolute inset-0">
                <AppImage
                src={release.image}
                alt={release.alt}
                fill
                className="object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-60" />
              
                <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${release.color}44 0%, #0A0A0A 100%)`
                }} />
              
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                {/* Top: type badge */}
                <div className="flex items-center justify-between">
                  <span
                  className="archive-tag"
                  style={{ background: release.color, borderColor: "transparent", color: "#0A0A0A" }}>
                  
                    {release.type}
                  </span>
                  <span className="font-mono text-xs text-white/50">{release.year}</span>
                </div>

                {/* Center: visualizer when hovering */}
                <div
                className="flex items-end gap-1 h-16 justify-center transition-opacity duration-300"
                style={{ opacity: playing === i ? 1 : 0 }}>
                
                  {Array.from({ length: 12 }).map((_, j) =>
                <div
                  key={j}
                  className="w-1.5 rounded-full"
                  style={{
                    background: release.color,
                    animation: `bar-dance ${0.8 + j * 0.1}s ease-in-out infinite`,
                    animationDelay: `${j * 0.08}s`,
                    minHeight: "4px",
                    maxHeight: "48px"
                  }} />

                )}
                </div>

                {/* Bottom: info */}
                <div>
                  <h3
                  className="font-display font-black text-white uppercase leading-tight mb-2"
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.6rem)",
                    fontStyle: "italic"
                  }}>
                  
                    {release.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-white/50">
                      {release.tracks} TRACKS · {release.label}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors"
                    style={{
                      borderColor: release.color,
                      color: release.color
                    }}
                    aria-label={`Play ${release.title}`}>
                    
                      <Icon name="PlayIcon" size={14} variant="solid" />
                    </button>
                    <span className="font-mono text-xs" style={{ color: release.color }}>
                      PLAY
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── MULTIMEDIA ── */}
      <div id="multimedia">
        {/* Header */}
        <div
          className="border-b-2 flex items-center justify-between px-6 lg:px-10 py-3"
          style={{ borderColor: "rgba(255,255,255,0.15)" }}>
          
          <div className="flex items-center gap-3">
            <span
              className="font-display font-black text-2xl lg:text-3xl uppercase tracking-tight text-white"
              style={{ fontStyle: "italic" }}>
              
              05 — Multimedia
            </span>
          </div>
          <span className="pill-btn text-xs" style={{ background: "var(--sky, #87CEEB)" }}>
            FILM + VIDEO
          </span>
        </div>

        {/* Multimedia grid */}
        <div
          ref={mediaGridRef}
          className="stagger-grid grid grid-cols-1 lg:grid-cols-3 gap-0">
          
          {multimediaWorks.map((work, i) =>
          <div
            key={work.title}
            className="group relative overflow-hidden cursor-pointer border-r-2"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              minHeight: "300px"
            }}>
            
              {/* Image */}
              <div className="absolute inset-0">
                <AppImage
                src={work.image}
                alt={work.alt}
                fill
                className="object-cover opacity-50 transition-all duration-700 group-hover:opacity-70 group-hover:scale-105" />
              
                <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)"
                }} />
              
              </div>

              {/* Play button overlay */}
              <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}>
                
                  <Icon name="PlayIcon" size={20} variant="solid" className="text-white ml-1" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span
                  className="archive-tag"
                  style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.3)", color: "white" }}>
                  
                    {work.type}
                  </span>
                  <span className="font-mono text-xs text-white/40">{work.year}</span>
                </div>

                <div>
                  <span className="font-mono text-xs text-white/50 block mb-1 uppercase">
                    {work.duration}
                  </span>
                  <h3
                  className="font-display font-black text-white uppercase leading-tight"
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.4rem)",
                    fontStyle: "italic"
                  }}>
                  
                    {work.title}
                  </h3>
                </div>
              </div>

              {/* Bottom border line (colored) */}
              <div
              className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: i === 0 ? "var(--green)" : i === 1 ? "var(--magenta, #FF00AA)" : "var(--sky, #87CEEB)"
              }} />
            
            </div>
          )}
        </div>
      </div>
    </section>);

}