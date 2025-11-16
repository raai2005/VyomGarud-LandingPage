'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Hybrid Communication',
    description: 'Combines cellular and LoRa for seamless command and control even in challenging environments',
    icon: '📡',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Limitless Range',
    description: 'Enables beyond line-of-sight UAV operations with reliable connectivity',
    icon: '🌐',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'AI-Driven Telemetry',
    description: 'Autonomous flight and real-time data analytics for enhanced situational awareness',
    icon: '🤖',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Secure Cloud Infrastructure',
    description: 'Encrypted command, control, and data storage ensuring mission integrity',
    icon: '🔒',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Multi-Drone Coordination',
    description: 'Capable of controlling multiple UAVs simultaneously for complex missions',
    icon: '🚁',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Military-Grade Precision',
    description: 'Robust avionics and durable build meeting defense standards',
    icon: '🎯',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Extended Mission Endurance',
    description: 'Optimized design for long-duration flights with resilient power systems',
    icon: '⚡',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Advanced Autonomy',
    description: 'Future of aerial operations driven by intelligent systems and networked connectivity',
    icon: '🛸',
    gradient: 'from-violet-500 to-purple-500',
  },
];

export default function Features() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden flex items-center justify-center">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6"
          >
            <span className="text-blue-400 font-semibold text-sm">POWERFUL CAPABILITIES</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Revolutionary Features</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need for advanced aerial operations in one comprehensive platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card background with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl p-[1px]">
                <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl`} />
              </div>
              
              {/* Card content */}
              <div className="relative bg-gray-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 h-full">
                {/* Icon with gradient background */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-6 flex items-center justify-center shadow-lg`}
                >
                  <span className="text-4xl">{feature.icon}</span>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover effect line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-full`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
