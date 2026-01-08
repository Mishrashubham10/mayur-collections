import { Categories } from '@/components/home/Categories';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { Features } from '@/components/home/Features';
import { Hero } from '@/components/home/Hero';
import { Newsletter } from '@/components/home/Newletter';
import Container from '@/components/layouts/Container';

export default function HomePage() {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center">
      <Hero />
      <Container>
        <Features />
        <Categories />
        <FeaturedProducts />
        <Newsletter />
      </Container>
    </section>
  );
}