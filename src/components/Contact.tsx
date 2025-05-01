import { Mail, Github as GitHub, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Feel free to reach out if you have any questions, opportunities, or just want to say hello!
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              <p className="text-gray-600">
                I'm currently open to new opportunities and collaborations. Let's connect!
              </p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="mailto:2200031300cseh@gmail.com" 
                className="flex items-center text-gray-700 hover:text-purple-600 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <Mail className="text-purple-600" size={18} />
                </div>
                <span>2200031300cseh@gmail.com</span>
              </a>
              
              <a 
                href="https://github.com/chaithanyarachapudi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-purple-600 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <GitHub className="text-purple-600" size={18} />
                </div>
                <span>github.com/chaithanyarachapudi</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/chaithanya-lakshmi-rachapudi2475/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-purple-600 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <Linkedin className="text-purple-600" size={18} />
                </div>
                <span>linkedin.com/in/chaithanya</span>
              </a>
            </div>
            
            <div className="pt-6">
              <a 
                href="https://drive.google.com/file/d/1e5e_XM_lrOoXr8h1mUNAf-FyErPBezox/view?usp=drive_link" 
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact