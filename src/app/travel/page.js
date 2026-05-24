// travel/page.js
import Link from "next/link";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export default function Travel() {
  return (
    <div className={`${cormorant.className} min-h-screen bg-[#f9f6f1]`}>

      {/* HERO */}
      <section className="relative h-[400px] flex items-center justify-center bg-[#2c2c2c]">
        <div className="text-center px-4">
          <p className="text-[#d4a373] text-xs uppercase tracking-[0.4em] mb-6">Coming Soon</p>
          <h1 className={`${playfair.className} text-5xl md:text-7xl font-bold text-[#f5e6d3] italic mb-6`}>
            Travel
          </h1>
          <div className="w-16 h-px bg-[#d4a373] mx-auto" />
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-[#2c2c2c] mb-4`}>
          Wanderlust Loading...
        </h2>
        <div className="w-12 h-px bg-[#d4a373] mx-auto mb-6" />
        <p className="text-[#4a4a4a] font-light leading-relaxed text-lg mb-12">
          I'm busy collecting stories and adventures to share with you. 
          Travel guides, tips, and beautiful destinations coming soon.
        </p>
        <Link
          href="/"
          className="inline-block border-2 border-[#d4a373] text-[#d4a373] px-8 py-3 text-sm uppercase tracking-[0.2em] hover:bg-[#d4a373] hover:text-white transition"
        >
          Back to Home
        </Link>
      </section>

    </div>
  );
}