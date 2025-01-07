import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload, Download, ChevronRight } from 'lucide-react';
import recentNotes from '../Data/notes.json';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter notes based on the search query and limit to 4 items
  const filteredNotes = recentNotes
    .filter(
      (note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.subject.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 4); // Limit to 4 notes

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-24">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Welcome to <span className="text-indigo-600">PolyNotes Hub</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Share and discover quality study materials with fellow polytechnic students
          </p>
        </div>
        <div className="flex justify-center mt-6 rounded-lg  w-auto">
          <img
            src='/hero icon.jpg' alt="Illustration"
            className="w-60 h-auto rounded-[20%]"
          />
        </div>
        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
          <Link
            to="/upload"
            className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 group"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors duration-300">
                <Upload className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Contribute Notes</h3>
                <p className="text-gray-600">Share your study materials</p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400 ml-auto transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>

          <Link
            to="/download"
            className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 group"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-indigo-100 rounded-xl group-hover:bg-indigo-200 transition-colors duration-300">
                <Download className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Browse Notes</h3>
                <p className="text-gray-600">Find study materials</p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400 ml-auto transform group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>
        </div>

        {/* Recent Notes Section */}
       
      </div>
    </div>
  );
};

export default Home;
