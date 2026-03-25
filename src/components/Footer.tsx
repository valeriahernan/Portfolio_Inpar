"use client";
import React, { useState, useEffect } from "react";
import AppLogo from "@/components/ui/AppLogo";
import Icon from "@/components/ui/AppIcon";


export default function Footer() {
  const [year, setYear] = useState("2026");

  useEffect(() => {
    setYear(new Date()?.getFullYear()?.toString());
  }, []);

  return (
    <footer className="border-t-2 border-foreground bg-white py-8 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo + name */}
        <div className="flex items-center gap-2">
          <AppLogo size={28} />
          <span className="font-display font-black text-sm tracking-tight uppercase" style={{ fontStyle: "italic" }}>
            ArtistPortfolio
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-foreground">
          <a href="#bio" className="hover:text-green-vivid transition-colors">Bio</a>
          <a href="#graphic-design" className="hover:text-green-vivid transition-colors">Work</a>
          <a href="#contact" className="hover:text-green-vivid transition-colors">Contact</a>
          <a href="#" className="hover:text-green-vivid transition-colors">Privacy</a>
        </div>

        {/* Social + copyright */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="w-9 h-9 border-2 border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-white transition-all"
            aria-label="Instagram"
          >
            <Icon name="CameraIcon" size={16} variant="outline" />
          </a>
          <a
            href="#"
            className="w-9 h-9 border-2 border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-white transition-all"
            aria-label="Twitter"
          >
            <Icon name="ChatBubbleLeftIcon" size={16} variant="outline" />
          </a>
          <a
            href="#"
            className="w-9 h-9 border-2 border-foreground rounded-full flex items-center justify-center hover:bg-foreground hover:text-white transition-all"
            aria-label="Email"
          >
            <Icon name="EnvelopeIcon" size={16} variant="outline" />
          </a>
          <span className="text-xs text-neutral-mid font-mono ml-2">
            © {year} ArtistPortfolio
          </span>
        </div>
      </div>
    </footer>
  );
}