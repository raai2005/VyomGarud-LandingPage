import Head from 'next/head';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Capabilities from '@/components/Capabilities';
import Highlights from '@/components/Highlights';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>VyomGarud - Limitless-Range UAV Systems</title>
        <meta name="description" content="VyomGarud specializes in limitless-range UAVs powered by cellular and LoRa-based hybrid communication, with military-grade precision and AI-driven autonomy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Capabilities />
        <Highlights />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
