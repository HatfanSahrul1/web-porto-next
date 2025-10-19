'use client';

import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Robot Soccer AI",
    description: "Computer vision and AI system for autonomous robot soccer using ROS and OpenCV",
    tech: ["Python", "OpenCV", "ROS", "Machine Learning"],
    github: "https://github.com/HatfanSahrul1/robot-soccer"
  },
  {
    title: "Unity 3D Game",
    description: "3D adventure game built with Unity and C# with custom physics and AI systems",
    tech: ["Unity", "C#", "3D Graphics"],
    github: "https://github.com/HatfanSahrul1/unity-game"
  },
  {
    title: "Machine Learning Project",
    description: "Data analysis and prediction model using scikit-learn and pandas",
    tech: ["Python", "Pandas", "Scikit-learn", "Data Science"],
    github: "https://github.com/HatfanSahrul1/ml-project"
  },
  // Add more projects as needed
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#FF00FF] mb-12">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {displayedProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-[#FF00FF]/20 text-[#FF00FF] text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#FF00FF] transition-colors"
                  >
                    GitHub →
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#FF00FF] transition-colors"
                  >
                    Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="text-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="bg-[#FF00FF] hover:bg-[#CC00CC] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              {showAll ? 'Show Less' : 'View More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}