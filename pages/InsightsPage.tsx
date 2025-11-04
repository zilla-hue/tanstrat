
import React, { useState, useMemo } from 'react';
import { articles } from '../data/mockData';
import { Article } from '../types';
import AnimatedSection from '../components/AnimatedSection';
import { ArrowRightIcon } from '../components/icons/FeatureIcons';

interface InsightsPageProps {
  onSelectArticle: (article: Article) => void;
}

const ArticleCard: React.FC<{ article: Article, onSelectArticle: (article: Article) => void }> = ({ article, onSelectArticle }) => (
  <div className="bg-white group overflow-hidden flex flex-col">
    <div className="overflow-hidden">
        <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
    </div>
    <div className="p-6 border-l-4 border-brand-teal bg-brand-gray-light flex flex-col flex-grow">
      <p className="text-sm text-brand-blue font-medium uppercase tracking-wider">{article.category}</p>
      <h3 className="mt-2 text-xl font-display font-semibold text-brand-blue-dark leading-tight flex-grow">{article.title}</h3>
      <div className="mt-4">
        <button onClick={() => onSelectArticle(article)} className="font-semibold text-brand-blue group-hover:text-brand-teal transition-colors">
          Explore <ArrowRightIcon />
        </button>
      </div>
    </div>
  </div>
);

const InsightsPage: React.FC<InsightsPageProps> = ({ onSelectArticle }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = useMemo(() => {
    const allCategories = articles.map(article => article.category);
    return ['All', ...Array.from(new Set(allCategories))];
  }, []);

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'All') {
      return articles;
    }
    return articles.filter(article => article.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-brand-blue py-16 md:py-24 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold">Insights & Perspectives</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            Explore our latest thinking on the trends and forces shaping the future of business and society.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-brand-gray-medium">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center flex-wrap gap-2 md:gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-brand-blue text-white shadow'
                    : 'bg-brand-gray-light text-brand-gray-dark hover:bg-brand-gray-medium'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <AnimatedSection>
        <section className="py-16 md:py-24 bg-brand-gray-light">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map(article => (
                <ArticleCard key={article.slug} article={article} onSelectArticle={onSelectArticle} />
              ))}
            </div>
            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-display font-semibold text-brand-blue-dark">No Articles Found</h3>
                <p className="mt-2 text-brand-gray-dark">There are no articles in this category yet. Please check back later.</p>
              </div>
            )}
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default InsightsPage;
