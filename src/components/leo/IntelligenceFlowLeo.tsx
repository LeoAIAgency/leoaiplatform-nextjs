import { MessageSquare, Target, Heart, TrendingUp, Zap, Lightbulb, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'User Message',
    description: 'Customer initiates conversation',
  },
  {
    icon: Target,
    title: 'Intent Detection',
    description: 'AI identifies user intent',
  },
  {
    icon: Heart,
    title: 'Sentiment Analysis',
    description: 'Emotion score calculated',
  },
  {
    icon: TrendingUp,
    title: 'Behavior Mapping',
    description: 'User patterns analyzed',
  },
  {
    icon: Zap,
    title: 'AI Action',
    description: 'Automated response triggered',
  },
  {
    icon: Lightbulb,
    title: 'Insight Generation',
    description: 'Data collected for optimization',
  },
];

export default function IntelligenceFlowLeo() {
  return (
    <section id="intelligence" className="relative py-20 bg-gradient-to-b from-[#0A0A0A] dark:from-[#0A0A0A] light:from-white via-[#0D0D0D] dark:via-[#0D0D0D] light:via-[#F5F5F5] to-[#0F0F0F] dark:to-[#0F0F0F] light:to-[#FAFAFA] transition-colors duration-300">
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0A0A0A] dark:from-[#0A0A0A] light:from-white to-transparent" />
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#0F0F0F] dark:to-[#0F0F0F] light:to-[#FAFAFA]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-4">
            Understand, Predict, and Respond — Intelligently
          </h2>
          <p className="text-lg text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] max-w-3xl mx-auto">
            Smart Agent's core AI stack analyzes user intent, emotion, and context — 
            then triggers the right workflow, in real time.
          </p>
        </div>

        {/* Flow Steps - Desktop Horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-[#70BEFA]/20 z-0" />
            
            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {/* Icon Circle */}
                    <div className="relative z-10 w-24 h-24 mx-auto bg-[#161616] dark:bg-[#161616] light:bg-white border-4 border-[#70BEFA]/20 rounded-full flex items-center justify-center mb-4 hover:border-[#70BEFA] hover:shadow-lg transition-all">
                      <Icon className="w-10 h-10 text-[#70BEFA]" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-center text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] text-sm mb-2">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-center text-xs text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] leading-relaxed">
                      {step.description}
                    </p>

                    {/* Arrow (not on last item) */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-12 -right-2 z-30 -translate-y-1/2">
                        <ArrowRight className="w-5 h-5 text-[#70BEFA]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Flow Steps - Mobile Vertical */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="flex items-start gap-4 bg-[#161616] dark:bg-[#161616] light:bg-white rounded-lg p-6 shadow-sm border border-[#222222] dark:border-[#222222] light:border-[#E5E7EB]">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-[#70BEFA]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#70BEFA]" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-1">{step.title}</h3>
                    <p className="text-sm text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280]">{step.description}</p>
                  </div>
                </div>

                {/* Arrow (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-3">
                    <div className="w-6 h-6 border-2 border-[#70BEFA] border-t-0 border-l-0 rotate-45" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
