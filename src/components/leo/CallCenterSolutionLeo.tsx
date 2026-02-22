import { Bell, Globe, TrendingUp, Grid3x3 } from 'lucide-react';

const solutions = [
  {
    icon: Bell,
    title: 'Never miss a call',
    description: 'Never worry about shifting overnight shifts or peak period surges. Deliver availability and efficiency regardless of time or hotel occupancy.',
  },
  {
    icon: Globe,
    title: 'Speak any language',
    description: 'Break language barriers with natural conversations in over 40 languages.',
  },
  {
    icon: TrendingUp,
    title: 'Generate revenue',
    description: 'Drive higher conversion rates through 24/7 availability to take direct bookings in all major languages',
  },
  {
    icon: Grid3x3,
    title: 'Smart upselling',
    description: 'Smart upselling to hotel guests to increase Revenue per guest (RevPAR) from bookings and from selling additional ancillary services',
  },
];

export default function CallCenterSolutionLeo() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0A0A0A] dark:from-[#0A0A0A] light:from-white via-[#0D0D0D] dark:via-[#0D0D0D] light:via-[#F5F5F5] to-[#0F0F0F] dark:to-[#0F0F0F] light:to-[#FAFAFA] overflow-hidden transition-colors duration-300">
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0A0A0A] dark:from-[#0A0A0A] light:from-white to-transparent z-10" />
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#0F0F0F] dark:to-[#0F0F0F] light:to-[#FAFAFA] z-10" />
      
      {/* Dot Pattern Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(112, 190, 250, 0.3) 0.5px, transparent 0.5px)',
          backgroundSize: '4px 4px',
        }}
      />
      
      {/* Background Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#70BEFA]/10 rounded-full blur-[120px]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-6 max-w-4xl mx-auto leading-tight">
            Call centers don't operate effectively, costing hotels up to{' '}
            <span className="text-[#70BEFA]">$20,000 a month</span>{' '}
            – we solve that
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#70BEFA]/10 flex items-center justify-center group-hover:bg-[#70BEFA]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#70BEFA]" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
