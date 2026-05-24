"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=jennyblog&per_page=10&page=1")
      .then((res) => res.json())
      .then((data) => {
        console.log("Data:", data);
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* ========== HERO SECTION ========== */}
      <section className="relative h-[500px] flex items-center justify-center">
        <Image
          src="/hero.jpeg"
          alt="Hero background"
          fill
          className="object-cover object-center"
          quality={70}
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className={`${playfair.className} text-5xl md:text-8xl mb-3 font-bold text-[#f5e6d3] tracking-widest italic drop-shadow-2xl`}>
            Jenny's Blog
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-white/90">
            Travel | Lifestyle | Adventures
          </p>
          <Link href="/travel" className="inline-block bg-[#d4a373] text-white px-8 py-3 rounded-lg hover:bg-[#b5835a] transition mt-8">
            Explore Blog →
          </Link>
        </div>
      </section>

      {/* ========== ABOUT / WELCOME SECTION ========== */}
      <section className="py-24 px-4 bg-[#faf9f6]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${playfair.className} text-4xl md:text-6xl font-bold text-[#2c2c2c] mb-4 tracking-wide`}>
            Hi, I'm Jenny
          </h2>
          <div className="w-16 h-px bg-[#d4a373] mx-auto mb-8"></div>
          <div className="space-y-5 text-[#4a4a4a] font-light leading-relaxed">
            <p className="text-lg">
              Lawyer by trade, storyteller by heart. Born in Benue, based in Toronto.
              I've always believed that the best stories live somewhere between adventure and intention.
            </p>
            <p className="text-base">
              When I'm not practicing law, you'll find me with a camera in hand,
              dreaming of new destinations, or curled up with a romantic movie.
              This space is where I share the beautiful chaos of it all — travel,
              relationships, career, food, and everything in between.
            </p>
            <p className="text-base italic text-[#d4a373]">
              "Living with intention, finding joy in the little things."
            </p>
          </div>
          <div className="mt-10">
            <Link href="/about" className="inline-block border-2 border-[#d4a373] text-[#d4a373] px-10 py-3 rounded-full hover:bg-[#d4a373] hover:text-white transition font-medium text-sm uppercase tracking-wider">
              Read My Story →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== MUSINGS & WANDERINGS — Dev.to API ========== */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-[#2c2c2c] mb-3`}>
              Musings & Wanderings
            </h2>
            <p className="text-[#6b6b6b] text-lg font-light tracking-wide">
              Stories from the road and whispers from the heart
            </p>
            <div className="w-20 h-px bg-[#d4a373] mx-auto mt-4"></div>
          </div>

          {loading ? (
            <p className="text-center text-[#6b6b6b]">Loading posts...</p>
          ) : posts.length === 0 ? (
            <p className="text-center text-[#6b6b6b]">No posts found.</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
              {posts.map((post) => (
                <div key={post.id} className="block">
                  <a href={`/blog/${post.id}`} className="group block">
                    <div className="overflow-hidden mb-4 h-56">
                      <img
                        src={post.cover_image || post.social_image || "/hero.jpeg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="text-[#d4a373] text-sm uppercase tracking-wider mb-2">
                    {post.readable_publish_date}
                  </div>
                  <a href={`/blog/${post.id}`} className="group block">
                    <h2 className={`${playfair.className} text-xl font-bold text-[#2c2c2c] mb-3 leading-tight group-hover:text-[#d4a373] transition line-clamp-2`}>
                      {post.title}
                    </h2>
                  </a>
                  <div className="flex items-center space-x-4">
                    <span className="text-[#d4a373] text-xs font-medium uppercase tracking-wide">
                      {post.tag_list?.[0] || "Blog"}
                    </span>
                    <span className="text-[#e8e4db]">|</span>
                    <span className="text-[#6b6b6b] text-xs font-medium uppercase tracking-wide">
                      {post.comments_count} COMMENT{post.comments_count !== 1 ? "S" : ""}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-16">
            <Link href="/blog" className="inline-block border-2 border-[#d4a373] text-[#d4a373] px-8 py-3 rounded-full hover:bg-[#d4a373] hover:text-white transition font-medium text-sm uppercase tracking-wide">
              Read the Archive →
            </Link>
          </div>
        </div>
      </section>

      {/* ========== TRAVEL SECTION ========== */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-left">
              <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-[#2c2c2c] mb-4 tracking-wide`}>
                Adventures Around the World
              </h2>
              <div className="w-12 h-px bg-[#d4a373] mb-6"></div>
              <p className="text-[#4a4a4a] font-light leading-relaxed mb-6">
                From hidden gems in Europe to tropical escapes in Southeast Asia,
                join me as I explore new cultures, taste local flavors,
                and collect memories that last a lifetime.
              </p>
              <Link href="/travel" className="inline-block border-2 border-[#d4a373] text-[#d4a373] px-8 py-2 rounded-full hover:bg-[#d4a373] hover:text-white transition font-medium text-sm uppercase tracking-wider">
                Explore Travel →
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="overflow-hidden w-80 h-80">
                <img src="/travel.jpeg" alt="Travel adventure" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== LIFESTYLE SECTION ========== */}
      <section className="py-20 px-4 bg-[#faf9f6]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <div className="overflow-hidden w-80 h-80">
                <img src="/lifestyle.jpeg" alt="Lifestyle inspiration" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="text-left order-1 md:order-2">
              <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-[#2c2c2c] mb-4 tracking-wide`}>
                Living with Intention
              </h2>
              <div className="w-12 h-px bg-[#d4a373] mb-6"></div>
              <p className="text-[#4a4a4a] font-light leading-relaxed mb-6">
                From morning coffee rituals to evening wind-downs,
                explore the little moments that make life beautiful.
                Style, wellness, and everyday inspiration — curated just for you.
              </p>
              <Link href="/lifestyle" className="inline-block border-2 border-[#d4a373] text-[#d4a373] px-8 py-2 rounded-full hover:bg-[#d4a373] hover:text-white transition font-medium text-sm uppercase tracking-wider">
                Explore Lifestyle →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GALLERY SECTION ========== */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h3 className={`${playfair.className} text-2xl text-[#2c2c2c] font-light tracking-wide`}>
              From the Lens
            </h3>
            <div className="w-12 h-px bg-[#d4a373] mx-auto mt-3"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-8 gap-0">
            <div className="aspect-square overflow-hidden"><img src="/gallery/gallery1.jpeg" alt="Gallery 1" className="w-full h-full object-cover" /></div>
            <div className="aspect-square overflow-hidden"><img src="/gallery/gallery11.jpeg" alt="Gallery 2" className="w-full h-full object-cover" /></div>
            <div className="aspect-square overflow-hidden"><img src="/gallery/gallery5.jpg" alt="Gallery 3" className="w-full h-full object-cover" /></div>
            <div className="aspect-square overflow-hidden"><img src="/gallery/gallery2.jpeg" alt="Gallery 4" className="w-full h-full object-cover" /></div>
            <div className="aspect-square overflow-hidden"><img src="/gallery/gallery3.jpeg" alt="Gallery 5" className="w-full h-full object-cover" /></div>
            <div className="aspect-square overflow-hidden"><img src="/gallery/gallery6.jpg" alt="Gallery 6" className="w-full h-full object-cover" /></div>
            <div className="aspect-square overflow-hidden"><img src="/gallery/gallery4.jpeg" alt="Gallery 7" className="w-full h-full object-cover" /></div>
            <div className="aspect-square overflow-hidden"><img src="/gallery/gallery7.jpg" alt="Gallery 8" className="w-full h-full object-cover" /></div>
          </div>
        </div>
      </section>
    </div>
  );
}