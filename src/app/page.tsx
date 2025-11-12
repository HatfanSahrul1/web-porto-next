'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import TechTools from "@/components/TechTools";
import Projects from "@/components/Projects";

export default function Home() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "Game Programmer",
    "Computer Vision Engineer", 
    "Unity Developer",
    "Robotic Programmer",
    "Machine Learning Enthusiast"
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        setCurrentText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : current.slice(0, prev.length + 1)
        );
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(to bottom right, rgba(255, 0, 255, 0.15) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 60%)'
      }}
    >
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md py-6 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="text-white font-bold text-2xl">Hatfan</div>
          <div className="flex gap-6 text-white">
            <a href="#about" className="hover:text-[#FF00FF] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#FF00FF] transition-colors">Projects</a>
            <Link href="/portfolio" className="hover:text-[#FF00FF] transition-colors">Portfolio</Link>
            <Link href="/artikel" className="hover:text-[#FF00FF] transition-colors">Artikel</Link>
            <a href="#contact" className="hover:text-[#FF00FF] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center px-4 pt-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Hatfan Sahrul Ramadhan
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            <span>{currentText}</span>
            <span className="animate-pulse">|</span>
          </p>
          <a 
            href="#projects" 
            className="inline-block bg-[#FF00FF] hover:bg-[#CC00CC] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#FF00FF] mb-6">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I am an applied bachelor's student in Game Technology at PENS, specializing in game programming.
            I also serve as a robotics programmer on the EROS (EEPIS Robot Soccer) team, focusing on computer vision and artificial intelligence.
            My interests include game development and machine learning.
          </p>
          <a 
            href="#"
            className="inline-block bg-[#FF00FF] hover:bg-[#CC00CC] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* Tech & Tools Section */}
      <TechTools />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#FF00FF] mb-6">Contact</h2>
          <p className="text-gray-300 text-lg mb-4">
            Email: <a href="mailto:hatfansahrul1@gmail.com" className="text-[#FF00FF] hover:underline">hatfansahrul1@gmail.com</a>
          </p>
          <p className="text-gray-300 text-lg">
            GitHub: <a href="https://github.com/HatfanSahrul1" target="_blank" className="text-[#FF00FF] hover:underline">@HatfanSahrul1</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">&copy; 2025 Hatfan Sahrul Ramadhan. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
