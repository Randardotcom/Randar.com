import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    // Changed to bg-transparent and added relative/overflow-hidden for the spheres
    <section className="pt-32 pb-20 bg-transparent min-h-screen relative overflow-hidden flex items-center">
      
      {/* --- 3D Theme Spheres --- */}
      <div className="absolute top-[20%] left-[10%] w-20 h-20 rounded-full bg-[radial-gradient(circle_at_30%_30%,#60a5fa,#2563eb)] shadow-[0_10px_20px_rgba(37,99,235,0.2)] z-0 opacity-70"></div>
      <div className="absolute bottom-[15%] right-[15%] w-32 h-32 rounded-full bg-[radial-gradient(circle_at_30%_30%,#4ade80,#16a34a)] shadow-[0_10px_20px_rgba(22,163,74,0.2)] z-0 opacity-60"></div>
      <div className="absolute top-[40%] right-[20%] w-10 h-10 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fb923c,#ea580c)] shadow-[0_10px_20px_rgba(234,88,12,0.2)] z-0 opacity-80"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#0f172a] tracking-tight mb-8">
            Driven by Data. <br />
            <span className="text-[#2563eb]">Designed for Humans.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            Randar was born out of a shared frustration with the traditional agency model. We noticed a massive gap between beautiful design and functional engineering. So, we brought them together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          // Upgraded to Frosted Glass!
          className="bg-white/80 backdrop-blur-xl p-10 rounded-[32px] border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] text-left"
        >
          <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 border border-indigo-100">
            <span className="text-2xl">💡</span>
          </div>
          <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Our Philosophy</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            We believe that every pixel should have a purpose and every line of code should drive a measurable result. Whether we are architecting complex web applications or crafting compelling brand narratives, our approach is always rooted in strategy, transparency, and relentless innovation.
          </p>
          <p className="text-slate-600 font-medium">
            We don't just work for you; we partner with you to engineer digital ecosystems that actually scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;