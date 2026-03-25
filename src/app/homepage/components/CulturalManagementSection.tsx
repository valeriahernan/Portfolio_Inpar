"use client";
import React, { useEffect, useRef } from "react";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

const events = [
{
  title: "BLACK BRITISH ART NOW",
  role: "Curator & Artistic Director",
  venue: "Somerset House, London",
  year: "2024",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_17e6d5351-1765262216982.png",
  alt: "Contemporary art gallery installation with diverse artworks and visitors",
  color: "#00D04B"
},
{
  title: "AFRO NOWISM FESTIVAL",
  role: "Programme Director",
  venue: "Barbican Centre, London",
  year: "2023",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bf7516e7-1773496527872.png",
  alt: "Music festival stage with dramatic lighting and large crowd",
  color: "#FF00AA"
},
{
  title: "DISOBEDIENT OBJECTS SUMMIT",
  role: "Organiser & Moderator",
  venue: "Tate Modern, London",
  year: "2022",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12b2251b6-1772267856972.png",
  alt: "Conference panel discussion with speakers on stage in modern venue",
  color: "#FF6B00"
},
{
  title: "POLITICAL ART RESIDENCY",
  role: "Lead Facilitator",
  venue: "Goldsmiths, University of London",
  year: "2022",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13b87de22-1774396595051.png",
  alt: "Art residency workshop with participants working on creative projects",
  color: "#87CEEB"
}];


export default function CulturalManagementSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

    if (eventsRef.current) observer.observe(eventsRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (sectionRef.current) {
      sectionRef.current.querySelectorAll(".reveal-blur, .reveal-up").forEach((el) =>
      observer.observe(el)
      );
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cultural-management"
      ref={sectionRef}
      className="relative bg-white"
      aria-label="Cultural Management section">
      
      {/* ── CULTURAL MANAGEMENT ── */}
      <div className="border-b-2 border-foreground">
        {/* Header */}
        <div
          className="border-b-2 border-foreground flex items-center justify-between px-6 lg:px-10 py-3"
          style={{ background: "var(--green)" }}>
          
          <div className="flex items-center gap-3">
            <span
              className="font-display font-black text-2xl lg:text-3xl uppercase tracking-tight text-foreground"
              style={{ fontStyle: "italic" }}>
              
              06 — Cultural Management
            </span>
          </div>
          <div className="flex gap-2">
            <span className="pill-btn text-xs" style={{ background: "var(--yellow)" }}>
              EVENTS + CURATION
            </span>
            <span className="font-mono text-xs text-foreground/70 self-center">
              {events.length} PROJECTS
            </span>
          </div>
        </div>

        {/* Events list + images */}
        <div
          ref={eventsRef}
          className="stagger-grid">
          
          {events.map((event, i) =>
          <div
            key={event.title}
            className={`group relative border-b-2 border-foreground flex flex-col lg:flex-row overflow-hidden cursor-pointer transition-colors duration-300 hover:bg-off-white`}>
            
              {/* Left: image */}
              <div
              className="relative flex-shrink-0 lg:w-[280px] overflow-hidden"
              style={{ minHeight: "180px" }}>
              
                <AppImage
                src={event.image}
                alt={event.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105" />
              
                <div
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-40"
                style={{ background: `${event.color}88` }} />
              
                {/* Year badge */}
                <div className="absolute top-3 left-3">
                  <span
                  className="archive-tag"
                  style={{ background: event.color, borderColor: "transparent" }}>
                  
                    {event.year}
                  </span>
                </div>
              </div>

              {/* Right: content */}
              <div className="flex-1 px-6 lg:px-10 py-6 flex flex-col justify-between border-l-0 lg:border-l-2 border-foreground">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-foreground/50 block mb-2">
                    {event.role}
                  </span>
                  <h3
                  className="font-display font-black text-foreground uppercase leading-tight mb-2"
                  style={{
                    fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
                    fontStyle: "italic",
                    letterSpacing: "-0.01em"
                  }}>
                  
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Icon name="MapPinIcon" size={14} className="text-foreground/50" />
                    <span className="font-mono text-xs text-foreground/50 uppercase">
                      {event.venue}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                  className="pill-btn text-xs"
                  style={{ background: event.color }}>
                  
                    READ MORE
                  </span>
                  <Icon name="ArrowRightIcon" size={16} className="text-foreground" />
                </div>
              </div>

              {/* Right: number */}
              <div className="hidden lg:flex items-center justify-center w-20 border-l-2 border-foreground">
                <span
                className="font-display font-black text-4xl opacity-10 group-hover:opacity-30 transition-opacity duration-300"
                style={{ fontStyle: "italic" }}>
                
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── CONTACT / CTA ── */}
      <div
        id="contact"
        ref={ctaRef}
        className="is-visible relative overflow-hidden"
        style={{ background: "#0A0A0A", minHeight: "500px" }}>
        
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
          }} />
        

        {/* Large background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            className="font-display font-black text-white select-none"
            style={{
              fontSize: "clamp(4rem, 20vw, 18rem)",
              opacity: 0.03,
              fontStyle: "italic",
              letterSpacing: "-0.04em",
              whiteSpace: "nowrap"
            }}>
            
            CONTACT
          </span>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 py-20 flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Left: CTA text */}
          <div className="max-w-2xl">
            <div className="reveal-blur">
              <span className="archive-tag mb-4 block w-fit" style={{ background: "var(--green)", borderColor: "transparent" }}>
                GET IN TOUCH
              </span>
              <h2
                className="font-display font-black text-white uppercase leading-none mb-6"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                  fontStyle: "italic",
                  letterSpacing: "-0.03em"
                }}>
                
                Ready to Build
                <span style={{ color: "var(--green)" }}> Something</span>
                <br />
                Together?
              </h2>
              <p className="font-sans text-white/60 text-base leading-relaxed uppercase max-w-lg">
                AVAILABLE FOR COMMISSIONS, COLLABORATIONS, RESIDENCIES, AND CULTURAL PROGRAMMING. BASED IN LONDON — WORKING GLOBALLY.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 reveal-up" style={{ transitionDelay: "0.2s" }}>
              <a
                href="mailto:hello@artistportfolio.com"
                className="pill-btn text-sm px-8 py-3"
                style={{
                  background: "var(--green)",
                  borderColor: "var(--green)",
                  fontSize: "0.9rem"
                }}>
                
                EMAIL ME
              </a>
              <a
                href="#"
                className="pill-btn text-sm px-8 py-3"
                style={{
                  background: "transparent",
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "white",
                  fontSize: "0.9rem"
                }}>
                
                DOWNLOAD CV
              </a>
            </div>
          </div>

          {/* Right: contact details + social */}
          <div className="flex flex-col gap-6 reveal-blur" style={{ transitionDelay: "0.3s" }}>
            {/* Contact info */}
            <div
              className="border-2 rounded-2xl p-6 flex flex-col gap-4"
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(20px)",
                minWidth: "280px"
              }}>
              
              <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-2">
                CONTACT
              </p>
              {[
              { icon: "EnvelopeIcon" as const, label: "hello@artistportfolio.com" },
              { icon: "PhoneIcon" as const, label: "+44 20 7946 0958" },
              { icon: "MapPinIcon" as const, label: "London, UK" }].
              map((item) =>
              <div key={item.label} className="flex items-center gap-3">
                  <Icon name={item.icon} size={16} className="text-white/40" />
                  <span className="font-mono text-sm text-white/70">{item.label}</span>
                </div>
              )}
            </div>

            {/* Social links */}
            <div
              className="border-2 rounded-2xl p-6"
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)"
              }}>
              
              <p className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">
                FOLLOW
              </p>
              <div className="flex gap-3">
                {[
                { label: "IG", href: "#" },
                { label: "TW", href: "#" },
                { label: "BC", href: "#" },
                { label: "VIM", href: "#" }].
                map((social) =>
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono text-xs font-bold text-white transition-all duration-200 hover:scale-110"
                  style={{
                    borderColor: "rgba(255,255,255,0.2)",
                    background: "rgba(255,255,255,0.05)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--green)";
                    e.currentTarget.style.borderColor = "var(--green)";
                    e.currentTarget.style.color = "#0A0A0A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                    e.currentTarget.style.color = "white";
                  }}>
                  
                    {social.label}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}