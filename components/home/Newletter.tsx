'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

export const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast('Subscribed!', {
        description: 'Thank you for joining our newsletter.',
      });
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-28 px-6">
      <div className="w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 md:p-16"
        >
          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Stay in Style
            </h2>
            <p className="mt-4 text-gray-200">
              Subscribe to get exclusive offers, new arrivals, and style tips
              delivered to your inbox.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-primary-foreground/20 bg-primary-foreground/10 text-gray-200 placeholder:text-primary-foreground/50 sm:w-80"
              />
              <Button
                type="submit"
                size="lg"
                className="group text-gray-300 font-semibold"
                variant="outline"
              >
                Subscribe
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};