import React from 'react';
import { Article } from '../types';
import AnimatedSection from '../components/AnimatedSection';

interface InsightDetailPageProps {
  article: Article;
  onBack: () => void;
}

const InsightDetailPage: React.FC<InsightDetailPageProps> = ({ article, onBack }) => {
  return (
    <div className="bg-white">
      <AnimatedSection>
        {/* Article Header */}
        <section className="relative bg-brand-blue text-white py-20 md:py-32">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${article.imageUrl})` }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-brand-blue/80 to-transparent"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <button onClick={onBack} className="mb-8 font-semibold text-gray-200 hover:text-white transition-colors">
              &larr; Back to Insights
            </button>
            <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight">{article.title}</h1>
            <div className="mt-4 text-lg text-gray-300">
              <span>By {article.author}</span>
              <span className="mx-2">&bull;</span>
              <span>{article.date}</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose lg:prose-xl max-w-none text-brand-gray-dark prose-headings:text-brand-blue prose-headings:font-display prose-a:text-brand-teal hover:prose-a:text-brand-blue">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-16 text-center">
               <button 
                onClick={onBack} 
                className="px-8 py-3 bg-brand-teal text-white font-semibold rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
               >
                 Back to All Insights
               </button>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default InsightDetailPage;