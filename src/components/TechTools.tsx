import { 
  SiC, SiCplusplus, SiSharp, SiPython, SiJavascript,
  SiOpencv, SiRos, SiMysql, SiPhp, SiUnity,
  SiFigma, SiPandas, SiScikitlearn, SiGit 
} from 'react-icons/si';
import { FaGamepad, FaBox } from 'react-icons/fa';

interface TechItem {
  name: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  color: string;
}

const techItems: TechItem[] = [
  { name: "C", icon: SiC, color: "#A8B9CC" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "C#", icon: SiSharp, color: "#239120" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
  { name: "ROS", icon: SiRos, color: "#22314E" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Unity", icon: SiUnity, color: "#FFFFFF" },
  { name: "Raylib", icon: FaBox, color: "#FF6B6B" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
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
                <tech.icon size={32} color={tech.color} />
              </div>
              <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}