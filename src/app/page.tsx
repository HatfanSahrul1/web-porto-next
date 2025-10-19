import Image from "next/image";

export default function Home() {
  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(to bottom right, rgba(255, 0, 255, 0.15) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 60%)'
      }}
    >
      {/* Navbar */}
      <nav className="w-full bg-transparent py-6">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="text-white font-bold text-2xl">Hatfan</div>
          <div className="flex gap-6 text-white">
            <a href="#" className="hover:text-[#FF00FF] transition-colors">Home</a>
            <a href="#" className="hover:text-[#FF00FF] transition-colors">About</a>
            <a href="#" className="hover:text-[#FF00FF] transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    </div>
    
  );
}
