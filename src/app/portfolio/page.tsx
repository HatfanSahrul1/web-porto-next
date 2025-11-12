'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Import data dari porto.json
import portfolioData from '../../../porto.json';

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(to bottom right, rgba(255, 0, 255, 0.15) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 60%)'
      }}
    >
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md py-4 md:py-6 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl md:text-2xl hover:text-[#FF00FF] transition-colors">
            Hatfan
          </Link>
          <div className="flex gap-6 text-white text-sm md:text-base">
            <Link href="/" className="hover:text-[#FF00FF] transition-colors">Home</Link>
            <Link href="/portfolio" className="text-[#FF00FF]">Portfolio</Link>
            <Link href="/artikel" className="hover:text-[#FF00FF] transition-colors">Artikel</Link>
            <Link href="/#contact" className="hover:text-[#FF00FF] transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Portfolio Lengkap
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {portfolioData.personalInfo.title}
          </p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#FF00FF] mb-8">About Me</h2>
          <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              {portfolioData.aboutMe}
            </p>
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

      {/* Tabs Navigation */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
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
                      <div className="text-4xl mb-2">🎮</div>
                      <p className="text-sm">Screenshot Game</p>
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
                      <div className="text-4xl mb-2">💼</div>
                      <p className="text-sm">Project Screenshot</p>
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
                      <div className="text-4xl mb-2">⚡</div>
                      <p className="text-sm">Tool Screenshot</p>
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
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#FF00FF] mb-8">Penghargaan</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {portfolioData.awards.map((award, index) => (
              <div key={index} className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex items-center">
                <div className="text-3xl mr-4">🏆</div>
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

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">&copy; 2025 Hatfan Sahrul Ramadhan. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}