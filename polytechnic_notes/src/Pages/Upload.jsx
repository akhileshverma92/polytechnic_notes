import React, { useState } from 'react';

function Upload() {
  const [formData, setFormData] = useState({
    subjectName: '',
    branch: 'Computer',
    semester: '1',
    uploadedBy: '',
    driveLink: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const WHATSAPP_NUMBER = "+917839972926";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleWhatsAppShare = () => {
    const whatsappText = "I want to share my notes with you!";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`, '_blank');
  };

  const handleEmailShare = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailSubject = `New Notes Upload - ${formData.subjectName}`;
    const emailBody = `
Subject Name: ${formData.subjectName}
Branch: ${formData.branch} Engineering
Semester: ${formData.semester}
Uploaded By: ${formData.uploadedBy}
Drive Link: ${formData.driveLink}`;

    const mailtoLink = `mailto:akkyyyp@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    setMessage('Opening email client...');
    setIsSubmitting(false);
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="main mt-20">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Upload Notes</h1>

        {/* WhatsApp Button */}
        <div className="mb-8">
          <p className="text-gray-600 mb-4">Want to share your notes? Click below to open WhatsApp:</p>
          <button
            onClick={handleWhatsAppShare}
            className="w-full font-semibold py-3 px-6 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-all duration-300"
          >
            Share via WhatsApp
          </button>
        </div>

        <div className="border-t border-gray-200 my-8"></div>

        {/* Email Form Section */}
        <form onSubmit={handleEmailShare} className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Share via Email</h2>
          
          {/* Subject Name */}
          <div>
            <label htmlFor="subjectName" className="block text-sm font-medium text-gray-700 mb-2">
              Subject Name
            </label>
            <input
              type="text"
              id="subjectName"
              name="subjectName"
              value={formData.subjectName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter subject name"
            />
          </div>

          {/* Branch Selection */}
          <div>
            <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-2">
              Branch
            </label>
            <select
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            >
              <option value="Computer">Computer Engineering</option>
              <option value="Electronics">Electronics Engineering</option>
              <option value="Mechanical">Mechanical Engineering</option>
              <option value="Civil">Civil Engineering</option>
            </select>
          </div>

          {/* Semester Selection */}
          <div>
            <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-2">
              Semester
            </label>
            <select
              id="semester"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <option key={sem} value={sem}>
                  Semester {sem}
                </option>
              ))}
            </select>
          </div>

          {/* Uploaded By */}
          <div>
            <label htmlFor="uploadedBy" className="block text-sm font-medium text-gray-700 mb-2">
              Uploaded By
            </label>
            <input
              type="text"
              id="uploadedBy"
              name="uploadedBy"
              value={formData.uploadedBy}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Drive Link */}
          <div>
            <label htmlFor="driveLink" className="block text-sm font-medium text-gray-700 mb-2">
              Google Drive Link
            </label>
            <input
              type="url"
              id="driveLink"
              name="driveLink"
              value={formData.driveLink}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Google Drive link"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full font-semibold py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? 'Opening email...' : 'Share via Email'}
          </button>

          {/* Status Message */}
          {message && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center">
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Upload;