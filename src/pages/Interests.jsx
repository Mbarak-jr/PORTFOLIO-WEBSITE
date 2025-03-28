import React, { useState } from 'react';
import { 
  Code, 
  ShieldCheck, 
  Brain, 
  Cloud 
} from 'lucide-react';

function Interests() {
  const [activeInterest, setActiveInterest] = useState(null);

  const interestAreas = [
    {
      icon: Code,
      title: "Web Development",
      description: "Passionate about modern frameworks like React, Next.js, and Django. I love creating responsive, efficient, and user-friendly web applications that solve real-world problems.",
      skills: ["React", "Next.js", "Django", "Tailwind CSS", "Node.js"]
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity",
      description: "Dedicated to ethical hacking, penetration testing, and securing web applications. I'm committed to identifying vulnerabilities and implementing robust security measures.",
      skills: ["Ethical Hacking", "Penetration Testing", "Network Security", "OWASP Guidelines"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Exploring cutting-edge AI-driven applications, with a focus on practical implementations in fraud detection, automation, and intelligent system design.",
      skills: ["Machine Learning", "Neural Networks", "Data Analysis", "Predictive Modeling"]
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Experienced in cloud infrastructure and scalable application deployment. I leverage cloud technologies to build robust, flexible, and efficient system architectures.",
      skills: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Serverless Architecture"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center py-16 px-6">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          My Professional Interests
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {interestAreas.map((interest, index) => {
            const IconComponent = interest.icon;
            const isActive = activeInterest === index;
            
            return (
              <div 
                key={index}
                className={`
                  transform transition-all duration-300 ease-in-out
                  border-2 border-transparent rounded-xl p-6 
                  ${isActive 
                    ? 'bg-gray-700 scale-105 border-blue-500 shadow-2xl' 
                    : 'bg-gray-800 hover:bg-gray-700 hover:scale-105 hover:border-blue-500'}
                  cursor-pointer
                `}
                onClick={() => setActiveInterest(activeInterest === index ? null : index)}
              >
                <div className="flex items-center mb-4">
                  <IconComponent 
                    className={`
                      w-12 h-12 mr-4 
                      ${isActive ? 'text-blue-400' : 'text-gray-400'}
                      transition-colors duration-300
                    `} 
                  />
                  <h2 className="text-2xl font-semibold">{interest.title}</h2>
                </div>
                
                {isActive && (
                  <div className="space-y-4 mt-4">
                    <p className="text-gray-300">{interest.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {interest.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Interests;