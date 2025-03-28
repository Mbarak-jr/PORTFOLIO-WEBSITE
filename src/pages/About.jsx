import React from 'react';
import { 
  Code, 
  Database, 
  Shield, 
  GraduationCap, 
  Briefcase, 
  Award 
} from 'lucide-react';

function About() {
  const professionalSkills = [
    {
      icon: Code,
      title: "Software Development",
      description: "Full-stack development with expertise in modern web technologies and programming languages."
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Advanced data science skills, transforming complex data into actionable insights."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Specialized in secure application development and system protection strategies."
    }
  ];

  const educationAchievements = [
    {
      icon: GraduationCap,
      title: "Education",
      detail: "Mathematics Degree",
      institution: "Jomo Kenyatta University of Agriculture and Technology"
    },
    {
      icon: Award,
      title: "Key Strengths",
      detail: "Programming, DevOps, Secure Development"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          About Mohammed Mbarak Hassan
        </h1>

        <div className="bg-gray-800 rounded-xl shadow-2xl p-8 mb-12">
          <p className="text-lg text-center text-gray-300 mb-6">
            I am <strong className="text-blue-400">Mohammed Mbarak Hassan</strong>, a multifaceted professional 
            combining expertise in <strong className="text-blue-400">Data Analysis</strong>, <strong className="text-blue-400">Software Development</strong>, 
            and <strong className="text-blue-400">Cybersecurity</strong>. My academic foundation in 
            <strong className="text-blue-400"> Mathematics</strong> from Jomo Kenyatta University of Agriculture 
            and Technology has been instrumental in shaping my analytical and technical prowess.
          </p>
          <p className="text-lg text-center text-gray-300">
            My professional journey is driven by a passion for innovation—transforming complex data into 
            meaningful insights, developing scalable applications, and implementing robust security solutions. 
            I thrive on challenges that require creative problem-solving and cutting-edge technological approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {professionalSkills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center transform transition-all hover:scale-105 hover:border-blue-500"
            >
              <div className="flex justify-center mb-4">
                <skill.icon className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-300">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationAchievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 flex items-start space-x-4"
            >
              <div>
                <achievement.icon className="w-10 h-10 text-blue-400 mr-4" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-2">{achievement.title}</h3>
                <p className="text-gray-400 font-medium">{achievement.detail}</p>
                {achievement.institution && (
                  <p className="text-gray-500 text-sm mt-1">{achievement.institution}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;