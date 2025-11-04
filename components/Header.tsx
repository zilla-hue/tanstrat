
import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { SearchIcon } from './icons/InterfaceIcons';

interface HeaderProps {
  currentPage: Page;
  navigate: (page: Page) => void;
  onSearchClick: () => void;
}

const Logo = () => (
  <div className="text-2xl font-display font-bold text-brand-blue-dark tracking-wide">
    Tanstrat<span className="text-brand-teal">.</span>
  </div>
);

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  navigate: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, navigate, children }) => (
  <button
    onClick={() => navigate(page)}
    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group ${
      currentPage === page
        ? 'text-brand-blue'
        : 'text-brand-blue-dark hover:text-brand-blue'
    }`}
  >
    <span>{children}</span>
    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${currentPage === page ? 'scale-x-100' : ''}`}></span>
  </button>
);

const Header: React.FC<HeaderProps> = ({ currentPage, navigate, onSearchClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { page: Page.Home, label: 'Home' },
    { page: Page.About, label: 'About Us' },
    { page: Page.Services, label: 'Services' },
    { page: Page.Insights, label: 'Insights' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-200' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => navigate(Page.Home)}>
            <Logo />
          </button>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-2">
              {navItems.map((item) => (
                <NavLink key={item.page} page={item.page} currentPage={currentPage} navigate={navigate}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="flex items-center ml-4">
              <button
                onClick={onSearchClick}
                className="p-2 rounded-full text-brand-blue-dark hover:bg-brand-gray-light transition-colors"
                aria-label="Search"
              >
                <SearchIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate(Page.Contact)}
                className="ml-2 px-5 py-2 border-2 border-brand-teal text-brand-teal text-sm font-medium rounded-full hover:bg-brand-teal hover:text-white transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Mobile Nav Controls */}
          <div className="md:hidden flex items-center space-x-2">
             <button
              onClick={onSearchClick}
              className="p-2 rounded-full text-brand-blue-dark hover:bg-brand-gray-light transition-colors"
              aria-label="Search"
            >
              <SearchIcon className="w-6 h-6" />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-blue-dark">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-2 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    navigate(item.page);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-4 py-2 rounded-md text-base font-medium text-left ${
                    currentPage === item.page ? 'bg-brand-gray-light text-brand-blue' : 'text-brand-blue-dark hover:bg-brand-gray-light'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  navigate(Page.Contact);
                  setIsMenuOpen(false);
                }}
                className="mt-2 w-full px-5 py-2 bg-brand-teal text-white text-sm font-medium rounded-full shadow-md hover:bg-opacity-90 transition"
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
