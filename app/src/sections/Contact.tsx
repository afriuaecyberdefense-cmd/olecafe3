import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Phone, Instagram } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/971502626112', '_blank');
  };

  const handlePhone = () => {
    window.open('tel:+971502626112');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/olecafe.ae', '_blank');
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-16 md:py-20 bg-white scroll-mt-20"
    >
      <div className="max-w-2xl mx-auto px-5">
        {/* Section Header */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="font-brand text-burgundy text-3xl md:text-4xl font-semibold mb-3">
            Get In Touch
          </h2>
          <div className="w-10 h-0.5 bg-champagne mx-auto rounded-full" />
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {/* WhatsApp */}
          <button
            onClick={handleWhatsApp}
            className={`bg-white rounded-2xl border border-custom p-5 card-shadow text-center transition-all duration-500 hover:card-shadow-hover hover:-translate-y-1 hover:border-champagne/50 active:scale-[0.97] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-semibold text-text-primary text-sm mb-1">WhatsApp</h3>
            <p className="text-text-secondary text-xs">+971 50 262 6112</p>
          </button>

          {/* Phone */}
          <button
            onClick={handlePhone}
            className={`bg-white rounded-2xl border border-custom p-5 card-shadow text-center transition-all duration-500 hover:card-shadow-hover hover:-translate-y-1 hover:border-champagne/50 active:scale-[0.97] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '350ms' }}
          >
            <div className="w-11 h-11 rounded-full bg-burgundy/10 flex items-center justify-center mx-auto mb-3">
              <Phone className="w-5 h-5 text-burgundy" />
            </div>
            <h3 className="font-semibold text-text-primary text-sm mb-1">Call Us</h3>
            <p className="text-text-secondary text-xs">+971 50 262 6112</p>
          </button>

          {/* Instagram */}
          <button
            onClick={handleInstagram}
            className={`bg-white rounded-2xl border border-custom p-5 card-shadow text-center transition-all duration-500 hover:card-shadow-hover hover:-translate-y-1 hover:border-champagne/50 active:scale-[0.97] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mx-auto mb-3">
              <Instagram className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-text-primary text-sm mb-1">Instagram</h3>
            <p className="text-text-secondary text-xs">@olecafe.ae</p>
          </button>
        </div>

        {/* QR Code Section */}
        <div
          className={`text-center transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-medium text-text-primary text-base mb-4">Follow us on Instagram & TikTok</p>
          <div className="inline-block bg-white rounded-2xl border-2 border-custom p-4 card-shadow">
            <div className="w-32 h-32 bg-cream rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Instagram className="w-12 h-12 text-burgundy mx-auto mb-2" />
                <span className="text-xs text-text-secondary block font-medium">@olecafe.ae</span>
              </div>
            </div>
          </div>
          <p className="text-text-secondary text-xs mt-3">Scan to follow @olecafe.ae (Instagram) or follow us on TikTok: @olecafe.ae</p>
        </div>
      </div>
    </section>
  );
}
