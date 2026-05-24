"use client";
import Link from "next/link";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import {
    FaGavel,
    FaFeatherAlt,
    FaCamera,
    FaPlane,
    FaFilm,
    FaUsers
} from "react-icons/fa";

const playfair = Playfair_Display({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export default function About() {
    return (
        <div className={`${cormorant.className} min-h-screen bg-[#f9f6f1]`}>

            {/* ── HERO WITH WORKING IMAGE ── */}
            <section className="relative h-[550px] flex items-center justify-center overflow-hidden bg-[#2c2c2c]">
                {/* Using a reliable image from Pexels */}
                <img
                    src="/headerab.jpeg"
                    alt="Jenny about hero"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    onError={(e) => {
                        console.log("Image failed to load, using fallback");
                        e.target.style.display = "none";
                    }}
                />
                <div className="absolute inset-0 bg-black/45"></div>
                <div className="relative z-10 text-center px-4">
                    <p className="text-[#d4a373] text-xs uppercase tracking-[0.4em] mb-6">Get to know me</p>
                    <h1 className={`${playfair.className} text-5xl md:text-8xl font-bold text-[#f5e6d3] italic mb-6`}>
                        About Jenny
                    </h1>
                    <div className="w-16 h-px bg-[#d4a373] mx-auto" />
                </div>
            </section>

            {/* Rest of your content remains exactly the same */}
            {/* ── PROFILE SECTION ── */}
            <section className="max-w-5xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute -inset-3 rounded-full border border-[#d4a373]/30" />
                            <div className="absolute -inset-6 rounded-full border border-[#d4a373]/15" />
                            <img
                                src="/lifestyle.jpeg"
                                alt="Jenny"
                                className="w-72 h-72 rounded-full object-cover object-top shadow-2xl relative z-10"
                                onError={(e) => {
                                    e.target.src = "https://placehold.co/288x288/d4a373/white?text=Jenny";
                                }}
                            />
                            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-[#d4a373] z-20 shadow-lg" />
                        </div>
                    </div>
                    <div>
                        <p className="text-[#d4a373] text-xs uppercase tracking-[0.3em] mb-4">Lawyer · Blogger · Storyteller</p>
                        <h2 className={`${playfair.className} text-4xl font-bold text-[#2c2c2c] mb-6 leading-tight`}>
                            Hi, I'm Jenny — very glad you're here.
                        </h2>
                        <div className="w-12 h-px bg-[#d4a373] mb-6" />
                        <div className="space-y-4 text-[#4a4a4a] font-light leading-relaxed text-lg">
                            <p>
                                I am 30, born and brought up in Benue, North Central Nigeria, and I currently live and work in Toronto, Canada.
                            </p>
                            <p>
                                I hold a law degree from the University of Liverpool, England, and I'm a qualified barrister and solicitor of the Supreme Court of Nigeria — currently in the process of qualifying as a solicitor in Ontario.
                            </p>
                            <p>
                                I've always loved writing. In secondary school I spent a gigantic amount of time writing fictional stories for my friends to read — which I think they enjoyed, by the way.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── QUOTE ── */}
            <section className="bg-[#2c2c2c] py-20 px-6 text-center">
                <p className={`${playfair.className} text-2xl md:text-4xl text-[#f5e6d3] italic font-light max-w-3xl mx-auto leading-relaxed`}>
                    "I'm generally seeking to live life with intention and purpose, enjoying the littlest things and helping others do the same."
                </p>
                <div className="w-12 h-px bg-[#d4a373] mx-auto mt-8" />
            </section>

            {/* ── FUN FACTS ── */}
            <section className="max-w-5xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className={`${playfair.className} text-4xl font-bold text-[#2c2c2c] mb-3`}>A Little More About Me</h2>
                    <div className="w-16 h-px bg-[#d4a373] mx-auto" />
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: <FaGavel />, title: "The Law", text: "Barrister & solicitor of the Supreme Court of Nigeria, qualifying as a solicitor in Ontario." },
                        { icon: <FaFeatherAlt />, title: "The Writing", text: "Been writing since secondary school — stories, blog posts, and everything in between." },
                        { icon: <FaCamera />, title: "Photography", text: "I love capturing moments — travel, people, food, and the beauty in everyday life." },
                        { icon: <FaPlane />, title: "Travel", text: "Always dreaming of new locations. Every destination teaches me something new." },
                        { icon: <FaFilm />, title: "Romantic Movies", text: "Give me a good love story and I am perfectly content for the rest of the evening." },
                        { icon: <FaUsers />, title: "Family", text: "I have 3 siblings — all brothers. Yes, I am the only girl." },
                    ].map((item) => (
                        <div key={item.title} className="bg-white p-8 border border-[#e8e2d9] hover:shadow-lg transition-shadow duration-300">
                            <div className="text-3xl mb-4 text-[#d4a373]">{item.icon}</div>
                            <h3 className={`${playfair.className} text-xl font-bold text-[#2c2c2c] mb-3`}>{item.title}</h3>
                            <p className="text-[#6b6b6b] font-light leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── ABOUT THE BLOG ── */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-[#d4a373] text-xs uppercase tracking-[0.3em] mb-4">The Blog</p>
                    <h2 className={`${playfair.className} text-4xl font-bold text-[#2c2c2c] mb-6`}>
                        About Jenniferiwuese.ca
                    </h2>
                    <div className="w-16 h-px bg-[#d4a373] mx-auto mb-10" />
                    <p className="text-[#4a4a4a] font-light leading-relaxed text-lg mb-6">
                        Just like any other lifestyle blog, this space is informative, educative, and — I think — entertaining. We talk about all things lifestyle that constantly run through your mind: relationships, travel, career, beauty, fashion, food & health — all in a bid to help us live life more intentionally and have fun.
                    </p>
                    <p className="text-[#4a4a4a] font-light leading-relaxed text-lg mb-6">
                        Motivation comes from daily living and most posts are written as life happens.
                    </p>
                    <p className={`${playfair.className} text-xl italic text-[#d4a373]`}>
                        I truly hope you stick around.
                    </p>
                </div>
            </section>

            {/* ── 25 FACTS CTA ── */}
            <section className="max-w-5xl mx-auto px-6 py-20">
                <div className="bg-[#2c2c2c] p-12 text-center">
                    <p className="text-[#d4a373] text-xs uppercase tracking-[0.3em] mb-4">Want to know more?</p>
                    <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-[#f5e6d3] italic mb-6`}>
                        25 Random Facts About Me
                    </h2>
                    <p className="text-white/60 font-light mb-8 max-w-xl mx-auto">
                        Things you probably didn't know — and maybe a few you did.
                    </p>
                    <Link
                        href="/random-facts"
                        className="inline-block bg-[#d4a373] text-white px-10 py-4 text-sm uppercase tracking-[0.2em] hover:bg-[#b5835a] transition-colors duration-300"
                    >
                        Read the Post →
                    </Link>
                </div>
            </section>

            {/* ── CONTACT CTA ── */}
            <section className="py-16 px-6 text-center border-t border-[#e8e2d9]">
                <p className={`${playfair.className} text-2xl text-[#2c2c2c] italic mb-6`}>
                    Want to work together or just say hello?
                </p>
                <Link
                    href="/contact"
                    className="inline-block border-2 border-[#d4a373] text-[#d4a373] px-10 py-3 text-sm uppercase tracking-[0.2em] hover:bg-[#d4a373] hover:text-white transition-colors duration-300"
                >
                    Get in Touch →
                </Link>
            </section>

        </div>
    );
}