import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Mail, Shield, FileText, Scale, Home } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-xl">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="ml-3 text-xl font-bold">AI Personal Assistant</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your intelligent companion for seamless calendar management and productivity optimization. 
              Powered by advanced AI to help you make the most of every day.
            </p>
            <div className="flex items-center text-gray-300">
              <Mail className="h-4 w-4 mr-2" />
              <span>support@aipersonalassistant.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <Home className="h-4 w-4 mr-1" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <Shield className="h-4 w-4 mr-1" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <FileText className="h-4 w-4 mr-1" />
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/legal"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <Scale className="h-4 w-4 mr-1" />
                  Legal & Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className='md:block hidden'>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Google Calendar Integration</li>
              <li>AI-Powered Scheduling</li>
              <li>Smart Task Management</li>
              <li>Productivity Analytics</li>
              <li>Voice Assistant</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} AI Personal Assistant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;