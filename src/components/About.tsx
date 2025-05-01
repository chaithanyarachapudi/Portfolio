import { GraduationCap, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            I'm a passionate cybersecurity professional and web developer with a strong foundation in computer science and a dedication to creating secure digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Education */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-purple-100 rounded-lg mb-6 flex items-center justify-center">
              <GraduationCap className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Education</h3>
            <div className="space-y-3 text-gray-600">
              <p className="font-medium">B.Tech in Computer Science</p>
              <p>K L University</p>
              <p className="flex items-center">
                <span className="font-semibold mr-2">CGPA:</span>
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-md text-sm">9.38</span>
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-teal-100 rounded-lg mb-6 flex items-center justify-center">
              <Award className="text-teal-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Certifications</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Red Hat Certified Developer</li>
              <li>Salesforce AI Associate</li>
              <li>Ethical Hacking</li>
            </ul>
          </div>

          {/* Interests */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-pink-100 rounded-lg mb-6 flex items-center justify-center">
              <Heart className="text-pink-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Interests</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Cybersecurity</li>
              <li>Frontend Development</li>
              <li>Java & Spring Boot</li>
              <li>C Programming</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">My Journey</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            I'm Chaithanya Lakshmi Rachapudi, a cybersecurity enthusiast and certified web developer. With a strong academic background in Computer Science from K L University, I've cultivated a deep understanding of both front-end and back-end technologies.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            My passion lies at the intersection of secure development and creative problem-solving. I specialize in developing robust web applications while ensuring they adhere to the highest security standards. My experience with various programming languages and frameworks allows me to approach challenges from multiple perspectives.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When I'm not coding or exploring the latest cybersecurity trends, I enjoy contributing to open-source projects and continuously expanding my knowledge through certifications and professional development opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;