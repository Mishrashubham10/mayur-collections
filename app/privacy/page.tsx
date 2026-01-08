"use client";

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="w-full h-full py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
            <Shield className="h-8 w-8 text-accent" />
          </div>
          <h1 className="font-display text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Last updated: January 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-4xl space-y-8"
        >
          <section className="rounded-xl border border-border bg-card p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-primary">
              1. Information We Collect
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                We collect information you provide directly to us, such as when
                you:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Create an account or place an order</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact our customer support</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p>
                This information may include your name, email address, phone
                number, shipping address, and payment information.
              </p>
            </div>
          </section>

          <section className="rounded-xl border border-border bg-card p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-primary">
              2. How We Use Your Information
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>We use the information we collect to:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Send order confirmations and shipping updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Improve our products and services</li>
                <li>Detect and prevent fraud</li>
              </ul>
            </div>
          </section>

          <section className="rounded-xl border border-border bg-card p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-primary">
              3. Information Sharing
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information with:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  Service providers who assist in our operations (shipping,
                  payment processing)
                </li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
            </div>
          </section>

          <section className="rounded-xl border border-border bg-card p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-primary">
              4. Data Security
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                We implement industry-standard security measures to protect your
                personal information, including:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>SSL encryption for all data transmissions</li>
                <li>Secure payment processing through certified providers</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information by employees</li>
              </ul>
            </div>
          </section>

          <section className="rounded-xl border border-border bg-card p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-primary">
              5. Cookies
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>We use cookies and similar technologies to:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Keep items in your shopping cart</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Deliver personalized content and advertisements</li>
              </ul>
              <p>
                You can manage cookie preferences through your browser settings.
              </p>
            </div>
          </section>

          <section className="rounded-xl border border-border bg-card p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-primary">
              6. Your Rights
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>You have the right to:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>
          </section>

          <section className="rounded-xl border border-border bg-card p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-primary">
              7. Contact Us
            </h2>
            <div className="mt-4 text-muted-foreground">
              <p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Email:</strong> privacy@mayurcollection.com
                </p>
                <p>
                  <strong>Phone:</strong> +91 98765 43210
                </p>
                <p>
                  <strong>Address:</strong> 123 Fashion Street, Mumbai, India
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </>
  );
};