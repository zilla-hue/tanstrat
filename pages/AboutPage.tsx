import React from 'react';
import { teamMembers } from '../data/mockData';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-brand-blue py-16 md:py-24 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold">About Tanstrat Ltd.</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            We are a team of dedicated strategists, analysts, and innovators committed to delivering exceptional value to our clients.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-blue">Our Mission & Vision</h2>
                <p className="mt-4 text-lg text-brand-gray-dark">
                  Our mission is to be the most trusted advisor to the world's leading businesses. We work in partnership with our clients to convert strategy into action, delivering tangible results that create lasting value. We aspire to be a firm that attracts, develops, and retains the most talented people.
                </p>
                <p className="mt-4 text-brand-gray-dark">
                  Our vision is to redefine the consulting landscape by integrating deep industry expertise with cutting-edge digital capabilities, helping our clients not only to adapt but to thrive in an ever-changing world.
                </p>
              </div>
              <div className="md:w-1/2">
                <img src="https://picsum.photos/800/600?random=2" alt="Office collaboration" className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Values Section */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-brand-gray-light">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-blue">Our Core Values</h2>
              <p className="mt-2 text-lg text-brand-gray-dark">The principles that guide our work and our relationships.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-display font-semibold text-brand-teal">Integrity</h3>
                <p className="mt-2 text-brand-gray-dark">We uphold the highest ethical standards, earning trust through honesty and transparency in everything we do.</p>
              </div>
              <div>
                <h3 className="text-2xl font-display font-semibold text-brand-teal">Excellence</h3>
                <p className="mt-2 text-brand-gray-dark">We are relentless in our pursuit of outstanding results, constantly striving to deliver the best for our clients and our firm.</p>
              </div>
              <div>
                <h3 className="text-2xl font-display font-semibold text-brand-teal">Collaboration</h3>
                <p className="mt-2 text-brand-gray-dark">We believe the best solutions come from working together, combining diverse perspectives to solve the toughest challenges.</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Meet the Team Section */}
      {/* <AnimatedSection>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-blue">Our Leadership</h2>
              <p className="mt-2 text-lg text-brand-gray-dark max-w-2xl mx-auto">Meet the experienced professionals guiding our firm and our clients to success.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map(member => (
                <div key={member.name} className="text-center">
                  <img src={member.imageUrl} alt={member.name} className="w-full h-auto rounded-lg shadow-lg mb-4 aspect-square object-cover" />
                  <h4 className="text-xl font-display font-semibold text-brand-blue">{member.name}</h4>
                  <p className="text-brand-teal font-medium">{member.title}</p>
                  <p className="mt-2 text-sm text-brand-gray-dark">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection> */}
    </div>
  );
};

export default AboutPage;