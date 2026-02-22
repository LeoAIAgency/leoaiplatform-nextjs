import { Sparkles, Calendar, ShoppingCart, Settings, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: 'Personalized recommendations',
    description: 'Suggest rooms, amenities, and experiences tailored to preferences',
  },
  {
    icon: Calendar,
    title: 'Booking assistance',
    description: 'Answer questions, recommend services, and process payments',
  },
  {
    icon: ShoppingCart,
    title: 'Order management',
    description: 'Handle room service with upselling and daily specials',
  },
  {
    icon: Settings,
    title: 'Internal operations',
    description: 'Notify employees, send announcements, provide scheduling',
  },
  {
    icon: Clock,
    title: '24/7 Concierge',
    description: 'Always-on support for questions, directions, and recommendations',
  },
  {
    icon: MessageSquare,
    title: 'Guest feedback',
    description: 'Automatically collect and summarize guest reviews',
  },
];

export default function HospitalityCaseStudyLeo() {
  return (
    <section id="case-studies" className="relative py-20 bg-gradient-to-b from-[#0F0F0F] dark:from-[#0F0F0F] light:from-[#FAFAFA] via-[#0D0D0D] dark:via-[#0D0D0D] light:via-[#F5F5F5] to-[#0A0A0A] dark:to-[#0A0A0A] light:to-white transition-colors duration-300">
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0F0F0F] dark:from-[#0F0F0F] light:from-[#FAFAFA] to-transparent" />
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#0A0A0A] dark:to-[#0A0A0A] light:to-white" />
      
      {/* Background Gradient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#70BEFA]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#70BEFA]/5 rounded-full blur-[100px]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-6">
            AI Agents for Hospitality
          </h2>
          <p className="text-lg md:text-xl text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
            AI keeps hospitality <span className="text-[#70BEFA]">multilingual</span>, <span className="text-[#70BEFA]">24/7</span> and <span className="text-[#70BEFA]">prompt</span>. 
            Hotels and restaurants are expanding their services with AI agents.
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Benefits List */}
          <div>
            <h3 className="text-xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-6">
              How AI agents benefit Hospitality
            </h3>
            <div className="space-y-5">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 group"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#70BEFA]/10 rounded-lg flex items-center justify-center group-hover:bg-[#70BEFA]/20 transition-colors">
                        <Icon className="w-5 h-5 text-[#70BEFA]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h4 className="text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-[#8B949E] dark:text-[#8B949E] light:text-[#6B7280] leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Statistics */}
          <div className="space-y-8">
            {/* Stat 1 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#70BEFA] to-transparent rounded-full" />
              <div className="pl-6">
                <div className="text-6xl md:text-7xl text-[#70BEFA] mb-3 tracking-tight">
                  73%
                </div>
                <p className="text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] text-lg mb-2">
                  of travelers choose hotels with self-service technology
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#70BEFA] to-transparent rounded-full" />
              <div className="pl-6">
                <div className="text-6xl md:text-7xl text-[#70BEFA] mb-3 tracking-tight">
                  65%
                </div>
                <p className="text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] text-lg mb-2">
                  of consumers would use AI to book flights
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="pt-4">
              <p className="text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] leading-relaxed mb-6">
                AI agents can reserve tables, book hotel rooms, suggest nearby activities, 
                and personalize food recommendations. With up-to-date information, they save 
                thousands of employee hours every month.
              </p>
              
              {/* Key Impact Statement */}
              <p className="text-[#70BEFA] leading-relaxed">
                Hotels using AI agents report up to 40% reduction in response time and 
                significant improvements in guest satisfaction scores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
