import React from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {

  const [state, handleSubmit] = useForm("xeerrajd");

  if (state.succeeded) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold text-green-600">
          Message sent successfully!
        </h2>
      </section>
    );
  }

  return (
    <section className="pt-40 pb-20 bg-transparent min-h-screen relative overflow-hidden flex items-center justify-center">
      
      {/* Theme Spheres */}
      <div className="absolute top-[20%] left-[15%] w-24 h-24 rounded-full bg-[radial-gradient(circle_at_30%_30%,#60a5fa,#2563eb)] shadow-[0_10px_20px_rgba(37,99,235,0.2)] z-0 opacity-70"></div>
      <div className="absolute bottom-[10%] right-[20%] w-32 h-32 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fb923c,#ea580c)] shadow-[0_10px_20px_rgba(234,88,12,0.2)] z-0 opacity-60"></div>

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        
        {/* Left Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#0f172a] tracking-tight mb-6">
            Let's build <br/><span className="text-[#2563eb]">together.</span>
          </h1>

          <p className="text-xl text-slate-600 mb-8 max-w-md">
            Leave your details below and one of our partners will reach out within 24 hours to discuss your project.
          </p>

          <div className="space-y-4">
            <p className="font-semibold text-slate-800">
              Email: 
              <a href="mailto:hello@randar.com" className="text-[#2563eb] hover:underline">
                randar1agency@gmail.com
              </a>
            </p>
            <p className="font-semibold text-slate-800">Location: Pune, India</p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[32px] border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
        >
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 ml-2">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full px-6 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition-all"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 ml-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  className="w-full px-6 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition-all"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 ml-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  className="w-full px-6 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition-all"
                />
              </div>

            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 ml-2">Project Details</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your goals, timeline, and budget..."
                className="w-full px-6 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition-all resize-none"
                required
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="mt-4 w-full py-4 bg-[#0f172a] text-white font-bold rounded-2xl hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Send Message
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
