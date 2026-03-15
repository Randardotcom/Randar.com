import React, { useState, useEffect, useRef } from "react";

// Upgraded component: Auto-scrambles on view + keeps hover effect
const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const spanRef = useRef(null);
  const isAnimating = useRef(false); // Prevents overlapping animations if hovered while scrolling

  const scramble = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    let iteration = 0;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return text[index];
            return characters[Math.floor(Math.random() * 26)];
          })
          .join(""),
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        isAnimating.current = false;
      }

      iteration += 1 / 2;
    }, 30);
  };

  // Trigger scramble when the element scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          scramble();
          observer.disconnect(); // Disconnect after the first view so it doesn't loop wildly on scroll
        }
      },
      { threshold: 0.1 }, // Triggers when 10% of the element is visible
    );

    if (spanRef.current) {
      observer.observe(spanRef.current);
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span
      ref={spanRef}
      onMouseEnter={scramble}
      className="cursor-crosshair inline-block font-medium hover:text-blue-600 transition-colors duration-300"
    >
      {displayText}
    </span>
  );
};

const Footer = () => {
  const links = [
    { name: "Home", path: "#Home" },
    { name: "Services", path: "#Services" },
    { name: "Our Team", path: "/Team" },
    { name: "Work", path: "#Work" },
    { name: "Contact", path: "/Contact" },
  ];
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // Reduced padding from pt-24 to pt-16 for a tighter layout
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Section: Split Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Left Side: Scaled down CTA */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter mb-4">
              Let's build something <br />
              <span className="text-blue-600">
                <ScrambleText text="unforgettable." />
              </span>
            </h2>
            <a
              href="mailto:hello@randar.com"
              className="text-lg md:text-xl font-semibold text-slate-600 hover:text-slate-900 transition-colors border-b-2 border-slate-300 hover:border-blue-600 pb-1 inline-block"
            >
              hello@randar.com
            </a>
          </div>

          {/* Right Side: Navigation & Socials */}
          <div className="md:w-1/2 flex flex-row gap-12 md:gap-24 md:justify-end">
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-slate-900 mb-1">Navigation</h4>
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-slate-600 text-sm w-max"
                >
                  <ScrambleText text={link.name} />
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-slate-900 mb-1">Socials</h4>
              {["LinkedIn", "Twitter", "Instagram"].map((link) => (
                <a key={link} href="#" className="text-slate-600 text-sm w-max">
                  <ScrambleText text={link} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Logo, Legal, Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-200 pt-6 gap-4">
          {/* Left: Logo */}
          <div
            onClick={scrollToTop}
            className="cursor-pointer group flex-shrink-0"
            title="Back to top"
          >
            <span className="text-2xl font-black text-slate-900 tracking-tighter transition-transform duration-300 group-hover:scale-105 inline-block">
              Randar<span className="text-blue-600">.</span>
            </span>
          </div>

          {/* Right: Copyright & Legal */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs text-slate-500">
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-900 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-900 transition-colors">
                Terms of Service
              </a>
            </div>
            <span className="hidden md:inline text-slate-300">|</span>
            <p>
              © {new Date().getFullYear()} Randar Agency. All rights reserved.
            </p>
            <span className="hidden md:inline text-slate-300">|</span>
            <p>Proudly engineered in Pune.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
