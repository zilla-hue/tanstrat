
import React, { useState } from 'react';
import { Page } from '../types';
import { LinkedInIcon, TwitterIcon, FacebookIcon } from './icons/SocialIcons';

interface FooterProps {
  navigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const footerLinks = [
    { label: 'About Us', page: Page.About },
    { label: 'Services', page: Page.Services },
    { label: 'Insights', page: Page.Insights },
    { label: 'Contact', page: Page.Contact },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <footer className="bg-brand-blue-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-display font-bold text-white tracking-wide">
              Tanstrat<span className="text-brand-teal">.</span>
            </h2>
            <p className="mt-4 text-sm text-gray-300">Strategic Clarity. Tangible Results.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-brand-teal transition-colors"><LinkedInIcon /></a>
              <a href="#" className="text-gray-300 hover:text-brand-teal transition-colors"><TwitterIcon /></a>
              <a href="#" className="text-gray-300 hover:text-brand-teal transition-colors"><FacebookIcon /></a>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold tracking-wider text-gray-200 uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map(link => (
                <li key={link.label}>
                  <button onClick={() => navigate(link.page)} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold tracking-wider text-gray-200 uppercase">Contact</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>House 4 , William’s street Utako</li>
              <li className="pt-2">Contact@tanstratltd.com</li>
              <li>+234 803 302 930</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-semibold tracking-wider text-gray-200 uppercase">Newsletter</h3>
            <p className="mt-4 text-gray-300 text-sm">Stay ahead with our latest insights.</p>
            <form onSubmit={handleSubmit} className="mt-4 flex">
              {status !== 'success' ? (
                <>
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 text-gray-800 rounded-l-md focus:outline-none" 
                    disabled={status === 'submitting'}
                  />
                  <button 
                    type="submit" 
                    className="px-4 py-2 bg-brand-teal text-white font-semibold rounded-r-md hover:bg-opacity-90 transition-colors"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? '...' : 'Go'}
                  </button>
                </>
              ) : (
                <p className="text-sm text-green-400">Thank you for subscribing!</p>
              )}
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tanstrat Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
