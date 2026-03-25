"use client";
import React, { useState, useEffect } from "react";
import AppLogo from "@/components/ui/AppLogo";
import Link from "next/link";

const navItems = [
  { label: "Bio", href: "#bio" },
  { label: "Graphic Design", href: "#graphic-design" },
  { label: "Artwork", href: "#artwork" },
  { label: "Musical Project", href: "#musical-project" },
  { label: "Multimedia", href: "#multimedia" },
  { label: "Cultural Management", href: "#cultural-management" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b-2 border-foreground"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/homepage" className="flex items-center gap-2 group">
          <AppLogo
            size={32}
            onClick={() => {}}
            className="group-hover:rotate-12 transition-transform duration-300"
          />
          <span
            className="font-display font-black text-lg tracking-tight text-foreground uppercase"
            style={{ fontStyle: "italic" }}
          >
            ArtistPortfolio
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems?.map((item) => (
            <a
              key={item?.href}
              href={item?.href}
              className="pill-btn text-[0.65rem] py-1 px-3"
              style={{ background: "transparent", border: "2px solid transparent" }}
              onMouseEnter={(e) => {
                const el = e?.currentTarget;
                el.style.background = "var(--foreground)";
                el.style.color = "var(--yellow)";
                el.style.borderColor = "var(--foreground)";
              }}
              onMouseLeave={(e) => {
                const el = e?.currentTarget;
                el.style.background = "transparent";
                el.style.color = "var(--foreground)";
                el.style.borderColor = "transparent";
              }}
            >
              {item?.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="pill-btn hidden lg:inline-flex"
          style={{ background: "var(--green)", borderColor: "var(--foreground)" }}
        >
          Contact
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 border-2 border-foreground rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t-2 border-foreground px-6 py-4 flex flex-col gap-3">
          {navItems?.map((item) => (
            <a
              key={item?.href}
              href={item?.href}
              className="pill-btn w-full justify-center"
              onClick={() => setMenuOpen(false)}
            >
              {item?.label}
            </a>
          ))}
          <a
            href="#contact"
            className="pill-btn pill-btn-green w-full justify-center"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}