import SimpleNav from  './Navbar';
import Hero from './Hero';
import Features from './Features';
import About from './About';
import CTA from './CTA';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-black flex flex-col items-center">
      <SimpleNav />
      <Hero />
      <Features />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
