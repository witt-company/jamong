import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layouts/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      <main>
        <Features />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}