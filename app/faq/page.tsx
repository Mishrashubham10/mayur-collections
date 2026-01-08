'use client';

import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

const faqs = [
  {
    category: 'Orders & Shipping',
    questions: [
      {
        q: 'How long does shipping take?',
        a: 'Standard delivery takes 3-5 business days. Express delivery (₹199 extra) delivers within 1-2 business days. Remote areas may take 2-3 additional days.',
      },
      {
        q: 'Do you offer free shipping?',
        a: 'Yes! We offer free shipping on all orders above ₹1,999. Orders below this amount have a flat shipping fee of ₹99.',
      },
      {
        q: 'Can I track my order?',
        a: "Absolutely! Once your order is shipped, you'll receive a tracking link via email and SMS. You can also track your order from your account dashboard.",
      },
      {
        q: 'Do you ship internationally?',
        a: "Currently, we only ship within India. We're working on expanding our shipping to international destinations soon!",
      },
    ],
  },
  {
    category: 'Returns & Exchanges',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'We accept returns within 15 days of delivery. Items must be unworn, unwashed, with original tags attached and in original packaging.',
      },
      {
        q: 'How do I exchange a product?',
        a: "To exchange, contact our customer service with your order number. We'll arrange for pickup and deliver the new size/color within 5-7 business days.",
      },
      {
        q: 'When will I receive my refund?',
        a: 'Once we receive and inspect the returned item, refunds are processed within 7-10 business days to your original payment method.',
      },
      {
        q: 'Are there any items that cannot be returned?',
        a: 'Items purchased during final sale promotions and innerwear cannot be returned for hygiene reasons.',
      },
    ],
  },
  {
    category: 'Products & Sizing',
    questions: [
      {
        q: 'How do I find my correct size?',
        a: "Check our detailed Size Guide for measurements. If you're between sizes, we recommend going with the larger size for a comfortable fit.",
      },
      {
        q: 'Are the product colors accurate?',
        a: 'We try to represent colors as accurately as possible, but slight variations may occur due to monitor settings and photography lighting.',
      },
      {
        q: 'What materials are used in your products?',
        a: 'We use premium quality materials - 100% cotton for t-shirts and high-quality denim blends for jeans. Check individual product pages for specific fabric details.',
      },
      {
        q: 'Do your jeans shrink after washing?',
        a: 'Our jeans are pre-shrunk during manufacturing. Following care instructions (cold wash, air dry) will minimize any additional shrinkage.',
      },
    ],
  },
  {
    category: 'Payments & Security',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit/debit cards, UPI, Net Banking, and popular wallets like Paytm, PhonePe, and Google Pay. Cash on Delivery is also available.',
      },
      {
        q: 'Is my payment information secure?',
        a: 'Yes, we use industry-standard SSL encryption and secure payment gateways. We never store your complete card details on our servers.',
      },
      {
        q: 'Can I pay in EMI?',
        a: 'Yes! EMI options are available on orders above ₹3,000 through select credit cards and payment providers.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <div className="w-full h-full py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
            <HelpCircle className="h-8 w-8 text-accent" />
          </div>
          <h1 className="font-display text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Find answers to common questions about orders, shipping, returns,
            and more.
          </p>
        </motion.div>

        <div className="mx-auto max-w-7xl space-y-8">
          {faqs.map((section, sectionIndex) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h2 className="mb-4 font-display text-xl font-bold text-primary">
                {section.category}
              </h2>
              <Accordion
                type="single"
                collapsible
                className="rounded-xl border border-border bg-card"
              >
                {section.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${sectionIndex}-${index}`}
                    className="border-border"
                  >
                    <AccordionTrigger className="px-6 text-left hover:no-underline data-[state=open]:text-accent">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-16 max-w-2xl rounded-2xl bg-primary p-8 text-center text-primary-foreground"
        >
          <h3 className="font-display text-2xl font-bold">
            Still have questions?
          </h3>
          <p className="mt-2 text-primary-foreground/80">
            Can&apos;t find the answer you&apos;re looking for? Our customer
            support team is here to help.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-accent px-8 py-3 font-medium text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </>
  );
}
