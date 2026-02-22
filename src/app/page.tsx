import LandingHeaderLeo from '@/components/leo/LandingHeaderLeo';
import HeroSectionLeo from '@/components/leo/HeroSectionLeo';
import TrustBannerLeo from '@/components/leo/TrustBannerLeo';
import FeaturesSectionLeo from '@/components/leo/FeaturesSectionLeo';
import IntelligenceFlowLeo from '@/components/leo/IntelligenceFlowLeo';
import AgentsGridLeo from '@/components/leo/AgentsGridLeo';
import AnalyticsDashboardLeo from '@/components/leo/AnalyticsDashboardLeo';
import HospitalityCaseStudyLeo from '@/components/leo/HospitalityCaseStudyLeo';
import CallCenterSolutionLeo from '@/components/leo/CallCenterSolutionLeo';
import IntegrationsSectionLeo from '@/components/leo/IntegrationsSectionLeo';
import FAQLeo from '@/components/leo/FAQLeo';
import CTAFooterLeo from '@/components/leo/CTAFooterLeo';
import ChatbotLeo from '@/components/leo/ChatbotLeo';
import { getFAQSchema } from '@/lib/metadata';

const faqs = [
  { question: 'What is Leo AI Smart Agent Platform?', answer: 'Leo AI Smart Agent Platform is an AI-powered solution that analyzes customer conversations, detects intent and sentiment, and provides automated responses across multiple channels.' },
  { question: 'How does the AI agent understand different languages?', answer: 'Our AI agents are trained to understand and respond in over 40 languages naturally using advanced natural language processing.' },
  { question: 'Can I integrate it with my existing systems?', answer: 'Yes! Leo AI Platform integrates seamlessly with your existing CRM, PMS, booking engines, and other business tools.' },
  { question: 'How long does it take to set up?', answer: 'You can set up your AI agent in minutes with our intuitive dashboard. No technical expertise required.' },
  { question: 'What channels does the platform support?', answer: 'Leo AI supports WhatsApp Business, Instagram Direct Messages, Web Chat, and more.' },
  { question: 'Is my customer data secure?', answer: 'We use enterprise-grade security with end-to-end encryption (TLS 1.3 and AES-256). Fully GDPR compliant.' },
  { question: 'Do I need technical knowledge to use the platform?', answer: 'No technical knowledge required! Our platform is designed with a user-friendly interface.' },
  { question: 'What kind of support do you offer?', answer: 'We provide 24/7 technical assistance, dedicated account management, onboarding training, and extensive documentation.' },
  { question: 'Can the AI handle complex customer inquiries?', answer: 'Yes! Our AI agents handle complex, multi-step conversations including bookings, upselling, and complaint resolution.' },
  { question: 'How much can I save with AI agents?', answer: 'Hotels typically save up to $20,000 per month in call center costs alone.' },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema(faqs)),
        }}
      />
      <div className="min-h-screen bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white scroll-smooth transition-colors duration-300">
        <LandingHeaderLeo />
        <HeroSectionLeo />
        <TrustBannerLeo />
        <FeaturesSectionLeo />
        <IntelligenceFlowLeo />
        <AgentsGridLeo />
        <AnalyticsDashboardLeo />
        <HospitalityCaseStudyLeo />
        <CallCenterSolutionLeo />
        <IntegrationsSectionLeo />
        <FAQLeo />
        <CTAFooterLeo />
        <ChatbotLeo />
      </div>
    </>
  );
}
