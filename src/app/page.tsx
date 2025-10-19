import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-fuchsia-900/50 via-black to-fuchsia-800/40 min-h-screen">
      {/* Navbar */}
      <nav className="w-full bg-transparent py-6">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="text-white font-bold text-2xl">Brand</div>
          <div className="flex gap-6 text-white">
            <a href="#" className="hover:text-fuchsia-400">Home</a>
            <a href="#" className="hover:text-fuchsia-400">About</a>
            <a href="#" className="hover:text-fuchsia-400">Contact</a>
          </div>
        </div>
      </nav>
    </div>
    
  );
}
