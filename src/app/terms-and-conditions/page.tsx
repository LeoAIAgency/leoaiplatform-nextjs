import type { Metadata } from 'next';
import TermsContent from './TermsContent';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and Conditions for Leo AI Platform services. Read our terms of use, payment policies, and service agreements.',
  openGraph: {
    title: 'Terms & Conditions | Leo AI Platform',
    description: 'Terms and Conditions for Leo AI Platform services.',
  },
};

export default function TermsAndConditionsPage() {
  return <TermsContent />;
}
