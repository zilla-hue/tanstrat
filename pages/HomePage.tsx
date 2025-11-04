
import React from 'react';
import { Page } from '../types';
import { ArrowRightIcon, BriefcaseIcon, LightBulbIcon, ShieldCheckIcon, QuoteIcon } from '../components/icons/FeatureIcons';
import AnimatedSection from '../components/AnimatedSection';

interface HomePageProps {
  navigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  const services = [
    {
      img: 'https://picsum.photos/800/600?random=31',
      title: 'Strategy & Operations',
      description: 'We align your operations with your strategy to drive efficiency and growth.',
    },
    {
      img: 'https://picsum.photos/800/600?random=32',
      title: 'Digital Transformation',
      description: 'Leverage technology to innovate, disrupt, and create new value.',
    },
    {
      img: 'https://picsum.photos/800/600?random=33',
      title: 'Risk & Compliance',
      description: 'Navigate complex regulatory landscapes with confidence and integrity.',
    },
  ];

  const testimonials = [
    {
      quote: "Tanstrat's insights were transformative. Their team didn't just provide a plan; they embedded themselves with our leaders to ensure it was executed flawlessly. The results exceeded all our expectations.",
      name: 'Sarah Jennings',
      company: 'CEO, Innovate Corp',
    },
    {
      quote: "The digital transformation roadmap they developed was both ambitious and practical. We're now more agile, data-driven, and customer-focused than ever before. A truly invaluable partnership.",
      name: 'Michael Chen',
      company: 'CTO, Future Systems Inc.',
    },
    {
      quote: "Navigating the complex compliance landscape was our biggest challenge. Tanstrat provided the clarity and strategic guidance we needed to not only meet but exceed regulatory requirements.",
      name: 'David Rodriguez',
      company: 'Head of Risk, Global Finance Group',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-brand-blue text-white">
        <div className="container mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 lg:w-3/5 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Strategic Clarity. Tangible Results.
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 text-gray-200">
              We partner with leaders to transform strategy into reality, creating tangible value and a competitive edge for your business.
            </p>
            <div className="mt-8">
              <button
                onClick={() => navigate(Page.Services)}
                className="px-8 py-3 bg-white text-brand-blue font-semibold rounded-full shadow-lg hover:bg-brand-gray-light transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-2/5 mt-10 md:mt-0 flex justify-center items-center">
             <div className="relative w-[300px] h-[200px] md:w-[450px] md:h-[300px]">
                <img src="https://picsum.photos/450/300?random=20" alt="Climate action" className="absolute w-full h-full object-cover rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105"/>
             </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-blue-dark">Our Core Expertise</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white group overflow-hidden">
                  <div className="overflow-hidden">
                    <img src={service.img} alt={service.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-6 border-l-4 border-brand-teal bg-brand-gray-light">
                    <h3 className="mt-2 text-xl font-display font-semibold text-brand-blue-dark">{service.title}</h3>
                    <p className="mt-2 text-brand-gray-dark h-16">{service.description}</p>
                    <button onClick={() => navigate(Page.Services)} className="mt-6 font-semibold text-brand-blue group-hover:text-brand-teal transition-colors">
                      Explore now <ArrowRightIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Tanstrat Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-brand-gray-light">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img src="https://picsum.photos/800/600?random=1" alt="Consultants in a meeting" className="rounded-lg shadow-2xl"/>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-blue-dark">The Tanstrat Advantage</h2>
                <p className="mt-4 text-lg text-brand-gray-dark">
                  Our approach is rooted in deep industry knowledge and a commitment to collaborative partnership. We don't just provide solutions; we build capabilities.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-brand-teal mt-1"><ShieldCheckIcon /></div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-brand-blue-dark">Data-Driven Insights</h4>
                      <p className="text-brand-gray-dark">We leverage advanced analytics to uncover opportunities and inform strategy.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-brand-teal mt-1"><BriefcaseIcon /></div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-brand-blue-dark">Experienced Professionals</h4>
                      <p className="text-brand-gray-dark">Our team consists of seasoned experts with proven track records of success.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      
      {/* Testimonials Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-blue-dark">Trusted by Industry Leaders</h2>
              <p className="mt-2 text-lg text-brand-gray-dark max-w-2xl mx-auto">We are proud to partner with organizations at the forefront of their fields.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-brand-gray-light p-8 rounded-lg flex flex-col border-t-4 border-brand-teal">
                  <div className="text-brand-teal mb-4">
                    <QuoteIcon />
                  </div>
                  <p className="text-brand-gray-dark flex-grow">"{testimonial.quote}"</p>
                  <footer className="mt-6">
                    <p className="font-bold text-brand-blue-dark">{testimonial.name}</p>
                    <p className="text-sm text-brand-gray-dark">{testimonial.company}</p>
                  </footer>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="bg-brand-blue">
          <div className="container mx-auto px-6 py-16 text-center text-white">
            <h2 className="text-3xl font-display font-bold">Subscribe to Tanstrat Insights</h2>
            <p className="mt-2 text-lg max-w-2xl mx-auto">Access personalized content based on your interests by signing up today.</p>
            <button
              onClick={() => navigate(Page.Contact)}
              className="mt-8 px-8 py-3 bg-white text-brand-blue font-semibold rounded-full shadow-lg hover:bg-brand-gray-light transition-all duration-300 transform hover:scale-105"
            >
              Create an account
            </button>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
