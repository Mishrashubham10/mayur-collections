"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    title: 'Jeans',
    description: 'Premium denim for every occasion',
    image:
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/products?category=jeans',
  },
  {
    title: 'T-Shirts',
    description: 'Essential basics, elevated',
    image:
      'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/products?category=t-shirts',
  },
];

export const Categories = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Shop by Category
          </h2>
          <p className="mt-4 text-muted-foreground">
            Explore our curated collections
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Link
                href={category.link}
                className="group relative block overflow-hidden rounded-2xl"
              >
                <div className="relative w-full h-64 aspect-4/3 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    fill
                    loading='lazy'
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
                        {category.title}
                      </h3>
                      <p className="mt-2 text-primary-foreground/80">
                        {category.description}
                      </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:scale-110">
                      <ArrowUpRight className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};