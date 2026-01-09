"use client";

import { motion } from 'framer-motion';
import { Award, Users, Heart, Sparkles } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { label: 'Happy Customers', value: '50K+' },
  { label: 'Products Sold', value: '100K+' },
  { label: 'Years of Excellence', value: '4+' },
  { label: 'Store Locations', value: '15+' },
];

const values = [
  {
    icon: Award,
    title: 'Quality First',
    description:
      'Every piece is crafted with premium materials and meticulous attention to detail.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description:
      'Your satisfaction drives everything we do. We listen, adapt, and deliver excellence.',
  },
  {
    icon: Heart,
    title: 'Passion for Fashion',
    description:
      'We live and breathe style, constantly curating the best trends for you.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description:
      'Blending timeless classics with contemporary designs for the modern man.',
  },
];

export default function AboutPage() {
  return (
    <div className='h-full flex-col w-full flex items-center'>
      {/* Hero Section */}
      <section className="relative w-full h-96 overflow-hidden md:h-125">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Our Team"
            className="h-full w-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-bold text-white md:text-6xl"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-2xl text-lg text-gray-300"
          >
            Redefining men&apos;s fashion, one stitch at a time
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Crafting Style Since 2020
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Mayur Collection was born from a simple vision: to make premium
                men&apos;s fashion accessible to everyone. What started as a small
                venture with a passion for quality denim has grown into a
                trusted destination for men who appreciate style and substance.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We believe that great clothing isn&apos;t just about looks—it&apos;s about
                how it makes you feel. Every piece in our collection is
                carefully selected to ensure it meets our standards of quality,
                comfort, and style. From classic denim to essential tees, we&apos;ve
                got you covered.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl"
            >
              <Image
                src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fashion Story"
                className="h-full w-full object-cover"
                width={200}
                height={200}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-hero py-16 w-full">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-4xl font-bold  md:text-5xl text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-gray-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              What We Stand For
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our core values guide everything we do
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-card p-8 shadow-soft transition-shadow hover:shadow-medium"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                  <value.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};