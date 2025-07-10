import React from 'react';
import { ArrowLeft, HelpCircle, Mail, Shield, FileText, MessageCircle, Phone } from 'lucide-react';

interface SupportPageProps {
  title: string;
  onBack: () => void;
}

export const HelpCenterPage: React.FC<SupportPageProps> = ({ title, onBack }) => (
  <div className="min-h-screen bg-black pt-20 pb-12">
    <div className="container mx-auto px-4 lg:px-6">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>
      
      <h1 className="text-4xl font-bold text-white mb-8">{title}</h1>
      <div className="max-w-4xl">
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-8 border border-blue-500/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "How do I subscribe to Five Studio Premium?",
                answer: "Click on the user icon in the top right corner and select 'Upgrade to Premium'. You can subscribe for just €2.50/month and cancel anytime."
              },
              {
                question: "What's the difference between AI and Human films?",
                answer: "AI films are created using artificial intelligence technology, while Human films are crafted by traditional filmmakers. Both offer unique storytelling experiences."
              },
              {
                question: "Can I watch films offline?",
                answer: "Currently, all films require an internet connection to stream. We're working on offline viewing capabilities for Premium subscribers."
              },
              {
                question: "How do I cancel my subscription?",
                answer: "You can cancel your subscription anytime from your account settings. Your access will continue until the end of your billing period."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-800/50 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ContactUsPage: React.FC<SupportPageProps> = ({ title, onBack }) => (
  <div className="min-h-screen bg-black pt-20 pb-12">
    <div className="container mx-auto px-4 lg:px-6">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>
      
      <h1 className="text-4xl font-bold text-white mb-8">{title}</h1>
      <div className="max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-purple-400" />
                <div>
                  <h3 className="text-white font-semibold">Email Support</h3>
                  <p className="text-gray-300">support@five-stream.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-purple-400" />
                <div>
                  <h3 className="text-white font-semibold">Phone Support</h3>
                  <p className="text-gray-300">+33 1 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MessageCircle className="w-6 h-6 text-purple-400" />
                <div>
                  <h3 className="text-white font-semibold">Live Chat</h3>
                  <p className="text-gray-300">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-white font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-purple-400 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-purple-400 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-purple-400 focus:outline-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const PrivacyPolicyPage: React.FC<SupportPageProps> = ({ title, onBack }) => (
  <div className="min-h-screen bg-black pt-20 pb-12">
    <div className="container mx-auto px-4 lg:px-6">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>
      
      <h1 className="text-4xl font-bold text-white mb-8">{title}</h1>
      <div className="max-w-4xl">
        <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
          </div>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Information We Collect</h3>
              <p>We collect information you provide directly to us, such as when you create an account, subscribe to our service, or contact us for support.</p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-white mb-3">How We Use Your Information</h3>
              <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Information Sharing</h3>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Data Security</h3>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@five-stream.com.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const TermsOfServicePage: React.FC<SupportPageProps> = ({ title, onBack }) => (
  <div className="min-h-screen bg-black pt-20 pb-12">
    <div className="container mx-auto px-4 lg:px-6">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>
      
      <h1 className="text-4xl font-bold text-white mb-8">{title}</h1>
      <div className="max-w-4xl">
        <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="w-6 h-6 text-purple-400" />
            <h2 className="text-2xl font-bold text-white">Terms of Service</h2>
          </div>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Acceptance of Terms</h3>
              <p>By accessing and using Five Studio, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Service Description</h3>
              <p>Five Studio is a streaming platform that provides access to AI-generated and human-created films and short films.</p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Subscription Terms</h3>
              <p>Premium subscriptions are billed monthly at €2.50. You may cancel your subscription at any time, and cancellation will take effect at the end of your current billing period.</p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-white mb-3">User Conduct</h3>
              <p>You agree not to use the service for any unlawful purpose or in any way that could damage, disable, or impair the service.</p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-white mb-3">Intellectual Property</h3>
              <p>All content on Five Studio is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without permission.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
);