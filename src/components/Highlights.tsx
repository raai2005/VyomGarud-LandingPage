import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Highlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      title: 'Unmatched Endurance',
      description: 'Extended flight times and operational range that redefine what\'s possible in aerial surveillance and reconnaissance.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Secure Infrastructure',
      description: 'End-to-end encryption and secure cloud architecture ensure mission data integrity and operational security.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Real-Time Situational Awareness',
      description: 'Live telemetry, HD video streaming, and AI analytics deliver complete battlefield awareness at your fingertips.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-20 bg-charcoal-dark overflow-hidden">
      {/* Diagonal accent stripe */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-vyom-orange/20 via-transparent to-transparent transform -skew-y-6"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-4">
            Why Choose <span className="text-vyom-orange">VyomGarud</span>
          </h2>
          <div className="w-24 h-1 bg-vyom-orange mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon container */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-vyom-orange rounded-full blur-xl opacity-30"></div>
                  <div className="relative bg-charcoal-light border-2 border-vyom-orange rounded-full p-6 text-vyom-orange transform hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold font-montserrat text-white mb-3">
                  {highlight.title}
                </h3>
                
                <p className="text-gray-400 font-poppins leading-relaxed max-w-sm">
                  {highlight.description}
                </p>
              </div>

              {/* Connector line (desktop only) */}
              {index < highlights.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-vyom-orange to-transparent opacity-20"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
