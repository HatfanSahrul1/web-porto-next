interface TechItem {
  name: string;
  icon: string;
}

const techItems: TechItem[] = [
  { name: "C", icon: "🔧" },
  { name: "C++", icon: "⚙️" },
  { name: "C#", icon: "🔷" },
  { name: "Python", icon: "🐍" },
  { name: "JavaScript", icon: "📜" },
  { name: "OpenCV", icon: "👁️" },
  { name: "ROS", icon: "🤖" },
  { name: "MySQL", icon: "🗄️" },
  { name: "PHP", icon: "🐘" },
  { name: "Unity", icon: "🎮" },
  { name: "Raylib", icon: "📦" },
  { name: "Figma", icon: "🎨" },
  { name: "Pandas", icon: "🐼" },
  { name: "Scikit-learn", icon: "🧠" },
  { name: "Git", icon: "📚" },
];

export default function TechTools() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#FF00FF] mb-12">Tech & Tools</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8">
          {techItems.map((tech, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center p-4 bg-gray-900/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}