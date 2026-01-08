'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Men's Fashion"
          className="h-full w-full object-cover object-center"
          width={400}
          height={400}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex min-h-[90vh] items-center">
        <div className="max-w-2xl space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block rounded-full bg-accent/90 px-4 py-1.5 text-sm font-medium text-white"
          >
            New Collection 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
          >
            Elevate Your
            <span className="block text-white">Style Game</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 md:text-xl"
          >
            Discover premium denim and essentials crafted for the modern man.
            Quality meets style in every stitch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild size="lg" variant="outline" className="group text-white">
              <Link href="/products">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/50 bg-primary-foreground/10 text-white hover:bg-primary-foreground/20"
            >
              <Link href="/about">Our Story</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-xs font-medium uppercase tracking-widest text-white">
            Scroll
          </span>
          <div className="h-12 w-0.5 bg-linear-to-b from-primary-foreground/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};
