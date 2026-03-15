import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const sectionRef = useRef(null);

  const team = [
    { name: 'Ayush Dhamal', role: 'Lead Developer', image: 'public/team-photos/ayush.jpeg', bio: 'Architecting scalable web solutions and ensuring every line of code performs flawlessly.' },
    { name: 'Pankaj Vaishnav', role: 'Lead Developer', image: 'public/team-photos/pankaj.jpeg', bio: 'Shaping visual identities and crafting user interfaces that leave lasting impressions.' },
    { name: 'Tanish Dete', role: 'Lead Developer', image: 'public/team-photos/tanish.jpeg', bio: 'Aligning business objectives with digital execution to maximize market reach.' },
    { name: 'Atharva Mishra', role: 'Lead Developer', image: 'public/team-photos/atharva.jpeg', bio: 'Streamlining project workflows and ensuring flawless delivery across all client touchpoints.' }
  ];

  useGSAP(() => {
    gsap.set('.team-card', { x: -1500, opacity: 0, rotation: -15, scale: 0.8 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3000", 
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      }
    });

    const rotations = [-4, 3, -2, 5];
    const yOffsets = [10, -15, 20, -5];
    const xOffsets = [0, 20, 40, 60]; 

    team.forEach((_, index) => {
      tl.to(`.team-card:nth-child(${index + 1})`, {
        x: xOffsets[index], 
        y: yOffsets[index],
        opacity: 1,
        rotation: rotations[index],
        scale: 1,
        duration: 1,
        ease: "back.out(1.2)" 
      });
    });

  }, { scope: sectionRef });

  return (
    // Changed entire wrapper to bg-transparent
    <div className="bg-transparent min-h-screen font-sans">
      
      {/* 1. Top Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#0f172a] tracking-tight mb-8">
          Four minds.<br />
          <span className="text-[#2563eb]">One relentless standard.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          We aren't just an agency; we are an engineering and design collective. Scroll down to meet the architects behind Randar.
        </p>
      </section>

      {/* 2. The Pinned Animation Section */}
      {/* Changed to bg-transparent and removed the solid top border */}
      <section ref={sectionRef} className="h-screen w-full relative overflow-hidden flex items-center justify-center bg-transparent">
        
        {/* --- 3D Theme Spheres --- */}
        <div className="absolute top-[10%] left-[20%] w-12 h-12 rounded-full bg-[radial-gradient(circle_at_30%_30%,#f87171,#dc2626)] shadow-[0_10px_20px_rgba(220,38,38,0.2)] z-0 opacity-80"></div>
        <div className="absolute bottom-[15%] right-[25%] w-24 h-24 rounded-full bg-[radial-gradient(circle_at_30%_30%,#60a5fa,#2563eb)] shadow-[0_10px_20px_rgba(37,99,235,0.2)] z-0 opacity-70"></div>
        
        {/* Abstract Team Network Diagram (Kept for that "engineering" vibe) */}
        <div className="absolute inset-0 text-[#94a3b8] opacity-30 pointer-events-none z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20%" cy="30%" r="8" fill="currentColor" />
            <circle cx="80%" cy="40%" r="12" fill="currentColor" />
            <circle cx="30%" cy="70%" r="10" fill="currentColor" />
            <circle cx="70%" cy="80%" r="6" fill="currentColor" />
            <line x1="20%" y1="30%" x2="80%" y2="40%" stroke="currentColor" strokeWidth="2" />
            <line x1="20%" y1="30%" x2="30%" y2="70%" stroke="currentColor" strokeWidth="2" />
            <line x1="30%" y1="70%" x2="70%" y2="80%" stroke="currentColor" strokeWidth="2" />
            <line x1="80%" y1="40%" x2="70%" y2="80%" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        {/* Container for the stacked cards */}
        <div className="relative w-full max-w-md h-[500px] z-10 mx-6">
          {team.map((member, index) => (
            <div 
              key={index}
              // Upgraded to Frosted Glass!
              className="team-card absolute top-0 left-0 w-full bg-white/80 backdrop-blur-xl rounded-[32px] p-8 border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] flex flex-col items-center text-center"
              style={{ zIndex: index }} 
            >
              <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-[#0f172a] mb-2">{member.name}</h3>
              <p className="text-[#2563eb] font-semibold uppercase tracking-widest text-sm mb-6">{member.role}</p>
              <div className="w-12 h-1 bg-slate-200 rounded-full mb-6"></div>
              <p className="text-slate-600 leading-relaxed font-medium">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default Team;