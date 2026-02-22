import { Brain, MessageCircle, Mic, Calendar, Headphones, Network, Check, Clock, User, TrendingUp, BookOpen, Database, BarChart3, Zap, Award, Phone, Globe, Send, MessageSquare, Hash, ShoppingCart, DollarSign } from 'lucide-react';

const agents = [
  {
    id: 'smart-agent',
    number: '01',
    name: 'Smart Agent',
    icon: Brain,
    description: 'Centralized AI brain that manages and optimizes all your agents',
    color: 'from-purple-500 to-purple-600',
    visualType: 'brain',
  },
  {
    id: 'customer-support',
    number: '02',
    name: 'Customer Support AI Agent',
    icon: MessageCircle,
    description: '24/7 automated support that answers recurring questions instantly',
    color: 'from-blue-500 to-blue-600',
    visualType: 'support',
  },
  {
    id: 'voice-ai',
    number: '03',
    name: 'Voice AI Agent',
    icon: Mic,
    description: 'Voice conversation analysis and phone call automation',
    color: 'from-green-500 to-green-600',
    visualType: 'voice',
  },
  {
    id: 'sales-ai',
    number: '04',
    name: 'Call Center Sales AI Agent',
    icon: Phone,
    description: 'AI-powered sales conversations that convert calls into purchases with human-like interactions and product recommendations',
    color: 'from-amber-500 to-amber-600',
    visualType: 'sales',
  },
  {
    id: 'digital-concierge',
    number: '05',
    name: 'Digital Concierge AI Agent',
    icon: Headphones,
    description: 'Personalized recommendations and guidance for guests',
    color: 'from-orange-500 to-orange-600',
    visualType: 'concierge',
  },
  {
    id: 'omnichannel',
    number: '06',
    name: 'Omnichannel AI Agent',
    icon: Network,
    description: 'Unified management across Call Center, Web, WhatsApp, Telegram, Messenger, Instagram, Slack, CRM',
    color: 'from-teal-500 to-teal-600',
    visualType: 'omnichannel',
  },
  {
    id: 'reservation-management',
    number: '07',
    name: 'Reservation Management AI Agent',
    icon: BookOpen,
    description: 'Managing all aspects of booking creation queries, transforming complex reservation processes into smooth, efficient interactions.',
    color: 'from-red-500 to-red-600',
    visualType: 'reservation-management',
  },
  {
    id: 'knowledge-base',
    number: '08',
    name: 'Dynamic Knowledge Base AI Agent',
    icon: Database,
    description: 'Create an evolving, intelligent information system that learns and adapts to your specific property\'s unique characteristics.',
    color: 'from-indigo-500 to-indigo-600',
    visualType: 'knowledge-base',
  },
  {
    id: 'performance-analytics',
    number: '09',
    name: 'Agent Performance Analytics AI Agent',
    icon: BarChart3,
    description: 'Optimize your customer agent and customer performance with comprehensive analytics and insights.',
    color: 'from-pink-500 to-pink-600',
    visualType: 'performance-analytics',
  },
];

// Visual Component Renderers
const BrainVisual = () => (
  <div className="relative h-32 flex items-center justify-center">
    {/* Central Brain Icon */}
    <div className="relative z-10">
      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
        <Brain className="w-7 h-7 text-white" />
      </div>
    </div>
    
    {/* Connecting Nodes */}
    {[...Array(6)].map((_, i) => {
      const angle = (i * 60) * (Math.PI / 180);
      const radius = 45;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      return (
        <div
          key={i}
          className="absolute w-2.5 h-2.5 bg-purple-500/30 rounded-full"
          style={{ 
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      );
    })}
  </div>
);

const SupportVisual = () => (
  <div className="h-32 flex flex-col justify-center space-y-2">
    {/* Support Tickets */}
    {[
      { status: 'resolved', text: 'Order status inquiry' },
      { status: 'resolved', text: 'Product availability' },
      { status: 'active', text: 'Shipping information' },
    ].map((ticket, i) => (
      <div key={i} className="flex items-center gap-2 bg-[#161B22] dark:bg-[#161B22] light:bg-[#F3F4F6] p-2 rounded border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB]">
        <div className={`w-1.5 h-1.5 rounded-full ${ticket.status === 'resolved' ? 'bg-green-500' : 'bg-blue-500'}`} />
        <span className="text-xs text-[#8B949E] dark:text-[#8B949E] light:text-[#6B7280] flex-1">{ticket.text}</span>
        {ticket.status === 'resolved' && <Check className="w-3 h-3 text-green-500" />}
      </div>
    ))}
  </div>
);

const VoiceVisual = () => (
  <div className="h-32 flex items-center justify-center gap-1">
    {/* Voice Waveform */}
    {[4, 8, 6, 10, 7, 12, 9, 11, 6, 8, 5, 9, 7, 10, 8].map((height, i) => (
      <div
        key={i}
        className="w-1.5 bg-gradient-to-t from-green-500/50 to-green-500 rounded-full transition-all"
        style={{ height: `${height * 3}px` }}
      />
    ))}
  </div>
);

const SalesVisual = () => (
  <div className="h-32 flex items-center justify-center gap-3">
    {/* Sales Metrics */}
    {[
      { icon: Phone, value: '95%', label: 'Call Conv.', color: 'amber' },
      { icon: ShoppingCart, value: '1.2x', label: 'Avg. Sales', color: 'amber' },
      { icon: DollarSign, value: '+45%', label: 'Revenue', color: 'amber' },
    ].map((metric, i) => {
      const Icon = metric.icon;
      return (
        <div key={i} className="text-center flex-1">
          <div className={`w-11 h-11 bg-gradient-to-br from-${metric.color}-500 to-${metric.color}-600 rounded-xl flex items-center justify-center mb-1.5 mx-auto`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div className="text-sm text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-0.5">{metric.value}</div>
          <div className="text-xs text-[#8B949E] dark:text-[#8B949E] light:text-[#6B7280]">{metric.label}</div>
        </div>
      );
    })}
  </div>
);

const ConciergeVisual = () => (
  <div className="h-32 flex flex-col justify-center space-y-2">
    {/* Recommendation Items */}
    {[
      { name: 'Restaurant', status: 'Recommended' },
      { name: 'Spa', status: 'Recommended' },
      { name: 'Tour', status: 'Recommended' },
    ].map((item, i) => (
      <div key={i} className="flex items-center gap-3 bg-[#161B22] dark:bg-[#161B22] light:bg-[#F3F4F6] p-2 rounded border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB]">
        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
        <span className="text-xs text-[#8B949E] dark:text-[#8B949E] light:text-[#6B7280] flex-1">{item.name}</span>
        <TrendingUp className="w-3 h-3 text-orange-400" />
      </div>
    ))}
  </div>
);

const OmnichannelVisual = () => (
  <div className="h-32 flex items-center justify-center">
    {/* Channel Icons Grid - 2 rows x 4 columns */}
    <div className="grid grid-cols-4 gap-4">
      {[
        { name: 'Call Center', icon: Phone, color: 'from-cyan-500 to-cyan-600' },
        { name: 'Web', icon: Globe, color: 'from-blue-500 to-blue-600' },
        { name: 'WhatsApp', icon: MessageCircle, color: 'from-green-500 to-green-600' },
        { name: 'Telegram', icon: Send, color: 'from-sky-500 to-sky-600' },
        { name: 'Messenger', icon: MessageSquare, color: 'from-blue-400 to-blue-500' },
        { name: 'Instagram', icon: MessageCircle, color: 'from-pink-500 to-purple-600' },
        { name: 'Slack', icon: Hash, color: 'from-purple-500 to-purple-600' },
        { name: 'CRM', icon: Database, color: 'from-orange-500 to-orange-600', isMicrosoft: true },
      ].map((channel, i) => {
        const Icon = channel.icon;
        return (
          <div key={i} className="flex items-center justify-center">
            {channel.isMicrosoft ? (
              // Microsoft Dynamics CRM Logo
              <div className={`w-10 h-10 bg-gradient-to-br ${channel.color} rounded-lg flex items-center justify-center relative`}>
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-1.5 h-1.5 bg-white rounded-sm" />
                  <div className="w-1.5 h-1.5 bg-white rounded-sm" />
                  <div className="w-1.5 h-1.5 bg-white rounded-sm" />
                  <div className="w-1.5 h-1.5 bg-white rounded-sm" />
                </div>
              </div>
            ) : (
              <div className={`w-10 h-10 bg-gradient-to-br ${channel.color} rounded-lg flex items-center justify-center`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
);

const ReservationManagementVisual = () => (
  <div className="h-32 flex flex-col justify-center space-y-2">
    {/* Reservation Steps */}
    {[
      { step: 'Check-in', status: 'confirmed', icon: Check },
      { step: 'Room Type', status: 'processing', icon: Clock },
      { step: 'Payment', status: 'pending', icon: User },
    ].map((item, i) => {
      const Icon = item.icon;
      return (
        <div key={i} className="flex items-center gap-3 bg-[#161B22] dark:bg-[#161B22] light:bg-[#F3F4F6] p-2 rounded border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB]">
          <div className={`w-1.5 h-1.5 rounded-full ${
            item.status === 'confirmed' ? 'bg-green-500' : 
            item.status === 'processing' ? 'bg-red-500' : 'bg-yellow-500'
          }`} />
          <span className="text-xs text-[#8B949E] dark:text-[#8B949E] light:text-[#6B7280] flex-1">{item.step}</span>
          <Icon className={`w-3 h-3 ${
            item.status === 'confirmed' ? 'text-green-500' : 
            item.status === 'processing' ? 'text-red-400' : 'text-yellow-400'
          }`} />
        </div>
      );
    })}
  </div>
);

const KnowledgeBaseVisual = () => (
  <div className="h-32 flex flex-col justify-center space-y-2">
    {/* Knowledge Base Items */}
    {[
      { topic: 'Property Info', articles: '150+' },
      { topic: 'Guest Services', articles: '89+' },
      { topic: 'Policies', articles: '45+' },
    ].map((item, i) => (
      <div key={i} className="flex items-center gap-3 bg-[#161B22] dark:bg-[#161B22] light:bg-[#F3F4F6] p-2 rounded border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB]">
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
        <span className="text-xs text-[#8B949E] dark:text-[#8B949E] light:text-[#6B7280] flex-1">{item.topic}</span>
        <span className="text-xs text-indigo-400">{item.articles}</span>
      </div>
    ))}
  </div>
);

const PerformanceAnalyticsVisual = () => (
  <div className="h-32 flex items-center justify-center gap-3">
    {/* Analytics Metrics */}
    {[
      { value: '+35%', label: 'improvement', icon: TrendingUp },
      { value: '20+', label: 'metrics', icon: BarChart3 },
      { value: '24/7', label: 'tracking', icon: Zap },
    ].map((metric, i) => {
      const Icon = metric.icon;
      return (
        <div key={i} className="text-center flex-1">
          <div className="w-11 h-11 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-1.5 mx-auto">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div className="text-sm text-pink-400 mb-0.5">{metric.value}</div>
          <div className="text-xs text-[#8B949E] dark:text-[#8B949E] light:text-[#6B7280]">{metric.label}</div>
        </div>
      );
    })}
  </div>
);

export default function AgentsGridLeo() {
  const renderVisual = (visualType: string) => {
    switch (visualType) {
      case 'brain': return <BrainVisual />;
      case 'support': return <SupportVisual />;
      case 'voice': return <VoiceVisual />;
      case 'sales': return <SalesVisual />;
      case 'concierge': return <ConciergeVisual />;
      case 'omnichannel': return <OmnichannelVisual />;
      case 'reservation-management': return <ReservationManagementVisual />;
      case 'knowledge-base': return <KnowledgeBaseVisual />;
      case 'performance-analytics': return <PerformanceAnalyticsVisual />;
      default: return null;
    }
  };

  return (
    <section id="agents" className="relative py-20 bg-gradient-to-b from-[#0F0F0F] dark:from-[#0F0F0F] light:from-[#FAFAFA] via-[#0D0D0D] dark:via-[#0D0D0D] light:via-[#F5F5F5] to-[#0A0A0A] dark:to-[#0A0A0A] light:to-white transition-colors duration-300">
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0F0F0F] dark:from-[#0F0F0F] light:from-[#FAFAFA] to-transparent" />
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#0A0A0A] dark:to-[#0A0A0A] light:to-white" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-4">
            Meet the AI Agents That Power the Smart Platform
          </h2>
          <p className="text-lg text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] max-w-3xl mx-auto">
            Each AI agent is specialized for specific tasks. Deploy individually or combine them for maximum impact.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => {
            return (
              <div
                key={agent.id}
                className="group bg-[#0F1419] dark:bg-[#0F1419] light:bg-white rounded-lg border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB] hover:border-[#70BEFA]/50 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Visual Section */}
                <div className="p-5 border-b border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB]">
                  {renderVisual(agent.visualType)}
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Number + Name */}
                  <h3 className="text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-2">
                    <span className="text-[#70BEFA] mr-2">{agent.number}</span>
                    {agent.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#8B949E] dark:text-[#8B949E] light:text-[#6B7280] leading-relaxed">
                    {agent.description}
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
