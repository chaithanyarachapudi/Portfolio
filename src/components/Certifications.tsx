import { Badge } from 'lucide-react';
import { certificationsData } from '../data/certifications';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificationsData.map((cert, index) => (
            <div 
              key={cert.title}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="h-4" style={{ backgroundColor: cert.color }}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full" 
                       style={{ backgroundColor: `${cert.color}20` }}>
                    <Badge className="text-purple-600" size={20} />
                  </div>
                  {cert.logo && (
                    <img src={cert.logo} alt={`${cert.issuer} logo`} className="h-8" />
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{cert.title}</h3>
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">Issuer:</span> {cert.issuer}
                </p>
                
                {cert.issued && (
                  <p className="text-sm text-gray-500 mb-4">
                    <span className="font-medium">Issued:</span> {cert.issued}
                    {cert.expires && ` • Expires: ${cert.expires}`}
                  </p>
                )}
                
                {cert.credential && (
                  <a 
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    View Credential
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;