import React from 'react';
import { Play, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Five Studio</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Pioneering the future of cinema through the perfect blend of human creativity and artificial intelligence. 
              Experience stories that push the boundaries of what's possible.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Content</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => onNavigate('ai-films')} className="hover:text-white transition-colors">AI Films</button></li>
              <li><button onClick={() => onNavigate('human-films')} className="hover:text-white transition-colors">Human Films</button></li>
              <li><button onClick={() => onNavigate('short-films')} className="hover:text-white transition-colors">Short Films</button></li>
              <li><button onClick={() => onNavigate('collections')} className="hover:text-white transition-colors">Collections</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => onNavigate('help-center')} className="hover:text-white transition-colors">Help Center</button></li>
              <li><button onClick={() => onNavigate('contact-us')} className="hover:text-white transition-colors">Contact Us</button></li>
              <li><button onClick={() => onNavigate('privacy-policy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('terms-of-service')} className="hover:text-white transition-colors">Terms of Service</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Five Studio. All rights reserved. | five-stream.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;