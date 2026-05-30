import { MessageCircle, Instagram } from 'lucide-react';

export default function Footer() {
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
    <footer className="bg-burgundy text-white pb-20 md:pb-0">
      {/* Top Area */}
      <div className="max-w-4xl mx-auto px-5 pt-10 pb-6 text-center">
        {/* Brand */}
        <div className="flex items-center justify-center gap-2 mb-1">
          <img
            src="/images/olecafe.jpeg"
            alt="Ole Cafe logo"
            className="w-8 h-8 rounded-full object-cover"
          />
          <h3 className="font-brand italic text-white text-2xl font-bold">Olé</h3>
        </div>
        <p className="text-champagne text-sm mb-5">Premium Coffee & More</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={handleWhatsApp}
            className="w-9 h-9 rounded-full bg-burgundy-light flex items-center justify-center text-white transition-all duration-300 hover:bg-champagne hover:text-burgundy-dark active:scale-95"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
          <button
            onClick={handleInstagram}
            className="w-9 h-9 rounded-full bg-burgundy-light flex items-center justify-center text-white transition-all duration-300 hover:bg-champagne hover:text-burgundy-dark active:scale-95"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </button>
          <button
            onClick={handleTikTok}
            className="w-9 h-9 rounded-full bg-burgundy-light flex items-center justify-center text-white transition-all duration-300 hover:bg-champagne hover:text-burgundy-dark active:scale-95"
            aria-label="TikTok"
          >
            <span className="text-[10px] font-semibold">TikTok</span>
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-5">
        <div className="h-px bg-white/10" />
      </div>

      {/* Bottom Area */}
      <div className="max-w-4xl mx-auto px-5 py-5 text-center">
        <p className="text-white/50 text-xs mb-1">
          © 2026 Olé Cafe. All rights reserved.
        </p>
        <p className="text-white/40 text-xs">
          ADNOC Service Station, Yas Acres North
        </p>
      </div>
    </footer>
  );
}
