'use client';

import { Network, BarChart3, MessageCircle, Bot, Globe, Zap, MessageSquare, Mail, Box, Asterisk, Ship, MoreHorizontal, Plug, Sparkles, Database, Webhook, ArrowRight, Layout, Settings, PieChart } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
const imgLeoAiLogo = "/images/logo.png";
import { useState } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const features = [
  {
    number: '01',
    icon: Network,
    title: 'Centralized Management',
    description: 'One platform to control all your AI agents.',
    visualType: 'network',
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track intent, sentiment, and performance instantly.',
    visualType: 'analytics',
  },
  {
    number: '03',
    icon: MessageCircle,
    title: 'Omnichannel Experience',
    description: 'Engage customers across WhatsApp, Web, and Instagram.',
    visualType: 'channels',
  },
  {
    number: '04',
    icon: Plug,
    title: 'Seamless Integration',
    description: 'Works seamlessly with your CRM, ERP, and all other systems.',
    visualType: 'integration',
    details: [
      'API & Webhook integrations',
      'Real-time data synchronization',
      'Custom workflow automation',
      'Database connections',
      'Third-party apps (Salesforce, HubSpot, Zendesk)',
      'Secure data transfer'
    ]
  },
  {
    number: '05',
    icon: Sparkles,
    title: 'No-Code Platform',
    description: 'Ready to deploy in minutes without technical knowledge.',
    visualType: 'nocode',
    details: [
      'Zero technical knowledge required',
      'Drag & drop interface',
      '5-minute setup',
      'Instant deployment',
      'Ready-made templates',
      'Visual workflow builder'
    ]
  },
  {
    number: '06',
    icon: PieChart,
    title: 'Cost Efficiency',
    description: 'Save up to 40% compared to traditional methods.',
    visualType: 'savings',
    details: [
      '40% operational cost reduction',
      '40% faster response times',
      '80% automation rate',
      '24/7 uninterrupted service',
      'Minimal IT resource needs',
      '3-month ROI guarantee'
    ]
  },
];

// Chart data for different analytics tabs - with more dynamic variations
const intentData = [
  { value: 85 }, { value: 88 }, { value: 86 }, { value: 90 }, 
  { value: 89 }, { value: 91 }, { value: 88 }, { value: 92 },
  { value: 91 }, { value: 93 }, { value: 92 }, { value: 94 }
];

const sentimentData = [
  { value: 90 }, { value: 87 }, { value: 89 }, { value: 85 }, 
  { value: 88 }, { value: 86 }, { value: 84 }, { value: 87 },
  { value: 85 }, { value: 88 }, { value: 86 }, { value: 87 }
];

const performanceData = [
  { value: 97 }, { value: 99 }, { value: 98 }, { value: 96 }, 
  { value: 98 }, { value: 97 }, { value: 99 }, { value: 98 },
  { value: 97 }, { value: 99 }, { value: 98 }, { value: 99 }
];

export default function FeaturesSectionLeo() {
  const [activeTab, setActiveTab] = useState<'intent' | 'sentiment' | 'performance'>('intent');

  const tabs = [
    { id: 'intent' as const, label: 'Intent', value: '94%', data: intentData, color: '#70BEFA' },
    { id: 'sentiment' as const, label: 'Sentiment', value: '87%', data: sentimentData, color: '#A78BFA' },
    { id: 'performance' as const, label: 'Performance', value: '99%', data: performanceData, color: '#34D399' },
  ];

  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <section id="features" className="relative pt-12 pb-20 bg-gradient-to-b from-[#0F0F0F] dark:from-[#0F0F0F] light:from-[#FAFAFA] via-[#0D0D0D] dark:via-[#0D0D0D] light:via-[#F5F5F5] to-[#0A0A0A] dark:to-[#0A0A0A] light:to-white transition-colors duration-300">
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0F0F0F] dark:from-[#0F0F0F] light:from-[#FAFAFA] to-transparent" />
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#0A0A0A] dark:to-[#0A0A0A] light:to-white" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-4">
            A Unified Platform to Power Every AI Agent
          </h2>
          <p className="text-lg text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] max-w-3xl mx-auto">
            Manage, analyze, and optimize all your AI Agents from a single dashboard. 
            Gain insights, automate workflows, and connect every customer touchpoint.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0D1117] dark:from-[#0D1117] light:from-white to-[#161B22] dark:to-[#161B22] light:to-[#F9FAFB] rounded-xl border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB] overflow-hidden hover:border-[#70BEFA]/30 transition-all group"
              >
                {/* Visual Header */}
                <div className="relative h-48 bg-gradient-to-br from-[#161B22] dark:from-[#161B22] light:from-[#F9FAFB] to-[#0D1117] dark:to-[#0D1117] light:to-white border-b border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB] overflow-hidden">
                  
                  {/* Feature 1: Centralized Management - Network/Dashboard Visual */}
                  {feature.visualType === 'network' && (
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="relative w-full h-full">
                        {/* Surrounding App Icons - Faded in Boxes */}
                        {/* Top Row */}
                        <div className="absolute top-4 left-12 w-11 h-11 bg-[#1C1C1E] dark:bg-[#1C1C1E] light:bg-[#F3F4F6] border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB] rounded-lg flex items-center justify-center opacity-40">
                          <Box className="w-6 h-6 text-[#6E7681] dark:text-[#6E7681] light:text-[#9CA3AF]" />
                        </div>
                        
                        <div className="absolute top-4 right-12 w-11 h-11 bg-[#1C1C1E] dark:bg-[#1C1C1E] light:bg-[#F3F4F6] border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB] rounded-lg flex items-center justify-center opacity-40">
                          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#6E7681] dark:text-[#6E7681] light:text-[#9CA3AF]">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        
                        {/* Middle Row */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 w-11 h-11 bg-[#1C1C1E] dark:bg-[#1C1C1E] light:bg-[#F3F4F6] border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB] rounded-lg flex items-center justify-center opacity-40">
                          <Mail className="w-6 h-6 text-[#6E7681] dark:text-[#6E7681] light:text-[#9CA3AF]" />
                        </div>
                        
                        <div className="absolute top-1/2 -translate-y-1/2 right-4 w-11 h-11 bg-[#1C1C1E] dark:bg-[#1C1C1E] light:bg-[#F3F4F6] border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB] rounded-lg flex items-center justify-center opacity-40">
                          <Ship className="w-6 h-6 text-[#6E7681] dark:text-[#6E7681] light:text-[#9CA3AF]" />
                        </div>
                        
                        {/* Bottom Row */}
                        <div className="absolute bottom-4 left-12 w-11 h-11 bg-[#1C1C1E] dark:bg-[#1C1C1E] light:bg-[#F3F4F6] border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB] rounded-lg flex items-center justify-center opacity-40">
                          <Asterisk className="w-6 h-6 text-[#6E7681] dark:text-[#6E7681] light:text-[#9CA3AF]" />
                        </div>
                        
                        <div className="absolute bottom-4 right-12 w-11 h-11 bg-[#1C1C1E] dark:bg-[#1C1C1E] light:bg-[#F3F4F6] border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB] rounded-lg flex items-center justify-center opacity-40">
                          <div className="w-6 h-6 rounded flex items-center justify-center">
                            <span className="text-sm text-[#6E7681] dark:text-[#6E7681] light:text-[#9CA3AF]">N</span>
                          </div>
                        </div>
                        
                        {/* Central Leo AI Logo - Highlighted (same size as channel icons) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="w-16 h-16 bg-[#1C1C1E] dark:bg-[#1C1C1E] light:bg-white border-2 border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB] rounded-xl flex items-center justify-center p-3 shadow-xl">
                            <img 
                              src={imgLeoAiLogo} 
                              alt="Leo AI" 
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Feature 2: Real-Time Analytics - Interactive Chart with Tabs */}
                  {feature.visualType === 'analytics' && (
                    <div className="absolute inset-0 p-4">
                      <div className="bg-[#0D1117]/80 dark:bg-[#0D1117]/80 light:bg-white/80 backdrop-blur-sm rounded-lg border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB] h-full flex flex-col">
                        {/* Chart Header */}
                        <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB]">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#70BEFA] rounded-full animate-pulse" />
                            <span className="text-xs text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280]">Live Analytics</span>
                          </div>
                          <MoreHorizontal className="w-4 h-4 text-[#70BEFA]" />
                        </div>
                        
                        {/* Line Chart Area */}
                        <div className="flex-1 px-4 py-2">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={currentTab.data}>
                              <Line 
                                type="monotone" 
                                dataKey="value" 
                                stroke={currentTab.color}
                                strokeWidth={2}
                                dot={false}
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                        
                        {/* Tabs */}
                        <div className="grid grid-cols-3 border-t border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB] overflow-hidden rounded-b-lg">
                          {tabs.map((tab, idx) => (
                            <button
                              key={tab.id}
                              onClick={() => setActiveTab(tab.id)}
                              className={`
                                text-center py-3 transition-all cursor-pointer
                                ${idx !== 0 ? 'border-l border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB]' : ''}
                                ${activeTab === tab.id ? 'bg-[#161B22] dark:bg-[#161B22] light:bg-[#F3F4F6]' : 'hover:bg-[#161B22]/50 dark:hover:bg-[#161B22]/50 light:hover:bg-[#F3F4F6]/50'}
                              `}
                            >
                              <div className={`text-xs mb-1 transition-colors ${
                                activeTab === tab.id ? 'text-[#70BEFA]' : 'text-[#6E7681] dark:text-[#6E7681] light:text-[#9CA3AF]'
                              }`}>
                                {tab.label}
                              </div>
                              <div className={`text-xs transition-colors ${
                                activeTab === tab.id ? 'text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A]' : 'text-[#6E7681] dark:text-[#6E7681] light:text-[#9CA3AF]'
                              }`}>
                                {tab.value}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Feature 3: Omnichannel - Channel Logos */}
                  {feature.visualType === 'channels' && (
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="flex flex-col items-center gap-6">
                        {/* Channel Icons Row */}
                        <div className="flex gap-6 items-center">
                          {/* WhatsApp */}
                          <div className="relative">
                            <div className="w-16 h-16 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl flex items-center justify-center">
                              <MessageSquare className="w-8 h-8 text-[#25D366]" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#25D366] rounded-full border-2 border-[#161B22] dark:border-[#161B22] light:border-white" />
                          </div>
                          
                          {/* Instagram */}
                          <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#E1306C]/10 to-[#FD1D1D]/10 border border-[#E1306C]/30 rounded-xl flex items-center justify-center">
                              <MessageCircle className="w-8 h-8 text-[#E1306C]" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#E1306C] rounded-full border-2 border-[#161B22] dark:border-[#161B22] light:border-white" />
                          </div>
                          
                          {/* Web */}
                          <div className="relative">
                            <div className="w-16 h-16 bg-[#70BEFA]/10 border border-[#70BEFA]/30 rounded-xl flex items-center justify-center">
                              <Globe className="w-8 h-8 text-[#70BEFA]" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#70BEFA] rounded-full border-2 border-[#161B22] dark:border-[#161B22] light:border-white" />
                          </div>
                        </div>
                        
                        {/* Unified Platform Label */}
                        <div className="flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-[#70BEFA]" />
                          <span className="text-xs text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280]">Unified Platform</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Feature 4: Seamless Integration - API/System Connections */}
                  {feature.visualType === 'integration' && (
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="relative w-full h-full">
                        {/* Integration Flow Visual */}
                        <div className="flex items-center justify-center h-full gap-3">
                          {/* Left: External Systems */}
                          <div className="flex flex-col gap-2">
                            <div className="w-10 h-10 bg-[#1C1C1E] dark:bg-[#1C1C1E] light:bg-[#F3F4F6] border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB] rounded-lg flex items-center justify-center opacity-60">
                              <Database className="w-5 h-5 text-[#6E7681] dark:text-[#6E7681] light:text-[#9CA3AF]" />
                            </div>
                            <div className="w-10 h-10 bg-[#1C1C1E] dark:bg-[#1C1C1E] light:bg-[#F3F4F6] border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB] rounded-lg flex items-center justify-center opacity-60">
                              <Box className="w-5 h-5 text-[#6E7681] dark:text-[#6E7681] light:text-[#9CA3AF]" />
                            </div>
                            <div className="w-10 h-10 bg-[#1C1C1E] dark:bg-[#1C1C1E] light:bg-[#F3F4F6] border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB] rounded-lg flex items-center justify-center opacity-60">
                              <Globe className="w-5 h-5 text-[#6E7681] dark:text-[#6E7681] light:text-[#9CA3AF]" />
                            </div>
                          </div>

                          {/* Center: Connection Hub with animated pulse */}
                          <div className="relative flex items-center gap-2">
                            {/* Connection lines */}
                            <div className="w-8 h-px bg-gradient-to-r from-[#70BEFA]/50 to-[#70BEFA]" />
                            
                            <div className="relative">
                              <div className="w-14 h-14 bg-[#70BEFA]/10 border-2 border-[#70BEFA]/50 rounded-xl flex items-center justify-center animate-pulse">
                                <Plug className="w-7 h-7 text-[#70BEFA]" />
                              </div>
                              {/* Pulse rings */}
                              <div className="absolute inset-0 rounded-xl border-2 border-[#70BEFA]/30 animate-ping" />
                            </div>
                            
                            <div className="w-8 h-px bg-gradient-to-l from-[#70BEFA]/50 to-[#70BEFA]" />
                          </div>

                          {/* Right: Leo AI Platform */}
                          <div className="w-12 h-12 bg-[#1C1C1E] dark:bg-[#1C1C1E] light:bg-white border-2 border-[#70BEFA] rounded-xl flex items-center justify-center p-2">
                            <img 
                              src={imgLeoAiLogo} 
                              alt="Leo AI" 
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>

                        {/* Badge */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                          <div className="flex items-center gap-1.5 bg-[#0D1117]/80 dark:bg-[#0D1117]/80 light:bg-white/80 backdrop-blur-sm border border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB] rounded-full px-3 py-1">
                            <Webhook className="w-3 h-3 text-[#70BEFA]" />
                            <span className="text-xs text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280]">API & Webhooks</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Feature 5: No-Code Platform - 3 Icons with Tooltips */}
                  {feature.visualType === 'nocode' && (
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <TooltipProvider delayDuration={200}>
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* 3 Icons with Arrows Flow */}
                          <div className="flex items-center gap-4">
                            {/* Icon 1: Visual Editor */}
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="w-14 h-14 bg-[#70BEFA]/10 border border-[#70BEFA]/30 rounded-xl flex items-center justify-center cursor-pointer hover:bg-[#70BEFA]/20 hover:border-[#70BEFA]/50 transition-all">
                                  <Layout className="w-7 h-7 text-[#70BEFA]" />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent side="top" className="bg-[#1C1C1E] dark:bg-[#1C1C1E] light:bg-white border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB]">
                                <p className="text-xs text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A]">Visual editor</p>
                              </TooltipContent>
                            </Tooltip>

                            {/* Arrow */}
                            <ArrowRight className="w-5 h-5 text-[#70BEFA]/40" />

                            {/* Icon 2: Integrated Tools */}
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="w-14 h-14 bg-[#70BEFA]/10 border border-[#70BEFA]/30 rounded-xl flex items-center justify-center cursor-pointer hover:bg-[#70BEFA]/20 hover:border-[#70BEFA]/50 transition-all">
                                  <Settings className="w-7 h-7 text-[#70BEFA]" />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent side="top" className="bg-[#1C1C1E] dark:bg-[#1C1C1E] light:bg-white border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB]">
                                <p className="text-xs text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A]">Integrated tools and triggers</p>
                              </TooltipContent>
                            </Tooltip>

                            {/* Arrow */}
                            <ArrowRight className="w-5 h-5 text-[#70BEFA]/40" />

                            {/* Icon 3: Intuitive APIs */}
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="w-14 h-14 bg-[#70BEFA]/10 border border-[#70BEFA]/30 rounded-xl flex items-center justify-center cursor-pointer hover:bg-[#70BEFA]/20 hover:border-[#70BEFA]/50 transition-all">
                                  <Zap className="w-7 h-7 text-[#70BEFA]" />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent side="top" className="bg-[#1C1C1E] dark:bg-[#1C1C1E] light:bg-white border-[#30363D] dark:border-[#30363D] light:border-[#E5E7EB]">
                                <p className="text-xs text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A]">Intuitive and powerful APIs</p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        </div>
                      </TooltipProvider>
                    </div>
                  )}

                  {/* Feature 6: Cost Efficiency - Donut Chart (Clean Version) */}
                  {feature.visualType === 'savings' && (
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Donut Chart Representation */}
                        <div className="relative flex items-center justify-center">
                          {/* Outer Ring - Red (Traditional 40%) and Green (Leo AI 60%) */}
                          <svg width="140" height="140" viewBox="0 0 140 140" className="transform -rotate-90">
                            {/* Background circle */}
                            <circle
                              cx="70"
                              cy="70"
                              r="55"
                              fill="none"
                              stroke="#1C1C1E"
                              strokeWidth="20"
                            />
                            {/* Green segment FIRST (60% - Leo AI cost) - starts from top */}
                            <circle
                              cx="70"
                              cy="70"
                              r="55"
                              fill="none"
                              stroke="#34D399"
                              strokeWidth="20"
                              strokeDasharray="207 345"
                              strokeLinecap="round"
                            />
                            {/* Red segment SECOND (40% - Saved amount) - continues after green */}
                            <circle
                              cx="70"
                              cy="70"
                              r="55"
                              fill="none"
                              stroke="#EF4444"
                              strokeWidth="20"
                              strokeDasharray="138 345"
                              strokeDashoffset="-207"
                              strokeLinecap="round"
                            />
                          </svg>

                          {/* Center Text */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-2xl text-[#34D399]">40%</span>
                            <span className="text-xs text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280]">Savings</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <span className="text-2xl text-[#70BEFA]/60">{feature.number}</span>
                    <div className="flex-1">
                      <h3 className="text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-2">{feature.title}</h3>
                      <p className="text-sm text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
