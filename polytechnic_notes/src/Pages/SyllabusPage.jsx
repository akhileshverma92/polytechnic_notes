import React, { useState } from 'react';
import { Menu, X, Book } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Browse Notes', href: 'download' },
    { label: 'Upload', href: 'upload' },
    { label: 'Syllabus', href: 'syllabus' },
  ];

  const comingSoon = true; // Toggle this to show "Coming Soon" for all pages.

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center" onClick={() => window.location.href = '/'}>
              <Book className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">PolyNotes</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Page Content */}
      <main className="pt-20">
        {comingSoon ? (
          <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
            <h1 className="text-4xl font-bold text-blue-600">Feature Coming Soon!</h1>
            <p className="text-gray-600 text-lg mt-4">
              We’re working hard to bring you this feature. Stay tuned for updates!
            </p>
            <button
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              onClick={() => window.location.href = '/'}
            >
              Go Back to Home
            </button>
          </div>
        ) : (
          <div className="container mx-auto px-4">
            {/* Actual page content can be added here */}
          </div>
        )}
      </main>
    </div>
  );
};

export default Header;
