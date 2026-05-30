import { useEffect, useRef } from 'react';
import { MessageCircle, Instagram, ChevronDown } from 'lucide-react';
import { CATEGORY_CONFIG, DEFAULT_MENU_ITEMS } from '../data/menuData';
import type { MenuItem } from '../types/menu';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/971502626112', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/olecafe.ae', '_blank');
  };

  const handleTikTok = () => {
    window.open('https://www.tiktok.com/@olecafe.ae', '_blank');
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center px-5 pb-24 pt-16 overflow-hidden bg-cream"
    >
      {/* Decorative floating circles */}
      <div className="absolute top-20 left-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-champagne/10 blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-32 right-10 w-48 h-48 md:w-64 md:h-64 rounded-full bg-burgundy/5 blur-3xl animate-float pointer-events-none" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto">
        {/* Logo Badge */}
        <div
          className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out mb-6"
          style={{ transitionDelay: '0.1s' }}
        >
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-burgundy flex items-center justify-center shadow-lg animate-pulse-logo overflow-hidden">
            <img
              src="/images/olecafe.jpeg"
              alt="Ole Cafe logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Brand Name */}
        <h1
          className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out font-brand text-burgundy text-4xl md:text-5xl font-bold italic mb-3"
          style={{ transitionDelay: '0.25s' }}
        />

        {/* Good words under the logo */}
        <p
          className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out text-text-secondary text-base md:text-lg mb-8"
          style={{ transitionDelay: '0.4s' }}
        >
          Freshly brewed. Crafted with care. Served with love.
        </p>

        {/* Instagram QR Code */}
        <div
          className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out bg-white rounded-2xl border border-custom p-3 mb-6 card-shadow"
          style={{ transitionDelay: '0.5s' }}
        >
          <div className="w-24 h-24 bg-cream rounded-xl flex items-center justify-center mb-2">
            <div className="text-center">
              <Instagram className="w-10 h-10 text-burgundy mx-auto mb-1" />
              <span className="text-[10px] text-text-secondary block">@olecafe.ae</span>
            </div>
          </div>
          <p className="text-xs text-text-secondary">Scan for Instagram</p>
        </div>

        {/* Featured menu images (name under each image) */}
        <div className="w-full max-w-xl mb-10">
          <h2 className="text-burgundy text-center font-semibold mb-4">
            Try our favorites
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {CATEGORY_CONFIG.slice(0, 6).map((cat) => {
              // Pick the first item of each category from DEFAULT_MENU_ITEMS.
              const first = DEFAULT_MENU_ITEMS.find((i) => i.category === cat.id && i.imageUrl) as MenuItem | undefined;
              if (!first || !first.imageUrl) return null;
              return (
                <div
                  key={cat.id}
                  className="bg-white/70 backdrop-blur rounded-xl border border-custom p-3"
                >
                  <img
                    src={first.imageUrl}
                    alt={first.name}
                    className="w-full h-20 rounded-lg object-cover border border-custom/50 mb-2"
                  />
                  <div className="text-text-primary text-xs font-semibold text-center">
                    {first.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Social Icons */}
        <div
          className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 ease-out flex gap-4 mb-10"
          style={{ transitionDelay: '0.6s' }}
        >
          <button
            onClick={handleWhatsApp}
            className="w-12 h-12 rounded-full bg-burgundy flex items-center justify-center text-white transition-all duration-300 hover:bg-champagne hover:scale-110 active:scale-95"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </button>
          <button
            onClick={handleInstagram}
            className="w-12 h-12 rounded-full bg-burgundy flex items-center justify-center text-white transition-all duration-300 hover:bg-champagne hover:scale-110 active:scale-95"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </button>
          <button
            onClick={handleTikTok}
            className="w-12 h-12 rounded-full bg-burgundy flex items-center justify-center text-white transition-all duration-300 hover:bg-champagne hover:scale-110 active:scale-95"
            aria-label="TikTok"
          >
            <span className="text-[10px] font-semibold">TikTok</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div
          className="animate-on-scroll opacity-0 transition-all duration-700 ease-out"
          style={{ transitionDelay: '0.8s' }}
        >
          <a href="#menu" className="flex flex-col items-center text-text-secondary/60 hover:text-burgundy transition-colors">
            <span className="text-xs mb-2 tracking-wide">Explore Menu</span>
            <ChevronDown className="w-5 h-5 animate-bounce-gentle" />
          </a>
        </div>
      </div>

      <style>{`
        .animate-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
