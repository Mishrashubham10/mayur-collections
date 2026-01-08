'use client';

import { useParams } from 'next/navigation';

export default function ProductDetailsPage() {
  const { productId } = useParams<{ productId: string }>();
  console.log('Product id is here', productId);

  return <h1>Product Details Page is here...</h1>;
}