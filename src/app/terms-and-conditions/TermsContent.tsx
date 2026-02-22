'use client';

import LandingHeaderLeo from '@/components/leo/LandingHeaderLeo';
import CTAFooterLeo from '@/components/leo/CTAFooterLeo';

export default function TermsContent() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white transition-colors duration-300">
      <LandingHeaderLeo />

      {/* Terms Content */}
      <section className="relative pt-32 pb-20 bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white transition-colors duration-300">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-8">
            Terms & Conditions
          </h1>

          <div className="prose prose-invert dark:prose-invert light:prose max-w-none">
            <div className="text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] space-y-6">
              <p className="text-sm text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280]">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using Leo AI Platform (&quot;Service&quot;), you agree to be bound by these Terms and Conditions.
                If you do not agree with any part of these terms, you may not access the Service.
              </p>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">
                2. Description of Service
              </h2>
              <p>
                Leo AI Platform provides AI-powered customer conversation analysis, automated responses, and multi-channel integration services.
                Our platform includes 9 specialized AI agents designed to enhance customer engagement and operational efficiency.
              </p>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">
                3. User Accounts
              </h2>
              <p>To use certain features of the Service, you must create an account. You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access</li>
                <li>Providing accurate and complete information</li>
              </ul>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">
                4. Acceptable Use
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Service for any illegal purpose</li>
                <li>Violate any laws in your jurisdiction</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit malicious code or viruses</li>
                <li>Attempt to gain unauthorized access to the Service</li>
                <li>Interfere with or disrupt the Service</li>
              </ul>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">
                5. Intellectual Property
              </h2>
              <p>
                The Service and its original content, features, and functionality are owned by Leo AI Agency and are protected by
                international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">
                6. Payment and Subscription
              </h2>
              <p>Certain features of the Service may require payment. By subscribing to a paid plan, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pay all fees as described in your selected plan</li>
                <li>Provide accurate billing information</li>
                <li>Allow us to charge your payment method</li>
                <li>Our refund policy as stated in your subscription agreement</li>
              </ul>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">
                7. Data and Privacy
              </h2>
              <p>
                Your use of the Service is also governed by our Privacy Policy. By using the Service, you consent to the collection
                and use of information as described in our Privacy Policy.
              </p>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">
                8. Service Availability
              </h2>
              <p>We strive to maintain the Service&apos;s availability but do not guarantee uninterrupted access. We reserve the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or discontinue the Service with or without notice</li>
                <li>Perform maintenance that may temporarily interrupt service</li>
                <li>Refuse service to anyone for any reason</li>
              </ul>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">
                9. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Leo AI Agency shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising out of your use or inability to use the Service.
              </p>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">
                10. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless Leo AI Agency and its officers, directors, employees, and agents from any
                claims, damages, losses, liabilities, and expenses arising out of your use of the Service or violation of these Terms.
              </p>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">
                11. Termination
              </h2>
              <p>
                We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason,
                including breach of these Terms.
              </p>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">
                12. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to
                its conflict of law provisions.
              </p>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">
                13. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on
                this page and updating the &quot;Last Updated&quot; date.
              </p>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">
                14. Contact Information
              </h2>
              <p>If you have questions about these Terms, please contact us at:</p>
              <div className="bg-[#161616] dark:bg-[#161616] light:bg-gray-100 p-6 rounded-lg mt-4">
                <p>Email: hello@leoaiplatform.com</p>
                <p>London Office: C/O 389c, High Road, London, United Kingdom, N22 8JA</p>
                <p>Istanbul Office: Ac&#305;badem Mah. &#199;e&#231;en Sk. No:25 Akasya AVM, No: 428 &#220;sk&#252;dar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <CTAFooterLeo hideContactForm={true} />
    </div>
  );
}
