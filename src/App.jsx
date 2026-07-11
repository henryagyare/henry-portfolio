import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import ResumePage from "./pages/ResumePage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen selection:bg-indigo-500/20 antialiased bg-zinc-950 text-zinc-100 font-sans pb-10">
        {/* Editorial grid lines background */}
        <div className="fixed inset-0 dark-grid-lines pointer-events-none -z-20 opacity-70" />

        <div className="pt-6">
          <Nav />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
