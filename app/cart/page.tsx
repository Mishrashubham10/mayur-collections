'use client';

import Container from '@/components/layouts/Container';
import { Button } from '@/components/ui/button';
import { useStore } from '@/contexts/ShopContext';

import { motion } from 'framer-motion';
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CartsPage() {
  const { state, removeFromCart, updateQuantity, clearCart } = useStore();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (state.cart.items.length === 0) {
    return (
      <Container>
        <div className="container py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-md text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-secondary">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground">
              Your Cart is Empty
            </h1>
            <p className="mt-4 text-muted-foreground">
              Looks like you haven&apos;t added anything to your cart yet.
            </p>
            <Button asChild variant="outline" size="lg" className="mt-8">
              <Link href="/products">
                Start Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <section className="py-12 md:py-16">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl font-bold text-foreground md:text-4xl"
          >
            Shopping Cart
          </motion.h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {state.cart.items.map((item, index) => (
                  <motion.div
                    key={`${item.id}-${item.selectedSize}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 rounded-xl bg-card p-4 shadow-soft sm:gap-6 sm:p-6"
                  >
                    <div className="h-28 w-20 shrink-0 overflow-hidden rounded-lg sm:h-32 sm:w-24">
                      <Image
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                        width={28}
                        height={28}
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Size: {item.selectedSize} • {item.color}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.selectedSize,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.selectedSize,
                                item.quantity + 1
                              )
                            }
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <p className="text-lg font-bold text-accent">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id, item.selectedSize)}
                      className="shrink-0 text-muted-foreground transition-colors hover:text-destructive"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </motion.div>
                ))}
              </div>

              <Button
                variant="ghost"
                className="mt-6 text-muted-foreground"
                onClick={clearCart}
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Clear Cart
              </Button>
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="h-fit rounded-2xl bg-secondary p-6 lg:sticky lg:top-24"
            >
              <h2 className="font-display text-xl font-bold text-foreground">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">
                    {formatPrice(state.cart.total)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium text-accent">
                    {state.cart.total >= 1499 ? 'FREE' : formatPrice(99)}
                  </span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="text-xl font-bold text-foreground">
                      {formatPrice(
                        state.cart.total >= 1499
                          ? state.cart.total
                          : state.cart.total + 99
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <Button variant="outline" size="lg" className="mt-6 w-full">
                Proceed to Checkout
              </Button>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Free shipping on orders above ₹1,499
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Container>
  );
}