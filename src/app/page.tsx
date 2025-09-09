import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Testimonial from '@/components/sections/Testimonial';
import Partners from '@/components/sections/Partners';
import Portfolio from '@/components/sections/Portfolio';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layouts/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />

      <main role="main">
        <Features />
        <Testimonial />
        <Partners />
        <Portfolio />
        <CTA />
      </main>

      <Footer />
      
      <ScrollToTop />
    </div>
  );
}