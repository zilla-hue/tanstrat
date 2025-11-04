import React, { useState, useEffect, useMemo, useRef } from 'react';
import { articles } from '../data/mockData';
import { Article } from '../types';
import { SearchIcon, CloseIcon } from './icons/InterfaceIcons';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose, onSelectArticle }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const searchResults = useMemo(() => {
    if (query.trim().length < 2) {
      return [];
    }
    const lowerCaseQuery = query.toLowerCase();
    return articles.filter(
      article =>
        article.title.toLowerCase().includes(lowerCaseQuery) ||
        article.content.toLowerCase().includes(lowerCaseQuery) ||
        article.category.toLowerCase().includes(lowerCaseQuery)
    );
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      // Reset query and focus input when opened
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 100); // Timeout for transition
    }
  }, [isOpen]);

  // Keyboard listener for Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  
  if (!isOpen) {
    return null;
  }

  const handleResultClick = (article: Article) => {
    onSelectArticle(article);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-start justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-heading"
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mt-16 max-h-[80vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="p-4 border-b border-gray-200 flex items-center gap-4">
          <SearchIcon className="w-5 h-5 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full text-lg focus:outline-none bg-transparent"
            id="search-heading"
          />
          <button onClick={onClose} className="text-gray-500 hover:text-black p-1 rounded-full hover:bg-gray-100">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Search Results */}
        <div className="overflow-y-auto">
          {query.length >= 2 && searchResults.length > 0 && (
            <ul className="divide-y divide-gray-100">
              {searchResults.map(article => (
                <li key={article.slug}>
                  <button 
                    onClick={() => handleResultClick(article)}
                    className="w-full text-left p-4 hover:bg-brand-gray-light transition-colors"
                  >
                    <h3 className="font-semibold text-brand-blue">{article.title}</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{article.excerpt}</p>
                  </button>
                </li>
              ))}
            </ul>
          )}
          {query.length >= 2 && searchResults.length === 0 && (
            <div className="p-12 text-center text-gray-500">
              <p>No results found for "{query}"</p>
            </div>
          )}
           {query.length < 2 && (
            <div className="p-12 text-center text-gray-400">
              <p>Start typing to search for articles.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
