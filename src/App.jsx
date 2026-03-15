import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import FAQ from "./components/faq";
import { useEffect } from "react";
import Lenis from "lenis";

// --- NEW: The Scroll Handler ---
// This listens to the URL. If it sees a hash (like #services), it scrolls to it.
// If there is no hash, it scrolls to the very top of the new page.
const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // A tiny 100ms delay ensures the page has fully rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
};

const Home = () => (
  <main>
    <Hero />
    <Services />
  </main>
);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <Router>
      {/* Must be placed inside the Router so it can access useLocation */}
      <ScrollHandler />

      <div className="min-h-screen text-slate-800 font-sans selection:bg-blue-200 flex flex-col relative">
        {/* GLOBAL FIXED BACKGROUND */}
        <div className="fixed inset-0 bg-[#f8fafc] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-50"></div>

        <Navbar />

        <div className="flex-grow z-10 relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
