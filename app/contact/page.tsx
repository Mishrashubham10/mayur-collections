'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: [
      'shop no 5 bmc market, chikuwadi, near phoenix hospital',
      'Borivali, Mumbai, Maharashtra 400001',
      'India',
    ],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 9359043986'],
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
      {/* =========== HERO SECTION =========== */}
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

      {/* =========== CONTACT SECTION =========== */}
      <section className="mt-12">
        <div className="w-full h-full">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            {/* =========== CONTACT FORM =========== */}
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
                  variant="outline"
                  className="group w-full sm:w-auto"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </motion.div>

            {/* ============ CONTACT INFO =========== */}
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

              <div className="grid gap-4 sm:grid-cols-2">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-xl bg-secondary p-6"
                  >
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                      <info.icon className="h-5 w-5 text-primary-foreground" />
                    </div>

                    <h3 className="font-semibold">{info.title}</h3>
                    <div className="mt-2">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========== MAP ========== */}
      <div className="relative h-64 w-full overflow-hidden rounded-xl px-6 md:px-6 lg:px-12 xl:px-16 mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.138611900933!2d72.8594536585872!3d19.231845960844453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d014371abf%3A0xda99f0cf932d8f08!2sHari%20Om%20Plaza%2C%20Cosmos%20Park%2C%20Mahatma%20Gandhi%20Rd%2C%20Sukarwadi%2C%20Borivali%20East%2C%20Mumbai%2C%20Maharashtra%20400066!5e0!3m2!1sen!2sin!4v1767874344806!5m2!1sen!2sin"
          style={{ border: 0, width: '100%', height: '100%' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}