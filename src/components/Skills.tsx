import { useState, useEffect, useRef } from 'react';
import { skillsData } from '../data/skills';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const getDelayStyle = (index: number) => ({
    animationDelay: `${0.1 + index * 0.05}s`,
  });

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            I've developed expertise in various technologies and tools throughout my journey.
          </p>
        </div>

        <div 
          ref={skillsRef} 
          className="max-w-5xl mx-auto"
        >
          {skillsData.map((category, categoryIndex) => (
            <div 
              key={category.name}
              className={`mb-12 ${isVisible ? 'animate-fade-up opacity-0' : 'opacity-0'}`}
              style={getDelayStyle(categoryIndex)}
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                <category.icon className="mr-2 text-purple-600" size={20} />
                {category.name}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-gray-800">{skill.name}</h4>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${isVisible ? 'animate-grow-width' : 'w-0'}`} 
                        style={{
                          backgroundColor: skill.color || '#8B5CF6',
                          width: isVisible ? `${skill.level}%` : '0%',
                          animationDelay: `${0.3 + skillIndex * 0.1}s`,
                          animationDuration: '1.5s',
                          animationFillMode: 'forwards'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto italic">
            "In the realm of technology, learning is a continuous journey. I'm always exploring new tools and expanding my skillset."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;