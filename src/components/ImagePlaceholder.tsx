import React from 'react';
import { Image } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type ImagePlaceholderProps = {
  label?: string;
  className?: string;
  rounded?: boolean;
  aspectRatio?: 'square' | 'video' | 'wide';
};

export function ImagePlaceholder(props: ImagePlaceholderProps) {
  const {
    label = 'Preview',
    className = '',
    rounded = true,
    aspectRatio = 'square',
  } = props;

  const ratioClass =
    aspectRatio === 'video'
      ? 'aspect-video'
      : aspectRatio === 'wide'
      ? 'aspect-[3/1]'
      : 'aspect-square';

  return (
    <motion.div
      className={cn(
        'relative flex items-center justify-center overflow-hidden bg-zinc-900/60 border border-[#3b82f633]',
        ratioClass,
        rounded ? 'rounded-xl' : 'rounded-none',
        className
      )}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex flex-col items-center gap-1 text-xs text-zinc-400">
        <Image className="h-5 w-5 text-zinc-500" aria-hidden="true" />
        <span className="font-medium tracking-wide uppercase">{label}</span>
      </div>
    </motion.div>
  );
}

export default ImagePlaceholder;