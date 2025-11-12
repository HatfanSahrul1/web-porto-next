// Menggunakan Iconify Icons dengan wrapper component
import IconifyIcon from './IconifyIcon';

interface TechItem {
  name: string;
  icon: string;
  color: string;
}

const techItems: TechItem[] = [
  { name: "C", icon: "simple-icons:c", color: "#A8B9CC" },
  { name: "C++", icon: "simple-icons:cplusplus", color: "#00599C" },
  { name: "C#", icon: "simple-icons:csharp", color: "#69217A" },
  { name: "Python", icon: "simple-icons:python", color: "#3776AB" },
  { name: "JavaScript", icon: "simple-icons:javascript", color: "#F7DF1E" },
  { name: "TypeScript", icon: "simple-icons:typescript", color: "#007ACC" },
  { name: "OpenCV", icon: "simple-icons:opencv", color: "#5C3EE8" },
  { name: "ROS", icon: "simple-icons:ros", color: "#22314E" },
  { name: "MySQL", icon: "simple-icons:mysql", color: "#4479A1" },
  { name: "Docker", icon: "simple-icons:docker", color: "#2496ED" },
  { name: "PHP", icon: "simple-icons:php", color: "#777BB4" },
  { name: "Unity", icon: "simple-icons:unity", color: "#FFFFFF" },
  { name: "Raylib", icon: "simple-icons:raylib", color: "#FFFFFF" },
  { name: "Figma", icon: "simple-icons:figma", color: "#F24E1E" },
  { name: "Pandas", icon: "simple-icons:pandas", color: "#150458" },
  { name: "Scikit-learn", icon: "simple-icons:scikitlearn", color: "#F7931E" },
  { name: "YOLO", icon: "simple-icons:yolo", color: "#0A72C7" },
  { name: "Roboflow", icon: "simple-icons:roboflow", color: "#6706CE" },
  { name: "Git", icon: "simple-icons:git", color: "#F05032" },
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
                <IconifyIcon 
                  icon={tech.icon} 
                  style={{ color: tech.color, fontSize: '32px' }}
                />
              </div>
              <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}