import React from 'react';
import { services } from '../data/mockData';
import { Service } from '../types';
import { CheckIcon } from '../components/icons/FeatureIcons';
import AnimatedSection from '../components/AnimatedSection';

const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/ & /g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

const ServiceSection: React.FC<{ service: Service, index: number }> = ({ service, index }) => {
  const isReversed = index % 2 !== 0;
  const slug = createSlug(service.title);

  return (
    <div id={slug} className={`container mx-auto px-6 py-12 scroll-mt-32 ${index > 0 ? 'border-t border-brand-gray-medium' : ''}`}>
      <div className={`flex flex-col md:flex-row items-center gap-12 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
        <div className="md:w-1/2">
          <img src={service.imageUrl} alt={service.title} className="rounded-lg shadow-xl" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-display font-bold text-brand-blue">{service.title}</h2>
          <p className="mt-4 text-brand-gray-dark">{service.description}</p>
          <ul className="mt-6 space-y-3">
            {service.details.map(detail => (
              <li key={detail} className="flex items-center">
                <CheckIcon />
                <span className="ml-3 text-brand-gray-dark">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  const handleScrollToSection = (slug: string) => {
    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-brand-blue py-16 md:py-24 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold">Our Services</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            We deliver end-to-end solutions that address your most pressing business challenges and unlock your greatest opportunities.
          </p>
        </div>
      </section>

      {/* In-page Navigation */}
      <section className="sticky top-[72px] bg-white/95 backdrop-blur-sm z-40 border-b border-brand-gray-medium">
        <div className="container mx-auto px-6">
            <nav className="flex justify-center items-center space-x-6 md:space-x-10 py-3 overflow-x-auto">
                {services.map(service => (
                    <button
                        key={service.title}
                        onClick={() => handleScrollToSection(createSlug(service.title))}
                        className="flex-shrink-0 group inline-flex items-center py-2 border-b-2 border-transparent text-sm font-medium text-brand-gray-dark hover:text-brand-teal hover:border-brand-teal transition-colors duration-200 whitespace-nowrap"
                    >
                        {service.title}
                    </button>
                ))}
            </nav>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-20 bg-brand-gray-light">
        {services.map((service, index) => (
          <AnimatedSection key={service.title}>
            <ServiceSection service={service} index={index} />
          </AnimatedSection>
        ))}
      </section>
    </div>
  );
};

export default ServicesPage;