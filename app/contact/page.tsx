'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';
import Image from 'next/image';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['123 Fashion Street', 'Mumbai, Maharashtra 400001', 'India'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 98765 43210', '+91 12345 67890'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['hello@mayurcollection.com', 'support@mayurcollection.com'],
  },
  {
    icon: Clock,
    title: 'Store Hours',
    details: ['Mon - Sat: 10:00 AM - 9:00 PM', 'Sunday: 11:00 AM - 7:00 PM'],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast('Profile updated', {
      description: 'Your changes have been saved successfully.',
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-full w-full flex flex-col items-center py-12">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-bold text-primary md:text-5xl mt-6"
          >
            Get In Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-xl mx-auto text-lg text-primary-foreground/80"
          >
            We&apos;d love to hear from you
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold md:text-3xl">
                Send us a Message
              </h2>
              <p className="mt-2 text-muted-foreground max-w-md">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+91 98765 43210" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    rows={5}
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="group w-full sm:w-auto"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h2 className="font-display text-2xl font-bold md:text-3xl">
                  Contact Information
                </h2>
                <p className="mt-2 text-muted-foreground max-w-md">
                  Reach out to us through any of these channels.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-xl bg-secondary p-6"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                      <info.icon className="h-5 w-5 text-primary-foreground" />
                    </div>

                    <h3 className="font-semibold">{info.title}</h3>
                    <div className="mt-2 space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <div className="relative h-64 w-full overflow-hidden rounded-xl">
                <Image
                  src="https://images.pexels.com/photos/4272668/pexels-photo-4272668.jpeg"
                  alt="Store Location"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}