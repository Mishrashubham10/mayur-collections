'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Heart,
  ChevronLeft,
  Minus,
  Plus,
  Check,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { useStore } from '@/contexts/ShopContext';

const sizes = {
  jeans: ['28', '30', '32', '34', '36', '38'],
  't-shirts': ['S', 'M', 'L', 'XL', 'XXL'],
};

export default function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();
  const router = useRouter();

  const {
    state,
    getProductById,
    addToCart,
    updateQuantity,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useStore();

  const product = getProductById(productId ?? '');

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [localQuantity, setLocalQuantity] = useState<number>(1);

  /** ✅ HOOK MUST ALWAYS RUN */
  const cartItem = useMemo(() => {
    if (!product || !selectedSize) return undefined;

    return state.cart.items.find(
      (item) => item.id === product.id && item.selectedSize === selectedSize
    );
  }, [state.cart.items, product, selectedSize]);

  /** Source of truth for quantity */
  const quantity = cartItem?.quantity ?? localQuantity;

  /** ➕ Increment */
  const increment = () => {
    if (cartItem) {
      updateQuantity(cartItem.id, cartItem.selectedSize, cartItem.quantity + 1);
    } else {
      setLocalQuantity((q) => q + 1);
    }
  };

  /** ➖ Decrement */
  const decrement = () => {
    if (cartItem && cartItem.quantity > 1) {
      updateQuantity(cartItem.id, cartItem.selectedSize, cartItem.quantity - 1);
    } else {
      setLocalQuantity((q) => Math.max(1, q - 1));
    }
  };

  /** 🛒 Add to cart */
  const handleAddToCart = () => {
    if (!product || !selectedSize) {
      toast('Please select a size');
      return;
    }

    if (!cartItem) {
      addToCart({
        ...product,
        quantity: localQuantity,
        selectedSize,
      });
    }

    toast('Added to cart', {
      description: `${product.name} (${selectedSize}) × ${quantity}`,
    });
  };

  /** ❤️ Wishlist */
  const inWishlist = product ? isInWishlist(product.id) : false;

  const handleWishlistToggle = () => {
    if (!product) return;

    if (inWishlist) {
      removeFromWishlist(product.id);
      toast('Removed from wishlist');
    } else {
      addToWishlist(product);
      toast('Added to wishlist');
    }
  };

  /** ✅ SAFE EARLY RETURN (after hooks) */
  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <Button className="mt-6" onClick={() => router.push('/products')}>
          Back to Shop
        </Button>
      </div>
    );
  }

  const productSizes = sizes[product.category];

  return (
    <section className="px-4 py-10 lg:px-16">
      <Link
        href="/products"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to shop
      </Link>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative aspect-4/4 overflow-hidden rounded-2xl bg-muted"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />

          <button
            onClick={handleWishlistToggle}
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-background shadow"
          >
            <Heart
              className={`h-6 w-6 ${
                inWishlist
                  ? 'fill-red-500 text-red-500'
                  : 'text-muted-foreground'
              }`}
            />
          </button>
        </motion.div>

        {/* Details */}
        <div>
          <p className="text-sm uppercase tracking-wide text-accent">
            {product.category}
          </p>

          <h1 className="mt-2 text-4xl font-bold">{product.name}</h1>

          <p className="mt-6 text-3xl font-bold text-accent">
            ₹{product.price.toLocaleString()}
          </p>

          {/* Size */}
          <div className="mt-8">
            <p className="font-medium">Select Size</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {productSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);
                    setLocalQuantity(1);
                  }}
                  className={`h-12 w-12 rounded-lg border-2 ${
                    selectedSize === size
                      ? 'border-accent bg-accent text-gray-400'
                      : 'border-border'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <p className="font-medium">Quantity</p>
            <div className="mt-3 flex items-center gap-4">
              <Button variant="outline" size="icon-lg" onClick={decrement}>
                <Minus />
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button variant="outline" size="icon-lg" onClick={increment}>
                <Plus />
              </Button>
            </div>
          </div>

          {/* Add to cart */}
          <div className="mt-8 flex gap-4">
            <Link href="/cart">
              <Button
                variant="outline"
                onClick={handleAddToCart}
                className="w-sm"
              >
                <ShoppingBag className="h-5 w-5" />
                Add to Cart
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="mt-10 space-y-3 border-t pt-6 text-sm">
            <div className="flex items-center gap-2">
              <Check className="text-green-500" />
              Free shipping over ₹1,999
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-green-500" />
              Easy 15-day returns
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}