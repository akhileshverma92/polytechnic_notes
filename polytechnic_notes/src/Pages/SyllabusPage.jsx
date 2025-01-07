import React, { useState } from 'react';
import { Menu, X, Book, Download, Monitor, Cpu, Bookmark, Settings } from 'lucide-react';

const SyllabusPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Browse Notes', href: 'download' },
    { label: 'Upload', href: 'upload' },
    { label: 'Syllabus', href: 'syllabus' },
  ];

  const branches = [
    {
      name: "Information Technology",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
      link: "https://drive.google.com/file/d/19hlqY2Iur5ifvaI0IZkuMLxKcBa6EmM7/view?usp=sharing"
    },
    {
      name: "Electronics Engineering",
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
      link:"https://drive.google.com/file/d/1hBZyzy1sNLQj4hGtaYtOZ7q4mph1pHaL/view?usp=sharing"
    },
    {
      name: "Texttile Technology",
      icon: Bookmark,
      color: "from-amber-500 to-orange-500",
      link: "https://drive.google.com/file/d/1L3C1G7fmBO9-YSqV1wPY8OuTCEQzY5B5/view?usp=sharing"
    },
    {
      name: "Chemical Engineering",
      icon: Settings,
      color: "from-green-500 to-emerald-500",
      link:"https://drive.google.com/file/d/1xVr-QJUolFqvT_rC-BWIRCz9PNOL-hHI/view?usp=sharing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <header className="fixed w-full top-0 z-50">
        <div className="bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div 
                className="flex items-center cursor-pointer group"
                onClick={() => window.location.href = '/'}
              >
                <Book className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  PolyNotes
                </span>
              </div>

              <nav className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <button
                className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {isMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-100">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
              Course Syllabus
            </h1>
            <p className="text-gray-600 text-lg">
              Download syllabus for each engineering branch
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {branches.map((branch, index) => {
              const Icon = branch.icon;
              return (
                <div 
                  key={branch.name}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${branch.color} rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300`} />
                    <div className="relative p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${branch.color}`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <h2 className="text-xl font-semibold text-gray-800">
                            {branch.name}
                          </h2>
                        </div>
                        <button 
                          className="flex flex-col items-center space-x-2 px-4 py-2 rounded-lg bg-white/80 hover:bg-white/90 border border-white/20 transition-all duration-300"
                         
                        >
                           <a href={branch.link} target='_blank' ><Download className="h-5 w-5 text-gray-600" />
                           <span className="text-gray-600">Download</span></a>
                        </button>
                       
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SyllabusPage;
