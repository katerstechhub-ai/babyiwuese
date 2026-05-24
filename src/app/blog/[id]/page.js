import Link from "next/link";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export default async function PostDetail({ params }) {
    const { id } = await params;

    const [postRes, commentsRes] = await Promise.all([
        fetch(`https://dev.to/api/articles/${id}`, { cache: "no-store" }),
        fetch(`https://dev.to/api/comments?a_id=${id}`, { cache: "no-store" }),
    ]);

    const post = await postRes.json();
    const comments = await commentsRes.json();

    const tags = typeof post.tag_list === "string"
        ? post.tag_list.split(", ").filter(Boolean)
        : post.tag_list || [];

    return (
        <div className={`${cormorant.className} min-h-screen bg-[#f9f6f1]`}>

            {/* ── FULL BLEED HERO ── */}
            <div className="relative w-full h-[90vh] overflow-hidden">
                {(post.cover_image || post.social_image) && (
                    <img
                        src={post.cover_image || post.social_image}
                        alt={post.title}
                        className="w-full h-full object-cover scale-105"
                        style={{ filter: "brightness(0.55)" }}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a07] via-transparent to-transparent" />
                <div className="absolute top-8 left-8 z-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-[#d4a373] transition text-sm uppercase tracking-[0.2em]">
                        <span className="text-lg">←</span> Home
                    </Link>
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-8 md:px-20 pb-16 z-10">
                    <div className="mb-5">
                        <span className="text-[#d4a373] text-xs uppercase tracking-[0.3em] border border-[#d4a373]/50 px-4 py-1.5">
                            {tags[0] || "Blog"}
                        </span>
                    </div>
                    <h1 className={`${playfair.className} text-4xl md:text-7xl font-bold text-white leading-[1.1] max-w-4xl mb-6 italic`}>
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-white/50 text-sm tracking-widest uppercase">
                        <span>{post.readable_publish_date}</span>
                        <span className="w-1 h-1 rounded-full bg-[#d4a373]" />
                        <span>{post.reading_time_minutes} min read</span>
                        <span className="w-1 h-1 rounded-full bg-[#d4a373]" />
                        <span>{post.comments_count} comments</span>
                    </div>
                </div>
            </div>

            {/* ── AUTHOR STRIP ── */}
            <div className="bg-white border-b border-[#e8e2d9]">
                <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src={post.user?.profile_image_90} alt={post.user?.name} className="w-11 h-11 rounded-full object-cover grayscale" />
                        <div>
                            <p className="text-[#2c2c2c] text-base font-medium">{post.user?.name}</p>
                            <p className="text-[#b0a898] text-xs tracking-widest uppercase">@{post.user?.username}</p>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-2">
                        {tags.map((tag) => (
                            <span key={tag} className="text-[#b0a898] text-xs uppercase tracking-widest border border-[#e8e2d9] px-3 py-1">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── BODY ── */}
            <div className="max-w-3xl mx-auto px-6 py-20">
                {post.description && (
                    <p className={`${playfair.className} text-2xl md:text-3xl text-[#5a4f45] italic font-light leading-relaxed mb-16 border-l-2 border-[#d4a373] pl-8`}>
                        {post.description}
                    </p>
                )}

                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px flex-1 bg-[#e8e2d9]" />
                    <span className="text-[#d4a373] text-xs tracking-[0.4em] uppercase">✦ Article ✦</span>
                    <div className="h-px flex-1 bg-[#e8e2d9]" />
                </div>

                <div
                    className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-[#2c2c2c] prose-headings:tracking-wide
            prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-4
            prose-p:text-[#3d352c] prose-p:leading-[1.95] prose-p:font-light prose-p:text-lg
            prose-a:text-[#d4a373] prose-a:no-underline hover:prose-a:underline
            prose-img:w-full prose-img:my-10
            prose-strong:text-[#2c2c2c] prose-strong:font-semibold
            prose-blockquote:border-l-[#d4a373] prose-blockquote:border-l-2
            prose-blockquote:text-[#6b6b6b] prose-blockquote:italic prose-blockquote:text-xl
            prose-blockquote:pl-8
            prose-li:text-[#3d352c] prose-li:leading-relaxed
            prose-code:text-[#d4a373] prose-code:bg-[#f5ede3] prose-code:px-1
          "
                    style={{ fontFamily: "inherit" }}
                    dangerouslySetInnerHTML={{ __html: post.body_html }}
                />

                <div className="flex items-center gap-4 mt-20 mb-16">
                    <div className="h-px flex-1 bg-[#e8e2d9]" />
                    <span className="text-[#d4a373] text-lg">✦</span>
                    <div className="h-px flex-1 bg-[#e8e2d9]" />
                </div>

                {/* Tags */}
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-16">
                        <span className="text-[#b0a898] text-xs uppercase tracking-widest mr-2 self-center">Filed under</span>
                        {tags.map((tag) => (
                            <span key={tag} className="text-[#d4a373] text-xs uppercase tracking-widest border border-[#d4a373]/40 px-4 py-1.5 hover:bg-[#d4a373] hover:text-white transition cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* ── COMMENTS SECTION ── */}
                <div className="mt-20">

                    {/* Comments header */}
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px flex-1 bg-[#e8e2d9]" />
                        <span className="text-[#d4a373] text-xs tracking-[0.4em] uppercase">
                            ✦ {comments.length} Comment{comments.length !== 1 ? "s" : ""} ✦
                        </span>
                        <div className="h-px flex-1 bg-[#e8e2d9]" />
                    </div>

                    {/* Comments list */}
                    {comments.length === 0 ? (
                        <div className="text-center py-16">
                            <p className={`${playfair.className} text-2xl text-[#b0a898] italic`}>
                                No comments yet. Be the first to share your thoughts.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-10">
                            {comments.map((comment) => (
                                <div key={comment.id_code} className="flex gap-5">
                                    {/* Avatar */}
                                    <img
                                        src={comment.user?.profile_image_90}
                                        alt={comment.user?.name}
                                        className="w-10 h-10 rounded-full object-cover grayscale flex-shrink-0 mt-1"
                                    />
                                    {/* Comment body */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-[#2c2c2c] text-sm font-medium">{comment.user?.name}</span>
                                            <span className="text-[#e8e2d9]">·</span>
                                            <span className="text-[#b0a898] text-xs tracking-wide uppercase">
                                                {new Date(comment.created_at).toLocaleDateString("en-US", {
                                                    month: "long", day: "numeric", year: "numeric"
                                                })}
                                            </span>
                                        </div>
                                        <div
                                            className="text-[#4a4240] leading-relaxed text-base font-light
                        prose prose-sm max-w-none
                        prose-p:text-[#4a4240] prose-p:font-light prose-p:leading-relaxed
                        prose-a:text-[#d4a373]
                      "
                                            dangerouslySetInnerHTML={{ __html: comment.body_html }}
                                        />
                                        {/* Nested replies */}
                                        {comment.children?.length > 0 && (
                                            <div className="mt-6 pl-6 border-l border-[#e8e2d9] space-y-6">
                                                {comment.children.map((reply) => (
                                                    <div key={reply.id_code} className="flex gap-4">
                                                        <img
                                                            src={reply.user?.profile_image_90}
                                                            alt={reply.user?.name}
                                                            className="w-8 h-8 rounded-full object-cover grayscale flex-shrink-0 mt-1"
                                                        />
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-3 mb-2">
                                                                <span className="text-[#2c2c2c] text-sm font-medium">{reply.user?.name}</span>
                                                                <span className="text-[#e8e2d9]">·</span>
                                                                <span className="text-[#b0a898] text-xs tracking-wide uppercase">
                                                                    {new Date(reply.created_at).toLocaleDateString("en-US", {
                                                                        month: "long", day: "numeric", year: "numeric"
                                                                    })}
                                                                </span>
                                                            </div>
                                                            <div
                                                                className="text-[#4a4240] leading-relaxed text-base font-light prose prose-sm max-w-none prose-p:text-[#4a4240] prose-a:text-[#d4a373]"
                                                                dangerouslySetInnerHTML={{ __html: reply.body_html }}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Leave a comment CTA — links to Dev.to post */}
                    <div className="mt-16 p-10 bg-white border border-[#e8e2d9] text-center">
                        <p className={`${playfair.className} text-2xl text-[#2c2c2c] italic mb-2`}>
                            Join the conversation
                        </p>
                        <p className="text-[#b0a898] text-sm tracking-wide mb-6">
                            Comments are hosted on Dev.to — click below to leave your thoughts
                        </p>
                        <a
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#2c2c2c] text-[#f5e6d3] px-10 py-3 text-sm uppercase tracking-[0.2em] hover:bg-[#d4a373] transition-colors duration-300"
                        >
                            Leave a Comment on Dev.to →
                        </a>
                    </div>

                    {/* Back CTA */}
                    {/* Back CTA */}
                    <div className="text-center pt-16 mt-10 border-t border-[#e8e2d9]">
                        <p className={`${playfair.className} text-[#b0a898] text-lg italic mb-6`}>
                            Thank you for reading
                        </p>
                        <Link
                            href="/"
                            className="inline-block bg-[#2c2c2c] text-[#f5e6d3] px-12 py-4 text-sm uppercase tracking-[0.2em] hover:bg-[#d4a373] transition-colors duration-300"
                        >
                            ← Back to Jenny's Blog
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}