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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20 px-6 pb-12 relative">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-2xl mx-auto relative">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 animate-fade-in">
          Share Your Notes
        </h1>

        {/* WhatsApp Section */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur opacity-75" />
            <div className="relative p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-xl">
              <p className="text-gray-700 mb-4">Want to share your notes? Click below to open WhatsApp:</p>
              <button
                onClick={handleWhatsAppShare}
                className="w-full font-semibold py-3 px-6 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 
                         text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] 
                         transition-all duration-300"
              >
                Share via WhatsApp
              </button>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-8" />

        {/* Email Form Section */}
        <form onSubmit={handleEmailShare} className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-75" />
            <div className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-xl">
              <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                Share via Email
              </h2>
              
              <div className="space-y-6">
                {/* Form Fields */}
                {[
                  {
                    label: "Subject Name",
                    name: "subjectName",
                    type: "text",
                    placeholder: "Enter subject name"
                  },
                  {
                    label: "Branch",
                    name: "branch",
                    type: "select",
                    options: [
                      "Computer",
                      "Electronics",
                      "Mechanical",
                      "Civil"
                    ].map(branch => ({ value: branch, label: `${branch} Engineering` }))
                  },
                  {
                    label: "Semester",
                    name: "semester",
                    type: "select",
                    options: Array.from({ length: 8 }, (_, i) => ({
                      value: String(i + 1),
                      label: `Semester ${i + 1}`
                    }))
                  },
                  {
                    label: "Uploaded By",
                    name: "uploadedBy",
                    type: "text",
                    placeholder: "Enter your name"
                  },
                  {
                    label: "Google Drive Link",
                    name: "driveLink",
                    type: "url",
                    placeholder: "Enter Google Drive link"
                  }
                ].map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <select
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 
                                 shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent
                                 hover:bg-white/70 transition-all duration-300"
                      >
                        {field.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 
                                 shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent
                                 hover:bg-white/70 transition-all duration-300"
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-semibold py-3 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 
                           text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] 
                           transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Opening email...' : 'Share via Email'}
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Status Message */}
        {message && (
          <div className="mt-6 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-xl blur" />
              <div className="relative p-4 bg-white/60 backdrop-blur-xl border border-white/20 rounded-xl text-green-700 text-center">
                {message}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Upload;
