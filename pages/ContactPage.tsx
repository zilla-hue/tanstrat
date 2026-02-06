
import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-brand-gray-light">
      {/* Page Header */}
      <section className="bg-white py-16 md:py-20 text-center border-b border-gray-200">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-blue-dark">Get in Touch</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-brand-gray-dark">
            We're here to help you navigate your next challenge. Reach out to us to start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <AnimatedSection>
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12 bg-white p-8 md:p-12 rounded-lg shadow-lg">
              {/* Form */}
              <div className="lg:w-2/3">
                <h2 className="text-2xl font-display font-semibold text-brand-blue-dark mb-6">Send Us a Message</h2>
                {status === 'success' ? (
                  <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md" role="alert">
                    <p className="font-bold">Message Sent!</p>
                    <p>Thank you for reaching out. We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-brand-gray-dark">Full Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="mt-1 block w-full px-4 py-3 bg-white border border-brand-gray-medium rounded-md shadow-sm placeholder-brand-gray-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors duration-200" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-brand-gray-dark">Email Address</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="john.doe@example.com" required className="mt-1 block w-full px-4 py-3 bg-white border border-brand-gray-medium rounded-md shadow-sm placeholder-brand-gray-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors duration-200" />
                      </div>
                    </div>
                    <div className="mt-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-brand-gray-dark">Subject</label>
                      <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="e.g., Strategy Consulting Inquiry" required className="mt-1 block w-full px-4 py-3 bg-white border border-brand-gray-medium rounded-md shadow-sm placeholder-brand-gray-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors duration-200" />
                    </div>
                    <div className="mt-6">
                      <label htmlFor="message" className="block text-sm font-medium text-brand-gray-dark">Message</label>
                      <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="How can we help you?" required className="mt-1 block w-full px-4 py-3 bg-white border border-brand-gray-medium rounded-md shadow-sm placeholder-brand-gray-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors duration-200"></textarea>
                    </div>
                    <div className="mt-6">
                      <button type="submit" disabled={status === 'submitting'} className="w-full px-8 py-3 bg-brand-blue text-white font-semibold rounded-full shadow-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                        {status === 'submitting' ? 'Submitting...' : 'Submit Message'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
              
              {/* Contact Info */}
              <div className="lg:w-1/3 lg:pl-10 lg:border-l lg:border-gray-200">
                <h2 className="text-2xl font-display font-semibold text-brand-blue-dark mb-6">Contact Information</h2>
                <div className="space-y-4 text-brand-gray-dark">
                  <p><strong>Address:</strong><br/>House 4, William’s street Utako</p>
                  <p><strong>Email:</strong><br/><a href="mailto:contact@tanstratltd.com" className="text-brand-teal hover:underline">contact@tanstratltd.com</a></p>
                  <p><strong>Phone:</strong><br/><a href="tel:+234803302930" className="text-brand-teal hover:underline">+234 803 302 930</a></p>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-brand-blue-dark">Our Location</h3>
                  <div className="mt-4 rounded-lg overflow-hidden shadow-md">
                    <img src="https://picsum.photos/600/400?random=15" alt="Map to office" className="w-full h-auto object-cover"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default ContactPage;
