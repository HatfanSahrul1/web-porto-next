import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-purple-900/50 via-black to-purple-800/50 min-h-screen">
      {/* Navbar */}
      <nav className="w-full bg-transparent py-6">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="text-white font-bold text-2xl">Brand</div>
          <div className="flex gap-6 text-white">
            <a href="#" className="hover:text-purple-400">Home</a>
            <a href="#" className="hover:text-purple-400">About</a>
            <a href="#" className="hover:text-purple-400">Contact</a>
          </div>
        </div>
      </nav>
    </div>
    
  );
}
