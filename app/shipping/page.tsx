'use client';

import { motion } from 'framer-motion';
import { Truck, RotateCcw, Package, Clock, MapPin, Shield } from 'lucide-react';

export default function ShippingReturnsPage() {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center px-4 md:px-6 lg:px-12 xl:px-16 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="font-display text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            Shipping & Returns
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We want you to be completely satisfied with your purchase. Learn
            about our shipping and return policies.
          </p>
        </motion.div>

        {/* Shipping Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <Truck className="h-6 w-6 text-accent" />
            </div>
            <h2 className="font-display text-2xl font-bold text-primary">
              Shipping Information
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <Package className="mb-4 h-8 w-8 text-accent" />
              <h3 className="font-display text-lg font-semibold text-primary">
                Free Shipping
              </h3>
              <p className="mt-2 text-muted-foreground">
                Enjoy free shipping on all orders above ₹1,999. Orders below
                this amount have a flat shipping fee of ₹99.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <Clock className="mb-4 h-8 w-8 text-accent" />
              <h3 className="font-display text-lg font-semibold text-primary">
                Delivery Time
              </h3>
              <p className="mt-2 text-muted-foreground">
                Standard delivery takes 3-5 business days. Express delivery
                (₹199 extra) delivers within 1-2 business days.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <MapPin className="mb-4 h-8 w-8 text-accent" />
              <h3 className="font-display text-lg font-semibold text-primary">
                Pan India Delivery
              </h3>
              <p className="mt-2 text-muted-foreground">
                We deliver to all major cities and towns across India. Remote
                areas may take 2-3 additional days.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Returns Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <RotateCcw className="h-6 w-6 text-accent" />
            </div>
            <h2 className="font-display text-2xl font-bold text-primary">
              Returns & Exchanges
            </h2>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-display text-lg font-semibold text-primary">
                  15-Day Return Policy
                </h3>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                    Returns accepted within 15 days of delivery
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                    Items must be unworn with original tags attached
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                    Original packaging required for returns
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                    Refunds processed within 7-10 business days
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-primary">
                  How to Return
                </h3>
                <ol className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                      1
                    </span>
                    Contact our customer service via email or phone
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                      2
                    </span>
                    Receive a return authorization and shipping label
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                      3
                    </span>
                    Pack the item securely and ship it back
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                      4
                    </span>
                    Receive your refund after inspection
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Guarantee */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl bg-linear-to-r from-primary to-primary/80 p-8 text-primary-foreground md:p-12"
        >
          <div className="flex flex-col items-center text-center md:flex-row md:text-left">
            <div className="mb-6 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 md:mb-0 md:mr-8">
              <Shield className="h-10 w-10" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold md:text-3xl">
                Quality Guarantee
              </h2>
              <p className="mt-3 text-primary-foreground/80">
                Every product at Mayur Collection is crafted with premium
                materials and undergoes strict quality checks. If you&apos;re
                not satisfied with the quality, we&apos;ll replace it or refund
                your money — no questions asked.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
