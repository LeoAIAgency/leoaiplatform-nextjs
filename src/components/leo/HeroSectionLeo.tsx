'use client';

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

// Counter Animation Component
function AnimatedCounter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / duration,
        1,
      );

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

export default function HeroSectionLeo() {
  return (
    <section
      id="home"
      className="relative bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white overflow-hidden pt-32 pb-8 transition-colors duration-300"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Gradient Background Elements */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#70BEFA]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[400px] bg-[#70BEFA]/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#70BEFA]/15 rounded-full blur-[120px]" />

      {/* Bottom Gradient Fade - Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#0A0A0A] dark:to-[#0A0A0A] light:to-white" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Main Headline - Large Typography - Left Aligned */}
            <div className="mb-12">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white dark:text-white light:text-[#0A0A0A] mb-1 sm:mb-2 tracking-tight leading-none">
                Build
              </h1>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white dark:text-white light:text-[#0A0A0A] mb-1 sm:mb-2 tracking-tight leading-none">
                smarter solutions
              </h1>
              <h1 className="sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-[#70BEFA] via-[#70BEFA] to-[#70BEFA] bg-clip-text text-transparent tracking-tight leading-none text-[80px]">
                with Leo AI
              </h1>
            </div>

            {/* CTA Button - Smaller Size */}
            <div className="flex">
              <Button 
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://smartagent.leoai.agency/auth/signup', '_blank', 'noopener,noreferrer');
                }}
                className="bg-[#222222] backdrop-blur-md border border-[#70BEFA]/20 text-[#FFFFFF] hover:bg-[#70BEFA] px-5 py-3 rounded-xl shadow-xl hover:shadow-[#70BEFA]/20 transition-all group"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Side - Interactive Dashboard Preview */}
          <div className="relative w-full lg:block">
            {/* Floating Metrics Cards */}
            <div className="space-y-3 lg:space-y-4">
              {/* Card 1 - Multi-Channel Support */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: 0 }}
                animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
                transition={{
                  opacity: { duration: 0.6 },
                  x: { duration: 0.6 },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-[#161616]/80 dark:bg-[#161616]/80 light:bg-white/80 backdrop-blur-md border border-[#222222] dark:border-[#222222] light:border-[#E5E7EB] rounded-xl lg:rounded-2xl p-4 lg:p-6 hover:border-[#70BEFA]/50 transition-all hover:shadow-lg hover:shadow-[#70BEFA]/20"
              >
                <div className="flex items-center justify-between mb-2 lg:mb-3">
                  <span className="text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] text-xs lg:text-sm">
                    Multi-Channel Support
                  </span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="w-2 h-2 bg-green-400 rounded-full"
                  />
                </div>
                <div className="text-2xl lg:text-3xl text-white dark:text-white light:text-[#0A0A0A] mb-1 lg:mb-2">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <div className="text-[#70BEFA] text-xs lg:text-sm">
                  Platforms
                </div>
              </motion.div>

              {/* Card 2 - Response Rate */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: 0 }}
                animate={{ opacity: 1, x: 0, y: [0, -15, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.2 },
                  x: { duration: 0.6, delay: 0.2 },
                  y: {
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  },
                }}
                whileHover={{ scale: 1.05, rotate: -1 }}
                className="bg-[#161616]/80 dark:bg-[#161616]/80 light:bg-white/80 backdrop-blur-md border border-[#222222] dark:border-[#222222] light:border-[#E5E7EB] rounded-xl lg:rounded-2xl p-4 lg:p-6 hover:border-[#70BEFA]/50 transition-all lg:ml-8 hover:shadow-lg hover:shadow-[#70BEFA]/20"
              >
                <div className="flex items-center justify-between mb-2 lg:mb-3">
                  <span className="text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] text-xs lg:text-sm">
                    AI Response Rate
                  </span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                    className="w-2 h-2 bg-green-400 rounded-full"
                  />
                </div>
                <div className="text-2xl lg:text-3xl text-white dark:text-white light:text-[#0A0A0A] mb-1 lg:mb-2">
                  <AnimatedCounter end={98.5} suffix="%" />
                </div>
                <div className="text-[#70BEFA] text-xs lg:text-sm">
                  Powered by advanced AI
                </div>
              </motion.div>

              {/* Card 3 - Avg Response Time */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: 0 }}
                animate={{ opacity: 1, x: 0, y: [0, -12, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.4 },
                  x: { duration: 0.6, delay: 0.4 },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-[#161616]/80 dark:bg-[#161616]/80 light:bg-white/80 backdrop-blur-md border border-[#222222] dark:border-[#222222] light:border-[#E5E7EB] rounded-xl lg:rounded-2xl p-4 lg:p-6 hover:border-[#70BEFA]/50 transition-all hover:shadow-lg hover:shadow-[#70BEFA]/20"
              >
                <div className="flex items-center justify-between mb-2 lg:mb-3">
                  <span className="text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] text-xs lg:text-sm">
                    Avg Response Time
                  </span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1,
                    }}
                    className="w-2 h-2 bg-green-400 rounded-full"
                  />
                </div>
                <div className="text-2xl lg:text-3xl text-white dark:text-white light:text-[#0A0A0A] mb-1 lg:mb-2">
                  0.8s
                </div>
                <div className="text-[#70BEFA] text-xs lg:text-sm">
                  Lightning fast
                </div>
              </motion.div>
            </div>

            {/* Animated Glow Effect */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-[#70BEFA]/10 rounded-full blur-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
