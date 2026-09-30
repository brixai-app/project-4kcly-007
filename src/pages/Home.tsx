import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Activity, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { homeCategories, justInProducts, bestsellerProducts, valueProps } from '@/data/mockData';

export function HeroSection() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:py-16">
      <motion.div
        className="h-64 w-full overflow-hidden rounded-xl border border-blue-500/30 bg-[#18181b] md:h-96 md:w-[45%]"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="https://storage.googleapis.com/solyn-web.firebasestorage.app/users/4kcLyAtsuzNqFl0zyaJU7QSAMLO2/projects/007/assets/be256fe8-45b3-48fe-9255-52a1ce6eb491.png?GoogleAccessId=firebase-adminsdk-fbsvc%40solyn-web.iam.gserviceaccount.com&Expires=4922879400&Signature=J4LBse4sRo%2FvGB2cUVKiqwvU8i6oP0PtlAKQQL8KaysjPoxawSN7GiBFukfln%2FC%2BlBWP6MsO7oQJlYk9aAWa2zFUXZ0lmblSwXv0SwLze49qR%2FFRg2uFIUo%2BKz%2ByHOi3QjEMLqOLCna4WehGouRajTjKT9BIk3Rl3jPnGE3biP1yhj1iyOJO65xMZNX3iZoLQUODKR3H4YV3NoHEsTstB9U%2FOlueEgfhY%2BCDHEV3IPHEDqt1fyQSBeDI5nDpsasrN7LqLVKTpeqejBomyeNhfDt9Wq7BLj48zfOI8kxB56vt%2F4wl5HRFmBrFWuTlOVutaTY3K0r2%2ByKMN%2B7JyHdu8w%3D%3D"
          alt="IronPulse workout analytics dashboard"
          className="h-full w-full object-cover"
          crossOrigin="anonymous"
        />
      </motion.div>
      <motion.div
        className="w-full md:w-[55%]"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
          <TrendingUp className="h-3 w-3" />
          Built for serious lifters
        </p>
        <h1 className="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
          Track Your Fitness Journey
        </h1>
        <p className="mt-3 max-w-xl text-sm text-zinc-300 md:text-base">
          Achieve your workout goals with ease and precision. Log every rep, visualize strength
          progression, and keep all your training stats in one powerful dashboard.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm"
            style={{ backgroundColor: '#3b82f6', color: '#09090b' }}
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="flex items-center gap-4 text-xs text-zinc-400 md:text-sm">
            <span>Workout Tracking</span>
            <span className="h-1 w-1 rounded-full bg-zinc-500" />
            <span>Custom Plans</span>
            <span className="h-1 w-1 rounded-full bg-zinc-500" />
            <span>Progress Analytics</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function CategoryRow() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-10">
      <motion.div
        className="grid gap-4 md:grid-cols-3"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {homeCategories?.map((cat) => (
          <Link
            key={cat?.id ?? ''}
            to={cat?.href ?? '/shop'}
            className="group flex flex-col gap-3 rounded-xl border border-blue-500/20 bg-[#18181b] p-3"
          >
            <div className="h-40 overflow-hidden rounded-lg bg-black/40">
              <img
                src={cat?.imageUrl ?? ''}
                alt={cat?.label ?? 'Training category'}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                crossOrigin="anonymous"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-zinc-100">{cat?.label ?? ''}</span>
              <span className="text-xs text-blue-400">{cat?.description ?? ''}</span>
            </div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}

export function JustInSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-6 text-center text-2xl font-semibold">Just in!</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {justInProducts?.map((p) => (
            <div
              key={p?.id ?? ''}
              className="flex flex-col rounded-xl border border-blue-500/25 bg-[#18181b] p-4"
            >
              <span className="mb-3 inline-flex w-fit items-center rounded-full bg-blue-500/10 px-2 py-1 text-[10px] font-semibold tracking-wide text-blue-400">
                NEW PRODUCT
              </span>
              <div className="mb-4 h-40 overflow-hidden rounded-lg bg-black/40">
                <img
                  src={p?.imageUrl ?? ''}
                  alt={p?.name ?? 'IronPulse feature'}
                  className="h-full w-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <h3 className="text-sm font-medium">{p?.name ?? ''}</h3>
              <p className="mt-1 line-clamp-2 text-xs text-zinc-300">{p?.description ?? ''}</p>
              <Link
                to={`/product/${p?.id ?? ''}`}
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-blue-500 px-3 py-2 text-xs font-semibold text-[#09090b]"
              >
                Buy now
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export function ValueCTASection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-12">
      <motion.div
        className="rounded-2xl border border-blue-500/25 bg-[#18181b] px-5 py-8 md:px-8"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-center text-2xl font-semibold">Why lifters choose IronPulse</h2>
        <p className="mt-2 text-center text-sm text-zinc-300">
          Built for progression-focused athletes who demand precise tracking and clear feedback.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {valueProps?.map((v, idx) => {
            const Icon = idx === 0 ? Activity : idx === 1 ? BarChart3 : TrendingUp;
            return (
              <div key={v?.id ?? ''} className="flex flex-col items-center text-center text-sm">
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-400">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="font-medium">{v?.title ?? ''}</p>
                <p className="mt-1 text-xs text-zinc-300">{v?.description ?? ''}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-6 flex justify-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-[#09090b]"
          >
            Start logging today
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export function BestsellersSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-16">
      <motion.div
        className="flex flex-col gap-6 md:flex-row md:items-start"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:w-1/3">
          <h2 className="text-2xl font-semibold">Lifter favorites</h2>
          <p className="mt-2 text-sm text-zinc-300">
            Dialed-in tools for logging sessions, tracking macros, and reviewing long-term strength
            trends.
          </p>
        </div>
        <div className="md:w-2/3">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {bestsellerProducts?.map((p) => (
              <Link
                key={p?.id ?? ''}
                to={`/product/${p?.id ?? ''}`}
                className={cn(
                  'min-w-[220px] flex-shrink-0 rounded-xl border border-blue-500/25 bg-[#18181b] p-3'
                )}
              >
                <div className="mb-3 h-32 overflow-hidden rounded-lg bg-black/40">
                  <img
                    src={p?.imageUrl ?? ''}
                    alt={p?.name ?? 'IronPulse tool'}
                    className="h-full w-full object-cover"
                    crossOrigin="anonymous"
                  />
                </div>
                <p className="text-sm font-medium">{p?.name ?? ''}</p>
                <p className="mt-1 text-xs text-zinc-400">{p?.tagline ?? ''}</p>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function Home() {
  return (
    <main className="w-full" style={{ backgroundColor: '#09090b', color: '#f4f4f5' }}>
      <HeroSection />
      <CategoryRow />
      <JustInSection />
      <ValueCTASection />
      <BestsellersSection />
    </main>
  );
}

export default Home;