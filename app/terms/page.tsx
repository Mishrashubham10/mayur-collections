import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Terms and Conditions
          </CardTitle>
          <p className="text-muted-foreground">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </CardHeader>

        <CardContent className="space-y-8 text-sm leading-6">
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p>
              Welcome to <strong>Mayur Wears and Swapnil Collections</strong>.
              These Terms and Conditions govern your use of our website and
              services. By accessing or purchasing from our store, you agree to
              comply with and be bound by these terms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">2. Products</h2>
            <p>
              Our store specializes in the sale of garments including but not
              limited to ethnic wear, casual wear, traditional clothing, and
              fashion accessories.
            </p>
            <p>
              We strive to ensure that all product descriptions, images,
              pricing, and availability information are accurate. However, minor
              variations in color or fabric appearance may occur due to
              lighting, screen settings, or manufacturing differences.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">3. Pricing</h2>
            <p>
              All prices displayed on the website are listed in Indian Rupees
              (INR) unless stated otherwise.
            </p>
            <p>
              Prices may change at any time without prior notice. We reserve the
              right to correct pricing errors and cancel orders placed at an
              incorrect price.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">4. Orders</h2>
            <p>
              Once you place an order on our website, you will receive an order
              confirmation. This confirmation does not guarantee acceptance of
              your order.
            </p>
            <p>
              We reserve the right to cancel or refuse any order due to product
              availability, suspected fraud, payment issues, or incorrect
              information.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">5. Shipping & Delivery</h2>
            <p>
              Orders are processed within a reasonable time after confirmation
              of payment.
            </p>
            <p>
              Delivery times may vary depending on your location and courier
              service availability.
            </p>
            <p>
              We are not responsible for delays caused by courier partners,
              weather conditions, or other unforeseen circumstances.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">6. Returns & Exchanges</h2>
            <p>
              Customers may request returns or exchanges within a specified
              period after receiving the product, provided the item remains
              unused, unwashed, and in its original packaging.
            </p>
            <p>
              Certain items such as discounted products, customized garments, or
              clearance sale items may not be eligible for return or exchange.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">7. Payment</h2>
            <p>
              We accept payments through secure payment gateways. By completing
              a purchase, you confirm that the payment details provided are
              accurate and authorized.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">8. Intellectual Property</h2>
            <p>
              All content on this website including logos, designs, product
              images, text, and graphics is the property of Mayur Wears and
              Swapnil Collections and may not be used or reproduced without
              permission.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              9. Limitation of Liability
            </h2>
            <p>
              We shall not be liable for any indirect, incidental, or
              consequential damages arising from the use of our website or
              products.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">10. Privacy</h2>
            <p>
              Your personal information is handled in accordance with our
              privacy policy. We take reasonable steps to protect your data and
              ensure secure transactions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">11. Changes to Terms</h2>
            <p>
              Mayur Wears and Swapnil Collections reserves the right to update
              or modify these terms at any time. Continued use of the website
              after changes are posted constitutes acceptance of the revised
              terms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">12. Contact Information</h2>
            <p>
              For any questions regarding these Terms and Conditions, please
              contact our support team through the contact page on our website.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}