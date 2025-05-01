import { useState } from 'react';
import { projectsData } from '../data/projects';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on that demonstrate my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <div 
              key={project.title}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${
                activeProject === index ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              <div 
                className={`${
                  activeProject === index 
                    ? 'flex flex-col md:flex-row' 
                    : 'cursor-pointer'
                }`}
                onClick={() => activeProject !== index && toggleProject(index)}
              >
                <div 
                  className={`${
                    activeProject === index 
                      ? 'md:w-1/2 lg:w-1/3' 
                      : 'h-48'
                  }`}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={`w-full h-full object-cover ${
                      activeProject !== index ? 'transition-transform duration-500 hover:scale-105' : ''
                    }`}
                  />
                </div>
                
                <div className={`p-6 ${activeProject === index ? 'md:w-1/2 lg:w-2/3' : ''}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map(tag => (
                          <span 
                            key={tag}
                            className="text-xs font-medium px-2 py-1 rounded-full"
                            style={{
                              backgroundColor: tag === 'Spring Boot' ? '#6db33f20' : 
                                             tag === 'Java' ? '#f8981d20' : 
                                             tag === 'Cybersecurity' ? '#ff494920' : 
                                             tag === 'ML' ? '#38bdf820' : '#8b5cf620',
                              color: tag === 'Spring Boot' ? '#6db33f' : 
                                     tag === 'Java' ? '#f8981d' : 
                                     tag === 'Cybersecurity' ? '#ff4949' : 
                                     tag === 'ML' ? '#38bdf8' : '#8b5cf6',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                    </div>
                    
                    {activeProject === index && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleProject(index);
                        }}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                  
                  <p className={`text-gray-600 ${activeProject !== index ? 'line-clamp-2' : ''}`}>
                    {project.description}
                  </p>
                  
                  {activeProject === index && (
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-800 mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                      
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
                        >
                          View Project <ExternalLink size={16} className="ml-1" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;