import { useState, useEffect, useRef, useMemo } from 'react';
import { Coffee, Leaf, CupSoda, Cake, Milk, Sparkles, Plus } from 'lucide-react';
import type { MenuItem, Category } from '../types/menu';
import { CATEGORY_CONFIG } from '../data/menuData';

interface MenuSectionProps {
  items: MenuItem[];
}

const CATEGORY_ICONS: Record<Category, React.ReactNode> = {
  'hot-drinks': <Coffee className="w-4 h-4" />,
  'acai': <Leaf className="w-4 h-4" />,
  'iced-coffee': <CupSoda className="w-4 h-4" />,
  'snacks-cakes': <Cake className="w-4 h-4" />,
  'mojito': <Sparkles className="w-4 h-4" />,
  'milkshake': <Milk className="w-4 h-4" />,
  'matcha': <Leaf className="w-4 h-4" />,
  'tea': <CupSoda className="w-4 h-4" />,
  'non-coffee': <Coffee className="w-4 h-4" />,
  'extra': <Plus className="w-4 h-4" />,
};

export default function MenuSection({ items }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Debug: ensure we actually have menu items and matching categories
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('[MenuSection] items.length=', items.length, 'first=', items[0]);
  }, [items]);

  const normalizedItems = useMemo(() => {
    return items.map((item) => ({
      ...item,
      category: item.category.trim() as Category,
    }));
  }, [items]);

  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return normalizedItems;
    return normalizedItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, normalizedItems]);

  const handleCategoryChange = (category: Category | 'all') => {
    setActiveCategory(category);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalImage(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="relative py-16 md:py-20 bg-cream scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto px-5">
        {/* Section Header */}
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="font-brand text-burgundy text-3xl md:text-4xl font-semibold mb-3">
            Our Menu
          </h2>
          <p className="text-text-secondary text-sm md:text-base mb-4">
            Crafted with passion, served with love
          </p>
          <div className="w-10 h-0.5 bg-champagne mx-auto rounded-full" />
        </div>

        {/* Category Tabs */}
        <div
          ref={tabsRef}
        className={`flex gap-2 mb-8 overflow-x-auto hide-scrollbar pb-2 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
        }`}
        >
          <button
            onClick={() => handleCategoryChange('all')}
            className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
              activeCategory === 'all'
                ? 'bg-burgundy text-white border-burgundy'
                : 'bg-white text-burgundy border-custom hover:bg-burgundy-light/10'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            All
          </button>
          {CATEGORY_CONFIG.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-burgundy text-white border-burgundy'
                  : 'bg-white text-burgundy border-custom hover:bg-burgundy-light/10'
              }`}
            >
              {CATEGORY_ICONS[cat.id]}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item, index) => (
            <MenuCard
              key={item.id}
              item={item}
              index={index}
              isVisible={isVisible}
              onOpenImage={(src: string) => setModalImage(src)}
            />
          ))}
        </div>
        {/* Image Modal */}
        {modalImage && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setModalImage(null)}
          >
            <div className="max-w-[95vw] max-h-[95vh]" onClick={(e) => e.stopPropagation()}>
              <img src={modalImage} alt="Full item" className="w-full h-full object-contain rounded" />
            </div>
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <Coffee className="w-12 h-12 text-text-secondary/30 mx-auto mb-3" />
            <p className="text-text-secondary">No items in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function MenuCard({
  item,
  index,
  isVisible,
  onOpenImage,
}: {
  item: MenuItem;
  index: number;
  isVisible: boolean;
  onOpenImage?: (src: string) => void;
}) {
  const categoryLabel = CATEGORY_CONFIG.find((c) => c.id === item.category)?.label || item.category;

  return (
    <div
      className={`bg-white rounded-2xl border border-custom p-5 card-shadow transition-all duration-500 hover:card-shadow-hover hover:-translate-y-1 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{
        transitionDelay: `${300 + Math.min(index * 50, 500)}ms`,
      }}
    >
      {/* Category Badge */}
      <span className="inline-block bg-champagne-light text-burgundy-dark text-[11px] font-semibold px-2.5 py-1 rounded-full mb-3 uppercase tracking-wide">
        {categoryLabel}
      </span>

      {/* Item Image */}
      {item.imageUrl ? (
        <button
          type="button"
          onClick={() => onOpenImage && onOpenImage(item.imageUrl!)}
          className="w-full p-0 mb-3 rounded-xl overflow-hidden"
          aria-label={`View ${item.name} image`}
        >
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-36 rounded-xl object-contain border border-custom bg-cream/50"
          />
        </button>
      ) : (
        <div className="w-full h-36 rounded-xl border border-dashed border-custom bg-cream/30 mb-3" />
      )}

      {/* Item Name */}
      <h3 className="text-text-primary font-semibold text-base mb-1.5 group-hover:text-burgundy transition-colors">
        {item.name}
      </h3>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
        {item.description}
      </p>

      {/* Price */}
      <div className="flex items-center justify-between pt-3 border-t border-custom/60">
        <span className="text-burgundy font-bold text-sm">
          {item.category === 'extra' ? `+AED ${item.price}` : `AED ${item.price}`}
        </span>
      </div>
    </div>
  );
}
