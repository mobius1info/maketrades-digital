import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Platform from '@/components/Platform';
import HowItWorks from '@/components/HowItWorks';
import Articles from '@/components/Articles';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Platform />
        <HowItWorks />
        <Articles />
        <CTABand />
      </main>
      <Footer />
    </div>
  );
}
