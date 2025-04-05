import React from 'react';
import { 
  GraduationCap, 
  Award, 
  CloudDownload,
  Shield,
  Brain,
  Database,
  Cloud
} from 'lucide-react';

function Education() {
  const certifications = [
    {
      title: "IBM Cybersecurity Analyst Professional Certificate",
      issuer: "IBM",
      icon: Shield
    },
    {
      title: "AI for Everyone",
      issuer: "Coursera (Andrew Ng)",
      icon: Brain
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      icon: Database
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      icon: Cloud
    }
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = "https://drive.google.com/uc?export=download&id=1wraUWn8USPgAZve4IHjB7kuQOx2zgwgm";
    link.setAttribute('download', 'Your_Name_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Education & Certifications
        </h1>

        {/* Academic Qualification */}
        <div className="bg-gray-800 rounded-xl shadow-2xl p-8 mb-12 border border-gray-700 hover:border-blue-500 transition-all duration-300">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="w-16 h-16 text-blue-400 mr-4" />
            <h2 className="text-3xl font-semibold text-blue-300">Academic Qualification</h2>
          </div>
          <div className="text-center text-gray-300">
            <p className="text-xl mb-2">
              <strong className="text-blue-400">Bachelor of Science in Mathematics</strong>
            </p>
            <p className="text-lg mb-2">
              Jomo Kenyatta University of Agriculture and Technology (JKUAT)
            </p>
            <p className="text-md text-gray-500">
              Graduated: 2021
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <Award className="w-12 h-12 text-blue-400 mr-4" />
            <h2 className="text-3xl font-semibold text-blue-300">Professional Certifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const CertIcon = cert.icon;
              return (
                <div 
                  key={index} 
                  className="bg-gray-800 rounded-xl p-6 flex items-center border border-gray-700 hover:border-blue-500 hover:scale-105 transition-all duration-300"
                >
                  <CertIcon className="w-12 h-12 text-blue-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-blue-300 mb-1">{cert.title}</h3>
                    <p className="text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CV Download - Now with direct download functionality */}
        <div className="flex justify-center">
          <button
            onClick={handleDownloadCV}
            className="
              flex items-center justify-center
              bg-blue-600 hover:bg-blue-700 
              text-white font-bold py-3 px-8 
              rounded-full 
              transition-all duration-300 
              transform hover:-translate-y-1 
              shadow-lg hover:shadow-xl
            "
          >
            <CloudDownload className="mr-3 w-6 h-6" />
            Download My CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default Education;