import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { cartItems as mockCartItems } from '@/data/mockData';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sets?: number;
  reps?: number;
};

export type CartProps = {
  className?: string;
};

export function Cart({ className = '' }: CartProps) {
  const navigate = useNavigate();
  const [items, setItems] = useState<CartItem[]>(mockCartItems ?? []);
  const [giftWrap, setGiftWrap] = useState<boolean>(false);
  const [newsletter, setNewsletter] = useState<boolean>(true);
  const [quantities, setQuantities] = useState<Record<string, number>>(
    () =>
      (mockCartItems ?? []).reduce(
        (acc, item) => ({ ...acc, [item?.id ?? '']: 1 }),
        {}
      )
  );

  const subtotal = useMemo(
    () =>
      items?.reduce((sum, item) => {
        const qty = quantities?.[item?.id ?? ''] ?? 1;
        return sum + (item?.price ?? 0) * qty;
      }, 0) ?? 0,
    [items, quantities]
  );

  const total = useMemo(
    () => subtotal + (giftWrap ? 4.99 : 0),
    [subtotal, giftWrap]
  );

  const handleQtyChange = (id: string, delta: number) => {
    setQuantities(prev => {
      const current = prev?.[id] ?? 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const handleRemove = (id: string) => {
    setItems(prev => prev?.filter(item => item?.id !== id) ?? []);
    toast.success('Removed from bag');
  };

  const handleCheckout = () => {
    if (!items?.length) {
      toast.error('Your bag is empty');
      return;
    }
    toast.success('Redirecting to checkout...');
  };

  const handleBack = () => {
    navigate('/shop');
  };

  return (
    <main
      className={cn(
        'mx-auto w-full max-w-5xl px-4 py-10 lg:py-12',
        className
      )}
    >
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center text-sm text-zinc-400 hover:text-zinc-200"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </button>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-8 lg:flex-row"
      >
        <section className="flex-1 space-y-4">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-2xl font-semibold tracking-tight">
              My shopping bag
            </h1>
            <span className="text-sm text-zinc-400">
              {items?.length ?? 0} item{(items?.length ?? 0) !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="space-y-4">
            {items?.length ? (
              items?.map(item => (
                <div
                  key={item?.id}
                  className="flex gap-4 rounded-lg border border-[#3b82f633] bg-[#18181b] p-4"
                >
                  <div className="h-20 w-20 overflow-hidden rounded-md bg-zinc-900">
                    <img
                      src={item?.imageUrl ?? ''}
                      alt={item?.name ?? 'Workout product'}
                      crossOrigin="anonymous"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 items-start justify-between gap-4">
                    <div>
                      <h2 className="text-sm font-medium">{item?.name}</h2>
                      <p className="mt-1 text-xs text-zinc-400">
                        {item?.sets && item?.reps
                          ? `${item?.sets} sets × ${item?.reps} reps`
                          : 'Custom workout template'}
                      </p>
                      <div className="mt-3 inline-flex items-center rounded-full bg-zinc-900 px-2 py-1 text-[11px] uppercase tracking-wide text-zinc-400">
                        <ShoppingCart className="mr-1 h-3 w-3" />
                        IronPulse Plan
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-sm font-semibold">
                        ${(item?.price ?? 0).toFixed(2)}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            handleQtyChange(item?.id ?? '', -1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-700 text-xs text-zinc-200 hover:bg-zinc-800"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-sm">
                          {quantities?.[item?.id ?? ''] ?? 1}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            handleQtyChange(item?.id ?? '', 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-zinc-700 text-xs text-zinc-200 hover:bg-zinc-800"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemove(item?.id ?? '')}
                        className="mt-1 inline-flex items-center text-xs text-zinc-500 hover:text-red-400"
                      >
                        <Trash2 className="mr-1 h-3 w-3" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-lg border border-dashed border-zinc-700 bg-[#18181b] p-6 text-center text-sm text-zinc-400">
                Your IronPulse bag is empty. Add workout templates and strength
                packs from the shop to start logging.
              </div>
            )}
          </div>
        </section>

        <aside className="w-full max-w-sm space-y-4 rounded-xl border border-[#3b82f633] bg-[#18181b] p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-300">
            Summary
          </h2>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">Subtotal</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">Gift wrap</span>
              <span className="font-medium">
                {giftWrap ? '$4.99' : '$0.00'}
              </span>
            </div>
            <div className="flex items-center justify-between border-t border-zinc-800 pt-2">
              <span className="text-zinc-200">Total</span>
              <span className="text-lg font-semibold">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <label className="flex cursor-pointer items-center gap-2 text-zinc-300">
              <input
                type="checkbox"
                checked={giftWrap}
                onChange={e => setGiftWrap(e?.target?.checked ?? false)}
                className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-[#3b82f6] focus:ring-[#3b82f6]"
              />
              <span>Add gift wrap and personal note</span>
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-zinc-300">
              <input
                type="checkbox"
                checked={newsletter}
                onChange={e => setNewsletter(e?.target?.checked ?? false)}
                className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-[#3b82f6] focus:ring-[#3b82f6]"
              />
              <span>
                Keep me updated on new IronPulse training packs and features
              </span>
            </label>
          </div>

          <div className="space-y-2 pt-1">
            <button
              type="button"
              onClick={handleCheckout}
              className="flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold shadow-sm"
              style={{ backgroundColor: '#3b82f6', color: '#09090b' }}
            >
              Go to checkout
            </button>
            <button
              type="button"
              onClick={handleBack}
              className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-200 hover:bg-zinc-800"
            >
              Back to store
            </button>
          </div>
        </aside>
      </motion.div>
    </main>
  );
}

export default Cart;