import React, { useState } from 'react';
import { X, User, Settings, CreditCard, LogOut, Crown } from 'lucide-react';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSubscribed: boolean;
  onOpenSubscription: () => void;
  onNavigate: (page: string) => void;
  onSignOut: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, isSubscribed, onOpenSubscription, onNavigate, onSignOut }) => {
  const handleNavigate = (page: string) => {
    onClose();
    onNavigate(page);
  };

  const handleSignOut = () => {
    onClose();
    onSignOut();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl max-w-sm w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white mb-1">Welcome back!</h2>
          <p className="text-gray-400">Manage your account</p>
        </div>

        {isSubscribed && (
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-4 mb-6 border border-purple-500/20">
            <div className="flex items-center space-x-2 text-purple-400">
              <Crown className="w-5 h-5" />
              <span className="font-semibold">Premium Member</span>
            </div>
            <p className="text-sm text-gray-300 mt-1">Unlimited access to all content</p>
          </div>
        )}

        <div className="space-y-2">
          <button 
            onClick={() => handleNavigate('profile-settings')}
            className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors text-white"
          >
            <User className="w-5 h-5" />
            <span>Profile Settings</span>
          </button>
          
          {!isSubscribed && (
            <button 
              onClick={() => {
                onClose();
                onOpenSubscription();
              }}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors text-purple-400"
            >
              <Crown className="w-5 h-5" />
              <span>Upgrade to Premium</span>
            </button>
          )}
          
          <button 
            onClick={() => handleNavigate('billing-payments')}
            className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors text-white"
          >
            <CreditCard className="w-5 h-5" />
            <span>Billing & Payments</span>
          </button>
          
          <button 
            onClick={() => handleNavigate('account-settings')}
            className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors text-white"
          >
            <Settings className="w-5 h-5" />
            <span>Account Settings</span>
          </button>
          
          <hr className="border-gray-700 my-2" />
          
          <button 
            onClick={handleSignOut}
            className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors text-red-400"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;