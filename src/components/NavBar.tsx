import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [showServices, setShowServices] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const contactButtonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    if (servicesButtonRef.current) {
      servicesButtonRef.current.setAttribute('aria-expanded', showServices ? 'true' : 'false');
    }
  }, [showServices]);
  
  useEffect(() => {
    if (contactButtonRef.current) {
      contactButtonRef.current.setAttribute('aria-expanded', showContact ? 'true' : 'false');
    }
  }, [showContact]);
  
  return (
    <nav className="flex justify-center items-center p-4 bg-white shadow-sm">
      <div className="max-w-6xl w-full flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-purple-600">퍼즐핏</Link>
        <div className="flex space-x-6">
          <Link to="/" className="px-4 py-2 text-gray-700 hover:text-purple-600">Home</Link>
          <Link to="/about" className="px-4 py-2 text-gray-700 hover:text-purple-600">About</Link>
          
          {/* 서비스 드롭다운 */}
          <div className="relative">
            <button 
              ref={servicesButtonRef}
              className="px-4 py-2 text-gray-700 hover:text-purple-600 flex items-center"
              onClick={() => setShowServices(!showServices)}
              aria-expanded="false"
              aria-haspopup="true"
            >
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showServices && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <Link 
                  to="/intro" 
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-100"
                  onClick={() => setShowServices(false)}
                >
                  ADHD 자가진단
                </Link>
              </div>
            )}
          </div>
          
          {/* Contact 드롭다운 */}
          <div className="relative">
            <button 
              ref={contactButtonRef}
              className="px-4 py-2 text-gray-700 hover:text-purple-600 flex items-center"
              onClick={() => setShowContact(!showContact)}
              aria-expanded="false"
              aria-haspopup="true"
            >
              Contact
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showContact && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <Link 
                  to="/contact" 
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-100"
                  onClick={() => setShowContact(false)}
                >
                  일반 문의
                </Link>
                <Link 
                  to="/education-inquiry" 
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-100"
                  onClick={() => setShowContact(false)}
                >
                  교육 문의
                </Link>
                <Link 
                  to="/corporate-inquiry" 
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-100"
                  onClick={() => setShowContact(false)}
                >
                  기업 문의
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 