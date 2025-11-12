'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import TechTools from "@/components/TechTools";
import Projects from "@/components/Projects";
import IconifyIcon from "@/components/IconifyIcon";

// Import data dari porto.json
import portfolioData from '../../porto.json';

export default function Home() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState('projects');
  
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
            <a href="#awards" className="hover:text-[#FF00FF] transition-colors">Awards</a>
            {/* <Link href="/artikel" className="hover:text-[#FF00FF] transition-colors">Artikel</Link> */}
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#FF00FF] mb-8">About Me</h2>
          <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {portfolioData.aboutMe}
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
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#FF00FF] mb-8">Pendidikan</h2>
          <div className="grid gap-6">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                <p className="text-[#FF00FF] mb-1">{edu.institution}</p>
                <p className="text-gray-400">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech & Tools Section */}
      <TechTools />

      {/* Projects Section with Tabs */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#FF00FF] mb-8 text-center">Projects</h2>
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'projects' 
                  ? 'bg-[#FF00FF] text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Proyek Utama
            </button>
            <button
              onClick={() => setActiveTab('freelance')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'freelance' 
                  ? 'bg-[#FF00FF] text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Proyek Freelance
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'personal' 
                  ? 'bg-[#FF00FF] text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Proyek Personal
            </button>
          </div>

          {/* Main Projects */}
          {activeTab === 'projects' && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {portfolioData.projects.map((project, index) => (
                <div key={index} className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                    <div className="text-center text-gray-300">
                      <IconifyIcon 
                        icon="simple-icons:unity" 
                        style={{ fontSize: '48px', color: '#FF00FF' }}
                      />
                      <p className="text-sm mt-2">Screenshot Game</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <span className="text-[#FF00FF] text-sm font-medium">{project.year}</span>
                    </div>
                    
                    {project.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">🏆 Pencapaian:</h4>
                        <ul className="space-y-1">
                          {project.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-400">• {achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.links.length > 0 && (
                      <div className="mt-4">
                        {project.links.map((link, idx) => (
                          <a 
                            key={idx}
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-[#FF00FF]/20 hover:bg-[#FF00FF]/30 text-[#FF00FF] px-4 py-2 rounded-lg text-sm transition-colors mr-2"
                          >
                            View Project
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Freelance Projects */}
          {activeTab === 'freelance' && (
            <div className="grid gap-8 md:grid-cols-2">
              {portfolioData.freelanceProjects.map((project, index) => (
                <div key={index} className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 flex items-center justify-center">
                    <div className="text-center text-gray-300">
                      <IconifyIcon 
                        icon="simple-icons:opencv" 
                        style={{ fontSize: '48px', color: '#5C3EE8' }}
                      />
                      <p className="text-sm mt-2">Project Screenshot</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">{project.title}</h3>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">📋 Deskripsi:</h4>
                      <ul className="space-y-2">
                        {project.description.map((desc, idx) => (
                          <li key={idx} className="text-sm text-gray-400">• {desc}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.links.map((link, idx) => (
                        <a 
                          key={idx}
                          href={link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-[#FF00FF]/20 hover:bg-[#FF00FF]/30 text-[#FF00FF] px-4 py-2 rounded-lg text-sm transition-colors"
                        >
                          {link.includes('github') ? 'GitHub' : 'View Demo'}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Personal Projects */}
          {activeTab === 'personal' && (
            <div className="grid gap-8 md:grid-cols-2">
              {portfolioData.personalProjects.map((project, index) => (
                <div key={index} className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-green-900/50 to-emerald-900/50 flex items-center justify-center">
                    <div className="text-center text-gray-300">
                      <IconifyIcon 
                        icon="simple-icons:github" 
                        style={{ fontSize: '48px', color: '#24292e' }}
                      />
                      <p className="text-sm mt-2">Tool Screenshot</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                    <div className="mt-4">
                      {project.links.map((link, idx) => (
                        <a 
                          key={idx}
                          href={link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block bg-[#FF00FF]/20 hover:bg-[#FF00FF]/30 text-[#FF00FF] px-4 py-2 rounded-lg text-sm transition-colors"
                        >
                          View on GitHub
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#FF00FF] mb-8">Penghargaan</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {portfolioData.awards.map((award, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex items-center">
                <div className="text-3xl mr-4">
                  <IconifyIcon 
                    icon="simple-icons:adobeillustrator" 
                    style={{ fontSize: '32px', color: '#FFD700' }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{award.title}</h3>
                  <p className="text-[#FF00FF]">{award.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#FF00FF] mb-8">Organisasi & Volunteering</h2>
          <div className="grid gap-6">
            {portfolioData.organizationsAndVolunteering.map((org, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{org.role}</h3>
                    <p className="text-[#FF00FF] mb-2">{org.organization}</p>
                  </div>
                  <span className="text-gray-400 text-sm">{org.period}</span>
                </div>
                <ul className="space-y-1">
                  {org.description.map((desc, idx) => (
                    <li key={idx} className="text-gray-300 text-sm">• {desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#FF00FF] mb-8">Publikasi</h2>
          <div className="grid gap-6">
            {portfolioData.publications.map((pub, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{pub.title}</h3>
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FF00FF]/20 hover:bg-[#FF00FF]/30 text-[#FF00FF] px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  View Publication
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#FF00FF] mb-8">Kursus & Pelatihan</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {portfolioData.coursesAndTraining.map((course, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-white">{course.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    course.status === 'Completed' 
                      ? 'bg-green-900/50 text-green-300' 
                      : 'bg-yellow-900/50 text-yellow-300'
                  }`}>
                    {course.status}
                  </span>
                </div>
                <p className="text-[#FF00FF] mb-1">{course.issuer}</p>
                <p className="text-gray-400 text-sm">{course.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#FF00FF] mb-8">Contact</h2>
          <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-gray-300 text-lg mb-2">
                  <span className="font-semibold">Email:</span>
                </p>
                <a href={`mailto:${portfolioData.personalInfo.links.email}`} className="text-[#FF00FF] hover:underline text-lg">
                  {portfolioData.personalInfo.links.email}
                </a>
              </div>
              <div>
                <p className="text-gray-300 text-lg mb-2">
                  <span className="font-semibold">GitHub:</span>
                </p>
                <a href={portfolioData.personalInfo.links.github} target="_blank" className="text-[#FF00FF] hover:underline text-lg">
                  @HatfanSahrull
                </a>
              </div>
              <div>
                <p className="text-gray-300 text-lg mb-2">
                  <span className="font-semibold">LinkedIn:</span>
                </p>
                <a href={portfolioData.personalInfo.links.linkedin} target="_blank" className="text-[#FF00FF] hover:underline text-lg">
                  Hatfan Sahrul
                </a>
              </div>
              <div>
                <p className="text-gray-300 text-lg mb-2">
                  <span className="font-semibold">Instagram:</span>
                </p>
                <a href={portfolioData.personalInfo.links.instagram} target="_blank" className="text-[#FF00FF] hover:underline text-lg">
                  @hatfansahrul
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">&copy; 2025 Hatfan Sahrul Ramadhan. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
