'use client';

import LandingHeaderLeo from '@/components/leo/LandingHeaderLeo';
import CTAFooterLeo from '@/components/leo/CTAFooterLeo';

export default function PrivacyContent() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white transition-colors duration-300">
      <LandingHeaderLeo />

      {/* Privacy Policy Content */}
      <section className="relative pt-32 pb-20 bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-white transition-colors duration-300">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-invert dark:prose-invert light:prose max-w-none">
            <div className="text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280] space-y-6">
              <p className="text-sm text-[#9C9C9C] dark:text-[#9C9C9C] light:text-[#6B7280]">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>

              <p>
                Leo AI Agency (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you use Leo AI Platform.
              </p>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">1. Information We Collect</h2>

              <h3 className="text-xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-6 mb-3">1.1 Personal Information</h3>
              <p>We may collect the following personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information (email, phone number)</li>
                <li>Company name and business information</li>
                <li>Payment and billing information</li>
                <li>Account credentials and preferences</li>
              </ul>

              <h3 className="text-xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-6 mb-3">1.2 Usage Data</h3>
              <p>We automatically collect certain information when you use our Service:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent</li>
                <li>Interaction with AI agents</li>
                <li>Conversation data and analytics</li>
              </ul>

              <h3 className="text-xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-6 mb-3">1.3 Customer Conversation Data</h3>
              <p>Our platform processes customer conversations on your behalf. This may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Chat transcripts and messages</li>
                <li>Voice recordings (if applicable)</li>
                <li>Sentiment analysis data</li>
                <li>Intent classification data</li>
                <li>Customer interaction metrics</li>
              </ul>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">2. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our Service</li>
                <li>Process your transactions and manage subscriptions</li>
                <li>Improve and personalize your experience</li>
                <li>Analyze usage patterns and optimize performance</li>
                <li>Send administrative information and updates</li>
                <li>Respond to customer inquiries and support requests</li>
                <li>Train and improve our AI models</li>
                <li>Detect and prevent fraud or security issues</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">3. Information Sharing and Disclosure</h2>
              <p>We may share your information in the following circumstances:</p>

              <h3 className="text-xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-6 mb-3">3.1 Service Providers</h3>
              <p>We engage third-party companies to facilitate our Service, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cloud hosting providers</li>
                <li>Payment processors</li>
                <li>Analytics services</li>
                <li>Customer support tools</li>
                <li>AI model providers (OpenAI, Google AI, Anthropic)</li>
              </ul>

              <h3 className="text-xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-6 mb-3">3.2 Legal Requirements</h3>
              <p>We may disclose your information if required by law or in response to valid requests by public authorities.</p>

              <h3 className="text-xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-6 mb-3">3.3 Business Transfers</h3>
              <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</p>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">4. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your information, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="mt-4">However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.</p>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">5. Data Retention</h2>
              <p>We retain your information for as long as necessary to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide our Service to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
                <li>Enforce our agreements</li>
              </ul>
              <p className="mt-4">When information is no longer needed, we will securely delete or anonymize it.</p>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">6. Your Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Objection:</strong> Object to certain data processing activities</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
                <li><strong>Withdraw Consent:</strong> Withdraw previously given consent</li>
              </ul>
              <p className="mt-4">To exercise these rights, please contact us at hello@leoaiplatform.com</p>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar tracking technologies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintain your session and preferences</li>
                <li>Analyze usage patterns and improve our Service</li>
                <li>Provide personalized content</li>
                <li>Measure the effectiveness of our marketing</li>
              </ul>
              <p className="mt-4">You can control cookies through your browser settings. Note that disabling cookies may affect Service functionality.</p>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">8. Third-Party Integrations</h2>
              <p>Our Service integrates with third-party platforms, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>WhatsApp, Instagram, Facebook Messenger, Telegram</li>
                <li>OpenAI, Google AI, Anthropic, Grok</li>
                <li>Supabase, MySQL, PostgreSQL</li>
                <li>Google Sheets, Airtable</li>
                <li>Slack, Discord</li>
              </ul>
              <p className="mt-4">These third parties have their own privacy policies. We are not responsible for their practices.</p>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">9. International Data Transfers</h2>
              <p>
                Your information may be transferred to and maintained on servers located outside your jurisdiction. By using our Service,
                you consent to such transfers. We ensure appropriate safeguards are in place.
              </p>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">10. Children&apos;s Privacy</h2>
              <p>
                Our Service is not intended for individuals under 18 years of age. We do not knowingly collect information from children.
                If you become aware that a child has provided us with personal information, please contact us.
              </p>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">11. GDPR Compliance</h2>
              <p>
                For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR).
                Our legal basis for processing includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Performance of a contract</li>
                <li>Legitimate interests</li>
                <li>Consent</li>
                <li>Legal obligations</li>
              </ul>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">12. California Privacy Rights</h2>
              <p>California residents have additional rights under the California Consumer Privacy Act (CCPA), including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Right to know what personal information is collected</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>Right to non-discrimination</li>
              </ul>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">13. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy
                on this page and updating the &quot;Last Updated&quot; date. You are advised to review this Privacy Policy periodically.
              </p>

              <h2 className="text-2xl text-[#FFFFFF] dark:text-[#FFFFFF] light:text-[#0A0A0A] mt-8 mb-4">14. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <div className="bg-[#161616] dark:bg-[#161616] light:bg-gray-100 p-6 rounded-lg mt-4">
                <p>Email: hello@leoaiplatform.com</p>
                <p>Data Protection Officer: dpo@leoaiplatform.com</p>
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
