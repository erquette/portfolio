"use client";
import { useState } from "react";
import { useTheme } from "@/app/contexts/ThemeProvider";

interface NavLink {
  label: string;
  href: string;
}

export default function NavigationBar() {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
  ]

  return (
    <>
      <nav
        className="
          fixed top-0 left-0 right-0 z-50
          flex items-center justify-between
          px-5 py-3 md:px-10 md:py-4
          bg-bg border-b-2 border-border  
        "
      >
        <a
          href="#hero"
          className="font-display text-3xl text-yellow leading-none tracking-wider"
          aria-label="Back to top"
        >
          CE.
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="
                  font-mono text-[0.7rem] font-bold uppercase
                  px-2 py-1 border border-transparent text-text
                  hover:border-yellow hover:text-yellow
                  transition-colors duration-200 tracking-wider
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="
              w-[34px] h-[34px] flex items-center justify-center
              border-2 border-border bg-transparent text-text
              hover:border-yellow hover:rotate-20
              transition-all duration-200
              text-base leading-none
            "
          >
            {isDark ? "☀︎" : "☾"}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            className={`
              flex md:hidden flex-col justify-center gap-[5px]
              w-[30px] h-[30px] bg-transparent border-none p-1
              transition-transform duration-300
              ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}
            `}
          >
            <span className={`block w-full h-[2px] bg-text origin-center transition-all duration-300
              ${isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span className={`block w-full h-[2px] bg-text transition-all duration-300
              ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`}
            />
            <span className={`block w-full h-[2px] bg-text origin-center transition-all duration-300
              ${isMobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`
          fixed inset-0 z-40 bg-bg
          flex flex-col items-center justify-center gap-8
          transition-all duration-300 ease-out
          ${isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
      >
        <ul className="flex flex-col items-center gap-7">
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 60 + 100}ms` : "0ms"
              }}
              className={`
                transition-all duration-300
                ${isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                }
              `}
            >
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  font-display text-5xl text-text tracking-wider
                  hover:text-yellow transition-colors duration-200
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
)}
