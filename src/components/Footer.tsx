import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type FooterProps = {
  className?: string;
};

export function Footer({ className = '' }: FooterProps) {
  return (
    <footer
      className={cn(
        'border-t border-[#3b82f633] mt-12',
        className
      )}
      style={{ backgroundColor: '#09090b', color: '#f4f4f5' }}
    >
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-xl px-4 py-5 md:px-6 md:py-6"
          style={{ backgroundColor: '#18181b' }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-1 md:space-y-2 max-w-xl">
            <p className="text-xs font-semibold tracking-wide uppercase text-[#a1a1aa]">
              Stay on your grind
            </p>
            <h3 className="text-lg md:text-xl font-semibold">
              Weekly strength insights, form tips, and IronPulse feature drops.
            </h3>
            <p className="text-xs md:text-sm text-[#a1a1aa]">
              No spam. Just actionable training signal for serious lifters.
            </p>
          </div>
          <form
            className="w-full md:w-auto flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative flex-1">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#71717a]">
                <Mail className="h-4 w-4" />
              </span>
              <input
                type="email"
                required
                className="w-full rounded-lg border border-[#3b82f633] bg-[#09090b] py-2.5 pl-9 pr-3 text-sm placeholder:text-[#71717a] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold shadow-sm"
              style={{ backgroundColor: '#3b82f6', color: '#09090b' }}
            >
              Subscribe now
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </button>
          </form>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="space-y-3">
            <Link to="/" className="inline-flex items-center gap-2">
              <div
                className="h-8 w-24 rounded-md flex items-center justify-center text-xs font-semibold tracking-wide"
                style={{ backgroundColor: '#18181b', border: '1px solid #3b82f633' }}
              >
                IronPulse
              </div>
            </Link>
            <p className="text-xs text-[#a1a1aa] max-w-xs">
              Precision tools for lifters who track every rep, review every session, and train with intent.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm">
            <div>
              <h4 className="font-semibold mb-3">Help</h4>
              <ul className="space-y-2 text-[#d4d4d8]">
                <li>
                  <Link to="/support" className="hover:text-[#3b82f6] transition-colors">
                    Support center
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-[#3b82f6] transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#3b82f6] transition-colors">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Other</h4>
              <ul className="space-y-2 text-[#d4d4d8]">
                <li>
                  <Link to="/about" className="hover:text-[#3b82f6] transition-colors">
                    About IronPulse
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-[#3b82f6] transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-[#3b82f6] transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3b82f633] pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[11px] text-[#71717a]">
            © {new Date().getFullYear()} IronPulse. All rights reserved.
          </p>
          <p className="text-[11px] text-[#71717a]">
            Built for lifters who treat training data like a strength asset.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;