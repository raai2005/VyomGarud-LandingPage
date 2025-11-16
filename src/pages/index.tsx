import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TechSection from '../components/TechSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <HeroSection />
      <FeaturesSection />
      <TechSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
