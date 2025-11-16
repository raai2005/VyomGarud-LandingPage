import { motion } from 'framer-motion';
import { Particles } from '@/components/ui/particles';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center bg-black">
      <div className="absolute inset-0 w-full h-full">
        <Particles
          className="w-full h-full"
          quantity={1000}
          staticity={30}
          ease={50}
          color="#ffffff"
          refresh
        />
      </div>
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        className="relative z-10 text-5xl font-bold mb-6"
      >
        VYOMGARUD
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.0 }}
        className="relative z-10 text-xl max-w-2xl mb-10 text-blue-200"
      >
        Cutting-edge IoT & Drone Solutions <br /> Engineering, Innovation, and Real-World Impact
      </motion.p>
      <motion.img
        src="/drone.svg"
        alt="Animated Drone"
        className="relative z-10 h-56 mb-8"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      />
      <a href="#contact"
        className="relative z-10 px-6 py-3 rounded-lg text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition shadow-lg"
      >
        Request Demo
      </a>
    </section>
  );
}
