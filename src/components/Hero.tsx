import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal-dark via-charcoal to-charcoal-light">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#ff7b00 1px, transparent 1px), linear-gradient(90deg, #ff7b00 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glowing orange accent circles */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-vyom-orange opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-vyom-orange opacity-5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold font-montserrat mb-6 tracking-tight">
            <span className="text-white">Vyom</span>
            <span className="text-vyom-orange">Garud</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 font-inter mb-4 max-w-3xl mx-auto"
          >
            Limitless-Range UAV Systems
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 font-poppins mb-12 max-w-3xl mx-auto"
          >
            Military-grade precision. AI-driven autonomy. Unmatched endurance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-vyom-orange text-white font-semibold font-inter rounded-lg overflow-hidden transition-all duration-300 hover:bg-vyom-orange-dark hover:shadow-lg hover:shadow-vyom-orange/50 hover:scale-105"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-vyom-orange-dark to-vyom-orange-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#capabilities"
              className="px-8 py-4 border-2 border-vyom-orange text-vyom-orange font-semibold font-inter rounded-lg hover:bg-vyom-orange hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-vyom-orange/30"
            >
              Explore Capabilities
            </a>
          </motion.div>
        </motion.div>

        {/* Drone silhouette or icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20"
        >
          <div className="relative w-full max-w-2xl mx-auto">
            <svg className="w-full h-auto opacity-20" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 30L120 50L100 70L80 50L100 30Z" stroke="#ff7b00" strokeWidth="2" fill="none"/>
              <circle cx="80" cy="50" r="15" stroke="#ff7b00" strokeWidth="1.5" fill="none"/>
              <circle cx="120" cy="50" r="15" stroke="#ff7b00" strokeWidth="1.5" fill="none"/>
              <line x1="40" y1="50" x2="65" y2="50" stroke="#ff7b00" strokeWidth="1.5"/>
              <line x1="135" y1="50" x2="160" y2="50" stroke="#ff7b00" strokeWidth="1.5"/>
              <circle cx="40" cy="50" r="8" stroke="#ff7b00" strokeWidth="1.5" fill="none"/>
              <circle cx="160" cy="50" r="8" stroke="#ff7b00" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-500 text-sm font-inter">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-vyom-orange rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
