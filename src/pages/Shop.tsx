import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { cn } from '@/lib/utils';
import { shopProducts, shopCategories } from '@/data/mockData';

export type ShopProps = {
  className?: string;
};

function CategoryBanner({ activeCategory = '' }: { activeCategory?: string }) {
  const title = activeCategory ? activeCategory : 'All Training Tools';
  const subtitle = activeCategory
    ? `Dialed-in gear tuned for ${activeCategory.toLowerCase()} days`
    : 'Dialed-in tools to track every lift, rep, and training block';
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full overflow-hidden rounded-xl mb-8"
      style={{ backgroundColor: '#18181b' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-2 relative h-48 md:h-56 lg:h-64">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
            alt="Clean Analytics Workstation"
            className="w-full h-full object-cover"
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
        <div className="p-6 flex flex-col justify-center space-y-3">
          <p className="text-xs uppercase tracking-wide text-blue-400">IronPulse Catalog</p>
          <h1 className="text-2xl md:text-3xl font-semibold">{title}</h1>
          <p className="text-sm text-zinc-400">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}

function FilterSidebar() {
  const filters = ['Category', 'Intensity', 'Focus', 'Duration', 'Source'];
  return (
    <aside
      className="hidden lg:block sticky top-28 p-4 rounded-xl space-y-4 text-sm"
      style={{ backgroundColor: '#18181b', borderColor: '#3b82f633', borderWidth: 1 }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Filter className="w-4 h-4 text-blue-400" />
        <h2 className="font-medium text-sm">Filter</h2>
      </div>
      {filters.map((f) => (
        <div key={f} className="space-y-1">
          <label className="text-xs uppercase tracking-wide text-zinc-400">{f}</label>
          <select
            className="w-full text-xs px-2 py-1.5 rounded-md bg-black/30 border border-zinc-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            defaultValue="Any"
          >
            <option>Any</option>
          </select>
        </div>
      ))}
    </aside>
  );
}

function CategoryPills({
  activeCategory = '',
  onSelect,
}: {
  activeCategory?: string;
  onSelect?: (value: string) => void;
}) {
  const navigate = useNavigate();
  const handleSelect = (slug: string) => {
    if (onSelect) onSelect(slug);
    navigate(slug ? `/shop/${slug}` : '/shop');
  };
  return (
    <div className="flex gap-2 flex-wrap mb-4">
      <button
        type="button"
        onClick={() => handleSelect('')}
        className={cn(
          'px-3 py-1.5 rounded-full text-xs border transition-colors',
          activeCategory === ''
            ? 'bg-blue-500 text-black border-blue-500'
            : 'border-zinc-700 hover:border-blue-500 hover:text-blue-400'
        )}
      >
        All
      </button>
      {shopCategories?.map((cat) => (
        <button
          key={cat?.slug ?? ''}
          type="button"
          onClick={() => handleSelect(cat?.slug ?? '')}
          className={cn(
            'px-3 py-1.5 rounded-full text-xs border transition-colors',
            activeCategory === cat?.slug
              ? 'bg-blue-500 text-black border-blue-500'
              : 'border-zinc-700 hover:border-blue-500 hover:text-blue-400'
          )}
        >
          {cat?.label ?? ''}
        </button>
      ))}
    </div>
  );
}

function ProductGrid({ activeCategory = '' }: { activeCategory?: string }) {
  const items =
    shopProducts?.filter((p) =>
      activeCategory ? (p?.categorySlug ?? '') === activeCategory : true
    ) ?? [];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-10">
      {items.slice(0, 8).map((p) => (
        <motion.div
          key={p?.id ?? ''}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-xl overflow-hidden flex flex-col"
          style={{ backgroundColor: '#18181b', borderColor: '#3b82f633', borderWidth: 1 }}
        >
          <div className="relative h-40">
            <img
              src={p?.imageUrl ?? ''}
              alt={p?.name ?? 'Product'}
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
            />
          </div>
          <div className="p-3 flex-1 flex flex-col justify-between">
            <div>
              <p className="text-xs text-blue-400 mb-1">{p?.categoryLabel ?? ''}</p>
              <h3 className="text-sm font-medium mb-1 line-clamp-1">{p?.name ?? ''}</h3>
              <p className="text-xs text-zinc-400 line-clamp-2">
                {p?.description ?? 'Track every set, rep, and progression.'}
              </p>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className="text-sm font-semibold">${p?.price?.toFixed(2) ?? '0.00'}</span>
              <button
                type="button"
                className="px-2.5 py-1 text-xs rounded-md font-medium"
                style={{ backgroundColor: '#3b82f6', color: '#09090b' }}
              >
                View
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function BestsellersStrip() {
  const items = shopProducts?.slice(0, 6) ?? [];
  return (
    <section className="mt-4">
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="text-sm font-semibold">Bestsellers for Strength Cycles</h2>
        <p className="text-xs text-zinc-500">Curated tools serious lifters rely on weekly</p>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {items.map((p) => (
          <motion.div
            key={p?.id ?? ''}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="min-w-[180px] max-w-[220px] rounded-lg overflow-hidden"
            style={{ backgroundColor: '#18181b', borderColor: '#3b82f633', borderWidth: 1 }}
          >
            <div className="h-28">
              <img
                src={p?.imageUrl ?? ''}
                alt={p?.name ?? 'Product'}
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
            </div>
            <div className="p-2">
              <p className="text-xs text-blue-400 mb-0.5">{p?.categoryLabel ?? ''}</p>
              <p className="text-xs font-medium line-clamp-1">{p?.name ?? ''}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Shop({ className = '' }: ShopProps) {
  const params = useParams();
  const activeCategory = params?.category ?? '';
  return (
    <main className={cn('px-4 md:px-8 lg:px-12 py-8', className)}>
      <CategoryBanner activeCategory={activeCategory} />
      <div className="grid grid-cols-[0fr,1fr] lg:grid-cols-[220px,minmax(0,1fr)] gap-6">
        <FilterSidebar />
        <section>
          <CategoryPills activeCategory={activeCategory} />
          <ProductGrid activeCategory={activeCategory} />
          <BestsellersStrip />
        </section>
      </div>
    </main>
  );
}

export default Shop;