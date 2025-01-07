import React, { useState } from 'react';
import sampleData from '../Data/notes.json';

function DownloadPage() {
  const [selectedBranch, setSelectedBranch] = useState("all");
  const [selectedSemester, setSelectedSemester] = useState("all");

  const branches = ["all", "Information Technology", "Electronics", "Mechanical", "Computer", "Civil"];
  const semesters = ["all", "1", "2", "3", "4", "5", "6"];

  // Filtered Notes Data
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
    <div className="main mt-20 min-h-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Notes</h2>
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Branch Filter */}
        <select
          value={selectedBranch}
          onChange={(e) => setSelectedBranch(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
        >
          {branches.map((branch) => (
            <option key={branch} value={branch}>
              {branch === "all" ? "All Branches" : `${branch} Engineering`}
            </option>
          ))}
        </select>

        {/* Semester Filter */}
        <select
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
        >
          {semesters.map((semester) => (
            <option key={semester} value={semester}>
              {semester === "all" ? "All Semesters" : `Semester ${semester}`}
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            className="bg-gray-200  hover:bg-gray-300 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            {/* Card Header */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-lg text-gray-800">{note.title}</h3>
                <p className="text-gray-600 text-sm mt-1">Branch: {note.branch} Engineering</p>
                <p className="text-gray-600 text-sm">Semester: {note.semester}</p>
                <p className="text-gray-600 text-sm">Contributed by: <span className="font-medium text-gray-800">{note.contributor || "Unknown"}</span></p>
              </div>
              {/* Download Icon */}
              <button
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 focus:ring-2 focus:ring-blue-400"
                onClick={() => window.open(note.link, "_blank")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v13m0 0l-4-4m4 4l4-4m6 6v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2"
                  />
                </svg>
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DownloadPage;
