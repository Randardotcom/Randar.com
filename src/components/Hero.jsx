import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      // 1. Entrance Animations
      gsap.from(".hero-text-elem", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".pop-in", {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.5)",
        delay: 0.3,
      });

      // 2. 3D Mouse Tracking Parallax
      const handleMouseMove = (e) => {
        // Normalize mouse coordinates from -0.5 to 0.5
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;

        // Move floating elements at varying speeds/directions for depth
        gsap.to(".float-bg", {
          x: x * 30,
          y: y * 30,
          duration: 1,
          ease: "power2.out",
        });
        gsap.to(".float-fg", {
          x: x * -60,
          y: y * -60,
          duration: 1,
          ease: "power2.out",
        });
        gsap.to(".float-fast", {
          x: x * 90,
          y: y * 90,
          duration: 0.8,
          ease: "power2.out",
        });

        // The Magic: Tilt the dashboard in 3D space
        gsap.to(".mockup-3d", {
          rotateY: x * 15, // Tilts left/right
          rotateX: -y * 15, // Tilts up/down
          duration: 1,
          ease: "power2.out",
          transformPerspective: 1500,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      // 3. Scroll Parallax (pushes the dashboard up as you scroll down)
      gsap.to(".mockup-container", {
        y: -150,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: heroRef },
  );

  return (
    // Dotted background pattern just like the reference!
    <section
      ref={heroRef}
      className="relative min-h-[120vh] w-full bg-transparent overflow-hidden flex flex-col items-center pt-32"
    >
      {/* --- Floating 3D Elements --- */}
      {/* 3D Balls using radial gradients */}
      <div className="pop-in float-fg absolute top-[25%] left-[10%] w-12 h-12 rounded-full bg-[radial-gradient(circle_at_30%_30%,#4ade80,#16a34a)] shadow-[0_10px_20px_rgba(22,163,74,0.3)] z-30"></div>
      <div className="pop-in float-fast absolute top-[45%] left-[15%] w-8 h-8 rounded-full bg-[radial-gradient(circle_at_30%_30%,#60a5fa,#2563eb)] shadow-[0_10px_20px_rgba(37,99,235,0.3)] z-10"></div>
      <div className="pop-in float-bg absolute bottom-[35%] left-[20%] w-16 h-16 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fb923c,#ea580c)] shadow-[0_10px_20px_rgba(234,88,12,0.3)] z-30"></div>

      <div className="pop-in float-fast absolute top-[15%] right-[25%] w-6 h-6 rounded-full bg-[radial-gradient(circle_at_30%_30%,#4ade80,#16a34a)] shadow-[0_10px_20px_rgba(22,163,74,0.3)] z-10"></div>
      <div className="pop-in float-fg absolute top-[35%] right-[10%] w-20 h-20 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fb923c,#ea580c)] shadow-[0_10px_20px_rgba(234,88,12,0.3)] z-30"></div>
      <div className="pop-in float-bg absolute bottom-[40%] right-[15%] w-10 h-10 rounded-full bg-[radial-gradient(circle_at_30%_30%,#60a5fa,#2563eb)] shadow-[0_10px_20px_rgba(37,99,235,0.3)] z-30"></div>
      <div className="pop-in float-fast absolute bottom-[25%] right-[22%] w-7 h-7 rounded-full bg-[radial-gradient(circle_at_30%_30%,#f87171,#dc2626)] shadow-[0_10px_20px_rgba(220,38,38,0.3)] z-10"></div>

      {/* Floating Grey Blocks */}
      <div className="pop-in float-bg absolute top-[20%] left-[25%] w-12 h-12 bg-white rounded-xl shadow-lg border border-slate-200 rotate-12 z-10"></div>
      <div className="pop-in float-fg absolute top-[12%] right-[15%] w-16 h-16 bg-white rounded-2xl shadow-lg border border-slate-200 -rotate-6 z-10"></div>
      <div className="pop-in float-fast absolute bottom-[30%] left-[8%] w-14 h-14 bg-white rounded-xl shadow-lg border border-slate-200 rotate-45 z-10"></div>

      {/* --- Main Hero Text --- */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mb-16 pointer-events-none">
        <h1 className="hero-text-elem text-7xl md:text-9xl font-extrabold text-[#0f172a] tracking-tighter mb-4 flex items-center justify-center gap-2">
          Randar
          <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#2563eb] inline-block mt-4 md:mt-8"></span>
        </h1>
        <p className="hero-text-elem text-xl md:text-2xl text-slate-600 font-medium mb-6">
          Results Across Narration, Design, Automation & Reach
        </p>
        <Link
          to="/contact" // Note: Changed to lowercase 'c' for safer routing!
          className="pointer-events-auto px-8 py-4 bg-[#2563eb] text-white rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 shadow-xl hover:-translate-y-1 inline-block"
        >
          Start Your Project
        </Link>
      </div>

      {/* --- 3D Dashboard Mockup --- */}
      <div className="mockup-container relative z-20 w-full max-w-6xl px-6 [perspective:2000px] mt-10">
        {/* The element that actually tilts */}
        <div className="mockup-3d w-full bg-white/80 backdrop-blur-xl rounded-[32px] border border-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(226,232,240,0.5)] overflow-hidden transform-style-3d">
          {/* Browser Bar */}
          <div className="h-12 bg-slate-50/80 border-b border-slate-100 flex items-center px-6 gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <div className="mx-auto w-48 h-5 bg-white rounded-md shadow-sm border border-slate-100 flex items-center px-3">
              <span className="text-[10px] text-slate-400">
                randar.agency / dashboard
              </span>
            </div>
          </div>

          {/* Dashboard Content (Agency Focused) */}
          <div className="p-8 md:p-10 flex flex-col gap-8">
            {/* Main Chart Area */}
            <div className="w-full bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-slate-800 text-lg">
                  System Performance & Velocity
                </h3>
                <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full border border-green-100">
                  All Systems Normal
                </span>
              </div>

              {/* Fake SVG Line Chart with Gradient */}
              <div className="relative w-full h-48 rounded-lg overflow-hidden flex items-end">
                <svg
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="none"
                  viewBox="0 0 1000 200"
                >
                  <defs>
                    <linearGradient
                      id="chart-gradient"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* The filled area */}
                  <path
                    d="M0,150 L100,120 L200,140 L300,90 L400,110 L500,60 L600,80 L700,40 L800,70 L900,20 L1000,30 L1000,200 L0,200 Z"
                    fill="url(#chart-gradient)"
                  />
                  {/* The line */}
                  <path
                    d="M0,150 L100,120 L200,140 L300,90 L400,110 L500,60 L600,80 L700,40 L800,70 L900,20 L1000,30"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Little dots on the line */}
                  <circle
                    cx="300"
                    cy="90"
                    r="5"
                    fill="white"
                    stroke="#3b82f6"
                    strokeWidth="3"
                  />
                  <circle
                    cx="500"
                    cy="60"
                    r="5"
                    fill="white"
                    stroke="#3b82f6"
                    strokeWidth="3"
                  />
                  <circle
                    cx="700"
                    cy="40"
                    r="5"
                    fill="white"
                    stroke="#3b82f6"
                    strokeWidth="3"
                  />
                  <circle
                    cx="900"
                    cy="20"
                    r="5"
                    fill="white"
                    stroke="#3b82f6"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>

            {/* Bottom Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  label: "Projects Deployed",
                  value: "4+",
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                },
                {
                  label: "Avg. Load Time",
                  value: "0.4s",
                  color: "text-green-600",
                  bg: "bg-green-50",
                },
                {
                  label: "Lighthouse Score",
                  value: "100",
                  color: "text-orange-600",
                  bg: "bg-orange-50",
                },
                {
                  label: "Code Commits",
                  value: "0",
                  color: "text-indigo-600",
                  bg: "bg-indigo-50",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className={`w-10 h-10 rounded-xl ${card.bg} mb-4`}></div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    {card.label}
                  </p>
                  <p className={`text-2xl font-black ${card.color}`}>
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
