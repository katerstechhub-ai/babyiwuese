import Link from "next/link";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import { FaArrowLeft, FaHeart, FaComment, FaShare, FaCalendarAlt, FaUser } from "react-icons/fa";

const playfair = Playfair_Display({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export default function RandomFacts() {
    const facts = [
        "I am from Benue, Nigeria, born and bred there.",
        "Only girl, i have 3 brothers… NO! my dad isn't overly protective. In fact, i had so much freedom growing up i found those 'oh so your dad must be over protective' statements weird and strange.",
        "I'm rubbish at anything sporty, and have always been that way. As a child I'd find any way to get out of activities at sports day, and even when taking part I'd be at the back, daydreaming — nah, that's a lie, you'd probably find me amongst those cheering.",
        "I HATE Pasta.",
        "My favourite food has to be Jollof rice and dodo (plantain) — oh Nigerian Jollof i must add!",
        "I HATE dirty bathrooms. I could stand any other part of the house being unclean, but a filthy bathroom is just a no no.",
        "I HATE doing dishes so i use disposable plates.",
        "I like to be by myself almost all the time.",
        "I'm extremely scared of heights and large bodies of water — sounds cliche but mine is on a different level.",
        "I hate stress… psst! who likes stress?",
        "Yo! i am extremely paranoid!!",
        "I got baptised in September of 2015 — by far the most beautiful thing in my life.",
        "I'm too 'independent' to a fault! I don't like to ask for help! No! It's not pride, I just don't like to bother people.",
        "Ha! I support the best football club in England! — Arsenal Football Club. 🔴",
        "I talk to myself a lot. If there's a hidden camera in my apt (just so you know, I think there is 😂) they probably think I'm insane or they can just agree I'm entertaining and interesting to listen to (my stories are lit!)",
        "I HATE texting just because I feel its long and unnecessary.",
        "Never been in a physical fight… well for as long as I can remember.",
        "Been in surgery room thrice!",
        "Been in an accident twice! When I first started driving that was my trademark.",
        "I'm so laid back. It takes a lot to bother me, and I'm often heard saying 'it'll be fine!' Nah, I'm not that mushy — I'd probably give you or myself a gangster's pep talk, anything but a pity party. I'm ashamed when I cry.",
        "I hated mathematics — scratch that — I still hate maths. By far the worst thing ever! My best grade ever till date remains a 'C'. And no! That's not why I ended up studying law — I've always been passionate about law.",
        "I got a double promotion in primary school and then I skipped a class and got into secondary school.",
        "I hate the travelling process but I like to go to new places.",
        "Finally, I'm totally obsessed with the idea of heaven."
    ];

    return (
        <div className={`${cormorant.className} min-h-screen bg-[#f9f6f1]`}>

            {/* ── BACK BUTTON ── */}
            <div className="max-w-4xl mx-auto px-6 pt-12">
                <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-[#d4a373] hover:text-[#b5835a] transition-colors duration-300 group"
                >
                    <FaArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm uppercase tracking-wide">Back to About</span>
                </Link>
            </div>

            {/* ── POST HEADER ── */}
            <section className="relative bg-[#2c2c2c] py-24 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #d4a373 0%, transparent 50%)" }}
                />
                <div className="relative z-10 max-w-3xl mx-auto">
                    <p className="text-[#d4a373] text-xs uppercase tracking-[0.4em] mb-6">Get to know me</p>
                    <h1 className={`${playfair.className} text-4xl md:text-6xl font-bold text-[#f5e6d3] mb-6`}>
                        25 Random Facts You Probably Already Knew About Me
                    </h1>

                    {/* Meta info */}
                    <div className="flex items-center justify-center gap-6 text-[#d4a373]/70 text-sm">
                        <div className="flex items-center gap-2">
                            <FaUser className="text-xs" />
                            <span>Jenny</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-xs" />
                            <span>May 10, 2017</span>
                        </div>
                    </div>

                    <div className="w-16 h-px bg-[#d4a373] mx-auto mt-8" />
                </div>
            </section>

            {/* ── POST CONTENT ── */}
            <article className="max-w-3xl mx-auto px-6 py-16">
                {/* Introduction */}
                <div className="mb-12 text-center">
                    <p className="text-[#4a4a4a] font-light leading-relaxed text-lg mb-6">
                        Hey lovelies, I know it's been such a long time and I don't even have an explanation for my absence
                        but I'm here now… for a while now I've been wanting to join the trend and do the
                        <span className="text-[#d4a373] font-medium"> "random facts about me" </span>
                        challenge! Today is that day 😊 and I hope this helps you know me better.
                    </p>
                </div>

                {/* Facts List */}
                <div className="space-y-6">
                    {facts.map((fact, index) => (
                        <div
                            key={index}
                            className="flex gap-4 items-start group hover:bg-white/50 p-4 rounded-lg transition-all duration-300"
                        >
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#d4a373] text-white flex items-center justify-center text-sm font-bold mt-1">
                                {index + 1}
                            </div>
                            <p className="text-[#4a4a4a] font-light leading-relaxed text-lg flex-1">
                                {fact}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Conclusion */}
                <div className="mt-12 pt-8 border-t border-[#e8e2d9] text-center">
                    <p className="text-[#4a4a4a] font-light leading-relaxed text-lg italic">
                        That's it guys! Have a blessed rest of the week ❤️
                    </p>
                </div>

                {/* Share Section */}
               
            </article>

            {/* ── RELATED POSTS / BACK TO BLOG ── */}
            <section className="border-t border-[#e8e2d9] bg-white py-16">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <p className="text-[#d4a373] text-xs uppercase tracking-[0.3em] mb-4">Enjoyed this?</p>
                    <h3 className={`${playfair.className} text-2xl text-[#2c2c2c] mb-6`}>
                        More from Jenny's Blog
                    </h3>
                    <Link
                        href="/"
                        className="inline-block border-2 border-[#d4a373] text-[#d4a373] px-8 py-3 text-sm uppercase tracking-[0.2em] hover:bg-[#d4a373] hover:text-white transition-colors duration-300"
                    >
                        View All Posts →
                    </Link>
                </div>
            </section>

            {/* ── FOOTER NAVIGATION ── */}
            <div className="max-w-3xl mx-auto px-6 py-12 flex justify-between">
                <Link
                    href="/about"
                    className="text-[#d4a373] hover:text-[#b5835a] text-sm uppercase tracking-wide"
                >
                    ← Back to About Jenny
                </Link>
                <Link
                    href="/contact"
                    className="text-[#d4a373] hover:text-[#b5835a] text-sm uppercase tracking-wide"
                >
                    Get in Touch →
                </Link>
            </div>

        </div>
    );
}