'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Product, useStore } from '@/contexts/ShopContext';
import { toast } from 'sonner';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useStore();

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
      selectedSize: product.category === 'jeans' ? '32' : 'M',
    });
    toast('Added to cart', {
      description: `${product.name} has been added to your cart.`,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-card shadow-soft">
        {/* Image */}
        <div className="relative aspect-3/4 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            fill
          />

          {/* Overlay */}
          <div
            className={cn(
              'absolute inset-0 bg-charcoal/40 transition-opacity duration-300',
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
          />

          {/* Quick Add Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            className="absolute bottom-4 left-4 right-4"
          >
            <Button
              onClick={handleAddToCart}
              variant="secondary"
              className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </motion.div>

          {/* Wishlist Button */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/90 shadow-md transition-transform hover:scale-110"
          >
            <Heart
              className={cn(
                'h-4 w-4 transition-colors',
                isLiked ? 'fill-accent text-accent' : 'text-foreground'
              )}
            />
          </button>
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {product.color}
          </p>
          <h3 className="mt-1 font-semibold text-foreground line-clamp-1">
            {product.name}
          </h3>
          <p className="mt-2 text-lg font-bold text-accent">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
