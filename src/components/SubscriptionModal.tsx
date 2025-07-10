import React, { useState } from 'react';
import { X, Check, CreditCard, Shield, Star } from 'lucide-react';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: () => void;
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ isOpen, onClose, onSubscribe }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleSubscribe = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      onSubscribe();
      setIsProcessing(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Five Studio Premium</h2>
          <p className="text-gray-400">Unlock unlimited access to all films</p>
        </div>

        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-6 mb-6 border border-purple-500/20">
          <div className="text-center mb-4">
            <span className="text-4xl font-bold text-white">€2.50</span>
            <span className="text-gray-400 ml-2">/month</span>
          </div>
          
          <ul className="space-y-3">
            <li className="flex items-center space-x-3 text-white">
              <Check className="w-5 h-5 text-green-400" />
              <span>Unlimited access to all AI films</span>
            </li>
            <li className="flex items-center space-x-3 text-white">
              <Check className="w-5 h-5 text-green-400" />
              <span>Unlimited access to human-created films</span>
            </li>
            <li className="flex items-center space-x-3 text-white">
              <Check className="w-5 h-5 text-green-400" />
              <span>Exclusive short films collection</span>
            </li>
            <li className="flex items-center space-x-3 text-white">
              <Check className="w-5 h-5 text-green-400" />
              <span>HD & 4K streaming quality</span>
            </li>
            <li className="flex items-center space-x-3 text-white">
              <Check className="w-5 h-5 text-green-400" />
              <span>Cancel anytime</span>
            </li>
          </ul>
        </div>

        <button
          onClick={handleSubscribe}
          disabled={isProcessing}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5" />
              <span>Subscribe Now</span>
            </>
          )}
        </button>

        <div className="flex items-center justify-center space-x-2 mt-4 text-sm text-gray-400">
          <Shield className="w-4 h-4" />
          <span>Secure payment • Cancel anytime</span>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;