'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export default function IntegrationsSectionLeo() {
  return (
    <section id="integrations" className="relative py-20 bg-gradient-to-b from-[#0F0F0F] dark:from-[#0F0F0F] light:from-[#FAFAFA] via-[#0D0D0D] dark:via-[#0D0D0D] light:via-[#F5F5F5] to-[#0A0A0A] dark:to-[#0A0A0A] light:to-white transition-colors duration-300">
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0F0F0F] dark:from-[#0F0F0F] light:from-[#FAFAFA] to-transparent" />
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#0A0A0A] dark:to-[#0A0A0A] light:to-white" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-4">
            Connected Across Every Channel
          </h2>
          <p className="text-lg text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] max-w-3xl mx-auto">
            Smart Agent Platform integrates seamlessly with every tool in your ecosystem.
          </p>
        </div>

        {/* Scrolling Logo Marquee */}
        <div className="overflow-hidden mb-16">
          {/* First Row - Right to Left */}
          <div className="relative mb-8">
            <div className="flex gap-12 animate-scroll-right whitespace-nowrap">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-12 items-center">
                  <span className="text-3xl text-[#8B949E] dark:text-[#8B949E] light:text-[#9CA3AF] opacity-30">OpenAI</span>
                  <span className="text-3xl text-[#8B949E] dark:text-[#8B949E] light:text-[#9CA3AF] opacity-30">Google AI</span>
                  <span className="text-3xl text-[#8B949E] dark:text-[#8B949E] light:text-[#9CA3AF] opacity-30">Anthropic</span>
                  <span className="text-3xl text-[#8B949E] dark:text-[#8B949E] light:text-[#9CA3AF] opacity-30">Grok</span>
                  <span className="text-3xl text-[#8B949E] dark:text-[#8B949E] light:text-[#9CA3AF] opacity-30">WhatsApp</span>
                  <span className="text-3xl text-[#8B949E] dark:text-[#8B949E] light:text-[#9CA3AF] opacity-30">Instagram</span>
                  <span className="text-3xl text-[#8B949E] dark:text-[#8B949E] light:text-[#9CA3AF] opacity-30">Facebook</span>
                  <span className="text-3xl text-[#8B949E] dark:text-[#8B949E] light:text-[#9CA3AF] opacity-30">Telegram</span>
                  <span className="text-3xl text-[#8B949E] dark:text-[#8B949E] light:text-[#9CA3AF] opacity-30">LinkedIn</span>
                  <span className="text-3xl text-[#8B949E] dark:text-[#8B949E] light:text-[#9CA3AF] opacity-30">Supabase</span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Left to Right */}
          <div className="relative">
            <div className="flex gap-12 animate-scroll-left whitespace-nowrap">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-12 items-center">
                  <span className="text-3xl text-[#8B949E] dark:text-[#8B949E] light:text-[#9CA3AF] opacity-30">MySQL</span>
                  <span className="text-3xl text-[#8B949E] dark:text-[#8B949E] light:text-[#9CA3AF] opacity-30">PostgreSQL</span>
                  <span className="text-3xl text-[#8B949E] dark:text-[#8B949E] light:text-[#9CA3AF] opacity-30">Google Sheets</span>
                  <span className="text-3xl text-[#8B949E] dark:text-[#8B949E] light:text-[#9CA3AF] opacity-30">Airtable</span>
                  <span className="text-3xl text-[#8B949E] dark:text-[#8B949E] light:text-[#9CA3AF] opacity-30">REST API</span>
                  <span className="text-3xl text-[#8B949E] dark:text-[#8B949E] light:text-[#9CA3AF] opacity-30">Email</span>
                  <span className="text-3xl text-[#8B949E] dark:text-[#8B949E] light:text-[#9CA3AF] opacity-30">SMS</span>
                  <span className="text-3xl text-[#8B949E] dark:text-[#8B949E] light:text-[#9CA3AF] opacity-30">Voice API</span>
                  <span className="text-3xl text-[#8B949E] dark:text-[#8B949E] light:text-[#9CA3AF] opacity-30">Slack</span>
                  <span className="text-3xl text-[#8B949E] dark:text-[#8B949E] light:text-[#9CA3AF] opacity-30">Discord</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] mb-6 text-lg">
            Need a custom integration?
          </p>
          <Button 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="bg-[#222222] dark:bg-[#222222] light:bg-white backdrop-blur-md border border-[#70BEFA]/20 text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] hover:bg-[#70BEFA] px-8 py-6 rounded-xl shadow-xl hover:shadow-[#70BEFA]/20 transition-all group"
          >
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
