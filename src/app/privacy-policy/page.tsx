import type { Metadata } from 'next';
import PrivacyContent from './PrivacyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Leo AI Platform. Learn how we collect, use, and protect your personal information and data.',
  openGraph: {
    title: 'Privacy Policy | Leo AI Platform',
    description: 'Privacy Policy for Leo AI Platform.',
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}
