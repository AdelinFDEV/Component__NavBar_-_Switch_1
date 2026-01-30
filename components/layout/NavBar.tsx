"use client";

import Link from "next/link";
import { ThemeSwitcher } from "@/components/features/SwitcherLogic";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

// Navigation links configuration
const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav
      aria-label="Main Navigation"
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[90%] md:max-w-4xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
    >
      <div
        className="flex items-center justify-between px-6 py-3 md:px-8 md:py-4
                   rounded-full 
                   bg-white/80 dark:bg-neutral-900/60 
                   backdrop-blur-xl supports-backdrop-filter:bg-white/50
                   border border-white/20 dark:border-white/10 
                   shadow-xl shadow-black/5 dark:shadow-black/20"
      >
        {/* Logo Section */}
        <Link href="/" className="group flex items-center gap-2 relative z-10">
          <span
            className="font-primary text-lg md:text-2xl font-bold tracking-tight
                           text-neutral-900 dark:text-white 
                           transition-transform duration-300
                           group-hover:scale-105"
          >
            NAVBAR & SWITCH
          </span>
        </Link>

        {/* Right Section: Navigation & Theme Switcher */}
        <div className="flex items-center gap-2 md:gap-6">
          {/* Desktop Navigation (Sliding Pill Effect) */}
          <div className="hidden md:flex">
            <DesktopNav />
          </div>
          <button
            className="md:hidden text-neutral-900 dark:text-white p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Theme Switcher */}
          <div className="relative z-10 scale-90">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      {/* Absolute container positioned just below the navbar */}
      <div
        className={`
    absolute top-full left-0 right-0 mt-4 mx-4 p-4
    rounded-2xl
    bg-white/90 dark:bg-neutral-900/90
    backdrop-blur-xl supports-backdrop-filter:bg-white/50
    border border-white/20 dark:border-white/10
    shadow-2xl shadow-black/10
    flex flex-col gap-2
    transition-all duration-300 ease-in-out origin-top
    ${
      isMobileMenuOpen
        ? "opacity-100 scale-100 translate-y-0 visible"
        : "opacity-0 scale-95 -translate-y-4 invisible pointer-events-none"
    }
  `}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)} // Close on click
            className="
        block px-4 py-3 rounded-xl
        text-center text-sm font-medium
        text-neutral-900 dark:text-white
        hover:bg-black/5 dark:hover:bg-white/10
        transition-colors
      "
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function DesktopNav() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const refs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // If a link is hovered, calculate position and size for the pill
    if (hoveredIndex !== null && refs.current[hoveredIndex]) {
      const el = refs.current[hoveredIndex];
      if (el) {
        setPillStyle({
          left: el.offsetLeft,
          width: el.offsetWidth,
          opacity: 1, // Visible
        });
      }
    } else {
      // Hide pill when no link is hovered
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [hoveredIndex]);

  return (
    <div className="relative flex items-center gap-1 bg-transparent p-1">
      {/* Background Floating Pill */}
      <div
        className="absolute top-1/2 -translate-y-1/2 h-full rounded-full pointer-events-none
                   bg-black dark:bg-white
                   transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
        style={{
          left: pillStyle.left,
          width: pillStyle.width,
          opacity: pillStyle.opacity,
          height: "80%", // Slightly smaller than the container height
        }}
      />

      {NAV_LINKS.map((link, index) => (
        <Link
          key={link.href}
          href={link.href}
          ref={(el) => {
            refs.current[index] = el;
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`
            relative z-10 px-3 py-1.5 md:px-4 md:py-2 rounded-full 
            text-xs md:text-sm font-medium 
            transition-colors duration-300
            active:scale-95
            ${
              hoveredIndex === index
                ? "text-white dark:text-black"
                : "text-neutral-900 dark:text-white"
            }
          `}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
