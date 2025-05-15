'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ParallaxSection from "@/components/ParallaxSection";
import NumberReveal from "@/components/NumberReveal";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Hero Section */}
      <header className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
        <ParallaxSection speed={0.3}>
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.jpg"
              alt="Financial consulting background"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
        </ParallaxSection>
        <div className="relative z-10 w-full">
          <NumberReveal />
        </div>
      </header>

      {/* Services Section */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/senseofnumbers.jpg"
            alt="Financial numbers background"
            fill
            className="object-cover opacity-60"
            priority
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-gray-50/10"></div>
        <motion.div 
          className="max-w-6xl mx-auto relative z-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-900"
            variants={fadeInUp}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Cash Flow Forecasting',
              'Budgeting',
              'Financial Modeling',
              'Profitability Analysis',
              'Capital Raise Support',
              'Systems & Process Improvement'
            ].map((service) => (
              <motion.div
                key={service}
                variants={fadeInUp}
                className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{service}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-white to-gray-50">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="w-64 h-64 relative rounded-full overflow-hidden shadow-2xl"
              variants={fadeInUp}
            >
              <Image
                src="/assets/james.png"
                alt="James Sproule"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div 
              className="flex-1"
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold mb-8 text-gray-900">About James</h2>
              <p className="mb-6 text-gray-700 leading-relaxed">
                15-year FP&A and operations career across financial institutions and SMBs. Former Head of Finance at Stantt (Series A).
              </p>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Managed large teams, $50M+ in client accounts, $18M facility builds. Extensive experience in real estate and strategic finance.
              </p>
              <p className="mb-8 text-gray-700 leading-relaxed">
                Problem-solver, learner, efficiency driver, and team-builder with expertise in FinTech, SaaS, Retail, B2B, Real Estate, and Nonprofit sectors.
              </p>
              <Link
                href="https://www.linkedin.com/in/james-sproule-3113ab1a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
              >
                Connect on LinkedIn
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Book a Call Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <ParallaxSection speed={0.2}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>
        </ParallaxSection>
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold mb-6 text-gray-900"
            variants={fadeInUp}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl mb-12 text-gray-700"
            variants={fadeInUp}
          >
            Request 15 minutes to discuss your situation
          </motion.p>
          <motion.a
            href="https://calendly.com/jamessproule/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Call
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
