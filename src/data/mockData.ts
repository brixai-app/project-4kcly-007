export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  category?: string;
  rating?: number;
  categorySlug?: string;
  categoryLabel?: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface HomeCategory {
  id: string;
  label: string;
  description: string;
  href: string;
  imageUrl: string;
}

export interface SimpleFeature {
  id: string;
  title: string;
  description: string;
}

export interface CartItemData {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sets?: number;
  reps?: number;
}

export const navLinks: { core: NavLinkItem[]; tools: NavLinkItem[] } = {
  core: [
    { label: 'Shop', href: '/shop' },
    { label: 'Programs', href: '/shop/programs' },
    { label: 'Analytics', href: '/shop/analytics' },
  ],
  tools: [
    { label: 'Progress', href: '/shop/progress' },
    { label: 'Blocks', href: '/shop/blocks' },
    { label: 'Nutrition', href: '/shop/nutrition' },
  ],
};

export const homeCategories: HomeCategory[] = [
  {
    id: 'cat-strength',
    label: 'Strength cycles',
    description: '4–12 week focus blocks',
    href: '/shop/strength',
    imageUrl:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cat-hypertrophy',
    label: 'Hypertrophy packs',
    description: 'High volume templates',
    href: '/shop/hypertrophy',
    imageUrl:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cat-conditioning',
    label: 'Conditioning labs',
    description: 'Engine-building sessions',
    href: '/shop/conditioning',
    imageUrl:
      'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=800&q=80',
  },
];

export const justInProducts: Product[] = [
  {
    id: 'jp-1',
    name: 'IronPulse Heavy Triples',
    description: 'A 6-week strength cycle tuned for heavy triples on the big three.',
    price: 39,
    imageUrl:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80',
    category: 'Strength',
  },
  {
    id: 'jp-2',
    name: 'Volume Engine Builder',
    description: 'High-volume, low-RPE plan for adding muscle without frying your CNS.',
    price: 34,
    imageUrl:
      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=800&q=80',
    category: 'Hypertrophy',
  },
  {
    id: 'jp-3',
    name: 'Conditioning Lab 1.0',
    description: 'Interval templates that plug straight into your IronPulse dashboard.',
    price: 29,
    imageUrl:
      'https://images.unsplash.com/photo-1554344058-8d1d1dbc5960?auto=format&fit=crop&w=800&q=80',
    category: 'Conditioning',
  },
];

export const bestsellerProducts: (Product & { tagline: string })[] = [
  {
    id: 'bs-1',
    name: 'Powerbuilding Fusion',
    description: 'Blend of strength and hypertrophy with built-in progression tracking.',
    price: 59,
    imageUrl:
      'https://images.unsplash.com/photo-1554344058-8d1d1dbc5960?auto=format&fit=crop&w=800&q=80',
    category: 'Hybrid',
    tagline: 'For lifters who want size and strength together.',
  },
  {
    id: 'bs-2',
    name: 'MacroFlow Nutrition Log',
    description: 'Macro-and calorie-tracking companion that syncs with training days.',
    price: 24,
    imageUrl:
      'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80',
    category: 'Nutrition',
    tagline: 'Dial in intake around heavy sessions.',
  },
  {
    id: 'bs-3',
    name: 'IronPulse Starter Stack',
    description: 'Beginner-friendly program templates for all main lifts.',
    price: 45,
    imageUrl:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    category: 'Beginner',
    tagline: 'Start tracking from day one.',
  },
];

export const valueProps: SimpleFeature[] = [
  {
    id: 'vp-1',
    title: 'Session-level precision',
    description: 'Log sets, reps, tempo, and RPE with zero clutter so every top set is captured.',
  },
  {
    id: 'vp-2',
    title: 'Strength analytics',
    description: 'Spot long-term trends in volume, intensity, and main-lift performance.',
  },
  {
    id: 'vp-3',
    title: 'Progress that sticks',
    description: 'Structure blocks with deloads and reloads so PRs keep coming, not stalling.',
  },
];

export const shopCategories: { slug: string; label: string }[] = [
  { slug: 'strength', label: 'Strength' },
  { slug: 'hypertrophy', label: 'Hypertrophy' },
  { slug: 'conditioning', label: 'Conditioning' },
  { slug: 'nutrition', label: 'Nutrition' },
];

export const shopProducts: Product[] = [
  {
    id: 'sp-1',
    name: 'Heavy Triples Cycle',
    description: '6-week strength block with integrated top-set logging and back-off tracking.',
    price: 39,
    imageUrl:
      'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=800&q=80',
    category: 'Strength',
    categorySlug: 'strength',
    categoryLabel: 'Strength cycles',
  },
  {
    id: 'sp-2',
    name: 'Volume Engine Builder',
    description: 'High volume push / pull / legs layout tuned for hypertrophy phases.',
    price: 34,
    imageUrl:
      'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?auto=format&fit=crop&w=800&q=80',
    category: 'Hypertrophy',
    categorySlug: 'hypertrophy',
    categoryLabel: 'Hypertrophy packs',
  },
  {
    id: 'sp-3',
    name: 'Conditioning Lab 1.0',
    description: 'Sustainable interval sessions that plug into your lifting days.',
    price: 29,
    imageUrl:
      'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=800&q=80',
    category: 'Conditioning',
    categorySlug: 'conditioning',
    categoryLabel: 'Conditioning labs',
  },
  {
    id: 'sp-4',
    name: 'MacroFlow Nutrition Log',
    description: 'Seamless nutrition logging mapped onto IronPulse training blocks.',
    price: 24,
    imageUrl:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    category: 'Nutrition',
    categorySlug: 'nutrition',
    categoryLabel: 'Nutrition tools',
  },
  {
    id: 'sp-5',
    name: 'Beginner Foundation',
    description: 'Simple 3-day routine that builds technique and consistency.',
    price: 29,
    imageUrl:
      'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?auto=format&fit=crop&w=800&q=80',
    category: 'Strength',
    categorySlug: 'strength',
    categoryLabel: 'Strength cycles',
  },
  {
    id: 'sp-6',
    name: 'Upper / Lower Strength Split',
    description: '4-day upper/lower split that balances heavy work and accessories.',
    price: 44,
    imageUrl:
      'https://images.unsplash.com/photo-1519627470227-1d21a668771e?auto=format&fit=crop&w=800&q=80',
    category: 'Strength',
    categorySlug: 'strength',
    categoryLabel: 'Strength cycles',
  },
];

export const cartItems: CartItemData[] = [
  {
    id: 'cart-1',
    name: 'Heavy Triples Cycle',
    price: 39,
    imageUrl:
      'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=800&q=80',
    sets: 5,
    reps: 3,
  },
  {
    id: 'cart-2',
    name: 'MacroFlow Nutrition Log',
    price: 24,
    imageUrl:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    sets: 0,
    reps: 0,
  },
];

export const products: Product[] = shopProducts;
export const categories: string[] = ['All', ...shopCategories.map((c) => c.label)];

export const mockData = {
  products,
  categories,
  items: products,
  navLinks,
  homeCategories,
  justInProducts,
  bestsellerProducts,
  valueProps,
  shopCategories,
  shopProducts,
  cartItems,
};

export default mockData;

export const items = (mockData as any)?.items ?? (mockData as any)?.products ?? [];
