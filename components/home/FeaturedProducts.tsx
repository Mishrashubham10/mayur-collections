"use client"

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useStore } from '@/contexts/ShopContext';
import Link from 'next/link';
import { ProductCard } from '../products/ProductCard';

export const FeaturedProducts = () => {
  const { getFeaturedProducts } = useStore();
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Featured Picks
            </h2>
            <p className="mt-2 text-muted-foreground">
              Handpicked favorites from our collection
            </p>
          </div>
          <Button asChild variant="outline" className="group">
            <Link href="/products">
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};