import React, { useState } from 'react';
import { ArrowLeft, User, Save, CreditCard, Settings, Shield, Bell, Eye, Trash2, LogOut } from 'lucide-react';

interface UserPageProps {
  title: string;
  onBack: () => void;
}

export const ProfileSettingsPage: React.FC<UserPageProps> = ({ title, onBack }) => {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+33 1 23 45 67 89',
    language: 'fr',
    country: 'France'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    alert('Profile updated successfully!');
  };

  return (
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
        
        <div className="max-w-2xl">
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Profile Information</h2>
                <p className="text-gray-400">Update your personal details</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">First Name</label>
                <input 
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-purple-400 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Last Name</label>
                <input 
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-purple-400 focus:outline-none"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-white font-medium mb-2">Email Address</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-purple-400 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Phone Number</label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-purple-400 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Language</label>
                <select 
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-purple-400 focus:outline-none"
                >
                  <option value="fr">Français</option>
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-white font-medium mb-2">Country</label>
                <select 
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-purple-400 focus:outline-none"
                >
                  <option value="France">France</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Canada">Canada</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <button 
              onClick={handleSave}
              className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2"
            >
              <Save className="w-5 h-5" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BillingPaymentsPage: React.FC<UserPageProps> = ({ title, onBack }) => {
  return (
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
        
        <div className="max-w-4xl space-y-8">
          {/* Current Subscription */}
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Current Subscription</h2>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">Five Studio Premium</h3>
                <p className="text-gray-300">€2.50/month • Next billing: January 15, 2025</p>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Cancel Subscription
              </button>
            </div>
          </div>
          
          {/* Payment Method */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Payment Method</h2>
            <div className="bg-gray-800 rounded-lg p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <CreditCard className="w-8 h-8 text-purple-400" />
                <div>
                  <p className="text-white font-semibold">•••• •••• •••• 4242</p>
                  <p className="text-gray-400">Expires 12/27</p>
                </div>
              </div>
              <button className="text-purple-400 hover:text-purple-300 font-semibold">
                Update
              </button>
            </div>
          </div>
          
          {/* Billing History */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Billing History</h2>
            <div className="space-y-4">
              {[
                { date: 'Dec 15, 2024', amount: '€2.50', status: 'Paid' },
                { date: 'Nov 15, 2024', amount: '€2.50', status: 'Paid' },
                { date: 'Oct 15, 2024', amount: '€2.50', status: 'Paid' },
              ].map((invoice, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0">
                  <div>
                    <p className="text-white font-medium">{invoice.date}</p>
                    <p className="text-gray-400">Five Studio Premium</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-semibold">{invoice.amount}</p>
                    <p className="text-green-400 text-sm">{invoice.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AccountSettingsPage: React.FC<UserPageProps> = ({ title, onBack }) => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    autoplay: true,
    hdStreaming: true,
    dataUsage: 'high'
  });

  const handleToggle = (setting: string) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting as keyof typeof prev]
    }));
  };

  return (
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
        
        <div className="max-w-2xl space-y-8">
          {/* Notifications */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <Bell className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Notifications</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">Email Notifications</h3>
                  <p className="text-gray-400 text-sm">Receive updates about new content and features</p>
                </div>
                <button 
                  onClick={() => handleToggle('emailNotifications')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.emailNotifications ? 'bg-purple-600' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">Push Notifications</h3>
                  <p className="text-gray-400 text-sm">Get notified about new releases</p>
                </div>
                <button 
                  onClick={() => handleToggle('pushNotifications')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.pushNotifications ? 'bg-purple-600' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Playback Settings */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <Eye className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Playback Settings</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">Autoplay Next Episode</h3>
                  <p className="text-gray-400 text-sm">Automatically play the next episode</p>
                </div>
                <button 
                  onClick={() => handleToggle('autoplay')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.autoplay ? 'bg-purple-600' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.autoplay ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">HD Streaming</h3>
                  <p className="text-gray-400 text-sm">Stream in high definition when available</p>
                </div>
                <button 
                  onClick={() => handleToggle('hdStreaming')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    settings.hdStreaming ? 'bg-purple-600' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.hdStreaming ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Privacy & Security */}
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Privacy & Security</h2>
            </div>
            
            <div className="space-y-4">
              <button className="w-full text-left p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <h3 className="text-white font-semibold mb-1">Change Password</h3>
                <p className="text-gray-400 text-sm">Update your account password</p>
              </button>
              
              <button className="w-full text-left p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <h3 className="text-white font-semibold mb-1">Two-Factor Authentication</h3>
                <p className="text-gray-400 text-sm">Add an extra layer of security</p>
              </button>
              
              <button className="w-full text-left p-4 bg-red-900/30 rounded-lg hover:bg-red-900/50 transition-colors border border-red-500/20">
                <div className="flex items-center space-x-3">
                  <Trash2 className="w-5 h-5 text-red-400" />
                  <div>
                    <h3 className="text-red-400 font-semibold mb-1">Delete Account</h3>
                    <p className="text-gray-400 text-sm">Permanently delete your account and data</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};