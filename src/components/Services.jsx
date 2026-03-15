import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);

  const serviceCards = [
    {
      letter: "N",
      title: "Narration",
      description:
        "Crafting compelling brand stories, copywriting, and content strategies that truly resonate with your target audience.",
      color: "text-blue-600",
    },
    {
      letter: "D",
      title: "Design",
      description:
        "Building intuitive, pixel-perfect user interfaces and breathtaking visual identities that elevate your brand.",
      color: "text-orange-600",
    },
    {
      letter: "A",
      title: "Automation",
      description:
        "Streamlining your digital workflows with intelligent systems, custom web apps, and backend solutions.",
      color: "text-green-600",
    },
    {
      letter: "R",
      title: "Reach",
      description:
        "Scaling your visibility and user acquisition through SEO, performance optimization, and digital ecosystems.",
      color: "text-indigo-600",
    },
  ];

  useGSAP(
    () => {
      gsap.set(".service-card", { y: window.innerHeight, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      serviceCards.forEach((_, index) => {
        tl.to(`.service-card:nth-child(${index + 1})`, {
          y: index * 25,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    // Changed to bg-transparent
    <section
      ref={sectionRef}
      id="services"
      className="h-screen w-full bg-transparent relative flex items-center overflow-hidden"
    >
      {/* 3D Theme Spheres (Subtle background details) */}
      <div className="absolute top-[15%] left-[5%] w-16 h-16 rounded-full bg-[radial-gradient(circle_at_30%_30%,#4ade80,#16a34a)] shadow-[0_10px_20px_rgba(22,163,74,0.2)] z-0 opacity-80"></div>
      <div className="absolute bottom-[20%] right-[8%] w-24 h-24 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fb923c,#ea580c)] shadow-[0_10px_20px_rgba(234,88,12,0.2)] z-0 opacity-80"></div>
      <div className="absolute top-[40%] right-[45%] w-8 h-8 rounded-full bg-[radial-gradient(circle_at_30%_30%,#60a5fa,#2563eb)] shadow-[0_10px_20px_rgba(37,99,235,0.2)] z-0 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        {/* Left Side: Pinned Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#0f172a] mb-6 tracking-tight">
            What We <br /> Do Best<span className="text-[#2563eb]">.</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#2563eb] rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 max-w-md leading-relaxed">
            We deliver measurable results across four core pillars of the
            digital experience. Scroll to pull them out.
          </p>
        </div>

        {/* Right Side: The "Wallet" Container */}
        <div className="relative h-[450px] w-full flex items-center mt-10 md:mt-0">
          {serviceCards.map((service, index) => (
            <div
              key={index}
              // Upgraded to frosted glass: bg-white/80, backdrop-blur-xl, and a white border
              className="service-card absolute top-0 left-0 w-full p-8 md:p-10 bg-white/80 backdrop-blur-xl rounded-[32px] border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
            >
              <div className="absolute right-6 top-4 text-[120px] font-black text-slate-900/[0.03] select-none pointer-events-none">
                {service.letter}
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl font-bold mb-8 border border-slate-100">
                  <span className={service.color}>{service.letter}</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-[#2563eb] font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300 group/link"
                >
                  Start Project
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
