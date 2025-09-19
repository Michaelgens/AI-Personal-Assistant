import React from 'react';
import { FileText, Users, CreditCard, AlertCircle, CheckCircle, XCircle, Clock } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <FileText className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-lg sm:text-xl text-gray-600 px-4">
            Please read these terms carefully before using AI Personal Assistant.
          </p>
          <div className="text-xs sm:text-sm text-gray-500 mt-4">
            Effective Date: {new Date().toLocaleDateString()} | Version 2.1
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Agreement Notice */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-6 sm:p-8 rounded-2xl mb-6 sm:mb-8">
            <div className="flex items-start">
              <CheckCircle className="h-8 w-8 text-green-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                <p className="text-sm sm:text-base text-gray-700">
                  By downloading, installing, or using AI Personal Assistant ("the App"), you agree to be bound by these 
                  Terms and Conditions. If you do not agree to these terms, please do not use our application.
                </p>
              </div>
            </div>
          </div>

          {/* Service Description */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Service Description</h2>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">What AI Personal Assistant Provides</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                AI Personal Assistant is a comprehensive productivity application that offers:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2">
                  <li>Google Calendar integration and synchronization</li>
                  <li>Event, task, and reminder management</li>
                  <li>AI-powered scheduling assistance</li>
                  <li>Productivity analytics and insights</li>
                </ul>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2">
                  <li>Natural language query processing</li>
                  <li>Personalized recommendations</li>
                  <li>Multi-device synchronization</li>
                  <li>Calendar optimization suggestions</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 sm:p-6 rounded-xl">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Service Availability</h4>
              <p className="text-sm sm:text-base text-gray-700">
                We strive to provide continuous service availability, but we do not guarantee uninterrupted access. 
                Scheduled maintenance, updates, and unforeseen technical issues may temporarily affect service availability.
              </p>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
              <Users className="h-8 w-8 mr-3 text-indigo-600" />
              User Responsibilities & Conduct
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Account Requirements</h3>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2">
                  <li>You must be at least 13 years old to use this service</li>
                  <li>You must provide accurate and current information during registration</li>
                  <li>You are responsible for maintaining the security of your account credentials</li>
                  <li>You must notify us immediately of any unauthorized account access</li>
                  <li>One person may not maintain multiple accounts</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Acceptable Use Policy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-green-700 mb-2 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Permitted Uses
                    </h4>
                    <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                      <li>• Personal productivity and calendar management</li>
                      <li>• Business scheduling and organization</li>
                      <li>• Educational and research purposes</li>
                      <li>• Legitimate commercial activities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-red-700 mb-2 flex items-center">
                      <XCircle className="h-5 w-5 mr-2" />
                      Prohibited Uses
                    </h4>
                    <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                      <li>• Illegal activities or harassment</li>
                      <li>• Spamming or unsolicited communications</li>
                      <li>• Reverse engineering or hacking attempts</li>
                      <li>• Sharing account access with others</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 p-4 sm:p-6 rounded-xl">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-red-600" />
                  Violation Consequences
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Violation of these terms may result in immediate account suspension or termination, removal of data, 
                  and/or legal action. We reserve the right to investigate suspected violations and take appropriate action.
                </p>
              </div>
            </div>
          </section>

          {/* Billing and Payments */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
              <CreditCard className="h-8 w-8 mr-3 text-indigo-600" />
              Billing & Payment Terms
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 p-6 sm:p-8 rounded-2xl">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Subscription Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  <div className="bg-white p-3 sm:p-4 rounded-lg border">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900">Free Tier</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Basic features with limitations</p>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-lg border">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900">Premium</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Full AI features and unlimited sync</p>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-lg border">
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900">Enterprise</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Advanced features for teams</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Payment Terms</h3>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-2">
                    <li>• Payments are processed securely through encrypted payment systems</li>
                    <li>• Subscription fees are billed in advance on a recurring basis</li>
                    <li>• All fees are non-refundable except as required by law</li>
                    <li>• Price changes will be communicated 30 days in advance</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Cancellation Policy</h3>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-2">
                    <li>• You may cancel your subscription at any time</li>
                    <li>• Service continues until the end of your billing period</li>
                    <li>• No partial refunds for unused portions of subscription periods</li>
                    <li>• Free tier users may delete their account at any time</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Data and Privacy */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Data Handling & Privacy</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Your Data Rights</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                Your privacy is important to us. By using AI Personal Assistant, you agree to our data handling practices as outlined in our Privacy Policy.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Data We Collect</h4>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                    <li>• Calendar events and schedules</li>
                    <li>• Task and reminder information</li>
                    <li>• AI chat interactions</li>
                    <li>• Usage analytics and preferences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Your Rights</h4>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-1">
                    <li>• Access your personal data</li>
                    <li>• Correct inaccurate information</li>
                    <li>• Request data deletion</li>
                    <li>• Export your data</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Intellectual Property Rights</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Our Intellectual Property</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  AI Personal Assistant, including its software, design, content, and trademarks, is owned by us and 
                  protected by intellectual property laws. You may not:
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 space-y-2">
                  <li>Copy, modify, or distribute our software or content</li>
                  <li>Use our trademarks or branding without permission</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                  <li>Create derivative works based on our application</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Your Content</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  You retain ownership of your calendar data, tasks, and other content you create or upload. 
                  By using our service, you grant us a limited license to process and store your content solely 
                  for the purpose of providing our services to you.
                </p>
              </div>
            </div>
          </section>

          {/* Service Modifications */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
              <Clock className="h-8 w-8 mr-3 text-indigo-600" />
              Service Modifications & Termination
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Service Updates</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  We regularly update AI Personal Assistant to improve functionality and add new features. We may:
                </p>
                <ul className="text-sm sm:text-base text-gray-600 space-y-2">
                  <li>• Add, modify, or remove features</li>
                  <li>• Update the user interface</li>
                  <li>• Change system requirements</li>
                  <li>• Modify API integrations</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Service Termination</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Either party may terminate this agreement:
                </p>
                <ul className="text-sm sm:text-base text-gray-600 space-y-2">
                  <li>• You may cancel at any time</li>
                  <li>• We may terminate for terms violations</li>
                  <li>• 30-day notice for service discontinuation</li>
                  <li>• Data export available before termination</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Dispute Resolution</h2>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Resolution Process</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900">Direct Communication</h4>
                    <p className="text-sm sm:text-base text-gray-600">Contact our support team first to resolve any issues.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900">Mediation</h4>
                    <p className="text-sm sm:text-base text-gray-600">If direct resolution fails, we'll attempt mediation through a neutral third party.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900">Binding Arbitration</h4>
                    <p className="text-sm sm:text-base text-gray-600">Unresolved disputes will be settled through binding arbitration.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Changes to These Terms</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 p-4 sm:p-6 rounded-xl">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Terms Updates</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-4">
                    We may update these Terms and Conditions periodically to reflect changes in our services, 
                    legal requirements, or business practices.
                  </p>
                  <ul className="text-sm sm:text-base text-gray-600 space-y-2">
                    <li>• We'll notify users of significant changes via email or in-app notification</li>
                    <li>• Minor changes will be posted on this page with an updated "Last Modified" date</li>
                    <li>• Continued use after changes constitutes acceptance of new terms</li>
                    <li>• You may terminate your account if you disagree with updated terms</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Us</h2>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 sm:p-8 rounded-2xl">
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                If you have questions about these Terms and Conditions or need assistance with our service, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2 text-sm sm:text-base text-gray-600">
                  <p><strong>Customer Support:</strong> support@aipersonalassistant.com</p>
                  <p><strong>Business Hours:</strong> Monday-Friday, 9 AM - 6 PM EST</p>
                  <p><strong>Response Time:</strong> Within 24 hours</p>
                </div>
                <div className="space-y-2 text-sm sm:text-base text-gray-600">
                  <p><strong>Mailing Address:</strong></p>
                  <p>AI Personal Assistant</p>
                  <p>123 Innovation Drive, Suite 200</p>
                  <p>Tech City, TC 12345</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;