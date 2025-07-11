'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function NumberReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [numbers, setNumbers] = useState<number[]>(Array(40).fill(0));
  const [isClient, setIsClient] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    setIsClient(true);
    setNumbers(Array.from({ length: 40 }, () => Math.floor(Math.random() * 10)));
  }, []);

  // Show only numbers initially, reveal text together on scroll, and return to initial state when scrolling up
  const numbersOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.3, 0.4], [50, 0]);

  return (
    <div ref={ref} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          style={{ opacity: numbersOpacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="grid grid-cols-5 grid-rows-8 gap-4 text-6xl md:text-8xl font-mono text-blue-500/20">
            {numbers.map((num, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: isClient ? 1 : 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.05,
                  repeat: isClient ? 0 : Infinity,
                  repeatType: "reverse"
                }}
              >
                {num}
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          style={{ 
            opacity: textOpacity,
            y: textY
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              SEE BEHIND THE NUMBERS
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Strategic Financial Leadership designed to drive clarity and control while accelerating growth for SMB companies.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 