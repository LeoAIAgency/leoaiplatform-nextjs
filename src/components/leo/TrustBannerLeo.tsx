'use client';

import { Shield, CheckCircle, Clock, HeadphonesIcon } from 'lucide-react';
import { motion } from 'motion/react';

const trustItems = [
  {
    icon: Shield,
    title: 'SOC 2',
    subtitle: 'Security',
  },
  {
    icon: CheckCircle,
    title: 'GDPR',
    subtitle: 'Compliance',
  },
  {
    icon: Clock,
    title: '99.9%',
    subtitle: 'Uptime',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7',
    subtitle: 'Support',
  },
];

export default function TrustBannerLeo() {
  return (
    <section className="relative py-10 bg-gradient-to-b from-[#0A0A0A] dark:from-[#0A0A0A] light:from-white to-[#0F0F0F] dark:to-[#0F0F0F] light:to-[#FAFAFA] transition-colors duration-300">
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0A0A0A] dark:from-[#0A0A0A] light:from-white to-transparent" />
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#0F0F0F] dark:to-[#0F0F0F] light:to-[#FAFAFA]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-4">
            Enterprise-Grade Security & Reliability
          </h2>
          <p className="text-lg text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] max-w-3xl mx-auto mb-8">
            Bank-level encryption with SOC 2 certification, GDPR compliance, guaranteed 99.9% uptime, and dedicated 24/7 support for complete peace of mind.
          </p>
          
          {/* System Status Indicator */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {/* Pulsing Green Dot */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2.5 h-2.5 bg-green-400 rounded-full"
            />
            
            {/* Check Circle Icon */}
            <CheckCircle className="w-5 h-5 text-green-400" />
            
            {/* Status Text */}
            <span className="text-green-400">
              All Systems Operational
            </span>
          </div>
        </div>

        {/* Single Band Container - Hero Style */}
        <motion.div 
          whileHover={{ scale: 1.02, rotate: 0.5 }}
          className="bg-gradient-to-br from-[#0D1117] dark:from-[#0D1117] light:from-white to-[#161B22] dark:to-[#161B22] light:to-[#F9FAFB] border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB] rounded-xl p-4 hover:border-[#70BEFA]/50 transition-all hover:shadow-lg hover:shadow-[#70BEFA]/20"
        >
          {/* Trust Items - Horizontal Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  {/* Icon Container */}
                  <div className="relative flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#1C1C1E] dark:bg-[#1C1C1E] light:bg-[#F3F4F6] border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB]">
                      <Icon className="w-5 h-5 text-[#34D399]" />
                    </div>
                    {/* Pulsing Green Dot - Hero Style */}
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col">
                    <span className="text-sm text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A]">
                      {item.title}
                    </span>
                    <span className="text-xs text-[#6E7681] dark:text-[#6E7681] light:text-[#6B7280]">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
