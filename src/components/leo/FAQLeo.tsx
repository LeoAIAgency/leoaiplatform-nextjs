'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

const faqs = [
  {
    question: 'What is Leo AI Smart Agent Platform?',
    answer: 'Leo AI Smart Agent Platform is an AI-powered solution that analyzes customer conversations, detects intent and sentiment, and provides automated responses across multiple channels (WhatsApp, Instagram, Web). It includes 6 specialized AI agents tailored for different business needs, with real-time analytics and insights.',
  },
  {
    question: 'How does the AI agent understand different languages?',
    answer: 'Our AI agents are trained to understand and respond in over 40 languages naturally. Using advanced natural language processing, the system automatically detects the customer\'s language and continues the conversation seamlessly, breaking down language barriers for global hospitality operations.',
  },
  {
    question: 'Can I integrate it with my existing systems?',
    answer: 'Yes! Leo AI Platform integrates seamlessly with your existing CRM, PMS (Property Management Systems), booking engines, and other business tools. We provide API access and pre-built connectors for popular platforms to ensure smooth data synchronization.',
  },
  {
    question: 'How long does it take to set up?',
    answer: 'You can set up your AI agent in minutes. Our intuitive dashboard allows you to configure your agent, connect your channels, and start conversations immediately. No technical expertise required – just follow our simple setup wizard.',
  },
  {
    question: 'What channels does the platform support?',
    answer: 'Leo AI supports WhatsApp Business, Instagram Direct Messages, Web Chat, and can be extended to other messaging platforms. All conversations are unified in one dashboard, giving you a complete view of customer interactions across all touchpoints.',
  },
  {
    question: 'Is my customer data secure?',
    answer: 'Absolutely. We use enterprise-grade security with end-to-end encryption (TLS 1.3 and AES-256). All data is stored securely and we\'re fully GDPR compliant. Your customer conversations and personal data are never shared with third parties and remain completely confidential.',
  },
  {
    question: 'Do I need technical knowledge to use the platform?',
    answer: 'No technical knowledge required! Our platform is designed with a user-friendly interface that anyone can use. Simply configure your preferences through our visual dashboard, and the AI handles the complex technical aspects automatically.',
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide comprehensive support including 24/7 technical assistance, dedicated account management, onboarding training, and extensive documentation. Our team is always available to help you maximize the value of your AI agents.',
  },
  {
    question: 'Can the AI handle complex customer inquiries?',
    answer: 'Yes! Our AI agents are trained to handle complex, multi-step conversations including bookings, upselling, complaint resolution, and detailed inquiries. When the AI encounters a question it can\'t answer, it seamlessly transfers to a human agent with full conversation context.',
  },
  {
    question: 'How much can I save with AI agents?',
    answer: 'Hotels typically save up to $20,000 per month in call center costs alone. Beyond cost savings, AI agents increase direct bookings, improve RevPAR through intelligent upselling, reduce response times from hours to seconds, and operate 24/7 without shift changes.',
  },
];

export default function FAQLeo() {
  return (
    <section id="faq" className="relative py-20 bg-gradient-to-b from-[#0A0A0A] dark:from-[#0A0A0A] light:from-white via-[#0D0D0D] dark:via-[#0D0D0D] light:via-[#F5F5F5] to-[#0F0F0F] dark:to-[#0F0F0F] light:to-[#FAFAFA] transition-colors duration-300">
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0A0A0A] dark:from-[#0A0A0A] light:from-white to-transparent" />
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#0F0F0F] dark:to-[#0F0F0F] light:to-[#FAFAFA]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] max-w-3xl mx-auto">
            Everything you need to know about Leo AI Smart Agent Platform
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-[#0F0F0F] dark:bg-[#0F0F0F] light:bg-white border border-[#222222] dark:border-[#222222] light:border-[#E5E7EB] rounded-2xl p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-[#222222] dark:border-[#222222] light:border-[#E5E7EB]"
              >
                <AccordionTrigger className="text-left text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] hover:text-[#70BEFA] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
