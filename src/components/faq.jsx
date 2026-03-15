import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  // State to track which question is currently open
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "How much does a typical project cost?",
      answer: "We don't believe in one-size-fits-all price tags. Every digital ecosystem we engineer is entirely custom. We work closely with you to understand your specific goals and budget, ensuring we deliver a premium, high-performance solution that maximizes your investment."
    },
    {
      question: "What is your Unique Selling Proposition?",
      answer: "Beyond our obsession with merging design and engineering, we stand by our work long after launch. Every project includes 3 months of complimentary revisions, updates, and dedicated maintenance to ensure your platform performs flawlessly as it scales."
    },
    {
      question: "Are there ongoing costs after the website is launched?",
      answer: "Just like a high-performance sports car, a premium website requires expert tuning to keep it running at peak capacity. We offer transparent, ongoing maintenance packages to handle the technical heavy lifting, keeping your site secure, fast, and up-to-date so you can focus on your business."
    }
  ];

  return (
    <section className="pt-40 pb-20 bg-transparent min-h-screen relative overflow-hidden flex flex-col items-center">
      
      {/* --- 3D Theme Spheres --- */}
      <div className="absolute top-[15%] left-[20%] w-20 h-20 rounded-full bg-[radial-gradient(circle_at_30%_30%,#f87171,#dc2626)] shadow-[0_10px_20px_rgba(220,38,38,0.2)] z-0 opacity-70"></div>
      <div className="absolute bottom-[20%] right-[15%] w-32 h-32 rounded-full bg-[radial-gradient(circle_at_30%_30%,#60a5fa,#2563eb)] shadow-[0_10px_20px_rgba(37,99,235,0.2)] z-0 opacity-60"></div>
      <div className="absolute top-[50%] right-[25%] w-12 h-12 rounded-full bg-[radial-gradient(circle_at_30%_30%,#4ade80,#16a34a)] shadow-[0_10px_20px_rgba(22,163,74,0.2)] z-0 opacity-80"></div>

      <div className="max-w-3xl mx-auto px-6 w-full relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#0f172a] tracking-tight mb-6">
            Common <br/><span className="text-[#2563eb]">Questions.</span>
          </h1>
          <p className="text-xl text-slate-600">
            Everything you need to know about partnering with Randar.
          </p>
        </motion.div>

        {/* Accordion Container */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-xl border border-white rounded-[24px] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
              >
                {/* Clickable Header */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none"
                >
                  <h3 className={`text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-[#2563eb]' : 'text-[#0f172a]'}`}>
                    {faq.question}
                  </h3>
                  
                  {/* Animated Plus/Minus Icon */}
                  <div className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="text-slate-600 font-bold text-lg leading-none"
                    >
                      +
                    </motion.div>
                  </div>
                </button>

                {/* Collapsible Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-6 text-slate-600 leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;