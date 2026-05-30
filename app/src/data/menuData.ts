import type { MenuItem, Category } from '../types/menu';

export const DEFAULT_MENU_ITEMS: MenuItem[] = [
  // Hot Drinks (with images from app/public/imgaes)
  { id: 'hd-1', name: 'Spanish Latte', description: 'Creamy espresso with condensed milk', price: 24, category: 'hot-drinks', imageUrl: '/images/hot-drinks/spanish-latte.jpg' },
  { id: 'hd-2', name: 'Pistachio Latte', description: 'Rich pistachio espresso latte', price: 29, category: 'hot-drinks', imageUrl: '/images/hot-drinks/pistachio.jpg' },
  { id: 'hd-3', name: 'Cappuccino', description: 'Classic cappuccino with velvety foam', price: 22, category: 'hot-drinks', imageUrl: '/images/hot-drinks/cappuccino.jpg' },
  { id: 'hd-4', name: 'Flat White', description: 'Velvety espresso with steamed milk', price: 22, category: 'hot-drinks', imageUrl: '/images/hot-drinks/flat-white.jpg' },
  { id: 'hd-5', name: 'Spanish Piccolo', description: 'Small strong espresso with a touch of milk', price: 23, category: 'hot-drinks', imageUrl: '/images/hot-drinks/spanish-latte.jpg' },
  { id: 'hd-6', name: 'Piccolo', description: 'Espresso with a splash of steamed milk', price: 21, category: 'hot-drinks', imageUrl: '/images/hot-drinks/piccolo.jpg' },
  { id: 'hd-7', name: 'Restroreto', description: 'Bold concentrated espresso shot', price: 19, category: 'hot-drinks', imageUrl: '/images/hot-drinks/espresso.jpg' },
  { id: 'hd-8', name: 'Espresso Double', description: 'Double shot of rich espresso', price: 15, category: 'hot-drinks', imageUrl: '/images/hot-drinks/espresso.jpg' },
  { id: 'hd-9', name: 'Lungo', description: 'Long pulled espresso for a smooth finish', price: 19, category: 'hot-drinks', imageUrl: '/images/hot-drinks/americano.jpg' },
  { id: 'hd-10', name: 'Caramel Mocha', description: 'Chocolate espresso with caramel drizzle', price: 24, category: 'hot-drinks', imageUrl: '/images/hot-drinks/caramel-mocha.jpg' },
  { id: 'hd-11', name: 'Coffee Late', description: 'Smooth espresso latte with steamed milk', price: 22, category: 'hot-drinks', imageUrl: '/images/hot-drinks/caffee-latte.jpg' },
  { id: 'hd-12', name: 'White Mocha', description: 'Creamy white chocolate espresso latte', price: 24, category: 'hot-drinks', imageUrl: '/images/hot-drinks/flat-white.jpg' },
  { id: 'hd-13', name: 'Americano', description: 'Espresso diluted with hot water', price: 16, category: 'hot-drinks', imageUrl: '/images/hot-drinks/americano.jpg' },
  { id: 'hd-14', name: 'Dark Mocha', description: 'Deep chocolate espresso with steamed milk', price: 24, category: 'hot-drinks', imageUrl: '/images/hot-drinks/caramel-mocha.jpg' },
  { id: 'hd-15', name: 'Cortado', description: 'Balanced espresso with warm milk', price: 21, category: 'hot-drinks', imageUrl: '/images/hot-drinks/cortado.jpg' },
  { id: 'hd-16', name: 'Turkish Coffee', description: 'Strong aromatic coffee with cardamom', price: 15, category: 'hot-drinks', imageUrl: '/images/hot-drinks/turkish.jpg' },
  { id: 'hd-17', name: 'Hot Chocolate', description: 'Creamy hot chocolate with whipped milk', price: 28, category: 'hot-drinks', imageUrl: '/images/hot-drinks/hot-chocolate.jpg' },
  { id: 'hd-18', name: 'V60 Colombia', description: 'Pour-over Colombian coffee', price: 25, category: 'hot-drinks', imageUrl: '/images/hot-drinks/v60-hot.jpg' },
  { id: 'hd-19', name: 'V60 Ethiopia', description: 'Pour-over Ethiopian coffee', price: 24, category: 'hot-drinks', imageUrl: '/images/hot-drinks/v60-hot.jpg' },


  // Acai (with images from app/public/imgaes)
  { id: 'ac-1', name: 'Acai Bowl', description: 'Fresh acai bowl with granola and berries', price: 35, category: 'acai', imageUrl: '/images/acai/acai-bowl.jpg' },
  { id: 'ac-2', name: 'Classic Acai Bowl', description: 'Classic acai bowl with banana, berries, and granola', price: 35, category: 'acai', imageUrl: '/images/acai/acai-bowl.jpg' },
  { id: 'ac-3', name: 'Smoothie Acai', description: 'Smoothie Acai with banana, berries, and granola blended with milk', price: 30, category: 'acai', imageUrl: '/images/acai/smoothie-acai.jpg' },
  { id: 'ac-4', name: 'Blueberry Smoothie', description: 'A refreshing purple smoothie made from blended blueberries, milk, yogurt, and ice.', price: 30, category: 'acai', imageUrl: '/images/acai/blue-berry-smoothis.jpg' },
  { id: 'ac-5', name: 'strawberry Smoothie', description: 'A refreshing red smoothie made from blended strawberries, milk, yogurt, and ice.', price: 30, category: 'acai', imageUrl: '/images/acai/strawberry-smoothis.jpg' },



  // Iced Coffee (updated/added from your list using rule: “cold” items -> iced-coffee)
  { id: 'ic-1', name: 'Iced Spanish Latte', description: 'Cold espresso with condensed milk', price: 25, category: 'iced-coffee', imageUrl: '/images/iced-coffee/spanish-latte.jpg' },
  { id: 'ic-2', name: 'Dark Mocha', description: 'Cold dark chocolate espresso', price: 23, category: 'iced-coffee', imageUrl: '/images/iced-coffee/caramel-mocha.jpg' },
  { id: 'ic-3', name: 'Coffee Latte Cold', description: 'Cold latte with espresso', price: 22, category: 'iced-coffee', imageUrl: '/images/iced-coffee/coffee-latte.jpg' },
  { id: 'ic-4', name: 'Iced Americano', description: 'Double shot espresso over ice', price: 17, category: 'iced-coffee', imageUrl: '/images/iced-coffee/americano.jpg' },
  { id: 'ic-5', name: 'Caramel Mocha Cold', description: 'Cold caramel mocha espresso', price: 24, category: 'iced-coffee', imageUrl: '/images/iced-coffee/caramel-mocha.jpg' },
  { id: 'ic-6', name: 'Pistachio Latte Cold', description: 'Cold pistachio espresso latte', price: 29, category: 'iced-coffee', imageUrl: '/images/iced-coffee/pistachio-latte.jpg' },
  { id: 'ic-7', name: 'White Mocha Cold', description: 'Cold white chocolate mocha', price: 23, category: 'iced-coffee', imageUrl: '/images/iced-coffee/white-mocha.jpg' },
  { id: 'ic-8', name: 'V60 Cold Colombia & Chmix', description: 'Cold pour-over Colombia with mix', price: 25, category: 'iced-coffee', imageUrl: '/images/iced-coffee/v60-cold.jpg' },
  { id: 'ic-9', name: 'V60 Cold Ethiopia & Chmix', description: 'Cold pour-over Ethiopia with mix', price: 24, category: 'iced-coffee', imageUrl: '/images/iced-coffee/v60-cold.jpg' },



  // Snacks & Cakes (updated)
  { id: 'sc-1', name: 'Molten Cake', description: 'Special molten cake', price: 28, category: 'snacks-cakes', imageUrl: '/images/snacks-and-cakes/molten-cake.jpg' },
  { id: 'sc-2', name: 'Special Brownie Cake', description: 'Special brownie cake', price: 28, category: 'snacks-cakes', imageUrl: '/images/snacks-and-cakes/special-brownie-cake.jpg' },
  { id: 'sc-3', name: 'Aseeda Cake', description: 'Aseeda cake', price: 33, category: 'snacks-cakes', imageUrl: '/images/snacks-and-cakes/aseeda-cake.jpg' },
  { id: 'sc-4', name: 'Basbosa Cheese Cake', description: 'Basbosa cheese cake', price: 28, category: 'snacks-cakes', imageUrl: '/images/snacks-and-cakes/basbosa-cheese-cake.jpg' },
  { id: 'sc-5', name: 'London Cheese Cake', description: 'London cheese cake', price: 27, category: 'snacks-cakes', imageUrl: '/images/snacks-and-cakes/london-cheese-cake.jpg' },
  { id: 'sc-6', name: 'San Sabustian Kinder Souce', description: 'San Sabustian kinder sauce', price: 28, category: 'snacks-cakes', imageUrl: '/images/snacks-and-cakes/san-sabustian-kinder-souce.jpg' },
  { id: 'sc-7', name: 'Banana Pudding', description: 'Banana pudding', price: 29, category: 'snacks-cakes', imageUrl: '/images/snacks-and-cakes/banana-pudding.jpg' },
  { id: 'sc-8', name: 'Cookies', description: 'Cookies', price: 13, category: 'snacks-cakes', imageUrl: '/images/snacks-and-cakes/cookies.jpg' },
  { id: 'sc-9', name: 'Cheese Croissant', description: 'Cheese croissant', price: 15, category: 'snacks-cakes', imageUrl: '/images/snacks-and-cakes/cheese-croissant.jpg' },
  { id: 'sc-10', name: 'Zaatar Croissant', description: 'Zaatar croissant', price: 15, category: 'snacks-cakes', imageUrl: '/images/snacks-and-cakes/zaatar-croissant.jpg' },
  { id: 'sc-11', name: 'Olain Croissant', description: 'Olain croissant', price: 13, category: 'snacks-cakes', imageUrl: '/images/snacks-and-cakes/olain-croissant.jpg' },
  { id: 'sc-12', name: 'Halloumi Sour Dough', description: 'Halloumi sour dough', price: 23, category: 'snacks-cakes', imageUrl: '/images/snacks-and-cakes/halloumi-sour-dough.jpg' },
  { id: 'sc-13', name: 'Chicken Spinach Wrap', description: 'Chicken spinach wrap', price: 26, category: 'snacks-cakes', imageUrl: '/images/snacks-and-cakes/chicken-spinach-wrap.jpg' },

  // Mojito (updated)
  { id: 'mj-1', name: 'Passion Fruit Mojito', description: 'Mojito', price: 22, category: 'mojito', imageUrl: '/images/mojito-and-milshake/passiosn-mojito.jpg' },
  { id: 'mj-2', name: 'Blue Berry Mojito', description: 'Mojito', price: 20, category: 'mojito', imageUrl: '/images/mojito-and-milshake/blule-berry.jpg' },
  { id: 'mj-3', name: 'Peach Mojito', description: 'Mojito', price: 20, category: 'mojito', imageUrl: '/images/mojito-and-milshake/peach-mojito.jpg' },
  { id: 'mj-4', name: 'Strawberry Mojito', description: 'Mojito', price: 20, category: 'mojito', imageUrl: '/images/mojito-and-milshake/strawberry-mojito.jpg' },

  // Milkshake (updated)
  { id: 'ms-1', name: 'Kinder Milkshake', description: 'Kinder milkshake', price: 27, category: 'milkshake', imageUrl: '/images/mojito-and-milshake/kinder.jpg' },
  { id: 'ms-2', name: 'Pistachio Milksake', description: 'Pistachio milkshake', price: 29, category: 'milkshake', imageUrl: '/images/mojito-and-milshake/pistachio.jpg' },
  { id: 'ms-3', name: 'Lotus Milksake', description: 'Lotus milkshake', price: 27, category: 'milkshake', imageUrl: '/images/mojito-and-milshake/lotus.jpg' },
  { id: 'ms-4', name: 'Oreo Milkshake', description: 'Oreo milkshake', price: 27, category: 'milkshake', imageUrl: '/images/mojito-and-milshake/oreo.jpg' },

  // Non-Coffee
  { id: 'nc-1', name: 'Orange Juice', description: 'Orange juice', price: 20, category: 'non-coffee', imageUrl: '/images/mojito-and-milshake/orange-juice.jpg' },

  // Matcha (updated)
  { id: 'ma-1', name: 'Matcha Spanish Matcha', description: 'Spanish matcha', price: 24, category: 'matcha', imageUrl: '/images/matcha/spanish-matcha.jpg' },
  { id: 'ma-2', name: 'Signature Cloudy Matcha', description: 'Cloudy matcha', price: 29, category: 'matcha', imageUrl: '/images/matcha/signatuer.jpg' },
  { id: 'ma-3', name: 'Coconut Cloudy Matcha', description: 'Cloudy matcha', price: 27, category: 'matcha', imageUrl: '/images/matcha/cocnut-cloudy.jpg' },
  { id: 'ma-4', name: 'Strawberry Cloudy Matcha', description: 'Cloudy matcha', price: 26, category: 'matcha', imageUrl: '/images/matcha/strawberry.jpg' },
  { id: 'ma-5', name: 'Peach Cloudy Matcha', description: 'Cloudy matcha', price: 26, category: 'matcha', imageUrl: '/images/matcha/peach-cloudy.jpg' },

  // Tea (replace with iced tea items)
  { id: 'te-1', name: 'Matcha Tea', description: 'Matcha tea', price: 22, category: 'tea', imageUrl: '/images/tea-and-non-coffee/signatura-tea.jpg' },
  { id: 'te-2', name: 'Iced Tea Signature Ice Tea', description: 'Signature iced tea', price: 29, category: 'tea', imageUrl: '/images/tea-and-non-coffee/passion-tea.jpg' },
  { id: 'te-3', name: 'Iced Tea Strawberry', description: 'Strawberry iced tea', price: 22, category: 'tea', imageUrl: '/images/tea-and-non-coffee/peach-tea.jpg' },
  { id: 'te-4', name: 'Peach Iced Tea', description: 'Peach iced tea', price: 22, category: 'tea', imageUrl: '/images/tea-and-non-coffee/peach-tea.jpg' },
  { id: 'te-5', name: 'Passion Iced Tea', description: 'Passion iced tea', price: 22, category: 'tea', imageUrl: '/images/tea-and-non-coffee/passion-tea.jpg' },
  { id: 'te-6', name: 'Hibiscus', description: 'Hibiscus tea', price: 22, category: 'tea', imageUrl: '/images/tea-and-non-coffee/hibiscus.jpg' },

  // Extra (kept as-is)
  { id: 'ex-1', name: 'Oat Milk', description: 'Substitute with oat milk', price: 5, category: 'extra', imageUrl: '/images/iced-coffee/white-mocha.jpg' },
  { id: 'ex-2', name: 'Almond Milk', description: 'Substitute with almond milk', price: 5, category: 'extra', imageUrl: '/images/iced-coffee/coffee-latte.jpg' },
  { id: 'ex-3', name: 'Extra Shot', description: 'Additional espresso shot', price: 4, category: 'extra', imageUrl: '/images/hot-drinks/espresso.jpg' },
  { id: 'ex-4', name: 'Whipped Cream', description: 'Add whipped cream topping', price: 3, category: 'extra', imageUrl: '/images/hot-drinks/hot-chocolate.jpg' },
  { id: 'ex-5', name: 'Caramel Drizzle', description: 'Add caramel sauce drizzle', price: 3, category: 'extra', imageUrl: '/images/hot-drinks/caramel-mocha.jpg' },
  { id: 'ex-6', name: 'Chocolate Drizzle', description: 'Add chocolate sauce drizzle', price: 3, category: 'extra', imageUrl: '/images/hot-drinks/hot-chocolate.jpg' },
  { id: 'ex-7', name: 'Extra Flavor', description: 'Add any syrup flavor', price: 4, category: 'extra', imageUrl: '/images/mojito-and-milshake/oranje.jpg' },
  { id: 'ex-8', name: 'Honey', description: 'Add organic honey', price: 3, category: 'extra', imageUrl: '/images/mojito-and-milshake/oranje.jpg' },
];

export const CATEGORY_CONFIG: { id: Category; label: string }[] = [
  { id: 'hot-drinks', label: 'Hot Drinks' },
  { id: 'acai', label: 'Acai' },
  { id: 'iced-coffee', label: 'Iced Coffee' },
  { id: 'snacks-cakes', label: 'Snacks & Cakes' },
  { id: 'mojito', label: 'Mojito' },
  { id: 'milkshake', label: 'Milkshake' },
  { id: 'matcha', label: 'Matcha' },
  { id: 'tea', label: 'Tea' },
  { id: 'non-coffee', label: 'Non-Coffee' },
  { id: 'extra', label: 'Extra' },
];

const STORAGE_KEY = 'olecafe_menu_items';
const STORAGE_VERSION_KEY = 'olecafe_menu_version';
const MENU_VERSION = '2026-05-30-v5';

export function loadMenuItems(): MenuItem[] {
  try {
    const storedVersion = localStorage.getItem(STORAGE_VERSION_KEY);
    if (storedVersion !== MENU_VERSION) {
      saveMenuItems(DEFAULT_MENU_ITEMS);
      localStorage.setItem(STORAGE_VERSION_KEY, MENU_VERSION);
      return DEFAULT_MENU_ITEMS;
    }

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // ignore parse errors
  }
  // Initialize with defaults
  saveMenuItems(DEFAULT_MENU_ITEMS);
  localStorage.setItem(STORAGE_VERSION_KEY, MENU_VERSION);
  return DEFAULT_MENU_ITEMS;
}

export function saveMenuItems(items: MenuItem[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  localStorage.setItem(STORAGE_VERSION_KEY, MENU_VERSION);
}

export function addMenuItem(item: MenuItem): void {
  // Images are locked: never accept/overwrite imageUrl from admin.
  const items = loadMenuItems();
  items.push({
    ...item,
    imageUrl: undefined,
  });
  saveMenuItems(items);
}

export function deleteMenuItem(id: string): void {
  const items = loadMenuItems().filter(item => item.id !== id);
  saveMenuItems(items);
}

export function resetToDefaults(): void {
  saveMenuItems(DEFAULT_MENU_ITEMS);
}

