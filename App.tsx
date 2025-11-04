
import React, { useState, useCallback } from 'react';
import { Page, Article } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import InsightsPage from './pages/InsightsPage';
import ContactPage from './pages/ContactPage';
import InsightDetailPage from './pages/InsightDetailPage';
import SearchOverlay from './components/SearchOverlay';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigate = useCallback((page: Page) => {
    setCurrentPage(page);
    setSelectedArticle(null); // Clear selected article when changing main pages
    window.scrollTo(0, 0);
  }, []);
  
  const handleSelectArticle = useCallback((article: Article) => {
    setSelectedArticle(article);
    setCurrentPage(Page.Insights); // Set nav context to Insights
    window.scrollTo(0, 0);
  }, []);

  const handleBackToInsights = useCallback(() => {
    setSelectedArticle(null);
    setCurrentPage(Page.Insights);
  }, []);

  const openSearch = useCallback(() => setIsSearchOpen(true), []);
  const closeSearch = useCallback(() => setIsSearchOpen(false), []);

  const renderPage = () => {
    if (selectedArticle) {
      return <InsightDetailPage article={selectedArticle} onBack={handleBackToInsights} />;
    }

    switch (currentPage) {
      case Page.Home:
        return <HomePage navigate={navigate} />;
      case Page.About:
        return <AboutPage />;
      case Page.Services:
        return <ServicesPage />;
      case Page.Insights:
        return <InsightsPage onSelectArticle={handleSelectArticle} />;
      case Page.Contact:
        return <ContactPage />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-gray-light font-sans text-brand-gray-dark">
      <Header 
        currentPage={currentPage} 
        navigate={navigate}
        onSearchClick={openSearch} 
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={closeSearch} 
        onSelectArticle={(article) => {
          handleSelectArticle(article);
          closeSearch();
        }}
      />
    </div>
  );
};

export default App;