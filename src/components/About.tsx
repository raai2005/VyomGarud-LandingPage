import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 bg-charcoal-light overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #ff7b00 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-4">
            About <span className="text-vyom-orange">VyomGarud</span>
          </h2>
          <div className="w-24 h-1 bg-vyom-orange mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gray-300 font-poppins leading-relaxed mb-6 text-center">
            We specialize in <span className="text-vyom-orange font-semibold">limitless-range UAVs</span> powered by cellular and LoRa-based hybrid communication, enabling seamless command, control, and multi-drone coordination even in challenging environments.
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 font-poppins leading-relaxed mb-6 text-center">
            Built with <span className="text-vyom-orange font-semibold">military-grade precision</span>, VyomGarud systems combine cutting-edge avionics, AI-driven telemetry, and secure cloud infrastructure to deliver unmatched situational awareness and mission endurance.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-10"
          >
            <p className="text-2xl font-inter text-white font-semibold italic">
              "We believe the future of aerial operations lies in autonomy, resilience, and connectivity — and we are engineering that future today."
            </p>
          </motion.div>
        </motion.div>

        {/* Tech stack visual indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            { label: 'Cellular + LoRa', icon: '📡' },
            { label: 'AI-Driven', icon: '🤖' },
            { label: 'Cloud Infrastructure', icon: '☁️' },
            { label: 'Multi-Drone Coordination', icon: '🔗' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-charcoal border border-gray-700 rounded-lg p-6 text-center hover:border-vyom-orange transition-all duration-300 hover:shadow-lg hover:shadow-vyom-orange/20"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <p className="text-gray-300 font-inter text-sm">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
