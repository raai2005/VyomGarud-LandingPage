import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="py-24 flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-900 via-gray-900 to-black">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        className="text-5xl font-bold mb-6"
      >
        Revolutionizing Unmanned Aviation
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.0 }}
        className="text-xl max-w-2xl mb-10 text-blue-200"
      >
        Cutting-edge IoT & Drone Solutions <br /> Engineering, Innovation, and Real-World Impact
      </motion.p>
      <motion.img
        src="/drone.svg"
        alt="Animated Drone"
        className="h-56 mb-8"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      />
      <a href="#contact"
        className="px-6 py-3 rounded-lg text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition shadow-lg"
      >
        Request Demo
      </a>
    </section>
  );
}
