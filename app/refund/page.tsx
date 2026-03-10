import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function RefundPolicy() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Refund & Return Policy
          </CardTitle>
          <p className="text-muted-foreground">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </CardHeader>

        <CardContent className="space-y-8 text-sm leading-6">
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">1. Overview</h2>
            <p>
              At <strong>Mayur Wears and Swapnil Collections</strong>, customer
              satisfaction is important to us. If you are not completely
              satisfied with your purchase, you may request a return or refund
              in accordance with the terms outlined below.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">2. Return Eligibility</h2>
            <p>
              To be eligible for a return or exchange, the following conditions
              must be met:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                The item must be returned within <strong>7 days</strong> of
                delivery.
              </li>
              <li>The product must be unused, unwashed, and undamaged.</li>
              <li>The original packaging, tags, and invoice must be intact.</li>
              <li>
                The product must not show any signs of wear or alteration.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">3. Non-Returnable Items</h2>
            <p>The following items are not eligible for return or refund:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Items purchased during clearance or final sale.</li>
              <li>Customized or tailored garments.</li>
              <li>Products damaged due to misuse or improper handling.</li>
              <li>Items returned without original tags or packaging.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">4. Refund Process</h2>
            <p>
              Once we receive and inspect the returned item, we will notify you
              regarding the approval or rejection of your refund request.
            </p>
            <p>
              If approved, the refund will be processed to the original payment
              method within <strong>5–7 business days</strong>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">5. Exchange Policy</h2>
            <p>
              Exchanges are allowed in cases of size issues or defective
              products, subject to stock availability.
            </p>
            <p>
              If the requested size or product is unavailable, you may choose a
              refund or store credit.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              6. Damaged or Incorrect Items
            </h2>
            <p>
              If you receive a damaged, defective, or incorrect product, please
              contact us within <strong>48 hours</strong> of delivery.
            </p>
            <p>
              You may be required to provide photos of the product and packaging
              to verify the issue before the return is approved.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">7. Shipping Costs</h2>
            <p>
              Return shipping costs may be the responsibility of the customer
              unless the return is due to a damaged or incorrect item.
            </p>
            <p>
              Original shipping charges are non-refundable unless the return is
              due to our error.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              8. Late or Missing Refunds
            </h2>
            <p>
              If you have not received your refund within the expected time,
              please check with your bank or payment provider first.
            </p>
            <p>
              If the issue persists, contact our support team for assistance.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">9. Contact Us</h2>
            <p>
              If you have questions regarding returns or refunds, please reach
              out to our support team via the contact page on our website.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}