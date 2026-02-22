'use client';

import { Clock, TrendingUp, Users, ArrowUp, ArrowDown, MessageCircle, Target, Smile } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for main charts
const conversationsData = [
  { name: 'Jan', conversations: 2.4, responseTime: 2.4 },
  { name: 'Feb', conversations: 2.8, responseTime: 2.28 },
  { name: 'Mar', conversations: 3.2, responseTime: 2.16 },
  { name: 'Apr', conversations: 3.6, responseTime: 2.04 },
  { name: 'May', conversations: 4.1, responseTime: 1.92 },
  { name: 'Jun', conversations: 4.5, responseTime: 1.8 },
];

const intentEmotionData = [
  { name: 'Jan', intentDetection: 72, emotionScore: 58 },
  { name: 'Feb', intentDetection: 76, emotionScore: 62 },
  { name: 'Mar', intentDetection: 81, emotionScore: 67 },
  { name: 'Apr', intentDetection: 85, emotionScore: 71 },
  { name: 'May', intentDetection: 89, emotionScore: 76 },
  { name: 'Jun', intentDetection: 93, emotionScore: 82 },
];

// Mini metrics data
const miniMetrics = [
  {
    title: 'Avg Response Time',
    value: '1.8s',
    change: '-25%',
    trend: 'down',
    data: [2.4, 2.28, 2.16, 2.04, 1.92, 1.8],
    color: '#70BEFA',
  },
  {
    title: 'Total Conversations',
    value: '52.8K',
    change: '+34%',
    trend: 'up',
    data: [38, 41, 44, 47, 50, 52.8],
    color: '#70BEFA',
  },
  {
    title: 'Resolution Rate',
    value: '94%',
    change: '+12%',
    trend: 'up',
    data: [82, 85, 88, 90, 92, 94],
    color: '#70BEFA',
  },
  {
    title: 'Active Chats',
    value: '18.2K',
    change: '+28%',
    trend: 'up',
    data: [12, 13.5, 15, 16.2, 17.1, 18.2],
    color: '#70BEFA',
  },
  {
    title: 'Avg Chat Duration',
    value: '3m 45s',
    change: '-18%',
    trend: 'down',
    data: [5.2, 4.8, 4.4, 4.1, 3.9, 3.75],
    color: '#70BEFA',
  },
  {
    title: 'Messages/Chat',
    value: '8.2',
    change: '+15%',
    trend: 'up',
    data: [6.8, 7.1, 7.4, 7.7, 8.0, 8.2],
    color: '#70BEFA',
  },
];

const bigMetrics = [
  {
    icon: MessageCircle,
    title: 'Intent Detection',
    value: '93%',
    description: 'Accurately detected customer intent and needs',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Smile,
    title: 'Emotion Score',
    value: '82%',
    description: 'Positive emotion detected in conversations',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Target,
    title: 'Buy Signal Level',
    value: '89%',
    description: 'Customer purchase intent and readiness',
    color: 'from-amber-500 to-amber-600',
  },
];

export default function AnalyticsDashboardLeo() {
  return (
    <section id="analytics" className="relative py-20 bg-gradient-to-b from-[#0A0A0A] dark:from-[#0A0A0A] light:from-white via-[#0D0D0D] dark:via-[#0D0D0D] light:via-[#F5F5F5] to-[#0F0F0F] dark:to-[#0F0F0F] light:to-[#FAFAFA] transition-colors duration-300">
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0A0A0A] dark:from-[#0A0A0A] light:from-white to-transparent" />
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#0F0F0F] dark:to-[#0F0F0F] light:to-[#FAFAFA]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-4">
            All Your AI Conversations, in One Dashboard
          </h2>
          <p className="text-lg text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] max-w-3xl mx-auto">
            Monitor your AI performance with real-time insights. Detect patterns, 
            measure satisfaction, and continuously optimize.
          </p>
        </div>

        {/* Main Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Daily Conversations vs Response Time */}
          <div className="bg-[#161B22] dark:bg-[#161B22] light:bg-white rounded-lg p-6 border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB]">
            <h3 className="text-sm text-[#8B949E] dark:text-[#8B949E] light:text-[#6B7280] mb-4">Daily Conversations vs Response Time</h3>
            <ResponsiveContainer width="100%" height={200}>
              <ComposedChart data={conversationsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#30363D" />
                <XAxis dataKey="name" stroke="#8B949E" style={{ fontSize: '12px' }} />
                <YAxis yAxisId="left" stroke="#8B949E" style={{ fontSize: '12px' }} />
                <YAxis yAxisId="right" orientation="right" stroke="#8B949E" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#161B22', border: '1px solid #30363D', borderRadius: '6px' }}
                  labelStyle={{ color: '#8B949E' }}
                />
                <Bar yAxisId="left" dataKey="conversations" fill="#70BEFA" radius={[4, 4, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="responseTime" stroke="#F97316" strokeWidth={2} dot={{ fill: '#F97316', r: 3 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Intent Detection vs Emotion Score */}
          <div className="bg-[#161B22] dark:bg-[#161B22] light:bg-white rounded-lg p-6 border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB]">
            <h3 className="text-sm text-[#8B949E] dark:text-[#8B949E] light:text-[#6B7280] mb-4">Intent Detection vs Emotion Score</h3>
            <ResponsiveContainer width="100%" height={200}>
              <ComposedChart data={intentEmotionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#30363D" />
                <XAxis dataKey="name" stroke="#8B949E" style={{ fontSize: '12px' }} />
                <YAxis yAxisId="left" stroke="#8B949E" style={{ fontSize: '12px' }} />
                <YAxis yAxisId="right" orientation="right" stroke="#8B949E" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#161B22', border: '1px solid #30363D', borderRadius: '6px' }}
                  labelStyle={{ color: '#8B949E' }}
                />
                <Bar yAxisId="left" dataKey="intentDetection" fill="#70BEFA" radius={[4, 4, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="emotionScore" stroke="#10B981" strokeWidth={2} dot={{ fill: '#10B981', r: 3 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Mini Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {miniMetrics.map((metric, index) => (
            <div key={index} className="bg-[#161B22] dark:bg-[#161B22] light:bg-white rounded-lg p-4 border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB]">
              <div className="text-xs text-[#8B949E] dark:text-[#8B949E] light:text-[#6B7280] mb-1">{metric.title}</div>
              <div className="text-xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-1">{metric.value}</div>
              <div className={`flex items-center gap-1 mb-3 ${metric.trend === 'up' ? 'text-green-400' : 'text-orange-400'}`}>
                {metric.trend === 'up' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                <span className="text-xs">{metric.change}</span>
              </div>
              <ResponsiveContainer width="100%" height={40}>
                <LineChart data={metric.data.map((value, i) => ({ value }))}>
                  <Line type="monotone" dataKey="value" stroke={metric.color} strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ))}
        </div>

        {/* Big Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {bigMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-[#161B22] dark:bg-[#161B22] light:bg-white rounded-lg p-6 border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB]"
              >
                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <div className="text-sm text-[#8B949E] dark:text-[#8B949E] light:text-[#6B7280] mb-2">{metric.title}</div>

                {/* Value */}
                <div className="text-3xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-2">{metric.value}</div>

                {/* Description */}
                <p className="text-sm text-[#8B949E] dark:text-[#8B949E] light:text-[#6B7280]">{metric.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
