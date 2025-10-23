import Link from 'next/link';

export default function ArtikelPage() {
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
          <div className="flex gap-6 text-white">
            <Link href="/" className="hover:text-[#FF00FF] transition-colors">Home</Link>
            <Link href="/artikel" className="text-[#FF00FF]">Artikel</Link>
            <Link href="/#contact" className="hover:text-[#FF00FF] transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Artikel & Blog
          </h1>
          
          <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-12 md:p-20">
            <div className="text-6xl md:text-8xl mb-6">📝</div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
              Belum Ada Artikel Hehe
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Halaman artikel masih dalam tahap pengembangan. 
              Stay tuned untuk artikel menarik seputar game development, 
              computer vision, dan machine learning!
            </p>
            
            <Link 
              href="/"
              className="inline-block bg-[#FF00FF] hover:bg-[#CC00CC] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Kembali ke Home
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">&copy; 2025 Hatfan Sahrul Ramadhan. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}