import React, { useState } from 'react';
import { 
  Code, 
  CreditCard, 
  MessageCircle, 
  Film, 
  Car, 
  Github, 
  ExternalLink,
  BookText,
  ShoppingCart
} from 'lucide-react';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Blog Wave App",
      description: "A modern blogging platform with rich text editing, user authentication, and real-time updates. Features include markdown support, tags, and responsive design.",
      technologies: ["Next.js", "Tailwind CSS", "Firebase", "React Markdown"],
      icon: BookText,
      githubLink: "https://github.com/your-username/blog-wave-app",
      liveLink: "https://blog-wave-app.vercel.app/"
    },
    {
      title: "Kenya Farmers Ecommerce Platform",
      description: "An e-commerce platform connecting Kenyan farmers directly with consumers. Includes product listings, shopping cart, payment integration, and farmer profiles.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      icon: ShoppingCart,
      githubLink: "https://github.com/your-username/kenya-farmers-ecommerce",
      liveLink: "https://kenya-farmers-ecommerce-platform.vercel.app/"
    },
    {
      title: "Movie Explorer App",
      description: "An interactive web application for movie enthusiasts to browse, search, and discover movies with detailed information and recommendations.",
      technologies: ["React", "The Movie Database API", "Redux"],
      icon: Film,
      githubLink: "https://github.com/your-username/movie-explorer",
      liveLink: "https://github.com/Mbarak-jr"
    },
    {
      title: "Income & Expense Tracker Web App",
      description: "A comprehensive full-stack web application designed to help users track their financial transactions in real-time with advanced reporting and visualization features.",
      technologies: ["Django", "PostgreSQL", "React", "Tailwind CSS"],
      icon: CreditCard,
      githubLink: "https://github.com/your-username/income-expense-tracker",
      liveLink: "https://github.com/Mbarak-jr"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          My Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;
            const isActive = activeProject === index;

            return (
              <div 
                key={index}
                className={`
                  relative
                  bg-gray-800 rounded-xl border 
                  ${isActive 
                    ? 'border-blue-500 shadow-2xl scale-105' 
                    : 'border-gray-700 hover:border-blue-500'}
                  overflow-hidden
                  transition-all duration-300
                  cursor-pointer
                `}
                onClick={() => setActiveProject(activeProject === index ? null : index)}
              >
                {/* Project Header */}
                <div className="flex items-center p-6 pb-0">
                  <ProjectIcon className={`
                    w-12 h-12 mr-4
                    ${isActive ? 'text-blue-400' : 'text-gray-400'}
                    transition-colors duration-300
                  `} />
                  <h2 className={`
                    text-2xl font-semibold
                    ${isActive ? 'text-blue-300' : 'text-gray-300'}
                    transition-colors duration-300
                  `}>
                    {project.title}
                  </h2>
                </div>

                {/* Project Details */}
                {isActive && (
                  <div className="p-6 pt-4">
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-4">
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex items-center 
                          bg-gray-700 hover:bg-gray-600 
                          text-white 
                          px-4 py-2 
                          rounded-lg 
                          transition-colors
                        "
                      >
                        <Github className="mr-2 w-5 h-5" /> GitHub
                      </a>
                      {project.liveLink !== "#" && (
                        <a 
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex items-center 
                            bg-blue-600 hover:bg-blue-700 
                            text-white 
                            px-4 py-2 
                            rounded-lg 
                            transition-colors
                          "
                        >
                          <ExternalLink className="mr-2 w-5 h-5" /> Live Demo
                        </a>
                      )}
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

export default Projects;