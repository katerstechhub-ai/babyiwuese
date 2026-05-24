"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import { FaEnvelope, FaHeart, FaCoffee, FaArrowRight, FaSpinner } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const playfair = Playfair_Display({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export default function Contact() {
    const formRef = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // Your EmailJS credentials
    const SERVICE_ID = 'service_9v2d11z';
    const TEMPLATE_ID = 'template_dqvvf0t';
    const PUBLIC_KEY = '_KATw3OQ8K9ycKAMN';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            // Send email using EmailJS
            const result = await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current,
                PUBLIC_KEY
            );

            if (result.status === 200) {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setIsSubmitted(false), 5000);
            }
        } catch (err) {
            setError('Failed to send message. Please try again or email me directly.');
            console.error('Email error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`${cormorant.className} min-h-screen bg-[#f9f6f1]`}>

            {/* ── HERO SECTION ── */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070"
                    alt="Contact hero"
                    fill
                    className="object-cover object-center"
                    quality={90}
                    priority
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-center px-4">
                    <p className="text-[#d4a373] text-xs uppercase tracking-[0.4em] mb-6">Get in Touch</p>
                    <h1 className={`${playfair.className} text-5xl md:text-7xl font-bold text-[#f5e6d3] italic mb-6`}>
                        Contact Me
                    </h1>
                    <div className="w-16 h-px bg-[#d4a373] mx-auto" />
                </div>
            </section>

            {/* ── INTRO TEXT ── */}
            <section className="max-w-3xl mx-auto px-6 py-16 text-center">
                <p className="text-[#4a4a4a] font-light leading-relaxed text-lg mb-6">
                    Thank you for visiting my blog and presumably picking an interest.
                    Thank you also for a possible PR, business or collaboration.
                    I'm constantly thinking of ways to bring my readers enjoyable and useful content.
                </p>
                <p className="text-[#4a4a4a] font-light leading-relaxed text-lg">
                    If you're thinking of collaborating on mutually beneficial projects, do let me know.
                    As I write and share a variety of things, I'm certain there's an opportunity somewhere.
                </p>
            </section>

            {/* ── CONTENT GRID ── */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* LEFT SIDE - CONTACT FORM */}
                    <div className="bg-white p-8 border border-[#e8e2d9] shadow-sm">
                        <h2 className={`${playfair.className} text-2xl font-bold text-[#2c2c2c] mb-6 text-center`}>
                            Send a Message
                        </h2>

                        {error && (
                            <div className="bg-red-50 border border-red-300 rounded-lg p-4 mb-6 text-center">
                                <p className="text-red-600 text-sm">{error}</p>
                            </div>
                        )}

                        {isSubmitted ? (
                            <div className="bg-[#d4a373]/10 border border-[#d4a373] rounded-lg p-6 text-center">
                                <FaHeart className="text-[#d4a373] text-3xl mx-auto mb-3" />
                                <p className="text-[#2c2c2c] font-medium">Thank you for reaching out!</p>
                                <p className="text-[#6b6b6b] text-sm mt-2">I'll get back to you as soon as possible.</p>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-[#2c2c2c] text-sm uppercase tracking-wide mb-2 font-medium">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="from_name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 border border-[#e8e2d9] focus:border-[#d4a373] outline-none transition bg-[#faf9f6] text-[#2c2c2c]"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>

                                <div>
                                    <label className="block text-[#2c2c2c] text-sm uppercase tracking-wide mb-2 font-medium">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="from_email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 border border-[#e8e2d9] focus:border-[#d4a373] outline-none transition bg-[#faf9f6] text-[#2c2c2c]"
                                        required
                                        disabled={isLoading}
                                    />
                                </div>

                                <div>
                                    <label className="block text-[#2c2c2c] text-sm uppercase tracking-wide mb-2 font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 border border-[#e8e2d9] focus:border-[#d4a373] outline-none transition bg-[#faf9f6] text-[#2c2c2c] resize-none"
                                        required
                                        disabled={isLoading}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-[#d4a373] text-white py-3 px-6 uppercase tracking-[0.2em] text-sm hover:bg-[#b5835a] transition duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <>
                                            <FaSpinner className="animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <FaArrowRight className="text-xs group-hover:translate-x-1 transition" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* RIGHT SIDE - EMAIL & INFO */}
                    <div className="space-y-8">
                        {/* Email Card */}
                        <div className="bg-white p-8 border border-[#e8e2d9] shadow-sm text-center">
                            <div className="w-12 h-12 rounded-full bg-[#d4a373]/10 flex items-center justify-center mx-auto mb-4">
                                <FaEnvelope className="text-[#d4a373] text-xl" />
                            </div>
                            <h3 className={`${playfair.className} text-xl font-bold text-[#2c2c2c] mb-4`}>
                                Email Me Directly
                            </h3>
                            <div className="space-y-3">
                                <a
                                    href="mailto:jennifershontelle@hotmail.com"
                                    className="block text-[#d4a373] hover:text-[#b5835a] transition break-all"
                                >
                                    jennifershontelle@hotmail.com
                                </a>
                                <a
                                    href="mailto:gbughojennifer@gmail.com"
                                    className="block text-[#d4a373] hover:text-[#b5835a] transition break-all"
                                >
                                    gbughojennifer@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Media Kit Card */}
                        <div className="bg-[#2c2c2c] p-8 text-center border border-[#d4a373]/20">
                            <FaCoffee className="text-[#d4a373] text-2xl mx-auto mb-4" />
                            <h3 className={`${playfair.className} text-xl font-bold text-[#f5e6d3] mb-3`}>
                                Media Kit Available
                            </h3>
                            <p className="text-white/60 font-light leading-relaxed mb-4">
                                Please let me know if you'll like me to provide a media kit with more details about my blog and offerings.
                            </p>
                            <div className="w-12 h-px bg-[#d4a373] mx-auto" />
                        </div>

                        {/* Quote */}
                        <div className="bg-white p-8 border border-[#e8e2d9] text-center">
                            <p className={`${playfair.className} text-lg italic text-[#2c2c2c]`}>
                                "Let's create something beautiful together."
                            </p>
                            <div className="w-12 h-px bg-[#d4a373] mx-auto mt-4" />
                        </div>
                    </div>

                </div>
            </section>

            {/* ── BACK TO BLOG ── */}
            <section className="py-16 px-6 text-center border-t border-[#e8e2d9] mt-8">
                <Link
                    href="/"
                    className="inline-block border-2 border-[#d4a373] text-[#d4a373] px-8 py-3 text-sm uppercase tracking-[0.2em] hover:bg-[#d4a373] hover:text-white transition-colors duration-300"
                >
                    Back to Blog →
                </Link>
            </section>

            <style jsx>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
            `}</style>

        </div>
    );
}