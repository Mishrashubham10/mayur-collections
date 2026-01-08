'use client';

import { useEffect, useMemo } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useStore } from '@/contexts/ShopContext';
import { ProductCard } from '@/components/products/ProductCard';
import Container from '@/components/layouts/Container';

type Category = 'all' | 'jeans' | 't-shirts';

export default function ProductsClient() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { state, setCategoryFilter, getFilteredProducts } = useStore();

  const categoryFromUrl = useMemo<Category>(() => {
    const value = searchParams.get('category');
    return value === 'jeans' || value === 't-shirts' ? value : 'all';
  }, [searchParams]);

  useEffect(() => {
    if (state.filters.category !== categoryFromUrl) {
      setCategoryFilter(categoryFromUrl);
    }
  }, [categoryFromUrl, state.filters.category, setCategoryFilter]);

  const products = useMemo(
    () => getFilteredProducts(),
    [getFilteredProducts, state.filters]
  );

  const handleCategoryChange = (category: Category) => {
    if (category === state.filters.category) return;

    const params = new URLSearchParams(searchParams.toString());

    category === 'all'
      ? params.delete('category')
      : params.set('category', category);

    router.push(params.toString() ? `${pathname}?${params}` : pathname, {
      scroll: false,
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-64 overflow-hidden bg-gradient-hero md:h-80">
        <Image
          src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg"
          alt="Shop Collection"
          fill
          className="object-cover opacity-30"
          priority
        />

        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-bold text-primary-foreground md:text-5xl"
          >
            Our Collection
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-primary-foreground/80"
          >
            {products.length} products
          </motion.p>
        </div>
      </section>

      <Container>
        <section className="py-12 md:py-16">
          <div className="mb-10 flex justify-center gap-3">
            {(['all', 'jeans', 't-shirts'] as const).map((category) => (
              <Button
                key={category}
                size="lg"
                variant={
                  state.filters.category === category ? 'default' : 'outline'
                }
                onClick={() => handleCategoryChange(category)}
                className={cn(
                  'min-w-27.5 capitalize',
                  state.filters.category === category && 'shadow-medium'
                )}
              >
                {category === 'all' ? 'All Products' : category}
              </Button>
            ))}
          </div>

          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          {products.length === 0 && (
            <div className="py-20 text-center text-muted-foreground">
              No products found.
            </div>
          )}
        </section>
      </Container>
    </>
  );
}