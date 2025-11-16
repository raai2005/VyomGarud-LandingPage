import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-charcoal-light overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-vyom-orange opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-vyom-orange opacity-5 rounded-full blur-3xl"></div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-4">
            Get in <span className="text-vyom-orange">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-vyom-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 font-inter max-w-2xl mx-auto">
            Ready to elevate your operations? Contact us to discuss how VyomGarud can transform your aerial capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-inter mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-charcoal border border-gray-700 rounded-lg text-white font-poppins focus:outline-none focus:border-vyom-orange transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-inter mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-charcoal border border-gray-700 rounded-lg text-white font-poppins focus:outline-none focus:border-vyom-orange transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-gray-300 font-inter mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-charcoal border border-gray-700 rounded-lg text-white font-poppins focus:outline-none focus:border-vyom-orange transition-colors duration-300"
                  placeholder="Your Organization"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-inter mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-charcoal border border-gray-700 rounded-lg text-white font-poppins focus:outline-none focus:border-vyom-orange transition-colors duration-300 resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-vyom-orange text-white font-semibold font-inter rounded-lg hover:bg-vyom-orange-dark transition-all duration-300 hover:shadow-lg hover:shadow-vyom-orange/50 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="bg-charcoal border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold font-montserrat text-white mb-6">
                Why Partner with Us?
              </h3>
              <ul className="space-y-4">
                {[
                  'Custom UAV solutions tailored to your mission',
                  'Military-grade reliability and performance',
                  'Comprehensive training and support',
                  'Secure, scalable infrastructure',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-vyom-orange mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300 font-poppins">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-charcoal border border-gray-700 rounded-lg p-6 hover:border-vyom-orange transition-colors duration-300">
                <div className="text-vyom-orange mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-white font-inter font-semibold mb-1">Email</h4>
                <p className="text-gray-400 text-sm font-poppins">info@vyomgarud.com</p>
              </div>

              <div className="bg-charcoal border border-gray-700 rounded-lg p-6 hover:border-vyom-orange transition-colors duration-300">
                <div className="text-vyom-orange mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-white font-inter font-semibold mb-1">Phone</h4>
                <p className="text-gray-400 text-sm font-poppins">+91 XXX XXX XXXX</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
