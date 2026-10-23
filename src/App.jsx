import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import MobileBottomBar from "./components/layout/MobileBottomBar";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Expertise from "./pages/Expertise";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#171918] text-[#F5F2EB] selection:bg-[#C5AD83] selection:text-[#171918] relative">
        {/* Persistent Global Navigation */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <div className="grow pb-16 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {/* Mobile Floating Quick Action Dock */}
        <MobileBottomBar />

        {/* Global Architectural Footer */}
        <Footer />
      </div>
    </Router>
  );
}
