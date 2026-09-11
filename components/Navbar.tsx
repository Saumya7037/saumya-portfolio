"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FileText, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/data/profile";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/60"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-sm text-sky-400 hover:text-sky-300 hover:scale-[1.05] transition-all tracking-tight"
          aria-label="Saumya Kumar – home"
        >
          saumya<span className="text-neutral-500">.</span>dev
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-block text-sm text-neutral-400 hover:text-sky-300 hover:scale-105 transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-neutral-400 hover:text-sky-300 hover:scale-110 transition-all p-1"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-neutral-400 hover:text-sky-300 hover:scale-110 transition-all p-1"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="/resume/Saumya-Kumar-Resume.pdf"
            download
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium border border-sky-500/50 text-sky-400 hover:bg-sky-500/10 hover:border-sky-400 hover:scale-[1.03] rounded transition-all"
          >
            <FileText size={14} />
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-neutral-400 hover:text-sky-300 hover:scale-110 transition-all p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800">
          <ul className="flex flex-col px-4 py-4 gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-2 px-2 text-sm text-neutral-300 hover:text-sky-300 rounded transition-all hover:bg-neutral-900/60"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3 border-t border-neutral-800 mt-2 flex items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-neutral-400 hover:text-sky-300 hover:scale-110 transition-all"
                onClick={closeMenu}
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-neutral-400 hover:text-sky-300 hover:scale-110 transition-all"
                onClick={closeMenu}
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="/resume/Saumya-Kumar-Resume.pdf"
                download
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium border border-sky-500/50 text-sky-400 hover:bg-sky-500/10 hover:scale-[1.03] rounded transition-all"
                onClick={closeMenu}
              >
                <FileText size={14} />
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
