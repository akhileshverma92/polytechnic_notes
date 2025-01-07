import React, { useState } from 'react';
import sampleData from '../Data/notes.json';
import { Download } from 'lucide-react';

function DownloadPage() {
  const [selectedBranch, setSelectedBranch] = useState("all");
  const [selectedSemester, setSelectedSemester] = useState("all");

  const branches = ["all", "Information Technology", "Electronics", "Mechanical", "Computer", "Civil"];
  const semesters = ["all", "1", "2", "3", "4", "5", "6"];

  const filteredNotes = sampleData.filter((note) => {
    const branchMatch =
      selectedBranch === "all" ||
      note.branch.toLowerCase() === selectedBranch.toLowerCase();
    const semesterMatch =
      selectedSemester === "all" ||
      note.semester.toString() === selectedSemester;

    return branchMatch && semesterMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative pt-20 px-6 pb-12">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 animate-fade-in">
          Browse Study Materials
        </h2>

        <div className="flex flex-wrap gap-4 mb-8">
          {/* Branch Filter */}
          <div className="relative">
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="appearance-none px-6 py-3 rounded-xl bg-white/40 backdrop-blur-lg border border-white/20 shadow-lg 
                         text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
                         hover:bg-white/50 transition-all duration-300"
            >
              {branches.map((branch) => (
                <option key={branch} value={branch}>
                  {branch === "all" ? "All Branches" : `${branch} Engineering`}
                </option>
              ))}
            </select>
          </div>

          {/* Semester Filter */}
          <div className="relative">
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="appearance-none px-6 py-3 rounded-xl bg-white/40 backdrop-blur-lg border border-white/20 shadow-lg 
                         text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
                         hover:bg-white/50 transition-all duration-300"
            >
              {semesters.map((semester) => (
                <option key={semester} value={semester}>
                  {semester === "all" ? "All Semesters" : `Semester ${semester}`}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note, index) => (
            <div
              key={note.id}
              className="group relative animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-xl
                            hover:shadow-2xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {note.title}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-gray-600 text-sm flex items-center">
                        <span className="w-20">Branch:</span>
                        <span className="font-medium text-gray-800">{note.branch} Engineering</span>
                      </p>
                      <p className="text-gray-600 text-sm flex items-center">
                        <span className="w-20">Semester:</span>
                        <span className="font-medium text-gray-800">{note.semester}</span>
                      </p>
                      <p className="text-gray-600 text-sm flex items-center">
                        <span className="w-20">Author:</span>
                        <span className="font-medium text-gray-800">{note.contributor || "Unknown"}</span>
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => window.open(note.link, "_blank")}
                    className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg
                               hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300
                               focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                  >
                    <Download className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;
