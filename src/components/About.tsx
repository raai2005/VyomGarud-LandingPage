'use client';

import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { value: '50+', label: 'Successful Missions', color: 'from-blue-500 to-cyan-500' },
    { value: '99.9%', label: 'System Reliability', color: 'from-purple-500 to-pink-500' },
    { value: '24/7', label: 'Mission Support', color: 'from-green-500 to-emerald-500' },
    { value: '100km+', label: 'Communication Range', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden flex items-center justify-center">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/40 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/40 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1s' }} />
      </div>

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-6"
            >
              <span className="text-purple-400 font-semibold text-sm">ABOUT VYOMGARUD</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Pioneering the Future of</span>{' '}
              <span className="gradient-text">Autonomous Aviation</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
              VyomGarud represents the cutting edge of unmanned aerial vehicle technology. Our mission is to revolutionize aerial operations through innovative hybrid communication systems, AI-driven autonomy, and military-grade precision.
            </p>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
              From defense applications to critical infrastructure monitoring, our platform delivers unmatched reliability and performance in the most challenging environments.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 glass rounded-lg border border-white/10"
              >
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 font-medium">Beyond LoS Operations</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 glass rounded-lg border border-white/10"
              >
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 font-medium">Military-Grade Security</span>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 glass rounded-lg border border-white/10"
              >
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 font-medium">AI-Powered Analytics</span>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="glass-strong p-4 rounded-xl border border-white/10 text-center"
                >
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs md:text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content - Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Drone visualization with gradient orbs */}
            <div className="relative aspect-square">
              {/* Main card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10 glass-strong rounded-3xl p-8 border border-white/20 backdrop-blur-2xl overflow-hidden"
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-50" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-7xl mb-6 text-center animate-float">🚁</div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 glass rounded-lg">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Real-time Telemetry</div>
                        <div className="text-gray-400 text-sm">Live data streaming</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 glass rounded-lg">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Encrypted Control</div>
                        <div className="text-gray-400 text-sm">End-to-end security</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 glass rounded-lg">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Global Coverage</div>
                        <div className="text-gray-400 text-sm">Worldwide operations</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating orbs */}
              <motion.div
                animate={{ 
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/30 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ 
                  y: [20, -20, 20],
                  x: [10, -10, 10],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/30 rounded-full blur-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
