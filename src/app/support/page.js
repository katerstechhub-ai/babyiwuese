"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import { 
  FaCoffee,
  FaHeart, 
  FaPaypal, 
  FaArrowRight,
  FaGift,
  FaQuoteLeft,
  FaTimes,
  FaCopy,
  FaCheck,
  FaUniversity,
  FaCcVisa,
  FaCcMastercard,
  FaCreditCard,
  FaMoneyBillWave
} from "react-icons/fa";

const playfair = Playfair_Display({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export default function Support() {
  const [activeModal, setActiveModal] = useState(null);
  const [copied, setCopied] = useState(false);
  const modalRef = useRef(null);

  const openModal = (modalName) => {
    setActiveModal(modalName);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    setCopied(false);
    document.body.style.overflow = "auto";
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && activeModal) {
        closeModal();
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [activeModal]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`${cormorant.className} min-h-screen bg-[#f9f6f1]`}>

      {/* ── MODAL FOR BUY ME A COFFEE (USES PAYPAL) ── */}
      {activeModal === "coffee" && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          style={{ animation: 'fadeIn 0.3s ease-out forwards' }}
          onClick={handleOutsideClick}
        >
          <div ref={modalRef} className="relative bg-[#f9f6f1] max-w-md w-full rounded-lg shadow-2xl">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-[#6b6b6b] hover:text-[#d4a373] transition z-10"
            >
              <FaTimes className="text-xl" />
            </button>
            
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#d4a373]/10 flex items-center justify-center mx-auto mb-4">
                  <FaCoffee className="text-[#d4a373] text-2xl" />
                </div>
                <h3 className={`${playfair.className} text-2xl font-bold text-[#2c2c2c] mb-2`}>
                  Buy Me a Coffee
                </h3>
                <p className="text-[#6b6b6b] text-sm">Support my work via PayPal</p>
              </div>

              <div className="space-y-3 mb-6">
                {[3, 5, 10, 20].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      window.open(`https://paypal.me/jennyblog/${amount}`, "_blank");
                      closeModal();
                    }}
                    className="w-full py-3 px-4 rounded-lg border border-[#e8e2d9] hover:border-[#d4a373] hover:bg-[#d4a373]/5 transition flex items-center justify-between group"
                  >
                    <span className="flex items-center gap-3">
                      <FaMoneyBillWave className="text-[#6b6b6b] group-hover:text-[#d4a373]" />
                      <span className="font-semibold text-[#2c2c2c]">${amount}</span>
                    </span>
                    <span className="text-[#d4a373] text-sm">Select →</span>
                  </button>
                ))}
              </div>

              <div className="bg-[#faf9f6] p-3 rounded-lg mb-4">
                <p className="text-[#6b6b6b] text-sm text-center">Or send any amount to:</p>
                <p className="text-[#d4a373] font-medium text-center">jennifershontelle@hotmail.com</p>
              </div>

              <button
                onClick={() => {
                  window.open("https://paypal.me/jennyblog", "_blank");
                  closeModal();
                }}
                className="w-full bg-[#d4a373] text-white py-3 rounded-lg hover:bg-[#b5835a] transition flex items-center justify-center gap-2"
              >
                <FaPaypal /> Continue with PayPal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL FOR REGULAR PAYPAL DONATION ── */}
      {activeModal === "paypal" && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          style={{ animation: 'fadeIn 0.3s ease-out forwards' }}
          onClick={handleOutsideClick}
        >
          <div ref={modalRef} className="relative bg-[#f9f6f1] max-w-md w-full rounded-lg shadow-2xl">
            <button onClick={closeModal} className="absolute top-4 right-4 text-[#6b6b6b] hover:text-[#d4a373] transition">
              <FaTimes className="text-xl" />
            </button>
            <div className="p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#d4a373]/10 flex items-center justify-center mx-auto mb-4">
                <FaPaypal className="text-[#d4a373] text-2xl" />
              </div>
              <h3 className={`${playfair.className} text-2xl font-bold text-[#2c2c2c] mb-2`}>
                PayPal Donation
              </h3>
              <p className="text-[#6b6b6b] mb-6">Send money securely via PayPal</p>
              
              <div className="flex items-center justify-center gap-3 mb-6">
                <FaCcVisa className="text-3xl text-[#6b6b6b]" />
                <FaCcMastercard className="text-3xl text-[#6b6b6b]" />
                <FaPaypal className="text-3xl text-[#6b6b6b]" />
                <FaCreditCard className="text-3xl text-[#6b6b6b]" />
              </div>
              
              <div className="space-y-3 mb-6">
                {[10, 25, 50, 100].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      window.open(`https://paypal.me/jennyblog/${amount}`, "_blank");
                      closeModal();
                    }}
                    className="w-full py-3 px-4 rounded-lg border border-[#e8e2d9] hover:border-[#d4a373] hover:bg-[#d4a373]/5 transition flex items-center justify-between group"
                  >
                    <span className="flex items-center gap-3">
                      <FaMoneyBillWave className="text-[#6b6b6b] group-hover:text-[#d4a373]" />
                      <span className="font-semibold text-[#2c2c2c]">${amount}</span>
                    </span>
                    <span className="text-[#d4a373] text-sm">Select →</span>
                  </button>
                ))}
              </div>

              <div className="bg-[#faf9f6] p-3 rounded-lg mb-4">
                <p className="text-[#6b6b6b] text-sm">Send to:</p>
                <p className="text-[#d4a373] font-medium">jennifershontelle@hotmail.com</p>
              </div>

              <button
                onClick={() => {
                  window.open("https://paypal.me/jennyblog", "_blank");
                  closeModal();
                }}
                className="w-full bg-[#2c2c2c] text-white py-3 rounded-lg hover:bg-[#d4a373] transition flex items-center justify-center gap-2"
              >
                <FaPaypal /> Donate with PayPal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── MODAL FOR BANK TRANSFER ── */}
      {activeModal === "bank" && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          style={{ animation: 'fadeIn 0.3s ease-out forwards' }}
          onClick={handleOutsideClick}
        >
          <div ref={modalRef} className="relative bg-[#f9f6f1] max-w-md w-full rounded-lg shadow-2xl">
            <button onClick={closeModal} className="absolute top-4 right-4 text-[#6b6b6b] hover:text-[#d4a373] transition">
              <FaTimes className="text-xl" />
            </button>
            
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#d4a373]/10 flex items-center justify-center mx-auto mb-4">
                  <FaUniversity className="text-[#d4a373] text-2xl" />
                </div>
                <h3 className={`${playfair.className} text-2xl font-bold text-[#2c2c2c] mb-2`}>
                  Bank Transfer Details
                </h3>
                <p className="text-[#6b6b6b] text-sm">Send your support directly to my bank account</p>
              </div>

              <div className="space-y-4">
                <div className="bg-[#faf9f6] p-4 rounded-lg border border-[#e8e2d9]">
                  <p className="text-[#6b6b6b] text-xs uppercase tracking-wide mb-1">Account Name</p>
                  <p className="text-[#2c2c2c] font-medium">Jennifer Gbugho</p>
                </div>

                <div className="bg-[#faf9f6] p-4 rounded-lg border border-[#e8e2d9]">
                  <p className="text-[#6b6b6b] text-xs uppercase tracking-wide mb-1">Bank Name</p>
                  <p className="text-[#2c2c2c] font-medium">First Bank of Nigeria</p>
                </div>

                <div className="bg-[#faf9f6] p-4 rounded-lg border border-[#e8e2d9] relative">
                  <p className="text-[#6b6b6b] text-xs uppercase tracking-wide mb-1">Account Number</p>
                  <div className="flex items-center justify-between">
                    <p className="text-[#2c2c2c] font-medium text-lg tracking-wider">1234567890</p>
                    <button 
                      onClick={() => copyToClipboard("1234567890")}
                      className="text-[#d4a373] hover:text-[#b5835a] transition"
                    >
                      {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
                    </button>
                  </div>
                </div>

                <div className="bg-[#faf9f6] p-4 rounded-lg border border-[#e8e2d9]">
                  <p className="text-[#6b6b6b] text-xs uppercase tracking-wide mb-1">Swift Code (International)</p>
                  <p className="text-[#2c2c2c] font-medium">FBNINGLA</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#d4a373]/5 rounded-lg border border-[#d4a373]/20">
                <p className="text-[#6b6b6b] text-xs text-center">
                  After sending, please email me at jennifershontelle@hotmail.com to confirm your donation. Thank you! ❤️
                </p>
              </div>

              <button 
                onClick={closeModal}
                className="mt-6 w-full bg-[#d4a373] text-white py-3 rounded-lg hover:bg-[#b5835a] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── HERO SECTION WITH FEMININE IMAGE ── */}
      <section className="relative h-[550px] flex items-center justify-center overflow-hidden">
       
        <img 
   src="https://images.pexels.com/photos/4386413/pexels-photo-4386413.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"

          alt="Elegant woman supporting blog"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45"></div>
        
        <div className="relative z-10 text-center px-4">
          <FaHeart className="text-[#d4a373] text-4xl mx-auto mb-4" />
          <p className="text-[#d4a373] text-xs uppercase tracking-[0.4em] mb-6">Show Some Love</p>
          <h1 className={`${playfair.className} text-5xl md:text-7xl font-bold text-[#f5e6d3] italic mb-6`}>
            Support My Blog
          </h1>
          <div className="w-16 h-px bg-[#d4a373] mx-auto" />
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <FaHeart className="text-[#d4a373] text-3xl mx-auto mb-6" />
        <p className="text-[#4a4a4a] font-light leading-relaxed text-lg">
          Your support means the world to me. Every contribution helps keep this blog 
          alive and thriving. Thank you for being here. ❤️
        </p>
      </section>

      {/* ── SUPPORT OPTIONS ── */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Option 1: Buy Me a Coffee */}
          <div className="bg-white p-8 border border-[#e8e2d9] shadow-sm hover:shadow-xl transition-all duration-300 text-center rounded-lg group">
            <div className="w-16 h-16 rounded-full bg-[#d4a373]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
              <FaCoffee className="text-[#d4a373] text-2xl" />
            </div>
            <h3 className={`${playfair.className} text-xl font-bold text-[#2c2c2c] mb-3`}>
              Buy Me a Coffee
            </h3>
            <p className="text-[#6b6b6b] text-sm mb-6">
              Support via PayPal - quick & easy
            </p>
            <button 
              onClick={() => openModal("coffee")}
              className="w-full bg-[#d4a373] text-white py-2 px-4 text-sm uppercase tracking-[0.2em] hover:bg-[#b5835a] transition"
            >
              Support Now ☕
            </button>
          </div>

          {/* Option 2: PayPal Donation */}
          <div className="bg-white p-8 border border-[#e8e2d9] shadow-sm hover:shadow-xl transition-all duration-300 text-center rounded-lg group">
            <div className="w-16 h-16 rounded-full bg-[#d4a373]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
              <FaPaypal className="text-[#d4a373] text-2xl" />
            </div>
            <h3 className={`${playfair.className} text-xl font-bold text-[#2c2c2c] mb-3`}>
              PayPal Donation
            </h3>
            <p className="text-[#6b6b6b] text-sm mb-6">
              Send money securely via PayPal
            </p>
            <button 
              onClick={() => openModal("paypal")}
              className="w-full bg-[#2c2c2c] text-white py-2 px-4 text-sm uppercase tracking-[0.2em] hover:bg-[#d4a373] transition"
            >
              Donate via PayPal
            </button>
          </div>

          {/* Option 3: Bank Transfer */}
          <div className="bg-white p-8 border border-[#e8e2d9] shadow-sm hover:shadow-xl transition-all duration-300 text-center rounded-lg group">
            <div className="w-16 h-16 rounded-full bg-[#d4a373]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
              <FaUniversity className="text-[#d4a373] text-2xl" />
            </div>
            <h3 className={`${playfair.className} text-xl font-bold text-[#2c2c2c] mb-3`}>
              Bank Transfer
            </h3>
            <p className="text-[#6b6b6b] text-sm mb-6">
              Direct transfer to my account
            </p>
            <button 
              onClick={() => openModal("bank")}
              className="w-full border-2 border-[#d4a373] text-[#d4a373] py-2 px-4 text-sm uppercase tracking-[0.2em] hover:bg-[#d4a373] hover:text-white transition"
            >
              View Details
            </button>
          </div>

        </div>
      </section>

      {/* ── BACK TO BLOG ── */}
      <section className="py-16 px-6 text-center border-t border-[#e8e2d9]">
        <Link
          href="/"
          className="inline-block border-2 border-[#d4a373] text-[#d4a373] px-8 py-3 text-sm uppercase tracking-[0.2em] hover:bg-[#d4a373] hover:text-white transition-colors duration-300"
        >
          Back to Blog →
        </Link>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

    </div>
  );
}