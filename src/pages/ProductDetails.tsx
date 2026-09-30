import React, { useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Plus, Minus, Star, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { products } from '@/data/mockData';

export type ProductDetailsProps = {
  className?: string;
};

export function ProductDetails({ className = '' }: ProductDetailsProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeVariant, setActiveVariant] = useState<string>('Standard');
  const [quantity, setQuantity] = useState<number>(1);

  const product = useMemo(
    () => products?.find?.((p: any) => String(p?.id ?? '') === String(id ?? '')) ?? products?.[0],
    [id]
  );

  const similar = useMemo(
    () =>
      products
        ?.filter?.((p: any) => p?.id !== product?.id)
        ?.slice?.(0, 4) ?? [],
    [product?.id]
  );

  const handleAddToCart = () => {
    toast.success(`${product?.name ?? 'Item'} added to your bag`, {
      description: `Variant: ${activeVariant} • Qty: ${quantity}`,
    });
  };

  const clampQuantity = (next: number) => {
    if (Number.isNaN(next)) return;
    setQuantity(next < 1 ? 1 : next > 20 ? 20 : next);
  };

  if (!product) {
    return (
      <div
        className={cn('px-4 py-16 max-w-5xl mx-auto', className)}
        style={{ backgroundColor: '#09090b', color: '#f4f4f5' }}
      >
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <div className="mt-12 text-center">
          <p className="text-lg font-semibold">Product not found.</p>
          <Link
            to="/shop"
            className="mt-4 inline-flex px-4 py-2 text-sm font-medium rounded-md"
            style={{ backgroundColor: '#3b82f6', color: '#09090b' }}
          >
            Go to shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn('px-4 py-10 md:py-16 max-w-6xl mx-auto', className)}
      style={{ backgroundColor: '#09090b', color: '#f4f4f5' }}
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs md:text-sm text-zinc-300 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <nav className="hidden md:flex items-center text-xs text-zinc-400">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <Link to="/shop" className="hover:text-white">
            Shop
          </Link>
          <ChevronRight className="w-3 h-3 mx-1" />
          <span className="text-zinc-100 line-clamp-1">{product?.name ?? 'Product'}</span>
        </nav>
      </div>

      <motion.div
        className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="relative w-full rounded-xl overflow-hidden border"
          style={{ backgroundColor: '#18181b', borderColor: '#3b82f633' }}
        >
          <div className="aspect-[4/3] w-full">
            <img
              src={product?.imageUrl ?? 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'}
              alt={product?.name ?? 'Product image'}
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
            />
          </div>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-400 mb-2">
              {product?.category ?? 'Workout Utility'}
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {product?.name ?? 'Training Utility'}
            </h1>
            <p className="mt-2 text-sm text-zinc-400">
              {product?.description ??
                'Dial in your training data with precise logging, session summaries, and strength progression graphs built for serious lifters.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-yellow-400">
              <Star className="w-4 h-4 fill-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400" />
              <Star className="w-4 h-4 text-zinc-600" />
            </div>
            <p className="text-xs text-zinc-400">
              4.0 • Optimized for heavy training cycles
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs text-zinc-400 uppercase tracking-[0.18em]">
              Plan intensity
            </p>
            <div className="flex flex-wrap gap-2">
              {['Standard', 'Volume', 'Intensity'].map((variant) => (
                <button
                  key={variant}
                  type="button"
                  onClick={() => setActiveVariant(variant)}
                  className={cn(
                    'px-3 py-1.5 rounded-full text-xs font-medium border transition-colors',
                    activeVariant === variant
                      ? 'bg-blue-500 text-black border-blue-500'
                      : 'border-zinc-700 text-zinc-200 hover:border-zinc-500'
                  )}
                  style={
                    activeVariant === variant
                      ? { backgroundColor: '#3b82f6', color: '#09090b', borderColor: '#3b82f6' }
                      : undefined
                  }
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs text-zinc-400 uppercase tracking-[0.18em]">
                Session bundle
              </p>
              <p className="text-2xl font-semibold">
                ${Number(product?.price ?? 29).toFixed(2)}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-zinc-400 uppercase tracking-[0.18em]">
                Volume
              </p>
              <div
                className="inline-flex items-center rounded-full border px-2 py-1"
                style={{ borderColor: '#3b82f633' }}
              >
                <button
                  type="button"
                  onClick={() => clampQuantity(quantity - 1)}
                  className="p-1 rounded-full hover:bg-zinc-800"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  value={quantity}
                  onChange={(e) => clampQuantity(parseInt(e.target.value, 10))}
                  className="w-10 text-center bg-transparent text-sm outline-none"
                />
                <button
                  type="button"
                  onClick={() => clampQuantity(quantity + 1)}
                  className="p-1 rounded-full hover:bg-zinc-800"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold shadow-sm"
              style={{ backgroundColor: '#3b82f6', color: '#09090b' }}
            >
              <ShoppingCart className="w-4 h-4" />
              Add to bag
            </button>
            <p className="text-[11px] text-zinc-500">
              Sessions sync instantly in-browser with client-side persistence so you never lose your last heavy set.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-12 md:mt-16"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-semibold">Shop similar</h2>
          <Link
            to="/shop"
            className="text-xs text-blue-400 hover:text-blue-300"
          >
            View full catalog
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {similar?.map?.((item: any) => (
            <Link
              key={item?.id ?? ''}
              to={`/product/${item?.id ?? ''}`}
              className="group rounded-xl overflow-hidden border flex flex-col"
              style={{ backgroundColor: '#18181b', borderColor: '#3b82f633' }}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={
                    item?.imageUrl ??
                    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
                  }
                  alt={item?.name ?? 'Product'}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="px-3 py-3 flex-1 flex flex-col">
                <p className="text-xs text-zinc-400 mb-1">
                  {item?.category ?? 'Training Utility'}
                </p>
                <p className="text-sm font-medium line-clamp-1">
                  {item?.name ?? 'Workout Tool'}
                </p>
                <p className="mt-1 text-sm text-zinc-300">
                  ${Number(item?.price ?? 24).toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default ProductDetails;