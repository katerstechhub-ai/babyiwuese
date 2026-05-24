import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Jenny's Blog - Travel & Lifestyle",
  description: "Join me on my journey exploring travel, lifestyle, and adventures around the world!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#faf9f6] text-[#2c2c2c]">
        {/* Navigation Bar */}
        <nav className="bg-[#faf9f6] border-b border-[#e8e4db]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-5">
              <Link href="/" className="text-2xl font-medium text-[#2c2c2c] hover:text-[#d4a373] transition tracking-tight">
                Jenny's Blog
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-[#4a4a4a] hover:text-[#d4a373] transition font-medium">Home</Link>
                <Link href="/travel" className="text-[#4a4a4a] hover:text-[#d4a373] transition font-medium">Travel</Link>
                <Link href="/lifestyle" className="text-[#4a4a4a] hover:text-[#d4a373] transition font-medium">Lifestyle</Link>
                <Link href="/about" className="text-[#4a4a4a] hover:text-[#d4a373] transition font-medium">About</Link>
                <Link href="/contact" className="text-[#4a4a4a] hover:text-[#d4a373] transition font-medium">Contact</Link>
                <Link href="/support" className="text-[#4a4a4a] hover:text-[#d4a373] transition font-medium">Support</Link>
              </div>
              <div className="md:hidden">
                <button className="text-[#4a4a4a] focus:outline-none" id="menuButton">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="md:hidden hidden" id="mobileMenu">
              <div className="flex flex-col space-y-3 pb-4">
                <Link href="/" className="text-[#4a4a4a] hover:text-[#d4a373] transition py-2">Home</Link>
                <Link href="/travel" className="text-[#4a4a4a] hover:text-[#d4a373] transition py-2">Travel</Link>
                <Link href="/lifestyle" className="text-[#4a4a4a] hover:text-[#d4a373] transition py-2">Lifestyle</Link>
                <Link href="/about" className="text-[#4a4a4a] hover:text-[#d4a373] transition py-2">About</Link>
                <Link href="/contact" className="text-[#4a4a4a] hover:text-[#d4a373] transition py-2">Contact</Link>
                <Link href="/support" className="text-[#4a4a4a] hover:text-[#d4a373] transition py-2">Support</Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-[#e8e4db] pt-12 pb-6 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-medium text-[#2c2c2c] mb-4 tracking-tight">Jenny's Blog</h3>
                <p className="text-[#6b6b6b] text-sm">
                  Exploring travel, lifestyle, and adventures around the world.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-[#2c2c2c] mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/travel" className="text-[#6b6b6b] hover:text-[#d4a373] transition">Travel</Link></li>
                  <li><Link href="/lifestyle" className="text-[#6b6b6b] hover:text-[#d4a373] transition">Lifestyle</Link></li>
                  <li><Link href="/about" className="text-[#6b6b6b] hover:text-[#d4a373] transition">About</Link></li>
                  <li><Link href="/contact" className="text-[#6b6b6b] hover:text-[#d4a373] transition">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[#2c2c2c] mb-4">Support</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/support" className="text-[#6b6b6b] hover:text-[#d4a373] transition">Buy Me a Coffee</Link></li>
                  <li><Link href="/contact" className="text-[#6b6b6b] hover:text-[#d4a373] transition">Collaborate</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[#2c2c2c] mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {/* Instagram */}
                  <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-[#6b6b6b] hover:text-[#d4a373] transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  {/* Twitter/X */}
                  <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-[#6b6b6b] hover:text-[#d4a373] transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  {/* TikTok */}
                  <a href="https://tiktok.com/@yourhandle" target="_blank" rel="noopener noreferrer" className="text-[#6b6b6b] hover:text-[#d4a373] transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-[#e8e4db] pt-6 text-center">
              <p className="text-[#6b6b6b] text-sm">
                &copy; {new Date().getFullYear()} Jenny's Blog. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        <script dangerouslySetInnerHTML={{
          __html: `
            document.getElementById('menuButton')?.addEventListener('click', function() {
              const menu = document.getElementById('mobileMenu');
              if (menu) menu.classList.toggle('hidden');
            });
          `
        }} />
      </body>
    </html>
  );
}