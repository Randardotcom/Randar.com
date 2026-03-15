import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // To highlight the active link

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", path: "/#services" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    // Outer container stays full width
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? "pt-6 px-4" : "pt-0 px-0"}`}
    >
      {/* Inner container morphs into the floating pill */}
      <div
        className={`mx-auto transition-all duration-500 ease-in-out flex justify-between items-center ${
          isScrolled
            ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full max-w-5xl py-3 px-6 md:px-8 border border-slate-100"
            : "bg-transparent py-6 px-6 md:px-12 max-w-7xl"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="cursor-pointer flex items-center gap-1 group z-10"
        >
          <span
            className={`text-2xl font-extrabold tracking-tighter transition-transform duration-300 group-hover:scale-105 ${isScrolled ? "text-[#0f172a]" : "text-[#0f172a]"}`}
          >
            Randar<span className="text-[#2563eb]">.</span>
          </span>
        </Link>

        {/* Center Links (Matching your reference image) */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold transition-colors relative group ${
                location.pathname === link.path
                  ? "text-[#2563eb]"
                  : "text-slate-600 hover:text-[#0f172a]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:block z-10">
          <Link to="/contact">
            <button className="px-6 py-2.5 bg-[#0f172a] text-white rounded-full text-sm font-semibold hover:bg-slate-800 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Contact
            </button>
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-10 text-slate-800"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-2xl mx-4 mt-2 py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-slate-700 hover:text-[#2563eb]"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-[#0f172a] text-white text-sm font-semibold px-5 py-2 rounded-full w-max"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
